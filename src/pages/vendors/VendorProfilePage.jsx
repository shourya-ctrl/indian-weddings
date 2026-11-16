// Public vendor profile (/vendors/:vendorSlug). Shows only the fields the
// listing actually has; anything a published profile will add is named, not
// invented. Enquiry, availability and save ask for an account.
import { Link } from '../../router';
import { paths } from '../../routes';
import SiteShell from '../../site/SiteShell';
import VendorCard, { SaveIcon } from '../../site/VendorCard';
import { COMPARE_MAX, useSite } from '../../site/siteContext';
import { usePageTitle } from '../../site/usePageTitle';
import { KineticTitle } from '../../site/motion';
import { categoryById } from '../../data/taxonomy';
import { VENDOR_RECORDS, vendorBySlug } from '../../data/vendors';
import NotFoundPage from '../NotFoundPage';
import './vendor-pages.css';

export default function VendorProfilePage({ vendorSlug }) {
  const v = vendorBySlug(vendorSlug);
  usePageTitle(v ? v.name : 'Page not found');
  if (!v) return <NotFoundPage />;
  return (
    <SiteShell compareTray footerCredit="Photography: PTaufiq Photography (design review only)">
      <Profile v={v} />
    </SiteShell>
  );
}

function Profile({ v }) {
  const { requestAccount, openNoor, compare, toggleCompare } = useSite();
  const cat = categoryById(v.primaryCategory);
  const more = VENDOR_RECORDS.filter(x => x.id !== v.id && x.categories.includes(v.primaryCategory)).slice(0, 3);
  const chosen = compare.includes(v.id);
  const full = !chosen && compare.length >= COMPARE_MAX;
  const details = { vendorId: v.id, vendorName: v.name };

  return (
    <>
      <header className="pg-intro">
        <div className="iws-wrap">
          <ol className="pg-crumbs">
            <li><Link to={paths.vendors}>Vendors</Link></li>
            {cat ? <li><Link to={paths.category(cat.slug)}>{cat.short}</Link></li> : null}
            <li><span aria-current="page">{v.name}</span></li>
          </ol>
        </div>
        <div className="iws-wrap vp-profile">
          <span className="pg-frame vp-profile-img drift"><img src={v.image} alt={v.imageAlt} fetchpriority="high" decoding="async" style={{ viewTransitionName: 'vendor-hero' }} /></span>
          <div className="vp-profile-text">
            <KineticTitle className="pg-h1" text={v.name} />
            <p className="pg-lede" data-reveal="up" style={{ '--i': 3 }}>{v.speciality}, based in {v.location}.</p>
            {cat ? <p className="vp-profile-cat" data-reveal="up" style={{ '--i': 4 }}><Link to={paths.category(cat.slug)}>{cat.label}</Link></p> : null}
            {v.sample ? <p className="vp-sample" data-reveal="up" style={{ '--i': 5 }}>Sample listing from the IndianWeddings prototype. This is not a real vendor, and the photograph is by PTaufiq Photography.</p> : null}
            <div className="vp-actions" data-reveal="up" style={{ '--i': 6 }}>
              <button type="button" className="iws-btn iws-btn-primary" onClick={() => requestAccount('vendor-enquiry', details)}>Send an enquiry</button>
              <button type="button" className="iws-btn iws-btn-ghost" onClick={() => requestAccount('vendor-availability', details)}>Check availability</button>
            </div>
            <div className="vp-actions-quiet" data-reveal="up" style={{ '--i': 7 }}>
              <button type="button" onClick={() => requestAccount('vendor-save', details)}><SaveIcon /> Save</button>
              <button type="button" aria-pressed={chosen} disabled={full} onClick={() => toggleCompare(v.id)}>
                <span className="pg-check" aria-hidden="true">{chosen ? '✓' : ''}</span>{chosen ? 'Comparing' : 'Compare'}
              </button>
              <button type="button" onClick={() => openNoor(`Is ${v.name} right for our wedding?`)}>Ask Noor about {v.name}</button>
            </div>
          </div>
        </div>
      </header>

      <section className="pg-section" aria-labelledby="vp-about">
        <div className="iws-wrap vp-about">
          <div className="pg-head">
            <KineticTitle as="h2" id="vp-about" text="At a glance" />
          </div>
          <dl className="pg-facts" data-reveal="up">
            <div><dt>Category</dt><dd>{cat ? <Link className="vp-inline" to={paths.category(cat.slug)}>{cat.label}</Link> : '—'}</dd></div>
            <div><dt>Speciality</dt><dd>{v.speciality}</dd></div>
            <div><dt>Based in</dt><dd>{v.location}</dd></div>
            <div><dt>Works in</dt><dd>{v.serviceAreas.join(', ')}</dd></div>
            <div><dt>Pricing</dt><dd>{v.priceGuide || 'Not published yet. Ask the vendor in your enquiry.'}</dd></div>
          </dl>
          {v.sample ? (
            <p className="pg-note vp-about-note">A published profile adds the vendor’s own description, services and packages, a portfolio, pricing guidance and the weddings they have worked on.</p>
          ) : null}
        </div>
      </section>

      {more.length ? (
        <section className="pg-section vp-last" aria-labelledby="vp-more">
          <div className="iws-wrap">
            <div className="pg-head pg-head-row">
              <KineticTitle as="h2" id="vp-more" text={`More in ${cat.short.toLowerCase()}`} />
              <Link className="iws-underlined" to={paths.search({ category: cat.id })}>See every vendor</Link>
            </div>
            <ul className="pg-cards vp-grid-3" role="list">
              {more.map((x, n) => <li key={x.id}><VendorCard vendor={x} compare index={n} /></li>)}
            </ul>
          </div>
        </section>
      ) : <div className="vp-last" />}
    </>
  );
}
