// Später Dazugekommene: schauen während der Partie zu (sehen alle Würfel) und sitzen
// nach dem Zurücksetzen automatisch mit am Tisch.
const { startServer, stopServer, connectClient, emitAsync, waitForState, assert } = require('./helpers');

const PORT = 3995;
const ENV = { BOT_DELAY_MIN_MS: '2000', BOT_DELAY_MAX_MS: '3000', ROLL_LOCK_MS: '40' };

(async () => {
  const proc = await startServer(PORT, ENV);
  try {
    const url = `http://localhost:${PORT}`;
    const host = await connectClient(url);
    host.on('gameState', (s) => { host._last = s; });
    const created = await emitAsync(host, 'createRoom', { name: 'Jack' });
    host.emit('addBot');
    await waitForState(host, (s) => s.players.length === 2);
    host.emit('startGame');
    await waitForState(host, (s) => s.phase === 'playing');

    const late = await connectClient(url);
    let dice = null;
    late.on('yourDice', (d) => { dice = d; });
    late.on('gameState', (s) => { late._last = s; });
    const dup = await emitAsync(late, 'joinRoom', { code: created.code, name: 'jack' });
    assert(!dup.ok, 'Name auch für Zuschauer eindeutig');
    const res = await emitAsync(late, 'joinRoom', { code: created.code, name: 'Elizabeth' });
    assert(res.ok && res.watching, 'Beitritt während der Partie als Zuschauer');
    const st = await waitForState(late, (s) => s.watchers && s.watchers.length === 1);
    assert(st.players.length === 2 && !st.players.some((p) => p.id === res.playerId), 'Zuschauer spielt nicht mit');
    await new Promise((r) => setTimeout(r, 150));
    assert(dice && dice.others && Object.keys(dice.others).length === 2, 'Zuschauer sieht die Würfel aller');
    const bad = await emitAsync(late, 'bid', { qty: 1, face: 2 });
    assert(!bad || !bad.ok, 'Zuschauer kann nicht bieten');

    // Wiederverbinden als Zuschauer
    late.disconnect();
    const late2 = await connectClient(url);
    late2.on('gameState', (s) => { late2._last = s; });
    const rj = await emitAsync(late2, 'joinRoom', { code: created.code, name: 'Elizabeth', token: res.token });
    assert(rj.ok && rj.watching && rj.playerId === res.playerId, 'Zuschauer kann sich wieder verbinden');

    host.emit('resetGame');
    const lobby = await waitForState(host, (s) => s.phase === 'lobby');
    assert(lobby.players.some((p) => p.id === res.playerId) && lobby.watchers.length === 0, 'Nach dem Reset sitzt der Zuschauer mit am Tisch');
    console.log('OK: watchers.test.js - Zuschauen während der Partie, danach mitspielen');
  } finally { await stopServer(proc); }
  process.exit(0);
})().catch((e) => { console.error('FEHLER in watchers.test.js:', e); process.exit(1); });
