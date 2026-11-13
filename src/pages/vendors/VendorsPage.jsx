// Vendors landing page (/vendors).
// Sections, in discovery order: introduction and search · best fit or curated
// discovery · explore by category · collections · professionals · Noor.
// Data rules: categories come from the canonical taxonomy; vendors are the
// homepage's sample listings and are labelled as such; collections are
// prototype fixtures and are labelled as such. Nothing here is a rating,
// price, endorsement or personalised score.
import { useEffect, useState } from 'react';
import { Link } from '../../router';
import { paths } from '../../routes';
import { IWU } from '../../landingLogic';
import { APP_LIVE, APP_URL } from '../../links';
import SiteShell from '../../site/SiteShell';
import { useSite } from '../../site/siteContext';
import { hasCompleteProfile } from '../../site/session';
import { categoryById, categoryImage, EXTENDED_CATEGORIES, PRIMARY_CATEGORIES, typeCount } from '../../data/taxonomy';
import { VENDOR_RECORDS, isFeatured } from '../../data/vendors';
import { COLLECTIONS } from '../../data/collections';
import VendorSearch from './VendorSearch';
import './vendors.css';

const SEARCH_EXAMPLES = [
  { label: 'mandap designer', to: paths.search({ category: 'decor', type: 'mandap-designer-and-builder' }) },
  { label: 'cinematic filmmaker', to: paths.search({ category: 'photo', type: 'cinematic-wedding-filmmaker' }) },
  { label: 'Udaipur', to: paths.search({ location: 'Udaipur' }) },
];

const SAMPLE_NOTE = 'Sample listings from the IndianWeddings prototype, shown with PTaufiq Photography images. The names are not real vendors.';

export default function VendorsPage() {
  useEffect(() => {
    document.title = 'Vendors · IndianWeddings';
  }, []);
  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only) and Unsplash">
      <Intro />
      <BestFit />
      <Categories />
      <Collections />
      <Professionals />
      <NoorLink />
    </SiteShell>
  );
}

/* 01 · Introduction and search */
function Intro() {
  return (
    <section className="vd-intro" aria-labelledby="vd-intro-h">
      <div className="iws-wrap vd-intro-grid">
        <div className="vd-intro-copy">
          <h1 id="vd-intro-h">The right people make the celebration.</h1>
          <p className="vd-lede">Discover exceptional professionals for every detail of your wedding.</p>
          <VendorSearch examples={SEARCH_EXAMPLES} />
        </div>
        <figure className="vd-intro-figure">
          <div className="vd-arch">
            <img src={IWU + '2025/08/destination-wedding-venue-ptaufiq-photography.jpg'} alt="A couple on desert dunes" fetchpriority="high" decoding="async" />
          </div>
          <figcaption>Photography: PTaufiq Photography</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* 02 · Best fit (signed in, complete profile) or curated discovery */
const STARTS = [
  { cat: 'venues', title: 'Begin with the place.', body: 'The venue sets your dates, your guest count and the feel of every function, so most plans start here.', img: IWU + '2025/08/luxury-wedding-photography-boston-ptaufiq.jpg', alt: 'A couple in the mountains', link: 'Explore venues' },
  { cat: 'planning', title: 'Then the people who run it.', body: 'A planner or coordinator holds the week together, from the first site visit to the last send-off.', img: IWU + '2024/07/ptaufiq-indian-wedding-gotham-hall-newyork-mehendi2.jpg', alt: 'Hands with bridal mehendi', link: 'Explore planners' },
  { cat: 'photo', title: 'And the people who keep it.', body: 'Photographers and filmmakers work across every function, so they are worth choosing once your dates are set.', img: IWU + '2025/08/romantic-couple-photoshoot-ptaufiq.jpg', alt: 'A couple’s portrait session', link: 'Explore photography' },
];

function BestFit() {
  const { session, requestAccount } = useSite();
  if (hasCompleteProfile(session)) return <BestFitForWedding profile={session.profile} />;
  const signedIn = session.status === 'signed-in';
  return (
    <section className="vd-section vd-start" aria-labelledby="vd-start-h">
      <div className="iws-wrap">
        <div className="vd-head">
          <h2 id="vd-start-h">A considered place to begin.</h2>
          <p className="vd-lede">Most weddings come together in the same order: the place, the people who run it, then the people who keep it.</p>
        </div>
        <div className="vd-start-grid">
          {STARTS.map((s, i) => {
            const cat = categoryById(s.cat);
            return (
              <Link key={s.cat} to={paths.category(cat.slug)} className={'vd-start-item' + (i === 0 ? ' is-lead' : '')}>
                <span className="vd-frame"><img src={s.img} alt={s.alt} loading="lazy" decoding="async" /></span>
                <span className="vd-start-cat">{cat.label}</span>
                <span className="vd-start-title">{s.title}</span>
                <span className="vd-start-body">{s.body}</span>
                <span className="vd-arrow-link">{s.link}<Arrow /></span>
              </Link>
            );
          })}
        </div>
        <div className="vd-personal">
          <p>{signedIn
            ? 'Finish your wedding profile, and this becomes a selection for your celebration.'
            : 'Tell Noor about your celebration, and this becomes a selection for your wedding.'}</p>
          {signedIn && APP_LIVE
            ? <a className="iws-btn iws-btn-ghost vd-personal-btn" href={APP_URL}>Finish your wedding profile</a>
            : signedIn
              ? <Link className="iws-btn iws-btn-ghost vd-personal-btn" to={paths.noor}>Make it personal with Noor</Link>
              : <button type="button" className="iws-btn iws-btn-ghost vd-personal-btn" onClick={() => requestAccount('vendors-personalise')}>Make it personal with Noor</button>}
        </div>
      </div>
    </section>
  );
}

function BestFitForWedding({ profile }) {
  // Matching here is plain filtering on real fields (service area against the
  // wedding's city). There is no score and no generated explanation.
  const matches = VENDOR_RECORDS.filter(v => v.serviceAreas.includes(profile.city));
  return (
    <section className="vd-section vd-fit" aria-labelledby="vd-fit-h">
      <div className="iws-wrap">
        <div className="vd-head">
          <h2 id="vd-fit-h">Best fit for your wedding</h2>
          <p className="vd-lede">For your celebration in {profile.city}: {profile.month}, {profile.guests} guests.</p>
          {profile.sample ? <p className="vd-note">Sample wedding profile and sample listings, for design review.</p> : null}
        </div>
        {matches.length ? (
          <ul className="vd-cards vd-cards-fit" role="list">
            {matches.map(v => <li key={v.id}><VendorCard vendor={v} reason={`Based in ${v.location}, where you are celebrating`} /></li>)}
          </ul>
        ) : (
          <div className="vd-empty">
            <p>We couldn’t find a close match in {profile.city} yet.</p>
            <Link className="iws-underlined" to={paths.search()}>Broaden the search</Link>
          </div>
        )}
        <Link className="iws-underlined vd-more" to={paths.search({ location: profile.city })}>See every vendor in {profile.city}</Link>
      </div>
    </section>
  );
}

/* 03 · Explore by category */
function Categories() {
  const [active, setActive] = useState(PRIMARY_CATEGORIES[1].id);
  return (
    <section className="vd-section vd-cats" aria-labelledby="vd-cats-h">
      <div className="iws-wrap">
        <div className="vd-head">
          <h2 id="vd-cats-h">Find exactly what you’re looking for.</h2>
          <p className="vd-lede">Every part of the wedding, from the people who plan it to the people who light it.</p>
        </div>
        <div className="vd-cats-grid">
          <div className="vd-cats-preview" aria-hidden="true">
            {PRIMARY_CATEGORIES.map(c => (
              <img key={c.id} src={categoryImage(c.id, 900, 1125)} alt="" loading="lazy" decoding="async" className={c.id === active ? 'is-on' : ''} />
            ))}
          </div>
          <ul className="vd-cats-list" role="list">
            {PRIMARY_CATEGORIES.map(c => (
              <li key={c.id}>
                <Link
                  to={paths.category(c.slug)}
                  className={'vd-cat' + (c.id === active ? ' is-on' : '')}
                  onMouseEnter={() => setActive(c.id)}
                  onFocus={() => setActive(c.id)}
                >
                  <span className="vd-cat-thumb" aria-hidden="true"><img src={categoryImage(c.id, 160, 200)} alt="" loading="lazy" decoding="async" /></span>
                  <span className="vd-cat-text">
                    <span className="vd-cat-name">{c.label}</span>
                    <span className="vd-cat-meta">{c.blurb} <span className="vd-cat-count">{typeCount(c)} services</span></span>
                  </span>
                  <Arrow />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="vd-more-cats">
          <h3>Also in the marketplace</h3>
          <ul role="list">
            {EXTENDED_CATEGORIES.map(c => (
              <li key={c.id}><Link to={paths.category(c.slug)}>{c.label}</Link></li>
            ))}
          </ul>
          <Link className="iws-underlined" to={paths.categories}>See all 19 categories</Link>
        </div>
      </div>
    </section>
  );
}

/* 04 · Curated collections (prototype fixtures) */
function Collections() {
  return (
    <section className="vd-section vd-cols" aria-labelledby="vd-cols-h">
      <div className="iws-wrap">
        <div className="vd-head">
          <h2 id="vd-cols-h">Collections, gathered by theme.</h2>
          <p className="vd-lede">Starting points built around a setting, a craft or a kind of celebration.</p>
          <p className="vd-note">Prototype collections. They show how collections will work; they are not editorial selections, and no vendors are assigned to them yet.</p>
        </div>
        <ul className="vd-cols-grid" role="list">
          {COLLECTIONS.map((c, i) => (
            <li key={c.slug} className={i === 0 ? 'is-lead' : ''}>
              <Link to={paths.search({ collection: c.slug })} className="vd-col">
                <span className="vd-frame"><img src={c.image} alt={c.alt} loading="lazy" decoding="async" /></span>
                <span className="vd-col-text">
                  <span className="vd-col-cats">{c.categories.map(id => categoryById(id).short).join(' · ')}</span>
                  <span className="vd-col-title">{c.title}</span>
                  <span className="vd-col-line">{c.line}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 05 · Professionals (sample listings; no featured flag exists) */
const SHOWN = ['the-lake-pavilion', 'vermilion-films', 'marigold-works', 'chai-and-chaat-co'];

function Professionals() {
  const vendors = SHOWN.map(slug => VENDOR_RECORDS.find(v => v.slug === slug)).filter(Boolean);
  return (
    <section className="vd-section vd-pros" aria-labelledby="vd-pros-h">
      <div className="iws-wrap">
        <div className="vd-head vd-head-row">
          <div>
            <h2 id="vd-pros-h">Professionals to know.</h2>
            <p className="vd-note">{SAMPLE_NOTE}</p>
          </div>
          <Link className="iws-underlined" to={paths.search()}>See every vendor</Link>
        </div>
        <ul className="vd-cards vd-cards-pros" role="list">
          {vendors.map(v => <li key={v.id}><VendorCard vendor={v} /></li>)}
        </ul>
      </div>
    </section>
  );
}

/* 06 · Noor */
function NoorLink() {
  return (
    <section className="vd-section vd-noor" aria-labelledby="vd-noor-h">
      <div className="iws-wrap vd-noor-grid">
        <svg className="vd-noor-rings" viewBox="0 0 240 240" aria-hidden="true" focusable="false">
          <ellipse cx="120" cy="120" rx="108" ry="32" />
          <ellipse cx="120" cy="120" rx="108" ry="40" transform="rotate(60 120 120)" />
          <ellipse cx="120" cy="120" rx="108" ry="48" transform="rotate(120 120 120)" />
          <circle cx="120" cy="120" r="20" className="vd-noor-core" />
        </svg>
        <div>
          <h2 id="vd-noor-h">Finding the right people should feel effortless.</h2>
          <p className="vd-lede">Noor helps you discover professionals based on your celebration, preferences and personal taste.</p>
          <Link className="iws-btn iws-btn-primary vd-noor-btn" to={paths.noor}>Discover Noor</Link>
        </div>
      </div>
    </section>
  );
}

/* Shared: vendor card */
function VendorCard({ vendor, reason }) {
  const { requestAccount } = useSite();
  const cat = categoryById(vendor.primaryCategory);
  return (
    <article className="vd-card">
      <Link to={paths.vendor(vendor.slug)} className="vd-card-link">
        <span className="vd-frame"><img src={vendor.image} alt={vendor.imageAlt} loading="lazy" decoding="async" /></span>
        <span className="vd-card-cat">{cat ? cat.short : ''}{isFeatured(vendor) ? ' · Featured' : ''}</span>
        <span className="vd-card-name">{vendor.name}</span>
        <span className="vd-card-meta">{vendor.speciality} · {vendor.location}</span>
        {reason ? <span className="vd-card-reason">{reason}</span> : null}
        {vendor.priceGuide ? <span className="vd-card-price">{vendor.priceGuide}</span> : null}
        <span className="vd-arrow-link">View profile<Arrow /></span>
      </Link>
      <button type="button" className="vd-save" aria-label={`Save ${vendor.name}`} onClick={() => requestAccount('vendor-save', { vendorId: vendor.id, vendorName: vendor.name })}>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M10 16.5s-6-3.6-6-8.1A3.4 3.4 0 0110 6a3.4 3.4 0 016 2.4c0 4.5-6 8.1-6 8.1z" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
      </button>
    </article>
  );
}

function Arrow() {
  return (
    <svg className="vd-arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
