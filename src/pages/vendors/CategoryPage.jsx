// Category (/vendors/categories/:categorySlug): a photographic hero, then the
// services as lit rows that lead to results, the category's vendors and nearby
// categories. Every service links to results whether or not vendors are listed.
import { Link } from '../../router';
import { paths } from '../../routes';
import SiteShell from '../../site/SiteShell';
import VendorCard, { Arrow } from '../../site/VendorCard';
import { CountUp, KineticTitle } from '../../site/motion';
import { usePageTitle } from '../../site/usePageTitle';
import { CATEGORIES, categoryById, categoryImage, typeCount } from '../../data/taxonomy';
import { VENDOR_RECORDS } from '../../data/vendors';
import NotFoundPage from '../NotFoundPage';
import './vendor-pages.css';

export default function CategoryPage({ categorySlug }) {
  const c = categoryById(categorySlug);
  usePageTitle(c ? c.label : 'Page not found');
  if (!c) return <NotFoundPage />;

  const img = categoryImage(c.id, 1800, 1200);
  const vendors = VENDOR_RECORDS.filter(v => v.categories.includes(c.id));
  const i = CATEGORIES.indexOf(c);
  const nearby = [1, 2, 3].map(n => CATEGORIES[(i + n) % CATEGORIES.length]);
  let row = 0;

  return (
    <SiteShell compareTray footerCredit="Photography: PTaufiq Photography (design review only) and Unsplash">
      <header className={'vp-hero' + (img ? '' : ' is-lit')}>
        {img ? <span className="vp-hero-img drift" data-parallax="0.12"><img src={img} alt="" fetchpriority="high" decoding="async" /></span> : <span className="vp-hero-glow" aria-hidden="true" />}
        <div className="iws-wrap vp-hero-text">
          <ol className="pg-crumbs" data-reveal="fade">
            <li><Link to={paths.vendors}>Vendors</Link></li>
            <li><Link to={paths.categories}>All categories</Link></li>
            <li><span aria-current="page">{c.short}</span></li>
          </ol>
          <KineticTitle className="pg-h1 vp-hero-h1" text={c.label} />
          <p className="pg-lede" data-reveal="up" style={{ '--i': 4 }}>{c.blurb}</p>
          <p className="vp-hero-meta" data-reveal="up" style={{ '--i': 6 }}>
            <span><CountUp to={typeCount(c)} className="vp-count-n" /> services</span>
            <Link className="vp-hero-link" to={paths.search({ category: c.id })}>See every vendor<Arrow /></Link>
          </p>
        </div>
      </header>

      <section className="pg-section" aria-labelledby="cp-types">
        <div className="iws-wrap">
          <div className="pg-head">
            <KineticTitle as="h2" id="cp-types" text="What are you looking for?" />
            <p className="pg-lede" data-reveal="up">Choose a service to see the vendors who offer it.</p>
          </div>
          <div className="vp-families">
            {c.families.map(f => (
              <div key={f.name} className="vp-family-block">
                <h3 className="vp-family-h" data-reveal="up"><span>{f.name}</span><span className="vp-family-n">{f.types.length}</span></h3>
                <span className="vp-family-rule" data-reveal="wipe" aria-hidden="true" />
                <ul role="list" className="vp-typelist">
                  {f.types.map(t => (
                    <li key={t.id} data-reveal="up" style={{ '--i': (row++) % 6 }}>
                      <Link to={paths.search({ category: c.id, type: t.slug })}>
                        <span>{t.name}</span><Arrow />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section" aria-labelledby="cp-vendors">
        <div className="iws-wrap">
          <div className="pg-head pg-head-row">
            <div>
              <KineticTitle as="h2" id="cp-vendors" text={`In ${c.short.toLowerCase()}`} />
              {vendors.length ? <p className="pg-note">Sample listings from the IndianWeddings prototype. The names are not real vendors.</p> : null}
            </div>
            <Link className="iws-underlined" to={paths.search({ category: c.id })}>See every vendor</Link>
          </div>
          {vendors.length ? (
            <ul className="pg-cards vp-grid-3" role="list">
              {vendors.slice(0, 3).map((v, n) => <li key={v.id}><VendorCard vendor={v} compare index={n} /></li>)}
            </ul>
          ) : (
            <div className="pg-empty" data-reveal="up">
              <p>No vendors are listed in {c.label.toLowerCase()} yet.</p>
              <Link className="iws-underlined" to={paths.search()}>Search every vendor</Link>
            </div>
          )}
        </div>
      </section>

      <section className="pg-section vp-last" aria-labelledby="cp-near">
        <div className="iws-wrap">
          <div className="pg-head"><KineticTitle as="h2" id="cp-near" text="Nearby categories" /></div>
          <ul className="vp-lit vp-lit-3" role="list">
            {nearby.map((n, k) => {
              const nImg = categoryImage(n.id, 600, 400);
              return (
                <li key={n.id} data-reveal="up" style={{ '--i': k }}>
                  <Link to={paths.category(n.slug)} className={'vp-lit-tile' + (nImg ? ' has-image' : '')}>
                    {nImg ? <span className="vp-lit-img"><img src={nImg} alt="" loading="lazy" decoding="async" /></span> : null}
                    <span className="vp-lit-count">{typeCount(n)} services</span>
                    <span className="vp-lit-name">{n.label}</span>
                    <span className="vp-lit-blurb">{n.blurb}</span>
                    <span className="vp-lit-rule" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
