// Liar's Dice - reine Spiellogik (vom Server und von den Tests genutzt).
//
// Regeln wie in "Fluch der Karibik - Die Truhe des Todes":
//  - Jede Person hat anfangs N Würfel (Standard 5) unter einem Becher.
//  - Reihum wird geboten: "Es liegen mindestens <Anzahl> × <Augenzahl> auf dem Tisch"
//    (alle Würfel aller Personen zusammen).
//  - Wer dran ist, muss erhöhen (mehr Würfel, oder gleiche Anzahl mit höherer
//    Augenzahl) - oder "Lügner!" rufen.
//  - Bei "Lügner!" heben alle ihre Becher. Stimmt das Gebot (es liegen mindestens so
//    viele), verliert der/die Rufende einen Würfel, sonst der/die Bietende.
//  - Optional sind Einsen Joker (zählen für jede Augenzahl, auf Einsen wird dann nicht
//    geboten) und "Genau!" (Anzahl stimmt exakt: Rufende:r bekommt einen Würfel zurück,
//    sonst verliert er/sie einen).
//  - Wer keine Würfel mehr hat, scheidet aus. Wer zuletzt noch Würfel hat, gewinnt.
//  - Die nächste Runde beginnt, wer den Würfel verloren hat (bzw. die nächste Person
//    im Uhrzeigersinn, falls diese ausgeschieden ist).

'use strict';

const DEFAULT_RULES = { dice: 5, wildOnes: true, spotOn: false };

function rollDie(rng) { return 1 + Math.floor((rng || Math.random)() * 6); }

function createGame(ids, opts) {
  const o = opts || {};
  const rules = Object.assign({}, DEFAULT_RULES, o.rules || {});
  const g = {
    order: ids.slice(),
    rules,
    counts: {},     // id -> Anzahl Würfel
    dice: {},       // id -> [Augen]
    out: [],        // ausgeschiedene ids (in Reihenfolge)
    turn: null,
    starter: null,
    bid: null,      // { id, qty, face }
    bids: [],       // Verlauf der aktuellen Runde
    phase: 'bidding', // bidding | reveal | over
    turnNo: 0,
    roundNo: 0,
    reveal: null,
    winnerId: null,
    rng: o.rng || Math.random,
  };
  ids.forEach((id) => { g.counts[id] = rules.dice; });
  const startIdx = Math.max(0, Math.min(ids.length - 1, o.startIdx || 0));
  startRound(g, ids[startIdx]);
  return g;
}

function alive(g) { return g.order.filter((id) => g.counts[id] > 0); }
function totalDice(g) { return alive(g).reduce((s, id) => s + g.counts[id], 0); }

function nextAlive(g, id) {
  const n = g.order.length;
  let i = g.order.indexOf(id);
  for (let k = 0; k < n; k++) {
    i = (i + 1) % n;
    if (g.counts[g.order[i]] > 0) return g.order[i];
  }
  return null;
}

function startRound(g, starterId) {
  g.roundNo++;
  g.bid = null;
  g.bids = [];
  g.reveal = null;
  g.phase = 'bidding';
  g.dice = {};
  alive(g).forEach((id) => {
    g.dice[id] = [];
    for (let k = 0; k < g.counts[id]; k++) g.dice[id].push(rollDie(g.rng));
  });
  let s = starterId;
  if (!s || !(g.counts[s] > 0)) s = s ? nextAlive(g, s) : alive(g)[0];
  g.starter = s;
  g.turn = s;
  g.turnNo++;
  return [{ t: 'roll', round: g.roundNo, starter: s }];
}

function minFace(g) { return g.rules.wildOnes ? 2 : 1; }

function isHigher(g, qty, face, bid) {
  if (!bid) return true;
  if (qty > bid.qty) return true;
  return qty === bid.qty && face > bid.face;
}

function validBid(g, qty, face) {
  if (!Number.isInteger(qty) || !Number.isInteger(face)) return 'Ungültiges Gebot.';
  if (face < minFace(g) || face > 6) return g.rules.wildOnes ? 'Einsen sind Joker – biete auf 2 bis 6.' : 'Augenzahl 1 bis 6.';
  if (qty < 1) return 'Mindestens ein Würfel.';
  if (qty > totalDice(g)) return `Es liegen nur ${totalDice(g)} Würfel auf dem Tisch.`;
  if (!isHigher(g, qty, face, g.bid)) return 'Du musst höher bieten: mehr Würfel oder gleiche Anzahl mit höherer Augenzahl.';
  return null;
}

// Kleinstes erlaubtes Gebot (für UI-Vorschläge / Bots).
function minRaise(g) {
  const b = g.bid;
  if (!b) return { qty: 1, face: minFace(g) };
  if (b.face < 6) return { qty: b.qty, face: b.face + 1 };
  return { qty: b.qty + 1, face: minFace(g) };
}

function canRaise(g) {
  const m = minRaise(g);
  return m.qty <= totalDice(g);
}

function bid(g, id, qty, face) {
  if (g.phase !== 'bidding') return { ok: false, error: 'Gerade wird nicht geboten.' };
  if (g.turn !== id) return { ok: false, error: 'Du bist nicht dran.' };
  qty = Number(qty); face = Number(face);
  const err = validBid(g, qty, face);
  if (err) return { ok: false, error: err };
  g.bid = { id, qty, face };
  g.bids.push(g.bid);
  g.turn = nextAlive(g, id);
  g.turnNo++;
  return { ok: true, events: [{ t: 'bid', id, qty, face }] };
}

function countFace(g, face) {
  let n = 0;
  Object.keys(g.dice).forEach((id) => {
    g.dice[id].forEach((d) => { if (d === face || (g.rules.wildOnes && d === 1 && face !== 1)) n++; });
  });
  return n;
}

// kind: 'liar' | 'spot'
function challenge(g, id, kind) {
  if (g.phase !== 'bidding') return { ok: false, error: 'Gerade wird nicht geboten.' };
  if (g.turn !== id) return { ok: false, error: 'Du bist nicht dran.' };
  if (!g.bid) return { ok: false, error: 'Es gibt noch kein Gebot.' };
  kind = kind === 'spot' ? 'spot' : 'liar';
  if (kind === 'spot' && !g.rules.spotOn) return { ok: false, error: '„Genau!“ ist in diesem Spiel ausgeschaltet.' };
  const b = g.bid;
  const actual = countFace(g, b.face);
  let loserId = null; let gainerId = null; let correct;
  if (kind === 'liar') {
    correct = actual < b.qty; // Rufende:r hat recht, wenn weniger da sind
    loserId = correct ? b.id : id;
  } else {
    correct = actual === b.qty;
    if (correct) { if (g.counts[id] < g.rules.dice) gainerId = id; } else loserId = id;
  }
  const events = [{ t: 'challenge', id, kind, bidderId: b.id }];
  g.reveal = {
    callerId: id, kind, bid: Object.assign({}, b), actual, correct, loserId, gainerId,
    dice: JSON.parse(JSON.stringify(g.dice)), wildOnes: g.rules.wildOnes,
  };
  events.push({ t: 'reveal', callerId: id, kind, bid: Object.assign({}, b), actual, correct, loserId, gainerId, dice: g.reveal.dice });
  if (loserId) {
    g.counts[loserId]--;
    events.push({ t: 'loseDie', id: loserId, left: g.counts[loserId] });
    if (g.counts[loserId] === 0) { g.out.push(loserId); events.push({ t: 'out', id: loserId }); }
  }
  if (gainerId) { g.counts[gainerId]++; events.push({ t: 'gainDie', id: gainerId, left: g.counts[gainerId] }); }
  g.turn = null;
  g.turnNo++;
  const rest = alive(g);
  if (rest.length <= 1) {
    g.phase = 'over';
    g.winnerId = rest[0] || null;
    events.push({ t: 'over', id: g.winnerId });
  } else {
    g.phase = 'reveal';
  }
  return { ok: true, events };
}

// Nach der Aufdeck-Phase: nächste Runde.
function nextRound(g) {
  if (g.phase !== 'reveal') return { ok: false, error: 'Keine Aufdeck-Phase.' };
  const r = g.reveal;
  const starter = (r && (r.loserId || r.callerId)) || g.starter;
  return { ok: true, events: startRound(g, starter) };
}

// Eine Person verlässt dauerhaft das Spiel (z. B. übersprungen ohne Bot) - wird hier nicht
// gebraucht, Bots übernehmen getrennte Personen.

module.exports = {
  DEFAULT_RULES, createGame, alive, totalDice, nextAlive, minFace, minRaise, canRaise,
  validBid, bid, challenge, nextRound, countFace, isHigher,
};
