// The night sky behind every page. Three quiet layers:
//  - radiance: warm pools of gold light that shift as the page scrolls
//  - the astrology sky (sky.js): stars and the Milky Way, the rashi wheel, the
//    moon and Shukra, and Saptarishi pointing to Dhruva, turning with scroll
//  - glitter: sparse specks that twinkle, and shimmer a little while scrolling
//
// All of it is meant to be noticed only if you look for it: it sits behind the
// content (z-index -1) at low opacity, so copy and photographs always lead.
// Capped at ~30fps, paused while the tab is hidden, and a still frame under
// prefers-reduced-motion.
import { useEffect, useRef } from 'react';
import { reducedMotion } from './motion';
import Sky from './sky';
import './backdrop.css';

const GOLD = '232,209,154';
const IVORY = '244,238,228';

export default function Backdrop() {
  const rootRef = useRef(null);
  const skyRef = useRef(null);
  const glitterRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current, skyCv = skyRef.current, cv = glitterRef.current;
    if (!root || !skyCv || !cv) return undefined;
    const still = reducedMotion();
    const g = cv.getContext('2d');
    const sky = new Sky(skyCv, still);
    const R = Math.random;
    let W = 0, H = 0, specks = [], raf = 0, last = 0, lastY = window.scrollY || 0, energy = 0;
    const t0 = performance.now();

    const size = () => {
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W; cv.height = H; // soft specks look the same at 1x
      const n = Math.round((W * H) / 30000);
      specks = Array.from({ length: n }, () => ({
        x: R() * W, y: R() * H * 2, d: 0.1 + R() * 0.25, r: 0.5 + Math.pow(R(), 3) * 1.2,
        a: 0.08 + R() * 0.22, f: 0.2 + R() * 0.5, ph: R() * 6.283, gold: R() < 0.5,
      }));
      sky.sizeSky();
    };

    const drawGlitter = t => {
      const sy = window.scrollY || 0, FH = H * 2;
      g.clearRect(0, 0, W, H);
      g.globalCompositeOperation = 'lighter';
      for (const s of specks) {
        let y = (s.y - sy * s.d) % FH; if (y < 0) y += FH; if (y > H + 4) continue;
        const tw = still ? 0.6 : 0.5 + 0.5 * Math.sin(t * s.f + s.ph);
        // Scrolling lifts the glitter slightly, then it settles back.
        const a = Math.min(0.6, s.a * (0.3 + 0.7 * tw * tw) * (1 + energy * 1.6));
        g.fillStyle = `rgba(${s.gold ? GOLD : IVORY},${a})`;
        g.fillRect(s.x - s.r / 2, y - s.r / 2, s.r, s.r);
      }
      g.globalCompositeOperation = 'source-over';
    };

    const frame = now => {
      const t = (now - t0) / 1000, y = window.scrollY || 0;
      energy = Math.min(1, energy * 0.9 + Math.min(1, Math.abs(y - lastY) / 60) * 0.25);
      lastY = y;
      // Radiance follows scroll progress: the light drifts down the page as you read.
      const prog = y / Math.max(1, document.documentElement.scrollHeight - H);
      root.style.setProperty('--sky-p', prog.toFixed(4));
      sky.drawSky(now);
      drawGlitter(t);
    };

    const loop = now => {
      raf = requestAnimationFrame(loop);
      if (now - last < 33) return;
      last = now; frame(now);
    };
    const start = () => {
      cancelAnimationFrame(raf);
      if (still) { frame(performance.now()); return; }
      if (document.visibilityState !== 'hidden') raf = requestAnimationFrame(loop);
    };
    const onResize = () => { size(); start(); };
    const onScroll = () => { if (still) frame(performance.now()); };

    size(); start();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', start);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', start);
    };
  }, []);

  return (
    <div className="iw-sky" ref={rootRef} aria-hidden="true">
      <div className="iw-sky-radiance" />
      <canvas className="iw-sky-stars" ref={skyRef} />
      <canvas className="iw-sky-glitter" ref={glitterRef} />
    </div>
  );
}
