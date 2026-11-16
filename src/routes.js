// Public website routes and the helpers that build links to them.
// Static segments are matched before dynamic ones, and the static vendor
// segments are reserved so a vendor slug can never shadow them.

// Privacy, Terms and Contact are linked only once those pages exist (they need
// legal text and a contact address). Until then no link leads to a missing page.
export const LEGAL_PAGES_LIVE = false;

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
  realWeddingsView: view => withQuery('/real-weddings', { view: view === 'all' ? '' : view }),
  weddingStory: slug => `/real-weddings/${encodeURIComponent(slug)}`,
  editStory: slug => `/real-weddings/the-edit/${encodeURIComponent(slug)}`,
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
 * Resolves a pathname to a page key and its params. Static paths are matched
 * before dynamic ones; unknown paths resolve to "not-found".
 */
export function matchRoute(pathname) {
  const statics = {
    '/': 'home',
    '/vendors': 'vendors',
    '/vendors/categories': 'categories',
    '/vendors/search': 'search',
    '/vendors/compare': 'compare',
    '/noor': 'noor',
    '/our-approach': 'our-approach',
    '/real-weddings': 'real-weddings',
    '/account/create': 'account-create',
    '/account/login': 'account-login',
  };
  if (statics[pathname]) return { page: statics[pathname], params: {} };
  if (pathname === '/real-weddings/the-edit') return { page: 'redirect', to: '/real-weddings?view=the-edit' };
  let m = /^\/vendors\/categories\/([^/]+)$/.exec(pathname);
  if (m) return { page: 'category', params: { categorySlug: decodeURIComponent(m[1]) } };
  m = /^\/real-weddings\/the-edit\/([^/]+)$/.exec(pathname);
  if (m) return { page: 'edit-story', params: { storySlug: decodeURIComponent(m[1]) } };
  m = /^\/real-weddings\/([^/]+)$/.exec(pathname);
  if (m) return { page: 'wedding-story', params: { weddingSlug: decodeURIComponent(m[1]) } };
  m = /^\/vendors\/([^/]+)$/.exec(pathname);
  if (m && !RESERVED_VENDOR_SLUGS.includes(m[1])) return { page: 'vendor', params: { vendorSlug: decodeURIComponent(m[1]) } };
  return { page: 'not-found', params: {} };
}

/** Which primary navigation item a path belongs to. */
export function activeSection(pathname) {
  if (pathname === '/noor' || pathname.startsWith('/noor/')) return 'noor';
  if (pathname === '/vendors' || pathname.startsWith('/vendors/')) return 'vendors';
  if (pathname === '/real-weddings' || pathname.startsWith('/real-weddings/')) return 'real-weddings';
  if (pathname === '/our-approach') return 'our-approach';
  return null;
}
