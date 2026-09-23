// Regeln: Gebote, Lügner/Genau, Joker-Einsen, Würfelverlust, Ausscheiden, Sieg.
const E = require('../src/engine');
const { assert } = require('./helpers');

function fixed(g, dice) { g.dice = dice; Object.keys(dice).forEach((id) => { g.counts[id] = dice[id].length; }); }

// --- Gebote
let g = E.createGame(['a', 'b', 'c'], { startIdx: 0 });
assert(g.turn === 'a' && g.phase === 'bidding', 'a beginnt');
assert(Object.values(g.dice).every((d) => d.length === 5), 'je 5 Würfel');
assert(!E.bid(g, 'b', 2, 3).ok, 'nicht dran');
assert(!E.bid(g, 'a', 2, 1).ok, 'mit Joker-Einsen darf nicht auf Einsen geboten werden');
assert(!E.bid(g, 'a', 16, 3).ok, 'mehr als alle Würfel geht nicht');
assert(E.bid(g, 'a', 2, 3).ok && g.turn === 'b', 'Gebot ok, b ist dran');
assert(!E.bid(g, 'b', 2, 3).ok && !E.bid(g, 'b', 2, 2).ok && !E.bid(g, 'b', 1, 6).ok, 'muss höher sein');
assert(E.bid(g, 'b', 2, 4).ok, 'gleiche Anzahl, höhere Augen');
assert(E.bid(g, 'c', 3, 2).ok, 'mehr Würfel, beliebige Augen');
assert(E.minRaise(g).qty === 3 && E.minRaise(g).face === 3, 'minRaise');
assert(!E.challenge(g, 'a', 'spot').ok, 'Genau ist aus');

// --- Lügner: Gebot stimmt (Joker zählen) -> Rufende:r verliert
fixed(g, { a: [1, 2, 5, 5, 6], b: [2, 3, 3, 4, 4], c: [6, 6, 6, 6, 6] });
g.bid = { id: 'c', qty: 3, face: 2 };
assert(E.countFace(g, 2) === 3, 'zwei Zweien + eine Eins = 3');
let r = E.challenge(g, 'a', 'liar');
assert(r.ok && g.reveal.actual === 3 && !g.reveal.correct && g.reveal.loserId === 'a' && g.counts.a === 4, 'Gebot stimmte, a verliert');
assert(g.phase === 'reveal' && g.turn === null, 'Aufdeck-Phase');
assert(r.events.some((e) => e.t === 'reveal' && e.dice.c.length === 5), 'Reveal-Event enthält alle Würfel');
E.nextRound(g);
assert(g.phase === 'bidding' && g.turn === 'a' && g.dice.a.length === 4, 'Verlierer beginnt neue Runde mit 4 Würfeln');

// --- Lügner: gelogen -> Bietende:r verliert
fixed(g, { a: [2, 2, 2, 2], b: [3, 3, 3, 3, 3], c: [4, 4, 4, 4, 4] });
g.bid = null; g.turn = 'a';
E.bid(g, 'a', 6, 6);
r = E.challenge(g, 'b', 'liar');
assert(g.reveal.correct && g.reveal.loserId === 'a' && g.counts.a === 3, 'gelogen, a verliert');

// --- ohne Joker
g = E.createGame(['a', 'b'], { rules: { wildOnes: false, spotOn: true } });
fixed(g, { a: [1, 1, 2], b: [1, 5, 5] });
g.turn = 'a';
assert(E.bid(g, 'a', 3, 1).ok, 'ohne Joker darf auf Einsen geboten werden');
assert(E.countFace(g, 5) === 2, 'Einsen zählen nicht für Fünfen');
// Genau: exakt -> Würfel zurück (max. Start)
r = E.challenge(g, 'b', 'spot');
assert(r.ok && g.reveal.correct && !g.reveal.loserId && g.counts.b === 4, 'Genau richtig: b bekommt Würfel zurück (4, weil Start 5)');
E.nextRound(g);
fixed(g, { a: [1, 2], b: [3, 3, 3, 3, 3] });
g.turn = 'a'; g.bid = null;
E.bid(g, 'a', 3, 3);
r = E.challenge(g, 'b', 'spot');
assert(!g.reveal.correct && g.reveal.loserId === 'b' && g.counts.b === 4, 'Genau falsch: b verliert');

// --- Ausscheiden und Sieg
g = E.createGame(['a', 'b', 'c'], { rules: { dice: 1 } });
fixed(g, { a: [3], b: [4], c: [5] });
g.turn = 'a'; g.bid = null;
E.bid(g, 'a', 3, 6);
r = E.challenge(g, 'b', 'liar');
assert(g.counts.a === 0 && g.out[0] === 'a' && g.phase === 'reveal', 'a scheidet aus');
E.nextRound(g);
assert(g.turn === 'b' && !g.dice.a, 'nach Ausscheiden beginnt nächste Person; a hat keine Würfel');
g.dice = { b: [2], c: [2] };
E.bid(g, 'b', 1, 2);
r = E.challenge(g, 'c', 'liar');
assert(g.phase === 'over' && g.winnerId === 'b' && r.events.some((e) => e.t === 'over'), 'b gewinnt');

console.log('OK: engine.test.js - Regeln');

// Aussehen (Charakter-Editor): ungültige Werte werden bereinigt
const AV = require('../src/avatar');
const c = AV.cleanAvatar({ body: 99, top: 'kilt', topColor: 3, hat: 'feather', hatColor: -1, patch: 'ja', scarf: 2 });
assert(c.body === 0 && c.top === 'coat' && c.topColor === 3 && c.hat === 'feather' && c.hatColor === 0 && c.patch === false && c.scarf === 2, 'Avatar bereinigt');
assert(AV.cleanAvatar(null) === null, 'kein Avatar');
const ra = AV.randomAvatar();
assert(JSON.stringify(AV.cleanAvatar(ra)) === JSON.stringify(ra), 'Zufalls-Avatar ist gültig');
assert(AV.cleanAvatar({ top: 'officer', hat: 'captain', earring: true, hook: true }).hook === true && AV.cleanAvatar({ top: 'sailor', hat: 'beanie' }).top === 'sailor', 'neue Outfits gültig');
console.log('OK: engine.test.js - Avatar');
