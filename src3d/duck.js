// Piraten-Enten (prozedural, stilisiert im Cartoon-Look).
// Aufbau: g (Figur am Sitzplatz, -z zeigt zur Tischmitte)
//   └ body (Sitzhöhe)  └ torso (neigbar)  └ head (drehbar)
// Flügel (arms) hängen direkt an g und werden jedes Frame per IK zum Becher geführt.

import * as THREE from 'three';

// Gefieder-Paletten: [Körper, Kopf, Bauch]
const PLUMAGE = [
  [0xf5f1e6, 0xf5f1e6, 0xffffff],   // weiß
  [0xf3c93a, 0xf3c93a, 0xfbe38a],   // gelb
  [0x8b6a47, 0x2f6e3e, 0xc9b28c],   // Stockente
  [0x9c9ca4, 0x8a8a93, 0xd2d2d8],   // grau
  [0x6e4a2e, 0x6e4a2e, 0xb08a62],   // braun
  [0xe9e0c8, 0xc79a5c, 0xf6f0e0],   // beige
  [0x3b3b40, 0x3b3b40, 0x6b6b72],   // schwarz
  [0xd9a36a, 0xd9a36a, 0xf0d2a8],   // ocker
];
const COATS = [0x7a1e22, 0x1e3a66, 0x2c5a30, 0x5a3a20, 0x4c2a5e, 0x6a5a1c, 0x1c5a5a, 0x2e2e34];
const SCARVES = [0xb3202a, 0x1f4aa0, 0xe0a020, 0x8a2a8a, 0x2a8a5a];
const BILL = 0xf2922a;

function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

function feathers(color, sheen) {
  return new THREE.MeshPhysicalMaterial({ color, roughness: 0.78, sheen: 0.6, sheenRoughness: 0.6, sheenColor: new THREE.Color(sheen || 0xffffff) });
}
function cloth(color) {
  return new THREE.MeshPhysicalMaterial({ color, roughness: 0.85, sheen: 0.8, sheenRoughness: 0.5, sheenColor: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.35) });
}
function mk(geo, mat, cast = true, recv = true) { const m = new THREE.Mesh(geo, mat); m.castShadow = cast; m.receiveShadow = recv; return m; }

// Körperprofil (r, y) - birnenförmig, oben in den Hals übergehend
const BODY_PROFILE = [
  [0.0, 0.0], [0.09, 0.004], [0.155, 0.022], [0.2, 0.06], [0.222, 0.11], [0.226, 0.16], [0.217, 0.21],
  [0.196, 0.26], [0.168, 0.305], [0.142, 0.345], [0.124, 0.385], [0.114, 0.425], [0.108, 0.465], [0.104, 0.5],
];
function lathe(profile, seg, phiStart, phiLen) {
  return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), seg, phiStart || 0, phiLen === undefined ? Math.PI * 2 : phiLen);
}
function profileAt(y) {
  for (let i = 1; i < BODY_PROFILE.length; i++) {
    const [r1, y1] = BODY_PROFILE[i]; const [r0, y0] = BODY_PROFILE[i - 1];
    if (y <= y1) return r0 + (r1 - r0) * ((y - y0) / (y1 - y0 || 1));
  }
  return BODY_PROFILE[BODY_PROFILE.length - 1][0];
}

// Glatte, sich verjüngende Kapsel entlang +y, Länge L, zentriert (für IK-Segmente)
function taperCapsule(r0, r1, L, seg) {
  const pts = [];
  const n = 6;
  for (let i = 0; i <= n; i++) { const a = -Math.PI / 2 + (i / n) * (Math.PI / 2); pts.push([Math.cos(a) * r0, -L / 2 + Math.sin(a) * r0 + r0]); }
  for (let i = 0; i <= n; i++) { const a = (i / n) * (Math.PI / 2); pts.push([Math.cos(a) * r1, L / 2 - r1 + Math.sin(a) * r1]); }
  return lathe(pts, seg || 12);
}

// Obere Schnabelhälfte: löffelförmig, vorne breiter und flacher
function billGeometry(len, wid, hgt, lower) {
  const g = new THREE.SphereGeometry(1, 28, 16);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const f = Math.max(0, -z); // 0 hinten .. 1 Spitze
    x *= wid * (0.85 + 0.45 * f);
    y *= hgt * (1 - 0.35 * f);
    if (!lower) y += 0.012 * f * f + (y > 0 ? 0 : 0.004);
    else y -= 0.004 * f;
    z *= len;
    p.setXYZ(i, x, y, z);
  }
  g.computeVertexNormals();
  return g;
}

// Dreispitz: Krempe an drei Seiten hochgeklappt, Ecken zeigen nach vorn und hinten-seitlich
function tricornGeometry(rIn, rOut, lift) {
  const radial = 72, rings = 7;
  const pos = [], idx = [], uv = [];
  for (let j = 0; j <= rings; j++) {
    const t = j / rings;
    for (let i = 0; i <= radial; i++) {
      const phi = (i / radial) * Math.PI * 2;
      const s = (1 - Math.cos(3 * (phi - Math.PI))) / 2; // 0 an den Ecken, 1 in der Mitte der Seiten
      const ro = rOut * (1 - 0.2 * s);
      const r = rIn + (ro - rIn) * t;
      const y = lift * Math.pow(t, 1.6) * (0.3 + 0.7 * s);
      pos.push(Math.sin(phi) * r, y, Math.cos(phi) * r);
      uv.push(i / radial, t);
    }
  }
  for (let j = 0; j < rings; j++) for (let i = 0; i < radial; i++) {
    const a = j * (radial + 1) + i, b = a + radial + 1;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return { geo: g, edge: (phi) => { const s = (1 - Math.cos(3 * (phi - Math.PI))) / 2; const ro = rOut * (1 - 0.2 * s); return new THREE.Vector3(Math.sin(phi) * ro, lift * (0.3 + 0.7 * s), Math.cos(phi) * ro); } };
}

// Schwimmfuß (drei Zehen mit Schwimmhaut), flach extrudiert, zeigt nach -z
function footGeometry() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.01);
  s.quadraticCurveTo(-0.03, -0.01, -0.055, -0.075);
  s.quadraticCurveTo(-0.035, -0.07, -0.025, -0.085);
  s.quadraticCurveTo(-0.01, -0.075, 0, -0.095);
  s.quadraticCurveTo(0.01, -0.075, 0.025, -0.085);
  s.quadraticCurveTo(0.035, -0.07, 0.055, -0.075);
  s.quadraticCurveTo(0.03, -0.01, 0, 0.01);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.008, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 6 });
  g.rotateX(Math.PI / 2); // flach legen, Zehen nach -z
  return g;
}

function featherTexture() {
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 256;
  const c = cv.getContext('2d');
  c.clearRect(0, 0, 64, 256);
  c.strokeStyle = '#ffffff'; c.lineWidth = 3;
  c.beginPath(); c.moveTo(32, 250); c.lineTo(32, 8); c.stroke();
  for (let y = 20; y < 240; y += 5) {
    const w = 26 * Math.sin((y / 256) * Math.PI) + 4;
    c.beginPath(); c.moveTo(32, y + 6); c.lineTo(32 - w, y - 4); c.stroke();
    c.beginPath(); c.moveTo(32, y + 6); c.lineTo(32 + w, y - 4); c.stroke();
  }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
let featherTex = null;

// ---------------------------------------------------------------------------
export function buildDuck(id, isMe, h) {
  const hash = hashStr(id) >>> 0;
  const g = new THREE.Group();
  const pl = PLUMAGE[(hash >>> 3) % PLUMAGE.length];
  const coatColor = COATS[hash % COATS.length];
  const mBody = feathers(pl[0], 0xffffff);
  const mHead = feathers(pl[1], 0xffffff);
  const mCoat = cloth(coatColor);
  const mBill = new THREE.MeshPhysicalMaterial({ color: BILL, roughness: 0.4, clearcoat: 0.6, clearcoatRoughness: 0.35 });
  const mGold = new THREE.MeshStandardMaterial({ color: 0xd8ae4a, roughness: 0.3, metalness: 0.9 });
  const mDark = new THREE.MeshStandardMaterial({ color: 0x1b1612, roughness: 0.7 });
  const mLace = cloth(0xf2ecdc);
  const parts = { g, coat: mCoat, skin: mBody };

  // Hocker (kleines Fass)
  const stool = mk(h.barrelGeometry(0.17, 0.2, 0.46), h.woodMat());
  stool.position.set(0, 0.23, 0.05);
  if (!isMe) g.add(stool);

  const body = new THREE.Group(); g.add(body); parts.body = body;
  body.position.set(0, 0.46, 0.04);
  parts.shoulder = { x: 0.195, y: 0.46 + 0.31, z: 0.0 };

  if (!isMe) {
    // Beinchen + Schwimmfüße (baumeln vorn am Fass)
    const legGeo = taperCapsule(0.02, 0.017, 0.16, 8);
    const footGeo = footGeometry();
    [-0.075, 0.075].forEach((x) => {
      const leg = mk(legGeo, mBill); leg.position.set(x, -0.02, -0.17); leg.rotation.x = 0.25; body.add(leg);
      const foot = mk(footGeo, mBill); foot.position.set(x, -0.1, -0.2); foot.rotation.set(-0.35, x > 0 ? -0.15 : 0.15, 0); body.add(foot);
    });

    const torso = new THREE.Group(); body.add(torso); parts.torso = torso;
    // Körper mit hellerem Bauch (Vertex-Farben)
    const bodyGeo = lathe(BODY_PROFILE, 30);
    bodyGeo.scale(1, 1, 1.1);
    const bp = bodyGeo.attributes.position;
    const col = new Float32Array(bp.count * 3);
    const cA = new THREE.Color(pl[0]), cB = new THREE.Color(pl[2]), tmp = new THREE.Color();
    for (let i = 0; i < bp.count; i++) {
      const x = bp.getX(i), y = bp.getY(i), z = bp.getZ(i);
      const r = Math.hypot(x, z / 1.1) || 1;
      const front = Math.max(0, -z / 1.1 / r);
      const k = Math.pow(front, 1.6) * THREE.MathUtils.smoothstep(y, 0.02, 0.12) * (1 - THREE.MathUtils.smoothstep(y, 0.32, 0.44));
      tmp.copy(cA).lerp(cB, k);
      col[i * 3] = tmp.r; col[i * 3 + 1] = tmp.g; col[i * 3 + 2] = tmp.b;
    }
    bodyGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mBodyV = mBody.clone(); mBodyV.color.set(0xffffff); mBodyV.vertexColors = true;
    torso.add(mk(bodyGeo, mBodyV));
    // Schwanzbürzel
    const tail = mk(lathe([[0, 0], [0.055, 0.02], [0.072, 0.06], [0.06, 0.11], [0.03, 0.15], [0.0, 0.165]], 16), mBody);
    tail.scale.set(1.35, 1, 0.55); tail.position.set(0, 0.035, 0.2); tail.rotation.x = 1.2; torso.add(tail);

    // Piratenmantel: vorne offen, mit goldener Borte, Knöpfen, Kragen und Gürtel
    const coatProf = BODY_PROFILE.filter(([, y]) => y >= 0.06 && y <= 0.39).map(([r, y]) => [r * 1.07 + 0.004, y]);
    coatProf.unshift([profileAt(0.035) * 1.07 + 0.012, 0.035]);
    const gap = 0.95;
    const coatGeo = lathe(coatProf, 40, Math.PI + gap / 2, Math.PI * 2 - gap);
    coatGeo.scale(1, 1, 1.1);
    const mCoat2 = mCoat.clone(); mCoat2.side = THREE.DoubleSide;
    torso.add(mk(coatGeo, mCoat2));
    // Borte entlang der Kanten
    const edgePts = [];
    const pOf = (r, y, phi) => new THREE.Vector3(Math.sin(phi) * r, y, Math.cos(phi) * r * 1.1);
    const L = coatProf.length;
    for (let k = L - 1; k >= 0; k--) edgePts.push(pOf(coatProf[k][0] + 0.003, coatProf[k][1], Math.PI + gap / 2));
    for (let k = 1; k < 24; k++) { const phi = Math.PI + gap / 2 + (k / 24) * (Math.PI * 2 - gap); edgePts.push(pOf(coatProf[0][0] + 0.003, coatProf[0][1], phi)); }
    for (let k = 0; k < L; k++) edgePts.push(pOf(coatProf[k][0] + 0.003, coatProf[k][1], Math.PI - gap / 2));
    const trim = mk(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(edgePts), 90, 0.007, 5, false), mGold, false, false);
    torso.add(trim);
    [0.1, 0.17, 0.24].forEach((y) => [1, -1].forEach((sd) => {
      const btn = mk(new THREE.SphereGeometry(0.011, 8, 6), mGold, false, false);
      btn.position.copy(pOf(profileAt(y) * 1.07 + 0.012, y, Math.PI + sd * (gap / 2 + 0.12)));
      torso.add(btn);
    }));
    const cr = profileAt(0.385) * 1.07 + 0.004;
    const collarGeo = lathe([[cr - 0.004, 0.37], [cr + 0.006, 0.385], [cr + 0.016, 0.415], [cr + 0.03, 0.44], [cr + 0.024, 0.446]], 36, Math.PI + gap / 2 + 0.25, Math.PI * 2 - gap - 0.5);
    collarGeo.scale(1, 1, 1.1);
    torso.add(mk(collarGeo, mCoat2));
    const belt = mk(new THREE.TorusGeometry(profileAt(0.12) * 1.1 + 0.004, 0.016, 6, 40), new THREE.MeshStandardMaterial({ color: 0x2e1d10, roughness: 0.55 }));
    belt.rotation.x = Math.PI / 2; belt.scale.set(1, 1.1, 1); belt.position.y = 0.12; torso.add(belt);
    const buckle = mk(new THREE.TorusGeometry(0.022, 0.006, 4, 4), mGold, false, false);
    buckle.rotation.z = Math.PI / 4; buckle.position.set(0, 0.12, -(profileAt(0.12) * 1.1 + 0.004) * 1.1 - 0.012); torso.add(buckle);
    // Halstuch
    const scarfMat = cloth(SCARVES[(hash >>> 20) % SCARVES.length]);
    const scarf = mk(new THREE.TorusGeometry(profileAt(0.425) * 1.02 + 0.006, 0.02, 8, 32), scarfMat); scarf.rotation.x = Math.PI / 2 - 0.08; scarf.scale.set(1, 1.1, 1); scarf.position.set(0, 0.425, 0); torso.add(scarf);
    const knot = mk(new THREE.SphereGeometry(0.024, 10, 8), scarfMat); knot.position.set(0.02, 0.41, -0.13); torso.add(knot);
    const tip = mk(lathe([[0, 0], [0.02, 0.018], [0.018, 0.055], [0, 0.08]], 8), scarfMat); tip.scale.set(1, 1, 0.45); tip.position.set(0.025, 0.4, -0.135); tip.rotation.set(Math.PI - 0.25, 0, 0.25); torso.add(tip);

    // Kopf
    const head = new THREE.Group(); head.position.set(0, 0.565, -0.025); torso.add(head); parts.head = head;
    const skull = mk(new THREE.SphereGeometry(0.14, 28, 20), mHead); skull.scale.set(1, 0.96, 1.06); head.add(skull);
    // Schnabel: Oberschnabel steckt hinten im Kopf, Unterschnabel darunter eingezogen
    // Schnabel aus einem Stück, mit dunkler Mundlinie
    const billTop = mk(billGeometry(0.115, 0.06, 0.034, false), mBill); billTop.position.set(0, -0.036, -0.16); billTop.rotation.x = -0.05; head.add(billTop);
    const mouth = mk(new THREE.TorusGeometry(0.052, 0.0025, 4, 24, Math.PI * 0.8), new THREE.MeshStandardMaterial({ color: 0x8a3a10, roughness: 0.7 }), false, false);
    mouth.rotation.set(Math.PI / 2, 0, Math.PI * 1.1); mouth.scale.set(1.1, 1.9, 1); mouth.position.set(0, -0.041, -0.155); head.add(mouth);
    const mNostril = new THREE.MeshStandardMaterial({ color: 0xa4521a, roughness: 0.6 });
    [-1, 1].forEach((sd) => { const n = mk(new THREE.SphereGeometry(0.0032, 6, 4), mNostril, false, false); n.scale.set(1, 0.5, 2.2); n.position.set(sd * 0.013, -0.011, -0.212); head.add(n); });

    // Augen: großteils im Kopf versenkt (nur die Vorderseite wölbt sich heraus), mit Pupille,
    // Glanzpunkt und Lid. Das Lid ist eine Kugelkappe, die offen hinter dem Auge im Kopf liegt
    // und zum Blinzeln nach vorn über das Auge klappt.
    const mWhite = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    const mPupil = new THREE.MeshStandardMaterial({ color: 0x0b0b0b, roughness: 0.15 });
    const mShine = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mBrow = new THREE.MeshStandardMaterial({ color: new THREE.Color(pl[1]).multiplyScalar(0.5), roughness: 0.85 });
    const patch = (hash >>> 9) % 3 === 0;
    parts.lids = [];
    [-1, 1].forEach((sd, i) => {
      const dir = new THREE.Vector3(sd * 0.42, 0.2, -0.885).normalize();
      const eg = new THREE.Group(); eg.position.copy(dir).multiplyScalar(0.125);
      eg.lookAt(eg.position.clone().add(dir)); head.add(eg);
      if (patch && i === 0) {
        // Augenklappe: liegt wie das Auge auf dem Kopf, Band diagonal um den Kopf
        const p = mk(new THREE.SphereGeometry(0.043, 16, 10), mDark, false, false); p.scale.set(1.08, 1.2, 0.72); eg.add(p);
        const strap = mk(new THREE.TorusGeometry(0.146, 0.0045, 5, 48), mDark, false, false);
        strap.rotation.set(Math.PI / 2 + 0.25, 0, sd * 0.55); strap.position.y = 0.022; head.add(strap);
        return;
      }
      const eye = mk(new THREE.SphereGeometry(0.04, 16, 12), mWhite, false, false); eye.scale.set(1, 1.15, 0.7); eg.add(eye);
      const pupil = mk(new THREE.SphereGeometry(0.018, 14, 10), mPupil, false, false); pupil.position.set(-sd * 0.003, -0.002, 0.021); pupil.scale.set(1, 1.2, 0.5); eg.add(pupil);
      const shine = new THREE.Mesh(new THREE.SphereGeometry(0.0055, 8, 6), mShine); shine.position.set(-sd * 0.007 + 0.004, 0.01, 0.027); eg.add(shine);
      const lid = mk(new THREE.SphereGeometry(0.0405, 20, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), mHead, false, false);
      lid.scale.set(1.04, 1.2, 0.76);
      const lidPivot = new THREE.Group(); lidPivot.add(lid); eg.add(lidPivot);
      const L = { pivot: lidPivot, open: -1.5, closed: 1.52 };
      lidPivot.rotation.x = L.open;
      parts.lids.push(L);
      // Augenbraue (verschmitzt schräg), liegt knapp über dem Auge auf dem Kopf
      const brow = mk(taperCapsule(0.008, 0.006, 0.062, 6), mBrow, false, false);
      brow.rotation.set(0, 0, Math.PI / 2 + sd * 0.22); brow.position.set(0, 0.057, -0.004); eg.add(brow);
    });

    // Kopfbedeckung (sitzt oberhalb der Augenbrauen)
    const hatType = (hash >>> 15) % 3;
    if (hatType < 2) {
      const hatMat = cloth(0x1d1814);
      const hat = new THREE.Group(); hat.position.set(0, 0.1, 0.008); hat.rotation.x = -0.12; head.add(hat); parts.hat = hat;
      const tc = tricornGeometry(0.098, 0.205, 0.085);
      const brim = mk(tc.geo, hatMat.clone()); brim.material.side = THREE.DoubleSide; hat.add(brim);
      const crown = mk(lathe([[0.118, 0], [0.117, 0.04], [0.108, 0.078], [0.083, 0.105], [0.044, 0.12], [0, 0.123]], 28), hatMat);
      crown.scale.set(1, 1, 1.05); hat.add(crown);
      const edge = []; for (let k = 0; k < 96; k++) edge.push(tc.edge((k / 96) * Math.PI * 2));
      hat.add(mk(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(edge, true), 160, 0.0048, 5, true), mGold, false, false));
      const band = mk(new THREE.TorusGeometry(0.118, 0.0075, 5, 32), mGold, false, false); band.rotation.x = Math.PI / 2; band.position.y = 0.012; band.scale.set(1, 1.05, 1); hat.add(band);
      const emblem = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.07), new THREE.MeshBasicMaterial({ map: h.skullTexture(), transparent: true, depthWrite: false }));
      emblem.position.set(0, 0.058, -0.126); emblem.rotation.set(-0.1, Math.PI, 0); hat.add(emblem);
      if (hatType === 0) {
        if (!featherTex) featherTex = featherTexture();
        const fg = new THREE.PlaneGeometry(0.065, 0.3, 1, 10);
        const fp = fg.attributes.position;
        for (let k = 0; k < fp.count; k++) { const y = fp.getY(k) + 0.15; fp.setZ(k, y * y * 1.1); }
        fg.computeVertexNormals();
        const plume = new THREE.Mesh(fg, new THREE.MeshStandardMaterial({ map: featherTex, color: [0xc0392b, 0xf2efe6, 0x2a6ab0][hash % 3], alphaTest: 0.4, side: THREE.DoubleSide, roughness: 0.9 }));
        plume.castShadow = true;
        plume.position.set(0.095, 0.15, 0.06); plume.rotation.set(-0.5, 0.4, -0.55); hat.add(plume);
      }
    } else {
      // Kopftuch: vorne oberhalb der Augenbrauen, hinten bis zum Nacken, Knoten hinten
      const bandMat = new THREE.MeshPhysicalMaterial({ map: h.dotTexture(SCARVES[(hash >>> 18) % SCARVES.length]), roughness: 0.85, sheen: 0.8, sheenRoughness: 0.5 });
      const cap = mk(new THREE.SphereGeometry(0.147, 30, 14, 0, Math.PI * 2, 0, Math.PI * 0.4), bandMat);
      cap.scale.set(1, 0.97, 1.07); cap.rotation.x = 0.4; cap.position.y = 0.006; head.add(cap);
      const hem = mk(new THREE.TorusGeometry(0.147 * Math.sin(Math.PI * 0.4), 0.007, 6, 40), bandMat);
      hem.rotation.x = Math.PI / 2; hem.position.y = 0.147 * Math.cos(Math.PI * 0.4);
      const hemG = new THREE.Group(); hemG.add(hem); hemG.scale.set(1, 0.97, 1.07); hemG.rotation.x = 0.4; hemG.position.y = 0.006; head.add(hemG);
      const knot2 = mk(new THREE.SphereGeometry(0.03, 10, 8), bandMat); knot2.position.set(0, 0.04, 0.15); head.add(knot2);
      [-1, 1].forEach((sd) => {
        const tl = mk(lathe([[0, 0], [0.024, 0.02], [0.022, 0.075], [0.004, 0.12]], 8), bandMat);
        tl.scale.set(1, 1, 0.35); tl.position.set(sd * 0.018, 0.03, 0.16); tl.rotation.set(Math.PI - 0.45, 0, sd * 0.35); head.add(tl);
      });
    }
  }

  // Flügel: Ärmel (Oberarm), Federflügel (Unterarm), Spitzenmanschette, gefächerte Federspitze
  const L1 = isMe ? 0.3 : 0.22, L2 = isMe ? 0.3 : 0.22;
  const upperGeo = taperCapsule(0.052, 0.045, L1, 12);
  const foreGeo = taperCapsule(0.042, 0.05, L2, 12); // Ärmel wird zum Aufschlag hin weiter
  // breiter Ärmelaufschlag am Handgelenk
  const cuffGeo = lathe([[0.04, -0.03], [0.056, -0.028], [0.06, 0.0], [0.056, 0.022], [0.042, 0.024]], 16);
  const cuffTrimGeo = new THREE.TorusGeometry(0.058, 0.006, 5, 20); cuffTrimGeo.rotateX(Math.PI / 2); cuffTrimGeo.translate(0, 0.022, 0);
  // Flügelspitze: breite, flache Federschaufel mit drei kurzen, runden Federenden
  const tipGeo = (() => {
    const paddle = new THREE.SphereGeometry(1, 16, 10); paddle.scale(0.05, 0.07, 0.022); paddle.translate(0, 0.045, 0);
    const geos = [-0.45, 0, 0.45].map((a, k) => {
      const f = new THREE.SphereGeometry(1, 12, 8);
      f.scale(0.026, 0.04, 0.016);
      f.translate(0, 0.1 - (k === 1 ? 0 : 0.012), 0);
      f.rotateZ(a * 0.5);
      return f;
    });
    return h.mergeGeometries([paddle, ...geos]);
  })();
  parts.arms = [1, -1].map((side) => {
    const upper = mk(upperGeo, mCoat);
    const fore = mk(foreGeo, mCoat);
    const cf = new THREE.Group();
    cf.add(mk(cuffGeo, mCoat)); cf.add(mk(cuffTrimGeo, mGold, false, false));
    const hand = mk(tipGeo, mBody);
    g.add(upper); g.add(fore); g.add(cf); g.add(hand);
    return { side, upper, fore, cuff: cf, hand, L1, L2, short: isMe };
  });

  g.userData.parts = parts;
  // Starre Teile zusammenfassen (weniger Draw-Calls); Augen/Lider bleiben beweglich
  if (parts.head) {
    if (parts.hat) { h.batchStatic(parts.hat, true); parts.hat.userData.dynamic = true; }
    parts.head.children.forEach((c) => { if (c.isGroup) c.userData.dynamic = true; });
    h.batchStatic(parts.head, true);
    parts.head.userData.dynamic = true;
    h.batchStatic(parts.torso, true);
    parts.torso.userData.dynamic = true;
    h.batchStatic(parts.body, true);
  }
  return parts;
}
