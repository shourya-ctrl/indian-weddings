// The astrology sky that used to sit behind the homepage, moved here so it can
// run behind every page: a star field with the Milky Way, the rashi wheel and
// ecliptic, the moon and Shukra gliding along it, and Saptarishi pointing to
// Dhruva, traced in as you scroll. The drawing code is the original; the site
// backdrop (Backdrop.jsx) decides how faint it is.
const Rnd = Math.random, RAD = Math.PI / 180, ROT0 = 0.578, BETA = -0.646;
const UMA = [[11.0621, 61.751, 1.8], [11.0307, 56.383, 2.3], [11.8972, 53.695, 2.4], [12.2571, 57.033, 3.3], [12.9005, 55.96, 1.8], [13.3988, 54.925, 2.2], [13.4204, 54.988, 4.0], [13.7924, 49.313, 1.9]];
const UMA_LINES = [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 7]];
const RASHI = ['Mesha', 'Vrishabha', 'Mithuna', 'Karka', 'Simha', 'Kanya', 'Tula', 'Vrishchika', 'Dhanu', 'Makara', 'Kumbha', 'Meena'];

const sprite = rgb => {
  const s = 64, c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d'), h = s / 2, gr = g.createRadialGradient(h, h, 0, h, h, h);
  gr.addColorStop(0, 'rgba(255,248,232,1)'); gr.addColorStop(0.16, 'rgba(' + rgb + ',.85)');
  gr.addColorStop(0.42, 'rgba(' + rgb + ',.2)'); gr.addColorStop(1, 'rgba(' + rgb + ',0)');
  g.fillStyle = gr; g.fillRect(0, 0, s, s); return c;
};
const starSprite = () => {
  const s = 96, c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d'), h = s / 2;
  const a = g.createLinearGradient(0, h, s, h), b = g.createLinearGradient(h, 0, h, s);
  [a, b].forEach(gr => { gr.addColorStop(0, 'rgba(232,209,154,0)'); gr.addColorStop(0.5, 'rgba(255,246,226,.95)'); gr.addColorStop(1, 'rgba(232,209,154,0)'); });
  g.fillStyle = a; g.fillRect(0, h - 0.6, s, 1.2); g.fillStyle = b; g.fillRect(h - 0.6, 0, 1.2, s);
  return c;
};
const moonSprite = () => {
  const s = 64, c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d'), h = s / 2;
  g.fillStyle = 'rgba(246,240,228,.95)'; g.beginPath(); g.arc(h, h, 13, 0, 6.2832); g.fill();
  g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.arc(h + 7, h - 3, 12, 0, 6.2832); g.fill();
  return c;
};

export default class Sky {
  constructor(canvas, still) {
    this.cv = canvas; this.still = still;
    this._sctx = canvas.getContext('2d');
    this._moon = moonSprite();
    this._spr = { gold: sprite('232,209,154'), ivory: sprite('244,238,228'), star: starSprite() };
  }
  sizeSky() {
    const c = this.cv; if (!c || !this._sctx) return;
    const dpr = Math.min(1.5, window.devicePixelRatio || 1), W = window.innerWidth, H = window.innerHeight, Rn = Math.random;
    c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
    this._sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const px = W * 0.8, py = H * (W < 700 ? 0.14 : 0.2), K = Math.min(1.45 * H, 1.05 * W);
    const D = Math.max(...[[0, 0], [W, 0], [0, H], [W, H]].map(([x, y]) => Math.hypot(x - px, y - py))) + 40;
    this._sk = { W, H, px, py, K, D, u: Math.max(0.6, K / 1566) };
        const A = 1.5, bOff = 0.5 * K, bW = 0.16 * K, cA = Math.cos(A), sA = Math.sin(A);
    const n = Math.min(9000, Math.round(Math.PI * D * D / 2600));
    this._stars = Array.from({ length: n }, () => {
      let x, y;
      if (Rn() < 0.34) { const bx = (Rn() * 2 - 1) * D, by = bOff + (Rn() + Rn() + Rn() - 1.5) / 1.5 * bW; x = bx * cA - by * sA; y = bx * sA + by * cA; }
      else { const r = D * Math.sqrt(Rn()), a = Rn() * 6.2832; x = r * Math.cos(a); y = r * Math.sin(a); }
      return { x, y, s: 0.5 + Math.pow(Rn(), 4) * 1.4, a: 0.18 + Math.pow(Rn(), 2) * 0.62, tw: Rn() < 0.12, ph: Rn() * 6.2832, f: 0.4 + Rn() * 1.4, gold: Rn() < 0.28 };
    });
    const q = 0.25, S = Math.ceil(2 * D * q), m = document.createElement('canvas'); m.width = m.height = S;
    const g = m.getContext('2d'); g.translate(S / 2, S / 2); g.scale(q, q); g.rotate(A);
    const lg = g.createLinearGradient(0, bOff - bW * 1.6, 0, bOff + bW * 1.6);
    lg.addColorStop(0, 'rgba(232,214,180,0)'); lg.addColorStop(0.5, 'rgba(232,214,180,.075)'); lg.addColorStop(1, 'rgba(232,214,180,0)');
    g.fillStyle = lg; g.fillRect(-D, bOff - bW * 1.6, 2 * D, bW * 3.2);
    for (let i = 0; i < 46; i++) {
      const bx = (Rn() * 2 - 1) * D, by = bOff + (Rn() - 0.5) * bW * 1.4, rr = bW * (0.25 + Rn() * 0.7), w = Rn() < 0.5 ? '232,209,154' : '244,232,214';
      const rg = g.createRadialGradient(bx, by, 0, bx, by, rr); rg.addColorStop(0, 'rgba(' + w + ',' + (0.03 + Rn() * 0.04) + ')'); rg.addColorStop(1, 'rgba(' + w + ',0)');
      g.fillStyle = rg; g.fillRect(bx - rr, by - rr, rr * 2, rr * 2);
    }
    g.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < 14; i++) {
      const bx = (Rn() * 2 - 1) * D, by = bOff + (Rn() - 0.5) * bW * 0.5, rr = bW * (0.12 + Rn() * 0.3);
      g.save(); g.translate(bx, by); g.scale(3.2, 0.7);
      const rg = g.createRadialGradient(0, 0, 0, 0, 0, rr); rg.addColorStop(0, 'rgba(0,0,0,.22)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = rg; g.fillRect(-rr, -rr, rr * 2, rr * 2); g.restore();
    }
    this._mw = { c: m, S, q };
    this._kS = 0.9 / Math.max(3000, document.documentElement.scrollHeight - H);
    this._twk = this._stars.filter(s => s.tw); this._cache = null;
    this._nextShoot = 0; this._shoot = null;
  }
  drawSky(ts) {
    const g = this._sctx; if (!g || !this._sk || !this._stars) return;
    const { W, H, px, py, K, u } = this._sk, mo = !this.still, t = ts / 1000, syR = window.scrollY || 0, sy = mo ? syR : 0;
    const cl = v => Math.min(1, Math.max(0, v)), skyH = false, si = skyH ? 1 : cl((syR - H * 0.35) / (H * 0.5)), plIn = skyH ? 1 : cl((syR - H * 0.6) / (H * 0.4));
    const rot = ROT0 + sy * (this._kS || 0) + (mo ? t * 0.0018 : 0), dr = rot - ROT0, cr = Math.cos(rot), sr = Math.sin(rot);
    const p = cl((syR - H * 0.45) / (H * 1.1));
    const ck = this._cache;
    if (!ck || ck.W !== W || ck.H !== H || ck.mo !== mo || Math.abs(ck.rot - rot) > 0.0005 || Math.abs(ck.p - p) > 0.004 || Math.abs(ck.si - si) > 0.004) this.renderSkyCache(rot, p, mo, si);
    const off = (x, y, m) => x < -m || x > W + m || y < -m || y > H + m;
    g.clearRect(0, 0, W, H);
    g.drawImage(this._cache.c, 0, 0, W, H);
    if (mo) {
      for (const s of this._twk) {
        const x = px + s.x * cr + s.y * sr, y = py - s.x * sr + s.y * cr; if (off(x, y, 3)) continue;
        g.fillStyle = s.gold ? 'rgb(232,209,154)' : 'rgb(244,238,228)';
        g.globalAlpha = s.a * (0.35 + 0.65 * si) * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.f + s.ph)));
        g.fillRect(x - s.s / 2, y - s.s / 2, s.s, s.s);
      }
      g.globalAlpha = 1;
    }
    const be = BETA - dr, cx = px + 0.434 * K * Math.cos(be), cy = py + 0.434 * K * Math.sin(be), re = 1.09 * K, bw = 18 * u;
    const pv = Math.atan2(H * 0.55 - cy, W * 0.45 - cx), rp = re - bw / 2, ls = 'letterSpacing' in g;
    g.font = '600 ' + Math.round(10 * Math.max(1, u)) + 'px "Nunito Sans", sans-serif'; g.textBaseline = 'middle';
    if (ls) g.letterSpacing = Math.round(3 * Math.max(1, u)) + 'px';
    [[1 / 95, 0, 'SHUKRA'], [1 / 150, 0.5, null]].filter(q => !(skyH && !q[2])).forEach(([spd, o, lab]) => {
      if (plIn <= 0) return;
      const fr = mo ? (t * spd + o) % 1 : 0.35 + o * 0.5, al = Math.sin(Math.PI * fr) * plIn, an = pv + (0.5 - fr) * 0.9;
      const x = cx + Math.cos(an) * rp, y = cy + Math.sin(an) * rp; if (off(x, y, 30)) return;
      g.globalCompositeOperation = 'lighter';
      if (lab) { const z = 20 * u; g.globalAlpha = al; g.drawImage(this._spr.ivory, x - z / 2, y - z / 2, z, z); const z2 = 30 * u; g.globalAlpha = al * 0.6; g.drawImage(this._spr.star, x - z2 / 2, y - z2 / 2, z2, z2); }
      else { const h = 70 * u; g.globalAlpha = al * 0.22; g.drawImage(this._spr.gold, x - h / 2, y - h / 2, h, h); g.globalCompositeOperation = 'source-over'; const z = 44 * u; g.globalAlpha = al * 0.85; g.drawImage(this._moon, x - z / 2, y - z / 2, z, z); }
      g.globalCompositeOperation = 'source-over';
      if (lab) { g.globalAlpha = al; g.textAlign = 'left'; g.fillStyle = 'rgba(237,227,211,.34)'; g.fillText(lab, x + 12 * u, y - 10 * u); }
      g.globalAlpha = 1;
    });
    if (ls) g.letterSpacing = '0px';
    if (p > 0) {
      const pts = this.umaPts(cr, sr), sa = Math.min(1, p * 1.5);
      g.globalCompositeOperation = 'lighter';
      UMA.forEach((s, i) => { const z = (6 - s[2]) * 5 * u, [x, y] = pts[i]; g.globalAlpha = sa; g.drawImage(this._spr.ivory, x - z / 2, y - z / 2, z, z); });
      const dz = 24 * u; g.globalAlpha = sa; g.drawImage(this._spr.gold, px - dz / 2, py - dz / 2, dz, dz);
      const gz = 46 * u * (mo ? 0.85 + 0.15 * Math.sin(t * 0.8) : 1); g.globalAlpha = sa * 0.75; g.drawImage(this._spr.star, px - gz / 2, py - gz / 2, gz, gz);
      g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
    }
    if (mo) {
      if (!this._nextShoot) this._nextShoot = t + 4 + Rnd() * 6;
      if (!this._shoot && t > this._nextShoot) { const ang = (140 + Rnd() * 30) * RAD, spd = 650 + Rnd() * 400; this._shoot = { x: W * (0.25 + Rnd() * 0.7), y: H * (0.05 + Rnd() * 0.4), vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd, b: t, life: 0.85 + Rnd() * 0.4 }; this._nextShoot = t + 10 + Rnd() * 14; }
      const s = this._shoot;
      if (s) {
        const k = (t - s.b) / s.life;
        if (k >= 1 || k < 0) this._shoot = null;
        else { const e = t - s.b, hx = s.x + s.vx * e, hy = s.y + s.vy * e, nv = Math.hypot(s.vx, s.vy), len = 170 * u * Math.sin(Math.PI * k), tx = hx - s.vx / nv * len, ty = hy - s.vy / nv * len; const lg = g.createLinearGradient(hx, hy, tx, ty); lg.addColorStop(0, 'rgba(255,246,226,' + (0.75 * Math.sin(Math.PI * k)) + ')'); lg.addColorStop(1, 'rgba(232,209,154,0)'); g.strokeStyle = lg; g.lineWidth = 1.1; g.beginPath(); g.moveTo(hx, hy); g.lineTo(tx, ty); g.stroke(); }
      }
    }
  }
  umaPts(cr, sr) {
    const { px, py, K } = this._sk;
    const pts = UMA.map(([ra, dec]) => { const r = K * Math.tan((90 - dec) / 2 * RAD), a = -ra * 15 * RAD, x = r * Math.cos(a), y = r * Math.sin(a); return [px + x * cr + y * sr, py - x * sr + y * cr]; });
    pts[6] = [pts[5][0] + (pts[6][0] - pts[5][0]) * 6, pts[5][1] + (pts[6][1] - pts[5][1]) * 6];
    return pts;
  }
  renderSkyCache(rot, p, mo, si = 1) {
    const { W, H, px, py, K, u } = this._sk, dpr = Math.min(2, window.devicePixelRatio || 1);
    let ck = this._cache;
    if (!ck || ck.W !== W || ck.H !== H) { const c = document.createElement('canvas'); c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); ck = this._cache = { c, g: c.getContext('2d'), W, H }; }
    const g = ck.g; ck.rot = rot; ck.p = p; ck.mo = mo; ck.si = si;
    g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
    const dr = rot - ROT0, cr = Math.cos(rot), sr = Math.sin(rot);
    const gold = a => 'rgba(201,169,110,' + a + ')', off = (x, y, m) => x < -m || x > W + m || y < -m || y > H + m;
    const mw = this._mw;
    if (mw) { g.save(); g.globalAlpha = 0.25 + 0.75 * si; g.translate(px, py); g.rotate(-rot); g.drawImage(mw.c, -mw.S / 2 / mw.q, -mw.S / 2 / mw.q, mw.S / mw.q, mw.S / mw.q); g.restore(); }
    g.lineWidth = 0.75; g.globalAlpha = si;
    const rC = 0.656 * K, rE = K;
    g.setLineDash([2, 7]); g.strokeStyle = gold(0.13); g.beginPath(); g.arc(px, py, rC, 0, 6.2832); g.stroke(); g.setLineDash([]);
    g.strokeStyle = gold(0.12); g.beginPath(); g.arc(px, py, rE, 0, 6.2832); g.stroke();
    g.beginPath();
    for (let i = 0; i < 72; i++) { const a = i * Math.PI / 36 - dr, ca = Math.cos(a), sa = Math.sin(a), x1 = px + ca * rE, y1 = py + sa * rE; if (off(x1, y1, 20)) continue; const L = (i % 3 ? 5 : 12) * u; g.moveTo(x1, y1); g.lineTo(px + ca * (rE - L), py + sa * (rE - L)); }
    g.strokeStyle = gold(0.18); g.stroke();
    const be = BETA - dr, cx = px + 0.434 * K * Math.cos(be), cy = py + 0.434 * K * Math.sin(be), re = 1.09 * K, bw = 18 * u;
    g.strokeStyle = gold(0.16); g.beginPath(); g.arc(cx, cy, re, 0, 6.2832); g.stroke(); g.beginPath(); g.arc(cx, cy, re - bw, 0, 6.2832); g.stroke();
    g.beginPath();
    for (let i = 0; i < 360; i++) { const a = -i * RAD - dr, ca = Math.cos(a), sa = Math.sin(a), x1 = cx + ca * re, y1 = cy + sa * re; if (off(x1, y1, 30)) continue; const L = i % 30 === 0 ? bw : (i % 5 === 0 ? 8 * u : 4 * u); g.moveTo(x1, y1); g.lineTo(cx + ca * (re - L), cy + sa * (re - L)); }
    g.strokeStyle = gold(0.17); g.stroke();
    const rn = re - bw - 24 * u, rl = re - bw - 10 * u;
    g.strokeStyle = gold(0.08); g.beginPath(); g.arc(cx, cy, rn, 0, 6.2832); g.stroke();
    g.fillStyle = gold(0.32);
    for (let i = 0; i < 27; i++) { const a = -i * 6.2832 / 27 - dr - 0.05, x = cx + Math.cos(a) * rn, y = cy + Math.sin(a) * rn; if (off(x, y, 5)) continue; g.beginPath(); g.arc(x, y, 1.3 * u, 0, 6.2832); g.fill(); }
    const ls = 'letterSpacing' in g;
    g.font = '600 ' + Math.round(10 * Math.max(1, u)) + 'px "Nunito Sans", sans-serif'; if (ls) g.letterSpacing = Math.round(3 * Math.max(1, u)) + 'px';
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = 'rgba(237,227,211,.3)';
    for (let i = 0; i < 12; i++) {
      const a = -(i * 30 + 15) * RAD - dr, x = cx + Math.cos(a) * rl, y = cy + Math.sin(a) * rl; if (off(x, y, 60)) continue;
      let ang = a + Math.PI / 2; const nm = ((ang % 6.2832) + 6.2832) % 6.2832; if (nm > Math.PI / 2 && nm < Math.PI * 1.5) ang += Math.PI;
      g.save(); g.translate(x, y); g.rotate(ang); g.fillText(RASHI[i].toUpperCase(), 0, 0); g.restore();
    }
    for (let pass = 0; pass < 2; pass++) {
      g.fillStyle = pass ? 'rgb(232,209,154)' : 'rgb(244,238,228)';
      for (const s of this._stars) {
        if (s.gold !== (pass === 1) || (mo && s.tw)) continue;
        const x = px + s.x * cr + s.y * sr; if (x < -3 || x > W + 3) continue;
        const y = py - s.x * sr + s.y * cr; if (y < -3 || y > H + 3) continue;
        g.globalAlpha = s.a * (0.35 + 0.65 * si); g.fillRect(x - s.s / 2, y - s.s / 2, s.s, s.s);
      }
    }
    g.globalAlpha = 1;
    if (p > 0) {
      const pts = this.umaPts(cr, sr);
      g.lineWidth = 0.9; g.strokeStyle = 'rgba(232,209,154,' + (0.32 * Math.min(1, p * 1.4)) + ')';
      const prog = p * UMA_LINES.length;
      g.beginPath();
      UMA_LINES.forEach(([i, j], k) => { const f = Math.min(1, Math.max(0, prog - k)); if (f <= 0) return; const [x1, y1] = pts[i], [x2, y2] = pts[j]; g.moveTo(x1, y1); g.lineTo(x1 + (x2 - x1) * f, y1 + (y2 - y1) * f); });
      g.stroke();
      const pf = Math.min(1, Math.max(0, p * 1.6 - 0.6));
      if (pf > 0) { const [dx, dy] = pts[0]; g.setLineDash([1.5, 6]); g.strokeStyle = gold(0.3 * pf); g.beginPath(); g.moveTo(dx, dy); g.lineTo(dx + (px - dx) * pf, dy + (py - dy) * pf); g.stroke(); g.setLineDash([]); }
      const la = 0.36 * Math.min(1, Math.max(0, p * 2 - 1));
      if (la > 0) {
        g.fillStyle = 'rgba(237,227,211,' + la + ')'; g.textAlign = 'left';
        g.fillText('DHRUVA', px + 16 * u, py + 14 * u);
        g.fillText('ARUNDHATI', pts[6][0] + 10 * u, pts[6][1] - 12 * u);
        const bx = (pts[0][0] + pts[1][0] + pts[2][0] + pts[3][0]) / 4, by = (pts[0][1] + pts[1][1] + pts[2][1] + pts[3][1]) / 4;
        g.textAlign = 'center'; g.fillText('SAPTARISHI', bx, by);
      }
    }
    if (ls) g.letterSpacing = '0px';
  }
}
