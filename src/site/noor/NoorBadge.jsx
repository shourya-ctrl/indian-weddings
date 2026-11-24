// The mark in a gold ring, with a small state. `thinking` has her peer over her
// sunglasses; `suggest` adds a spark; `remind` adds a dot. No pulsing faces.
import NoorMark from './NoorMark';

export default function NoorBadge({ size = 36, state = 'rest', label }) {
  return (
    <span className={`noor-badge is-${state}`} style={{ '--size': `${size}px` }} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : 'true'}>
      <NoorMark size={Math.round(size * 0.56)} />
      {state === 'suggest' ? <span className="noor-badge-spark" /> : null}
      {state === 'remind' ? <span className="noor-badge-dot" /> : null}
    </span>
  );
}
