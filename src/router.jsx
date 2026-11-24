// A small client-side router for the public website. The site has a handful of
// destination pages, so this avoids a routing dependency: paths are matched
// against the route table in routes.js, links use the History API, and the
// browser's back and forward buttons work as normal.
import { useSyncExternalStore } from 'react';
import { flushSync } from 'react-dom';

const NAV_EVENT = 'iw:navigate';

// The standalone single-file build (npm run standalone) opens from disk, where
// the address bar holds a file path. There the router keeps the current page
// in memory instead, starting at VITE_START_PATH; the normal build is unchanged.
const START = import.meta.env.VITE_START_PATH;
const BASE = START ? 'https://indianweddings.local' : null;
let memPath = START || '/';
const origin = () => BASE || window.location.origin;

/** The current path and search string, wherever the router keeps them. */
export const currentPath = () => (BASE ? memPath : window.location.pathname + window.location.search);

function subscribe(cb) {
  window.addEventListener('popstate', cb);
  window.addEventListener(NAV_EVENT, cb);
  return () => {
    window.removeEventListener('popstate', cb);
    window.removeEventListener(NAV_EVENT, cb);
  };
}
const snapshot = currentPath;

/** Current path and search string; re-renders on navigation. */
export function useLocation() {
  const href = useSyncExternalStore(subscribe, snapshot);
  const url = new URL(href, origin());
  return { pathname: normalisePath(url.pathname), search: url.search, query: url.searchParams };
}

/** Strips a trailing slash, keeping "/" itself. */
export function normalisePath(p) {
  return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
}

/**
 * Client-side navigation. Paths handled by another document (the homepage keeps
 * its own lifecycle) can be forced to a full load with { hard: true }.
 */
export function navigate(to, { replace = false, hard = false } = {}) {
  if (BASE) {
    // Standalone file: switch pages in memory.
    const url = new URL(to, BASE + memPath);
    if (url.origin !== BASE) { window.location.assign(to); return; }
    const same = url.pathname + url.search === memPath;
    memPath = url.pathname + url.search;
    window.dispatchEvent(new Event(NAV_EVENT));
    const el = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (el) el.scrollIntoView(); else if (!same) window.scrollTo(0, 0);
    return;
  }
  if (hard) { window.location.assign(to); return; }
  const url = new URL(to, window.location.href);
  if (url.origin !== window.location.origin) { window.location.assign(to); return; }
  const same = url.pathname === window.location.pathname && url.search === window.location.search;
  const animate = !same && !replace && document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const update = () => {
    window.history[replace ? 'replaceState' : 'pushState']({}, '', url.pathname + url.search + url.hash);
    // A view transition needs the new page rendered before its snapshot.
    if (animate) flushSync(() => window.dispatchEvent(new Event(NAV_EVENT)));
    else window.dispatchEvent(new Event(NAV_EVENT));
    if (url.hash) {
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (el) { el.scrollIntoView(); return; }
    }
    if (!same) window.scrollTo(0, 0);
  };
  // Between pages (not filter changes on the same page), browsers with View
  // Transitions crossfade, and a shared photograph can morph into place.
  if (animate) document.startViewTransition(update);
  else update();
}

/** An anchor that navigates in-app unless the visitor asks for a new tab or window. */
export function Link({ to, hard = false, onClick, children, ...rest }) {
  const handle = e => {
    if (onClick) onClick(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (rest.target && rest.target !== '_self') return;
    e.preventDefault();
    navigate(to, { hard });
  };
  return <a href={to} onClick={handle} {...rest}>{children}</a>;
}
