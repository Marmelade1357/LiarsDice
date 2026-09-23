// Detailliertere Insel-Deko (prozedural): Palmen, Büsche, Gras, Felsen, Muscheln, Seesterne,
// Treibholz und Schiffe mit geformtem Rumpf, Takelage und Segeln.

import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------------------
// Hilfen
// ---------------------------------------------------------------------------
function rng(seed) { let s = seed >>> 0 || 1; return () => { s ^= s << 13; s ^= s >>> 17; s ^= s << 5; return ((s >>> 0) % 100000) / 100000; }; }
function mk(geo, mat, cast = true, recv = true) { const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = recv; return m; }
function colorize(geo, fn) {
  const p = geo.attributes.position; const col = new Float32Array(p.count * 3); const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) { fn(c, p.getX(i), p.getY(i), p.getZ(i), i); col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}
function clean(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const n = new THREE.BufferGeometry();
  ['position', 'normal', 'uv', 'color'].forEach((a) => { if (g.attributes[a]) n.setAttribute(a, g.attributes[a]); });
  if (!n.attributes.uv) n.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n.attributes.position.count * 2), 2));
  if (!n.attributes.color) { const c = new Float32Array(n.attributes.position.count * 3).fill(1); n.setAttribute('color', new THREE.BufferAttribute(c, 3)); }
  return n;
}
function merge(list) { return mergeGeometries(list.map(clean)); }

// Rohr entlang einer Kurve mit variablem Radius rFn(t) und optionaler Farbe colFn(t, a)
export function taperedTube(curve, segs, radial, rFn, colFn) {
  const frames = curve.computeFrenetFrames(segs, false);
  const pos = [], nor = [], uv = [], col = [], idx = [];
  const c = new THREE.Color();
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    const P = curve.getPointAt(t);
    const N = frames.normals[i], B = frames.binormals[i];
    const r = rFn(t);
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * Math.PI * 2;
      const nx = Math.cos(a) * N.x + Math.sin(a) * B.x, ny = Math.cos(a) * N.y + Math.sin(a) * B.y, nz = Math.cos(a) * N.z + Math.sin(a) * B.z;
      pos.push(P.x + nx * r, P.y + ny * r, P.z + nz * r);
      nor.push(nx, ny, nz);
      uv.push(j / radial, t);
      if (colFn) colFn(c, t, a); else c.setRGB(1, 1, 1);
      col.push(c.r, c.g, c.b);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < radial; j++) {
    const a = i * (radial + 1) + j, b = a + radial + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  return g;
}

// ---------------------------------------------------------------------------
// Palme
// ---------------------------------------------------------------------------
let trunkTex = null;
function trunkTexture() {
  if (trunkTex) return trunkTex;
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 256;
  const c = cv.getContext('2d');
  const g = c.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#8a7258'); g.addColorStop(1, '#6e5a44');
  c.fillStyle = g; c.fillRect(0, 0, 128, 256);
  for (let i = 0; i < 260; i++) { c.fillStyle = `rgba(${40 + Math.random() * 30},${30 + Math.random() * 20},20,${0.1 + Math.random() * 0.2})`; c.fillRect(Math.random() * 128, Math.random() * 256, 1 + Math.random() * 2, 6 + Math.random() * 20); }
  // Blattnarben-Ring
  c.fillStyle = 'rgba(45,32,20,0.75)'; c.fillRect(0, 0, 128, 10);
  c.fillStyle = 'rgba(190,165,130,0.35)'; c.fillRect(0, 10, 128, 6);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping;
  trunkTex = t; return t;
}

function frondGeometry(L, elev, r, dead) {
  const leaves = [];
  const pos = [], col = [], idx = [];
  const c = new THREE.Color();
  // Blattspindel (Rachis) in der x-y-Ebene, zeigt nach +x
  const pt = (u) => new THREE.Vector3(Math.cos(elev) * L * u, Math.sin(elev) * L * u - (Math.sin(elev) + (dead ? 0.9 : 0.42)) * L * u * u, 0);
  const curvePts = []; for (let k = 0; k <= 12; k++) curvePts.push(pt(k / 12));
  const curve = new THREE.CatmullRomCurve3(curvePts);
  const baseCol = dead ? new THREE.Color(0x8a6a3a) : new THREE.Color().setHSL(0.25 + r() * 0.04, 0.55, 0.3 + r() * 0.06);
  const tipCol = dead ? new THREE.Color(0xb08a50) : new THREE.Color().setHSL(0.2 + r() * 0.03, 0.6, 0.45);
  leaves.push(taperedTube(curve, 20, 5, (t) => 0.028 * (1 - t) + 0.004, (cc, t) => cc.copy(baseCol).lerp(tipCol, t * 0.6)));
  const N = dead ? 16 : 34;
  let vi = 0;
  for (let k = 0; k < N; k++) {
    const u = 0.1 + (k / (N - 1)) * 0.88;
    const P = curve.getPointAt(u);
    const T = curve.getTangentAt(u);
    const len = L * 0.42 * Math.pow(Math.sin(Math.PI * Math.min(1, u * 1.05)), 0.55) * (1 - 0.25 * u);
    for (const sd of [1, -1]) {
      // Blättchen: seitlich, leicht nach vorn und nach unten hängend
      const side = new THREE.Vector3(0, 0, sd);
      const dir = side.clone().multiplyScalar(Math.cos(0.55)).addScaledVector(T, Math.sin(0.55)).add(new THREE.Vector3(0, -(dead ? 0.9 : 0.35 + 0.25 * u), 0)).normalize();
      const up = new THREE.Vector3().crossVectors(dir, T).normalize();
      const w = 0.04 * (dead ? 0.6 : 1);
      const segN = 3;
      for (let s = 0; s <= segN; s++) {
        const f = s / segN;
        const center = P.clone().addScaledVector(dir, len * f).addScaledVector(new THREE.Vector3(0, -1, 0), len * f * f * 0.25);
        const ww = w * Math.sin(Math.PI * Math.min(0.95, f * 0.9 + 0.1));
        const a = center.clone().addScaledVector(T, ww), b = center.clone().addScaledVector(T, -ww);
        pos.push(a.x, a.y, a.z, b.x, b.y, b.z);
        c.copy(baseCol).lerp(tipCol, 0.3 + f * 0.7 * (0.6 + 0.4 * u));
        const shade = 0.85 + r() * 0.3;
        col.push(c.r * shade, c.g * shade, c.b * shade, c.r * shade, c.g * shade, c.b * shade);
      }
      for (let s = 0; s < segN; s++) { const o = vi + s * 2; idx.push(o, o + 1, o + 2, o + 1, o + 3, o + 2); }
      vi += (segN + 1) * 2;
    }
  }
  const lg = new THREE.BufferGeometry();
  lg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  lg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  lg.setIndex(idx);
  lg.computeVertexNormals();
  leaves.push(lg);
  return merge(leaves);
}

let frondMat = null, trunkMat = null, nutMat = null;
export function buildPalm(x, z, height, leanX, leanZ, seed) {
  const r = rng(seed * 7919 + 13);
  if (!frondMat) {
    frondMat = new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.75 });
    trunkMat = new THREE.MeshStandardMaterial({ map: trunkTexture(), vertexColors: true, roughness: 0.95 });
    nutMat = new THREE.MeshStandardMaterial({ color: 0x5a3f22, roughness: 0.6 });
  }
  const g = new THREE.Group();
  const top = new THREE.Vector3(leanX * height * 0.45, height, leanZ * height * 0.45);
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -0.2, 0),
    new THREE.Vector3(top.x * 0.08, height * 0.3, top.z * 0.08),
    new THREE.Vector3(top.x * 0.4, height * 0.65, top.z * 0.4),
    top,
  ]);
  const rings = Math.round(height * 5);
  const trunkGeo = taperedTube(curve, Math.round(height * 22), 14, (t) => {
    const base = 0.2 - 0.085 * t + (t < 0.05 ? (0.05 - t) * 2.2 : 0);
    const ring = Math.pow(Math.abs(Math.sin(t * rings * Math.PI)), 4);
    return base * (1 + 0.07 * ring);
  }, (c, t) => c.setRGB(0.95 - 0.15 * t, 0.95 - 0.12 * t, 0.95 - 0.1 * t));
  // UV entlang des Stamms so strecken, dass die Ringe zur Textur passen
  const uvA = trunkGeo.attributes.uv; for (let i = 0; i < uvA.count; i++) uvA.setY(i, uvA.getY(i) * rings);
  g.add(mk(trunkGeo, trunkMat));
  const crown = new THREE.Group(); crown.position.copy(top); g.add(crown);
  const bulb = mk(new THREE.SphereGeometry(0.2, 12, 10), trunkMat); bulb.scale.set(1, 0.8, 1); crown.add(bulb);
  const fronds = [];
  const n = 11 + Math.floor(r() * 3);
  for (let i = 0; i < n; i++) {
    const dead = i >= n - 2;
    const L = (2.3 + r() * 0.8) * (height / 5.5 * 0.4 + 0.6);
    const elev = dead ? -0.2 : 0.25 + r() * 0.55;
    const holder = new THREE.Group();
    holder.rotation.y = (i / n) * Math.PI * 2 + r() * 0.4;
    holder.add(mk(frondGeometry(L, elev, r, dead), frondMat, true, false));
    holder.userData.dynamic = true;
    crown.add(holder);
    fronds.push({ obj: holder, base: 0, ph: i * 0.7 + seed });
  }
  for (let i = 0; i < 5; i++) {
    const nut = mk(new THREE.SphereGeometry(0.11, 12, 10), nutMat);
    nut.scale.set(1, 1.1, 1);
    nut.position.set(Math.cos(i * 1.3 + seed) * 0.16, -0.16 - (i % 2) * 0.06, Math.sin(i * 1.3 + seed) * 0.16);
    crown.add(nut);
  }
  g.position.set(x, 0, z);
  return { group: g, fronds };
}

// ---------------------------------------------------------------------------
// Büsche, Gras, Felsen, Strandgut
// ---------------------------------------------------------------------------
function noise3(x, y, z) { return Math.sin(x * 3.1 + y * 1.7) * Math.cos(z * 2.9 - x * 1.3) * 0.5 + Math.sin(x * 7.3 + z * 5.1 + y * 4.3) * 0.25 + Math.sin(y * 11.7 + z * 9.1) * 0.12; }

export function bushGeometry(seed) {
  const r = rng(seed);
  const parts = [];
  const n = 5 + Math.floor(r() * 4);
  for (let i = 0; i < n; i++) {
    const s = 0.28 + r() * 0.3;
    const g = mergeVertices(new THREE.IcosahedronGeometry(s, 3).deleteAttribute('normal').deleteAttribute('uv'));
    const p = g.attributes.position;
    for (let k = 0; k < p.count; k++) { const x = p.getX(k), y = p.getY(k), z = p.getZ(k); const d = 1 + noise3(x * 5 + i, y * 5, z * 5) * 0.18; p.setXYZ(k, x * d, y * d * 0.85, z * d); }
    g.translate((r() - 0.5) * 0.7, s * 0.6 + r() * 0.15, (r() - 0.5) * 0.7);
    g.computeVertexNormals();
    const hue = 0.24 + r() * 0.08, light = 0.22 + r() * 0.1;
    colorize(g, (c, x, y) => c.setHSL(hue, 0.55, light + y * 0.12));
    parts.push(g);
  }
  return merge(parts);
}

export function grassTuftGeometry(seed) {
  const r = rng(seed);
  const pos = [], col = [], idx = [];
  let v = 0;
  const c = new THREE.Color();
  for (let i = 0; i < 14; i++) {
    const a = r() * Math.PI * 2, lean = 0.2 + r() * 0.5, hgt = 0.25 + r() * 0.3, w = 0.02;
    const dx = Math.cos(a), dz = Math.sin(a);
    const ox = (r() - 0.5) * 0.12, oz = (r() - 0.5) * 0.12;
    for (let s = 0; s <= 3; s++) {
      const f = s / 3;
      const x = ox + dx * lean * hgt * f * f, y = hgt * f, z = oz + dz * lean * hgt * f * f;
      const ww = w * (1 - f);
      pos.push(x - dz * ww, y, z + dx * ww, x + dz * ww, y, z - dx * ww);
      c.setHSL(0.17 + r() * 0.06, 0.5, 0.25 + f * 0.25);
      col.push(c.r, c.g, c.b, c.r, c.g, c.b);
    }
    for (let s = 0; s < 3; s++) { const o = v + s * 2; idx.push(o, o + 1, o + 2, o + 1, o + 3, o + 2); }
    v += 8;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

export function rockGeometry(seed, size) {
  const g = mergeVertices(new THREE.IcosahedronGeometry(size, 4).deleteAttribute('normal').deleteAttribute('uv'));
  const p = g.attributes.position;
  const o = seed * 1.37;
  for (let k = 0; k < p.count; k++) {
    const x = p.getX(k), y = p.getY(k), z = p.getZ(k);
    const n = noise3(x / size * 1.4 + o, y / size * 1.4, z / size * 1.4 - o);
    const d = 1 + n * 0.22;
    p.setXYZ(k, x * d, Math.max(-size * 0.35, y * d * 0.7), z * d * 1.1);
  }
  g.computeVertexNormals();
  const r = rng(seed);
  const base = new THREE.Color().setHSL(0.08 + r() * 0.04, 0.08 + r() * 0.06, 0.34 + r() * 0.08);
  colorize(g, (c, x, y, z) => { const n = noise3(x * 9, y * 9, z * 9); c.copy(base).multiplyScalar(0.8 + n * 0.35 + (y > size * 0.3 ? 0.08 : 0)); });
  return g;
}

export function starfishGeometry() {
  const s = new THREE.Shape();
  for (let i = 0; i <= 10; i++) {
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2; const rr = i % 2 ? 0.035 : 0.1;
    const x = Math.cos(a) * rr, y = Math.sin(a) * rr;
    if (i === 0) s.moveTo(x, y); else s.lineTo(x, y);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 3 });
  g.rotateX(-Math.PI / 2);
  return g;
}

export function shellGeometry() {
  // Jakobsmuschel: halbe, flache Scheibe mit Rippen
  const g = new THREE.SphereGeometry(0.07, 18, 8, -Math.PI / 2 - 0.9, 1.8 + Math.PI / 2 * 0, 0, Math.PI / 2);
  const p = g.attributes.position;
  for (let k = 0; k < p.count; k++) {
    const x = p.getX(k), y = p.getY(k), z = p.getZ(k);
    const a = Math.atan2(z, x);
    p.setXYZ(k, x, y * 0.35 + Math.abs(Math.sin(a * 9)) * 0.004, z);
  }
  g.computeVertexNormals();
  return g;
}

export function driftwoodGeometry(seed) {
  const r = rng(seed);
  const pts = []; for (let i = 0; i < 5; i++) pts.push(new THREE.Vector3(i * 0.45, 0.08 + Math.sin(i * 1.3 + seed) * 0.05, (r() - 0.5) * 0.25));
  const trunk = taperedTube(new THREE.CatmullRomCurve3(pts), 24, 8, (t) => 0.1 * (1 - t * 0.6), (c, t, a) => c.setRGB(0.62 + Math.sin(a * 5) * 0.05, 0.58, 0.52));
  const br = taperedTube(new THREE.CatmullRomCurve3([new THREE.Vector3(0.9, 0.1, 0), new THREE.Vector3(1.2, 0.3, 0.3), new THREE.Vector3(1.35, 0.45, 0.55)]), 10, 6, (t) => 0.05 * (1 - t * 0.8), (c) => c.setRGB(0.6, 0.56, 0.5));
  return merge([trunk, br]);
}

// ---------------------------------------------------------------------------
// Schiff mit geformtem Rumpf, Deck, Heckaufbau, Kanonenluken, Takelage
// ---------------------------------------------------------------------------
function hullGeometry(o) {
  const NX = 34, NA = 16;
  const xs = [];
  for (let i = 0; i <= NX; i++) xs.push(-7 + (i / NX) * 14.5);
  const width = (x) => {
    const u = (x + 0.3) / 7.4;
    let w = 1.85 * Math.pow(Math.max(0, 1 - u * u), 0.45);
    if (x > 2) w *= 1 - 0.35 * Math.pow((x - 2) / 5.5, 1.4);
    if (x < -5.5) w *= 0.9;
    return Math.max(0.05, w);
  };
  const deckY = (x) => 1.1 + 0.55 * THREE.MathUtils.smoothstep(x, 4, 7.4) + 1.3 * THREE.MathUtils.smoothstep(-x, 3.8, 6.2);
  const depth = (x) => 1.9 * Math.pow(width(x) / 1.85, 0.7);
  const pos = [], col = [], idx = [];
  const cc = new THREE.Color();
  const hullC = new THREE.Color(o.hull), stripeC = new THREE.Color(o.stripe || 0x8a6a2a), railC = new THREE.Color(0xc9a24a);
  for (let i = 0; i <= NX; i++) {
    const x = xs[i], w = width(x), d = depth(x), yd = deckY(x);
    for (let j = 0; j <= NA; j++) {
      const a = (j / NA) * Math.PI;
      const s = Math.sin(a);
      const z = w * Math.cos(a) * (1 - 0.12 * Math.pow(1 - s, 2));
      const y = yd - d * Math.pow(s, 0.85);
      pos.push(x, y, z);
      const fromTop = yd - y;
      cc.copy(hullC);
      if (fromTop < 0.12) cc.copy(railC);
      else if (fromTop > 0.45 && fromTop < 0.72) cc.copy(stripeC);
      if (fromTop > 1.25) cc.multiplyScalar(0.7);
      col.push(cc.r, cc.g, cc.b);
    }
  }
  for (let i = 0; i < NX; i++) for (let j = 0; j < NA; j++) {
    const a = i * (NA + 1) + j, b = a + NA + 1;
    idx.push(a, a + 1, b, b, a + 1, b + 1);
  }
  // Deck (Deckel oben)
  const base = pos.length / 3;
  for (let i = 0; i <= NX; i++) {
    const x = xs[i], w = width(x) * 0.98, yd = deckY(x) - 0.12;
    pos.push(x, yd, w, x, yd, -w);
    col.push(0.45, 0.33, 0.2, 0.45, 0.33, 0.2);
  }
  for (let i = 0; i < NX; i++) { const a = base + i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return { geo: g, width, deckY };
}

function sailGeometry(w, h, billow, ragged, seed) {
  const g = new THREE.PlaneGeometry(w, h, 10, 8);
  const p = g.attributes.position;
  for (let k = 0; k < p.count; k++) {
    const x = p.getX(k), y = p.getY(k);
    const u = x / w, v = (y + h / 2) / h; // v = 0 unten, 1 oben
    let yy = y;
    if (ragged && v < 0.02) yy += Math.sin(x * 7 + seed) * 0.25 + Math.sin(x * 17) * 0.1;
    const bulge = Math.cos(u * Math.PI) * billow * (0.35 + 0.65 * Math.sin(Math.PI * Math.min(1, v * 1.1)));
    p.setXYZ(k, x, yy, bulge);
  }
  g.computeVertexNormals();
  return g;
}

export function buildShipModel(o, flagTex, windowsOut) {
  const g = new THREE.Group();
  const hull = hullGeometry(o);
  const hullMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, side: THREE.DoubleSide });
  g.add(mk(hull.geo, hullMat, false, false));
  const dark = new THREE.MeshStandardMaterial({ color: 0x2a1d12, roughness: 0.8 });
  const rope = new THREE.LineBasicMaterial({ color: 0x1a120c, transparent: true, opacity: 0.8 });
  // Kanonenluken und beleuchtete Heckfenster
  const port = new THREE.MeshStandardMaterial({ color: 0x0c0806, roughness: 1 });
  const win = new THREE.MeshStandardMaterial({ color: 0x3a2a14, emissive: 0xffb050, emissiveIntensity: 0.0 });
  windowsOut.push(win);
  for (let i = 0; i < 7; i++) {
    const x = -4.2 + i * 1.3;
    [1, -1].forEach((sd) => {
      const pp = mk(new THREE.PlaneGeometry(0.34, 0.3), port, false, false);
      pp.position.set(x, hull.deckY(x) - 0.62, sd * (hull.width(x) + 0.02));
      pp.rotation.y = sd > 0 ? 0 : Math.PI;
      g.add(pp);
    });
  }
  for (let i = 0; i < 4; i++) {
    const w1 = mk(new THREE.PlaneGeometry(0.3, 0.38), win, false, false);
    w1.position.set(-7.02, hull.deckY(-7) - 0.8 - (i >= 2 ? 0.55 : 0), -0.9 + (i % 2) * 1.8 * 0.5 + 0.2); w1.rotation.y = -Math.PI / 2;
    g.add(w1);
  }
  // Bugspriet
  const bs = mk(new THREE.CylinderGeometry(0.08, 0.12, 5, 8), dark, false, false);
  bs.rotation.z = -Math.PI / 2 + 0.35; bs.position.set(8.8, hull.deckY(7.3) + 0.9, 0); g.add(bs);
  // Masten, Rahen, Segel, Takelage
  const sailMat = new THREE.MeshStandardMaterial({ color: o.sail, roughness: 1, side: THREE.DoubleSide });
  const lines = [];
  const masts = o.masts || [-3.6, 0.6, 4.2];
  masts.forEach((mx, i) => {
    const hh = (i === 1 || masts.length === 1 ? 15.5 : 13) * (o.mastScale || 1);
    const y0 = hull.deckY(mx) - 0.12;
    const mast = mk(new THREE.CylinderGeometry(0.13, 0.2, hh, 8), dark, false, false);
    mast.position.set(mx, y0 + hh / 2, 0); g.add(mast);
    const top = new THREE.Vector3(mx, y0 + hh, 0);
    for (let s = 0; s < 3; s++) {
      const w = 6.4 - s * 1.5, sh = 3.4 - s * 0.55;
      const yardY = y0 + 4.6 + s * 3.9;
      const yard = mk(new THREE.CylinderGeometry(0.07, 0.07, w + 0.6, 6), dark, false, false);
      yard.rotation.x = Math.PI / 2; yard.position.set(mx, yardY, 0); g.add(yard);
      const sail = mk(sailGeometry(w, sh, o.billow || 0.8, o.ragged, i * 3 + s), sailMat, false, false);
      sail.rotation.y = Math.PI / 2; sail.position.set(mx + 0.15, yardY - sh / 2 - 0.05, 0);
      g.add(sail);
      // Wanten/Stage: Linien von der Rah zu den Bordwänden
      [1, -1].forEach((sd) => { lines.push(mx, yardY, sd * (w / 2 + 0.25), mx - 0.6, hull.deckY(mx - 0.6), sd * hull.width(mx - 0.6)); });
    }
    [1, -1].forEach((sd) => { for (let k = -1; k <= 1; k++) lines.push(top.x, top.y - 0.4, 0, mx + k * 0.5, y0 + 0.1, sd * hull.width(mx + k * 0.5)); });
    if (i < masts.length - 1) lines.push(top.x, top.y - 0.6, 0, masts[i + 1], y0 + hh * 0.55, 0);
    if (i === masts.length - 1) lines.push(top.x, top.y - 0.6, 0, 10.8, hull.deckY(7.3) + 1.8, 0);
    if (i === Math.floor(masts.length / 2) && flagTex) {
      const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.6, 8, 2), new THREE.MeshBasicMaterial({ map: flagTex, side: THREE.DoubleSide, fog: true }));
      flag.position.set(mx - 1.2, top.y + 0.6, 0);
      g.userData.flag = flag;
      g.add(flag);
    }
  });
  const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));
  g.add(new THREE.LineSegments(lg, rope));
  return g;
}

// Ruderboot: offener, spitzer Rumpf mit Duchten (Sitzbänken), auf den Sand gezogen
export function rowboatGeometry() {
  const NX = 20, NA = 10;
  const pos = [], col = [], idx = [];
  const c = new THREE.Color();
  const width = (x) => 0.62 * Math.pow(Math.max(0, 1 - Math.pow(Math.max(0, x) / 1.55, 2)), 0.6) * (x < 0 ? 1 - 0.25 * Math.pow(-x / 1.3, 2) : 1);
  for (let i = 0; i <= NX; i++) {
    const x = -1.3 + (i / NX) * 2.85;
    const w = Math.max(0.03, width(x));
    const sheer = 0.42 + 0.12 * Math.pow(Math.abs(x) / 1.4, 2);
    for (let j = 0; j <= NA; j++) {
      const a = (j / NA) * Math.PI;
      const z = w * Math.cos(a);
      const y = sheer - (0.4 * Math.min(1, w / 0.4)) * Math.pow(Math.sin(a), 0.7);
      pos.push(x, y, z);
      const plank = Math.floor((y + 0.1) * 18) % 2;
      c.setRGB(0.5 + plank * 0.06, 0.34 + plank * 0.04, 0.2);
      if (j === 0 || j === NA) c.setRGB(0.32, 0.22, 0.13);
      col.push(c.r, c.g, c.b);
    }
  }
  for (let i = 0; i < NX; i++) for (let j = 0; j < NA; j++) { const a = i * (NA + 1) + j, b = a + NA + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  const hull = new THREE.BufferGeometry();
  hull.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  hull.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  hull.setIndex(idx); hull.computeVertexNormals();
  const seats = [-0.6, 0.1, 0.75].map((x) => { const b = new THREE.BoxGeometry(0.16, 0.04, width(x) * 1.9); b.translate(x, 0.28, 0); return colorize(b, (cc) => cc.setRGB(0.45, 0.31, 0.18)); });
  const rim = taperedTube(new THREE.CatmullRomCurve3([...Array(15)].map((_, k) => { const x = -1.3 + (k / 14) * 2.85; return new THREE.Vector3(x, 0.42 + 0.12 * Math.pow(Math.abs(x) / 1.4, 2), Math.max(0.03, width(x))); })), 30, 5, () => 0.025, (cc) => cc.setRGB(0.32, 0.22, 0.13));
  const rim2 = rim.clone(); rim2.scale(1, 1, -1);
  return merge([hull, ...seats, rim, rim2]);
}
