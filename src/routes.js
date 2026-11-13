// Public website routes and the helpers that build links to them.
// Static segments are matched before dynamic ones, and the static vendor
// segments are reserved so a vendor slug can never shadow them.

export const RESERVED_VENDOR_SLUGS = ['categories', 'search', 'compare'];

export const paths = {
  home: '/',
  noor: '/noor',
  vendors: '/vendors',
  categories: '/vendors/categories',
  category: slug => `/vendors/categories/${encodeURIComponent(slug)}`,
  search: params => withQuery('/vendors/search', params),
  vendor: slug => `/vendors/${encodeURIComponent(slug)}`,
  compare: ids => withQuery('/vendors/compare', { ids: ids && ids.join(',') }),
  realWeddings: '/real-weddings',
  ourApproach: '/our-approach',
  accountCreate: params => withQuery('/account/create', params),
  accountLogin: params => withQuery('/account/login', params),
  privacy: '/privacy',
  terms: '/terms',
  contact: '/contact',
};

/** Builds a path with query parameters, skipping empty values. */
export function withQuery(path, params) {
  if (!params) return path;
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== null && v !== '') q.set(k, String(v));
  const s = q.toString();
  return s ? `${path}?${s}` : path;
}

/**
 * Resolves a pathname to a page key. Order matters: static paths first,
 * then dynamic ones. Pages not built yet resolve to "pending" so they show
 * the not-found page with navigation rather than a blank screen.
 */
export function matchRoute(pathname) {
  if (pathname === '/') return { page: 'home' };
  if (pathname === '/vendors') return { page: 'vendors' };
  if (pathname === '/vendors/categories') return { page: 'pending', name: 'All categories' };
  if (pathname === '/vendors/search') return { page: 'pending', name: 'Vendor results' };
  if (pathname === '/vendors/compare') return { page: 'pending', name: 'Compare' };
  let m = /^\/vendors\/categories\/([^/]+)$/.exec(pathname);
  if (m) return { page: 'pending', name: 'Category', params: { categorySlug: decodeURIComponent(m[1]) } };
  m = /^\/vendors\/([^/]+)$/.exec(pathname);
  if (m && !RESERVED_VENDOR_SLUGS.includes(m[1])) return { page: 'pending', name: 'Vendor profile', params: { vendorSlug: decodeURIComponent(m[1]) } };
  if (['/noor', '/real-weddings', '/our-approach', '/account/create', '/account/login', '/privacy', '/terms', '/contact'].includes(pathname)) {
    return { page: 'pending', name: pathname.slice(1) };
  }
  return { page: 'not-found' };
}

/** Which primary navigation item a path belongs to. */
export function activeSection(pathname) {
  if (pathname === '/noor' || pathname.startsWith('/noor/')) return 'noor';
  if (pathname === '/vendors' || pathname.startsWith('/vendors/')) return 'vendors';
  if (pathname === '/real-weddings' || pathname.startsWith('/real-weddings/')) return 'real-weddings';
  if (pathname === '/our-approach') return 'our-approach';
  return null;
}
