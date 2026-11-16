import { lazy, Suspense, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import Landing from './Landing';
import SiteShell from './site/SiteShell';
import Backdrop from './site/Backdrop';
import { navigate, useLocation } from './router';
import { matchRoute } from './routes';
import './fonts.css';
import './styles.css';

// Design defaults, as set in the Claude Design file.
const DEFAULTS = {
  heroStyle: 'Cinematic', // Cinematic | Mosaic | Orbit | Seam | Arch | Your sky | Petals
  presenter: false, // hero switcher bar, plus [ ] and 1–7 keys; ?presenter=true for design reviews
  heroSlides: true,
  motion: true,
  sparkle: 'Off', // Subtle | Radiant | Off (off by default: the full-screen sparkles pulled focus)
  celestial: false, // constellation overlay; off by default so nothing draws over the copy
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

// Destination pages load on demand, so the homepage bundle stays as it was.
const LOADERS = {
  vendors: () => import('./pages/vendors/VendorsPage'),
  categories: () => import('./pages/vendors/CategoriesPage'),
  category: () => import('./pages/vendors/CategoryPage'),
  search: () => import('./pages/vendors/SearchPage'),
  vendor: () => import('./pages/vendors/VendorProfilePage'),
  compare: () => import('./pages/vendors/ComparePage'),
  noor: () => import('./pages/NoorPage'),
  'our-approach': () => import('./pages/OurApproachPage'),
  'real-weddings': () => import('./pages/stories/RealWeddingsPage'),
  'wedding-story': () => import('./pages/stories/WeddingStoryPage'),
  'edit-story': () => import('./pages/stories/EditStoryPage'),
  'account-create': () => import('./pages/AccountPage'),
  'account-login': () => import('./pages/AccountPage'),
  'not-found': () => import('./pages/NotFoundPage'),
};
const PAGES = Object.fromEntries(Object.entries(LOADERS).map(([k, load]) => [k, lazy(load)]));

// Fetch every page in the background once the first page is idle, so page
// transitions never wait on a download.
const preload = () => Object.values(LOADERS).forEach(load => load().catch(() => {}));
if ('requestIdleCallback' in window) window.requestIdleCallback(preload, { timeout: 4000 });
else setTimeout(preload, 2500);

function App() {
  const { pathname, search } = useLocation();
  const route = matchRoute(pathname);
  // The homepage keeps its own presentation options, read from the URL as before.
  const homeProps = useMemo(() => (route.page === 'home' ? readProps() : null), [route.page, search]);
  useEffect(() => { if (route.page === 'redirect') navigate(route.to, { replace: true }); }, [route.page, route.to]);
  useEffect(() => { if (route.page === 'home') document.title = 'IndianWeddings — A wedding that feels like you'; }, [route.page]);
  // The homepage sits in the same site shell as every other page: one header,
  // one footer, one Ask Noor entry.
  if (route.page === 'home') {
    return (
      <SiteShell home footerCredit="All photography by PTaufiq Photography, used for design review. These are not IndianWeddings couples.">
        <Landing {...homeProps} />
      </SiteShell>
    );
  }
  if (route.page === 'redirect') return null;
  const Page = PAGES[route.page] || PAGES['not-found'];
  return (
    <Suspense fallback={null}>
      <Page key={pathname} {...route.params} mode={route.page === 'account-login' ? 'login' : 'create'} />
    </Suspense>
  );
}

// No StrictMode: the page logic starts animation loops and listeners on mount,
// and the design runtime it came from mounted exactly once.
// The backdrop sits outside the routes so the sky carries on across page changes.
createRoot(document.getElementById('root')).render(<><Backdrop /><App /></>);
