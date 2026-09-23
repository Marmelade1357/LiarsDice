// Bot-KI für Liar's Dice. Schätzt anhand der eigenen Würfel und der Wahrscheinlichkeit,
// wie viele Würfel einer Augenzahl insgesamt liegen, und entscheidet zwischen Erhöhen,
// "Lügner!" und (falls erlaubt) "Genau!". Ein bisschen Zufall sorgt fürs Bluffen.

'use strict';

const E = require('./engine');

// P(X >= k) für X ~ Binomial(n, p)
function atLeast(n, p, k) {
  if (k <= 0) return 1;
  if (k > n) return 0;
  let sum = 0;
  let c = 1; // n über i
  for (let i = 0; i <= n; i++) {
    if (i >= k) sum += c * Math.pow(p, i) * Math.pow(1 - p, n - i);
    c = (c * (n - i)) / (i + 1);
  }
  return Math.min(1, sum);
}
function exactly(n, p, k) {
  if (k < 0 || k > n) return 0;
  let c = 1;
  for (let i = 0; i < k; i++) c = (c * (n - i)) / (i + 1);
  return c * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function ownCount(g, id, face) {
  return (g.dice[id] || []).filter((d) => d === face || (g.rules.wildOnes && d === 1 && face !== 1)).length;
}

// Wahrscheinlichkeit, dass mindestens qty × face liegen, aus Sicht von id.
function probAtLeast(g, id, qty, face) {
  const mine = ownCount(g, id, face);
  const unknown = E.totalDice(g) - (g.dice[id] || []).length;
  const p = g.rules.wildOnes && face !== 1 ? 1 / 3 : 1 / 6;
  return atLeast(unknown, p, qty - mine);
}
function probExactly(g, id, qty, face) {
  const mine = ownCount(g, id, face);
  const unknown = E.totalDice(g) - (g.dice[id] || []).length;
  const p = g.rules.wildOnes && face !== 1 ? 1 / 3 : 1 / 6;
  return exactly(unknown, p, qty - mine);
}

function decide(g, id, rnd) {
  const r = rnd || Math.random;
  const bidNow = g.bid;
  const total = E.totalDice(g);
  const myDice = g.dice[id] || [];
  const unknown = total - myDice.length;
  const pOf = (face) => (g.rules.wildOnes && face !== 1 ? 1 / 3 : 1 / 6);
  const expected = (face) => ownCount(g, id, face) + unknown * pOf(face);

  // Eröffnung: Augenzahl, von der man am meisten hat; Anzahl etwas unter dem Erwartungswert.
  if (!bidNow) {
    let bestFace = E.minFace(g); let bestOwn = -1;
    for (let f = E.minFace(g); f <= 6; f++) {
      const own = ownCount(g, id, f) + r() * 0.9; // Zufall bricht Gleichstände (und blufft manchmal)
      if (own > bestOwn) { bestOwn = own; bestFace = f; }
    }
    const qty = Math.max(1, Math.min(total, Math.round(expected(bestFace) * 0.55 + r() * 1.5 - 0.5)));
    return { type: 'bid', qty, face: bestFace };
  }

  const pTrue = probAtLeast(g, id, bidNow.qty, bidNow.face);
  // Mögliche Erhöhungen: höchstens zwei über dem kleinsten Gebot
  const m = E.minRaise(g);
  const cands = [];
  for (let face = E.minFace(g); face <= 6; face++) {
    for (let qty = m.qty; qty <= Math.min(total, m.qty + 2); qty++) {
      if (!E.isHigher(g, qty, face, bidNow)) continue;
      const pr = probAtLeast(g, id, qty, face);
      cands.push({ qty, face, pr, score: pr - (qty - m.qty) * 0.08 + ownCount(g, id, face) * 0.03 + r() * 0.08 });
    }
  }
  cands.sort((a, b) => b.score - a.score);
  const best = cands[0];

  if (g.rules.spotOn) {
    const pExact = probExactly(g, id, bidNow.qty, bidNow.face);
    if (pExact > 0.38 && pExact > pTrue * 0.6 && r() < 0.6) return { type: 'spot' };
  }
  const nerve = 0.32 + (r() - 0.5) * 0.14;
  if (!best || (pTrue < nerve && (!best || best.pr < 0.5)) || (best && best.pr < 0.25 && pTrue < 0.55)) return { type: 'liar' };
  // Gelegentlich bluffen: Augenzahl, von der man wenig hat, knapp erhöhen
  if (r() < 0.12) {
    const bluff = cands.filter((c) => c.qty === m.qty && c.pr >= 0.3);
    if (bluff.length) { const b = bluff[Math.floor(r() * bluff.length)]; return { type: 'bid', qty: b.qty, face: b.face }; }
  }
  return { type: 'bid', qty: best.qty, face: best.face };
}

module.exports = { decide, probAtLeast, atLeast };
