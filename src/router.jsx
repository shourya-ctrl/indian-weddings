// A small client-side router for the public website. The site has a handful of
// destination pages, so this avoids a routing dependency: paths are matched
// against the route table in routes.js, links use the History API, and the
// browser's back and forward buttons work as normal.
import { useSyncExternalStore } from 'react';

const NAV_EVENT = 'iw:navigate';

function subscribe(cb) {
  window.addEventListener('popstate', cb);
  window.addEventListener(NAV_EVENT, cb);
  return () => {
    window.removeEventListener('popstate', cb);
    window.removeEventListener(NAV_EVENT, cb);
  };
}
const snapshot = () => window.location.pathname + window.location.search;

/** Current path and search string; re-renders on navigation. */
export function useLocation() {
  const href = useSyncExternalStore(subscribe, snapshot);
  const url = new URL(href, window.location.origin);
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
  if (hard) { window.location.assign(to); return; }
  const url = new URL(to, window.location.href);
  if (url.origin !== window.location.origin) { window.location.assign(to); return; }
  const same = url.pathname === window.location.pathname && url.search === window.location.search;
  window.history[replace ? 'replaceState' : 'pushState']({}, '', url.pathname + url.search + url.hash);
  window.dispatchEvent(new Event(NAV_EVENT));
  if (url.hash) {
    const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (el) { el.scrollIntoView(); return; }
  }
  if (!same) window.scrollTo(0, 0);
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
