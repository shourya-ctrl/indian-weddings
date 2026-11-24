// One of Noor's emotional states as artwork (see states.js). Art files dropped
// into src/assets/noor/states/ are picked up by name; until then a labelled
// "artwork in production" frame stands in, so nothing pretends to be final art.
// The illustration rises in gently once; still under prefers-reduced-motion.
import { useEffect, useRef } from 'react';
import { reducedMotion } from '../motion';
import NoorMark from './NoorMark';
import { NOOR_STATES } from './states';
import './noor.css';

const ART = import.meta.glob('../../assets/noor/states/*.{webp,png}', { eager: true, query: '?url', import: 'default' });
const artFor = file => {
  const hit = Object.keys(ART).find(k => k.endsWith(`/${file}.webp`)) || Object.keys(ART).find(k => k.endsWith(`/${file}.png`));
  return hit ? ART[hit] : null;
};

export default function NoorIllustration({ state = 'welcome', className = '', decorative = false }) {
  const s = NOOR_STATES[state] || NOOR_STATES.welcome;
  const src = artFor(s.file);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion() || !('IntersectionObserver' in window)) return undefined;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return undefined;
    el.classList.add('is-hidden');
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      el.classList.remove('is-hidden');
      io.disconnect();
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <figure ref={ref} className={`noor-ill noor-ill-${state} ${src ? 'has-art' : 'is-pending'} ${className}`} style={{ '--aspect': s.aspect || '1 / 1' }}>
      <span className="noor-ill-disc" aria-hidden="true" />
      {src ? (
        <img src={src} alt={decorative ? '' : s.alt} decoding="async" loading="lazy" draggable="false" />
      ) : (
        <span className="noor-ill-slot">
          <NoorMark size={34} />
          <span className="noor-ill-eyebrow">Artwork in production</span>
          <span className="noor-ill-name">{s.name}</span>
          <span className="noor-ill-brief">{s.brief}</span>
        </span>
      )}
    </figure>
  );
}
