import { createRoot } from 'react-dom/client';
import Landing from './Landing';
import './fonts.css';
import './styles.css';

// Design defaults, as set in the Claude Design file.
const DEFAULTS = {
  heroStyle: 'Cinematic', // Cinematic | Mosaic | Orbit | Seam | Arch | Your sky | Petals
  presenter: false, // hero switcher bar, plus [ ] and 1–7 keys; ?presenter=true for design reviews
  heroSlides: true,
  motion: true,
  sparkle: 'Subtle', // Subtle | Radiant | Off
  celestial: true,
  advisorName: 'Noor', // Noor | Advisor | Best friend | Co-planner
};

// Any default can be overridden from the URL, e.g. ?heroStyle=Orbit&presenter=false
function readProps() {
  const q = new URLSearchParams(window.location.search);
  const props = { ...DEFAULTS };
  for (const [key, def] of Object.entries(DEFAULTS)) {
    if (!q.has(key)) continue;
    const raw = q.get(key);
    props[key] = typeof def === 'boolean' ? !/^(false|0|off|no)$/i.test(raw) : raw;
  }
  return props;
}

// Photography is served by a third party. If an image fails to load, mark it
// so CSS hides the broken-image glyph and alt text and the tinted frame behind
// it shows instead. Registered before render so no early failure is missed.
document.addEventListener(
  'error',
  e => {
    if (e.target instanceof HTMLImageElement) e.target.dataset.failed = '';
  },
  true,
);

// Arrow keys, Home and End move between tabs in any role="tablist" and select
// the tab they land on, as the ARIA tabs pattern expects.
document.addEventListener('keydown', e => {
  const tab = e.target instanceof Element && e.target.closest('[role="tab"]');
  const list = tab && tab.closest('[role="tablist"]');
  if (!list) return;
  const tabs = [...list.querySelectorAll('[role="tab"]')].filter(t => t.offsetParent !== null);
  const i = tabs.indexOf(tab);
  const next = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
  if (next === undefined || i < 0) return;
  const to = tabs[(next + tabs.length) % tabs.length];
  e.preventDefault();
  to.focus();
  to.click();
});

// No StrictMode: the page logic starts animation loops and listeners on mount,
// and the design runtime it came from mounted exactly once.
createRoot(document.getElementById('root')).render(<Landing {...readProps()} />);
