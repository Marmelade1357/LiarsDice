// 3D-Szene für "Liar's Dice" (Three.js) - Ich-Perspektive auf einer einsamen Pirateninsel.
// Reine Darstellung: Regeln und Zustand kommen vom Server. client.js ruft update(view)
// bei jeder Zustandsänderung, events(list) für neue Ereignisse (Würfeln, Gebote, Aufdecken)
// und setPeek()/setLook() für Live-Gesten der anderen.
// Build: npm run build3d  ->  public/table3d.js (gebündelt, minifiziert)

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { buildDuck, DUCK_PALETTES } from './duck.js';
import * as S from './scenery.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { GTAOPass } from 'three/examples/jsm/postprocessing/GTAOPass.js';
let composer = null, bloomPass = null, aoPass = null, gradePass = null, perfSamples = [];
// Grafik-Qualität: 'auto' (nach Gerät, stuft sich bei Ruckeln selbst herunter) oder fest 'low' | 'medium' | 'high'
let qualityPref = 'auto', qualityLevel = 'high';
export function setQuality(q) {
  qualityPref = ['auto', 'low', 'medium', 'high'].includes(q) ? q : 'auto';
  if (renderer) applyQuality();
  return qualityLevel;
}
export function getQuality() { return { pref: qualityPref, level: qualityLevel }; }
function disposeComposer() {
  if (!composer) return;
  composer.passes.forEach((p) => { if (p.dispose) p.dispose(); });
  composer.renderTarget1.dispose(); composer.renderTarget2.dispose();
  composer = null; aoPass = null; bloomPass = null; gradePass = null;
}
function buildComposer(withAo) {
    try {
    // Mehrfach-Abtastung (MSAA) im Zwischenpuffer, sonst gehen mit Nachbearbeitung die glatten Kanten verloren
    const rt = new THREE.WebGLRenderTarget(256, 256, { type: THREE.HalfFloatType, samples: renderer.capabilities.isWebGL2 ? 4 : 0 });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    // Umgebungsverdeckung: weiche Kontaktschatten unter Bechern, Enten, Kisten
    if (withAo) try {
      aoPass = new GTAOPass(scene, camera, 256, 256);
      aoPass.updateGtaoMaterial({ radius: 0.32, distanceExponent: 1.4, thickness: 1.2, scale: 1.1, samples: 12, distanceFallOff: 1 });
      aoPass.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 12 });
      aoPass.blendIntensity = 0.85;
      // Sprites (Namensschilder, Leuchten), Transparentes und den Himmel nicht in die Verdeckung einrechnen
      aoPass._overrideVisibility = function () {
        const cache = this._visibilityCache;
        this.scene.traverse((o) => {
          if (!o.visible) return;
          if (o.isSprite || o.isPoints || o.isLine || o === sky || (o.material && !Array.isArray(o.material) && (o.material.transparent || o.material.alphaTest > 0))) { o.visible = false; cache.push(o); }
        });
      };
      composer.addPass(aoPass);
    } catch (e) { aoPass = null; }
    bloomPass = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.32, 0.55, 0.86);
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());
    gradePass = new ShaderPass(GradeShader);
    composer.addPass(gradePass);
  } catch (e) { composer = null; }
}
const QUALITY = {
  low: { dpr: 1.25, shadows: false, shadowSize: 1024, composer: false, ao: false, fx: false },
  medium: { dpr: 1.5, shadows: true, shadowSize: 1024, composer: true, ao: false, fx: true },
  high: { dpr: 2, shadows: true, shadowSize: 2048, composer: true, ao: true, fx: true },
  mobile: { dpr: 1.5, shadows: true, shadowSize: 1024, composer: false, ao: false, fx: true }, // "Auto" auf schwächeren Geräten
};
let qFlags = QUALITY.high;
function applyQuality(flagsOverride) {
  const key = qualityPref === 'auto' ? (lowEnd ? 'mobile' : 'high') : qualityPref;
  const f = flagsOverride || QUALITY[key];
  qFlags = f;
  qualityLevel = f === QUALITY.mobile ? 'medium' : (Object.keys(QUALITY).find((k) => QUALITY[k] === f) || 'custom');
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, f.dpr));
  if (renderer.shadowMap.enabled !== f.shadows) {
    renderer.shadowMap.enabled = f.shadows;
    scene.traverse((o) => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.needsUpdate = true; }); });
  }
  if (sunLight.shadow.mapSize.x !== f.shadowSize) { sunLight.shadow.mapSize.set(f.shadowSize, f.shadowSize); if (sunLight.shadow.map) { sunLight.shadow.map.dispose(); sunLight.shadow.map = null; } }
  sunLight.castShadow = f.shadows;
  disposeComposer();
  if (f.composer) buildComposer(f.ao);
  if (atmo.prints) atmo.prints.visible = f.fx;
  perfSamples = [];
  resize();
}
// Farbfilter (nach dem Tone-Mapping): etwas mehr Kontrast und Wärme, leichte Vignette
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, night: { value: 0 }, vignette: { value: 0.28 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float night; uniform float vignette; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb;
      float l = dot(col, vec3(0.299, 0.587, 0.114));
      col = mix(vec3(l), col, 1.08 - night * 0.12);                 // Sättigung
      col = col + (col - 0.5) * 0.06 * (1.0 - col) * col * 4.0;     // sanfte S-Kurve
      vec3 warm = vec3(1.035, 1.0, 0.95), cool = vec3(0.93, 0.98, 1.06);
      col *= mix(warm, cool, night);
      col = mix(col, col * vec3(1.0, 0.97, 0.9), smoothstep(0.55, 1.0, l) * 0.25); // warme Lichter
      vec2 d = vUv - 0.5; float v = smoothstep(0.85, 0.2, length(d * vec2(1.1, 1.0)));
      col *= mix(1.0 - vignette - night * 0.12, 1.0, v);
      gl_FragColor = vec4(col, c.a);
    }`,
};

const FONT = '"Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif';
const SERIF = 'Georgia, "Times New Roman", serif';
const TABLE_Y = 0.78;          // Höhe der Tischplatte
const CUP_H = 0.23;            // Becherhöhe
const CUP_RM = 0.138;          // Radius an der Öffnung
const CUP_RB = 0.113;          // Radius am Boden
const DIE = 0.058;             // Kantenlänge Würfel
const PEEK_ANGLE = 0.78;       // wie weit der Becher beim Nachschauen angehoben wird
const SIDE_SPOT = new THREE.Vector3(0.3, 0, 0.02); // Ablageplatz des umgedrehten Bechers (rechts vom Besitzer)

const COAT_COLORS = [0x7a1f1f, 0x1f3f6b, 0x2f5a2a, 0x5a3a1f, 0x4a2a5a, 0x6b5a1f, 0x1f5a5a, 0x3a3a3a];
const SKIN = [0xe0b48a, 0xc68c5c, 0x8d5a3b, 0xf0c8a0, 0xb07850, 0x6b4430];
const HAIR = [0x2a1a10, 0x4a3020, 0x8a6a3a, 0x111111, 0x6a2a10, 0xbbbbbb];
const BANDANA = [0xb3202a, 0x1f4aa0, 0x2a2a2a, 0x8a2a8a];

let O = null;
let renderer, scene, camera, canvas, container, ro;
let visible = false;
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let tweens = [];
let seats = {};               // playerId -> Sitz (Figur, Becher, Würfel, Label …)
let seatOrder = [];
let lastView = null;
let tableGroup = null, tableR = 0.9, seatR = 1.32, tableKey = '';
let lantern = null, lanternLight = null, centerSprite = null, centerKey = '';
let water = null, sky = null, fronds = [], torches = [], ships = [], flags = [], critters = {};
let sunLight = null;
let lastChallenge = null;
// Zuschauen (nach dem Ausscheiden): fremde Würfel sichtbar, Kamera hinter einer anderen Ente
let spectId = null, spectDice = null, camSmooth = false;
export function setSpectate(id) { spectId = id || null; camSmooth = true; }
// Kamera über die Schulter der gewählten Ente (eye/_q1 werden angepasst), weich überblendet
function spectCam(eye, dt, v) {
  // Zuschauer-Kamera: über die Schulter der gewählten Ente, weich überblendet
  const spS = spectId && seats[spectId] && !seats[spectId].isMe ? seats[spectId] : null;
  if (spS && !introStart && !(winFocus && !winFocus.released && v.phase === 'gameover')) {
    _v1.set(0.32, 1.62, 0.82); spS.frame.localToWorld(_v1);
    _v2.set(0, TABLE_Y + 0.05, -(seatR - tableR) - 0.55); spS.frame.localToWorld(_v2);
    _m.lookAt(_v1, _v2, _up); _q2.setFromRotationMatrix(_m);
    _e.setFromQuaternion(_q2, 'YXZ'); _e.y += yaw; _e.x += (pitch - basePitch) * 0.8; _q2.setFromEuler(_e);
    eye.copy(_v1); _q1.copy(_q2);
  }
  if (camSmooth) {
    const k = Math.min(1, dt * 3.5);
    camera.position.lerp(eye, k); camera.quaternion.slerp(_q1, k);
    if (camera.position.distanceTo(eye) < 0.01) camSmooth = !!spS;
    _q1.copy(camera.quaternion); eye.copy(camera.position);
  }
}
// Kameraflug zum Spielstart und Kamerafahrt zur Siegerente
let introStart = 0, winFocus = null;
const INTRO_MS = 3600;
export function playIntro() { introStart = performance.now(); }
let introFixed = null;
let idleFixed = null;
export function debugIdle(kind, p) { idleFixed = kind ? { kind, p } : null; }
export function debugIntro(p) { introFixed = p; introStart = p === null ? 0 : 1; }
function skipIntro() { introStart = 0; }
let particles = [];
let myPeek = false, peekBlend = 0;
let yaw = 0, pitch = -0.28, lookSent = 0, lookLast = 0;
let revealKey = '', roundPlaced = -1;
let myDiceCache = { round: -1, dice: [] };
let shakeT = 0;
let maxAniso = 4;
let lowEnd = false;
let t = 0;
let labelScale = 1, basePitch = -0.3, lastManualLook = 0, portraitMode = false;
let countSprite = null, reveal = null; // laufendes Aufdecken (Zähl-Animation)
// Namensschilder haben auf dem Bildschirm immer dieselbe Größe (unabhängig von der Entfernung)
function labelWorldH() {
  if (!camera || !canvas) return 0.05;
  const H = Math.max(300, canvas.clientHeight || 600);
  const px = H > 1300 ? 38 : H > 950 ? 32 : 27;
  return (2 * px / H) * Math.tan((camera.fov * Math.PI) / 360);
}
function scaleSprites(st) {
  const lh = labelWorldH();
  st.label.scale.set(lh * 512 / 96, lh, 1);
  st.bubble.scale.set(0.4 * labelScale, (0.4 * labelScale * 200) / 420, 1);
}
let lastFrame = 0;

// ---------------------------------------------------------------------------
// Hilfen
// ---------------------------------------------------------------------------
function canvasTex(cv, srgb = true) {
  const tx = new THREE.CanvasTexture(cv);
  if (srgb) tx.colorSpace = THREE.SRGBColorSpace;
  tx.anisotropy = maxAniso;
  return tx;
}
function mkCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function rr(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
function ease(p) { return p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; }
function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
function lerp(a, b, k) { return a + (b - a) * k; }
function addTween(dur, delay, fn, done) { const tw = { t0: performance.now() + delay, dur, fn, done }; tweens.push(tw); return tw; }
function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function std(color, rough = 0.8, extra) { return new THREE.MeshStandardMaterial(Object.assign({ color, roughness: rough }, extra || {})); }
function mesh(geo, mat, cast = true, recv = true) { const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = recv; return m; }

// Würfelseite als Bild (auch für Sprechblasen)
function drawPips(c, x, y, s, v, pipColor) {
  const r = s * 0.095;
  const P = { a: [0.27, 0.27], b: [0.73, 0.27], c: [0.27, 0.5], d: [0.5, 0.5], e: [0.73, 0.5], f: [0.27, 0.73], g: [0.73, 0.73] };
  const L = { 1: ['d'], 2: ['a', 'g'], 3: ['a', 'd', 'g'], 4: ['a', 'b', 'f', 'g'], 5: ['a', 'b', 'd', 'f', 'g'], 6: ['a', 'b', 'c', 'e', 'f', 'g'] };
  c.fillStyle = v === 1 ? '#9a1a1a' : pipColor;
  L[v].forEach((k) => { c.beginPath(); c.arc(x + P[k][0] * s, y + P[k][1] * s, v === 1 ? r * 1.5 : r, 0, Math.PI * 2); c.fill(); });
}
function drawDieIcon(c, x, y, s, v) {
  c.save();
  c.fillStyle = '#f3ead2'; rr(c, x, y, s, s, s * 0.18); c.fill();
  c.lineWidth = s * 0.05; c.strokeStyle = '#2a1a0a'; c.stroke();
  drawPips(c, x, y, s, v, '#1a120a');
  c.restore();
}

// ---------------------------------------------------------------------------
// Texturen (alle prozedural, keine Dateien)
// ---------------------------------------------------------------------------
const dieTexCache = {};
function dieTexture(v) {
  if (dieTexCache[v]) return dieTexCache[v];
  const cv = mkCanvas(128, 128); const c = cv.getContext('2d');
  const g = c.createRadialGradient(64, 64, 10, 64, 64, 90);
  g.addColorStop(0, '#f6eed8'); g.addColorStop(1, '#d9c9a2');
  c.fillStyle = g; c.fillRect(0, 0, 128, 128);
  c.strokeStyle = 'rgba(90,60,20,0.35)'; c.lineWidth = 6; c.strokeRect(3, 3, 122, 122);
  drawPips(c, 0, 0, 128, v, '#1c130b');
  dieTexCache[v] = canvasTex(cv);
  return dieTexCache[v];
}
function woodCanvas(w, h, base, planks, dark) {
  const cv = mkCanvas(w, h); const c = cv.getContext('2d');
  c.fillStyle = base; c.fillRect(0, 0, w, h);
  const pw = w / planks;
  for (let p = 0; p < planks; p++) {
    c.fillStyle = `rgba(${dark ? 20 : 60},${dark ? 10 : 35},${dark ? 5 : 15},${Math.random() * 0.25})`;
    c.fillRect(p * pw, 0, pw, h);
    for (let i = 0; i < 26; i++) {
      const x = p * pw + Math.random() * pw;
      c.strokeStyle = `rgba(30,15,5,${0.08 + Math.random() * 0.18})`; c.lineWidth = 1 + Math.random() * 2;
      c.beginPath(); c.moveTo(x, 0); c.bezierCurveTo(x + (Math.random() - 0.5) * 12, h * 0.33, x + (Math.random() - 0.5) * 12, h * 0.66, x + (Math.random() - 0.5) * 6, h); c.stroke();
    }
    c.fillStyle = 'rgba(15,8,3,0.8)'; c.fillRect(p * pw, 0, 3, h);
  }
  return cv;
}
function sandTexture() {
  const S2 = 512;
  const cv = mkCanvas(S2, S2); const c = cv.getContext('2d');
  c.fillStyle = '#dcc394'; c.fillRect(0, 0, S2, S2);
  // weiche Farbflecken
  for (let i = 0; i < 60; i++) {
    const x0 = Math.random() * S2, y0 = Math.random() * S2, r = 30 + Math.random() * 90;
    const warm = Math.random() < 0.5;
    // nahtlos kachelbar: Flecken an den Rändern auf der Gegenseite wiederholen
    for (const ox of [-S2, 0, S2]) for (const oy of [-S2, 0, S2]) {
      const x = x0 + ox, y = y0 + oy;
      if (x + r < 0 || x - r > S2 || y + r < 0 || y - r > S2) continue;
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, warm ? 'rgba(235,205,150,0.18)' : 'rgba(185,160,115,0.16)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = g; c.fillRect(x - r, y - r, r * 2, r * 2);
    }
  }
  // Windrippel
  for (let y = 0; y < S2; y += 7) {
    c.strokeStyle = `rgba(150,120,80,${0.06 + Math.random() * 0.06})`; c.lineWidth = 2;
    const wv = (x) => Math.sin((x / S2) * Math.PI * 2 * 3 + y * 0.2) * 3; // periodisch -> nahtlos
    c.beginPath();
    for (let x = 0; x <= S2; x += 16) c.lineTo(x, y + wv(x));
    c.stroke();
    c.strokeStyle = 'rgba(255,245,220,0.07)'; c.lineWidth = 1.5;
    c.beginPath();
    for (let x = 0; x <= S2; x += 16) c.lineTo(x, y + 2 + wv(x));
    c.stroke();
  }
  // Körner
  for (let i = 0; i < 40000; i++) {
    const v = Math.random();
    c.fillStyle = v < 0.45 ? `rgba(255,245,215,${Math.random() * 0.35})` : v < 0.9 ? `rgba(120,95,60,${Math.random() * 0.25})` : `rgba(90,80,70,${Math.random() * 0.4})`;
    c.fillRect(Math.random() * S2, Math.random() * S2, 1 + Math.random(), 1 + Math.random());
  }
  const tx = canvasTex(cv); tx.wrapS = tx.wrapT = THREE.RepeatWrapping; tx.repeat.set(9, 9);
  return tx;
}
function leatherTexture() {
  // Abgenutztes Leder: hellere Grundfarbe, Flecken, Kratzer, umlaufende Nähte und ein eingebrannter Totenkopf
  const cv = mkCanvas(512, 256); const c = cv.getContext('2d');
  const g = c.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, '#b98a5a'); g.addColorStop(0.5, '#a67646'); g.addColorStop(1, '#8d6038');
  c.fillStyle = g; c.fillRect(0, 0, 512, 256);
  for (let i = 0; i < 90; i++) { // Flecken
    const x = Math.random() * 512, y = Math.random() * 256, r = 8 + Math.random() * 30;
    const rg = c.createRadialGradient(x, y, 0, x, y, r);
    const dark = Math.random() < 0.6;
    rg.addColorStop(0, dark ? 'rgba(60,35,15,0.22)' : 'rgba(230,190,140,0.16)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = rg; c.fillRect(x - r, y - r, r * 2, r * 2);
  }
  for (let i = 0; i < 9000; i++) { c.fillStyle = `rgba(40,22,8,${Math.random() * 0.16})`; c.fillRect(Math.random() * 512, Math.random() * 256, 1.5, 1.5); }
  c.lineCap = 'round';
  for (let i = 0; i < 70; i++) { // Kratzer
    const x = Math.random() * 512, y = Math.random() * 256, l = 6 + Math.random() * 26, a = (Math.random() - 0.5) * 1.2;
    c.strokeStyle = `rgba(235,205,160,${0.12 + Math.random() * 0.2})`; c.lineWidth = 0.8 + Math.random();
    c.beginPath(); c.moveTo(x, y); c.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); c.stroke();
  }
  // Nähte oben/unten und eine senkrechte Naht
  const stitch = (x0, y0, x1, y1) => {
    c.strokeStyle = 'rgba(40,22,8,0.5)'; c.lineWidth = 4; c.setLineDash([]); c.beginPath(); c.moveTo(x0, y0 + 1.5); c.lineTo(x1, y1 + 1.5); c.stroke();
    c.strokeStyle = 'rgba(240,215,165,0.9)'; c.lineWidth = 2.2; c.setLineDash([7, 6]); c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke(); c.setLineDash([]);
  };
  stitch(0, 26, 512, 26); stitch(0, 232, 512, 232); stitch(40, 26, 40, 232);
  // eingebrannter Totenkopf (gegenüber der Naht)
  c.save(); c.globalAlpha = 0.7; drawSkull(c, 296, 128, 1.05, '#3a200c'); c.restore();
  const tx = canvasTex(cv); tx.wrapS = THREE.RepeatWrapping;
  return tx;
}
function frondTexture() {
  const cv = mkCanvas(256, 64); const c = cv.getContext('2d');
  c.clearRect(0, 0, 256, 64);
  for (let i = 0; i < 44; i++) {
    const x = 10 + i * 5.5;
    const len = 26 * Math.sin(Math.PI * (i / 44)) + 4;
    const g = 90 + Math.random() * 60;
    c.strokeStyle = `rgb(${30 + Math.random() * 30},${g},${25 + Math.random() * 20})`; c.lineWidth = 4;
    c.beginPath(); c.moveTo(x, 32); c.lineTo(x + 9, 32 - len); c.stroke();
    c.beginPath(); c.moveTo(x, 32); c.lineTo(x + 9, 32 + len); c.stroke();
  }
  c.strokeStyle = '#6b7a2a'; c.lineWidth = 4; c.beginPath(); c.moveTo(0, 32); c.lineTo(256, 32); c.stroke();
  return canvasTex(cv);
}
function barkTexture() {
  const cv = mkCanvas(128, 128); const c = cv.getContext('2d');
  c.fillStyle = '#7a5a3a'; c.fillRect(0, 0, 128, 128);
  for (let y = 0; y < 128; y += 16) {
    c.fillStyle = 'rgba(40,25,10,0.55)'; c.fillRect(0, y, 128, 4);
    c.fillStyle = 'rgba(200,170,120,0.18)'; c.fillRect(0, y + 5, 128, 3);
  }
  for (let i = 0; i < 900; i++) { c.fillStyle = `rgba(0,0,0,${Math.random() * 0.2})`; c.fillRect(Math.random() * 128, Math.random() * 128, 1, 3); }
  const tx = canvasTex(cv); tx.wrapS = tx.wrapT = THREE.RepeatWrapping;
  return tx;
}

// ---------------------------------------------------------------------------
// Umgebung: Himmel, Meer, Insel, Palmen, Schiff, Requisiten
// ---------------------------------------------------------------------------
const SUN_DIR = new THREE.Vector3(-0.72, 0.2, -0.66).normalize();
const MOON_DIR = new THREE.Vector3(0.55, 0.42, -0.72).normalize();
// Tageszeit: 0 = später Nachmittag, 1 = Nacht (je mehr Würfel verloren, desto später)
let nightCur = 0, nightTarget = 0;
let moonLight = null, hemiLight = null, fillLight = null, nightLights = [];

function buildSky() {
  const geo = new THREE.SphereGeometry(500, 32, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { sunDir: { value: SUN_DIR }, moonDir: { value: MOON_DIR }, night: { value: 0 }, time: { value: 0 } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      uniform vec3 sunDir; uniform vec3 moonDir; uniform float night; varying vec3 vDir;
      uniform float time;
      float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719))) * 43758.5453); }
      float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(h2(i), h2(i+vec2(1,0)), f.x), mix(h2(i+vec2(0,1)), h2(i+vec2(1,1)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * vnoise(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vDir);
        float y = max(d.y, -0.05);
        float n1 = smoothstep(0.0, 0.6, night), n2 = smoothstep(0.5, 1.0, night);
        vec3 zenith = mix(mix(vec3(0.10,0.22,0.45), vec3(0.08,0.10,0.28), n1), vec3(0.01,0.02,0.06), n2);
        vec3 mid = mix(mix(vec3(0.45,0.55,0.75), vec3(0.42,0.30,0.48), n1), vec3(0.03,0.05,0.13), n2);
        vec3 horizon = mix(mix(vec3(1.0,0.66,0.42), vec3(0.95,0.36,0.2), n1), vec3(0.07,0.09,0.18), n2);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.18, y));
        col = mix(col, zenith, smoothstep(0.18, 0.7, y));
        float sunVis = 1.0 - smoothstep(0.6, 0.9, night);
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0,0.5,0.2) * pow(s, 6.0) * 0.55 * sunVis;
        col += vec3(1.0,0.8,0.55) * pow(s, 60.0) * 0.8 * sunVis;
        col += vec3(1.0,0.9,0.7) * smoothstep(0.9985, 0.9993, s) * 3.0 * sunVis * step(-0.02, d.y);
        // Sterne und Mond
        vec3 cell = floor(d * 260.0);
        float h = hash(cell);
        float star = step(0.9965, h) * (0.6 + 0.4 * hash(cell + 7.0));
        col += vec3(0.9,0.95,1.0) * star * n2 * smoothstep(0.03, 0.25, y);
        float m = max(dot(d, moonDir), 0.0);
        col += vec3(0.95,0.97,1.0) * smoothstep(0.99955, 0.99975, m) * 2.2 * n2;
        col += vec3(0.4,0.5,0.8) * pow(m, 80.0) * 0.35 * n2;
        // Wolken: fbm-Rauschen auf eine Himmelsebene projiziert, von der Sonne angestrahlt
        if (d.y > 0.0) {
          vec2 uv = d.xz / (d.y + 0.12) * 1.6;
          float c1 = fbm(uv * 0.9 + vec2(time * 0.004, 0.0));
          float c2 = fbm(uv * 2.3 - vec2(0.0, time * 0.006));
          float cov = smoothstep(0.52, 0.78, c1 * 0.75 + c2 * 0.35);
          cov *= smoothstep(0.015, 0.1, d.y) * (1.0 - smoothstep(0.55, 0.9, d.y) * 0.6);
          float lit = pow(max(dot(d, sunDir), 0.0), 3.0);
          vec3 cDay = mix(vec3(0.98,0.9,0.85), vec3(1.0,0.72,0.5), smoothstep(0.0, 0.3, 1.0 - d.y * 3.0));
          vec3 cDusk = mix(vec3(0.55,0.3,0.4), vec3(1.0,0.5,0.3), lit);
          vec3 cNight = vec3(0.07,0.08,0.13);
          vec3 cc = mix(mix(cDay, cDusk, n1), cNight, n2);
          cc += vec3(1.0,0.7,0.45) * lit * 0.5 * sunVis;
          float shade = 0.75 + 0.25 * smoothstep(0.5, 0.8, c2);
          col = mix(col, cc * shade, cov * 0.85);
        }
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  sky = new THREE.Mesh(geo, mat);
  sky.userData.dynamic = true;
  sky.renderOrder = -10;
  scene.add(sky);
}

function buildWater() {
  const seg = lowEnd ? 96 : 160;
  const geo = new THREE.PlaneGeometry(900, 900, seg, seg);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    fog: false,
    uniforms: { time: { value: 0 }, sunDir: { value: SUN_DIR }, moonDir: { value: MOON_DIR }, night: { value: 0 } },
    vertexShader: `
      uniform float time; varying vec3 vPos; varying float vH;
      float wave(vec2 p){
        return sin(p.x*0.35 + time*1.1)*0.12 + sin(p.y*0.28 - time*0.9)*0.1
             + sin((p.x+p.y)*0.8 + time*1.9)*0.04 + sin((p.x-p.y)*1.3 - time*2.3)*0.025;
      }
      void main(){
        vec3 p = position;
        float d = length(p.xz);
        // Nähe: feinere Wellen, Ferne: flacher (Detail geht ohnehin verloren)
        float amp = mix(1.0, 0.25, smoothstep(40.0, 200.0, d));
        p.y += wave(p.xz) * amp;
        vH = p.y;
        vPos = (modelMatrix * vec4(p,1.0)).xyz;
        gl_Position = projectionMatrix * viewMatrix * vec4(vPos,1.0);
      }`,
    fragmentShader: `
      uniform float time; uniform vec3 sunDir; uniform vec3 moonDir; uniform float night; varying vec3 vPos; varying float vH;
      float coast(float a){ return 1.0 + 0.06*sin(3.0*a+0.7) + 0.04*sin(5.0*a+2.1) + 0.025*sin(8.0*a+4.0); }
      void main(){
        float n1 = smoothstep(0.0, 0.6, night), n2 = smoothstep(0.5, 1.0, night);
        vec3 dx = dFdx(vPos); vec3 dy = dFdy(vPos);
        vec3 n = normalize(cross(dx, dy)); if (n.y < 0.0) n = -n;
        // feine Kräuselwellen als Normalen-Störung (in der Ferne schwächer)
        vec2 q = vPos.xz;
        float fade = 1.0 - smoothstep(25.0, 160.0, length(q));
        vec2 g = vec2(0.0);
        g += vec2(0.9, 0.4) * cos(dot(q, vec2(0.9, 0.4)) * 2.2 + time * 2.1) * 0.10;
        g += vec2(-0.3, 1.0) * cos(dot(q, vec2(-0.3, 1.0)) * 3.1 - time * 2.7) * 0.08;
        g += vec2(0.7, -0.7) * cos(dot(q, vec2(0.7, -0.7)) * 5.3 + time * 3.3) * 0.06;
        g += vec2(-0.8, -0.5) * cos(dot(q, vec2(-0.8, -0.5)) * 8.1 - time * 4.1) * 0.04;
        n = normalize(n + vec3(g.x, 0.0, g.y) * fade);
        vec3 v = normalize(cameraPosition - vPos);
        float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        float ang = atan(vPos.z, vPos.x);
        float cf = coast(ang);
        float d = length(vPos.xz);
        float dc = d / cf; // Abstand relativ zur Küstenlinie
        vec3 deep = mix(vec3(0.03,0.16,0.28), vec3(0.01,0.035,0.08), n2);
        vec3 shallow = mix(vec3(0.12,0.62,0.62), vec3(0.03,0.13,0.18), n2);
        vec3 col = mix(shallow, deep, smoothstep(11.5, 26.0, dc));
        // Riff-Flecken im flachen Wasser
        float reef = sin(vPos.x*0.9 + sin(vPos.z*0.7)*1.5) * sin(vPos.z*1.1 + sin(vPos.x*0.5)*1.3);
        col = mix(col, col * vec3(0.72, 0.85, 0.8), smoothstep(0.35, 0.8, reef) * (1.0 - smoothstep(12.5, 19.0, dc)) * 0.6 * (1.0 - n2));
        vec3 hz = mix(mix(vec3(1.0,0.7,0.5), vec3(0.9,0.4,0.25), n1), vec3(0.07,0.09,0.18), n2);
        vec3 up = mix(vec3(0.45,0.55,0.75), vec3(0.03,0.05,0.13), n2);
        vec3 skyc = mix(hz, up, clamp(v.y*3.0,0.0,1.0));
        col = mix(col, skyc, clamp(fres*0.85, 0.0, 0.85));
        vec3 r = reflect(-v, n);
        float s = max(dot(r, sunDir), 0.0);
        col += mix(vec3(1.0,0.75,0.45), vec3(1.0,0.4,0.2), n1) * (pow(s, 90.0) * 2.2 + pow(s, 12.0) * 0.18) * (1.0 - smoothstep(0.6, 0.9, night));
        float mo = max(dot(r, moonDir), 0.0);
        col += vec3(0.75,0.82,1.0) * (pow(mo, 120.0) * 1.6 + pow(mo, 16.0) * 0.08) * n2;
        // Schaum an der Küste
        float swash = sin(time*0.8 + ang*7.0)*0.25;
        float shore = 1.0 - smoothstep(0.0, 1.2, abs(dc - 11.3 - swash/cf) * cf);
        float foam = shore * (0.55 + 0.45*sin(dc*6.0 - time*2.5));
        // zweite, schwächere Brandungslinie weiter draußen
        float outer = 1.0 - smoothstep(0.0, 0.35, abs(dc - 13.2 - sin(time*0.6 + ang*5.0)*0.35));
        foam += outer * 0.35 * (0.5 + 0.5*sin(ang*23.0 + time*0.7));
        foam += smoothstep(0.13, 0.2, vH) * 0.35 * (1.0 - smoothstep(30.0, 90.0, d));
        col = mix(col, mix(vec3(0.95,0.97,0.95), vec3(0.35,0.4,0.5), n2), clamp(foam, 0.0, 0.9));
        // Dunst am Horizont
        col = mix(col, hz, smoothstep(120.0, 430.0, d));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  water = new THREE.Mesh(geo, mat);
  water.userData.dynamic = true;
  water.position.y = -0.62;
  scene.add(water);
}

// Unregelmäßige Küstenlinie: Radius-Faktor je Richtung (gleiche Formel im Wasser-Shader)
function coast(a) { return 1 + 0.06 * Math.sin(3 * a + 0.7) + 0.04 * Math.sin(5 * a + 2.1) + 0.025 * Math.sin(8 * a + 4.0); }
function sandY(x, z) {
  const r = Math.hypot(x, z);
  if (r < 4.2) return 0;
  const c = 1 + (coast(Math.atan2(z, x)) - 1) * THREE.MathUtils.smoothstep(r, 4.4, 9.3);
  const k = r / (14 * c);
  return -1.5 + 1.5 * Math.sqrt(Math.max(0, 1 - k * k));
}
function buildIsland() {
  const sandTex = sandTexture();
  const sand = std(0xffffff, 1, { map: sandTex, vertexColors: true });
  const geo = new THREE.SphereGeometry(1, 128, 40, 0, Math.PI * 2, 0, Math.PI / 2);
  // leichte Dünen
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const cw = 1 - THREE.MathUtils.smoothstep(y, 0.75, 0.95);
    const k = (1 + (coast(Math.atan2(z, x)) - 1) * cw) * (1 + (Math.sin(x * 13) * Math.cos(z * 11) * 0.02 + Math.sin(x * 29 + z * 17) * 0.008) * (1 - y));
    pos.setXYZ(i, x * k, y + (Math.sin(x * 9 + z * 4) * 0.012 + Math.sin(z * 15 - x * 6) * 0.006) * (1 - y) * (y < 0.95 ? 1 : 0), z * k);
  }
  geo.computeVertexNormals();
  // nasser, dunklerer Sand zur Wasserkante hin (Radius im skalierten Modell ~ 10.3..11.5)
  const col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const r = Math.hypot(pos.getX(i), pos.getZ(i)) * 14 / coast(Math.atan2(pos.getZ(i), pos.getX(i)));
    const wet = THREE.MathUtils.smoothstep(r, 9.6, 11.0);
    const dry = 1 - wet * 0.42;
    col[i * 3] = dry; col[i * 3 + 1] = dry * (1 - wet * 0.02); col[i * 3 + 2] = dry * (1 - wet * 0.05);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const island = mesh(geo, sand, false, true);
  island.scale.set(14, 1.5, 14);
  island.position.y = -1.5;
  scene.add(island);
  // flacher Sandbereich unter dem Tisch, damit alles eben steht
  const flat = mesh(new THREE.CircleGeometry(4.2, 64), std(0xffffff, 1, { map: sandTex }), false, true);
  flat.rotation.x = -Math.PI / 2; flat.position.y = 0.002; scene.add(flat);

  // Felsen am Strand und im Wasser
  const rockMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 });
  const rocks = [[10.2, 0.4, 0.9], [9.6, 1.3, 0.6], [11.4, 2.2, 1.3], [10.4, 3.5, 0.5], [10.8, 4.2, 0.8], [9.9, 5.4, 0.45], [11.8, 0.9, 1.1], [10.1, -1.2, 0.7], [11.5, -0.4, 1.4], [9.8, 2.6, 0.35]];
  rocks.forEach(([r, a, sz], k) => {
    const x = Math.cos(a) * r * coast(a), z = Math.sin(a) * r * coast(a);
    const rock = mesh(S.rockGeometry(k + 3, sz), rockMat);
    rock.position.set(x, Math.max(-0.75, sandY(x, z)) - sz * 0.15, z); rock.rotation.y = k * 1.7;
    scene.add(rock);
  });

  // Büsche am Inselrand
  const bushMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
  [[-6.8, -1.8], [-7.6, 1.2], [6.4, -3.2], [7.8, -0.6], [-2.2, -7.2], [4.4, -6.6], [-5.2, -5.9], [8.2, 3.0], [-8.5, -3.6], [1.0, -8.3], [-6.6, 4.9], [5.4, 6.2]].forEach(([x, z], k) => {
    const b = mesh(S.bushGeometry(k * 31 + 7), bushMat);
    b.position.set(x, sandY(x, z) - 0.05, z); b.scale.setScalar(0.8 + (k % 3) * 0.25); b.rotation.y = k;
    scene.add(b);
  });
  // Grasbüschel (instanziert)
  const tuft = S.grassTuftGeometry(11);
  const grassMat = new THREE.MeshStandardMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.9 });
  const count = 90;
  const grass = new THREE.InstancedMesh(tuft, grassMat, count);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), p3 = new THREE.Vector3();
  let gi = 0, tries = 0;
  while (gi < count && tries < 2000) {
    tries++;
    const a = Math.random() * Math.PI * 2, r = 4.8 + Math.random() * 4.6;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (z > 2 && Math.abs(x) < 3) continue; // hinter dem eigenen Platz frei lassen
    p3.set(x, sandY(x, z) - 0.02, z); q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.random() * 6.28); const s2 = 0.7 + Math.random() * 0.9; sc.set(s2, s2, s2);
    m4.compose(p3, q, sc); grass.setMatrixAt(gi++, m4);
  }
  grass.count = gi;
  grass.castShadow = false; grass.receiveShadow = true;
  grass.userData.dynamic = true;
  scene.add(grass);
  // Seesterne, Muscheln, Treibholz
  const star = S.starfishGeometry();
  const starMat = std(0xe0703a, 0.6);
  [[3.3, 5.4, 0.3], [-4.6, 6.8, 1.5], [7.2, -5.9, 2.2], [-8.9, 1.9, 0.8]].forEach(([x, z, r]) => { const m = mesh(star, starMat); m.position.set(x, sandY(x, z) + 0.01, z); m.rotation.y = r; scene.add(m); });
  const shell = S.shellGeometry();
  const shellMats = [std(0xf2e2d0, 0.5), std(0xf0c0b0, 0.5), std(0xe8d8b8, 0.5)];
  for (let k = 0; k < 16; k++) {
    const a = k * 2.3 + 0.4, r = 5.5 + (k * 0.37 % 4);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const m = mesh(shell, shellMats[k % 3], false, true); m.position.set(x, sandY(x, z) + 0.005, z); m.rotation.y = k * 1.1; m.scale.setScalar(0.8 + (k % 4) * 0.2); scene.add(m);
  }
  const drift = mesh(S.driftwoodGeometry(5), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  drift.position.set(6.4, sandY(6.4, 5.6) - 0.02, 5.6); drift.rotation.y = 2.2; scene.add(drift);
  const drift2 = mesh(S.driftwoodGeometry(9), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  drift2.position.set(-8.6, sandY(-8.6, -4.4) - 0.02, -4.4); drift2.rotation.y = 0.7; drift2.scale.setScalar(0.8); scene.add(drift2);
  // Tanglinie: angespülter Seetang knapp oberhalb der Wasserkante
  const weedGeo = new THREE.CircleGeometry(0.12, 7); weedGeo.rotateX(-Math.PI / 2);
  const weedMat = new THREE.MeshStandardMaterial({ color: 0x5a6130, roughness: 0.9 });
  const weeds = new THREE.InstancedMesh(weedGeo, weedMat, 70);
  const wm = new THREE.Matrix4(), wq = new THREE.Quaternion(), ws = new THREE.Vector3(), wp = new THREE.Vector3();
  for (let i = 0; i < 70; i++) {
    const a = (i / 70) * Math.PI * 2 + Math.sin(i * 7.3) * 0.04;
    const r = 10.4 * coast(a) + Math.sin(i * 3.7) * 0.15;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    wp.set(x, sandY(x, z) + 0.012, z); wq.setFromAxisAngle(new THREE.Vector3(0, 1, 0), a + Math.sin(i) * 0.6);
    ws.set(1.4 + Math.abs(Math.sin(i * 1.3)) * 1.6, 1, 0.35 + Math.abs(Math.cos(i * 2.1)) * 0.3);
    wm.compose(wp, wq, ws); weeds.setMatrixAt(i, wm);
  }
  weeds.receiveShadow = true; weeds.userData.dynamic = true; scene.add(weeds);
}

function buildPalm(x, z, height, leanX, leanZ, seed) {
  const p = S.buildPalm(x, z, height, leanX, leanZ, seed);
  scene.add(p.group);
  p.fronds.forEach((f) => fronds.push(f));
  return p.group;
}

// Schiffe: schwarzes Geisterschiff (ankert), ein vorbeisegelndes Piratenschiff, eine Brigantine
const shipWindows = [];
function makeShip(o) {
  const g = S.buildShipModel(o, jollyRogerTexture(), shipWindows);
  const flag = g.userData.flag;
  if (flag) flags.push({ mesh: flag, base: flag.geometry.attributes.position.array.slice(), ph: o.x, amp: 0.25 });
  if (flag) flag.userData.dynamic = true;
  batchStatic(g, true); // Rumpf, Masten, Segel, Takelage: wenige Meshes statt ~40
  g.position.set(o.x, -0.35, o.z);
  g.rotation.y = o.rot || 0;
  g.scale.setScalar(o.scale || 1);
  g.userData.dynamic = true;
  scene.add(g);
  ships.push({ g, bob: o.bob || 0, speed: o.speed || 0, path: o.path || null });
  return g;
}
function buildShip() {
  // "Das schwarze Schiff" in der Ferne
  makeShip({ hull: 0x16110d, sail: 0x1c1a1a, ragged: true, x: -95, z: -150, rot: 0.5, bob: 0 });
  // Piratenschiff, das langsam am Horizont vorbeisegelt
  makeShip({ hull: 0x5a3a1e, sail: 0xefe6cf, stripe: 0x8a2a1a, billow: 0.9, x: -180, z: -85, rot: 0, scale: 0.8, bob: 1, speed: 2.2, path: { from: -190, to: 190 } });
  // Brigantine vor Anker rechts
  makeShip({ hull: 0x3a2616, sail: 0xd9cfb4, stripe: 0x1f3f6b, masts: [-2.5, 2.5], x: 60, z: -55, rot: 2.6, scale: 0.7, bob: 2 });
}
let jrTex = null;
function jollyRogerTexture() {
  if (jrTex) return jrTex;
  const cv = mkCanvas(256, 170); const c = cv.getContext('2d');
  c.fillStyle = '#121212'; c.fillRect(0, 0, 256, 170);
  drawSkull(c, 128, 70, 1.25, '#f1ead8');
  jrTex = canvasTex(cv);
  return jrTex;
}

// Mehr Piraten-Kram auf der Insel
function buildPirateIsland() {
  const wood = std(0xffffff, 0.85, { map: canvasTex(woodCanvas(256, 128, '#7a5230', 6)) });
  const iron = std(0x2a2724, 0.45, { metalness: 0.7 });
  const gold = std(0xf2c24a, 0.3, { metalness: 0.9, emissive: 0x4a3000, emissiveIntensity: 0.45 });

  // Weitere Palmen, damit die Insel voller wirkt
  [[-7.2, -5.4, 6.4, 0.4, -0.5, 3], [8.6, 1.6, 5.0, 0.6, -0.2, 5], [-8.4, 3.6, 5.6, -0.6, 0.2, 6], [2.6, -7.8, 5.8, 0.2, -0.6, 8], [-3.2, -8.3, 4.4, -0.3, -0.5, 9], [5.6, -5.8, 4.6, 0.5, -0.3, 10]]
    .forEach(([x, z, hh, lx, lz, sd]) => { const pm = buildPalm(x, z, hh, lx, lz, sd); pm.position.y = sandY(x, z); });

  // Piratenflagge am Mast
  const pole = mesh(new THREE.CylinderGeometry(0.06, 0.08, 5.2, 8), std(0x4a3320, 0.9));
  pole.position.set(-1.4, 2.6, -5.2); scene.add(pole);
  const ball = mesh(new THREE.SphereGeometry(0.1, 10, 8), gold); ball.position.set(-1.4, 5.25, -5.2); scene.add(ball);
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.6, 1.05, 12, 4), new THREE.MeshStandardMaterial({ map: jollyRogerTexture(), side: THREE.DoubleSide, roughness: 1 }));
  flag.geometry.translate(0.8, 0, 0);
  flag.position.set(-1.35, 4.6, -5.2); flag.rotation.y = 0.35; scene.add(flag);
  flag.userData.dynamic = true;
  flags.push({ mesh: flag, base: flag.geometry.attributes.position.array.slice(), ph: 0, amp: 0.12, fromPole: true });

  // Kanone mit Kugeln, zeigt aufs Meer
  const cannon = new THREE.Group();
  const carriage = mesh(new THREE.BoxGeometry(0.55, 0.3, 1.0), wood); carriage.position.y = 0.3; cannon.add(carriage);
  [[-0.3, 0.3], [0.3, 0.3], [-0.3, -0.3], [0.3, -0.3]].forEach(([x, z]) => { const wh = mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.08, 14), wood); wh.rotation.z = Math.PI / 2; wh.position.set(x, 0.17, z); cannon.add(wh); });
  const barrel = mesh(new THREE.CylinderGeometry(0.11, 0.17, 1.5, 16), iron); barrel.rotation.x = Math.PI / 2 - 0.15; barrel.position.set(0, 0.55, -0.35); cannon.add(barrel);
  const muzzle = mesh(new THREE.TorusGeometry(0.12, 0.03, 8, 16), iron); muzzle.position.set(0, 0.66, -1.1); cannon.add(muzzle);
  cannon.position.set(4.9, 0, -4.4); cannon.rotation.y = -0.75; scene.add(cannon);
  const ballGeo = new THREE.SphereGeometry(0.1, 12, 10);
  [[0, 0, 0], [0.2, 0, 0], [0.1, 0, 0.17], [0.1, 0.16, 0.06]].forEach(([x, y, z]) => { const b = mesh(ballGeo, iron); b.position.set(5.5 + x, 0.1 + y, -3.6 + z); scene.add(b); });

  // Großer Goldhaufen mit zweiter Truhe und Edelsteinen
  const heap = mesh(new THREE.ConeGeometry(0.75, 0.5, 18), gold); heap.position.set(1.2, 0.25, -5.6); scene.add(heap);
  const coinGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.01, 12);
  for (let i = 0; i < 70; i++) {
    const a = Math.random() * Math.PI * 2, r = 0.2 + Math.random() * 1.1;
    const c = mesh(coinGeo, gold, false, true); c.position.set(1.2 + Math.cos(a) * r, 0.006 + (r < 0.7 ? (0.7 - r) * 0.6 : 0), -5.6 + Math.sin(a) * r);
    c.rotation.set(Math.random() * 0.5, Math.random() * 3, Math.random() * 0.5); scene.add(c);
  }
  const gemCols = [0xd02040, 0x2060e0, 0x20b060, 0x9040d0];
  for (let i = 0; i < 14; i++) {
    const gm = mesh(new THREE.OctahedronGeometry(0.05, 0), std(gemCols[i % 4], 0.15, { metalness: 0.2, emissive: gemCols[i % 4], emissiveIntensity: 0.25 }), false, false);
    const a = Math.random() * Math.PI * 2, r = Math.random() * 0.6;
    gm.position.set(1.2 + Math.cos(a) * r, 0.12 + (0.6 - r) * 0.55, -5.6 + Math.sin(a) * r); scene.add(gm);
  }
  const crown = mesh(new THREE.CylinderGeometry(0.12, 0.1, 0.1, 8, 1, true), gold); crown.position.set(1.2, 0.54, -5.6); crown.rotation.z = 0.3; scene.add(crown);
  const chest2 = new THREE.Group();
  const cb = mesh(new THREE.BoxGeometry(0.7, 0.36, 0.45), wood); cb.position.y = 0.18; chest2.add(cb);
  const lidP = new THREE.Group(); lidP.position.set(0, 0.36, -0.225); lidP.rotation.x = -1.9; chest2.add(lidP);
  const lid = mesh(new THREE.CylinderGeometry(0.225, 0.225, 0.7, 14, 1, false, 0, Math.PI), wood); lid.rotation.z = Math.PI / 2; lid.position.z = 0.225; lidP.add(lid);
  const fill = mesh(new THREE.BoxGeometry(0.64, 0.05, 0.4), gold); fill.position.y = 0.35; chest2.add(fill);
  chest2.position.set(2.3, 0, -5.3); chest2.rotation.y = -0.4; scene.add(chest2);

  // Totenkopf im Sand
  const bone = std(0xe8e0c8, 0.8);
  const sk = mesh(new THREE.SphereGeometry(0.12, 12, 10), bone); sk.scale.set(1, 0.9, 1.1); sk.position.set(0.3, 0.1, -5.1); scene.add(sk);
  [[-0.04], [0.04]].forEach(([x]) => { const e = mesh(new THREE.SphereGeometry(0.03, 8, 6), std(0x111111, 0.9), false, false); e.position.set(0.3 + x, 0.12, -5.0); scene.add(e); });

  // Anker im Sand
  const anchor = new THREE.Group();
  const shank = mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.5, 8), iron); shank.position.y = 0.75; anchor.add(shank);
  const stock = mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8, 8), iron); stock.rotation.z = Math.PI / 2; stock.position.y = 1.3; anchor.add(stock);
  const ring = mesh(new THREE.TorusGeometry(0.1, 0.025, 8, 16), iron); ring.position.y = 1.55; anchor.add(ring);
  const arms = mesh(new THREE.TorusGeometry(0.45, 0.05, 8, 20, Math.PI), iron); arms.rotation.z = Math.PI; arms.position.y = 0.45; anchor.add(arms);
  anchor.position.set(-5.9, -0.15, -2.4); anchor.rotation.set(0.25, 0.6, 0.2); scene.add(anchor);

  // Ruderboot am Strand (halb auf den Sand gezogen, mit Rudern)
  const bx = -6.2, bz = -7.0;
  const boat = mesh(S.rowboatGeometry(), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, side: THREE.DoubleSide }));
  boat.position.set(bx, sandY(bx, bz) - 0.12, bz); boat.rotation.set(0.05, 0.9, 0.12); scene.add(boat);
  [0.35, -0.3].forEach((dz, k) => {
    const oarG = new THREE.Group();
    const shaft = mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.9, 6), std(0x7a5a38)); shaft.rotation.z = Math.PI / 2; oarG.add(shaft);
    const bl = mesh(new THREE.BoxGeometry(0.45, 0.02, 0.14), std(0x7a5a38)); bl.position.x = 0.95; oarG.add(bl);
    oarG.position.set(bx + (k ? 0.3 : -0.2), sandY(bx, bz) + 0.32, bz + dz); oarG.rotation.set(0.1, 0.9 + (k ? 0.25 : -0.2), 0.08); scene.add(oarG);
  });

  // Kisten
  const crateMat = std(0xffffff, 0.85, { map: canvasTex(woodCanvas(128, 128, '#8a6a3a', 4)) });
  [[-2.8, 0.25, 3.8, 0.2, 0.5], [-2.2, 0.25, 4.1, -0.3, 0.5], [-2.5, 0.72, 3.95, 0.5, 0.44], [3.6, 0.2, 3.6, 0.4, 0.4]].forEach(([x, y, z, r, sz]) => {
    const cr = mesh(new THREE.BoxGeometry(sz, sz, sz), crateMat); cr.position.set(x, y, z); cr.rotation.y = r; scene.add(cr);
  });

  // Lagerfeuer
  const fire = new THREE.Group();
  for (let i = 0; i < 5; i++) { const lg = mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.7, 6), std(0x3a2414, 0.95)); lg.rotation.set(Math.PI / 2 - 0.25, (i / 5) * Math.PI * 2, 0); lg.position.set(Math.sin((i / 5) * Math.PI * 2) * 0.12, 0.1, Math.cos((i / 5) * Math.PI * 2) * 0.12); fire.add(lg); }
  for (let i = 0; i < 8; i++) { const st = mesh(new THREE.DodecahedronGeometry(0.1, 0), std(0x6a6660, 0.95, { flatShading: true })); st.position.set(Math.cos(i * 0.785) * 0.45, 0.05, Math.sin(i * 0.785) * 0.45); fire.add(st); }
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xff8a30, transparent: true, opacity: 0.9 });
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.6, 8), flameMat); flame.position.y = 0.35; fire.add(flame);
  const inner = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.4, 8), new THREE.MeshBasicMaterial({ color: 0xfff0a0 })); inner.position.y = 0.28; fire.add(inner);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xff8a30, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.scale.set(2.2, 2.2, 1); glow.position.y = 0.4; fire.add(glow);
  fire.position.set(-5.6, 0, 0.9); scene.add(fire);
  flame.userData.dynamic = inner.userData.dynamic = true;
  torches.push({ flame, inner, glow, ph: 11 });
  const spit = mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.1, 6), std(0x4a3320)); spit.rotation.z = Math.PI / 2; spit.position.set(-5.6, 0.75, 0.9); scene.add(spit);
  [-0.5, 0.5].forEach((dx) => { const st = mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.8, 6), std(0x4a3320)); st.position.set(-5.6 + dx, 0.4, 0.9); scene.add(st); });

  // Hängematte zwischen zwei Palmen (8.6|1.6) und (6.5|4.5)
  const a = new THREE.Vector3(8.35, 1.5, 1.8), b = new THREE.Vector3(6.75, 1.5, 4.25);
  const mid = a.clone().lerp(b, 0.5); mid.y = 0.75;
  const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
  const hm = mesh(new THREE.TubeGeometry(curve, 20, 0.22, 8, false), std(0xd9c9a0, 0.95, { side: THREE.DoubleSide }));
  hm.scale.set(1, 1, 1); scene.add(hm);

  // Papagei auf dem Fass-Stapel
  const parrot = new THREE.Group();
  const pb = mesh(new THREE.SphereGeometry(0.09, 12, 10), std(0xd42a2a, 0.7)); pb.scale.set(1, 1.35, 1); pb.position.y = 0.12; parrot.add(pb);
  const ph = mesh(new THREE.SphereGeometry(0.065, 12, 10), std(0xd42a2a, 0.7)); ph.position.set(0, 0.27, -0.02); parrot.add(ph);
  const pk = mesh(new THREE.ConeGeometry(0.025, 0.07, 6), std(0xf1e0b0, 0.5)); pk.rotation.x = -Math.PI / 2 - 0.5; pk.position.set(0, 0.25, -0.08); parrot.add(pk);
  [-1, 1].forEach((sd) => {
    const w = mesh(new THREE.SphereGeometry(0.06, 10, 8), std(sd > 0 ? 0x2a60d0 : 0xf2c21a, 0.7)); w.scale.set(0.4, 1.3, 0.9); w.position.set(sd * 0.08, 0.12, 0.02); parrot.add(w);
    const e = mesh(new THREE.SphereGeometry(0.012, 6, 5), std(0x111111), false, false); e.position.set(sd * 0.045, 0.29, -0.05); parrot.add(e);
  });
  const ptail = mesh(new THREE.ConeGeometry(0.035, 0.25, 6), std(0x2a60d0, 0.7)); ptail.rotation.x = 2.6; ptail.position.set(0, 0.0, 0.1); parrot.add(ptail);
  parrot.position.set(-3.45, 1.8, -1.6); parrot.rotation.y = 0.9; scene.add(parrot);
  parrot.userData.dynamic = true;
  critters.parrot = parrot;

  // Krabbe, die über den Sand läuft
  const crab = new THREE.Group();
  const crabMat = std(0xd0402a, 0.6);
  const cbody = mesh(new THREE.SphereGeometry(0.09, 12, 8), crabMat); cbody.scale.set(1.3, 0.5, 1); cbody.position.y = 0.06; crab.add(cbody);
  [-1, 1].forEach((sd) => {
    const claw = mesh(new THREE.SphereGeometry(0.035, 8, 6), crabMat); claw.scale.set(1.2, 0.8, 1.6); claw.position.set(sd * 0.12, 0.07, -0.08); crab.add(claw);
    for (let k = 0; k < 3; k++) { const lg = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.12, 4), crabMat, false, false); lg.rotation.z = sd * 1.0; lg.position.set(sd * 0.12, 0.03, -0.03 + k * 0.04); crab.add(lg); }
    const eye = mesh(new THREE.SphereGeometry(0.014, 6, 5), std(0x111111), false, false); eye.position.set(sd * 0.03, 0.12, -0.06); crab.add(eye);
  });
  scene.add(crab);
  crab.userData.dynamic = true;
  critters.crab = crab;

  // Möwen am Himmel
  critters.gulls = [];
  const gullMat = new THREE.MeshBasicMaterial({ color: 0xf4f0ea, side: THREE.DoubleSide });
  for (let i = 0; i < 4; i++) {
    const gl = new THREE.Group();
    const wl = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.18), gullMat); wl.geometry.translate(-0.45, 0, 0); gl.add(wl);
    const wr = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.18), gullMat); wr.geometry.translate(0.45, 0, 0); gl.add(wr);
    wl.rotation.x = wr.rotation.x = -Math.PI / 2;
    const wlp = new THREE.Group(); wlp.add(wl); const wrp = new THREE.Group(); wrp.add(wr); gl.add(wlp); gl.add(wrp);
    gl.userData.dynamic = true;
    scene.add(gl);
    critters.gulls.push({ g: gl, wl: wlp, wr: wrp, r: 16 + i * 6, h: 11 + i * 2.5, sp: 0.12 + i * 0.03, ph: i * 1.7 });
  }

  // Kleine Nachbarinsel mit Palme am Horizont
  const islet = mesh(new THREE.SphereGeometry(1, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), std(0xd9bf8a, 1), false, false);
  islet.scale.set(14, 3, 10); islet.position.set(150, -1.2, -230); scene.add(islet);
  const ip = buildPalm(150, -230, 7, 0.5, 0.2, 12); ip.scale.setScalar(2.4); ip.position.y = 1.5;
  const ip2 = buildPalm(158, -226, 6, -0.4, 0.3, 13); ip2.scale.setScalar(2.0); ip2.position.y = 1.0;
}

function buildTorch(x, z) {
  const g = new THREE.Group();
  const pole = mesh(new THREE.CylinderGeometry(0.04, 0.05, 1.7, 6), std(0x4a3320, 0.9));
  pole.position.y = 0.85; g.add(pole);
  const cup = mesh(new THREE.CylinderGeometry(0.1, 0.06, 0.18, 8), std(0x2a2018, 0.7));
  cup.position.y = 1.72; g.add(cup);
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.9 });
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.32, 8), flameMat);
  flame.position.y = 1.95; g.add(flame);
  const inner = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.2, 8), new THREE.MeshBasicMaterial({ color: 0xfff0a0 }));
  inner.position.y = 1.9; g.add(inner);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xff9a40, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  glow.scale.set(1.1, 1.1, 1); glow.position.y = 1.95; g.add(glow);
  g.position.set(x, 0, z);
  scene.add(g);
  flame.userData.dynamic = inner.userData.dynamic = true;
  torches.push({ flame, inner, glow, ph: x * 3 + z });
}

// Weicher Kontaktschatten (Klecks) unter Objekten, die auf Sand oder Tisch stehen
let blobTex = null;
function blobShadow(r, opacity) {
  if (!blobTex) {
    const cv = mkCanvas(64, 64); const c = cv.getContext('2d');
    const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.45, 'rgba(0,0,0,0.55)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = g; c.fillRect(0, 0, 64, 64);
    blobTex = canvasTex(cv, false);
  }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(r * 2, r * 2), new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, opacity, depthWrite: false, color: 0x2a1a0a, polygonOffset: true, polygonOffsetFactor: -2 }));
  m.rotation.x = -Math.PI / 2; m.renderOrder = 1;
  return m;
}
// ---------------------------------------------------------------------------
// Atmosphäre: Funken am Lagerfeuer, Glühwürmchen, Gischt an den Felsen, Entenspuren, Nebel
// ---------------------------------------------------------------------------
const atmo = { systems: [], mist: [] };
function pointCloud(n, size, color, additive) {
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(n * 3), 3));
  geo.setAttribute('alpha', new THREE.Float32BufferAttribute(new Float32Array(n).fill(1), 1));
  // Eigener kleiner Shader: Farbe und Deckkraft pro Partikel, weiche runde Punkte
  const mat = new THREE.ShaderMaterial({
    uniforms: { map: { value: glowTexture() }, size: { value: size }, scale: { value: 600 } },
    vertexShader: 'attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float size; uniform float scale; void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / max(0.1, -mv.z); gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'uniform sampler2D map; varying float vA; varying vec3 vC; void main(){ float a = texture2D(map, gl_PointCoord).a * vA; if (a < 0.01) discard; gl_FragColor = vec4(vC, a); }',
    transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false; pts.userData.dynamic = true;
  scene.add(pts);
  return pts;
}
function footprintTexture() {
  const cv = mkCanvas(64, 64); const c = cv.getContext('2d');
  c.fillStyle = 'rgba(70,45,20,1)';
  c.beginPath();
  c.moveTo(32, 58);
  c.quadraticCurveTo(20, 50, 8, 16); c.quadraticCurveTo(14, 18, 18, 12);
  c.quadraticCurveTo(24, 20, 32, 6); c.quadraticCurveTo(40, 20, 46, 12);
  c.quadraticCurveTo(50, 18, 56, 16); c.quadraticCurveTo(44, 50, 32, 58);
  c.fill();
  const tx = canvasTex(cv); return tx;
}
function buildAtmosphere() {
  // Funken über dem Lagerfeuer
  const sp = pointCloud(40, 0.07, 0xffffff, true);
  atmo.systems.push({ pts: sp, kind: 'sparks', n: 40, data: Array.from({ length: 40 }, () => ({ life: Math.random() * 1.6, max: 1.2 + Math.random() * 0.8, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0 })), origin: new THREE.Vector3(-5.6, 0.3, 0.9) });
  // Glühwürmchen (nur nachts)
  const ff = pointCloud(46, 0.1, 0xffffff, true);
  atmo.systems.push({ pts: ff, kind: 'flies', n: 46, data: Array.from({ length: 46 }, (_, i) => { const a = Math.random() * Math.PI * 2, r = 4.8 + Math.random() * 4.2; return { x: Math.cos(a) * r, z: Math.sin(a) * r, y: 0.3 + Math.random() * 1.3, ph: Math.random() * 20, sp: 0.3 + Math.random() * 0.5 }; }) });
  // Gischt an den Felsen im Wasser
  const spray = pointCloud(90, 0.2, 0xffffff, false);
  const rocksAt = [[11.4, 2.2], [11.8, 0.9], [11.5, -0.4]].map(([r, a]) => new THREE.Vector3(Math.cos(a) * r * coast(a), -0.45, Math.sin(a) * r * coast(a)));
  atmo.systems.push({ pts: spray, kind: 'spray', n: 90, rocks: rocksAt, next: rocksAt.map((_, k) => 1 + k * 1.3), data: Array.from({ length: 90 }, () => ({ life: 1, max: 1, x: 0, y: -5, z: 0, vx: 0, vy: 0, vz: 0 })) });
  // Entenspuren vom Ruderboot zum Tisch
  const prints = [];
  const path = new THREE.CatmullRomCurve3([new THREE.Vector3(-5.7, 0, -6.2), new THREE.Vector3(-4.4, 0, -4.6), new THREE.Vector3(-3.0, 0, -3.9), new THREE.Vector3(-2.0, 0, -2.6), new THREE.Vector3(-1.5, 0, -1.9)]);
  const N = 26;
  for (let i = 0; i < N; i++) {
    const u = i / (N - 1);
    const P = path.getPointAt(u), T = path.getTangentAt(u);
    const side = (i % 2 ? 1 : -1) * 0.07;
    const x = P.x + T.z * side, z = P.z - T.x * side;
    prints.push({ x, z, a: Math.atan2(T.x, T.z) });
  }
  const fpMat = new THREE.MeshBasicMaterial({ map: footprintTexture(), transparent: true, opacity: 0.32, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3 });
  const fpGeo = new THREE.PlaneGeometry(0.13, 0.13); fpGeo.rotateX(-Math.PI / 2);
  const fp = new THREE.InstancedMesh(fpGeo, fpMat, prints.length);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), p3 = new THREE.Vector3(), yAx = new THREE.Vector3(0, 1, 0);
  prints.forEach((pr, i) => { p3.set(pr.x, sandY(pr.x, pr.z) + 0.006, pr.z); q.setFromAxisAngle(yAx, pr.a + Math.PI); m4.compose(p3, q, one); fp.setMatrixAt(i, m4); });
  fp.userData.dynamic = true; fp.renderOrder = 1; scene.add(fp); atmo.prints = fp;
  // Nebelbänder über dem Wasser (nur in der Nacht/Schlussrunde)
  const cv = mkCanvas(4, 64); const c = cv.getContext('2d');
  const g = c.createLinearGradient(0, 0, 0, 64);
  g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.55, 'rgba(255,255,255,0.8)'); g.addColorStop(0.8, 'rgba(255,255,255,0.6)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = g; c.fillRect(0, 0, 4, 64);
  const mistTex = canvasTex(cv);
  [[24, 2.2, -0.2], [42, 4.5, 0.2], [70, 7, 0.6]].forEach(([r, h, y]) => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 64, 1, true), new THREE.MeshBasicMaterial({ map: mistTex, color: 0xb8c8e8, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    m.position.y = y + h / 2 - 0.6; m.userData.dynamic = true; m.renderOrder = 2; m.visible = false;
    scene.add(m); atmo.mist.push(m);
  });
}
function updateAtmosphere(dt) {
  if (!qFlags.fx) { atmo.systems.forEach((sys) => { sys.pts.visible = false; }); return; }
  atmo.systems.forEach((sys) => {
    if (sys.kind !== 'flies') sys.pts.visible = true;
    const pos = sys.pts.geometry.attributes.position, col = sys.pts.geometry.attributes.color;
    if (sys.kind === 'sparks') {
      const k = 0.7 + nightCur * 0.6;
      sys.data.forEach((d, i) => {
        d.life += dt;
        if (d.life > d.max) { d.life = 0; d.max = 1.0 + Math.random() * 1.0; d.x = sys.origin.x + (Math.random() - 0.5) * 0.25; d.y = sys.origin.y; d.z = sys.origin.z + (Math.random() - 0.5) * 0.25; d.vx = (Math.random() - 0.5) * 0.25; d.vy = 0.7 + Math.random() * 0.7; d.vz = (Math.random() - 0.5) * 0.25; }
        d.x += (d.vx + Math.sin(t * 3 + i) * 0.12) * dt; d.y += d.vy * dt; d.z += d.vz * dt; d.vy *= 0.995;
        const f = 1 - d.life / d.max;
        pos.setXYZ(i, d.x, d.y, d.z);
        col.setXYZ(i, 1.0 * f * k, 0.55 * f * f * k, 0.15 * f * f * f * k);
      });
    } else if (sys.kind === 'flies') {
      const vis = smooth01(0.35, 0.85, nightCur);
      sys.pts.visible = vis > 0.01;
      if (!sys.pts.visible) return;
      sys.data.forEach((d, i) => {
        const tt = t * d.sp + d.ph;
        pos.setXYZ(i, d.x + Math.sin(tt * 0.9) * 0.6, d.y + Math.sin(tt * 1.7) * 0.25, d.z + Math.cos(tt * 0.7) * 0.6);
        const blink = Math.pow(Math.max(0, Math.sin(tt * 2.3)), 3) * vis;
        col.setXYZ(i, 0.85 * blink, 1.0 * blink, 0.35 * blink);
      });
    } else if (sys.kind === 'spray') {
      sys.next.forEach((nt, k) => {
        sys.next[k] = nt - dt;
        if (sys.next[k] <= 0) {
          sys.next[k] = 2.5 + Math.random() * 3;
          const R = sys.rocks[k]; const out = new THREE.Vector3(R.x, 0, R.z).normalize();
          let spawned = 0;
          sys.data.forEach((d) => { if (spawned < 26 && d.life >= d.max) { spawned++; d.life = 0; d.max = 0.8 + Math.random() * 0.6; d.x = R.x + (Math.random() - 0.5) * 0.5; d.y = R.y + 0.1; d.z = R.z + (Math.random() - 0.5) * 0.5; d.vx = -out.x * 0.6 + (Math.random() - 0.5) * 0.8; d.vy = 1.4 + Math.random() * 1.4; d.vz = -out.z * 0.6 + (Math.random() - 0.5) * 0.8; } });
        }
      });
      const al = sys.pts.geometry.attributes.alpha;
      const b = 1 - nightCur * 0.55;
      sys.data.forEach((d, i) => {
        if (d.life < d.max) { d.life += dt; d.vy -= 4.5 * dt; d.x += d.vx * dt; d.y += d.vy * dt; d.z += d.vz * dt; }
        const f = d.life < d.max ? 1 - d.life / d.max : 0;
        pos.setXYZ(i, d.x, d.life < d.max ? d.y : -9, d.z);
        col.setXYZ(i, 0.97 * b, 0.99 * b, 1.0 * b);
        al.setX(i, Math.min(1, f * 1.6) * 0.85);
      });
      al.needsUpdate = true;
    }
    pos.needsUpdate = true; col.needsUpdate = true;
  });
  const mistK = smooth01(0.45, 1, nightCur);
  atmo.mist.forEach((m, i) => { m.visible = mistK > 0.01; m.material.opacity = mistK * (0.45 - i * 0.09) * (0.85 + Math.sin(t * 0.2 + i) * 0.15); m.rotation.y = t * 0.004 * (i % 2 ? 1 : -1); });
}
let glowTex = null;
function glowTexture() {
  if (glowTex) return glowTex;
  const cv = mkCanvas(64, 64); const c = cv.getContext('2d');
  const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,255,255,0.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  c.fillStyle = g; c.fillRect(0, 0, 64, 64);
  glowTex = canvasTex(cv);
  return glowTex;
}

function buildProps() {
  // Schatztruhe mit Gold
  const chest = new THREE.Group();
  const wood = std(0xffffff, 0.8, { map: canvasTex(woodCanvas(256, 128, '#6a4222', 5)) });
  const iron = std(0x2a2520, 0.5, { metalness: 0.6 });
  const body = mesh(new THREE.BoxGeometry(0.9, 0.45, 0.55), wood); body.position.y = 0.225; chest.add(body);
  const lid = mesh(new THREE.CylinderGeometry(0.275, 0.275, 0.9, 16, 1, false, 0, Math.PI), wood);
  lid.rotation.z = Math.PI / 2; lid.position.set(0, 0.45, 0);
  const lidPivot = new THREE.Group(); lidPivot.position.set(0, 0.45, -0.275); lid.position.set(0, 0, 0.275);
  lidPivot.add(lid); lidPivot.rotation.x = -1.2; chest.add(lidPivot);
  [-0.35, 0.35].forEach((bx) => { const b = mesh(new THREE.BoxGeometry(0.05, 0.47, 0.57), iron); b.position.set(bx, 0.225, 0); chest.add(b); });
  const gold = std(0xf2c24a, 0.3, { metalness: 0.9, emissive: 0x4a3000, emissiveIntensity: 0.4 });
  const coinGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.01, 14);
  for (let i = 0; i < 40; i++) {
    const c = mesh(coinGeo, gold, false, false);
    c.position.set((Math.random() - 0.5) * 0.8, 0.44 + Math.random() * 0.06, (Math.random() - 0.5) * 0.45);
    c.rotation.set(Math.random() * 0.6, Math.random() * 3, Math.random() * 0.6);
    chest.add(c);
  }
  for (let i = 0; i < 14; i++) {
    const c = mesh(coinGeo, gold, false, true);
    c.position.set(0.5 + Math.random() * 0.5, 0.006, (Math.random() - 0.5) * 0.7);
    c.rotation.y = Math.random() * 3; chest.add(c);
  }
  chest.position.set(3.1, 0, -2.4); chest.rotation.y = -0.7;
  scene.add(chest);

  // Fässer
  const barrelGeo = barrelGeometry(0.3, 0.36, 0.9);
  const barrelMat = std(0xffffff, 0.85, { map: canvasTex(woodCanvas(256, 128, '#7a5230', 10)) });
  [[-3.2, -1.9, 0], [-3.75, -1.3, 0.5], [-3.45, -1.6, 2]].forEach(([bx, bz, r], i) => {
    const b = mesh(barrelGeo, barrelMat);
    if (i === 2) { b.position.set(bx, 0.9 + 0.45, bz); } else b.position.set(bx, 0.45, bz);
    b.rotation.y = r; scene.add(b);
    addHoops(b, 0.36, 0.9);
  });
  // Ruder im Sand, Seil
  const oar = mesh(new THREE.BoxGeometry(0.06, 2.2, 0.06), std(0x6a4a2a));
  oar.position.set(-2.4, 0.9, 3.4); oar.rotation.z = 0.3; scene.add(oar);
  const blade = mesh(new THREE.BoxGeometry(0.25, 0.6, 0.03), std(0x6a4a2a)); blade.position.set(0, 1.2, 0); oar.add(blade);
}

function barrelGeometry(rEnd, rMid, h) {
  const pts = [];
  for (let i = 0; i <= 10; i++) { const k = i / 10; pts.push(new THREE.Vector2(rEnd + (rMid - rEnd) * Math.sin(Math.PI * k), k * h - h / 2)); }
  pts.unshift(new THREE.Vector2(0, -h / 2)); pts.push(new THREE.Vector2(0, h / 2));
  return new THREE.LatheGeometry(pts, 20);
}
function addHoops(b, r, h) {
  const iron = std(0x2b2724, 0.5, { metalness: 0.6 });
  [-0.36, 0, 0.36].forEach((k) => {
    const y = k * h;
    const rr2 = k === 0 ? r + 0.005 : r * 0.94;
    const hoop = mesh(new THREE.TorusGeometry(rr2, 0.012, 6, 24), iron, false, false);
    hoop.rotation.x = Math.PI / 2; hoop.position.y = y; b.add(hoop);
  });
}

// ---------------------------------------------------------------------------
// Tisch (wächst mit der Spielerzahl)
// ---------------------------------------------------------------------------
// Statische Deko zu wenigen großen Meshes zusammenfassen (ein Draw-Call pro Material statt hunderte)
// Materialien mit gleichen Eigenschaften gelten als gleich (viele Deko-Teile erzeugen eigene, aber
// identische Materialien) - so lassen sie sich zu einem Mesh zusammenfassen.
function matKey(m) {
  if (!m.isMeshStandardMaterial && !m.isMeshBasicMaterial) return m.uuid;
  const h = (c) => (c ? c.getHexString() : '-');
  return [m.type, h(m.color), m.roughness, m.metalness, m.map ? m.map.uuid : '-', h(m.emissive), m.emissiveIntensity, m.vertexColors, m.side, m.flatShading,
    m.alphaTest, m.normalMap ? m.normalMap.uuid : '-', m.isMeshPhysicalMaterial ? [m.sheen, m.sheenRoughness, h(m.sheenColor), m.clearcoat, m.clearcoatRoughness].join(',') : ''].join('|');
}
function batchStatic(root, local) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const groups = new Map();
  (function walk(o) {
    if (o.userData.dynamic && o !== root) return;
    if (o.isMesh && !o.isInstancedMesh && o.material && !Array.isArray(o.material) && !o.material.transparent && o.geometry.attributes.normal && (o.geometry.attributes.uv || !o.material.map)) {
      const key = `${matKey(o.material)}|${o.castShadow}|${o.receiveShadow}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(o);
    }
    o.children.slice().forEach(walk);
  })(root);
  let merged = 0;
  groups.forEach((list) => {
    if (list.length < 2) return;
    const mat = list[0].material;
    const withColor = !!mat.vertexColors && list.every((o) => o.geometry.attributes.color);
    if (mat.vertexColors && !withColor) return;
    const attrs = withColor ? ['position', 'normal', 'uv', 'color'] : ['position', 'normal', 'uv'];
    const geos = list.map((o) => {
      let g2 = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      const keep = new THREE.BufferGeometry();
      attrs.forEach((a) => { if (g2.attributes[a]) keep.setAttribute(a, g2.attributes[a]); });
      if (!keep.attributes.uv) keep.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(keep.attributes.position.count * 2), 2));
      keep.applyMatrix4(local ? new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld) : o.matrixWorld);
      return keep;
    });
    const geo = mergeGeometries(geos, false);
    if (!geo) return;
    const m = new THREE.Mesh(geo, mat);
    m.castShadow = list[0].castShadow; m.receiveShadow = list[0].receiveShadow;
    root.add(m);
    list.forEach((o) => { if (o.parent) o.parent.remove(o); });
    merged += list.length;
  });
  return merged;
}

function radiusFor(n) { return Math.max(0.8, (n * 0.95) / (Math.PI * 2) + 0.22); }

function buildTable(n) {
  if (tableGroup) { scene.remove(tableGroup); tableGroup.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); }
  tableR = radiusFor(n);
  seatR = tableR + 0.36;
  tableGroup = new THREE.Group();
  const topTex = canvasTex(woodCanvas(512, 512, '#6b4526', 7));
  const top = mesh(new THREE.CylinderGeometry(tableR, tableR, 0.06, 64), [
    std(0x4a2e18, 0.85), std(0xffffff, 0.7, { map: topTex }), std(0x3a2412, 0.9),
  ]);
  top.position.y = TABLE_Y - 0.03; tableGroup.add(top);
  const band = mesh(new THREE.TorusGeometry(tableR + 0.005, 0.018, 8, 80), std(0x3a3028, 0.45, { metalness: 0.7 }), false, false);
  band.rotation.x = Math.PI / 2; band.position.y = TABLE_Y - 0.03; tableGroup.add(band);
  // Nieten
  const rivetMat = std(0x8a7a60, 0.4, { metalness: 0.8 });
  const nr = Math.round(tableR * 16);
  for (let i = 0; i < nr; i++) {
    const a = (i / nr) * Math.PI * 2;
    const r = mesh(new THREE.SphereGeometry(0.012, 6, 4), rivetMat, false, false);
    r.position.set(Math.cos(a) * (tableR + 0.02), TABLE_Y - 0.03, Math.sin(a) * (tableR + 0.02));
    tableGroup.add(r);
  }
  // Großes Fass als Tischfuß
  const legMat = std(0xffffff, 0.85, { map: canvasTex(woodCanvas(256, 128, '#6a4526', 12)) });
  const leg = mesh(barrelGeometry(0.3 + tableR * 0.12, 0.36 + tableR * 0.14, TABLE_Y - 0.06), legMat);
  leg.position.y = (TABLE_Y - 0.06) / 2; tableGroup.add(leg);
  const tb = blobShadow(tableR * 1.05, 0.5); tb.position.y = 0.006; tb.userData.dynamic = true; tableGroup.add(tb);
  addHoops(leg, 0.36 + tableR * 0.14, TABLE_Y - 0.06);
  // Kleinkram neben der Laterne: Rumflasche, Münzstapel, Messer
  const bottle = new THREE.Group();
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0x2c4a22, roughness: 0.12, metalness: 0, clearcoat: 1, transparent: true, opacity: 0.88 });
  const bGeo = new THREE.LatheGeometry([[0, 0], [0.034, 0], [0.038, 0.006], [0.038, 0.1], [0.03, 0.125], [0.013, 0.145], [0.012, 0.19], [0.015, 0.195], [0.014, 0.2], [0, 0.2]].map(([x, y]) => new THREE.Vector2(x, y)), 18);
  bottle.add(mesh(bGeo, glassMat));
  const cork = mesh(new THREE.CylinderGeometry(0.0105, 0.011, 0.025, 10), std(0xb08a5a, 0.9)); cork.position.y = 0.205; bottle.add(cork);
  const label = mesh(new THREE.CylinderGeometry(0.0385, 0.0385, 0.045, 18, 1, true), std(0xe8d8b0, 0.9, { side: THREE.DoubleSide }), false, false); label.position.y = 0.06; bottle.add(label);
  bottle.position.set(0.17, TABLE_Y, -0.09); bottle.rotation.y = 0.6; tableGroup.add(bottle);
  const coinMat = std(0xf2c24a, 0.3, { metalness: 0.9, emissive: 0x4a3000, emissiveIntensity: 0.35 });
  const coinG = new THREE.CylinderGeometry(0.022, 0.022, 0.006, 14);
  [[-0.16, 0.06, 5], [-0.12, 0.12, 2], [-0.19, 0.12, 1]].forEach(([x, z, n]) => {
    for (let i = 0; i < n; i++) { const c = mesh(coinG, coinMat, false, true); c.position.set(x + Math.sin(i * 2.1) * 0.003, TABLE_Y + 0.003 + i * 0.006, z + Math.cos(i * 1.7) * 0.003); tableGroup.add(c); }
  });
  const knife = new THREE.Group();
  const blade = mesh(new THREE.BoxGeometry(0.12, 0.003, 0.018), std(0xc8c8d0, 0.25, { metalness: 0.9 }), false, true); blade.position.x = 0.06; knife.add(blade);
  const grip = mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.07, 8), std(0x3a2414, 0.7), false, true); grip.rotation.z = Math.PI / 2; grip.position.x = -0.035; knife.add(grip);
  knife.position.set(0.02, TABLE_Y + 0.009, 0.17); knife.rotation.y = 0.5; tableGroup.add(knife);
  // Laterne in der Mitte
  lantern = buildLantern();
  lantern.userData.dynamic = true;
  tableGroup.add(lantern);
  batchStatic(tableGroup, true);
  scene.add(tableGroup);
}

function buildLantern() {
  const g = new THREE.Group();
  const metal = std(0x2a2420, 0.45, { metalness: 0.7 });
  const base = mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.03, 12), metal); base.position.y = 0.015; g.add(base);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 0.13, 12, 1, true), new THREE.MeshStandardMaterial({ color: 0xffc070, emissive: 0xff9a30, emissiveIntensity: 1.3, transparent: true, opacity: 0.75, side: THREE.DoubleSide }));
  glass.position.y = 0.1; g.add(glass);
  const cap = mesh(new THREE.ConeGeometry(0.075, 0.06, 12), metal); cap.position.y = 0.195; g.add(cap);
  const ring = mesh(new THREE.TorusGeometry(0.025, 0.006, 6, 12), metal); ring.position.y = 0.24; g.add(ring);
  [0, 1, 2, 3].forEach((i) => { const bar = mesh(new THREE.BoxGeometry(0.008, 0.13, 0.008), metal); const a = (i / 4) * Math.PI * 2 + 0.4; bar.position.set(Math.cos(a) * 0.058, 0.1, Math.sin(a) * 0.058); g.add(bar); });
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture(), color: 0xffa050, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.8 }));
  glow.scale.set(0.5, 0.5, 1); glow.position.y = 0.1; g.add(glow);
  g.userData.glow = glow;
  g.position.y = TABLE_Y;
  return g;
}

// ---------------------------------------------------------------------------
// Becher & Würfel
// ---------------------------------------------------------------------------
let cupGeo = null, cupMats = null;
function cupGeometry() {
  if (cupGeo) return cupGeo;
  // Becher mit der Öffnung bei y = 0 nach UNTEN (steht umgedreht auf dem Tisch), Boden oben.
  const pts = [
    new THREE.Vector2(0.0, CUP_H - 0.012),
    new THREE.Vector2(CUP_RB - 0.012, CUP_H - 0.012),
    new THREE.Vector2(CUP_RM - 0.012, 0.004),
    new THREE.Vector2(CUP_RM, 0.0),
    new THREE.Vector2(CUP_RM + 0.004, 0.012),
    new THREE.Vector2(CUP_RB, CUP_H - 0.01),
    new THREE.Vector2(CUP_RB - 0.01, CUP_H),
    new THREE.Vector2(0.0, CUP_H),
  ];
  cupGeo = new THREE.LatheGeometry(pts, 36);
  // UV-v nach Höhe, damit die Ledertextur (Nähte, Brandzeichen) unverzerrt auf der Außenwand liegt
  const pa = cupGeo.attributes.position, ua = cupGeo.attributes.uv;
  for (let i = 0; i < pa.count; i++) ua.setY(i, clamp(pa.getY(i) / CUP_H, 0, 1));
  return cupGeo;
}
function makeCup(seed) {
  if (!cupMats) {
    const tex = leatherTexture();
    cupMats = [0xffffff, 0xd9b8a0, 0xe0b090, 0xc8b8a8].map((c) => new THREE.MeshStandardMaterial({ color: c, map: tex, roughness: 0.68, side: THREE.DoubleSide }));
  }
  const g = new THREE.Group();
  const body = mesh(cupGeometry(), cupMats[seed % cupMats.length]);
  g.add(body);
  const brass = std(0xc09848, 0.42, { metalness: 0.85 });
  const r1 = mesh(new THREE.TorusGeometry(CUP_RM + 0.004, 0.007, 6, 36), brass, false, false); r1.rotation.x = Math.PI / 2; r1.position.y = 0.012; g.add(r1);
  const r2 = mesh(new THREE.TorusGeometry(CUP_RB + 0.002, 0.006, 6, 36), brass, false, false); r2.rotation.x = Math.PI / 2; r2.position.y = CUP_H - 0.03; g.add(r2);
  g.userData.body = body;
  return g;
}

// Reihenfolge der Box-Seiten: +x, -x, +y, -y, +z, -z
const FACE_ORDER = [2, 5, 1, 6, 3, 4];
// Ein Würfel = ein Zeichenaufruf: alle sechs Seiten liegen in einer Textur (3 × 2 Felder)
let dieAtlas = null;
function dieAtlasTexture() {
  if (dieAtlas) return dieAtlas;
  const cv = mkCanvas(384, 256); const c = cv.getContext('2d');
  for (let v = 1; v <= 6; v++) {
    const src = dieTexture(v).image;
    c.drawImage(src, ((v - 1) % 3) * 128, Math.floor((v - 1) / 3) * 128);
  }
  dieAtlas = canvasTex(cv);
  return dieAtlas;
}
const dieGeo = (() => {
  const g = new THREE.BoxGeometry(DIE, DIE, DIE);
  g.clearGroups();
  const uv = g.attributes.uv;
  for (let f = 0; f < 6; f++) {
    const v = FACE_ORDER[f], col = (v - 1) % 3, row = Math.floor((v - 1) / 3);
    for (let k = 0; k < 4; k++) {
      const i = f * 4 + k;
      const u0 = uv.getX(i) * 0.96 + 0.02, v0 = uv.getY(i) * 0.96 + 0.02; // kleiner Rand gegen Überlaufen der Nachbarfelder
      uv.setXY(i, (col + u0) / 3, 1 - (row + 1) / 2 + v0 / 2);
    }
  }
  return g;
})();
function dmat(m) { return Array.isArray(m.material) ? m.material : [m.material]; }
function makeDie(value, yawRot) {
  const mat = new THREE.MeshStandardMaterial({ map: dieAtlasTexture(), roughness: 0.45, emissive: 0xffc040, emissiveIntensity: 0 });
  const m = mesh(dieGeo, mat);
  setDieValue(m, value, yawRot);
  return m;
}
function setDieValue(m, v, yawRot) {
  const e = new THREE.Euler();
  if (v === 6) e.set(Math.PI, 0, 0);
  else if (v === 2) e.set(0, 0, Math.PI / 2);
  else if (v === 5) e.set(0, 0, -Math.PI / 2);
  else if (v === 3) e.set(-Math.PI / 2, 0, 0);
  else if (v === 4) e.set(Math.PI / 2, 0, 0);
  const base = new THREE.Quaternion().setFromEuler(e);
  const yq = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yawRot || 0);
  m.quaternion.copy(yq.multiply(base));
  m.userData.value = v;
}
const DIE_SLOTS = [[0, 0], [0.068, 0.035], [-0.066, 0.04], [0.012, -0.072], [-0.058, -0.048], [0.07, -0.042], [-0.004, 0.08]];

// ---------------------------------------------------------------------------
// Figuren
// ---------------------------------------------------------------------------
// Enten-Farben (Gefieder Körper / Kopf) - bunt gemischt, eigene Fantasie-Enten
const PLUMAGE = [
  [0xf4f1e8, 0xf4f1e8], [0xf2cf3a, 0xf2cf3a], [0x8a6a44, 0x2f6b3a], [0x9a9aa0, 0x9a9aa0],
  [0x6b4a30, 0x6b4a30], [0xe8e2d0, 0xc9a870], [0x3a3a3a, 0x3a3a3a], [0xd9a66b, 0xd9a66b],
];
const BILL = 0xf08a1c;

let woodMatCache = null;
const dotTexCache = {};
function dotTexture(color) {
  if (dotTexCache[color]) return dotTexCache[color];
  const cv = mkCanvas(128, 128); const c = cv.getContext('2d');
  c.fillStyle = '#' + new THREE.Color(color).getHexString(); c.fillRect(0, 0, 128, 128);
  c.fillStyle = 'rgba(255,255,255,0.85)';
  for (let y = 8; y < 128; y += 22) for (let x = (y / 22) % 2 ? 8 : 19; x < 128; x += 22) { c.beginPath(); c.arc(x, y, 4, 0, Math.PI * 2); c.fill(); }
  const t = canvasTex(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 2);
  dotTexCache[color] = t; return t;
}
const duckHelpers = {
  barrelGeometry: (a, b, c) => barrelGeometry(a, b, c),
  woodMat: () => woodMatCache || (woodMatCache = std(0xffffff, 0.85, { map: canvasTex(woodCanvas(128, 64, '#6a4526', 8)) })),
  skullTexture: () => skullTexture(),
  dotTexture: (c) => dotTexture(c),
  mergeGeometries: (list) => mergeGeometries(list.map((gg) => { const k = gg.index ? gg.toNonIndexed() : gg; const n = new THREE.BufferGeometry(); ['position', 'normal', 'uv'].forEach((a) => { if (k.attributes[a]) n.setAttribute(a, k.attributes[a]); }); return n; })),
  batchStatic: (root, local) => batchStatic(root, local),
};
function buildCharacter(id, isMe, avatar) { return buildDuck(id, isMe, duckHelpers, avatar); }
export const palettes = DUCK_PALETTES;

let skullTex = null;
function skullTexture() {
  if (skullTex) return skullTex;
  const cv = mkCanvas(128, 128); const c = cv.getContext('2d');
  drawSkull(c, 64, 60, 1, '#f1ead8', 'rgba(0,0,0,0)');
  skullTex = canvasTex(cv);
  return skullTex;
}
// Totenkopf mit gekreuzten Knochen (für Hut und Flagge)
function drawSkull(c, x, y, k, col, bg) {
  c.save(); c.translate(x, y); c.scale(k, k);
  c.strokeStyle = col; c.lineWidth = 12; c.lineCap = 'round';
  c.beginPath(); c.moveTo(-40, 20); c.lineTo(40, 58); c.moveTo(40, 20); c.lineTo(-40, 58); c.stroke();
  c.fillStyle = col;
  [[-44, 20], [-40, 12], [44, 20], [40, 12], [-44, 58], [-38, 64], [44, 58], [38, 64]].forEach(([a, b]) => { c.beginPath(); c.arc(a, b, 7, 0, Math.PI * 2); c.fill(); });
  c.beginPath(); c.arc(0, -8, 30, 0, Math.PI * 2); c.fill();
  c.fillRect(-16, 12, 32, 20);
  c.fillStyle = '#111';
  c.beginPath(); c.arc(-11, -8, 8, 0, Math.PI * 2); c.arc(11, -8, 8, 0, Math.PI * 2); c.fill();
  c.beginPath(); c.moveTo(0, 2); c.lineTo(-5, 12); c.lineTo(5, 12); c.closePath(); c.fill();
  c.fillRect(-10, 24, 3, 8); c.fillRect(-2, 24, 3, 8); c.fillRect(6, 24, 3, 8);
  c.restore();
}

const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0);
function setLimb(m, a, b, L) {
  _v1.subVectors(b, a); const len = _v1.length();
  m.position.copy(a).addScaledVector(_v1, 0.5);
  m.scale.set(1, Math.max(0.001, L ? len / L : len), 1);
  m.quaternion.setFromUnitVectors(_up, _v1.normalize());
}
// Arm vom Schulterpunkt zum Ziel (beides lokal in der Figur) mit einfacher Zweigelenk-IK.
function solveArm(arm, shoulder, target) {
  const L1 = arm.L1 || 0.34, L2 = arm.L2 || 0.34;
  const d = _v2.subVectors(target, shoulder);
  let dist = d.length();
  const maxD = (L1 + L2) * 0.995;
  const T = _v3.copy(target);
  if (dist > maxD) { T.copy(shoulder).addScaledVector(d.normalize(), maxD); dist = maxD; }
  const mid = new THREE.Vector3().addVectors(shoulder, T).multiplyScalar(0.5);
  const hgt = Math.sqrt(Math.max(0, L1 * L1 - (dist / 2) * (dist / 2)));
  const axis = new THREE.Vector3().subVectors(T, shoulder).normalize();
  const bend = new THREE.Vector3(arm.side * 0.8, -1, 0.25);
  bend.addScaledVector(axis, -bend.dot(axis)).normalize();
  const elbow = mid.addScaledVector(bend, hgt);
  setLimb(arm.upper, shoulder, elbow, L1);
  if (arm.short) {
    // Eigene Flügel: nur Flügelspitze, Manschette und ein kurzes, schmales Stück Flügel
    const st = elbow.clone().lerp(T, 0.55);
    setLimb(arm.fore, st, T, L2); arm.fore.scale.x = arm.fore.scale.z = 0.85;
  } else setLimb(arm.fore, elbow, T, L2);
  arm.cuff.position.copy(elbow).lerp(T, 0.86);
  arm.cuff.quaternion.copy(arm.fore.quaternion);
  arm.hand.position.copy(T);
  arm.hand.quaternion.copy(arm.fore.quaternion);
}

// ---------------------------------------------------------------------------
// Sprites (Namen, Sprechblasen, Tischmitte)
// ---------------------------------------------------------------------------
function makeSprite(w, h, scale, fixedSize) {
  const cv = mkCanvas(w, h);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTex(cv), transparent: true, depthWrite: false, depthTest: true, sizeAttenuation: !fixedSize }));
  sp.userData.cv = cv;
  sp.scale.set(scale, (scale * h) / w, 1);
  sp.renderOrder = 5;
  return sp;
}
function paintLabel(sp, s) {
  // Gleicher Glas-Look wie das HTML-HUD: dunkles Braun, feine Goldlinie, cremefarbene Schrift
  const cv = sp.userData.cv; const c = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  c.clearRect(0, 0, W, H);
  c.font = `600 40px ${FONT}`;
  let name = (s.out ? '☠ ' : '') + (s.host ? '👑 ' : '') + (s.bot ? '🤖 ' : '') + s.name;
  while (c.measureText(name).width > W - 90 && name.length > 3) name = name.slice(0, -2);
  const tw = Math.min(W - 24, c.measureText(name).width + 52);
  const bx = (W - tw) / 2, by = 14, bh = H - 28, rad = bh / 2;
  const pill = () => { c.beginPath(); c.moveTo(bx + rad, by); c.arcTo(bx + tw, by, bx + tw, by + bh, rad); c.arcTo(bx + tw, by + bh, bx, by + bh, rad); c.arcTo(bx, by + bh, bx, by, rad); c.arcTo(bx, by, bx + tw, by, rad); c.closePath(); };
  c.save();
  if (s.turn) { c.shadowColor = 'rgba(244,201,93,0.75)'; c.shadowBlur = 14; }
  c.fillStyle = s.turn ? 'rgba(74,50,18,0.93)' : 'rgba(22,16,11,0.8)';
  pill(); c.fill(); c.restore();
  if (s.turn && s.progress !== null && s.progress !== undefined) {
    // Zug-Timer: der Rahmen leert sich
    pill(); c.lineWidth = 5; c.strokeStyle = 'rgba(244,201,93,0.22)'; c.stroke();
    const per = 2 * (tw - 2 * rad) + 2 * Math.PI * rad;
    c.save(); c.setLineDash([per * s.progress, per + 10]);
    c.strokeStyle = s.progress < 0.27 ? '#ff6a4a' : '#f4c95d';
    c.beginPath();
    c.moveTo(W / 2, by); c.arcTo(bx + tw, by, bx + tw, by + bh, rad); c.arcTo(bx + tw, by + bh, bx, by + bh, rad);
    c.arcTo(bx, by + bh, bx, by, rad); c.arcTo(bx, by, bx + tw, by, rad); c.lineTo(W / 2, by);
    c.stroke(); c.restore();
  } else { pill(); c.lineWidth = s.turn ? 5 : 2.5; c.strokeStyle = s.turn ? '#f4c95d' : 'rgba(217,179,106,0.42)'; c.stroke(); }
  c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillStyle = s.out ? '#9a9088' : (s.away ? '#e0a060' : (s.turn ? '#ffe6b0' : '#f5ebd6'));
  c.fillText(name, W / 2, H / 2 + 2);
  sp.material.map.needsUpdate = true;
}
function paintBubble(sp, b) {
  const cv = sp.userData.cv; const c = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  c.clearRect(0, 0, W, H);
  const red = b.kind === 'liar' || b.kind === 'spot';
  c.fillStyle = red ? '#b3242a' : '#f6ecd2';
  rr(c, 10, 10, W - 20, H - 50, 36); c.fill();
  c.beginPath(); c.moveTo(W / 2 - 22, H - 42); c.lineTo(W / 2, H - 6); c.lineTo(W / 2 + 22, H - 42); c.closePath(); c.fill();
  c.lineWidth = 5; c.strokeStyle = red ? '#ffd0c0' : '#6a4a20'; rr(c, 10, 10, W - 20, H - 50, 36); c.stroke();
  c.textAlign = 'center'; c.textBaseline = 'middle';
  if (red) {
    c.fillStyle = '#fff'; c.font = `900 64px ${SERIF}`;
    c.fillText(b.kind === 'spot' ? 'Genau!' : 'Lügner!', W / 2, (H - 40) / 2 + 6);
  } else {
    c.fillStyle = '#2a1a0a'; c.font = `900 70px ${SERIF}`;
    const txt = `${b.qty} ×`;
    const tw = c.measureText(txt).width; const ds = 78; const tot = tw + 18 + ds;
    c.textAlign = 'left'; c.fillText(txt, W / 2 - tot / 2, (H - 40) / 2 + 6);
    drawDieIcon(c, W / 2 - tot / 2 + tw + 18, (H - 40) / 2 - ds / 2 + 4, ds, b.face);
  }
  sp.material.map.needsUpdate = true;
}
function paintCenter(sp, info) {
  const cv = sp.userData.cv; const c = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  c.clearRect(0, 0, W, H);
  if (!info) { sp.material.map.needsUpdate = true; return; }
  c.fillStyle = info.tone === 'good' ? 'rgba(20,70,40,0.88)' : info.tone === 'bad' ? 'rgba(110,20,20,0.9)' : 'rgba(14,26,38,0.85)';
  rr(c, 8, 8, W - 16, H - 16, 30); c.fill();
  c.lineWidth = 4; c.strokeStyle = '#d9b36a'; c.stroke();
  c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillStyle = '#e8d6a8'; c.font = `600 30px ${FONT}`; c.fillText(info.top, W / 2, 44);
  c.fillStyle = '#fff4dc'; c.font = `900 64px ${SERIF}`;
  if (info.face) {
    const txt = `${info.qty} ×`; const tw = c.measureText(txt).width; const ds = 66; const tot = tw + 14 + ds;
    c.textAlign = 'left'; c.fillText(txt, W / 2 - tot / 2, 112);
    drawDieIcon(c, W / 2 - tot / 2 + tw + 14, 112 - ds / 2, ds, info.face);
  } else c.fillText(info.big || '', W / 2, 112);
  sp.material.map.needsUpdate = true;
}

// ---------------------------------------------------------------------------
// Sitze
// ---------------------------------------------------------------------------
function makeSeat(p, isMe) {
  const frame = new THREE.Group(); scene.add(frame);
  const parts = buildCharacter(p.id, isMe, p.avatar);
  frame.add(parts.g);
  const cupRoot = new THREE.Group(); scene.add(cupRoot);
  const tiltG = new THREE.Group(); tiltG.position.set(0, 0, -CUP_RM); cupRoot.add(tiltG);
  const flipG = new THREE.Group(); tiltG.add(flipG);
  const cup = makeCup(hashStr(p.id)); flipG.add(cup);
  const diceG = new THREE.Group(); cupRoot.add(diceG);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.235, 40), new THREE.MeshBasicMaterial({ color: 0xf4c95d, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.003; cupRoot.add(ring);
  const cupBlob = blobShadow(0.2, 0.32); cupBlob.position.y = 0.002; cupRoot.add(cupBlob);
  if (!isMe) { const sb = blobShadow(0.42, 0.45); sb.position.set(0, 0.008, 0.05); frame.add(sb); }
  const mug = isMe ? null : makeMug(); if (mug) parts.g.add(mug);
  const label = makeSprite(512, 96, 0.5, true); label.position.set(0, 1.5, 0.05);
  const bubble = makeSprite(420, 200, 0.4); bubble.position.set(0.46, 1.45, -0.05); bubble.visible = false; bubble.renderOrder = 6;
  if (!isMe) { frame.add(label); frame.add(bubble); }
  const s = {
    id: p.id, isMe, frame, parts, cupRoot, mug, idle: null, nextIdle: 0, expr: null, tiltG, flipG, cup, diceG, ring, label, bubble,
    pose: { flip: 1, side: 1, lift: 0, tilt: 0, shx: 0, shy: 0, shz: 0, wob: 0 },
    hold: 0, holdTarget: 0, anim: null, peek: 0, peekOn: false, labelKey: '', out: false,
    lookYaw: 0, lookCur: 0, nod: 0, slam: 0, bubbleUntil: 0, bubbleSticky: false, dice: [], diceRound: -1,
  };
  applyPose(s);
  return s;
}

// Holzkrug mit Eisenbändern (für die Leerlauf-Animation "einen Schluck nehmen")
let mugGeos = null;
function makeMug() {
  if (!mugGeos) {
    mugGeos = {
      body: new THREE.CylinderGeometry(0.033, 0.037, 0.085, 14).translate(0, 0.0425, 0),
      band: new THREE.TorusGeometry(0.036, 0.004, 5, 18).rotateX(Math.PI / 2),
      handle: new THREE.TorusGeometry(0.022, 0.006, 6, 12, Math.PI).rotateZ(-Math.PI / 2).translate(0.037, 0.045, 0),
      rum: new THREE.CircleGeometry(0.03, 14).rotateX(-Math.PI / 2).translate(0, 0.078, 0),
      wood: std(0xffffff, 0.8, { map: canvasTex(woodCanvas(128, 64, '#7a5230', 6)) }),
      iron: std(0x2b2724, 0.45, { metalness: 0.7 }),
      liquid: std(0x4a2408, 0.2),
    };
  }
  const g = new THREE.Group();
  g.add(mesh(mugGeos.body, mugGeos.wood));
  [0.014, 0.07].forEach((y) => { const b = mesh(mugGeos.band, mugGeos.iron, false, false); b.position.y = y; g.add(b); });
  g.add(mesh(mugGeos.handle, mugGeos.iron));
  g.add(mesh(mugGeos.rum, mugGeos.liquid, false, false));
  batchStatic(g, true);
  g.userData.rest = new THREE.Vector3(-0.3, TABLE_Y, -0.5);
  g.position.copy(g.userData.rest);
  return g;
}
// Mimik über die Augenbrauen (und Lider): skeptisch, wütend, traurig, fröhlich
function browTarget(kind, sd) {
  if (kind === 'sad') return [0.006, sd * 0.42];
  if (kind === 'angry') return [-0.007, -sd * 0.34];
  if (kind === 'happy') return [0.013, sd * 0.14];
  if (kind === 'skeptic') return sd > 0 ? [0.018, sd * 0.18] : [-0.006, -sd * 0.24];
  return [0, 0];
}
function applyExpr(parts, kind, k) {
  (parts.brows || []).forEach((b) => {
    const [lift, tilt] = browTarget(kind, b.sd);
    b.lift += (lift - b.lift) * k; b.tilt += (tilt - b.tilt) * k;
    b.m.position.y = b.y0 + b.lift; b.m.rotation.z = b.z0 + b.tilt;
  });
}
function setExpr(id, kind, ms) { const s = seats[id]; if (s && !s.isMe) s.expr = { kind, until: performance.now() + ms }; }
function removeSeat(s) {
  scene.remove(s.frame); scene.remove(s.cupRoot);
}

function layoutSeats(view) {
  const players = view.players; const n = players.length;
  const key = players.map((p) => p.id + ':' + JSON.stringify(p.avatar || null)).join(',') + '|' + view.meId;
  if (key === tableKey) return false;
  tableKey = key;
  buildTable(n);
  Object.keys(seats).forEach((id) => { if (!players.find((p) => p.id === id)) { removeSeat(seats[id]); delete seats[id]; } });
  const meIdx = Math.max(0, players.findIndex((p) => p.id === view.meId));
  seatOrder = [];
  for (let i = 0; i < n; i++) {
    const p = players[(meIdx + i) % n];
    let s = seats[p.id];
    const isMe = p.id === view.meId;
    const avKey = JSON.stringify(p.avatar || null);
    if (s && (s.isMe !== isMe || s.avKey !== avKey)) { removeSeat(s); delete seats[p.id]; s = null; }
    if (!s) { s = seats[p.id] = makeSeat(p, isMe); s.avKey = avKey; scaleSprites(s); }
    const a = Math.PI / 2 + (i * Math.PI * 2) / n;
    const dx = Math.cos(a), dz = Math.sin(a);
    s.dir = new THREE.Vector3(dx, 0, dz);
    s.rot = Math.atan2(dx, dz);
    s.frame.position.set(dx * seatR, 0, dz * seatR);
    s.frame.rotation.y = s.rot;
    // Becher leicht rechts vor der Person (wie Rechtshänder), damit die Tischmitte frei bleibt
    const tx = dz, tz = -dx; // Tangente = rechte Hand der Person (sie blickt zur Mitte)
    s.cupRoot.position.set(dx * (tableR - 0.22) + tx * 0.12, TABLE_Y, dz * (tableR - 0.22) + tz * 0.12);
    s.cupRoot.rotation.y = s.rot;
    s.idx = i;
    seatOrder.push(s);
  }
  return true;
}

function applyPose(s) {
  const P = s.pose;
  const fa = P.flip * Math.PI;
  // flipG liegt relativ zum Scharnier (Becherrand auf der Tischmitten-Seite)
  s.flipG.position.set(
    SIDE_SPOT.x * P.side + P.shx,
    P.lift + (CUP_H * (1 - Math.cos(fa))) / 2 + P.shy,
    CUP_RM + SIDE_SPOT.z * P.side + P.shz,
  );
  s.flipG.rotation.set(P.wob * 0.6, 0, fa + P.wob);
  s.tiltG.rotation.x = -P.tilt;
}

// Griffpunkt am Becher (Welt), für die Hand
const _grip = new THREE.Vector3();
function gripWorld(s) {
  // Die eigene Hand greift den Becher von rechts, damit der Arm nicht vor der Kamera hängt.
  if (s.isMe) _grip.set(CUP_RM * 0.98, CUP_H * 0.5, CUP_RM * 0.35);
  else _grip.set(0, CUP_H * 0.55, CUP_RM * 0.95);
  return s.flipG.localToWorld(_grip);
}

function setHold(s, v) { s.holdTarget = v; }

// ---------------------------------------------------------------------------
// Würfel unter den Bechern
// ---------------------------------------------------------------------------
function clearDice(s) {
  while (s.diceG.children.length) {
    const m = s.diceG.children[0];
    s.diceG.remove(m);
    dmat(m).forEach((x) => x.dispose());
  }
  s.dice = [];
}
function placeDice(s, values, seedKey) {
  clearDice(s);
  const h = hashStr(s.id + '|' + seedKey);
  values.forEach((v, i) => {
    const slot = DIE_SLOTS[i % DIE_SLOTS.length];
    const jit = ((h >> (i * 3)) % 7) / 7 - 0.5;
    const m = makeDie(v, jit * 1.2 + i);
    m.position.set(slot[0] + jit * 0.01, DIE / 2 + 0.001, slot[1] - jit * 0.01);
    s.diceG.add(m);
    s.dice.push(m);
  });
}

// ---------------------------------------------------------------------------
// Animationen der Becher
// ---------------------------------------------------------------------------
function animatePose(s, dur, delay, to, onDone) {
  const from = Object.assign({}, s.pose);
  if (s.anim) s.anim.cancelled = true;
  const tw = addTween(dur, delay, (p) => {
    if (tw.cancelled) return;
    const e = ease(p);
    Object.keys(to).forEach((k) => { s.pose[k] = lerp(from[k], to[k], e); });
    applyPose(s);
  }, () => { if (tw.cancelled) return; if (s.anim === tw) s.anim = null; onDone && onDone(); });
  s.anim = tw;
  return tw;
}

// Würfeln: Becher hochnehmen, Würfel hinein, schütteln, umgedreht auf den Tisch knallen.
function animateRoll(s, delay, onSlam) {
  const P = s.pose;
  if (s.anim) s.anim.cancelled = true;
  setHold(s, 1);
  const start = Object.assign({}, P);
  const D1 = 380, D2 = 1050, D3 = 320;
  const seedPh = Math.random() * 6;
  const tw = addTween(D1 + D2 + D3, delay, (p) => {
    if (tw.cancelled) return;
    const ms = p * (D1 + D2 + D3);
    if (ms < D1) {
      // zur Mitte, Öffnung nach oben, anheben; Würfel werden "eingesammelt"
      const e = ease(ms / D1);
      P.side = lerp(start.side, 0, e); P.flip = lerp(start.flip, 1, e); P.lift = lerp(start.lift, 0.2, e); P.tilt = lerp(start.tilt, 0, e);
      P.shx = P.shy = P.shz = P.wob = 0;
      if (e > 0.6 && s.diceG.children.length) clearDice(s);
    } else if (ms < D1 + D2) {
      const k = (ms - D1) / D2;
      const amp = Math.sin(Math.PI * k);
      P.side = 0; P.flip = 1; P.lift = 0.2 + amp * 0.06; P.tilt = 0;
      P.shx = Math.sin(k * 48 + seedPh) * 0.035 * amp; P.shz = Math.cos(k * 41 + seedPh) * 0.03 * amp; P.shy = Math.abs(Math.sin(k * 30)) * 0.03 * amp;
      P.wob = Math.sin(k * 44 + seedPh) * 0.12 * amp;
    } else {
      const k = (ms - D1 - D2) / D3;
      const e = k * k; // beschleunigt nach unten
      P.shx = P.shy = P.shz = P.wob = 0; P.side = 0;
      P.flip = lerp(1, 0, Math.min(1, k * 1.6));
      P.lift = lerp(0.2, 0, e);
    }
    applyPose(s);
  }, () => {
    if (tw.cancelled) return;
    Object.assign(P, { side: 0, flip: 0, lift: 0, tilt: 0, shx: 0, shy: 0, shz: 0, wob: 0 });
    applyPose(s);
    if (s.anim === tw) s.anim = null;
    onSlam && onSlam();
  });
  s.anim = tw;
  if (O && O.sound) {
    for (let i = 0; i < 9; i++) setTimeout(() => O.sound('rattle', s.isMe ? 1 : 0.45), delay + D1 + i * 110 + Math.random() * 40);
    setTimeout(() => O.sound('slam', s.isMe ? 1 : 0.5), delay + D1 + D2 + D3 - 20);
  }
}

// Aufdecken: Becher anheben, umdrehen und rechts daneben abstellen.
function animateReveal(s, delay) {
  setHold(s, 1);
  s.peekOn = false;
  animatePose(s, 380, delay, { lift: 0.22, tilt: 0, flip: 0.25 }, () => {
    animatePose(s, 480, 0, { side: 1, flip: 1, lift: 0.0 }, () => { setHold(s, 0); if (O && O.sound) O.sound('thud', 0.4); });
  });
}

// ---------------------------------------------------------------------------
// Öffentliche API
// ---------------------------------------------------------------------------
export function init(opts) {
  O = opts;
  if (opts.quality) qualityPref = ['auto', 'low', 'medium', 'high'].includes(opts.quality) ? opts.quality : 'auto';
  container = opts.container;
  canvas = document.createElement('canvas');
  canvas.className = 'scene3d-canvas';
  container.insertBefore(canvas, container.firstChild);
  lowEnd = (navigator.hardwareConcurrency || 8) <= 4 || Math.min(window.innerWidth, window.innerHeight) < 500;
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowEnd ? 1.5 : 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xf0b58a, 40, 260);
  camera = new THREE.PerspectiveCamera(60, 1, 0.05, 1200);

  const hemi = new THREE.HemisphereLight(0xffdcb8, 0x7a5a44, 1.05); scene.add(hemi); hemiLight = hemi;
  sunLight = new THREE.DirectionalLight(0xffc890, 2.6);
  sunLight.position.copy(SUN_DIR).multiplyScalar(30);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(lowEnd ? 1024 : 2048, lowEnd ? 1024 : 2048);
  const sc = sunLight.shadow.camera; sc.left = -5; sc.right = 5; sc.top = 5; sc.bottom = -5; sc.near = 5; sc.far = 60;
  sunLight.shadow.bias = -0.0005; sunLight.shadow.normalBias = 0.02;
  scene.add(sunLight); scene.add(sunLight.target);
  lanternLight = new THREE.PointLight(0xffa050, 2.2, 6, 1.6);
  lanternLight.position.set(0, TABLE_Y + 0.35, 0); scene.add(lanternLight);
  // Aufhelllicht von der Kameraseite: Palmenstämme und Enten wirken im Gegenlicht nicht mehr schwarz
  const fill = new THREE.DirectionalLight(0xa9c0ff, 0.6); fill.position.set(3, 5, 9); scene.add(fill); fillLight = fill;
  moonLight = new THREE.DirectionalLight(0x9fb4ff, 0); moonLight.position.copy(MOON_DIR).multiplyScalar(30); scene.add(moonLight);
  // Fackel- und Lagerfeuer-Licht (tagsüber aus, nachts an)
  [[2.2, 1.95, -3.3, 5], [-5.6, 0.6, 0.9, 7], [-2.4, 1.95, -2.9, 5]].forEach(([x, y, z, dist]) => {
    const l = new THREE.PointLight(0xff9040, 0, dist, 1.5); l.position.set(x, y, z); scene.add(l); nightLights.push(l);
  });

  buildSky();
  buildWater();
  buildIsland();
  buildPalm(-3.6, -3.4, 5.6, 0.5, -0.2, 1);
  buildPalm(4.2, -1.2, 4.8, 0.7, 0.3, 4);
  buildPalm(-4.6, 2.8, 6.2, -0.4, 0.6, 7);
  buildPalm(6.5, 4.5, 5.2, 0.3, 0.4, 2);
  buildShip();
  buildProps();
  buildPirateIsland();
  buildTorch(-2.4, -2.9);
  buildTorch(2.7, 2.6);
  buildTorch(2.2, -3.3);
  buildAtmosphere();
  batchStatic(scene);
  // Leichtes Leuchten (Fackeln, Laterne, Sonne) - nur auf stärkeren Geräten
  applyQuality();
  centerSprite = makeSprite(512, 160, 0.62);
  centerSprite.position.set(0, TABLE_Y + 0.5, 0);
  centerSprite.visible = false;
  centerSprite.renderOrder = 7;
  scene.add(centerSprite);
  // Große Zählanzeige beim Aufdecken
  countSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTex(mkCanvas(512, 288)), transparent: true, depthTest: false, depthWrite: false }));
  countSprite.userData.cv = countSprite.material.map.image;
  countSprite.renderOrder = 30; countSprite.visible = false;
  countSprite.position.set(0, TABLE_Y + 0.7, 0);
  scene.add(countSprite);

  // Umsehen per Ziehen (Maus / Finger), Klick auf den eigenen Becher = nachschauen
  let down = null;
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('pointerdown', (e) => {
    skipIntro(); winFocus = winFocus ? Object.assign(winFocus, { released: true }) : null;
    down = { x: e.clientX, y: e.clientY, yaw, pitch, moved: false, id: e.pointerId };
    try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* egal */ }
  });
  canvas.addEventListener('pointermove', (e) => {
    if (down && down.id === e.pointerId) {
      const dx = e.clientX - down.x, dy = e.clientY - down.y;
      if (Math.hypot(dx, dy) > 5) down.moved = true;
      if (down.moved) {
        const k = 2.2 / Math.max(300, canvas.clientWidth);
        yaw = clamp(down.yaw - dx * k * 1.2, -1.35, 1.35);
        pitch = clamp(down.pitch - dy * k, -1.05, 0.35);
        lastManualLook = performance.now();
      }
    } else if (e.pointerType !== 'touch') {
      canvas.style.cursor = pickMyCup(e) ? 'pointer' : 'grab';
    }
  });
  const up = (e) => {
    if (!down) return;
    const wasClick = !down.moved;
    down = null;
    if (wasClick && pickMyCup(e) && O.onCupClick) O.onCupClick();
  };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', () => { down = null; });
  canvas.addEventListener('dblclick', () => resetView());
  canvas.addEventListener('webglcontextlost', (e) => e.preventDefault());
  window.addEventListener('keydown', skipIntro);

  ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();
  pitch = basePitch;
  renderer.setAnimationLoop(tick);
}

function pickMyCup(e) {
  const me = lastView && seats[lastView.meId];
  if (!me || me.out) return false;
  const rect = canvas.getBoundingClientRect();
  pointer.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  return raycaster.intersectObject(me.cup, true).length > 0;
}

function resize() {
  if (!container || !renderer) return;
  const w = container.clientWidth, h = container.clientHeight;
  if (!w || !h) return;
  renderer.setSize(w, h, false);
  if (composer) composer.setSize(w, h);
  camera.aspect = w / h;
  // Hochformat: weiter aufziehen, damit der Tisch in die Breite passt
  const portrait = camera.aspect < 1;
  portraitMode = portrait;
  // Breiteres Sichtfeld, damit auch die direkten Nachbarn noch im Bild sind
  const hfov = (portrait ? 76 : 98) * (Math.PI / 180);
  const vNeeded = 2 * Math.atan(Math.tan(hfov / 2) / camera.aspect) * (180 / Math.PI);
  camera.fov = clamp(Math.max(58, vNeeded), 58, 100);
  camera.updateProjectionMatrix();
  labelScale = portrait ? 1.7 : (camera.aspect < 1.4 ? 1.25 : 1);
  basePitch = portrait ? -0.42 : -0.34;
  Object.values(seats).forEach((st) => scaleSprites(st));
  const ptScale = (h * renderer.getPixelRatio()) / (2 * Math.tan((camera.fov * Math.PI) / 360));
  atmo.systems.forEach((sys) => { sys.pts.material.uniforms.scale.value = ptScale; });
  const cs = portrait ? 1.15 : labelScale;
  if (centerSprite) centerSprite.scale.set(0.62 * cs, (0.62 * cs * 160) / 512, 1);
}

export function resetView() { yaw = 0; pitch = basePitch; lastManualLook = 0; }

export function setVisible(v) {
  const was = visible;
  visible = v;
  if (!canvas) return;
  if (v && !was) { canvas.style.display = 'block'; canvas.style.opacity = '0'; requestAnimationFrame(() => requestAnimationFrame(() => { canvas.style.opacity = '1'; })); lastFrame = 0; resize(); }
  else if (!v && was) { canvas.style.opacity = '0'; setTimeout(() => { if (!visible) canvas.style.display = 'none'; }, 350); }
}

export function setPeek(id, on) {
  const s = seats[id]; if (!s) return;
  if (s.isMe) return; // eigenes Nachschauen steuert setMyPeek
  s.peekOn = !!on;
}
export function setMyPeek(on) {
  myPeek = !!on;
  const me = lastView && seats[lastView.meId];
  if (me) me.peekOn = myPeek;
  if (O && O.sound && on) O.sound('lift', 0.6);
}
export function setLook(id, y) { const s = seats[id]; if (s) s.lookYaw = y; }

function canPeek(s) {
  const v = lastView;
  return v && v.gamePhase === 'bidding' && !s.anim && s.pose.flip < 0.01 && !s.out;
}

function turnProgress(view) {
  if (!view || !view.turnMs || !view.turnDeadline) return null;
  return clamp((view.turnDeadline - Date.now()) / view.turnMs, 0, 1);
}
function updateLabel(s, p, view) {
  const turn = view.currentTurnId === p.id;
  const prog = turn ? turnProgress(view) : null;
  const key = [p.name, p.eliminated, turn, p.isBot, p.connected, p.isHost, prog === null ? '' : Math.round(prog * 80)].join('|');
  if (s.labelKey === key) return;
  s.labelKey = key;
  paintLabel(s.label, { name: p.name, dice: p.dice, out: p.eliminated, turn, bot: p.isBot, away: !p.connected && !p.isBot, host: p.isHost, progress: prog });
}

function showBubble(s, b, ms, sticky) {
  if (s.isMe) return;
  paintBubble(s.bubble, b);
  s.bubble.visible = true;
  s.bubbleUntil = performance.now() + ms;
  s.bubbleSticky = !!sticky;
}

function setCenter(info) {
  const key = info ? JSON.stringify(info) : '';
  if (key === centerKey) return;
  centerKey = key;
  if (!info) { centerSprite.visible = false; return; }
  paintCenter(centerSprite, info);
  centerSprite.visible = true;
}

// Zustand ohne Animation herstellen (Einstieg, Wiederverbindung, verpasste Ereignisse)
function snapToState(view) {
  const r = view.reveal;
  if (view.gamePhase === 'bidding' && countSprite) countSprite.visible = false;
  seatOrder.forEach((s) => {
    const p = view.players.find((q) => q.id === s.id);
    if (!p) return;
    if (s.anim) return;
    const out = p.eliminated && !(r && r.dice && r.dice[p.id]);
    s.out = p.eliminated;
    s.cupRoot.visible = !out;
    if (view.gamePhase === 'bidding') {
      Object.assign(s.pose, { flip: 0, side: 0, lift: 0, tilt: s.pose.tilt, shx: 0, shy: 0, shz: 0, wob: 0 });
      setHold(s, 1);
      if (s.isMe) {
        if (view.myDice && view.myDiceRound === view.roundNo && s.diceRound !== view.roundNo) { placeDice(s, view.myDice, view.roundNo); s.diceRound = view.roundNo; }
      } else if (s.diceRound !== -2) { clearDice(s); s.diceRound = -2; }
    } else if (view.gamePhase === 'reveal' || view.gamePhase === 'over') {
      Object.assign(s.pose, { flip: 1, side: 1, lift: 0, tilt: 0, shx: 0, shy: 0, shz: 0, wob: 0 });
      setHold(s, 0);
      const key = 'rv' + view.roundNo;
      if (r && r.dice && r.dice[p.id] && s.diceRound !== key) { placeDice(s, r.dice[p.id], key); s.diceRound = key; }
    }
    applyPose(s);
  });
  if (view.reveal && !(reveal && reveal.key === 'rv' + view.roundNo)) { highlight(view.reveal, true); showVerdict(view.reveal); }
}

function highlight(r, on) {
  seatOrder.forEach((s) => {
    s.dice.forEach((m) => {
      const v = m.userData.value;
      const match = v === r.bid.face || (r.wildOnes && v === 1 && r.bid.face !== 1);
      m.userData.match = on && match;
      m.userData.dim = on && !match;
      dmat(m).forEach((mat) => { mat.emissiveIntensity = 0; mat.color.setScalar(on && !match ? 0.45 : 1); });
    });
  });
}

export function update(view) {
  if (!renderer) return;
  const prev = lastView;
  lastView = view;
  const relaid = layoutSeats(view);
  view.players.forEach((p) => {
    const s = seats[p.id]; if (!s) return;
    updateLabel(s, p, view);
    s.turn = view.currentTurnId === p.id;
    if (s.out && !p.eliminated) { s.out = false; if (!s.anim) s.cupRoot.visible = true; }
    if (view.phase === 'lobby') s.cheer = false;
    if (!s.isMe && p.peeking !== undefined) s.peekOn = !!p.peeking;
    if (!s.isMe && p.look !== undefined && !p.isBot) s.lookYaw = p.look;
  });
  if (view.myDice) myDiceCache = { round: view.myDiceRound, dice: view.myDice };
  spectDice = view.spectDice && view.phase === 'playing' ? { round: view.myDiceRound, dice: view.spectDice } : null;
  if (!spectDice) spectId = null;
  // Eigene Würfel nachreichen, falls sie nach dem Aufknallen eintreffen
  const me = seats[view.meId];
  if (me && view.gamePhase === 'bidding' && !me.anim && me.pose.flip < 0.01 && view.myDiceRound === view.roundNo && me.diceRound !== view.roundNo && view.myDice) {
    placeDice(me, view.myDice, view.roundNo); me.diceRound = view.roundNo;
  }
  const phaseKey = `${view.roundNo}|${view.gamePhase}`;
  if (relaid || !prev || (prev.phaseKey !== phaseKey && !view.expectAnim)) snapToState(view);
  view.phaseKey = phaseKey;
  // Tischmitte
  if (hudBadges && view.gamePhase === 'bidding') {
    setCenter(null); // Gebot/Runde zeigt das HTML-HUD (schwebende Badge)
  } else if (view.gamePhase === 'bidding' && view.bid) {
    const b = view.players.find((p) => p.id === view.bid.id);
    setCenter({ top: `Gebot von ${b ? b.name : '?'}`, qty: view.bid.qty, face: view.bid.face });
  } else if (view.gamePhase === 'bidding') {
    setCenter({ top: `Runde ${view.roundNo}`, big: 'Neue Runde' });
  } else setCenter(null);
  // Tageszeit: mit jedem verlorenen Würfel geht die Sonne weiter unter
  if (view.startDice > 2 && view.totalDice) nightTarget = clamp((view.startDice - view.totalDice) / (view.startDice - 2), 0, 1);
  if (!view.bid) seatOrder.forEach((s) => { if (s.bubbleSticky && !s.bubble.userData.challenge) { s.bubble.visible = false; s.bubbleSticky = false; } });
}

// Zeitplan des Aufdeckens (muss zu revealTiming() in client.js passen)
function revealTiming(actual) {
  const step = Math.max(180, Math.min(380, 2600 / Math.max(1, actual)));
  const countStart = 1600;
  const countEnd = countStart + actual * step;
  return { step, countStart, countEnd, verdict: countEnd + 350, banner: countEnd + 1300 };
}
function isMatch(v, face, wild) { return v === face || (wild && v === 1 && face !== 1); }
function paintCount(opts) {
  const cv = countSprite.userData.cv; const c = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  c.clearRect(0, 0, W, H);
  c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round';
  if (opts.num !== undefined) {
    c.font = `900 190px ${SERIF}`;
    c.lineWidth = 22; c.strokeStyle = 'rgba(20,10,0,0.85)'; c.strokeText(String(opts.num), W / 2 - 50, 130);
    c.fillStyle = '#f4d58d'; c.fillText(String(opts.num), W / 2 - 50, 130);
    drawDieIcon(c, W / 2 + 60, 72, 110, opts.face);
  } else {
    c.font = `900 118px ${SERIF}`;
    c.lineWidth = 20; c.strokeStyle = 'rgba(0,0,0,0.85)'; c.strokeText(opts.big, W / 2, 96);
    c.fillStyle = opts.color; c.fillText(opts.big, W / 2, 96);
    // Unterzeile: "8 × [Würfel] liegen · Gebot 6"
    c.font = `700 40px ${FONT}`;
    const a = `${opts.actual} ×`; const b = `liegen · Gebot ${opts.qty}`;
    const wa = c.measureText(a).width, wb = c.measureText(b).width, ds = 46, gap = 12;
    const tot = wa + gap + ds + gap + wb; let x = W / 2 - tot / 2;
    c.fillStyle = 'rgba(10,20,30,0.82)'; rr(c, x - 20, 176, tot + 40, 70, 35); c.fill();
    c.fillStyle = '#fff4dc'; c.textAlign = 'left';
    c.fillText(a, x, 212); x += wa + gap;
    drawDieIcon(c, x, 212 - ds / 2, ds, opts.face); x += ds + gap;
    c.fillText(b, x, 212);
  }
  countSprite.material.map.needsUpdate = true;
  countSprite.visible = true;
  countSprite.userData.popT = performance.now();
}
function showVerdict(r) {
  const liar = r.kind !== 'spot';
  const big = liar ? (r.correct ? 'Gelogen!' : 'Stimmt!') : (r.correct ? 'Genau!' : 'Daneben!');
  const color = (liar && r.correct) || (!liar && !r.correct) ? '#ff6a55' : '#7fe39a';
  paintCount({ big, color, actual: r.actual, qty: r.bid.qty, face: r.bid.face });
}
function jumpDie(m) {
  const base = m.position.y;
  const rot0 = m.rotation.y;
  m.userData.match = true;
  addTween(320, 0, (p) => {
    m.position.y = base + Math.sin(Math.PI * p) * 0.12 + p * 0.012;
    m.rotation.y = rot0 + p * Math.PI * 0.5;
    m.scale.setScalar(1 + p * 0.14);
  });
}

export function events(list) {
  if (!lastView || !renderer) return;
  list.forEach((ev) => {
    switch (ev.t) {
      case 'roll': {
        const v = lastView;
        let i = 0;
        reveal = null; countSprite.visible = false;
        seatOrder.forEach((s) => { s.cheer = false; });
        winFocus = null;
        particles.forEach((pt) => scene.remove(pt.m)); particles = [];
        seatOrder.forEach((s) => {
          const p = v.players.find((q) => q.id === s.id);
          // Neue Partie: wer wieder mitspielt, sitzt wieder aufrecht (kein hängender Kopf mehr)
          s.out = !!(p && p.eliminated); s.expr = null; s.idle = null;
          if (!p || p.eliminated) { s.cupRoot.visible = false; clearDice(s); return; }
          s.cupRoot.visible = true;
          s.peekOn = false;
          if (s.bubble) { s.bubble.visible = false; s.bubbleSticky = false; s.bubble.userData.challenge = false; }
          const delay = i++ * 60;
          animateRoll(s, delay, () => {
            if (s.isMe) {
              if (myDiceCache.round === ev.round) { placeDice(s, myDiceCache.dice, ev.round); s.diceRound = ev.round; }
            } else { clearDice(s); s.diceRound = -2; }
            if (s.isMe) shakeT = 0.18;
          });
        });
        highlight({ bid: { face: 0 } }, false);
        break;
      }
      case 'bid': {
        const s = seats[ev.id]; if (!s) break;
        seatOrder.forEach((o) => { if (o !== s && !o.bubble.userData.challenge) { o.bubbleSticky = false; o.bubbleUntil = Math.min(o.bubbleUntil, performance.now() + 400); } });
        s.bubble.userData.challenge = false;
        if (!hudBadges) showBubble(s, { qty: ev.qty, face: ev.face }, 60000, true);
        s.nod = 1;
        // Ein, zwei andere Enten ziehen skeptisch eine Augenbraue hoch
        seatOrder.filter((o) => o !== s && !o.isMe && !o.out).forEach((o) => { if (Math.random() < 0.45) setExpr(o.id, 'skeptic', 1800 + Math.random() * 1500); });
        if (O && O.sound) { O.sound('bid', 0.4); O.sound('quack', s.isMe ? 0.35 : 0.5, duckPitch(s.id), 1); }
        break;
      }
      case 'challenge': {
        const s = seats[ev.id]; if (!s) break;
        seatOrder.forEach((o) => { if (o !== s && o.id !== ev.bidderId) { o.bubbleUntil = Math.min(o.bubbleUntil, performance.now() + 200); } });
        showBubble(s, { kind: ev.kind }, 60000, true);
        s.bubble.userData.challenge = true;
        s.slam = 1; s.flap = 1;
        shakeT = 0.25;
        lastChallenge = { caller: ev.id, bidder: ev.bidderId };
        setExpr(ev.id, 'angry', 2600);
        if (ev.bidderId) setExpr(ev.bidderId, 'skeptic', 2600);
        if (O && O.sound) { O.sound('slam', 0.9); O.sound('liar', 0.7); O.sound('quack', 0.7, duckPitch(s.id) * 0.85, 2); }
        break;
      }
      case 'reveal': {
        // Würfel aller unter die Becher legen, alle Becher umdrehen, dann passende Würfel reihum zählen
        const key = 'rv' + lastView.roundNo;
        const plan = revealTiming(ev.actual);
        const wild = lastView.reveal ? lastView.reveal.wildOnes : true;
        const t0 = performance.now();
        reveal = { t0, plan, key, ev };
        countSprite.visible = false;
        let i = 0;
        seatOrder.forEach((s) => {
          const d = ev.dice[s.id];
          if (!d) return;
          s.cupRoot.visible = true;
          placeDice(s, d, key); s.diceRound = key;
          animateReveal(s, 350 + i++ * 90);
        });
        setTimeout(() => {
          if (!reveal || reveal.t0 !== t0) return;
          const list = [];
          seatOrder.forEach((s) => s.dice.forEach((m) => {
            const ok = isMatch(m.userData.value, ev.bid.face, wild);
            m.userData.dim = !ok;
            dmat(m).forEach((mat) => { mat.color.setScalar(ok ? 1 : 0.4); mat.emissiveIntensity = 0; });
            if (ok) list.push(m);
          }));
          if (!list.length) { paintCount({ num: 0, face: ev.bid.face }); if (O && O.sound) O.sound('count', 0.6, 0); }
          list.forEach((m, k) => setTimeout(() => {
            if (!reveal || reveal.t0 !== t0) return;
            jumpDie(m);
            paintCount({ num: k + 1, face: ev.bid.face });
            if (O && O.sound) O.sound('count', 0.7, k);
          }, k * plan.step));
        }, plan.countStart);
        setTimeout(() => {
          if (!reveal || reveal.t0 !== t0) return;
          showVerdict(ev);
          if (O && O.sound) O.sound('verdict', 0.9, ev.correct);
        }, plan.verdict);
        break;
      }
      case 'loseDie': {
        setTimeout(() => {
          const s = seats[ev.id]; if (!s) return;
          // Der verlorene Würfel fliegt in hohem Bogen vom Platz weg aufs Meer hinaus
          const m = s.dice.filter((d) => d.visible).pop();
          if (m) {
            const from = m.position.clone();
            const spin = 6 + Math.random() * 4;
            addTween(1500, 0, (p) => {
              m.position.set(from.x + p * 0.5, from.y + Math.sin(Math.PI * p * 0.8) * 1.3 + p * 0.3, from.z + p * 3.2);
              m.rotation.x = p * spin; m.rotation.z = p * spin * 0.7;
              dmat(m).forEach((mm) => { mm.color.setRGB(1, 1 - p * 0.6, 1 - p * 0.6); mm.transparent = true; mm.opacity = p < 0.75 ? 1 : 1 - (p - 0.75) / 0.25; });
            }, () => { m.visible = false; });
          }
          pop('−1 🎲', s, '#ff8a7a');
          s.nod = 1;
          setExpr(ev.id, 'sad', 4200);
          if (lastChallenge) { const other = lastChallenge.caller === ev.id ? lastChallenge.bidder : lastChallenge.caller; if (other) setExpr(other, 'happy', 3800); }
          if (O && O.sound) { O.sound('lose', 0.7); O.sound('quack', 0.4, duckPitch(s.id) * 0.8, 1); }
        }, afterVerdict(800));
        break;
      }
      case 'gainDie': {
        setTimeout(() => { const s = seats[ev.id]; if (s) { pop('+1 🎲', s, '#8aff9a'); s.flap = 1; } }, afterVerdict(800));
        break;
      }
      case 'out': {
        setTimeout(() => { const s = seats[ev.id]; if (s) { pop('☠', s, '#ffffff'); s.out = true; } }, afterVerdict(2000));
        break;
      }
      case 'over': {
        setTimeout(() => {
          const s = seats[ev.id]; if (!s) return;
          s.cheer = true; goldBurst(s);
          if (!s.isMe) winFocus = { id: s.id, t0: performance.now() };
          if (O && O.sound) { O.sound('win', 1); O.sound('quack', 0.6, duckPitch(s.id) * 1.1, 3); }
        }, afterVerdict(2300));
        break;
      }
      default: break;
    }
  });
}

function smooth01(a, b, x) { const k = clamp((x - a) / (b - a), 0, 1); return k * k * (3 - 2 * k); }
const _c1 = new THREE.Color(), _c2 = new THREE.Color();
const SUN_DAY = new THREE.Color(0xffc890), SUN_DUSK = new THREE.Color(0xff6a38);
const FOG_DAY = new THREE.Color(0xf0b58a), FOG_DUSK = new THREE.Color(0xc0604a), FOG_NIGHT = new THREE.Color(0x0e1426);
const HEMI_DAY = new THREE.Color(0xffd8b0), HEMI_NIGHT = new THREE.Color(0x6a78b0);
let nightApplied = -1, nightClock = 0;
function updateNight(dt) {
  const target = nightOverride !== null ? nightOverride : nightTarget;
  const rdt = nightClock ? Math.min(2, (performance.now() - nightClock) / 1000) : 0; nightClock = performance.now();
  nightCur += (target - nightCur) * (1 - Math.exp(-rdt * 0.45));
  if (Math.abs(nightCur - nightApplied) < 0.0005) return;
  nightApplied = nightCur;
  const n = nightCur;
  const elev = lerp(0.2, -0.14, smooth01(0, 0.85, n));
  SUN_DIR.set(-0.72, elev, -0.66).normalize();
  if (sky) sky.material.uniforms.night.value = n;
  if (water) water.material.uniforms.night.value = n;
  sunLight.position.copy(SUN_DIR).multiplyScalar(30);
  sunLight.intensity = 2.6 * (1 - smooth01(0.4, 0.85, n));
  sunLight.color.copy(SUN_DAY).lerp(SUN_DUSK, smooth01(0.15, 0.7, n));
  moonLight.intensity = 0.75 * smooth01(0.55, 1, n);
  hemiLight.intensity = lerp(0.9, 0.32, smooth01(0.2, 1, n));
  hemiLight.color.copy(HEMI_DAY).lerp(HEMI_NIGHT, smooth01(0.3, 1, n));
  fillLight.intensity = lerp(0.35, 0.18, n);
  _c1.copy(FOG_DAY).lerp(FOG_DUSK, smooth01(0, 0.6, n)); _c1.lerp(FOG_NIGHT, smooth01(0.5, 1, n));
  scene.fog.color.copy(_c1);
  renderer.toneMappingExposure = lerp(1.05, 1.22, smooth01(0.4, 1, n));
  if (bloomPass) bloomPass.strength = lerp(0.32, 0.75, smooth01(0.3, 1, n));
  shipWindows.forEach((m) => { m.emissiveIntensity = 2.2 * smooth01(0.35, 0.85, n); });
}
let nightOverride = null;
let debugCam = null;
export function setDebugCam(v) { debugCam = v; }
export function stats() { return { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles }; }
export function setNight(v) { nightOverride = v === null || v === undefined ? null : clamp(v, 0, 1); }

function afterVerdict(extra) {
  if (!reveal) return extra;
  return Math.max(0, reveal.t0 + reveal.plan.verdict + extra - performance.now());
}
function duckPitch(id) { return 0.8 + ((hashStr(id) >>> 5) % 9) / 20; }

function pop(text, s, color) {
  const cv = mkCanvas(384, 128); const c = cv.getContext('2d');
  c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = `900 80px ${SERIF}`;
  c.lineWidth = 12; c.strokeStyle = 'rgba(0,0,0,0.85)'; c.strokeText(text, 192, 66); c.fillStyle = color; c.fillText(text, 192, 66);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTex(cv), transparent: true, depthTest: false, depthWrite: false }));
  sp.renderOrder = 20; sp.scale.set(0.6, 0.2, 1);
  const base = s.cupRoot.position.clone(); base.y += 0.35;
  if (s.isMe) { base.multiplyScalar(0.45); base.y = TABLE_Y + 0.22; }
  sp.position.copy(base); scene.add(sp);
  addTween(1800, 0, (p) => { sp.position.y = base.y + p * 0.5; sp.material.opacity = p < 0.7 ? 1 : 1 - (p - 0.7) / 0.3; }, () => { scene.remove(sp); sp.material.map.dispose(); sp.material.dispose(); });
}

function goldBurst(s) {
  const gold = new THREE.MeshStandardMaterial({ color: 0xf2c24a, metalness: 0.9, roughness: 0.3, emissive: 0x4a3000 });
  const geo = new THREE.CylinderGeometry(0.03, 0.03, 0.006, 12);
  const pos = s.cupRoot.position.clone();
  for (let i = 0; i < 80; i++) {
    const m = new THREE.Mesh(geo, gold);
    m.position.copy(pos); m.position.y += 0.3;
    scene.add(m);
    particles.push({ m, vx: (Math.random() - 0.5) * 2.5, vy: 2 + Math.random() * 2.5, vz: (Math.random() - 0.5) * 2.5, life: 2.6 + Math.random(), spin: Math.random() * 12 });
  }
}

// ---------------------------------------------------------------------------
// Frame
// ---------------------------------------------------------------------------
const _shoulderR = new THREE.Vector3(), _shoulderL = new THREE.Vector3();
const _rest = new THREE.Vector3(), _tmp = new THREE.Vector3(), _tmp2 = new THREE.Vector3();
const _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _e = new THREE.Euler(0, 0, 0, 'YXZ');
const _m = new THREE.Matrix4();

function tick() {
  if (!visible) return;
  const now = performance.now();
  const rawDt = lastFrame ? (now - lastFrame) / 1000 : 0.016;
  const dt = Math.min(0.05, rawDt);
  lastFrame = now;
  t += dt;
  for (let i = tweens.length - 1; i >= 0; i--) {
    const tw = tweens[i];
    if (now < tw.t0) continue;
    const p = Math.min(1, (now - tw.t0) / tw.dur);
    tw.fn(p, !tw.started); tw.started = true;
    if (p >= 1) { tweens.splice(i, 1); tw.done && tw.done(); }
  }
  if (water) water.material.uniforms.time.value = t;
  if (sky) sky.material.uniforms.time.value = t;
  // Wind: gleichmäßiges Wiegen plus langsame Böen, jedes Blatt mit eigenem Takt und leichtem Flattern
  const gust = 0.55 + 0.45 * Math.sin(t * 0.21) * Math.sin(t * 0.13 + 1.3);
  S.windUniforms.time.value = t; S.windUniforms.gust.value = gust;

  torches.forEach((tc) => { const k = 1 + Math.sin(t * 17 + tc.ph) * 0.08 + Math.sin(t * 29 + tc.ph) * 0.06; tc.flame.scale.set(1, k, 1); tc.inner.scale.set(1, k * 0.95, 1); tc.glow.material.opacity = (0.55 + Math.sin(t * 13 + tc.ph) * 0.12) * (1 + nightCur * 0.7); tc.glow.scale.setScalar((tc.baseScale || (tc.baseScale = tc.glow.scale.x)) * (1 + nightCur * 0.9)); });
  if (lanternLight) lanternLight.intensity = (2.0 + Math.sin(t * 11) * 0.15 + Math.sin(t * 23) * 0.1) * (1 + nightCur * 1.8);
  nightLights.forEach((l, k) => { l.intensity = 3.2 * smooth01(0.35, 0.9, nightCur) * (1 + Math.sin(t * 15 + k * 2) * 0.12); });
  ships.forEach((sh) => {
    sh.g.rotation.z = Math.sin(t * 0.6 + sh.bob) * 0.03;
    sh.g.rotation.x = Math.sin(t * 0.45 + sh.bob) * 0.02;
    sh.g.position.y = -0.35 + Math.sin(t * 0.8 + sh.bob) * 0.15;
    if (sh.speed) { const span = sh.path.to - sh.path.from; sh.g.position.x = sh.path.from + ((t * sh.speed + span * 0.35) % span); }
  });
  flags.forEach((f) => {
    const pos = f.mesh.geometry.attributes.position; const b = f.base;
    for (let k = 0; k < pos.count; k++) {
      const x = b[k * 3], y = b[k * 3 + 1];
      const along = f.fromPole ? x : x + 1.2;
      pos.setZ(k, Math.sin(along * 3.2 - t * 5 + f.ph) * f.amp * along * 0.8 + Math.sin(y * 4 + t * 3) * 0.02);
    }
    pos.needsUpdate = true;
  });
  if (critters.crab) { const k = Math.sin(t * 0.35); critters.crab.position.set(2.2 + k * 1.6, 0.0, -4.0 + Math.cos(t * 0.21) * 0.5); critters.crab.rotation.y = Math.PI / 2 + Math.sin(t * 9) * 0.08; }
  if (critters.parrot) { critters.parrot.rotation.y = 0.9 + Math.sin(t * 0.7) * 0.5; critters.parrot.children[1].rotation.x = Math.max(0, Math.sin(t * 2.3)) * 0.3; }
  if (critters.gulls) critters.gulls.forEach((gl) => {
    const a2 = t * gl.sp + gl.ph;
    gl.g.position.set(Math.cos(a2) * gl.r - 4, gl.h + Math.sin(t * 0.8 + gl.ph) * 0.6, Math.sin(a2) * gl.r - 14);
    gl.g.rotation.y = -a2;
    const fl = Math.sin(t * 6 + gl.ph) * 0.45;
    gl.wl.rotation.z = fl; gl.wr.rotation.z = -fl;
  });

  updateNight(dt);
  updateAtmosphere(dt);
  if (countSprite && countSprite.visible) {
    const k = 1 + 0.35 * Math.max(0, 1 - (now - (countSprite.userData.popT || 0)) / 260);
    const w = (portraitMode ? 0.95 : 0.8) * k;
    countSprite.scale.set(w, w * 288 / 512, 1);
  }

  const v = lastView;
  // Sitze / Figuren
  seatOrder.forEach((s) => {
    const P = s.pose;
    // Nachschauen (Becher leicht anheben)
    const wantPeek = s.peekOn && canPeek(s) ? 1 : 0;
    s.peek += (wantPeek - s.peek) * Math.min(1, dt * 9);
    if (!s.anim && P.flip < 0.01) { P.tilt = s.peek * PEEK_ANGLE * (s.isMe ? 1 : 0.8); applyPose(s); }
    s.hold += (s.holdTarget - s.hold) * Math.min(1, dt * 8);
    // Zug-Ring: bei Zeitlimit als ablaufender Kreis um den Becher, sonst pulsierend
    const prog = s.turn ? turnProgress(v) : null;
    if (prog !== null) {
      const rk = Math.round(prog * 90);
      if (s.ringKey !== rk) {
        s.ringKey = rk;
        s.ring.geometry.dispose();
        s.ring.geometry = new THREE.RingGeometry(0.2, 0.245, 48, 1, Math.PI / 2, Math.max(0.001, prog) * Math.PI * 2);
        s.ring.material.color.set(prog < 0.27 ? 0xff5a3a : 0xf4c95d);
      }
      s.ring.material.opacity = 0.85;
      const pl = v.players.find((q) => q.id === s.id); if (pl) updateLabel(s, pl, v);
    } else {
      if (s.ringKey !== 'full') { s.ringKey = 'full'; s.ring.geometry.dispose(); s.ring.geometry = new THREE.RingGeometry(0.2, 0.235, 48); s.ring.material.color.set(0xf4c95d); }
      s.ring.material.opacity = s.turn ? 0.45 + Math.sin(t * 5) * 0.3 : 0;
    }
    // Zuschauer: Becher der anderen durchsichtig, Würfel darunter sichtbar
    const sd = !s.isMe && spectDice && v && v.gamePhase === 'bidding' && spectDice.round === v.roundNo ? spectDice.dice[s.id] : null;
    const body = s.cup.userData.body;
    if (sd && !s.xray) { s.xray = body.material; body.material = body.material.clone(); body.material.transparent = true; body.material.opacity = 0.3; body.material.depthWrite = false; }
    else if (!sd && s.xray) { body.material.dispose(); body.material = s.xray; s.xray = null; }
    if (sd && !s.anim && P.flip < 0.01 && s.diceRound !== 'sp' + v.roundNo) { placeDice(s, sd, 'sp' + v.roundNo); s.diceRound = 'sp' + v.roundNo; }
    // Würfel beim Aufdecken leuchten lassen
    s.dice.forEach((m) => { if (m.userData.match) dmat(m).forEach((mat) => { mat.emissiveIntensity = 0.35 + Math.sin(t * 5) * 0.2; }); });
    // Sprechblasen
    if (s.bubble.visible && now > s.bubbleUntil) s.bubble.visible = false;
    // Figur
    const parts = s.parts;
    parts.g.updateMatrixWorld(true);
    // Leerlauf-Animationen (Schluck aus dem Krug, auf den Tisch trommeln, strecken, umschauen, Kopf kratzen)
    let idleK = null, idleP = 0, idleEnv = 0;
    if (!s.isMe && parts.head) {
      const canIdle = v && v.phase === 'playing' && v.gamePhase === 'bidding' && !s.out && !s.anim && s.peek < 0.05 && !s.cheer && !(s.slam > 0) && !(s.flap > 0);
      if (!s.nextIdle) s.nextIdle = now + 2500 + Math.random() * 7000;
      if (!s.idle && canIdle && now > s.nextIdle) {
        const kinds = s.turn ? ['drum', 'scratch', 'drum'] : ['sip', 'sip', 'drum', 'stretch', 'look', 'scratch'];
        const kind = kinds[Math.floor(Math.random() * kinds.length)];
        s.idle = { kind, t0: now, dur: { sip: 3600, drum: 2400, stretch: 2300, look: 3000, scratch: 2000 }[kind], dir: Math.random() < 0.5 ? -1 : 1 };
      }
      if (idleFixed) s.idle = { kind: idleFixed.kind, t0: now - idleFixed.p * 1000, dur: 1000, dir: 1 };
      if (s.idle) {
        idleP = (now - s.idle.t0) / s.idle.dur;
        if (idleP >= 1 || (!canIdle && s.idle.kind !== 'sip')) { s.idle = null; s.nextIdle = now + 4000 + Math.random() * 9000; }
        else { idleK = s.idle.kind; idleEnv = smooth01(0, 0.18, idleP) * (1 - smooth01(0.8, 1, idleP)); }
      }
    }
    const sipLift = idleK === 'sip' ? smooth01(0.2, 0.4, idleP) * (1 - smooth01(0.66, 0.84, idleP)) : 0;
    if (!s.isMe && parts.head) {
      // Kopf: schaut zum Becher beim Nachschauen, sonst zur Person am Zug / Blickrichtung
      let targetYaw = s.lookYaw || 0;
      const turnSeat = v && v.currentTurnId && seats[v.currentTurnId];
      if (seats[s.id] && (!v || !v.players.find((q) => q.id === s.id && !q.isBot)) && turnSeat && turnSeat !== s) {
        _tmp.copy(turnSeat.frame.position); parts.g.worldToLocal(_tmp);
        targetYaw = clamp(Math.atan2(-_tmp.x, -_tmp.z), -1.1, 1.1);
      } else if (v && v.players.find((q) => q.id === s.id && q.isBot) && turnSeat === s) targetYaw = Math.sin(t * 0.7 + s.idx) * 0.25;
      s.lookCur += (targetYaw - s.lookCur) * Math.min(1, dt * 4);
      s.nod = Math.max(0, s.nod - dt * 1.6);
      const nodA = Math.sin((1 - s.nod) * Math.PI * 2) * s.nod * 0.25;
      const shake = s.flap > 0 ? Math.sin(t * 30) * 0.25 * s.flap : 0;
      parts.head.rotation.set(0.1 + s.peek * 0.55 + nodA + (s.out ? 0.85 : 0) - (s.cheer ? 0.35 : 0), s.lookCur * (1 - s.peek * 0.8) + shake, s.out ? 0.2 : Math.sin(t * 0.5 + s.idx * 1.3) * 0.08);
      parts.torso.rotation.x = -(s.peek * 0.22) - (s.slam > 0 ? Math.sin(s.slam * Math.PI) * 0.18 : 0) + (s.out ? 0.35 : 0) - Math.sin(t * 1.4 + s.idx) * 0.012;
      parts.body.position.y = 0.46 + (s.cheer ? Math.abs(Math.sin(t * 7 + s.idx)) * 0.08 : 0);
      if (idleK === 'look') parts.head.rotation.y += (s.idle.dir * 0.95 - parts.head.rotation.y) * idleEnv;
      if (idleK === 'stretch') { parts.torso.rotation.x -= 0.15 * idleEnv; parts.head.rotation.x -= 0.3 * idleEnv; }
      if (idleK === 'scratch') parts.head.rotation.z += 0.12 * idleEnv;
      if (sipLift > 0) parts.head.rotation.x -= sipLift * 0.38;
      // Mimik
      const exprKind = s.out ? 'sad' : s.cheer ? 'happy' : (s.expr && now < s.expr.until ? s.expr.kind : (idleK === 'look' ? 'skeptic' : null));
      applyExpr(parts, exprKind, Math.min(1, dt * 8));
      // Blinzeln
      if (parts.lids && parts.lids.length) {
        if (!s.nextBlink) s.nextBlink = now + 1000 + Math.random() * 3000;
        const bt = (now - s.nextBlink) / 150;
        const blink = bt > 0 && bt < 1 ? Math.sin(bt * Math.PI) : 0;
        if (bt >= 1) s.nextBlink = now + 2000 + Math.random() * 3500;
        // Lider: leicht verschmitzt halb geschlossen, beim Nachschauen/Ausscheiden weiter zu
        const ek = s.expr && now < s.expr.until ? s.expr.kind : null;
        const base = s.out ? 0.8 : (s.peek > 0.3 ? 0.3 : (ek === 'angry' ? 0.26 : ek === 'sad' ? 0.34 : (s.cheer || ek === 'happy') ? 0 : sipLift > 0.5 ? 0.55 : 0.06));
        parts.lids.forEach((l) => { l.pivot.rotation.x = THREE.MathUtils.lerp(l.open, l.closed, Math.max(base, blink)); });
      }
    }
    s.flap = Math.max(0, (s.flap || 0) - dt / 1.3);
    s.slam = Math.max(0, s.slam - dt * 1.8);
    // Arme: rechte Hand am Becher (oder in Ruhe), linke Hand auf dem Tisch
    const torsoLean = s.isMe ? 0 : (parts.torso ? parts.torso.rotation.x : 0);
    const sh = parts.shoulder || { x: 0.2, y: 0.76, z: 0 };
    _shoulderR.set(sh.x, sh.y + torsoLean * 0.1, sh.z + torsoLean * 0.3);
    _shoulderL.set(-sh.x, sh.y + torsoLean * 0.1, sh.z + torsoLean * 0.3);
    if (s.isMe) { _shoulderR.set(0.42, 0.92, 0.0); _shoulderL.set(-0.36, 0.92, 0.05); }
    const edge = -(seatR - tableR);
    // rechte Hand
    _rest.set(0.2, TABLE_Y + 0.03, edge - 0.08);
    const g = gripWorld(s); _tmp.copy(g); parts.g.worldToLocal(_tmp);
    const hold = s.cupRoot.visible ? s.hold : 0;
    _tmp2.copy(_rest).lerp(_tmp, hold);
    // linke Hand (beim "Lügner!" auf den Tisch hauen)
    _rest.set(-0.2, TABLE_Y + 0.03 + (s.slam > 0 ? Math.sin(s.slam * Math.PI) * 0.25 : 0), edge - 0.1);
    // Flügelschlagen (Lügner!, Sieg) bzw. hängende Flügel (ausgeschieden)
    const flapEnv = s.cheer ? 1 : (s.flap > 0 ? Math.min(1, (1 - s.flap) * 5) * Math.min(1, s.flap * 3) : 0);
    if (!s.isMe && (flapEnv > 0 || s.out)) {
      const fr = s.cheer ? 14 : 26;
      const wy = s.out ? -0.35 : 0.2 + Math.sin(t * fr) * 0.1;
      _v1.set(0.33, wy, s.out ? 0.02 : -0.08).add(_shoulderR);
      _v2.set(-0.33, wy, s.out ? 0.02 : -0.08).add(_shoulderL);
      const k = s.out ? 1 : flapEnv;
      _tmp2.lerp(_v1, k); _rest.lerp(_v2, k);
    }
    if (s.mug) {
      const M = s.mug; M.userData.rest.set(-0.3, TABLE_Y, edge - 0.14);
      if (idleK === 'sip') {
        const reach = smooth01(0.0, 0.17, idleP) * (1 - smooth01(0.88, 1.0, idleP));
        _v1.set(-0.03, 0.9, -0.23); // vor dem Schnabel
        M.position.copy(M.userData.rest).lerp(_v1, sipLift);
        M.rotation.set(sipLift * 1.2, 0, sipLift * 0.15);
        _v2.copy(M.position).add(_v3.set(0.055, 0.045, 0.02));
        _rest.lerp(_v2, reach);
      } else { M.position.copy(M.userData.rest); M.rotation.set(0, 0, 0); }
    }
    if (idleK === 'drum') { _rest.y += Math.abs(Math.sin(t * 17)) * 0.03 * idleEnv; _rest.x += Math.sin(t * 3.5) * 0.03 * idleEnv; }
    else if (idleK === 'scratch') { _v1.set(-0.13, 1.08 + Math.sin(t * 24) * 0.012, 0.03); _rest.lerp(_v1, idleEnv); }
    else if (idleK === 'stretch') {
      _v1.set(0.3, 0.36, 0.1).add(_shoulderR); _v2.set(-0.3, 0.36, 0.1).add(_shoulderL);
      _tmp2.lerp(_v1, idleEnv * (1 - hold)); _rest.lerp(_v2, idleEnv);
    }
    solveArm(parts.arms[0], _shoulderR, _tmp2);
    solveArm(parts.arms[1], _shoulderL, _rest);
    if (s.mug) s.mug.visible = !s.out || idleK === 'sip';
    parts.arms.forEach((a) => { const vis = !(s.isMe && s.out); a.fore.visible = a.cuff.visible = a.hand.visible = vis; a.upper.visible = vis && !s.isMe; });
  });

  // Kamera: Ich-Perspektive am eigenen Platz
  const me = v && seats[v.meId];
  if (me) {
    const wantLean = myPeek && canPeek(me) ? 1 : 0;
    peekBlend += (wantLean - peekBlend) * Math.min(1, dt * 6);
    // Automatisch sanft zur Person drehen, die gerade dran ist (außer man schaut sich selbst um)
    if (now - lastManualLook > 5000 && peekBlend < 0.05 && !spectId) {
      let ay = 0;
      const ts = v.gamePhase === 'bidding' && v.currentTurnId && v.currentTurnId !== v.meId ? seats[v.currentTurnId] : null;
      if (ts) { _v3.copy(ts.frame.position); me.frame.worldToLocal(_v3); ay = clamp(Math.atan2(-_v3.x, -_v3.z) * 0.55, -0.85, 0.85); }
      yaw += (ay - yaw) * Math.min(1, dt * 1.1);
      pitch += (basePitch - pitch) * Math.min(1, dt * 1.1);
    }
    const eye = portraitMode ? _tmp.set(0, 1.78, 0.02) : _tmp.set(0, 1.42, 0.3);
    me.frame.localToWorld(eye);
    _e.set(pitch, me.rot + yaw, 0, 'YXZ');
    _q1.setFromEuler(_e);
    if (peekBlend > 0.001) {
      const lean = _tmp2.set(-0.1, 1.08, -0.1); me.frame.localToWorld(lean);
      eye.lerp(lean, peekBlend);
      const cupC = me.cupRoot.position.clone(); cupC.y += 0.02;
      cupC.addScaledVector(me.dir, 0.02);
      _m.lookAt(eye, cupC, _up);
      _q2.setFromRotationMatrix(_m);
      _q1.slerp(_q2, peekBlend);
    }
    // Intro: von hoch über der Insel in einem Bogen hinunter auf den eigenen Platz
    if (introStart) {
      const p = introFixed !== null ? introFixed : (now - introStart) / INTRO_MS;
      if (p >= 1 || p < 0) introStart = 0;
      else {
        const k = smooth01(0, 1, p);
        const ae = Math.atan2(eye.x, eye.z), re = Math.hypot(eye.x, eye.z);
        // Spirale von hoch über der Tischmitte (über den Palmenkronen) hinunter auf den eigenen Platz
        const a = ae + 2.6 * (1 - k), r = lerp(1.1, re, smooth01(0.3, 1, k)), hgt = lerp(11, eye.y, 1 - Math.pow(1 - k, 1.6));
        _v1.set(Math.sin(a) * r, hgt, Math.cos(a) * r);
        _v2.set(0, TABLE_Y + 0.15, 0);
        _m.lookAt(_v1, _v2, _up); _q2.setFromRotationMatrix(_m);
        _q2.slerp(_q1, smooth01(0.6, 1, p));
        eye.copy(_v1); _q1.copy(_q2);
      }
    }
    // Spielende: Kamera fährt vor die jubelnde Siegerente (bis man selbst die Ansicht verändert)
    if (winFocus && !winFocus.released && v.phase === 'gameover' && seats[winFocus.id]) {
      const ws = seats[winFocus.id];
      const k = smooth01(0, 1, (now - winFocus.t0) / 2000);
      const orbit = Math.sin((now - winFocus.t0) / 3000) * 0.18;
      _v1.set(0.5 + orbit, 1.62, -1.45); ws.frame.localToWorld(_v1);
      _v2.set(-0.42, 0.98, 0); ws.frame.localToWorld(_v2);
      ws.bubble.visible = false;
      if (countSprite && k > 0.05) countSprite.visible = false; // Zählanzeige würde sonst vor der Ente hängen
      _m.lookAt(_v1, _v2, _up); _q2.setFromRotationMatrix(_m);
      eye.lerp(_v1, k); _q1.slerp(_q2, k);
    } else if (winFocus && v.phase !== 'gameover') winFocus = null;
    spectCam(eye, dt, v);
    camera.position.copy(eye);
    if (shakeT > 0) { shakeT = Math.max(0, shakeT - dt); camera.position.y += Math.sin(t * 90) * shakeT * 0.02; }
    camera.quaternion.copy(_q1);
    if (debugCam) { camera.position.set(...debugCam.pos); camera.lookAt(...debugCam.look); }
    // Blickrichtung ab und zu an den Server (die anderen sehen, wohin man schaut)
    if (O && O.onLook && now - lookSent > 400 && Math.abs(yaw - lookLast) > 0.06) { lookSent = now; lookLast = yaw; O.onLook(yaw); }
  } else if (v) {
    // Zuschauer ohne eigenen Platz (während der Partie dazugekommen): langsamer Rundblick
    const a = t * 0.05;
    const eye = _tmp.set(Math.sin(a) * (seatR + 0.95), 1.95, Math.cos(a) * (seatR + 0.95));
    _m.lookAt(eye, _v3.set(0, TABLE_Y, 0), _up); _q1.setFromRotationMatrix(_m);
    spectCam(eye, dt, v);
    camera.position.copy(eye); camera.quaternion.copy(_q1);
    if (debugCam) { camera.position.set(...debugCam.pos); camera.lookAt(...debugCam.look); }
  } else {
    camera.position.set(0, 3.2, 4.2);
    camera.lookAt(0, TABLE_Y, 0);
  }

  // Goldregen
  for (let i = particles.length - 1; i >= 0; i--) {
    const pt = particles[i];
    pt.life -= dt; pt.vy -= 6 * dt;
    pt.m.position.x += pt.vx * dt; pt.m.position.y = Math.max(0.01, pt.m.position.y + pt.vy * dt); pt.m.position.z += pt.vz * dt;
    if (pt.m.position.y <= 0.011) { pt.vx *= 0.9; pt.vz *= 0.9; pt.vy = 0; } else { pt.m.rotation.x += pt.spin * dt; pt.m.rotation.z += pt.spin * dt; }
    if (pt.life <= 0) { scene.remove(pt.m); particles.splice(i, 1); }
  }
  if (gradePass) gradePass.uniforms.night.value = nightCur;
  // Zu langsam? Dann die teure Umgebungsverdeckung abschalten (einmalig, nach ein paar Sekunden Messung)
  // Zu langsam? Stufenweise sparen: erst die Umgebungsverdeckung, dann die ganze Nachbearbeitung abschalten
  if (qualityPref === 'auto' && (composer || qFlags.shadows)) {
    if (!perfSamples.length) perfSamples.t0 = now;
    perfSamples.push(rawDt);
    const wall = now - perfSamples.t0;
    if (perfSamples.length >= 90 || (perfSamples.length >= 3 && wall > 4000)) {
      const sorted = perfSamples.slice().sort((a, b) => a - b);
      const med = sorted[Math.floor(sorted.length / 2)];
      perfSamples = [];
      if (med > 1 / 38) {
        // stufenweise: Umgebungsverdeckung -> Nachbearbeitung -> Schatten, Partikel und Auflösung
        if (aoPass && aoPass.enabled) { aoPass.enabled = false; qualityLevel = 'medium'; }
        else if (composer) { disposeComposer(); qualityLevel = 'medium'; }
        else applyQuality(QUALITY.low);
      }
    }
  }
  if (composer) composer.render(); else renderer.render(scene, camera);
}

export function dispose() {
  if (renderer) { renderer.setAnimationLoop(null); renderer.dispose(); }
  if (ro) ro.disconnect();
  if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
}

// Nur für Tests: Meshes pro Oberobjekt zählen
export function debugCounts() {
  const out = {};
  scene.children.forEach((c, i) => {
    let n = 0; c.traverse((o) => { if ((o.isMesh || o.isSprite) && o.visible) n++; });
    const k = (c.type || 'x') + (c.userData.dynamic ? '*' : '');
    out[k] = (out[k] || 0) + n;
  });
  const seat = Object.values(seats)[1];
  let sn = 0; if (seat) seat.frame.traverse((o) => { if (o.isMesh) sn++; });
  out.perSeatFrame = sn;
  return out;
}

// Nur für Tests: Enten-Galerie am Strand (hinter dem eigenen Platz), zum Begutachten der Modelle
export function debugGallery(ids, lid) {
  const out = [];
  ids.forEach((x, i) => {
    const [id, av] = Array.isArray(x) ? x : [x, null];
    const parts = buildCharacter(id, false, av);
    const g = parts.g;
    g.position.set((i - (ids.length - 1) / 2) * 0.62, 0, 3.6);
    g.rotation.y = Math.PI; // Blick zur Kamera (+z)
    scene.add(g);
    if (parts.lids && lid !== undefined) parts.lids.forEach((l) => { l.pivot.rotation.x = THREE.MathUtils.lerp(l.open, l.closed, lid); });
    // Flügel in Ruhe: seitlich am Körper
    const sh = parts.shoulder;
    parts.arms.forEach((a) => {
      const s0 = new THREE.Vector3(a.side * sh.x, sh.y, sh.z);
      solveArm(a, s0, new THREE.Vector3(a.side * 0.26, 0.55, -0.12));
    });
    galleryParts.push(parts);
    out.push([g.position.x, g.position.z]);
  });
  return out;
}
const galleryParts = [];
export function debugExpr(kinds) { galleryParts.forEach((p, i) => applyExpr(p, kinds[i % kinds.length], 1)); }


// ---------------------------------------------------------------------------
// Vorschau für den Charakter-Editor in der Lobby (eigener kleiner Renderer)
// ---------------------------------------------------------------------------
let pv = null;
export function initPreview(host) {
  if (pv) { if (pv.canvas.parentNode !== host) host.appendChild(pv.canvas); return; }
  const canvas = document.createElement('canvas');
  canvas.className = 'preview-canvas';
  host.appendChild(canvas);
  const r = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.1;
  r.shadowMap.enabled = true;
  const sc = new THREE.Scene();
  sc.add(new THREE.HemisphereLight(0xffe8d0, 0x4a3a30, 1.1));
  const key = new THREE.DirectionalLight(0xffd8b0, 2.4); key.position.set(-2, 4, -3); key.castShadow = true; sc.add(key);
  const rim = new THREE.DirectionalLight(0x9fc4ff, 1.2); rim.position.set(3, 2, 3); sc.add(rim);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(0.7, 40), new THREE.MeshStandardMaterial({ color: 0xd9bf8a, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; sc.add(ground);
  const cam = new THREE.PerspectiveCamera(32, 1, 0.05, 20);
  cam.position.set(0, 1.04, -1.8); cam.lookAt(0, 0.82, 0);
  const holder = new THREE.Group(); sc.add(holder);
  pv = { canvas, r, sc, cam, holder, spin: 0, drag: null, avKey: '' };
  canvas.addEventListener('pointerdown', (e) => { pv.drag = { x: e.clientX, spin: pv.spin }; try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* egal */ } });
  canvas.addEventListener('pointermove', (e) => { if (pv.drag) pv.spin = pv.drag.spin + (e.clientX - pv.drag.x) * 0.012; });
  canvas.addEventListener('pointerup', () => { pv.drag = null; pv.idleFrom = performance.now(); });
  let last = performance.now();
  r.setAnimationLoop(() => {
    if (!canvas.isConnected || canvas.offsetParent === null) return;
    const w = canvas.clientWidth, hh = canvas.clientHeight;
    if (w && hh && (canvas.width !== Math.round(w * r.getPixelRatio()) || canvas.height !== Math.round(hh * r.getPixelRatio()))) { r.setSize(w, hh, false); cam.aspect = w / hh; cam.updateProjectionMatrix(); }
    const now = performance.now(); const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (!pv.drag && (!pv.idleFrom || now - pv.idleFrom > 2500)) pv.spin += dt * 0.5;
    holder.rotation.y = pv.spin;
    if (pv.parts) {
      const bt = ((now / 1000) % 3.7);
      const blink = bt < 0.15 ? Math.sin((bt / 0.15) * Math.PI) : 0;
      (pv.parts.lids || []).forEach((l) => { l.pivot.rotation.x = THREE.MathUtils.lerp(l.open, l.closed, Math.max(0.06, blink)); });
      if (pv.parts.head) pv.parts.head.rotation.set(0.05, Math.sin(now / 1400) * 0.25, Math.sin(now / 2100) * 0.05);
    }
    r.render(sc, cam);
  });
}
export function setPreviewAvatar(av) {
  if (!pv) return;
  const key = JSON.stringify(av);
  if (key === pv.avKey) return;
  pv.avKey = key;
  while (pv.holder.children.length) pv.holder.remove(pv.holder.children[0]);
  const parts = buildDuck('preview', false, duckHelpers, av);
  const sh = parts.shoulder;
  parts.arms.forEach((a) => solveArm(a, new THREE.Vector3(a.side * sh.x, sh.y, sh.z), new THREE.Vector3(a.side * 0.2, 0.62, -0.22)));
  parts.g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  pv.holder.add(parts.g);
  pv.parts = parts;
}


// ---------------------------------------------------------------------------
// Schnittstelle zum HTML-HUD: Gebots-Badge statt Tischmitte/Sprechblase,
// Bildschirmposition einer Ente (über dem Kopf), damit die Badge dort schweben kann.
// ---------------------------------------------------------------------------
let hudBadges = false;
export function setHudOptions(o) { hudBadges = !!(o && o.bidBadges); centerKey = '__'; if (lastView) update(Object.assign({}, lastView, { expectAnim: false })); }
const _proj = new THREE.Vector3();
export function screenPos(id) {
  const s = seats[id];
  if (!s || s.isMe || !camera || !canvas) return null;
  s.label.getWorldPosition(_proj);
  _proj.y += 0.03;
  _proj.project(camera);
  if (_proj.z > 1) return null;
  return { x: ((_proj.x + 1) / 2) * canvas.clientWidth, y: ((1 - _proj.y) / 2) * canvas.clientHeight };
}

// Nur für Tests: Zustand der Nachbearbeitung abfragen/abschalten
export function debugPerf(o) {
  if (o && o.noComposer) composer = null;
  if (o && o.noAo && aoPass) aoPass.enabled = false;
  if (o && o.hide) scene.traverse((x) => { if (x.userData && x.userData.tag === o.hide) x.visible = false; });
  return { composer: !!composer, ao: !!(aoPass && aoPass.enabled), calls: renderer.info.render.calls };
}
export function debugGroups() {
  const out = [];
  scene.children.forEach((c, i) => {
    let n = 0; const mats = new Set(); c.traverse((o) => { if (o.isMesh && o.visible) { n++; mats.add(o.material.type + ':' + (o.material.color ? o.material.color.getHexString() : '')); } });
    if (n > 3) out.push([i, c.type + (c.userData.dynamic ? '*' : ''), n, [...mats].slice(0, 4).join(' ')]);
  });
  return out.sort((a, b) => b[2] - a[2]).slice(0, 15);
}
