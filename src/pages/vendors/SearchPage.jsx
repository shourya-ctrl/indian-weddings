// Results / Matches (/vendors/search). Query parameters carry the context:
// q, category, type, location, collection, sort. Results are never a dead end:
// plentiful, limited and no-close-match are states of this page, each with a
// way to broaden. Only filters backed by real listing fields are offered.
import { useId } from 'react';
import { Link, navigate, useLocation } from '../../router';
import { paths } from '../../routes';
import SiteShell from '../../site/SiteShell';
import VendorCard from '../../site/VendorCard';
import { usePageTitle } from '../../site/usePageTitle';
import { KineticTitle } from '../../site/motion';
import { categoryImage } from '../../data/taxonomy';
import { CATEGORIES, categoryById } from '../../data/taxonomy';
import { LOCATIONS, VENDOR_RECORDS } from '../../data/vendors';
import { COLLECTIONS } from '../../data/collections';
import './vendor-pages.css';

const fold = s => String(s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');

function readQuery(query) {
  const p = k => (query.get(k) || '').trim();
  return { q: p('q'), category: p('category'), type: p('type'), location: p('location'), collection: p('collection'), sort: p('sort') || 'name' };
}

function results(f) {
  const cat = categoryById(f.category);
  const col = COLLECTIONS.find(c => c.slug === f.collection);
  let list = VENDOR_RECORDS.filter(v => {
    if (cat && !v.categories.includes(cat.id)) return false;
    if (cat && f.type && !v.vendorTypes.includes(`${cat.id}:${f.type}`)) return false;
    if (f.location && !v.serviceAreas.some(a => fold(a) === fold(f.location))) return false;
    if (col && !v.categories.some(id => col.categories.includes(id))) return false;
    if (f.q) {
      const hay = fold([v.name, v.speciality, v.location, ...v.categories.map(id => (categoryById(id) || {}).label)].join(' '));
      if (!fold(f.q).split(/\s+/).every(w => hay.includes(w))) return false;
    }
    return true;
  });
  list = [...list].sort((a, b) => (f.sort === 'location' ? a.location.localeCompare(b.location) || a.name.localeCompare(b.name) : a.name.localeCompare(b.name)));
  return list;
}

/** The broader search to offer: drop the narrowest constraint first. */
function broaden(f) {
  if (f.type) return { ...f, type: '' };
  if (f.q) return { ...f, q: '' };
  if (f.location) return { ...f, location: '' };
  if (f.collection) return { ...f, collection: '' };
  if (f.category) return { ...f, category: '' };
  return null;
}

const toParams = f => ({ q: f.q, category: f.category, type: f.type, location: f.location, collection: f.collection, sort: f.sort === 'name' ? '' : f.sort });

export default function SearchPage() {
  const { query } = useLocation();
  const f = readQuery(query);
  const cat = categoryById(f.category);
  const type = cat && f.type ? cat.families.flatMap(x => x.types).find(t => t.slug === f.type) : null;
  const family = type ? cat.families.find(x => x.types.includes(type)) : null;
  const col = COLLECTIONS.find(c => c.slug === f.collection);
  const list = results(f);
  const wider = broaden(f);
  const state = list.length === 0 ? 'none' : list.length < 3 && wider ? 'limited' : 'plenty';

  const title = type ? type.name : col ? col.title : f.q ? `Results for “${f.q}”` : cat ? cat.label : f.location ? `Vendors in ${f.location}` : 'Every vendor';
  usePageTitle(title);

  const set = patch => navigate(paths.search(toParams({ ...f, ...patch })), { replace: true });
  const uid = useId();
  const filtersId = `${uid}-filters`;

  const chips = [
    type && { label: type.name, clear: { type: '' } },
    cat && !type && { label: cat.label, clear: { category: '', type: '' } },
    f.location && { label: f.location, clear: { location: '' } },
    col && { label: col.title, clear: { collection: '' } },
    f.q && { label: `“${f.q}”`, clear: { q: '' } },
  ].filter(Boolean);

  return (
    <SiteShell compareTray footerCredit="Photography: PTaufiq Photography (design review only)">
      <header className={'pg-intro vp-results-head' + (cat && categoryImage(cat.id) ? ' has-image' : '')}>
        {cat && categoryImage(cat.id) ? <span className="vp-results-bg drift" aria-hidden="true"><img src={categoryImage(cat.id, 1600, 700)} alt="" decoding="async" /></span> : null}
        <div className="iws-wrap">
          <ol className="pg-crumbs">
            <li><Link to={paths.vendors}>Vendors</Link></li>
            {cat ? <li><Link to={paths.category(cat.slug)}>{cat.short}</Link></li> : null}
            <li><span aria-current="page">{type ? type.name : 'Results'}</span></li>
          </ol>
          <KineticTitle key={title} className="pg-h1 vp-results-h1" text={title} />
          {col ? <p className="pg-note">Prototype collection: shows vendors in the categories it draws from ({col.categories.map(id => categoryById(id).short).join(', ')}). No vendors are assigned to it yet.</p> : null}
        </div>
      </header>

      <section className="vp-results" aria-label="Results">
        <div className="iws-wrap">
          <div className="vp-toolbar">
            <form id={filtersId} className="vp-filters" onSubmit={e => e.preventDefault()} aria-label="Filter and sort">
              <label>
                <span className="pg-label">Category</span>
                <select value={cat ? cat.id : ''} onChange={e => set({ category: e.target.value, type: '' })}>
                  <option value="">All categories</option>
                  {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
              </label>
              <label>
                <span className="pg-label">Location</span>
                <select value={f.location} onChange={e => set({ location: e.target.value })}>
                  <option value="">Anywhere</option>
                  {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </label>
              <label>
                <span className="pg-label">Sort</span>
                <select value={f.sort} onChange={e => set({ sort: e.target.value })}>
                  <option value="name">Name</option>
                  <option value="location">Location</option>
                </select>
              </label>
            </form>
            {chips.length ? (
              <ul className="vp-chips" role="list" aria-label="Active filters">
                {chips.map(c => (
                  <li key={c.label}><button type="button" onClick={() => set(c.clear)} aria-label={`Remove ${c.label}`}>{c.label}<span aria-hidden="true">×</span></button></li>
                ))}
              </ul>
            ) : null}
          </div>

          <p className="vp-count" role="status">
            {state === 'none' ? 'No close matches' : `${list.length} ${list.length === 1 ? 'vendor' : 'vendors'}`}
            <span className="pg-note"> · Sample listings from the IndianWeddings prototype. The names are not real vendors.</span>
          </p>

          {state === 'none' ? (
            <div className="vp-none" data-reveal="up">
              <h2>We couldn’t find a close match yet.</h2>
              <p>{type ? `No listed vendor offers ${type.name.toLowerCase()} yet.` : 'Nothing listed matches all of these at once.'} Broaden the search, or change what you are looking for.</p>
              <div className="vp-none-actions">
                {wider ? <Link className="iws-btn iws-btn-primary" to={paths.search(toParams(wider))}>Broaden the search</Link> : null}
                <a className="iws-btn iws-btn-ghost" href={`#${filtersId}`} onClick={e => { e.preventDefault(); const s = document.querySelector(`#${CSS.escape(filtersId)} select`); if (s) s.focus(); }}>Adjust filters</a>
              </div>
            </div>
          ) : (
            <>
              {state === 'limited' ? (
                <p className="vp-limited">{list.length === 1 ? 'One close match so far.' : 'Two close matches so far.'} <Link className="vp-inline" to={paths.search(toParams(wider))}>Broaden the search</Link> to see more.</p>
              ) : null}
              <ul key={list.map(v => v.id).join()} className="pg-cards vp-grid-3" role="list">
                {list.map((v, n) => <li key={v.id}><VendorCard vendor={v} compare headingLevel={2} index={n} /></li>)}
              </ul>
            </>
          )}

          {family ? (
            <div className="vp-related">
              <h2 className="vp-group-h">Close to what you asked for</h2>
              <ul role="list" className="vp-typelist vp-typelist-inline">
                {family.types.filter(t => t !== type).map(t => (
                  <li key={t.id}><Link to={paths.search({ category: cat.id, type: t.slug })}><span>{t.name}</span></Link></li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </SiteShell>
  );
}
