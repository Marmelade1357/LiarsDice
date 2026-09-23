// Viele reine Bot-Partien: Invarianten prüfen, nichts darf hängen bleiben.
const E = require('../src/engine');
const bots = require('../src/bots');
const { assert } = require('./helpers');

let games = 0; let rounds = 0;
for (const rules of [{ wildOnes: true, spotOn: false }, { wildOnes: false, spotOn: true }, { wildOnes: true, spotOn: true, dice: 3 }]) {
  for (let n = 2; n <= 8; n++) {
    for (let k = 0; k < 6; k++) {
      const ids = Array.from({ length: n }, (_, i) => 'p' + i);
      const g = E.createGame(ids, { rules, startIdx: k % n });
      let steps = 0;
      while (g.phase !== 'over') {
        if (++steps > 20000) throw new Error('Partie hängt');
        if (g.phase === 'reveal') { E.nextRound(g); rounds++; continue; }
        const total = E.totalDice(g);
        assert(Object.keys(g.dice).reduce((s, id) => s + g.dice[id].length, 0) === total, 'Würfelzahl stimmt');
        const a = bots.decide(g, g.turn);
        const res = a.type === 'bid' ? E.bid(g, g.turn, a.qty, a.face) : E.challenge(g, g.turn, a.type);
        assert(res.ok, `Bot-Aktion gültig (${JSON.stringify(a)}: ${res.error})`);
      }
      assert(E.alive(g).length === 1 && g.winnerId === E.alive(g)[0], 'genau eine:r übrig');
      games++;
    }
  }
}
console.log(`OK: bots-sim.test.js - ${games} Bot-Partien, ${rounds} Runden`);
