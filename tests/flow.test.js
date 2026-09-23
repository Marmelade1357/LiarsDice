// Kompletter Ablauf über echte Sockets: Raum erstellen, Bots, Einstellungen, spielen bis
// zum Sieg, Privatsphäre der Würfel, Gucken unter den Becher, Reset, Wiederverbindung.
const { startServer, stopServer, connectClient, emitAsync, waitForState, attachAutopilot, assert } = require('./helpers');

const PORT = 3971;
const ENV = { BOT_DELAY_MIN_MS: '10', BOT_DELAY_MAX_MS: '30', REVEAL_MS: '120', ROLL_LOCK_MS: '40', SKIP_MIN_WAIT_MS: '300', HOST_HANDOVER_MS: '300' };

async function main() {
  const proc = await startServer(PORT, ENV);
  try {
    const url = `http://localhost:${PORT}`;
    const host = await connectClient(url);
    const created = await emitAsync(host, 'createRoom', { name: 'Jack' });
    assert(created.ok && created.code.length === 4, 'createRoom');
    let myDice = null;
    host.on('yourDice', (d) => { myDice = d; });
    host.on('gameState', (s) => { host._last = s; });

    const guest = await connectClient(url);
    const joined = await emitAsync(guest, 'joinRoom', { code: created.code, name: 'Will' });
    assert(joined.ok, 'Gast tritt bei');
    const dup = await emitAsync(await connectClient(url), 'joinRoom', { code: created.code, name: 'jack' });
    assert(!dup.ok, 'doppelter Name wird abgelehnt');
    let peeks = [];
    guest.on('peek', (p) => peeks.push(p));

    host.emit('addBot'); host.emit('addBot');
    host.emit('setSettings', { dice: 3, wildOnes: true, spotOn: true });
    const lobby = await waitForState(host, (s) => s.players.length === 4 && s.settings.dice === 3 && s.settings.spotOn);
    assert(lobby.phase === 'lobby', 'Lobby');
    host.emit('startGame');
    const first = await waitForState(host, (s) => s.phase === 'playing');
    assert(first.players.every((p) => p.dice === 3), 'alle haben 3 Würfel');
    assert(!first.reveal, 'kein Reveal zu Beginn');
    await new Promise((r) => setTimeout(r, 120));
    assert(myDice && myDice.dice.length === 3 && myDice.dice.every((d) => d >= 1 && d <= 6), 'eigene Würfel kommen privat an');
    assert(!JSON.stringify(first).includes('"dice":['), 'öffentlicher Zustand enthält keine Würfel');

    // Unter den Becher gucken - der Gast sieht es
    host.emit('peek', { on: true });
    await new Promise((r) => setTimeout(r, 120));
    assert(peeks.some((p) => p.id === created.playerId && p.on), 'Gucken wird an alle gemeldet');

    // Gebot außerhalb des Zuges wird abgelehnt
    const st = host._last;
    assert(st.currentTurnId, 'jemand ist dran');
    const notMe = st.currentTurnId === created.playerId ? guest : host;
    const bad = await emitAsync(notMe, 'bid', { qty: 1, face: 3 });
    assert(!bad.ok, 'nicht dran');

    attachAutopilot(host, () => created.playerId, host._last);
    attachAutopilot(guest, () => joined.playerId, host._last);
    // Ein Reveal muss irgendwann kommen und alle Würfel zeigen
    const rv = await waitForState(host, (s) => !!s.reveal, 30000);
    assert(Object.keys(rv.reveal.dice).length >= 2 && typeof rv.reveal.actual === 'number', 'Reveal zeigt alle Würfel');
    const end = await waitForState(host, (s) => s.phase === 'gameover', 120000);
    assert(end.winnerId && end.placements.length === 4 && end.placements[0].id === end.winnerId, 'Spielende mit Platzierung');
    assert(end.players.find((p) => p.id === end.winnerId).wins === 1, 'Siegzähler');

    host.emit('resetGame');
    const back = await waitForState(host, (s) => s.phase === 'lobby');
    assert(back.players.length === 4, 'Spieler bleiben in der Lobby');
    console.log(`OK: flow.test.js - Partie über Sockets bis zum Sieg (${end.roundNo} Runden), Reset`);

    guest.disconnect();
    const g2 = await connectClient(url);
    const rj = await emitAsync(g2, 'joinRoom', { code: created.code, name: 'Will', token: joined.token });
    assert(rj.ok && rj.rejoined && rj.playerId === joined.playerId, 'Wiederverbindung mit Token');
    console.log('OK: flow.test.js - Wiederverbindung');
  } finally { await stopServer(proc); }
}

main().then(() => process.exit(0)).catch((e) => { console.error('FEHLER in flow.test.js:', e); process.exit(1); });
