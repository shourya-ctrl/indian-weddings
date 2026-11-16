// Compare (/vendors/compare?ids=…): up to three vendors side by side, using
// only fields the listings have. Saving a comparison asks for an account.
import { useEffect } from 'react';
import { Link, navigate, useLocation } from '../../router';
import { paths } from '../../routes';
import SiteShell from '../../site/SiteShell';
import { Arrow } from '../../site/VendorCard';
import { COMPARE_MAX, useSite } from '../../site/siteContext';
import { usePageTitle } from '../../site/usePageTitle';
import { KineticTitle } from '../../site/motion';
import { categoryById } from '../../data/taxonomy';
import { vendorById } from '../../data/vendors';
import './vendor-pages.css';

export default function ComparePage() {
  usePageTitle('Compare');
  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only)">
      <Compare />
    </SiteShell>
  );
}

function Compare() {
  const { query } = useLocation();
  const site = useSite();
  const fromUrl = (query.get('ids') || '').split(',').filter(Boolean);
  const ids = (fromUrl.length ? fromUrl : site.compare).slice(0, COMPARE_MAX);
  const vendors = ids.map(vendorById).filter(Boolean);

  // A shared compare link becomes this visitor's comparison too.
  useEffect(() => {
    if (fromUrl.length && fromUrl.join() !== site.compare.join()) {
      site.clearCompare();
      fromUrl.slice(0, COMPARE_MAX).forEach(id => vendorById(id) && site.toggleCompare(id));
    }
  }, [fromUrl.join()]); // eslint-disable-line react-hooks/exhaustive-deps

  const rows = [
    ['Category', v => (categoryById(v.primaryCategory) || {}).label || '—'],
    ['Speciality', v => v.speciality],
    ['Based in', v => v.location],
    ['Works in', v => v.serviceAreas.join(', ')],
    ['Pricing', v => v.priceGuide || 'Not published'],
  ];

  return (
    <>
      <header className="pg-intro">
        <div className="iws-wrap">
          <ol className="pg-crumbs">
            <li><Link to={paths.vendors}>Vendors</Link></li>
            <li><span aria-current="page">Compare</span></li>
          </ol>
          <KineticTitle className="pg-h1" text="Side by side." />
          <p className="pg-lede">Up to three vendors at once. In your plan, this also shows how each fits your priorities and your budget.</p>
        </div>
      </header>

      <section className="pg-section vp-last" aria-label="Comparison">
        <div className="iws-wrap">
          {vendors.length < 2 ? (
            <div className="pg-empty">
              <p>Choose two or three vendors to compare.</p>
              <Link className="iws-underlined" to={paths.search()}>Browse vendors</Link>
            </div>
          ) : (
            <>
              <div className="vp-compare-actions">
                <button type="button" className="iws-btn iws-btn-primary" onClick={() => site.requestAccount('compare-save', { vendorIds: ids })}>Save comparison</button>
                {vendors.length < COMPARE_MAX ? <Link className="iws-underlined" to={paths.search()}>Add another vendor</Link> : null}
                <p className="pg-note">Sample listings from the IndianWeddings prototype. The names are not real vendors.</p>
              </div>
              <table className="vp-compare" style={{ '--n': vendors.length }}>
                <thead>
                  <tr>
                    <td />
                    {vendors.map(v => (
                      <th key={v.id} scope="col">
                        <span className="pg-frame lamp" data-reveal="arch" style={{ '--i': vendors.indexOf(v) }}><img src={v.image} alt={v.imageAlt} loading="lazy" decoding="async" /></span>
                        <Link to={paths.vendor(v.slug)} className="vp-compare-name">{v.name}</Link>
                        <button type="button" className="vp-compare-remove" onClick={() => { site.toggleCompare(v.id); navigate(paths.compare(ids.filter(x => x !== v.id)), { replace: true }); }} aria-label={`Remove ${v.name}`}>Remove</button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([label, get], r) => (
                    <tr key={label} data-reveal="up" style={{ '--i': r }}>
                      <th scope="row">{label}</th>
                      {vendors.map(v => <td key={v.id} data-vendor={v.name}>{get(v)}</td>)}
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">Next step</th>
                    {vendors.map(v => (
                      <td key={v.id} data-vendor={v.name}>
                        <Link className="pg-arrow-link vp-compare-next" to={paths.vendor(v.slug)}>View profile<Arrow /></Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </>
          )}
        </div>
      </section>
    </>
  );
}
