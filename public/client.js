(function () {
  // Pfad-Präfix ermitteln (z. B. "" bei direktem Zugriff, "/liarsdice" hinter dem Spielehub).
  const MOUNT_PREFIX = window.location.pathname.replace(/\/[^/]*$/, '');
  const socket = io({ path: MOUNT_PREFIX + '/socket.io/' });

  if (MOUNT_PREFIX) {
    const backHub = document.getElementById('btn-back-hub-home');
    if (backHub) { backHub.href = '/'; backHub.classList.remove('hidden'); }
  }

  const SESSION_KEY = 'liars_session';
  const SOUND_KEY = 'liars_sound';
  const NAME_KEY = 'liars_name';
  const CREW_KEY = 'liars_crew';

  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* egal */ } }

  let session = null;
  let latestState = null;
  let myDice = { round: 0, dice: [] };
  let lastSeq = null;
  let soundOn = safeGet(SOUND_KEY) !== 'off';
  let peeking = false;
  let peekMap = {};           // playerId -> true (schaut gerade nach)
  let sel = { qty: 1, face: 2, key: null, custom: false, sending: false };
  let dismissedResult = null;
  let notifiedTurnKey = null;
  let revealBannerAt = 0;
  let resultAt = 0;

  // ---------------------------------------------------------------------
  // Sound (synthetisiert, keine Dateien)
  // ---------------------------------------------------------------------
  let audioCtx = null; let noiseBuf = null; let waves = null;
  function ctx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      noiseBuf = audioCtx.createBuffer(1, audioCtx.sampleRate * 2, audioCtx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    return audioCtx;
  }
  function tone(freq, dur, delay, vol, type) {
    if (!soundOn) return;
    try {
      const c = ctx(); const t0 = c.currentTime + (delay || 0);
      const o = c.createOscillator(); const g = c.createGain();
      o.frequency.value = freq; o.type = type || 'sine';
      g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(vol || 0.12, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g).connect(c.destination); o.start(t0); o.stop(t0 + dur + 0.02);
    } catch (e) { /* kein Audio */ }
  }
  function noise(dur, vol, freq, q, delay) {
    if (!soundOn) return;
    try {
      const c = ctx(); const t0 = c.currentTime + (delay || 0);
      const src = c.createBufferSource(); src.buffer = noiseBuf;
      const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q || 1;
      const g = c.createGain();
      g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      src.connect(f).connect(g).connect(c.destination);
      src.start(t0, Math.random() * 1.5); src.stop(t0 + dur + 0.02);
    } catch (e) { /* kein Audio */ }
  }
  const sfx = {
    rattle(v) { noise(0.05, 0.25 * v, 2200 + Math.random() * 1600, 3); noise(0.04, 0.15 * v, 3500, 4, 0.03); },
    slam(v) { tone(70, 0.25, 0, 0.35 * v, 'sine'); noise(0.12, 0.35 * v, 400, 0.8); },
    thud(v) { tone(110, 0.15, 0, 0.18 * v); noise(0.06, 0.12 * v, 800, 1); },
    lift(v) { noise(0.08, 0.06 * v, 1200, 2); },
    bid(v) { tone(520, 0.08, 0, 0.08 * v, 'triangle'); },
    liar() { tone(196, 0.45, 0, 0.14, 'sawtooth'); tone(233, 0.45, 0.02, 0.1, 'sawtooth'); tone(147, 0.6, 0.05, 0.12, 'square'); },
    good() { [392, 494, 587].forEach((f, i) => tone(f, 0.18, i * 0.08, 0.1, 'triangle')); },
    bad() { tone(220, 0.3, 0, 0.12, 'sawtooth'); tone(185, 0.4, 0.15, 0.12, 'sawtooth'); },
    lose() { tone(300, 0.12, 0, 0.1); tone(200, 0.2, 0.1, 0.1); },
    turn() { tone(660, 0.1, 0, 0.12); tone(880, 0.12, 0.1, 0.12); },
    win() { [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, 0.25, i * 0.11, 0.13, 'triangle')); },
    count(v, i) { tone(420 + Math.min(i || 0, 20) * 38, 0.09, 0, 0.1 * v, 'triangle'); },
    verdict(v, good) { if (good) [523, 784, 1046].forEach((f, k) => tone(f, 0.22, k * 0.09, 0.12 * v, 'triangle')); else { tone(233, 0.35, 0, 0.13 * v, 'sawtooth'); tone(175, 0.5, 0.18, 0.13 * v, 'sawtooth'); } },
    hurry(v) { tone(880, 0.05, 0, 0.06 * v, 'square'); },
    // Entenquaken: Sägezahn mit Tonhöhen-Fall durch zwei Formant-Filter, Tonlage je Ente
    quack(v, pitch, times) {
      if (!soundOn) return;
      try {
        const c = ctx(); const p = pitch || 1; const n = times || 1;
        for (let k = 0; k < n; k++) {
          const t0 = c.currentTime + k * 0.2;
          const o = c.createOscillator(); o.type = 'sawtooth';
          o.frequency.setValueAtTime(330 * p, t0); o.frequency.exponentialRampToValueAtTime(190 * p, t0 + 0.18);
          const f1 = c.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 1050 * p; f1.Q.value = 4;
          const f2 = c.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 2300 * p; f2.Q.value = 6;
          const g = c.createGain(); const g2 = c.createGain(); g2.gain.value = 0.5;
          g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(0.5 * v, t0 + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.22);
          o.connect(f1).connect(g); o.connect(f2).connect(g2).connect(g); g.connect(c.destination);
          o.start(t0); o.stop(t0 + 0.25);
        }
      } catch (e) { /* kein Audio */ }
    },
  };
  function sound(name, vol, a, b) { if (sfx[name]) sfx[name](vol === undefined ? 1 : vol, a, b); }
  // Zeitplan des Aufdeckens (muss zu table3d.js passen): Becher umkippen, dann reihum zählen
  function revealTiming(actual) {
    const step = Math.max(180, Math.min(380, 2600 / Math.max(1, actual)));
    const countStart = 1600;
    const countEnd = countStart + actual * step;
    return { step, countStart, countEnd, verdict: countEnd + 350, banner: countEnd + 1300 };
  }
  // Meeresrauschen im Hintergrund
  function startWaves() {
    if (!soundOn || waves) return;
    try {
      const c = ctx();
      const src = c.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
      const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500;
      const g = c.createGain(); g.gain.value = 0.02;
      const lfo = c.createOscillator(); lfo.frequency.value = 0.12;
      const lg = c.createGain(); lg.gain.value = 0.018;
      lfo.connect(lg).connect(g.gain);
      src.connect(f).connect(g).connect(c.destination);
      src.start(); lfo.start();
      waves = { src, lfo, g };
    } catch (e) { /* egal */ }
  }
  function stopWaves() { if (waves) { try { waves.src.stop(); waves.lfo.stop(); } catch (e) { /* egal */ } waves = null; } }
  function vibrate(p) { if (navigator.vibrate) { try { navigator.vibrate(p); } catch (e) { /* egal */ } } }

  // ---------------------------------------------------------------------
  // Helfer
  // ---------------------------------------------------------------------
  function $(id) { return document.getElementById(id); }
  function show(e) { e.classList.remove('hidden'); }
  function hide(e) { e.classList.add('hidden'); }
  function myId() { return session ? session.playerId : null; }
  function el(tag, opts, children) {
    const e = document.createElement(tag);
    if (opts) {
      Object.entries(opts).forEach(([k, v]) => {
        if (k === 'class') e.className = v;
        else if (k === 'text') e.textContent = v;
        else if (k === 'html') e.innerHTML = v;
        else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
        else e.setAttribute(k, v);
      });
    }
    (children || []).forEach((c) => c && e.appendChild(c));
    return e;
  }
  function pname(state, id) { const p = state.players.find((x) => x.id === id); return p ? p.name : '?'; }
  const PIPS = { 1: [[50, 50]], 2: [[27, 27], [73, 73]], 3: [[27, 27], [50, 50], [73, 73]], 4: [[27, 27], [73, 27], [27, 73], [73, 73]], 5: [[27, 27], [73, 27], [50, 50], [27, 73], [73, 73]], 6: [[27, 27], [73, 27], [27, 50], [73, 50], [27, 73], [73, 73]] };
  function dieEl(v, extra) {
    const d = el('span', { class: `die v${v}${extra ? ' ' + extra : ''}`, title: String(v) });
    PIPS[v].forEach(([x, y]) => { const i = document.createElement('i'); i.style.left = x + '%'; i.style.top = y + '%'; d.appendChild(i); });
    return d;
  }

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach((s) => hide(s));
    show($(id));
    if (id === 'screen-home') releaseWakeLock(); else requestWakeLock();
    if (id !== 'screen-game' && b3) b3.setVisible(false);
    if (id === 'screen-game') { if (b3) { b3.setVisible(true); } startWaves(); } else stopWaves();
  }

  let wakeLock = null;
  async function requestWakeLock() {
    if (!('wakeLock' in navigator)) return;
    try { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); } catch (e) { /* egal */ }
  }
  function releaseWakeLock() { if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; } }
  document.addEventListener('visibilitychange', () => {
    const home = $('screen-home');
    if (document.visibilityState === 'visible' && home && home.classList.contains('hidden')) requestWakeLock();
  });

  let toastTimer = null;
  function toast(msg) {
    const t = $('toast');
    t.textContent = msg; show(t);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => hide(t), 3200);
  }

  function saveSession() { safeSet(SESSION_KEY, JSON.stringify(session)); }
  function clearSession() { try { localStorage.removeItem(SESSION_KEY); } catch (e) { /* egal */ } session = null; }
  function loadSession() { try { const r = safeGet(SESSION_KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; } }

  // ---------------------------------------------------------------------
  // Start / Lobby-Aktionen
  // ---------------------------------------------------------------------
  document.querySelectorAll('.tab-btn').forEach((b) => b.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach((x) => x.classList.toggle('active', x === b));
    $('tab-create').classList.toggle('hidden', b.dataset.tab !== 'create');
    $('tab-join').classList.toggle('hidden', b.dataset.tab !== 'join');
  }));

  const savedName = safeGet(NAME_KEY) || '';
  $('create-name').value = savedName; $('join-name').value = savedName;
  const urlCode = new URLSearchParams(location.search).get('code');
  if (urlCode) {
    $('join-code').value = urlCode.toUpperCase();
    document.querySelector('.tab-btn[data-tab="join"]').click();
  }

  function enterRoom(res, name) {
    session = { code: res.code, playerId: res.playerId, token: res.token, name };
    saveSession(); safeSet(NAME_KEY, name);
    lastSeq = null;
  }

  $('btn-create').addEventListener('click', () => {
    const name = $('create-name').value.trim();
    if (!name) return toast('Bitte gib deinen Namen ein.');
    ctxUnlock();
    socket.emit('createRoom', { name }, (res) => {
      if (!res.ok) return toast(res.error);
      enterRoom(res, name);
    });
  });
  $('btn-join').addEventListener('click', () => {
    const name = $('join-name').value.trim();
    const code = $('join-code').value.trim().toUpperCase();
    if (!name) return toast('Bitte gib deinen Namen ein.');
    if (code.length !== 4) return toast('Der Raum-Code hat 4 Zeichen.');
    ctxUnlock();
    socket.emit('joinRoom', { code, name }, (res) => {
      if (!res.ok) return toast(res.error);
      enterRoom(res, name);
    });
  });
  function ctxUnlock() { if (soundOn) { try { ctx().resume(); } catch (e) { /* egal */ } } }
  document.addEventListener('pointerdown', () => { if (soundOn && audioCtx && audioCtx.state === 'suspended') audioCtx.resume(); if (!$('screen-game').classList.contains('hidden')) startWaves(); }, { passive: true });

  function leave() {
    socket.emit('leaveRoom');
    clearSession(); latestState = null;
    showScreen('screen-home');
  }
  $('btn-leave-lobby').addEventListener('click', leave);
  $('btn-leave-game').addEventListener('click', () => { if (confirm('Wirklich den Tisch verlassen?')) leave(); });
  socket.on('kicked', () => { clearSession(); latestState = null; showScreen('screen-home'); toast('Du wurdest vom Tisch entfernt.'); });

  $('btn-share-link').addEventListener('click', async () => {
    if (!latestState) return;
    const url = `${location.origin}${location.pathname}?code=${latestState.code}`;
    try { await navigator.clipboard.writeText(url); toast('Einladungslink kopiert!'); } catch (e) { toast(url); }
  });
  $('btn-add-bot').addEventListener('click', () => socket.emit('addBot'));
  $('btn-fill-bots').addEventListener('click', () => socket.emit('fillBots'));
  $('btn-start').addEventListener('click', () => socket.emit('startGame'));
  function sendSettings() {
    socket.emit('setSettings', { dice: Number($('set-dice').value), wildOnes: $('set-wild').checked, spotOn: $('set-spot').checked, turnSec: Number($('set-turn').value) });
  }
  ['set-dice', 'set-wild', 'set-spot', 'set-turn'].forEach((id) => $(id).addEventListener('change', sendSettings));

  ['btn-show-rules', 'btn-show-rules-lobby'].forEach((id) => $(id).addEventListener('click', () => show($('rules-modal'))));
  $('btn-close-rules-modal').addEventListener('click', () => hide($('rules-modal')));
  $('btn-show-log').addEventListener('click', () => { renderLog(); show($('log-modal')); });
  $('btn-close-log-modal').addEventListener('click', () => hide($('log-modal')));
  document.querySelectorAll('.modal').forEach((m) => m.addEventListener('click', (e) => { if (e.target === m && m.id !== 'result-modal') hide(m); }));
  function renderLog() {
    const list = $('log-list'); list.innerHTML = '';
    if (!latestState) return;
    latestState.logs.slice().reverse().forEach((l) => list.appendChild(el('li', { text: l.text })));
  }
  const soundBtn = $('btn-toggle-sound');
  soundBtn.textContent = soundOn ? '🔊' : '🔇';
  soundBtn.addEventListener('click', () => {
    soundOn = !soundOn; safeSet(SOUND_KEY, soundOn ? 'on' : 'off'); soundBtn.textContent = soundOn ? '🔊' : '🔇';
    if (soundOn) startWaves(); else stopWaves();
  });
  // Crew-Übersicht: auf kleinen Bildschirmen standardmäßig eingeklappt
  let crewOpen = safeGet(CREW_KEY) ? safeGet(CREW_KEY) === 'open' : window.innerWidth > 720;
  function applyCrew() { $('crew-panel').classList.toggle('collapsed', !crewOpen); }
  applyCrew();
  $('btn-toggle-players').addEventListener('click', () => { crewOpen = !crewOpen; safeSet(CREW_KEY, crewOpen ? 'open' : 'closed'); applyCrew(); });
  $('btn-reset-view').addEventListener('click', () => { if (b3) b3.resetView(); });

  // ---------------------------------------------------------------------
  // Verbindung / Zustand
  // ---------------------------------------------------------------------
  socket.on('connect', () => {
    const saved = loadSession();
    if (saved && saved.code && saved.token) {
      session = saved;
      socket.emit('joinRoom', { code: saved.code, name: saved.name, token: saved.token }, (res) => {
        if (!res.ok) { clearSession(); showScreen('screen-home'); }
        else { session.playerId = res.playerId; session.token = res.token; saveSession(); }
      });
    }
  });

  socket.on('yourDice', (data) => {
    const changed = !myDice || data.round !== myDice.round || JSON.stringify(data.dice) !== JSON.stringify(myDice.dice);
    myDice = data || myDice;
    if (changed && latestState) { renderPeekHud(); sync3d(); renderFlat(latestState); if (latestState.phase === 'playing') renderControls(latestState); }
  });
  socket.on('actionError', (d) => toast(d.error));
  socket.on('peek', (d) => {
    if (!d) return;
    if (d.on) peekMap[d.id] = true; else delete peekMap[d.id];
    if (b3 && d.id !== myId()) b3.setPeek(d.id, d.on);
    if (latestState) renderCrew(latestState);
  });
  socket.on('look', (d) => { if (b3 && d) b3.setLook(d.id, d.yaw); });

  let prevStateForFreeze = null;
  socket.on('gameState', (state) => {
    const prev = latestState;
    prevStateForFreeze = prev;
    latestState = state;
    // Gucken-Status aus dem Zustand übernehmen
    peekMap = {};
    state.players.forEach((p) => { if (p.peeking) peekMap[p.id] = true; });
    if (prev && prev.roundNo !== state.roundNo) setPeeking(false, true);
    if (state.gamePhase !== 'bidding' && peeking) setPeeking(false, true);
    const fresh = freshEvents(state);
    render(state, fresh);
  });

  function freshEvents(state) {
    if (lastSeq === null) { lastSeq = state.eventSeq; return []; }
    const fresh = (state.events || []).filter((e) => e.seq > lastSeq);
    lastSeq = state.eventSeq;
    return fresh;
  }

  function handleEvents(state, fresh) {
    fresh.forEach((ev) => {
      if (ev.t === 'reveal' && prevStateForFreeze) {
        const counts = {}; prevStateForFreeze.players.forEach((p) => { counts[p.id] = p.dice; });
        const rt0 = revealTiming(ev.actual);
        crewFreeze = { until: Date.now() + (b3 && mode3d ? rt0.banner - 300 : 1500), counts, total: prevStateForFreeze.totalDice };
        setTimeout(() => { if (latestState) { renderCrew(latestState); renderGame(latestState); } }, crewFreeze.until - Date.now() + 30);
      }
      if (ev.t === 'reveal') { const rt = revealTiming(ev.actual); revealBannerAt = Date.now() + (b3 && mode3d ? rt.banner : 1500); resultAt = Date.now() + (b3 && mode3d ? rt.banner + 2600 : 4800); }
      if (!b3 || !mode3d) {
        // ohne 3D die Töne hier abspielen
        if (ev.t === 'roll') { for (let i = 0; i < 6; i++) setTimeout(() => sound('rattle', 0.8), i * 110); setTimeout(() => sound('slam'), 800); }
        else if (ev.t === 'bid') sound('bid', 0.6);
        else if (ev.t === 'challenge') sound('liar');
        else if (ev.t === 'reveal') setTimeout(() => sound(ev.correct ? 'good' : 'bad', 0.8), 600);
        else if (ev.t === 'over') setTimeout(() => sound('win'), 1500);
      }
      if (ev.t === 'loseDie' && ev.id === myId()) setTimeout(() => vibrate([80, 60, 80]), 2600);
    });
  }

  // ---------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------
  function render(state, fresh) {
    if (state.phase === 'lobby') {
      hide($('result-modal')); dismissedResult = null;
      showScreen('screen-lobby'); renderLobby(state); return;
    }
    if ($('screen-game').classList.contains('hidden')) showScreen('screen-game');
    handleEvents(state, fresh || []);
    const expect = (fresh || []).some((e) => e.t === 'roll' || e.t === 'reveal');
    sync3d(expect);
    if (b3 && mode3d && fresh && fresh.length) b3.events(fresh);
    renderGame(state);
  }

  function renderGame(state) {
    $('game-code').textContent = state.code;
    const shownTotal = crewFreeze && Date.now() < crewFreeze.until ? crewFreeze.total : state.totalDice;
    $('round-badge').innerHTML = state.roundNo ? `Runde ${state.roundNo}<span class="extra"> · ${shownTotal} Würfel am Tisch</span>` : '';
    renderCrew(state);
    renderControls(state);
    renderBanner(state);
    renderPeekHud();
    renderFlat(state);
    renderResult(state);
    notifyTurn(state);
  }

  function notifyTurn(state) {
    if (state.phase !== 'playing' || state.currentTurnId !== myId()) return;
    const key = `${state.roundNo}:${state.turnNo}`;
    if (key === notifiedTurnKey) return;
    notifiedTurnKey = key;
    setTimeout(() => { sound('turn'); vibrate(120); }, Math.max(0, state.rollMs || 0));
  }

  function renderLobby(state) {
    $('lobby-code').textContent = state.code;
    $('lobby-count').textContent = state.players.length;
    const isHost = state.hostId === myId();
    const list = $('lobby-players'); list.innerHTML = '';
    state.players.forEach((p) => {
      const tags = [];
      if (p.isHost) tags.push(el('span', { class: 'tag host', text: 'Käpt’n' }));
      if (p.isBot) tags.push(el('span', { class: 'tag', text: '🤖 Bot' }));
      if (p.wins) tags.push(el('span', { class: 'tag', text: `🏆 ${p.wins}` }));
      if (!p.connected && !p.isBot) tags.push(el('span', { class: 'tag', text: 'getrennt' }));
      const li = el('li', { class: !p.connected && !p.isBot ? 'disconnected' : '' }, [
        el('span', { class: 'player-name' }, [el('span', { text: p.name }), ...tags]),
      ]);
      if (isHost && p.id !== state.hostId) li.appendChild(removeButton(p));
      list.appendChild(li);
    });
    if (isHost) {
      show($('lobby-bot-controls'));
      $('btn-fill-bots').classList.toggle('hidden', state.players.length >= state.minPlayers);
      $('btn-add-bot').disabled = state.players.length >= state.maxPlayers;
    } else hide($('lobby-bot-controls'));

    const st = state.settings;
    if (isHost) {
      show($('lobby-settings')); hide($('lobby-settings-display'));
      if (document.activeElement !== $('set-dice')) $('set-dice').value = String(st.dice);
      $('set-wild').checked = st.wildOnes;
      $('set-spot').checked = st.spotOn;
      if (document.activeElement !== $('set-turn')) $('set-turn').value = String(st.turnSec);
    } else {
      hide($('lobby-settings')); show($('lobby-settings-display'));
      $('lobby-settings-display').textContent = `${st.dice} Würfel pro Person · Einsen als Joker: ${st.wildOnes ? 'ja' : 'nein'} · „Genau!“: ${st.spotOn ? 'ja' : 'nein'} · ${st.turnSec ? `${st.turnSec} s pro Zug` : 'ohne Zeitlimit'}`;
    }
    const startBtn = $('btn-start'); const status = $('lobby-status');
    if (isHost) {
      const ok = state.players.length >= state.minPlayers && state.players.length <= state.maxPlayers;
      startBtn.classList.toggle('hidden', !ok);
      status.textContent = ok ? '' : `Mindestens ${state.minPlayers} Spieler nötig (max. ${state.maxPlayers}).`;
    } else { hide(startBtn); status.textContent = 'Warte, bis der Käpt’n das Spiel startet …'; }
  }

  function removeButton(p) {
    const btn = el('button', { class: 'remove-bot-btn', title: p.isBot ? 'Bot entfernen' : 'Spieler entfernen', text: '✕' });
    let armed = false; let timer = null;
    btn.addEventListener('click', () => {
      if (!armed) {
        armed = true; btn.classList.add('confirm'); btn.textContent = 'Entfernen?';
        timer = setTimeout(() => { armed = false; btn.classList.remove('confirm'); btn.textContent = '✕'; }, 2500);
        return;
      }
      clearTimeout(timer);
      if (p.isBot) socket.emit('removeBot', { botId: p.id }); else socket.emit('kickPlayer', { playerId: p.id });
    });
    return btn;
  }

  // ----- Crew-Übersicht -----
  // Während des Aufdeckens die alten Würfelzahlen zeigen, damit das Ergebnis nicht vorher verraten wird
  let crewFreeze = null; // { until, counts: {id: n}, total }
  function frozenDice(p) { return crewFreeze && Date.now() < crewFreeze.until && crewFreeze.counts[p.id] !== undefined ? crewFreeze.counts[p.id] : p.dice; }
  function renderCrew(state) {
    const list = $('crew-list'); list.innerHTML = '';
    state.players.forEach((p) => {
      const cls = [];
      if (state.currentTurnId === p.id) cls.push('turn');
      if (p.id === myId()) cls.push('me');
      if (p.eliminated) cls.push('out');
      const kids = [el('span', { class: 'nm', text: (p.isBot ? '🤖 ' : '') + p.name, title: p.name })];
      const right = el('span', { class: 'dice' });
      if (peekMap[p.id] || (p.id === myId() && peeking)) right.appendChild(el('span', { class: 'peek', text: '👀 ' }));
      const fd = frozenDice(p);
      right.appendChild(document.createTextNode(p.eliminated && fd === 0 ? '☠' : `🎲 ${fd}`));
      kids.push(right);
      list.appendChild(el('li', { class: cls.join(' ') }, kids));
    });
    if (state.bid) {
      list.appendChild(el('li', { class: 'bid-row' }, [el('span', { class: 'nm', text: 'Gebot:' }), el('span', { class: 'dice' }, [document.createTextNode(`${state.bid.qty} × `), dieEl(state.bid.face, 'sm')])]));
    }
  }

  // ----- Gucken -----
  function canPeekNow() {
    const s = latestState;
    if (!s || s.phase !== 'playing' || s.gamePhase !== 'bidding') return false;
    const me = s.players.find((p) => p.id === myId());
    return !!(me && !me.eliminated && me.dice > 0);
  }
  function setPeeking(on, silent) {
    on = !!on && canPeekNow();
    if (on === peeking) return;
    peeking = on;
    if (!silent || !on) socket.emit('peek', { on });
    if (b3) b3.setMyPeek(on);
    $('btn-peek').classList.toggle('on', on);
    $('btn-peek').innerHTML = on ? '🎲 <span class="lbl-long">Becher absetzen</span><span class="lbl-short">Absetzen</span>' : '🎲 <span class="lbl-long">Unter den Becher schauen</span><span class="lbl-short">Schauen</span>';
    renderPeekHud();
    if (latestState) renderCrew(latestState);
  }
  $('btn-peek').addEventListener('click', () => setPeeking(!peeking));
  let spaceDown = false;
  document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space' || e.repeat || isTyping(e)) return;
    if ($('screen-game').classList.contains('hidden')) return;
    e.preventDefault(); spaceDown = true; setPeeking(true);
  });
  document.addEventListener('keyup', (e) => {
    if (e.code !== 'Space' || !spaceDown) return;
    spaceDown = false; setPeeking(false);
  });
  function isTyping(e) { const t = e.target; return t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA'); }

  function renderPeekHud() {
    const hud = $('peek-hud');
    const s = latestState;
    const ok = peeking && s && myDice && myDice.round === s.roundNo && myDice.dice.length;
    if (!ok) { hide(hud); return; }
    hud.innerHTML = '';
    myDice.dice.slice().sort((a, b) => a - b).forEach((v) => hud.appendChild(dieEl(v)));
    show(hud);
  }

  // ----- Steuerung -----
  function minQtyFor(state, face) {
    const b = state.bid;
    if (!b) return 1;
    return face > b.face ? b.qty : b.qty + 1;
  }
  function renderControls(state) {
    const bar = $('control-bar');
    const me = state.players.find((p) => p.id === myId());
    const myTurn = state.phase === 'playing' && state.currentTurnId === myId();
    const rolling = state.rollMs > 0;
    bar.classList.toggle('my-turn', myTurn && !rolling);
    const status = $('status-line'); status.innerHTML = '';
    const bidFrag = () => (state.bid ? [el('span', { class: 'opt' }, [document.createTextNode(' · Gebot: '), el('b', { text: `${state.bid.qty} ×` }), dieEl(state.bid.face, 'sm'), document.createTextNode(` (${pname(state, state.bid.id)})`)])] : []);

    const peekBtn = $('btn-peek');
    peekBtn.classList.toggle('hidden', !(me && !me.eliminated && state.phase === 'playing' && state.gamePhase === 'bidding'));

    if (state.phase === 'gameover') {
      status.appendChild(el('span', { html: `🏆 <b>${escapeHtml(pname(state, state.winnerId))}</b> gewinnt Liar's Dice!` }));
    } else if (state.gamePhase === 'reveal') {
      status.appendChild(el('span', { text: 'Aufgedeckt – es wird gezählt …' }));
    } else if (me && me.eliminated) {
      status.appendChild(el('span', { text: '☠ Du hast keine Würfel mehr – du schaust zu.' }));
      bidFrag().forEach((n) => status.appendChild(n));
    } else if (rolling) {
      status.appendChild(el('span', { text: '🎲 Alle schütteln ihre Becher …' }));
      setTimeout(() => { if (latestState === state) { state.rollMs = 0; renderControls(state); sync3d(false); } }, state.rollMs + 30);
    } else if (myTurn) {
      status.appendChild(el('span', { text: state.bid ? 'Du bist dran – höher bieten oder „Lügner!“ rufen.' : 'Du eröffnest – tipp auf eine Würfelseite.' }));
      bidFrag().forEach((n) => status.appendChild(n));
    } else if (state.currentTurnId) {
      status.appendChild(el('span', { html: `<b>${escapeHtml(pname(state, state.currentTurnId))}</b> überlegt …` }));
      bidFrag().forEach((n) => status.appendChild(n));
    }
    status.appendChild(el('span', { class: 'secs', id: 'turn-secs' }));

    const canBid = myTurn && !rolling && state.canRaise;
    const showCall = myTurn && !rolling && !!state.bid;
    const key = `${state.roundNo}:${state.turnNo}`;
    if (sel.key !== key) {
      sel.key = key; sel.custom = false; sel.sending = false;
      const m = state.minRaise || { qty: 1, face: 2 };
      sel.face = m.face; sel.qty = m.qty;
    }
    $('quick-bids').classList.toggle('hidden', !canBid || sel.custom);
    $('bid-controls').classList.toggle('hidden', !canBid || !sel.custom);
    $('btn-custom').classList.toggle('hidden', !canBid);
    $('btn-custom').textContent = sel.custom ? '⚡ Schnell bieten' : '✎ Anderes Gebot';
    $('call-controls').classList.toggle('hidden', !showCall);
    $('btn-spot').classList.toggle('hidden', !state.settings.spotOn);
    if (canBid) { if (sel.custom) renderBidPicker(state); else renderQuickBids(state); }

    // Host: Nächste Runde / Überspringen (Überspringen nur ohne Zeitlimit nötig)
    const hc = $('host-controls'); hc.innerHTML = '';
    const isHost = state.hostId === myId();
    if (isHost && state.gamePhase === 'reveal' && state.phase === 'playing') {
      hc.appendChild(el('button', { class: 'btn small', text: '⏭ Nächste Runde', onclick: () => socket.emit('nextRound') }));
    }
    const w = state.waiting;
    if (w && isHost && !w.ids.includes(myId()) && !state.turnMs) {
      const b = el('button', { class: 'btn ghost small hidden', id: 'btn-skip', text: '⏭ Überspringen', onclick: () => socket.emit('skipTurn') });
      hc.appendChild(b);
      skipWaitBase = { at: Date.now(), ms: w.elapsedMs };
      updateSkipBtn();
    }
    // Zug-Timer
    turnClock = state.turnMs && state.currentTurnId ? { deadline: Date.now() + state.turnMsLeft, total: state.turnMs, mine: myTurn, key } : null;
    updateTurnClock();
    // "Du bist dran": Bildschirmrand leuchtet kurz auf
    if (myTurn && !rolling && flashKey !== key) { flashKey = key; flashEdge('flash'); }
  }
  let skipWaitBase = null;
  function updateSkipBtn() {
    const b = $('btn-skip');
    if (!b || !skipWaitBase) return;
    const elapsed = skipWaitBase.ms + (Date.now() - skipWaitBase.at);
    b.classList.toggle('hidden', elapsed < 25000);
  }
  setInterval(updateSkipBtn, 1000);

  // ----- Zug-Timer (Leiste oben an der Steuerung + Sekunden + Rand-Warnung) -----
  let turnClock = null; let flashKey = null; let hurryTick = -1;
  function flashEdge(cls) {
    const f = $('turn-flash');
    f.classList.remove('flash', 'hurry');
    void f.offsetWidth; // Animation neu starten
    f.classList.add(cls);
  }
  function updateTurnClock() {
    const bar = $('turn-timer'); const secs = $('turn-secs'); const f = $('turn-flash');
    if (!turnClock) { hide(bar); if (secs) secs.textContent = ''; f.classList.remove('hurry'); return; }
    const left = Math.max(0, turnClock.deadline - Date.now());
    const frac = Math.min(1, left / turnClock.total);
    show(bar);
    const i = bar.firstChild;
    i.style.width = (frac * 100).toFixed(1) + '%';
    bar.classList.toggle('low', left < 8000);
    if (secs) secs.textContent = ` · ${Math.ceil(left / 1000)} s`;
    if (turnClock.mine && left < 8000 && left > 0) {
      if (!f.classList.contains('hurry')) f.classList.add('hurry');
      const s = Math.ceil(left / 1000);
      if (s !== hurryTick) { hurryTick = s; sound('hurry', 0.8); if (s <= 3) vibrate(40); }
    } else f.classList.remove('hurry');
  }
  setInterval(updateTurnClock, 200);

  // ----- Schnell bieten: pro Augenzahl das kleinste erlaubte Gebot, ein Tipp bietet -----
  function openingQty(state, f) {
    // Eröffnung: Vorschlag aus den eigenen Würfeln (eigene Treffer + vorsichtige Schätzung der anderen)
    const dice = myDice && myDice.round === state.roundNo ? myDice.dice : [];
    const own = dice.filter((d) => d === f || (state.settings.wildOnes && d === 1 && f !== 1)).length;
    const p = state.settings.wildOnes && f !== 1 ? 1 / 3 : 1 / 6;
    return Math.max(1, Math.min(state.totalDice, own + Math.floor((state.totalDice - dice.length) * p * 0.6)));
  }
  function sendBid(qty, face) {
    if (sel.sending) return;
    sel.sending = true;
    socket.emit('bid', { qty, face }, (res) => { sel.sending = false; if (res && !res.ok) toast(res.error); });
  }
  function renderQuickBids(state) {
    const box = $('quick-bids'); box.innerHTML = '';
    const minFace = state.settings.wildOnes ? 2 : 1;
    const b = state.bid;
    for (let f = minFace; f <= 6; f++) {
      const q = b ? minQtyFor(state, f) : openingQty(state, f);
      if (q > state.totalDice) continue;
      let hint = '';
      if (b && f === b.face) hint = '+1';
      else if (b && f === b.face + 1) hint = 'gleich viele';
      const btn = el('button', { class: 'quick-bid' + (hint ? ' hint' : ''), type: 'button', title: `Biete ${q} × ${f}er` }, [
        el('span', { class: 'q', text: `${q}×` }), dieEl(f),
      ]);
      if (hint) btn.appendChild(el('span', { class: 'tag-hint', text: hint }));
      btn.addEventListener('click', () => sendBid(q, f));
      box.appendChild(btn);
    }
  }
  $('btn-custom').addEventListener('click', () => {
    sel.custom = !sel.custom;
    if (latestState) renderControls(latestState);
  });

  function renderBidPicker(state) {
    const minFace = state.settings.wildOnes ? 2 : 1;
    const fp = $('face-picker'); fp.innerHTML = '';
    for (let f = minFace; f <= 6; f++) {
      const minQ = minQtyFor(state, f);
      const b = el('button', { class: 'face-btn' + (f === sel.face ? ' sel' : ''), type: 'button', title: `${f}er` }, [dieEl(f)]);
      b.disabled = minQ > state.totalDice;
      b.addEventListener('click', () => {
        sel.face = f;
        sel.qty = Math.max(sel.qty, minQtyFor(state, f));
        if (sel.qty > state.totalDice) sel.qty = state.totalDice;
        renderBidPicker(state);
      });
      fp.appendChild(b);
    }
    const minQ = minQtyFor(state, sel.face);
    if (sel.qty < minQ) sel.qty = minQ;
    $('qty-value').textContent = sel.qty;
    $('qty-minus').disabled = sel.qty <= minQ;
    $('qty-plus').disabled = sel.qty >= state.totalDice;
    $('btn-bid').disabled = minQ > state.totalDice;
    $('btn-bid').innerHTML = '';
    $('btn-bid').appendChild(document.createTextNode(`Biete ${sel.qty} ×`));
    $('btn-bid').appendChild(dieEl(sel.face, 'sm'));
  }
  $('qty-minus').addEventListener('click', () => { if (!latestState) return; sel.qty--; renderBidPicker(latestState); });
  $('qty-plus').addEventListener('click', () => { if (!latestState) return; sel.qty++; renderBidPicker(latestState); });
  $('btn-bid').addEventListener('click', () => sendBid(sel.qty, sel.face));
  $('btn-liar').addEventListener('click', () => socket.emit('callLiar', null, (res) => { if (res && !res.ok) toast(res.error); }));
  $('btn-spot').addEventListener('click', () => socket.emit('callSpot', null, (res) => { if (res && !res.ok) toast(res.error); }));

  // Höhe der Steuerleiste an die Bühne weitergeben (sie wächst auf dem Handy mehrzeilig)
  function syncBarHeight() { document.documentElement.style.setProperty('--bar-h', $('control-bar').offsetHeight + 'px'); }
  if (window.ResizeObserver) new ResizeObserver(syncBarHeight).observe($('control-bar'));
  window.addEventListener('resize', syncBarHeight);

  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  // ----- Banner beim Aufdecken -----
  let bannerTimer = null;
  function renderBanner(state) {
    const b = $('banner');
    const r = state.reveal;
    if (!r || (state.gamePhase !== 'reveal' && state.gamePhase !== 'over')) { hide(b); return; }
    const wait = revealBannerAt - Date.now();
    if (wait > 0) { hide(b); clearTimeout(bannerTimer); bannerTimer = setTimeout(() => { if (latestState) renderBanner(latestState); }, wait + 20); return; }
    b.innerHTML = '';
    b.className = 'banner ' + (r.correct ? 'good' : 'bad');
    const caller = pname(state, r.callerId); const bidder = pname(state, r.bid.id);
    b.appendChild(el('div', { class: 'small', text: `${caller} ruft „${r.kind === 'spot' ? 'Genau!' : 'Lügner!'}“ – Gebot von ${bidder}: ${r.bid.qty} × ${r.bid.face}er` }));
    b.appendChild(el('div', { class: 'big' }, [document.createTextNode(`Es liegen ${r.actual} ×`), dieEl(r.bid.face)]));
    let verdict;
    if (r.kind === 'spot') verdict = r.correct ? `Genau richtig! ${caller}${r.gainerId ? ' bekommt einen Würfel zurück' : ' behält alle Würfel'}.` : `Daneben – ${caller} verliert einen Würfel.`;
    else verdict = r.correct ? `${bidder} hat gelogen und verliert einen Würfel.` : `Das Gebot stimmt – ${caller} verliert einen Würfel.`;
    b.appendChild(el('div', { class: 'small', text: verdict + (r.wildOnes && r.bid.face !== 1 ? ' (Einsen zählen mit)' : '') }));
    show(b);
  }

  // ----- Spielende -----
  function renderResult(state) {
    const modal = $('result-modal'); const body = $('result-body');
    if (state.phase !== 'gameover' || !state.placements) { hide(modal); return; }
    const key = `${state.winnerId}:${state.roundNo}`;
    if (dismissedResult === key) { hide(modal); return; }
    const wait = resultAt - Date.now();
    if (wait > 0) { setTimeout(() => { if (latestState) renderResult(latestState); }, wait + 20); return; }
    const isHost = state.hostId === myId();
    body.innerHTML = '';
    body.appendChild(el('div', { class: 'result-crown', text: state.winnerId === myId() ? '🏴‍☠️' : '☠️' }));
    body.appendChild(el('h2', { class: 'result-title', text: `${pname(state, state.winnerId)} gewinnt!` }));
    body.appendChild(el('p', { class: 'result-note', text: state.winnerId === myId() ? 'Du hast alle anderen über den Tisch gezogen.' : 'Die See war heute nicht auf deiner Seite.' }));
    const ol = el('ol', { class: 'placements' });
    state.placements.forEach((p, i) => {
      const pl = state.players.find((q) => q.id === p.id);
      ol.appendChild(el('li', { class: i === 0 ? 'first' : '' }, [el('span', { class: 'pl', text: `${p.place}.` }), el('span', { text: p.name }), el('span', { class: 'result-note', text: pl && pl.wins ? ` 🏆 ${pl.wins}` : '' })]));
    });
    body.appendChild(ol);
    const actions = el('div', { class: 'result-actions' });
    if (isHost) actions.appendChild(el('button', { class: 'btn primary', text: 'Neue Partie (zur Lobby)', onclick: () => socket.emit('resetGame') }));
    else body.appendChild(el('p', { class: 'result-note', text: 'Warte, bis der Käpt’n eine neue Partie startet …' }));
    actions.appendChild(el('button', { class: 'btn ghost', text: 'Tisch ansehen', onclick: () => { dismissedResult = key; hide(modal); } }));
    actions.appendChild(el('button', { class: 'btn ghost', text: 'Verlassen', onclick: leave }));
    body.appendChild(actions);
    show(modal);
  }

  // ---------------------------------------------------------------------
  // 2D-Fallback (ohne WebGL)
  // ---------------------------------------------------------------------
  function renderFlat(state) {
    const box = $('flat-table');
    if (mode3d || !state || state.phase === 'lobby') { hide(box); return; }
    show(box); box.innerHTML = '';
    const r = state.reveal;
    state.players.forEach((p) => {
      const cls = ['flat-seat']; if (state.currentTurnId === p.id) cls.push('turn');
      const seat = el('div', { class: cls.join(' ') }, [el('div', { text: (p.id === myId() ? '⭐ ' : '') + p.name + (peekMap[p.id] ? ' 👀' : '') })]);
      const row = el('div', { class: 'row' });
      if (r && r.dice && r.dice[p.id]) r.dice[p.id].forEach((v) => row.appendChild(dieEl(v, (v === r.bid.face || (r.wildOnes && v === 1 && r.bid.face !== 1)) ? 'match sm' : 'dim sm')));
      else if (p.eliminated) row.appendChild(el('span', { text: '☠ raus' }));
      else row.appendChild(el('span', { text: `🥤 ${p.dice} Würfel` }));
      seat.appendChild(row);
      if (state.bid && state.bid.id === p.id) seat.appendChild(el('div', { class: 'bubble' }, [document.createTextNode(`${state.bid.qty} ×`), dieEl(state.bid.face, 'sm')]));
      box.appendChild(seat);
    });
  }

  // ---------------------------------------------------------------------
  // 3D-Szene (Three.js)
  // ---------------------------------------------------------------------
  let b3 = null; let b3Loading = false; let mode3d = false;
  function webglOk() {
    try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; }
  }
  async function ensure3d() {
    if (b3 || b3Loading || !mode3d) return;
    b3Loading = true;
    try {
      const m = await import('./table3d.js?v=1');
      m.init({
        container: $('canvas-host'),
        onCupClick: () => setPeeking(!peeking),
        onLook: (yaw) => socket.emit('look', { yaw }),
        sound,
      });
      b3 = m;
      window.__liarsDice3d = m; // für Tests/Debugging
      m.setVisible(!$('screen-game').classList.contains('hidden'));
      sync3d(false);
      if (peeking) m.setMyPeek(true);
    } catch (e) {
      console.error('3D nicht verfügbar', e);
      mode3d = false;
      if (latestState) renderFlat(latestState);
    }
    b3Loading = false;
  }
  function sync3d(expectAnim) {
    const s = latestState;
    if (!b3 || !s || s.phase === 'lobby') return;
    b3.update({
      meId: myId(),
      players: s.players.map((p) => ({ id: p.id, name: p.name, dice: p.dice, eliminated: p.eliminated, connected: p.connected, isBot: p.isBot, isHost: p.isHost, peeking: p.peeking, look: p.look })),
      currentTurnId: s.rollMs > 0 ? null : s.currentTurnId,
      bid: s.bid,
      gamePhase: s.gamePhase,
      roundNo: s.roundNo,
      reveal: s.reveal,
      myDice: myDice ? myDice.dice : null,
      myDiceRound: myDice ? myDice.round : -1,
      expectAnim: !!expectAnim,
      totalDice: s.totalDice,
      startDice: s.startDice,
      phase: s.phase,
      winnerId: s.winnerId,
      turnDeadline: s.turnMs ? Date.now() + s.turnMsLeft : 0,
      turnMs: s.turnMs || 0,
    });
  }
  mode3d = webglOk();
  if (mode3d) ensure3d();
})();
