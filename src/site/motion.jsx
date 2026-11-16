// Motion runtime for destination pages. One IntersectionObserver reveals
// [data-reveal] and .kt elements as they enter; one rAF loop drives
// [data-parallax] layers that are on screen. Under prefers-reduced-motion the
// page renders in its final state and none of this runs.
import { Children, useEffect, useRef, useState } from 'react';

export const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useMotion(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion() || !('IntersectionObserver' in window)) return undefined;
    document.documentElement.setAttribute('data-motion', '');

    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        // Reveal on entry; anything already above the viewport (after a jump,
        // a Back navigation or a restored scroll position) shows at once.
        if (e.isIntersecting || e.boundingClientRect.bottom < 0) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    const layers = new Set();
    const scan = () => {
      root.querySelectorAll('[data-reveal]:not(.is-in), .kt:not(.is-in)').forEach(el => io.observe(el));
      root.querySelectorAll('[data-parallax]').forEach(el => layers.add(el));
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(root, { childList: true, subtree: true });

    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight, k = window.innerWidth < 768 ? 0.5 : 1;
      layers.forEach(el => {
        if (!el.isConnected) { layers.delete(el); return; }
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const f = parseFloat(el.dataset.parallax) || 0.1;
        el.style.setProperty('--py', `${((r.top + r.height / 2 - vh / 2) * -f * k).toFixed(1)}px`);
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    tick();

    return () => {
      io.disconnect(); mo.disconnect(); cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.documentElement.removeAttribute('data-motion');
    };
  }, [rootRef]);
}

/** A headline that fades up once as it enters the viewport (motion.css .kt). */
export function KineticTitle({ as: Tag = 'h1', text, className = '', ...rest }) {
  return <Tag className={`kt ${className}`} {...rest}>{text}</Tag>;
}

/** An endless horizontal strip. Pauses on hover, focus, off screen and under reduced motion. */
export function Marquee({ children, duration = 60, gap = 24, className = '', label }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => el.classList.toggle('is-paused', !e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const items = Children.toArray(children);
  return (
    <div ref={ref} className={`mq ${className}`} style={{ '--mq-dur': `${duration}s`, '--mq-gap': `${gap}px` }} role={label ? 'region' : undefined} aria-label={label}>
      <div className="mq-track">
        {items}
        <div aria-hidden="true" style={{ display: 'contents' }} inert="">{items}</div>
      </div>
    </div>
  );
}

/** A number that counts up once when it comes into view. */
export function CountUp({ to, duration = 1400, className }) {
  const ref = useRef(null);
  const [n, setN] = useState(() => (reducedMotion() ? to : 0));
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion() || !('IntersectionObserver' in window)) { setN(to); return undefined; }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = t => {
        const p = Math.min(1, (t - t0) / duration), eased = 1 - Math.pow(1 - p, 4);
        setN(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  return <span ref={ref} className={className} aria-label={String(to)}><span aria-hidden="true">{n}</span></span>;
}

/** Adds .is-in to a ref'd element once it is in view (for bespoke sequences). */
export function useInView(options = { threshold: 0.35 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) { setInView(true); return undefined; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect(); } }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return [ref, inView];
}
