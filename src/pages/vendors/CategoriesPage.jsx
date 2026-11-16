// All categories (/vendors/categories): an image mosaic of the ten primary
// categories, the nine others as lit tiles, and an index of every service.
// Every service links into results; nothing depends on supply.
import { Link } from '../../router';
import { paths } from '../../routes';
import SiteShell from '../../site/SiteShell';
import { Arrow } from '../../site/VendorCard';
import { CountUp, KineticTitle, Marquee } from '../../site/motion';
import { usePageTitle } from '../../site/usePageTitle';
import { CATEGORIES, EXTENDED_CATEGORIES, PRIMARY_CATEGORIES, categoryImage, typeCount } from '../../data/taxonomy';
import './vendor-pages.css';

const TOTAL_TYPES = CATEGORIES.reduce((a, c) => a + typeCount(c), 0);

export default function CategoriesPage() {
  usePageTitle('All categories');
  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only) and Unsplash">
      <header className="pg-intro vp-cats-intro">
        <div className="iws-wrap">
          <ol className="pg-crumbs" data-reveal="fade">
            <li><Link to={paths.vendors}>Vendors</Link></li>
            <li><span aria-current="page">All categories</span></li>
          </ol>
          <KineticTitle className="pg-h1" text="Every part of the wedding, in one place." />
          <p className="vp-counts" data-reveal="up" style={{ '--i': 5 }}>
            <span><CountUp to={CATEGORIES.length} className="vp-count-n" /> categories</span>
            <span><CountUp to={TOTAL_TYPES} duration={1800} className="vp-count-n" /> services</span>
          </p>
        </div>
        <Marquee duration={80} gap={16} className="vp-cats-strip">
          {PRIMARY_CATEGORIES.map(c => (
            <span key={c.id} className="vp-strip-img"><img src={categoryImage(c.id, 360, 450)} alt="" loading="lazy" decoding="async" /></span>
          ))}
        </Marquee>
      </header>

      <section className="pg-section" aria-labelledby="ac-primary">
        <div className="iws-wrap">
          <div className="pg-head">
            <KineticTitle as="h2" id="ac-primary" text="Where most couples start." />
          </div>
          <ul className="vp-mosaic" role="list">
            {PRIMARY_CATEGORIES.map((c, i) => (
              <li key={c.id} className={`vp-tile-wrap t${i}`}>
                <Link to={paths.category(c.slug)} className="vp-tile lamp" data-reveal="arch" style={{ '--i': i % 4 }}>
                  <img src={categoryImage(c.id, 900, 1100)} alt="" loading="lazy" decoding="async" />
                  <span className="vp-tile-text">
                    <span className="vp-tile-count">{typeCount(c)} services</span>
                    <span className="vp-tile-name">{c.label}</span>
                    <span className="vp-tile-blurb">{c.blurb}</span>
                  </span>
                  <span className="vp-tile-arrow"><Arrow /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pg-section" aria-labelledby="ac-more">
        <div className="iws-wrap">
          <div className="pg-head">
            <KineticTitle as="h2" id="ac-more" text="Everything else the week needs." />
          </div>
          <ul className="vp-lit" role="list">
            {EXTENDED_CATEGORIES.map((c, i) => {
              const img = categoryImage(c.id, 600, 400);
              return (
                <li key={c.id} data-reveal="up" style={{ '--i': i % 3 }}>
                  <Link to={paths.category(c.slug)} className={'vp-lit-tile' + (img ? ' has-image' : '')}>
                    {img ? <span className="vp-lit-img"><img src={img} alt="" loading="lazy" decoding="async" /></span> : null}
                    <span className="vp-lit-count">{typeCount(c)} services</span>
                    <span className="vp-lit-name">{c.label}</span>
                    <span className="vp-lit-blurb">{c.blurb}</span>
                    <span className="vp-lit-rule" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="pg-section vp-last" aria-labelledby="ac-index">
        <div className="iws-wrap">
          <div className="pg-head">
            <KineticTitle as="h2" id="ac-index" text="Every service, by name." />
            <p className="pg-lede" data-reveal="up">Open a category to see every service in it. Each one leads to its results.</p>
          </div>
          <div className="vp-index">
            {CATEGORIES.map(c => (
              <details key={c.id} className="vp-index-cat">
                <summary><span>{c.label}</span><span className="vp-index-n">{typeCount(c)}</span></summary>
                <ul role="list">
                  {c.families.flatMap(f => f.types).map(t => (
                    <li key={t.id}><Link to={paths.search({ category: c.id, type: t.slug })}>{t.name}</Link></li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
