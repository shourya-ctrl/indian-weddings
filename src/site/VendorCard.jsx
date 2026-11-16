// Vendor card shared by the destination pages: image, category, name,
// speciality and place, with Save (account) and optional Compare.
import { Link } from '../router';
import { paths } from '../routes';
import { categoryById } from '../data/taxonomy';
import { isFeatured } from '../data/vendors';
import { COMPARE_MAX, useSite } from './siteContext';

export function Arrow() {
  return (
    <svg className="pg-arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function SaveIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M10 16.5s-6-3.6-6-8.1A3.4 3.4 0 0110 6a3.4 3.4 0 016 2.4c0 4.5-6 8.1-6 8.1z" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>;
}

// Tapping a card names its photograph so the profile's hero image can morph
// out of it (View Transitions); the name is cleared once the page has changed.
function nameForMorph(e) {
  const img = e.currentTarget.querySelector('img');
  if (!img || !document.startViewTransition) return;
  document.querySelectorAll('[style*="vendor-hero"]').forEach(n => { n.style.viewTransitionName = ''; });
  img.style.viewTransitionName = 'vendor-hero';
}

export default function VendorCard({ vendor, reason, compare = false, headingLevel = 3, index = 0 }) {
  const site = useSite();
  const cat = categoryById(vendor.primaryCategory);
  const chosen = site.compare.includes(vendor.id);
  const full = !chosen && site.compare.length >= COMPARE_MAX;
  const H = `h${headingLevel}`;
  return (
    <article className="pg-card">
      <Link to={paths.vendor(vendor.slug)} className="pg-card-link" onClick={nameForMorph}>
        <span className="pg-frame lamp" data-reveal="arch" style={{ '--i': index % 4 }}><img src={vendor.image} alt={vendor.imageAlt} loading="lazy" decoding="async" /></span>
        <span className="pg-card-cat">{cat ? cat.short : ''}{isFeatured(vendor) ? ' · Featured' : ''}</span>
        <H className="pg-card-name" style={{ margin: '8px 0 0', fontWeight: 400 }}>{vendor.name}</H>
        <span className="pg-card-meta">{vendor.speciality} · {vendor.location}</span>
        {reason ? <span className="pg-card-reason">{reason}</span> : null}
        {vendor.priceGuide ? <span className="pg-card-price">{vendor.priceGuide}</span> : null}
        <span className="pg-arrow-link">View profile<Arrow /></span>
      </Link>
      {compare ? (
        <button type="button" className="pg-compare-toggle" aria-pressed={chosen} disabled={full} onClick={() => site.toggleCompare(vendor.id)} title={full ? 'You can compare up to three' : undefined}>
          <span className="pg-check" aria-hidden="true">{chosen ? '✓' : ''}</span>{chosen ? 'Comparing' : 'Compare'}
        </button>
      ) : null}
      <button type="button" className="pg-save" aria-label={`Save ${vendor.name}`} onClick={() => site.requestAccount('vendor-save', { vendorId: vendor.id, vendorName: vendor.name })}>
        <SaveIcon />
      </button>
    </article>
  );
}
