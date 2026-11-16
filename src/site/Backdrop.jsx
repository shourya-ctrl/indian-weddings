// The night sky behind every page: a slow gold radiance, a faint water-droplet
// lattice that brightens around the pointer, glitter that twinkles, and the
// asterisms Indian weddings are timed by (Saptarishi with Arundhati, Dhruva,
// Krittika, Rohini, Mrigashira) drifting past as the page scrolls. A tap or
// click leaves a soft ripple, and now and then a droplet falls on its own.
//
// Everything sits behind the content (z-index -1) and stays faint, so copy
// always reads first. One canvas, capped at ~30fps, paused while the tab is
// hidden. Under prefers-reduced-motion it draws a single still frame.
import { useEffect, useRef } from 'react';
import { reducedMotion } from './motion';
import './backdrop.css';

// Shapes in a unit box. s = relative brightness, lines join star indexes.
const ASTERISMS = [
  { name: 'Saptarishi', sub: 'Arundhati', x: 0.86, y: 0.32, size: 230, rot: -0.12,
    stars: [[0, 0.2, 1], [0.17, 0.12, 1], [0.32, 0.18, 0.9], [0.45, 0.3, 0.7], [0.47, 0.52, 0.8], [0.72, 0.57, 0.9], [0.76, 0.3, 1], [0.195, 0.05, 0.45]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]], subAt: 7 },
  { name: 'Krittika', x: 0.1, y: 0.95, size: 120, rot: 0.2,
    stars: [[0.1, 0.3, 0.8], [0.26, 0.2, 1], [0.32, 0.4, 0.7], [0.45, 0.28, 0.9], [0.52, 0.47, 0.7], [0.22, 0.52, 0.6], [0.4, 0.58, 0.6]],
    lines: [[0, 1], [1, 3], [3, 4], [4, 6], [6, 5], [5, 0]] },
  { name: 'Dhruva', x: 0.9, y: 1.62, size: 200, rot: 0.3,
    stars: [[0, 0.1, 1], [0.2, 0.18, 0.6], [0.35, 0.3, 0.6], [0.5, 0.4, 0.7], [0.72, 0.44, 0.8], [0.76, 0.66, 0.7], [0.54, 0.62, 0.6]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]] },
  { name: 'Rohini', x: 0.08, y: 2.25, size: 170, rot: -0.2,
    stars: [[0.48, 0.62, 1], [0.38, 0.46, 0.6], [0.27, 0.3, 0.6], [0.16, 0.12, 0.7], [0.56, 0.42, 0.6], [0.66, 0.24, 0.6], [0.78, 0.08, 0.7]],
    lines: [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [5, 6]] },
  { name: 'Mrigashira', x: 0.88, y: 2.95, size: 210, rot: 0.08,
    stars: [[0.2, 0.12, 1], [0.62, 0.16, 0.8], [0.36, 0.5, 0.75], [0.43, 0.48, 0.75], [0.5, 0.46, 0.75], [0.28, 0.88, 0.7], [0.7, 0.84, 1], [0.41, 0, 0.5]],
    lines: [[0, 7], [7, 1], [0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6]] },
];
const CYCLE = 3.6; // the sky repeats every 3.6 screens of scroll
const PARALLAX = 0.3; // stars move at 30% of the page's scroll speed
const GOLD = '232,209,154';
const IVORY = '244,238,228';

export default function Backdrop() {
  const canvasRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current, glow = glowRef.current;
    if (!cv) return undefined;
    const g = cv.getContext('2d');
    const still = reducedMotion();
    const R = Math.random;
    let W = 0, H = 0, specks = [], raf = 0, last = 0, t0 = performance.now();
    const ripples = [], seen = new Map();
    let nextDrop = 4, shoot = null, nextShoot = 14 + R() * 10;
    // Pointer spotlight for the droplet lattice, eased toward the pointer.
    const P = { x: -999, y: -999, tx: -999, ty: -999 };

    const size = () => {
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round((W * H) / 26000);
      specks = Array.from({ length: n }, () => ({
        x: R() * W, y: R() * H * 2, d: 0.12 + R() * 0.3, r: 0.5 + Math.pow(R(), 3) * 1.3,
        a: 0.12 + R() * 0.3, f: 0.25 + R() * 0.6, ph: R() * 6.283, gold: R() < 0.45, glint: R() < 0.08,
      }));
    };

    const starDot = (x, y, r, a, rgb) => {
      const gr = g.createRadialGradient(x, y, 0, x, y, r * 4);
      gr.addColorStop(0, `rgba(${rgb},${a})`); gr.addColorStop(0.3, `rgba(${rgb},${a * 0.35})`); gr.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = gr; g.fillRect(x - r * 4, y - r * 4, r * 8, r * 8);
    };
    const glint = (x, y, L, a) => {
      g.strokeStyle = `rgba(${GOLD},${a})`; g.lineWidth = 0.6;
      g.beginPath(); g.moveTo(x - L, y); g.lineTo(x + L, y); g.moveTo(x, y - L); g.lineTo(x, y + L); g.stroke();
    };

    const draw = now => {
      const t = (now - t0) / 1000, sy = window.scrollY || 0;
      g.clearRect(0, 0, W, H);
      g.globalCompositeOperation = 'lighter';

      // Glitter
      const FH = H * 2;
      for (const s of specks) {
        let y = (s.y - sy * s.d) % FH; if (y < 0) y += FH; if (y > H + 4) continue;
        const tw = still ? 0.6 : 0.5 + 0.5 * Math.sin(t * s.f + s.ph);
        const a = s.a * (0.35 + 0.65 * tw * tw);
        g.fillStyle = `rgba(${s.gold ? GOLD : IVORY},${a})`;
        g.fillRect(s.x - s.r / 2, y - s.r / 2, s.r, s.r);
        if (s.glint && tw > 0.86) glint(s.x, y, 5 * (tw - 0.86) / 0.14 + 1, 0.35 * (tw - 0.86) / 0.14);
      }

      // Constellations
      const narrow = W < 768, cyc = CYCLE * H;
      ASTERISMS.forEach((c, ci) => {
        const sz = c.size * (narrow ? 0.62 : 1) * Math.min(1, W / 1280 + 0.25);
        let top = (c.y * H - sy * PARALLAX) % cyc; if (top < -sz - 40) top += cyc;
        if (top > H + 40 || top < -sz - 40) return;
        const left = Math.min(Math.max(c.x * W - sz / 2, 12), W - sz - 12);
        // Lines trace in the first time a figure is on screen.
        if (!seen.has(ci)) seen.set(ci, still ? -99 : t);
        const k = Math.min(1, Math.max(0, (t - seen.get(ci)) / 2.4)), ease = 1 - Math.pow(1 - k, 3);
        const cr = Math.cos(c.rot), sr = Math.sin(c.rot);
        const pt = ([u, v]) => { const x = (u - 0.4) * sz, y = (v - 0.4) * sz; return [left + sz * 0.4 + x * cr - y * sr, top + sz * 0.4 + x * sr + y * cr]; };
        const pts = c.stars.map(pt);
        g.globalCompositeOperation = 'source-over';
        g.strokeStyle = `rgba(${GOLD},${0.11 * ease})`; g.lineWidth = 0.6;
        g.beginPath();
        const segs = c.lines.length * ease;
        c.lines.forEach(([i, j], n) => {
          const f = Math.min(1, Math.max(0, segs - n)); if (f <= 0) return;
          const [x1, y1] = pts[i], [x2, y2] = pts[j];
          g.moveTo(x1, y1); g.lineTo(x1 + (x2 - x1) * f, y1 + (y2 - y1) * f);
        });
        g.stroke();
        g.globalCompositeOperation = 'lighter';
        c.stars.forEach((s, i) => {
          const breathe = still ? 1 : 0.8 + 0.2 * Math.sin(t * 0.6 + i * 1.7 + ci);
          starDot(pts[i][0], pts[i][1], 0.9 + s[2] * 0.9, 0.5 * s[2] * breathe * (0.4 + 0.6 * ease), s[2] > 0.95 ? GOLD : IVORY);
        });
        g.globalCompositeOperation = 'source-over';
        g.font = '600 9px "Nunito Sans", sans-serif';
        if ('letterSpacing' in g) g.letterSpacing = '3px';
        g.fillStyle = `rgba(237,227,211,${0.2 * ease})`; g.textAlign = 'left'; g.textBaseline = 'middle';
        const ys = pts.map(p => p[1]), xs = pts.map(p => p[0]);
        g.fillText(c.name.toUpperCase(), Math.min(...xs), Math.max(...ys) + 18);
        if (c.sub) { const [ax, ay] = pts[c.subAt]; g.fillStyle = `rgba(237,227,211,${0.14 * ease})`; g.fillText(c.sub.toUpperCase(), ax + 8, ay - 8); }
        if ('letterSpacing' in g) g.letterSpacing = '0px';
        g.globalCompositeOperation = 'lighter';
      });

      if (!still) {
        // Droplets: a soft ripple now and then, plus one wherever the visitor taps.
        if (t > nextDrop) {
          ripples.push({ x: R() < 0.5 ? R() * W * 0.18 : W - R() * W * 0.18, y: H * (0.15 + R() * 0.7), b: t, life: 2.6, max: 70 + R() * 40, a: 0.1 });
          nextDrop = t + 5 + R() * 5;
        }
        for (let i = ripples.length - 1; i >= 0; i--) {
          const r = ripples[i], k = (t - r.b) / r.life;
          if (k >= 1) { ripples.splice(i, 1); continue; }
          const e = 1 - Math.pow(1 - k, 3);
          g.lineWidth = 0.8;
          for (let ring = 0; ring < 3; ring++) {
            const kr = e - ring * 0.18; if (kr <= 0) continue;
            g.strokeStyle = `rgba(${GOLD},${r.a * (1 - k) * (1 - ring * 0.3)})`;
            g.beginPath(); g.ellipse(r.x, r.y, r.max * kr, r.max * kr * 0.42, 0, 0, 6.2832); g.stroke();
          }
          if (k < 0.25) starDot(r.x, r.y, 1.4, r.a * 3 * (1 - k / 0.25), IVORY);
        }

        // A rare, faint shooting star.
        if (!shoot && t > nextShoot) {
          const ang = (150 + R() * 20) * Math.PI / 180, spd = 420 + R() * 200;
          shoot = { x: W * (0.3 + R() * 0.65), y: H * (0.05 + R() * 0.3), vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd, b: t, life: 0.9 };
          nextShoot = t + 22 + R() * 16;
        }
        if (shoot) {
          const k = (t - shoot.b) / shoot.life;
          if (k >= 1) shoot = null;
          else {
            const e = t - shoot.b, hx = shoot.x + shoot.vx * e, hy = shoot.y + shoot.vy * e, len = 120 * Math.sin(Math.PI * k);
            const nv = Math.hypot(shoot.vx, shoot.vy), tx = hx - shoot.vx / nv * len, ty = hy - shoot.vy / nv * len;
            const lg = g.createLinearGradient(hx, hy, tx, ty);
            lg.addColorStop(0, `rgba(${IVORY},${0.4 * Math.sin(Math.PI * k)})`); lg.addColorStop(1, `rgba(${IVORY},0)`);
            g.strokeStyle = lg; g.lineWidth = 1; g.beginPath(); g.moveTo(hx, hy); g.lineTo(tx, ty); g.stroke();
          }
        }

        // Ease the droplet spotlight toward the pointer.
        if (glow) {
          P.x += (P.tx - P.x) * 0.12; P.y += (P.ty - P.y) * 0.12;
          glow.style.setProperty('--mx', `${P.x.toFixed(1)}px`); glow.style.setProperty('--my', `${P.y.toFixed(1)}px`);
        }
      }
      g.globalCompositeOperation = 'source-over';
    };

    const loop = now => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return;
      last = now; draw(now);
    };
    const start = () => { cancelAnimationFrame(raf); if (still) { draw(performance.now()); return; } if (document.visibilityState !== 'hidden') raf = requestAnimationFrame(loop); };

    const onResize = () => { size(); start(); };
    const onScroll = () => { if (still) draw(performance.now()); };
    const onVis = () => start();
    const onMove = e => { if (e.pointerType !== 'mouse') return; P.tx = e.clientX; P.ty = e.clientY; if (P.x < -900) { P.x = P.tx; P.y = P.ty; } };
    const onLeave = () => { P.tx = -999; P.ty = -999; P.x = -999; P.y = -999; };
    const onDown = e => {
      if (still) return;
      ripples.push({ x: e.clientX, y: e.clientY, b: (performance.now() - t0) / 1000, life: 1.8, max: 90, a: 0.16 });
      if (ripples.length > 8) ripples.shift();
    };

    size(); start();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <div className="iw-sky" aria-hidden="true">
      <div className="iw-sky-radiance" />
      <div className="iw-sky-drops" />
      <div className="iw-sky-drops iw-sky-drops-lit" ref={glowRef} />
      <canvas className="iw-sky-canvas" ref={canvasRef} />
    </div>
  );
}
