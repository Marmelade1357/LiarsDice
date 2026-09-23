// 3D-Szene für "Liar's Dice" (Three.js) - Ich-Perspektive auf einer einsamen Pirateninsel.
// Reine Darstellung: Regeln und Zustand kommen vom Server. client.js ruft update(view)
// bei jeder Zustandsänderung, events(list) für neue Ereignisse (Würfeln, Gebote, Aufdecken)
// und setPeek()/setLook() für Live-Gesten der anderen.
// Build: npm run build3d  ->  public/table3d.js (gebündelt, minifiziert)

import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const FONT = '"Segoe UI", system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif';
const SERIF = 'Georgia, "Times New Roman", serif';
const TABLE_Y = 0.78;          // Höhe der Tischplatte
const CUP_H = 0.27;            // Becherhöhe
const CUP_RM = 0.155;          // Radius an der Öffnung
const CUP_RB = 0.128;          // Radius am Boden
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
function scaleSprites(st) {
  st.label.scale.set(0.5 * labelScale, (0.5 * labelScale * 96) / 512, 1);
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
  const cv = mkCanvas(512, 512); const c = cv.getContext('2d');
  c.fillStyle = '#d9bf8a'; c.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 26000; i++) {
    const v = Math.random();
    c.fillStyle = v < 0.5 ? `rgba(255,240,200,${Math.random() * 0.25})` : `rgba(120,90,50,${Math.random() * 0.18})`;
    c.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
  }
  for (let i = 0; i < 30; i++) {
    c.strokeStyle = 'rgba(150,115,70,0.12)'; c.lineWidth = 3;
    const y = Math.random() * 512;
    c.beginPath(); c.moveTo(0, y); c.bezierCurveTo(170, y + 20, 340, y - 20, 512, y + 5); c.stroke();
  }
  const tx = canvasTex(cv); tx.wrapS = tx.wrapT = THREE.RepeatWrapping; tx.repeat.set(10, 10);
  return tx;
}
function leatherTexture() {
  const cv = mkCanvas(256, 256); const c = cv.getContext('2d');
  c.fillStyle = '#4a2c17'; c.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 5000; i++) { c.fillStyle = `rgba(0,0,0,${Math.random() * 0.2})`; c.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); }
  for (let i = 0; i < 1600; i++) { c.fillStyle = `rgba(160,110,60,${Math.random() * 0.12})`; c.fillRect(Math.random() * 256, Math.random() * 256, 3, 1); }
  // Nähte
  c.strokeStyle = 'rgba(230,200,140,0.7)'; c.lineWidth = 2; c.setLineDash([6, 6]);
  [30, 226].forEach((y) => { c.beginPath(); c.moveTo(0, y); c.lineTo(256, y); c.stroke(); });
  c.beginPath(); c.moveTo(128, 30); c.lineTo(128, 226); c.stroke();
  const tx = canvasTex(cv); tx.wrapS = THREE.RepeatWrapping; tx.repeat.set(2, 1);
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
    uniforms: { sunDir: { value: SUN_DIR }, moonDir: { value: MOON_DIR }, night: { value: 0 } },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `
      uniform vec3 sunDir; uniform vec3 moonDir; uniform float night; varying vec3 vDir;
      float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719))) * 43758.5453); }
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
        // ein paar Schleierwolken
        float cl = sin(d.x*9.0 + d.z*3.0) * sin(d.z*7.0 - d.x*2.0) * 0.5 + 0.5;
        cl *= smoothstep(0.03, 0.12, y) * (1.0 - smoothstep(0.25, 0.45, y));
        col = mix(col, mix(vec3(1.0,0.78,0.62), vec3(0.12,0.13,0.2), n2), cl * 0.28);
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
      void main(){
        float n1 = smoothstep(0.0, 0.6, night), n2 = smoothstep(0.5, 1.0, night);
        vec3 dx = dFdx(vPos); vec3 dy = dFdy(vPos);
        vec3 n = normalize(cross(dx, dy)); if (n.y < 0.0) n = -n;
        vec3 v = normalize(cameraPosition - vPos);
        float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        float d = length(vPos.xz);
        vec3 deep = mix(vec3(0.03,0.16,0.28), vec3(0.01,0.035,0.08), n2);
        vec3 shallow = mix(vec3(0.12,0.62,0.62), vec3(0.03,0.13,0.18), n2);
        vec3 col = mix(shallow, deep, smoothstep(11.5, 26.0, d));
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
        float shore = 1.0 - smoothstep(0.0, 1.4, abs(d - 11.3 - sin(time*0.8 + atan(vPos.z, vPos.x)*7.0)*0.25));
        float foam = shore * (0.55 + 0.45*sin(d*6.0 - time*2.5));
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

function buildIsland() {
  const sand = std(0xffffff, 1, { map: sandTexture() });
  const geo = new THREE.SphereGeometry(1, 96, 32, 0, Math.PI * 2, 0, Math.PI / 2);
  // leichte Dünen
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const k = 1 + (Math.sin(x * 13) * Math.cos(z * 11) * 0.02 + Math.sin(x * 29 + z * 17) * 0.008) * (1 - y);
    pos.setXYZ(i, x * k, y, z * k);
  }
  geo.computeVertexNormals();
  const island = mesh(geo, sand, false, true);
  island.scale.set(14, 1.5, 14);
  island.position.y = -1.5;
  scene.add(island);
  // flacher Sandbereich unter dem Tisch, damit alles eben steht
  const flat = mesh(new THREE.CircleGeometry(4.2, 48), sand, false, true);
  flat.rotation.x = -Math.PI / 2; flat.position.y = 0.002; scene.add(flat);

  // Felsen am Strand
  const rockMat = std(0x6f6a62, 0.95, { flatShading: true });
  for (let i = 0; i < 9; i++) {
    const a = i * 0.9 + 0.4; const r = 9.8 + (i % 3) * 0.9;
    const rock = mesh(new THREE.DodecahedronGeometry(0.4 + (i % 4) * 0.25, 0), rockMat);
    rock.position.set(Math.cos(a) * r, -0.35 - (r - 9.8) * 0.12, Math.sin(a) * r);
    rock.rotation.set(i, i * 2, i * 3); rock.scale.y = 0.7;
    scene.add(rock);
  }
}

function buildPalm(x, z, height, leanX, leanZ, seed) {
  const g = new THREE.Group();
  const bark = std(0xffffff, 0.95, { map: barkTexture() });
  const segs = 11;
  const pts = [];
  for (let i = 0; i <= segs; i++) {
    const k = i / segs;
    pts.push(new THREE.Vector3(leanX * k * k * height * 0.45, k * height, leanZ * k * k * height * 0.45));
  }
  for (let i = 0; i < segs; i++) {
    const a = pts[i], b = pts[i + 1];
    const len = a.distanceTo(b);
    const r0 = 0.2 - (i / segs) * 0.08; const r1 = 0.2 - ((i + 1) / segs) * 0.08;
    const cyl = mesh(new THREE.CylinderGeometry(r1 * 0.92, r0, len * 1.04, 10), bark);
    cyl.position.copy(a).add(b).multiplyScalar(0.5);
    cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    g.add(cyl);
  }
  const top = pts[segs];
  const crown = new THREE.Group(); crown.position.copy(top); g.add(crown);
  const leafTex = frondTexture();
  const n = 9;
  for (let i = 0; i < n; i++) {
    const L = 2.4 + ((seed + i) % 3) * 0.35, W = 0.62;
    const geo = new THREE.PlaneGeometry(1, 1, 14, 1);
    const p = geo.attributes.position;
    for (let k = 0; k < p.count; k++) {
      const u = p.getX(k) + 0.5; const v = p.getY(k);
      const taper = Math.sin(Math.PI * Math.min(1, u * 1.05)) * 0.85 + 0.15;
      p.setXYZ(k, u * L, 0.55 * u * L - 0.42 * u * u * L * L * 0.55, v * W * taper);
    }
    geo.computeVertexNormals();
    const tint = new THREE.Color().setHSL(0.26 + ((seed * 7 + i) % 5) * 0.012, 0.55, 0.36);
    const leaf = mesh(geo, new THREE.MeshStandardMaterial({ map: leafTex, color: tint, alphaTest: 0.45, side: THREE.DoubleSide, roughness: 0.8 }), true, false);
    const holder = new THREE.Group();
    holder.rotation.y = (i / n) * Math.PI * 2 + seed;
    holder.rotation.z = -0.1 + (i % 2) * 0.12;
    holder.add(leaf);
    crown.add(holder);
    holder.userData.dynamic = true;
    fronds.push({ obj: holder, base: holder.rotation.z, ph: i * 0.7 + seed });
  }
  const nut = std(0x4a2e14, 0.7);
  for (let i = 0; i < 4; i++) {
    const c = mesh(new THREE.SphereGeometry(0.1, 10, 8), nut);
    c.position.set(Math.cos(i * 1.6) * 0.14, -0.12, Math.sin(i * 1.6) * 0.14);
    crown.add(c);
  }
  g.position.set(x, 0, z);
  scene.add(g);
  return g;
}

// Schiffe: schwarzes Geisterschiff (ankert), ein vorbeisegelndes Piratenschiff, eine Brigantine
function makeShip(o) {
  const g = new THREE.Group();
  const hullMat = std(o.hull, 0.8);
  const hull = mesh(new THREE.BoxGeometry(14, 3, 3.6), hullMat, false, false);
  const hp = hull.geometry.attributes.position;
  for (let i = 0; i < hp.count; i++) {
    const x = hp.getX(i), y = hp.getY(i), z = hp.getZ(i);
    const bowTaper = x > 3 ? 1 - (x - 3) / 5.5 : 1;
    const keel = y < 0 ? 0.55 : 1;
    hp.setXYZ(i, x, y + (Math.abs(x) > 5 ? 0.9 : 0), z * Math.max(0.1, bowTaper) * keel);
  }
  hull.geometry.computeVertexNormals();
  g.add(hull);
  if (o.stripe) { const st = mesh(new THREE.BoxGeometry(11, 0.35, 3.45), std(o.stripe, 0.7), false, false); st.position.set(-0.8, 0.9, 0); g.add(st); }
  const sailMat = new THREE.MeshStandardMaterial({ color: o.sail, roughness: 1, side: THREE.DoubleSide });
  const masts = o.masts || [-4.5, 0, 4.2];
  masts.forEach((mx, i) => {
    const h = i === 1 || masts.length === 1 ? 15 : 12.5;
    const mast = mesh(new THREE.CylinderGeometry(0.16, 0.22, h, 6), std(0x2a1d12, 0.8), false, false);
    mast.position.set(mx, h / 2 + 1.2, 0); g.add(mast);
    for (let s2 = 0; s2 < 3; s2++) {
      const w = 6.2 - s2 * 1.4, hh = 3.2 - s2 * 0.5;
      const sg = new THREE.PlaneGeometry(w, hh, 6, 3);
      const sp = sg.attributes.position;
      for (let k = 0; k < sp.count; k++) {
        const px = sp.getX(k), py = sp.getY(k);
        const rag = o.ragged && py < -hh / 2 + 0.01 ? Math.sin(px * 5 + s2) * 0.3 : 0;
        sp.setXYZ(k, px, py + rag, Math.cos((px / w) * Math.PI) * (o.billow || 0.6));
      }
      const sail = mesh(sg, sailMat, false, false);
      sail.rotation.y = Math.PI / 2;
      sail.position.set(mx, 3.8 + s2 * 3.6, 0);
      g.add(sail);
    }
    if (i === Math.floor(masts.length / 2)) {
      const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.6, 8, 2), new THREE.MeshBasicMaterial({ map: jollyRogerTexture(), side: THREE.DoubleSide }));
      flag.position.set(mx - 1.2, h + 1.6, 0);
      g.add(flag);
      flags.push({ mesh: flag, base: flag.geometry.attributes.position.array.slice(), ph: mx, amp: 0.25 });
    }
  });
  g.position.set(o.x, -0.8, o.z);
  g.rotation.y = o.rot || 0;
  g.scale.setScalar(o.scale || 1);
  scene.add(g);
  g.userData.dynamic = true;
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
  const sandY = (x, z) => { const r = Math.hypot(x, z); return r < 4.2 ? 0 : -1.5 + 1.5 * Math.sqrt(Math.max(0, 1 - (r / 14) * (r / 14))); };
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

  // Ruderboot am Strand
  const boatGeo = new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
  const boat = mesh(boatGeo, std(0xffffff, 0.8, { map: canvasTex(woodCanvas(256, 128, '#6a4526', 9)), side: THREE.DoubleSide }));
  boat.scale.set(0.65, 0.4, 1.6);
  const bx = -6.2, bz = -7.0;
  boat.position.set(bx, sandY(bx, bz) + 0.3, bz); boat.rotation.set(0.08, 0.7, 0.1); scene.add(boat);
  const seat = mesh(new THREE.BoxGeometry(1.1, 0.05, 0.22), wood); seat.position.set(bx, sandY(bx, bz) + 0.22, bz); seat.rotation.y = 0.7; scene.add(seat);

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
function batchStatic(root, local) {
  root.updateMatrixWorld(true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const groups = new Map();
  (function walk(o) {
    if (o.userData.dynamic && o !== root) return;
    if (o.isMesh && !o.isInstancedMesh && o.material && !Array.isArray(o.material) && !o.material.transparent && o.geometry.attributes.uv) {
      const key = `${o.material.uuid}|${o.castShadow}|${o.receiveShadow}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(o);
    }
    o.children.slice().forEach(walk);
  })(root);
  let merged = 0;
  groups.forEach((list) => {
    if (list.length < 2) return;
    const geos = list.map((o) => {
      let g2 = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      const keep = new THREE.BufferGeometry();
      ['position', 'normal', 'uv'].forEach((a) => { if (g2.attributes[a]) keep.setAttribute(a, g2.attributes[a]); });
      keep.applyMatrix4(local ? new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld) : o.matrixWorld);
      return keep;
    });
    const geo = mergeGeometries(geos, false);
    if (!geo) return;
    const m = new THREE.Mesh(geo, list[0].material);
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
  seatR = tableR + 0.44;
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
  addHoops(leg, 0.36 + tableR * 0.14, TABLE_Y - 0.06);
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
  return cupGeo;
}
function makeCup(seed) {
  if (!cupMats) {
    const tex = leatherTexture();
    cupMats = [0x6a3d1e, 0x4a2a14, 0x5a2a1a, 0x3a2a1a].map((c) => new THREE.MeshStandardMaterial({ color: c, map: tex, roughness: 0.75, side: THREE.DoubleSide }));
  }
  const g = new THREE.Group();
  const body = mesh(cupGeometry(), cupMats[seed % cupMats.length]);
  g.add(body);
  const brass = std(0xb08a3a, 0.35, { metalness: 0.85 });
  const r1 = mesh(new THREE.TorusGeometry(CUP_RM + 0.004, 0.007, 6, 36), brass, false, false); r1.rotation.x = Math.PI / 2; r1.position.y = 0.012; g.add(r1);
  const r2 = mesh(new THREE.TorusGeometry(CUP_RB + 0.002, 0.006, 6, 36), brass, false, false); r2.rotation.x = Math.PI / 2; r2.position.y = CUP_H - 0.03; g.add(r2);
  g.userData.body = body;
  return g;
}

const dieGeo = new THREE.BoxGeometry(DIE, DIE, DIE);
// Reihenfolge der Box-Materialien: +x, -x, +y, -y, +z, -z
const FACE_ORDER = [2, 5, 1, 6, 3, 4];
function makeDie(value, yawRot) {
  const mats = FACE_ORDER.map((v) => new THREE.MeshStandardMaterial({ map: dieTexture(v), roughness: 0.45, emissive: 0xffc040, emissiveIntensity: 0 }));
  const m = mesh(dieGeo, mats);
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

function buildCharacter(id, isMe) {
  const h = hashStr(id) >>> 0;
  const g = new THREE.Group();
  const coat = std(COAT_COLORS[h % COAT_COLORS.length], 0.85);
  const pl = PLUMAGE[(h >>> 3) % PLUMAGE.length];
  const feather = std(pl[0], 0.9);
  const featherHead = std(pl[1], 0.85);
  const bill = std(BILL, 0.55);
  const dark = std(0x1a1512, 0.8);
  const lace = std(0xf1ead8, 0.9);
  const parts = { g, coat, skin: feather };

  // Hocker (kleines Fass)
  const stool = mesh(barrelGeometry(0.17, 0.2, 0.46), std(0xffffff, 0.85, { map: canvasTex(woodCanvas(128, 64, '#6a4526', 8)) }));
  stool.position.set(0, 0.23, 0.05); if (!isMe) g.add(stool); // den eigenen Hocker sieht man nie

  const body = new THREE.Group(); g.add(body); parts.body = body;
  body.position.set(0, 0.48, 0.05);
  if (!isMe) {
    // Beinchen mit Schwimmfüßen, baumeln vorn am Fass
    [-0.08, 0.08].forEach((x) => {
      const leg = mesh(new THREE.CylinderGeometry(0.016, 0.02, 0.16, 6), bill); leg.position.set(x, -0.06, -0.21); body.add(leg);
      const foot = mesh(new THREE.ConeGeometry(0.055, 0.1, 3), bill); foot.scale.set(1, 1, 0.28);
      foot.rotation.set(-Math.PI / 2, 0, 0); foot.position.set(x, -0.14, -0.25); body.add(foot);
    });
    // Körper
    const torso = new THREE.Group(); torso.position.y = 0.05; torso.scale.setScalar(1.22); body.add(torso); parts.torso = torso;
    const belly = mesh(new THREE.SphereGeometry(0.2, 20, 16), feather); belly.scale.set(1, 1.1, 1.05); belly.position.y = 0.2; torso.add(belly);
    const tail = mesh(new THREE.ConeGeometry(0.08, 0.2, 8), feather); tail.position.set(0, 0.24, 0.22); tail.rotation.x = 1.0; torso.add(tail);
    // Piratenmantel (vorne offen, man sieht den Bauch) mit Gürtel und Schnalle
    const coatMesh = mesh(new THREE.CylinderGeometry(0.19, 0.225, 0.34, 20, 1, true, 0.55, Math.PI * 2 - 1.1), coat);
    coatMesh.position.y = 0.2; coatMesh.rotation.y = Math.PI; torso.add(coatMesh);
    coatMesh.material = coat.clone(); coatMesh.material.side = THREE.DoubleSide;
    const lapel = mesh(new THREE.TorusGeometry(0.13, 0.025, 6, 16, Math.PI), coat); lapel.position.set(0, 0.36, -0.02); lapel.rotation.set(Math.PI / 2 + 0.3, 0, 0); torso.add(lapel);
    const belt = mesh(new THREE.TorusGeometry(0.207, 0.018, 6, 24), std(0x2a1a0e, 0.6)); belt.rotation.x = Math.PI / 2; belt.position.y = 0.12; torso.add(belt);
    const buckle = mesh(new THREE.BoxGeometry(0.06, 0.045, 0.02), std(0xd4a940, 0.3, { metalness: 0.9 })); buckle.position.set(0, 0.12, -0.215); torso.add(buckle);
    const scarf = mesh(new THREE.TorusGeometry(0.085, 0.028, 6, 14), std(BANDANA[(h >>> 20) % BANDANA.length], 0.9)); scarf.rotation.x = Math.PI / 2; scarf.position.y = 0.42; torso.add(scarf);
    // Kopf
    const head = new THREE.Group(); head.position.y = 0.55; torso.add(head); parts.head = head;
    const skull = mesh(new THREE.SphereGeometry(0.13, 18, 14), featherHead); skull.scale.set(1, 1, 1.05); head.add(skull);
    const billTop = mesh(new THREE.SphereGeometry(1, 16, 10), bill); billTop.scale.set(0.07, 0.028, 0.12); billTop.position.set(0, -0.02, -0.14); head.add(billTop);
    const billLow = mesh(new THREE.SphereGeometry(1, 14, 8), bill); billLow.scale.set(0.06, 0.02, 0.1); billLow.position.set(0, -0.045, -0.125); head.add(billLow);
    const white = std(0xffffff, 0.3); const pupil = std(0x0a0a0a, 0.2);
    const patch = (h >>> 9) % 3 === 0;
    [-0.05, 0.05].forEach((x, i) => {
      if (patch && i === 0) {
        const pt = mesh(new THREE.SphereGeometry(0.036, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), dark, false, false);
        pt.position.set(x, 0.045, -0.1); pt.rotation.set(-Math.PI / 2 + 0.2, 0, 0); head.add(pt);
        const strap = mesh(new THREE.TorusGeometry(0.133, 0.006, 4, 28), dark, false, false); strap.rotation.set(0.25, 0, 0.4); strap.position.y = 0.045; head.add(strap);
      } else {
        const e = mesh(new THREE.SphereGeometry(0.034, 12, 10), white, false, false); e.scale.set(1, 1.2, 0.7); e.position.set(x, 0.045, -0.105); head.add(e);
        const pu = mesh(new THREE.SphereGeometry(0.016, 8, 6), pupil, false, false); pu.position.set(x * 0.95, 0.045, -0.128); head.add(pu);
        e.userData.dynamic = pu.userData.dynamic = true;
        parts.eyes = (parts.eyes || []).concat([{ m: e, sy: 1.2 }, { m: pu, sy: 1 }]);
      }
    });
    // Ohrring
    const ear = mesh(new THREE.TorusGeometry(0.016, 0.004, 6, 10), std(0xd4a940, 0.3, { metalness: 0.9 }), false, false); ear.position.set(0.128, -0.03, 0); ear.rotation.y = Math.PI / 2; head.add(ear);
    // Hut: Dreispitz (mit Totenkopf) oder Kopftuch
    const hatType = (h >>> 15) % 3;
    if (hatType < 2) {
      const hatMat = std(0x1c1612, 0.85);
      const hat = new THREE.Group(); hat.position.y = 0.08; hat.rotation.x = -0.12; head.add(hat);
      const brim = mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.025, 3), hatMat); brim.position.y = 0.02; brim.rotation.y = Math.PI / 6 + Math.PI; hat.add(brim);
      for (let k = 0; k < 3; k++) {
        const ang = (k / 3) * Math.PI * 2 + Math.PI / 3;
        const flap = mesh(new THREE.BoxGeometry(0.32, 0.08, 0.015), hatMat);
        flap.position.set(Math.sin(ang) * 0.11, 0.065, Math.cos(ang) * 0.11);
        flap.rotation.y = ang; flap.rotation.x = -0.5;
        hat.add(flap);
      }
      const crown = mesh(new THREE.CylinderGeometry(0.1, 0.125, 0.11, 14), hatMat); crown.position.y = 0.08; hat.add(crown);
      const trim = mesh(new THREE.TorusGeometry(0.123, 0.006, 4, 20), std(0xc9a44a, 0.4, { metalness: 0.6 }), false, false); trim.rotation.x = Math.PI / 2; trim.position.y = 0.035; hat.add(trim);
      const emblem = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.07), new THREE.MeshBasicMaterial({ map: skullTexture(), transparent: true }));
      emblem.position.set(0, 0.075, -0.152); emblem.rotation.set(0, Math.PI, 0); hat.add(emblem);
      if (hatType === 0) {
        const plume = mesh(new THREE.ConeGeometry(0.022, 0.24, 5), std(0xc0392b, 0.9)); plume.position.set(0.1, 0.13, 0.03); plume.rotation.z = -0.8; hat.add(plume);
      }
    } else {
      const band = std(BANDANA[(h >>> 18) % BANDANA.length], 0.9);
      const cap = mesh(new THREE.SphereGeometry(0.136, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), band); cap.position.y = 0.012; cap.scale.set(1, 1.05, 1.05); head.add(cap);
      const knot = mesh(new THREE.SphereGeometry(0.032, 8, 6), band); knot.position.set(0, 0.03, 0.135); head.add(knot);
      [-0.3, 0.3].forEach((r) => { const tl = mesh(new THREE.BoxGeometry(0.035, 0.12, 0.01), band); tl.position.set(r * 0.08, -0.03, 0.145); tl.rotation.z = r; head.add(tl); });
    }
  }
  // Flügel als Arme: Mantelärmel mit Spitzenmanschette, Federspitze statt Hand
  const sleeve = coat;
  parts.arms = [1, -1].map((side) => {
    const upper = mesh(new THREE.CylinderGeometry(0.045, 0.055, 1, 8), sleeve);
    const fore = mesh(new THREE.CylinderGeometry(0.04, 0.046, 1, 8), sleeve);
    const cf = mesh(new THREE.CylinderGeometry(0.05, 0.044, 0.045, 8), lace);
    const hand = mesh(new THREE.SphereGeometry(0.05, 10, 8), feather); hand.scale.set(0.7, 1.5, 0.95);
    g.add(upper); g.add(fore); g.add(cf); g.add(hand);
    return { side, upper, fore, cuff: cf, hand, target: new THREE.Vector3(), cur: null, short: isMe };
  });
  g.userData.parts = parts;
  // Starre Teile der Figur zusammenfassen (weniger Draw-Calls): Kopf und Rumpf je für sich
  if (parts.head) {
    parts.head.userData.dynamic = true; batchStatic(parts.head, true);
    batchStatic(parts.torso, true);
    parts.torso.userData.dynamic = true; batchStatic(parts.body, true);
  }
  if (parts.eyes) parts.eyes = parts.eyes.filter((e) => e.m.parent); // Augen bleiben einzeln (Blinzeln)
  return parts;
}

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
function setLimb(m, a, b) {
  _v1.subVectors(b, a); const len = _v1.length();
  m.position.copy(a).addScaledVector(_v1, 0.5);
  m.scale.set(1, Math.max(0.001, len), 1);
  m.quaternion.setFromUnitVectors(_up, _v1.normalize());
}
// Arm vom Schulterpunkt zum Ziel (beides lokal in der Figur) mit einfacher Zweigelenk-IK.
function solveArm(arm, shoulder, target) {
  const L1 = 0.34, L2 = 0.34;
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
  setLimb(arm.upper, shoulder, elbow);
  if (arm.short) {
    // Eigene Flügel: nur Flügelspitze, Manschette und ein kurzes, schmales Stück Ärmel
    const st = elbow.clone().lerp(T, 0.62);
    setLimb(arm.fore, st, T); arm.fore.scale.x = arm.fore.scale.z = 0.72;
  } else setLimb(arm.fore, elbow, T);
  arm.cuff.position.copy(elbow).lerp(T, 0.9);
  arm.cuff.quaternion.copy(arm.fore.quaternion);
  arm.hand.position.copy(T);
  arm.hand.quaternion.copy(arm.fore.quaternion);
}

// ---------------------------------------------------------------------------
// Sprites (Namen, Sprechblasen, Tischmitte)
// ---------------------------------------------------------------------------
function makeSprite(w, h, scale) {
  const cv = mkCanvas(w, h);
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: canvasTex(cv), transparent: true, depthWrite: false, depthTest: true }));
  sp.userData.cv = cv;
  sp.scale.set(scale, (scale * h) / w, 1);
  sp.renderOrder = 5;
  return sp;
}
function paintLabel(sp, s) {
  const cv = sp.userData.cv; const c = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  c.clearRect(0, 0, W, H);
  c.font = `700 44px ${SERIF}`;
  let name = (s.out ? '☠ ' : '') + (s.host ? '👑 ' : '') + (s.bot ? '🤖 ' : '') + s.name;
  while (c.measureText(name).width > W - 70 && name.length > 3) name = name.slice(0, -2);
  const tw = Math.min(W - 16, c.measureText(name).width + 56);
  const bx = (W - tw) / 2, bh = H - 20, rad = bh / 2;
  c.fillStyle = s.turn ? 'rgba(90,62,12,0.92)' : 'rgba(14,26,38,0.8)';
  rr(c, bx, 10, tw, bh, rad); c.fill();
  if (s.turn && s.progress !== null && s.progress !== undefined) {
    // Zug-Timer: der Rahmen leert sich
    c.lineWidth = 7; c.strokeStyle = 'rgba(244,201,93,0.25)'; c.stroke();
    const per = 2 * (tw - 2 * rad) + 2 * Math.PI * rad;
    c.save(); c.setLineDash([per * s.progress, per + 10]);
    c.strokeStyle = s.progress < 0.27 ? '#ff6a4a' : '#f4c95d';
    c.beginPath();
    // Start oben in der Mitte, im Uhrzeigersinn
    c.moveTo(W / 2, 10); c.arcTo(bx + tw, 10, bx + tw, 10 + bh, rad); c.arcTo(bx + tw, 10 + bh, bx, 10 + bh, rad);
    c.arcTo(bx, 10 + bh, bx, 10, rad); c.arcTo(bx, 10, bx + tw, 10, rad); c.lineTo(W / 2, 10);
    c.stroke(); c.restore();
  } else { c.lineWidth = s.turn ? 7 : 3; c.strokeStyle = s.turn ? '#f4c95d' : 'rgba(200,160,90,0.6)'; c.stroke(); }
  c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillStyle = s.out ? '#9a9a9a' : (s.away ? '#e0a060' : '#fff4dc');
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
  const parts = buildCharacter(p.id, isMe);
  frame.add(parts.g);
  const cupRoot = new THREE.Group(); scene.add(cupRoot);
  const tiltG = new THREE.Group(); tiltG.position.set(0, 0, -CUP_RM); cupRoot.add(tiltG);
  const flipG = new THREE.Group(); tiltG.add(flipG);
  const cup = makeCup(hashStr(p.id)); flipG.add(cup);
  const diceG = new THREE.Group(); cupRoot.add(diceG);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.235, 40), new THREE.MeshBasicMaterial({ color: 0xf4c95d, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.003; cupRoot.add(ring);
  const label = makeSprite(512, 96, 0.5); label.position.set(0, 1.62, 0.05);
  const bubble = makeSprite(420, 200, 0.4); bubble.position.set(0.46, 1.45, -0.05); bubble.visible = false; bubble.renderOrder = 6;
  if (!isMe) { frame.add(label); frame.add(bubble); }
  const s = {
    id: p.id, isMe, frame, parts, cupRoot, tiltG, flipG, cup, diceG, ring, label, bubble,
    pose: { flip: 1, side: 1, lift: 0, tilt: 0, shx: 0, shy: 0, shz: 0, wob: 0 },
    hold: 0, holdTarget: 0, anim: null, peek: 0, peekOn: false, labelKey: '', out: false,
    lookYaw: 0, lookCur: 0, nod: 0, slam: 0, bubbleUntil: 0, bubbleSticky: false, dice: [], diceRound: -1,
  };
  applyPose(s);
  return s;
}

function removeSeat(s) {
  scene.remove(s.frame); scene.remove(s.cupRoot);
}

function layoutSeats(view) {
  const players = view.players; const n = players.length;
  const key = players.map((p) => p.id).join(',') + '|' + view.meId;
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
    if (s && s.isMe !== isMe) { removeSeat(s); delete seats[p.id]; s = null; }
    if (!s) { s = seats[p.id] = makeSeat(p, isMe); scaleSprites(s); }
    const a = Math.PI / 2 + (i * Math.PI * 2) / n;
    const dx = Math.cos(a), dz = Math.sin(a);
    s.dir = new THREE.Vector3(dx, 0, dz);
    s.rot = Math.atan2(dx, dz);
    s.frame.position.set(dx * seatR, 0, dz * seatR);
    s.frame.rotation.y = s.rot;
    // Becher leicht rechts vor der Person (wie Rechtshänder), damit die Tischmitte frei bleibt
    const tx = dz, tz = -dx; // Tangente = rechte Hand der Person (sie blickt zur Mitte)
    s.cupRoot.position.set(dx * (tableR - 0.26) + tx * 0.13, TABLE_Y, dz * (tableR - 0.26) + tz * 0.13);
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
    if (Array.isArray(m.material)) m.material.forEach((x) => x.dispose());
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

  const hemi = new THREE.HemisphereLight(0xffd8b0, 0x6a5040, 0.9); scene.add(hemi); hemiLight = hemi;
  sunLight = new THREE.DirectionalLight(0xffc890, 2.6);
  sunLight.position.copy(SUN_DIR).multiplyScalar(30);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(lowEnd ? 1024 : 2048, lowEnd ? 1024 : 2048);
  const sc = sunLight.shadow.camera; sc.left = -5; sc.right = 5; sc.top = 5; sc.bottom = -5; sc.near = 5; sc.far = 60;
  sunLight.shadow.bias = -0.0005; sunLight.shadow.normalBias = 0.02;
  scene.add(sunLight); scene.add(sunLight.target);
  lanternLight = new THREE.PointLight(0xffa050, 2.2, 6, 1.6);
  lanternLight.position.set(0, TABLE_Y + 0.35, 0); scene.add(lanternLight);
  const fill = new THREE.DirectionalLight(0x8fb0ff, 0.35); fill.position.set(5, 6, 8); scene.add(fill); fillLight = fill;
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
  batchStatic(scene);
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
      m.material.forEach((mat) => { mat.emissiveIntensity = 0; mat.color.setScalar(on && !match ? 0.45 : 1); });
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
    if (!s.isMe && p.peeking !== undefined) s.peekOn = !!p.peeking;
    if (!s.isMe && p.look !== undefined && !p.isBot) s.lookYaw = p.look;
  });
  if (view.myDice) myDiceCache = { round: view.myDiceRound, dice: view.myDice };
  // Eigene Würfel nachreichen, falls sie nach dem Aufknallen eintreffen
  const me = seats[view.meId];
  if (me && view.gamePhase === 'bidding' && !me.anim && me.pose.flip < 0.01 && view.myDiceRound === view.roundNo && me.diceRound !== view.roundNo && view.myDice) {
    placeDice(me, view.myDice, view.roundNo); me.diceRound = view.roundNo;
  }
  const phaseKey = `${view.roundNo}|${view.gamePhase}`;
  if (relaid || !prev || (prev.phaseKey !== phaseKey && !view.expectAnim)) snapToState(view);
  view.phaseKey = phaseKey;
  // Tischmitte
  if (view.gamePhase === 'bidding' && view.bid) {
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
        seatOrder.forEach((s) => {
          const p = v.players.find((q) => q.id === s.id);
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
        showBubble(s, { qty: ev.qty, face: ev.face }, 60000, true);
        s.nod = 1;
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
            m.material.forEach((mat) => { mat.color.setScalar(ok ? 1 : 0.4); mat.emissiveIntensity = 0; });
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
              m.material.forEach((mm) => { mm.color.setRGB(1, 1 - p * 0.6, 1 - p * 0.6); mm.transparent = true; mm.opacity = p < 0.75 ? 1 : 1 - (p - 0.75) / 0.25; });
            }, () => { m.visible = false; });
          }
          pop('−1 🎲', s, '#ff8a7a');
          s.nod = 1;
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
}
let nightOverride = null;
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
  const dt = lastFrame ? Math.min(0.05, (now - lastFrame) / 1000) : 0.016;
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
  fronds.forEach((f) => { f.obj.rotation.z = f.base + Math.sin(t * 1.3 + f.ph) * 0.05; f.obj.rotation.x = Math.sin(t * 0.9 + f.ph) * 0.03; });
  torches.forEach((tc) => { const k = 1 + Math.sin(t * 17 + tc.ph) * 0.08 + Math.sin(t * 29 + tc.ph) * 0.06; tc.flame.scale.set(1, k, 1); tc.inner.scale.set(1, k * 0.95, 1); tc.glow.material.opacity = (0.55 + Math.sin(t * 13 + tc.ph) * 0.12) * (1 + nightCur * 0.7); tc.glow.scale.setScalar((tc.baseScale || (tc.baseScale = tc.glow.scale.x)) * (1 + nightCur * 0.9)); });
  if (lanternLight) lanternLight.intensity = (2.0 + Math.sin(t * 11) * 0.15 + Math.sin(t * 23) * 0.1) * (1 + nightCur * 1.8);
  nightLights.forEach((l, k) => { l.intensity = 3.2 * smooth01(0.35, 0.9, nightCur) * (1 + Math.sin(t * 15 + k * 2) * 0.12); });
  ships.forEach((sh) => {
    sh.g.rotation.z = Math.sin(t * 0.6 + sh.bob) * 0.03;
    sh.g.rotation.x = Math.sin(t * 0.45 + sh.bob) * 0.02;
    sh.g.position.y = -0.8 + Math.sin(t * 0.8 + sh.bob) * 0.15;
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
    // Würfel beim Aufdecken leuchten lassen
    s.dice.forEach((m) => { if (m.userData.match) m.material.forEach((mat) => { mat.emissiveIntensity = 0.35 + Math.sin(t * 5) * 0.2; }); });
    // Sprechblasen
    if (s.bubble.visible && now > s.bubbleUntil) s.bubble.visible = false;
    // Figur
    const parts = s.parts;
    parts.g.updateMatrixWorld(true);
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
      parts.body.position.y = 0.48 + (s.cheer ? Math.abs(Math.sin(t * 7 + s.idx)) * 0.08 : 0);
      // Blinzeln
      if (parts.eyes) {
        if (!s.nextBlink) s.nextBlink = now + 1000 + Math.random() * 3000;
        const closed = now > s.nextBlink && now < s.nextBlink + 130;
        if (now > s.nextBlink + 130) s.nextBlink = now + 2000 + Math.random() * 3500;
        parts.eyes.forEach((e) => { e.m.scale.y = closed || s.out ? e.sy * 0.12 : e.sy; });
      }
    }
    s.flap = Math.max(0, (s.flap || 0) - dt / 1.3);
    s.slam = Math.max(0, s.slam - dt * 1.8);
    // Arme: rechte Hand am Becher (oder in Ruhe), linke Hand auf dem Tisch
    const torsoLean = s.isMe ? 0 : (parts.torso ? parts.torso.rotation.x : 0);
    _shoulderR.set(0.23, 0.48 + 0.05 + 0.41 + torsoLean * 0.1, 0.03 + torsoLean * 0.4);
    _shoulderL.set(-0.23, 0.48 + 0.05 + 0.41 + torsoLean * 0.1, 0.03 + torsoLean * 0.4);
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
    solveArm(parts.arms[0], _shoulderR, _tmp2);
    solveArm(parts.arms[1], _shoulderL, _rest);
    parts.arms.forEach((a) => { const vis = !(s.isMe && s.out); a.fore.visible = a.cuff.visible = a.hand.visible = vis; a.upper.visible = vis && !s.isMe; });
  });

  // Kamera: Ich-Perspektive am eigenen Platz
  const me = v && seats[v.meId];
  if (me) {
    const wantLean = myPeek && canPeek(me) ? 1 : 0;
    peekBlend += (wantLean - peekBlend) * Math.min(1, dt * 6);
    // Automatisch sanft zur Person drehen, die gerade dran ist (außer man schaut sich selbst um)
    if (now - lastManualLook > 5000 && peekBlend < 0.05) {
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
    camera.position.copy(eye);
    if (shakeT > 0) { shakeT = Math.max(0, shakeT - dt); camera.position.y += Math.sin(t * 90) * shakeT * 0.02; }
    camera.quaternion.copy(_q1);
    // Blickrichtung ab und zu an den Server (die anderen sehen, wohin man schaut)
    if (O && O.onLook && now - lookSent > 400 && Math.abs(yaw - lookLast) > 0.06) { lookSent = now; lookLast = yaw; O.onLook(yaw); }
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
  renderer.render(scene, camera);
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
