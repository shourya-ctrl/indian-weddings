// Noor's mark as a living object: three orbits turning at different speeds,
// motes travelling along them, and a breathing core. Matches the homepage orb.
// Static under prefers-reduced-motion.
import { useId } from 'react';

export default function NoorOrb({ className = '' }) {
  // Each orb gets its own gradient ID so two on one page don't collide.
  const glow = `noor-glow-${useId().replace(/:/g, '')}`;
  return (
    <svg className={`noor-orb ${className}`} viewBox="0 0 240 240" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={glow} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#F0DDB3" stopOpacity=".55" />
          <stop offset=".35" stopColor="#C9A96E" stopOpacity=".18" />
          <stop offset="1" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="118" fill={`url(#${glow})`} className="noor-orb-glow" />
      <g className="noor-orb-ring r1"><ellipse cx="120" cy="120" rx="108" ry="32" /><circle cx="228" cy="120" r="2.6" className="noor-orb-mote" /></g>
      <g className="noor-orb-ring r2"><ellipse cx="120" cy="120" rx="108" ry="40" transform="rotate(60 120 120)" /><circle cx="66" cy="213.5" r="2" className="noor-orb-mote" /></g>
      <g className="noor-orb-ring r3"><ellipse cx="120" cy="120" rx="108" ry="48" transform="rotate(120 120 120)" /><circle cx="66" cy="26.5" r="2.2" className="noor-orb-mote" /></g>
      <circle cx="120" cy="120" r="20" className="noor-orb-core" />
    </svg>
  );
}
