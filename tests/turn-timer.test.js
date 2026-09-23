// Zug-Timer: Eine verbundene, untätige Person wird nach Ablauf der Zugzeit von einem Bot
// vertreten. Mit ausgeschaltetem Timer passiert nichts automatisch.
const { startServer, stopServer, connectClient, emitAsync, waitForState, assert } = require('./helpers');

const PORT = 3991;

async function run(env, expectAuto) {
  const proc = await startServer(PORT + (expectAuto ? 0 : 1), env);
  try {
    const url = `http://localhost:${PORT + (expectAuto ? 0 : 1)}`;
    const host = await connectClient(url);
    host.on('gameState', (s) => { host._last = s; });
    const created = await emitAsync(host, 'createRoom', { name: 'Jack' });
    const guest = await connectClient(url);
    guest.on('gameState', (s) => { guest._last = s; });
    const joined = await emitAsync(guest, 'joinRoom', { code: created.code, name: 'Will' });
    assert(joined.ok, 'Setup');
    if (!expectAuto) host.emit('setSettings', { turnSec: 0 });
    await new Promise((r) => setTimeout(r, 100));
    host.emit('startGame');
    const st = await waitForState(host, (s) => s.phase === 'playing' && s.currentTurnId);
    if (expectAuto) {
      assert(st.turnMs > 0 && st.turnMsLeft > 0, 'Zugzeit wird im Zustand mitgeschickt');
      const after = await waitForState(host, (s) => s.turnNo !== st.turnNo, 5000);
      assert(after.bid && after.bid.id === st.currentTurnId, 'Nach Ablauf der Zeit hat ein Bot für die Person geboten');
      assert(after.logs.some((l) => l.text.includes('zu langsam')), 'Log-Eintrag');
      console.log('OK: turn-timer.test.js - Zeit abgelaufen, Bot entscheidet');
    } else {
      assert(!st.turnMs, 'Timer aus: keine Zugzeit');
      await new Promise((r) => setTimeout(r, 900));
      const now = host._last;
      assert(now.turnNo === st.turnNo && !now.bid, 'Ohne Timer wird niemand automatisch bewegt');
      console.log('OK: turn-timer.test.js - Timer ausgeschaltet');
    }
  } finally { await stopServer(proc); }
}

(async () => {
  const env = { TURN_MS_OVERRIDE: '500', ROLL_LOCK_MS: '50', BOT_DELAY_MIN_MS: '20', BOT_DELAY_MAX_MS: '40' };
  await run(env, true);
  await run({ ROLL_LOCK_MS: '50', BOT_DELAY_MIN_MS: '20', BOT_DELAY_MAX_MS: '40' }, false);
  process.exit(0);
})().catch((e) => { console.error('FEHLER in turn-timer.test.js:', e); process.exit(1); });
