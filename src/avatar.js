// Aussehen der Enten (Charakter-Editor). Wird vom Server geprüft und an alle verteilt;
// die 3D-Szene baut daraus die Figur (src3d/duck.js nutzt dieselben Optionen).
'use strict';

const OPTIONS = {
  body: 8,                                   // Gefieder (PLUMAGE in duck.js)
  top: ['coat', 'vest', 'shirt'],            // Mantel, Weste, Ringelhemd
  topColor: 8,
  hat: ['tricorn', 'feather', 'bandana', 'none'],
  hatColor: 6,
  scarf: 6,                                  // 0 = kein Halstuch, sonst Farbe 1..5
};

function randomAvatar(rnd) {
  const r = rnd || Math.random;
  const pick = (n) => Math.floor(r() * n);
  return {
    body: pick(OPTIONS.body),
    top: OPTIONS.top[pick(OPTIONS.top.length)],
    topColor: pick(OPTIONS.topColor),
    hat: OPTIONS.hat[pick(3)],
    hatColor: pick(OPTIONS.hatColor),
    patch: r() < 0.35,
    scarf: 1 + pick(OPTIONS.scarf - 1),
  };
}

function cleanAvatar(a) {
  if (!a || typeof a !== 'object') return null;
  const int = (v, n, d) => { v = Number(v); return Number.isInteger(v) && v >= 0 && v < n ? v : d; };
  return {
    body: int(a.body, OPTIONS.body, 0),
    top: OPTIONS.top.includes(a.top) ? a.top : 'coat',
    topColor: int(a.topColor, OPTIONS.topColor, 0),
    hat: OPTIONS.hat.includes(a.hat) ? a.hat : 'tricorn',
    hatColor: int(a.hatColor, OPTIONS.hatColor, 0),
    patch: a.patch === true,
    scarf: int(a.scarf, OPTIONS.scarf, 1),
  };
}

module.exports = { OPTIONS, randomAvatar, cleanAvatar };
