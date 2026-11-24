// Noor's small mark: her cat-eye sunglasses. Used wherever a face would be
// too literal (the brief rules out a fixed face or a profile avatar).
export default function NoorMark({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="-10 -10 20 20" aria-hidden="true" focusable="false" className={`iws-noor-mark ${className}`}>
      <g className="noor-glasses">
        <path d="M-1.3 -2.6C-1.1 1.4 -2.8 3.6 -5.4 3.6C-8.2 3.6 -9.4 1.2 -9.5 -2.2L-9.9 -4Z" fill="currentColor" />
        <path d="M1.3 -2.6C1.1 1.4 2.8 3.6 5.4 3.6C8.2 3.6 9.4 1.2 9.5 -2.2L9.9 -4Z" fill="currentColor" />
        <path d="M-1.4 -1.7C-.7 -2.7 .7 -2.7 1.4 -1.7" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </g>
    </svg>
  );
}
