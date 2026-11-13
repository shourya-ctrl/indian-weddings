import { createRoot } from 'react-dom/client';
import Landing from './Landing';
import './fonts.css';
import './styles.css';

// Design defaults, as set in the Claude Design file.
const DEFAULTS = {
  heroStyle: 'Cinematic', // Cinematic | Mosaic | Orbit | Seam | Arch | Your sky | Petals
  presenter: true, // hero switcher bar, plus [ ] and 1–7 keys
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

// No StrictMode: the page logic starts animation loops and listeners on mount,
// and the design runtime it came from mounted exactly once.
createRoot(document.getElementById('root')).render(<Landing {...readProps()} />);
