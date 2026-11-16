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
import NoorOrb from '../../site/NoorOrb';
import { hasCompleteProfile } from '../../site/session';
import { categoryById, categoryImage, EXTENDED_CATEGORIES, PRIMARY_CATEGORIES, typeCount } from '../../data/taxonomy';
import { VENDOR_RECORDS } from '../../data/vendors';
import { COLLECTIONS } from '../../data/collections';
import VendorSearch from './VendorSearch';
import { KineticTitle, Marquee } from '../../site/motion';
import VendorCard, { Arrow } from '../../site/VendorCard';
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
      <CategoryBand />
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
          <KineticTitle id="vd-intro-h" text="The right people make the celebration." />
          <p className="pg-lede" data-reveal="up" style={{ '--i': 4 }}>Discover exceptional professionals for every detail of your wedding.</p>
          <div data-reveal="up" style={{ '--i': 6 }}><VendorSearch examples={SEARCH_EXAMPLES} /></div>
        </div>
        <figure className="vd-intro-figure">
          <div className="vd-collage">
            <div className="vd-arch drift keep-arch" data-reveal="arch" data-parallax="0.06">
              <img src={IWU + '2025/08/destination-wedding-venue-ptaufiq-photography.jpg'} alt="A couple on desert dunes" fetchpriority="high" decoding="async" />
            </div>
            <span className="vd-float vd-float-a pg-frame" data-reveal="arch" data-parallax="0.18" style={{ '--i': 3 }}>
              <img src={IWU + '2024/07/ptaufiq-indian-wedding-the-ritz-carlton-abama-spain-haldi.jpg'} alt="" decoding="async" />
            </span>
            <span className="vd-float vd-float-b pg-frame" data-reveal="arch" data-parallax="-0.12" style={{ '--i': 5 }}>
              <img src={IWU + '2019/02/ptaufiq-indian-wedding-costa-mujeres-mexico-destination-mehendi.jpg'} alt="" decoding="async" />
            </span>
          </div>
          <figcaption>Photography: PTaufiq Photography</figcaption>
        </figure>
      </div>
    </section>
  );
}

/* A moving band of every primary category, between the introduction and discovery. */
function CategoryBand() {
  return (
    <section className="vd-band" aria-label="Browse by category">
      <Marquee duration={70} gap={16}>
        {PRIMARY_CATEGORIES.map(c => (
          <Link key={c.id} to={paths.category(c.slug)} className="vd-band-item">
            <span className="vd-band-img"><img src={categoryImage(c.id, 200, 250)} alt="" loading="lazy" decoding="async" /></span>
            <span className="vd-band-name">{c.label}</span>
          </Link>
        ))}
      </Marquee>
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
    <section className="pg-section vd-start" aria-labelledby="vd-start-h">
      <div className="iws-wrap">
        <div className="pg-head">
          <KineticTitle as="h2" id="vd-start-h" text="A considered place to begin." />
          <p className="pg-lede">Most weddings come together in the same order: the place, the people who run it, then the people who keep it.</p>
        </div>
        <div className="vd-start-grid">
          {STARTS.map((s, i) => {
            const cat = categoryById(s.cat);
            return (
              <Link key={s.cat} to={paths.category(cat.slug)} className={'vd-start-item' + (i === 0 ? ' is-lead' : '')}>
                <span className="pg-frame lamp" data-reveal="arch" style={{ '--i': i }}><img src={s.img} alt={s.alt} loading="lazy" decoding="async" /></span>
                <span className="vd-start-cat">{cat.label}</span>
                <span className="vd-start-title">{s.title}</span>
                <span className="vd-start-body">{s.body}</span>
                <span className="pg-arrow-link">{s.link}<Arrow /></span>
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
    <section className="pg-section vd-fit" aria-labelledby="vd-fit-h">
      <div className="iws-wrap">
        <div className="pg-head">
          <h2 id="vd-fit-h">Best fit for your wedding</h2>
          <p className="pg-lede">For your celebration in {profile.city}: {profile.month}, {profile.guests} guests.</p>
          {profile.sample ? <p className="pg-note">Sample wedding profile and sample listings, for design review.</p> : null}
        </div>
        {matches.length ? (
          <ul className="pg-cards pg-cards-fit" role="list">
            {matches.map((v, i) => <li key={v.id}><VendorCard vendor={v} index={i} reason={`Based in ${v.location}, where you are celebrating`} /></li>)}
          </ul>
        ) : (
          <div className="pg-empty">
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
    <section className="pg-section vd-cats" aria-labelledby="vd-cats-h">
      <div className="iws-wrap">
        <div className="pg-head">
          <KineticTitle as="h2" id="vd-cats-h" text="Find exactly what you’re looking for." />
          <p className="pg-lede">Every part of the wedding, from the people who plan it to the people who light it.</p>
        </div>
        <div className="vd-cats-grid">
          <div className="vd-cats-preview" aria-hidden="true" data-reveal="arch">
            {PRIMARY_CATEGORIES.map(c => (
              <img key={c.id} src={categoryImage(c.id, 900, 1125)} alt="" loading="lazy" decoding="async" className={c.id === active ? 'is-on' : ''} />
            ))}
          </div>
          <ul className="vd-cats-list" role="list">
            {PRIMARY_CATEGORIES.map((c, i) => (
              <li key={c.id} data-reveal="up" style={{ '--i': i }}>
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
    <section className="pg-section vd-cols" aria-labelledby="vd-cols-h">
      <div className="iws-wrap">
        <div className="pg-head">
          <KineticTitle as="h2" id="vd-cols-h" text="Collections, gathered by theme." />
          <p className="pg-lede">Starting points built around a setting, a craft or a kind of celebration.</p>
          <p className="pg-note">Prototype collections. They show how collections will work; they are not editorial selections, and no vendors are assigned to them yet.</p>
        </div>
        <ul className="vd-cols-grid" role="list">
          {COLLECTIONS.map((c, i) => (
            <li key={c.slug} className={i === 0 ? 'is-lead' : ''}>
              <Link to={paths.search({ collection: c.slug })} className="vd-col">
                <span className="pg-frame lamp" data-reveal="arch" style={{ '--i': i % 3 }}><img src={c.image} alt={c.alt} loading="lazy" decoding="async" /></span>
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
    <section className="pg-section vd-pros" aria-labelledby="vd-pros-h">
      <div className="iws-wrap">
        <div className="pg-head pg-head-row">
          <div>
            <KineticTitle as="h2" id="vd-pros-h" text="Professionals to know." />
            <p className="pg-note">{SAMPLE_NOTE}</p>
          </div>
          <Link className="iws-underlined" to={paths.search()}>See every vendor</Link>
        </div>
        <ul className="pg-cards pg-cards-pros" role="list">
          {vendors.map((v, i) => <li key={v.id}><VendorCard vendor={v} index={i} /></li>)}
        </ul>
      </div>
    </section>
  );
}

/* 06 · Noor */
function NoorLink() {
  return (
    <section className="pg-section vd-noor" aria-labelledby="vd-noor-h">
      <div className="iws-wrap vd-noor-grid">
        <NoorOrb className="vd-noor-rings" />
        <div>
          <KineticTitle as="h2" id="vd-noor-h" text="Finding the right people should feel effortless." />
          <p className="pg-lede">Noor helps you discover professionals based on your celebration, preferences and personal taste.</p>
          <Link className="iws-btn iws-btn-primary vd-noor-btn" to={paths.noor}>Discover Noor</Link>
        </div>
      </div>
    </section>
  );
}
