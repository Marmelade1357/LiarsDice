// Liar's Dice - Online-Server
// Einfacher, selbst-gehosteter Mehrspieler-Server auf Basis von Express + Socket.IO
// (gleiche Bauweise wie Poker, Wizard, Uno ...: Räume mit 4-stelligem Code,
// Host, Bots, Wiederverbindung, alles im Speicher).

'use strict';

const path = require('path');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');
const E = require('./src/engine');
const bots = require('./src/bots');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// ---------------------------------------------------------------------------
// Konstanten
// ---------------------------------------------------------------------------

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 8;
const MAX_ROOMS = 500;
const ROOM_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const ROOM_CLEANUP_MS = 3 * 60 * 60 * 1000;

const BOT_NAME_POOL = [
  'Käpt\'n Bot', 'Bootsmann Bot', 'Einauge', 'Holzbein', 'Rumfass',
  'Papagei', 'Klabauter', 'Smutje',
];

// Verzögerungen - per Umgebungsvariable änderbar, damit Tests nicht in Echtzeit laufen müssen.
const BOT_DELAY_MIN = Number(process.env.BOT_DELAY_MIN_MS) || 1800;
const BOT_DELAY_MAX = Number(process.env.BOT_DELAY_MAX_MS) || 3600;
const REVEAL_MS = Number(process.env.REVEAL_MS) || 10000;      // Becher bleiben offen (Würfel werden reihum gezählt)
const ROLL_LOCK_MS = Number(process.env.ROLL_LOCK_MS) || 2200;  // Becher schütteln, bevor geboten wird
const SKIP_MIN_WAIT_MS = Number(process.env.SKIP_MIN_WAIT_MS) || 25000;
const HOST_HANDOVER_MS = Number(process.env.HOST_HANDOVER_MS) || 20000;

const DEFAULT_SETTINGS = { dice: 5, wildOnes: true, spotOn: false, turnSec: 30 };
const DICE_OPTIONS = [3, 4, 5, 6];
const TURN_OPTIONS = [0, 15, 30, 60];
// Nur für Tests: Zugzeit in ms erzwingen
const TURN_MS_OVERRIDE = Number(process.env.TURN_MS_OVERRIDE) || 0;

function randomDelay(min = BOT_DELAY_MIN, max = BOT_DELAY_MAX) { return min + Math.random() * (max - min); }
function makeId() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }

function makeRoomCode() {
  let code;
  do {
    code = '';
    for (let i = 0; i < 4; i++) code += ROOM_CODE_CHARS[Math.floor(Math.random() * ROOM_CODE_CHARS.length)];
  } while (rooms.has(code));
  return code;
}

// ---------------------------------------------------------------------------
// Rate-Limiting
// ---------------------------------------------------------------------------

function getClientIp(socket) {
  const forwarded = socket.handshake.headers['x-forwarded-for'];
  if (forwarded) return forwarded.split(',')[0].trim();
  return socket.handshake.address || 'unknown';
}

const rateLimitHits = new Map();
function isRateLimited(key, limit, windowMs) {
  const now = Date.now();
  const hits = (rateLimitHits.get(key) || []).filter((t) => now - t < windowMs);
  if (hits.length >= limit) { rateLimitHits.set(key, hits); return true; }
  hits.push(now);
  rateLimitHits.set(key, hits);
  return false;
}
setInterval(() => {
  const now = Date.now();
  for (const [key, hits] of rateLimitHits) {
    const fresh = hits.filter((t) => now - t < 10 * 60 * 1000);
    if (fresh.length) rateLimitHits.set(key, fresh); else rateLimitHits.delete(key);
  }
}, 10 * 60 * 1000).unref();

// ---------------------------------------------------------------------------
// Räume
// ---------------------------------------------------------------------------

const rooms = new Map();

function createRoom() {
  const code = makeRoomCode();
  const room = {
    code,
    hostId: null,
    players: [], // { id, token, name, socketId, connected, isBot, peeking, look }
    phase: 'lobby', // lobby | playing | gameover
    settings: Object.assign({}, DEFAULT_SETTINGS),
    game: null,
    gameNo: 0,
    placements: null,
    winnerId: null,
    events: [],
    eventSeq: 0,
    logs: [],
    rollUntil: 0,
    revealTimer: null,
    hostTimer: null,
    cleanupTimer: null,
    botTimer: null,
    turnTimer: null,
    turnKey: null,
    turnDeadline: 0,
    peekTimers: [],
    lastActivity: Date.now(),
  };
  rooms.set(code, room);
  touchRoom(room);
  return room;
}

function clearPeekTimers(room) { room.peekTimers.forEach((t) => clearTimeout(t)); room.peekTimers = []; }

function destroyRoom(room) {
  ['revealTimer', 'hostTimer', 'cleanupTimer', 'botTimer', 'turnTimer'].forEach((k) => { if (room[k]) clearTimeout(room[k]); room[k] = null; });
  clearPeekTimers(room);
  rooms.delete(room.code);
}

function touchRoom(room) {
  room.lastActivity = Date.now();
  if (room.cleanupTimer) clearTimeout(room.cleanupTimer);
  room.cleanupTimer = setTimeout(() => destroyRoom(room), ROOM_CLEANUP_MS);
}

function log(room, text) {
  room.logs.push({ text, at: Date.now() });
  if (room.logs.length > 200) room.logs.shift();
}

function findPlayer(room, id) { return room.players.find((p) => p.id === id); }
function nameOf(room, id) { const p = findPlayer(room, id); return p ? p.name : '?'; }

// ---------------------------------------------------------------------------
// Ereignisse -> Log-Text und Animations-Events für die Clients
// ---------------------------------------------------------------------------

function bidText(qty, face) { return `${qty} × ${face}er`; }

function eventText(room, ev) {
  const n = (id) => nameOf(room, id);
  switch (ev.t) {
    case 'roll': return `Runde ${ev.round}: Alle schütteln ihre Becher. ${n(ev.starter)} bietet zuerst.`;
    case 'bid': return `${n(ev.id)} bietet ${bidText(ev.qty, ev.face)}.`;
    case 'challenge': return ev.kind === 'spot' ? `${n(ev.id)} ruft „Genau!“` : `${n(ev.id)} ruft „Lügner!“`;
    case 'reveal': {
      const b = ev.bid;
      const verdict = ev.kind === 'spot'
        ? (ev.correct ? 'Volltreffer – genau richtig!' : 'daneben.')
        : (ev.correct ? `${n(ev.bidderId || b.id)} hat gelogen!` : 'das Gebot stimmt.');
      return `Aufgedeckt: ${ev.actual} × ${b.face}er liegen (Gebot ${bidText(b.qty, b.face)}) – ${verdict}`;
    }
    case 'loseDie': return `${n(ev.id)} verliert einen Würfel (noch ${ev.left}).`;
    case 'gainDie': return `${n(ev.id)} bekommt einen Würfel zurück (jetzt ${ev.left}).`;
    case 'out': return `${n(ev.id)} hat keine Würfel mehr und scheidet aus.`;
    case 'over': return ev.id ? `${n(ev.id)} gewinnt Liar's Dice!` : 'Spiel vorbei.';
    default: return null;
  }
}

function pushEvents(room, events) {
  events.forEach((ev) => {
    if (ev.t === 'challenge') { const b = room.game && room.game.reveal; ev.bidderId = ev.bidderId || (b && b.bid.id); }
    if (ev.t === 'reveal') ev.bidderId = ev.bid.id;
    const text = eventText(room, ev);
    if (text) log(room, text);
    room.events.push(Object.assign({ seq: ++room.eventSeq, text }, ev));
  });
  if (room.events.length > 40) room.events.splice(0, room.events.length - 40);
}

// ---------------------------------------------------------------------------
// Zustand
// ---------------------------------------------------------------------------

function publicPlayer(room, p) {
  const g = room.game;
  return {
    id: p.id,
    name: p.name,
    connected: p.connected,
    isHost: p.id === room.hostId,
    isBot: p.isBot === true,
    dice: g ? (g.counts[p.id] || 0) : room.settings.dice,
    eliminated: g ? g.out.includes(p.id) : false,
    peeking: !!p.peeking,
    look: p.look || 0,
    wins: p.wins || 0,
  };
}

function waitingFor(room) {
  if (room.phase !== 'playing' || !room.game || room.game.phase !== 'bidding') return null;
  const p = findPlayer(room, room.game.turn);
  if (!p || p.isBot || !p.connected) return null;
  return { ids: [p.id], key: `${room.gameNo}|${room.game.turnNo}` };
}

function waitInfo(room) {
  const w = waitingFor(room);
  if (!w) { room._wait = null; return null; }
  if (!room._wait || room._wait.key !== w.key) room._wait = { key: w.key, since: Date.now() };
  return { ids: w.ids, elapsedMs: Date.now() - room._wait.since };
}

function publicState(room) {
  const g = room.game;
  const now = Date.now();
  const bidding = !!(g && room.phase === 'playing' && g.phase === 'bidding');
  return {
    code: room.code,
    phase: room.phase,
    gamePhase: g ? g.phase : null,
    hostId: room.hostId,
    minPlayers: MIN_PLAYERS,
    maxPlayers: MAX_PLAYERS,
    settings: room.settings,
    players: room.players.map((p) => publicPlayer(room, p)),
    roundNo: g ? g.roundNo : 0,
    turnNo: g ? g.turnNo : 0,
    currentTurnId: bidding ? g.turn : null,
    bid: g ? g.bid : null,
    bids: g ? g.bids.slice(-12) : [],
    minRaise: g && bidding ? E.minRaise(g) : null,
    canRaise: g && bidding ? E.canRaise(g) : false,
    totalDice: g ? E.totalDice(g) : 0,
    reveal: g && g.phase !== 'bidding' ? g.reveal : null,
    rollMs: Math.max(0, room.rollUntil - now),
    revealMs: room.revealUntil ? Math.max(0, room.revealUntil - now) : 0,
    // Zugzeit der Person am Zug (nur bei verbundenen Menschen mit eingeschaltetem Timer)
    turnMs: room.turnDeadline && bidding ? turnLimitMs(room) : 0,
    turnMsLeft: room.turnDeadline && bidding ? Math.max(0, room.turnDeadline - now) : 0,
    startDice: room.game ? room.game.order.length * room.game.rules.dice : 0,
    events: room.events.slice(-12),
    eventSeq: room.eventSeq,
    winnerId: room.winnerId,
    placements: room.placements,
    logs: room.logs.slice(-50),
    waiting: waitInfo(room),
    serverNow: now,
  };
}

function sendDiceTo(room, player) {
  if (!player.socketId) return;
  const g = room.game;
  io.to(player.socketId).emit('yourDice', { round: g ? g.roundNo : 0, dice: g && g.dice[player.id] ? g.dice[player.id] : [] });
}

function turnLimitMs(room) { return TURN_MS_OVERRIDE || (room.settings.turnSec || 0) * 1000; }

// Zug-Timer: Wer als verbundener Mensch zu lange braucht, für den entscheidet ein Bot.
function updateTurnTimer(room) {
  const g = room.game;
  const limit = turnLimitMs(room);
  const p = g && room.phase === 'playing' && g.phase === 'bidding' ? findPlayer(room, g.turn) : null;
  const active = !!(p && !p.isBot && p.connected && limit > 0);
  const key = active ? `${room.gameNo}|${g.turnNo}|${p.id}` : null;
  if (key === room.turnKey) return;
  if (room.turnTimer) { clearTimeout(room.turnTimer); room.turnTimer = null; }
  room.turnKey = key;
  room.turnDeadline = 0;
  if (!active) return;
  const start = Math.max(Date.now(), room.rollUntil || 0);
  room.turnDeadline = start + limit;
  room.turnTimer = setTimeout(() => {
    room.turnTimer = null;
    if (!rooms.has(room.code) || room.turnKey !== key || !room.game || room.game.phase !== 'bidding') return;
    log(room, `${p.name} war zu langsam – ein Bot entscheidet.`);
    room.turnKey = null; room.turnDeadline = 0;
    botMove(room, p);
  }, room.turnDeadline - Date.now());
}

function broadcastState(room) {
  updateTurnTimer(room);
  io.to(room.code).emit('gameState', publicState(room));
  room.players.forEach((p) => sendDiceTo(room, p));
  scheduleBotTurnIfNeeded(room);
}

// ---------------------------------------------------------------------------
// Spielverlauf
// ---------------------------------------------------------------------------

function humansConnected(room) { return room.players.some((p) => !p.isBot && p.connected); }

function afterRoll(room) {
  room.rollUntil = Date.now() + ROLL_LOCK_MS;
  room.revealUntil = 0;
  room.players.forEach((p) => { p.peeking = false; });
  scheduleBotPeeks(room);
}

function startGame(room) {
  room.gameNo++;
  room.winnerId = null;
  room.placements = null;
  room.logs = [];
  room.events = [];
  const ids = room.players.map((p) => p.id);
  room.game = E.createGame(ids, {
    startIdx: Math.floor(Math.random() * ids.length),
    rules: { dice: room.settings.dice, wildOnes: room.settings.wildOnes, spotOn: room.settings.spotOn },
  });
  room.phase = 'playing';
  room._wait = null;
  pushEvents(room, [{ t: 'roll', round: room.game.roundNo, starter: room.game.turn }]);
  afterRoll(room);
}

function nextRound(room) {
  if (room.revealTimer) { clearTimeout(room.revealTimer); room.revealTimer = null; }
  const g = room.game;
  if (!g || g.phase !== 'reveal') return;
  const res = E.nextRound(g);
  if (res.ok) { pushEvents(room, res.events); afterRoll(room); }
}

function onGameOver(room) {
  const g = room.game;
  room.phase = 'gameover';
  room.winnerId = g.winnerId;
  const winner = findPlayer(room, g.winnerId);
  if (winner) winner.wins = (winner.wins || 0) + 1;
  // Platzierung: Sieger:in, dann in umgekehrter Ausscheide-Reihenfolge
  const order = [g.winnerId].concat(g.out.slice().reverse()).filter(Boolean);
  room.placements = order.map((id, i) => ({ id, name: nameOf(room, id), place: i + 1 }));
  room.revealUntil = 0;
}

function performAction(room, playerId, action) {
  const g = room.game;
  if (!g) return { ok: false, error: 'Kein Spiel.' };
  if (Date.now() < room.rollUntil && g.phase === 'bidding') return { ok: false, error: 'Moment – die Becher werden noch geschüttelt.' };
  let res;
  if (action.type === 'bid') res = E.bid(g, playerId, action.qty, action.face);
  else if (action.type === 'liar' || action.type === 'spot') res = E.challenge(g, playerId, action.type);
  else return { ok: false, error: 'Unbekannte Aktion.' };
  if (!res.ok) return res;
  pushEvents(room, res.events);
  const p = findPlayer(room, playerId);
  if (p) p.peeking = false;
  if (g.phase === 'over') {
    onGameOver(room);
  } else if (g.phase === 'reveal') {
    room.players.forEach((q) => { q.peeking = false; });
    room.revealUntil = Date.now() + REVEAL_MS;
    if (room.revealTimer) clearTimeout(room.revealTimer);
    room.revealTimer = setTimeout(() => {
      room.revealTimer = null;
      if (!rooms.has(room.code) || !room.game || room.game.phase !== 'reveal') return;
      if (!humansConnected(room)) return;
      nextRound(room); touchRoom(room); broadcastState(room);
    }, REVEAL_MS);
  }
  touchRoom(room);
  broadcastState(room);
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Bots
// ---------------------------------------------------------------------------

function addBot(room) {
  if (room.players.length >= MAX_PLAYERS) return null;
  const used = new Set(room.players.map((p) => p.name));
  const name = BOT_NAME_POOL.find((n) => !used.has(n)) || `Bot ${room.players.length + 1}`;
  const bot = { id: makeId(), token: makeId(), name, socketId: null, connected: true, isBot: true };
  room.players.push(bot);
  return bot;
}

// Bots (und von Bots vertretene getrennte Personen) schauen nach dem Würfeln kurz unter
// ihren Becher - damit man am Tisch sieht, wer gerade nachguckt.
function scheduleBotPeeks(room) {
  clearPeekTimers(room);
  const g = room.game;
  if (!g) return;
  room.players.forEach((p) => {
    if (!(p.isBot || !p.connected) || !(g.counts[p.id] > 0)) return;
    const start = ROLL_LOCK_MS + 200 + Math.random() * 1500;
    const dur = 1400 + Math.random() * 1400;
    room.peekTimers.push(setTimeout(() => {
      if (!rooms.has(room.code) || !room.game || room.game.phase !== 'bidding') return;
      p.peeking = true; io.to(room.code).emit('peek', { id: p.id, on: true });
      room.peekTimers.push(setTimeout(() => {
        p.peeking = false; io.to(room.code).emit('peek', { id: p.id, on: false });
      }, dur));
    }, start));
  });
}

function botMove(room, player) {
  const g = room.game;
  if (!g || g.phase !== 'bidding' || g.turn !== player.id) return;
  const action = bots.decide(g, player.id);
  let res = performAction(room, player.id, action);
  if (!res.ok) {
    // Fallback: Notlösung, damit die Partie nie hängen bleibt.
    if (g.bid) res = performAction(room, player.id, { type: 'liar' });
    else { const m = E.minRaise(g); res = performAction(room, player.id, { type: 'bid', qty: m.qty, face: m.face }); }
  }
}

function scheduleBotTurnIfNeeded(room) {
  if (room.phase !== 'playing' || !room.game) return;
  const g = room.game;
  if (g.phase !== 'bidding') return;
  const turnPlayer = findPlayer(room, g.turn);
  if (!turnPlayer) return;
  // Verbundene Menschen werden nie automatisch bewegt - der Host kann sie überspringen.
  if (!turnPlayer.isBot && turnPlayer.connected) return;
  if (room.botTimer) return;
  const turnAtSchedule = g.turnNo;
  const gameAtSchedule = room.gameNo;
  const delay = randomDelay() + Math.max(0, room.rollUntil - Date.now());
  room.botTimer = setTimeout(() => {
    room.botTimer = null;
    if (!rooms.has(room.code) || room.phase !== 'playing' || !room.game) return;
    if (room.game.turnNo !== turnAtSchedule || room.gameNo !== gameAtSchedule) { scheduleBotTurnIfNeeded(room); return; }
    botMove(room, turnPlayer);
  }, delay);
}

// ---------------------------------------------------------------------------
// Host
// ---------------------------------------------------------------------------

function ensureHost(room) {
  const host = findPlayer(room, room.hostId);
  if (host && !host.isBot && host.connected) return false;
  const next = room.players.find((p) => !p.isBot && p.connected);
  if (!next) return false;
  room.hostId = next.id;
  log(room, `${next.name} ist jetzt Host.`);
  return true;
}

function scheduleHostHandover(room) {
  if (room.hostTimer) clearTimeout(room.hostTimer);
  room.hostTimer = setTimeout(() => {
    room.hostTimer = null;
    if (rooms.has(room.code) && ensureHost(room)) { touchRoom(room); broadcastState(room); }
  }, HOST_HANDOVER_MS);
}

function resetToLobby(room) {
  ['revealTimer', 'botTimer', 'turnTimer'].forEach((k) => { if (room[k]) clearTimeout(room[k]); room[k] = null; });
  room.turnKey = null; room.turnDeadline = 0;
  clearPeekTimers(room);
  room.phase = 'lobby';
  room.game = null;
  room.winnerId = null;
  room.placements = null;
  room.events = [];
  room.logs = [];
  room.rollUntil = 0;
  room.revealUntil = 0;
  // Wer das Spiel verlassen hat, fliegt beim Zurücksetzen aus der Lobby.
  room.players = room.players.filter((p) => p.isBot || p.connected);
  room.players.forEach((p) => { p.peeking = false; });
  log(room, 'Zurück zur Lobby. Bereit für eine neue Partie.');
}

// ---------------------------------------------------------------------------
// Socket.IO
// ---------------------------------------------------------------------------

function cleanName(name) { return (name || '').toString().trim().slice(0, 20) || 'Pirat'; }

io.on('connection', (socket) => {
  const ctx = () => {
    const room = rooms.get(socket.data.roomCode);
    if (!room) return {};
    return { room, player: findPlayer(room, socket.data.playerId) };
  };

  socket.on('createRoom', ({ name } = {}, cb) => {
    if (typeof cb !== 'function') return;
    try {
      if (isRateLimited(`createRoom:${getClientIp(socket)}`, 8, 60 * 1000)) {
        return cb({ ok: false, error: 'Zu viele neue Räume in kurzer Zeit. Bitte kurz warten und erneut versuchen.' });
      }
      if (rooms.size >= MAX_ROOMS) {
        return cb({ ok: false, error: 'Gerade sind zu viele Räume aktiv. Bitte versuche es in ein paar Minuten erneut.' });
      }
      name = cleanName(name);
      const room = createRoom();
      const player = { id: makeId(), token: makeId(), name, socketId: socket.id, connected: true };
      room.hostId = player.id;
      room.players.push(player);
      socket.join(room.code);
      socket.data.roomCode = room.code;
      socket.data.playerId = player.id;
      log(room, `${name} hat den Tisch erstellt.`);
      touchRoom(room);
      cb({ ok: true, code: room.code, playerId: player.id, token: player.token });
      broadcastState(room);
    } catch (err) {
      cb({ ok: false, error: 'Raum konnte nicht erstellt werden.' });
    }
  });

  socket.on('joinRoom', ({ code, name, token } = {}, cb) => {
    if (typeof cb !== 'function') return;
    if (isRateLimited(`joinRoom:${getClientIp(socket)}`, 30, 60 * 1000)) {
      return cb({ ok: false, error: 'Zu viele Versuche in kurzer Zeit. Bitte kurz warten und erneut versuchen.' });
    }
    code = (code || '').toString().trim().toUpperCase();
    const room = rooms.get(code);
    if (!room) return cb({ ok: false, error: 'Diesen Raum gibt es nicht.' });

    if (token) {
      const existing = room.players.find((p) => p.token === token && !p.isBot);
      if (existing) {
        existing.socketId = socket.id;
        existing.connected = true;
        if (room.hostId === existing.id && room.hostTimer) { clearTimeout(room.hostTimer); room.hostTimer = null; }
        socket.join(room.code);
        socket.data.roomCode = room.code;
        socket.data.playerId = existing.id;
        touchRoom(room);
        log(room, `${existing.name} ist wieder verbunden.`);
        cb({ ok: true, code: room.code, playerId: existing.id, token: existing.token, rejoined: true });
        broadcastState(room);
        return;
      }
    }

    if (room.phase !== 'lobby') return cb({ ok: false, error: 'Das Spiel läuft bereits. Bitte warte auf die nächste Partie.' });
    if (room.players.length >= MAX_PLAYERS) return cb({ ok: false, error: `Der Tisch ist bereits voll (max. ${MAX_PLAYERS} Spieler).` });
    name = cleanName(name);
    if (room.players.some((p) => p.name.toLowerCase() === name.toLowerCase())) {
      return cb({ ok: false, error: 'Dieser Name ist am Tisch bereits vergeben.' });
    }
    const player = { id: makeId(), token: makeId(), name, socketId: socket.id, connected: true };
    room.players.push(player);
    if (!room.hostId) room.hostId = player.id;
    socket.join(room.code);
    socket.data.roomCode = room.code;
    socket.data.playerId = player.id;
    touchRoom(room);
    log(room, `${name} setzt sich an den Tisch.`);
    cb({ ok: true, code: room.code, playerId: player.id, token: player.token });
    broadcastState(room);
  });

  socket.on('leaveRoom', () => {
    const { room, player } = ctx();
    if (!room || !player) return;
    if (room.phase === 'lobby') {
      room.players = room.players.filter((p) => p.id !== player.id);
      if (room.hostId === player.id) {
        room.hostId = null;
        const next = room.players.find((p) => !p.isBot);
        if (next) room.hostId = next.id;
      }
      log(room, `${player.name} hat den Tisch verlassen.`);
    } else {
      player.connected = false;
      player.peeking = false;
      player.socketId = null; // kein privater Würfelkanal mehr aus dem verlassenen Spiel
      log(room, `${player.name} hat das Spiel verlassen.`);
      ensureHost(room);
    }
    socket.leave(room.code);
    socket.data.roomCode = null;
    socket.data.playerId = null;
    touchRoom(room);
    if (!room.players.some((p) => !p.isBot)) destroyRoom(room);
    else broadcastState(room);
  });

  socket.on('kickPlayer', ({ playerId } = {}) => {
    const { room, player } = ctx();
    if (!room || !player || room.phase !== 'lobby') return;
    if (player.id !== room.hostId || playerId === room.hostId) return;
    const target = findPlayer(room, playerId);
    if (!target) return;
    room.players = room.players.filter((p) => p.id !== playerId);
    if (target.socketId) io.to(target.socketId).emit('kicked');
    touchRoom(room);
    broadcastState(room);
  });

  socket.on('addBot', () => {
    const { room, player } = ctx();
    if (!room || !player || room.phase !== 'lobby' || player.id !== room.hostId) return;
    addBot(room); touchRoom(room); broadcastState(room);
  });

  socket.on('removeBot', ({ botId } = {}) => {
    const { room, player } = ctx();
    if (!room || !player || room.phase !== 'lobby' || player.id !== room.hostId) return;
    const bot = findPlayer(room, botId);
    if (!bot || !bot.isBot) return;
    room.players = room.players.filter((p) => p.id !== botId);
    touchRoom(room); broadcastState(room);
  });

  socket.on('fillBots', () => {
    const { room, player } = ctx();
    if (!room || !player || room.phase !== 'lobby' || player.id !== room.hostId) return;
    while (room.players.length < MIN_PLAYERS) addBot(room);
    touchRoom(room); broadcastState(room);
  });

  socket.on('setSettings', (s) => {
    const { room, player } = ctx();
    if (!room || !player || room.phase !== 'lobby' || player.id !== room.hostId) return;
    s = s || {};
    if (typeof s.wildOnes === 'boolean') room.settings.wildOnes = s.wildOnes;
    if (typeof s.spotOn === 'boolean') room.settings.spotOn = s.spotOn;
    if (DICE_OPTIONS.includes(Number(s.dice))) room.settings.dice = Number(s.dice);
    if (TURN_OPTIONS.includes(Number(s.turnSec))) room.settings.turnSec = Number(s.turnSec);
    broadcastState(room);
  });

  socket.on('startGame', () => {
    const { room, player } = ctx();
    if (!room || !player || room.phase !== 'lobby' || player.id !== room.hostId) return;
    if (room.players.length < MIN_PLAYERS || room.players.length > MAX_PLAYERS) return;
    startGame(room);
    touchRoom(room);
    broadcastState(room);
  });

  // --- Spielzüge ---------------------------------------------------------

  function act(action, reply) {
    const { room, player } = ctx();
    if (!room || !player || room.phase !== 'playing' || !room.game) return reply && reply({ ok: false, error: 'Gerade läuft keine Runde.' });
    const res = performAction(room, player.id, action);
    if (reply) reply(res.ok ? { ok: true } : { ok: false, error: res.error });
    else if (!res.ok) socket.emit('actionError', { error: res.error });
  }

  socket.on('bid', (d, cb) => {
    d = d || {};
    act({ type: 'bid', qty: Number(d.qty), face: Number(d.face) }, typeof cb === 'function' ? cb : null);
  });
  socket.on('callLiar', (_d, cb) => act({ type: 'liar' }, typeof cb === 'function' ? cb : null));
  socket.on('callSpot', (_d, cb) => act({ type: 'spot' }, typeof cb === 'function' ? cb : null));

  // Unter den eigenen Becher schauen - alle anderen sehen, dass man nachschaut.
  socket.on('peek', (d) => {
    const { room, player } = ctx();
    if (!room || !player || room.phase !== 'playing' || !room.game || room.game.phase !== 'bidding') return;
    if (!(room.game.counts[player.id] > 0)) return;
    const on = !!(d && d.on);
    if (player.peeking === on) return;
    if (isRateLimited(`peek:${player.id}`, 40, 10 * 1000)) return;
    player.peeking = on;
    io.to(room.code).emit('peek', { id: player.id, on });
  });

  // Blickrichtung (Kopfdrehung) - damit die anderen sehen, wohin man schaut.
  socket.on('look', (d) => {
    const { room, player } = ctx();
    if (!room || !player || room.phase === 'lobby') return;
    const yaw = Math.max(-1.2, Math.min(1.2, Number(d && d.yaw) || 0));
    if (isRateLimited(`look:${player.id}`, 30, 10 * 1000)) return;
    player.look = Math.round(yaw * 100) / 100;
    socket.to(room.code).emit('look', { id: player.id, yaw: player.look });
  });

  socket.on('nextRound', () => {
    const { room, player } = ctx();
    if (!room || !player || room.phase !== 'playing' || player.id !== room.hostId) return;
    if (!room.game || room.game.phase !== 'reveal') return;
    nextRound(room); touchRoom(room); broadcastState(room);
  });

  socket.on('resetGame', () => {
    const { room, player } = ctx();
    if (!room || !player || player.id !== room.hostId) return;
    if (room.phase !== 'gameover' && room.phase !== 'playing') return;
    resetToLobby(room);
    touchRoom(room);
    broadcastState(room);
  });

  socket.on('skipTurn', () => {
    const { room, player } = ctx();
    if (!room || !player) return;
    const info = waitInfo(room);
    if (!info || info.elapsedMs < SKIP_MIN_WAIT_MS) return;
    const isHost = player.id === room.hostId;
    if (!isHost && !info.ids.includes(room.hostId)) return;
    if (info.ids.includes(player.id)) return;
    info.ids.forEach((id) => {
      const p = findPlayer(room, id);
      if (p) { log(room, `${p.name} wurde übersprungen – ein Bot entscheidet.`); botMove(room, p); }
    });
  });

  socket.on('disconnect', () => {
    const { room, player } = ctx();
    if (!room || !player) return;
    if (player.socketId !== socket.id) return; // verspätetes Event eines alten Sockets nach Reconnect
    player.connected = false;
    player.peeking = false;
    log(room, `${player.name} hat die Verbindung verloren.`);
    if (room.hostId === player.id) scheduleHostHandover(room);
    touchRoom(room);
    broadcastState(room);
  });
});

server.listen(PORT, () => {
  console.log(`Liar's Dice läuft auf Port ${PORT}`);
  console.log(`Lokal öffnen unter: http://localhost:${PORT}`);
});

module.exports = { E };
