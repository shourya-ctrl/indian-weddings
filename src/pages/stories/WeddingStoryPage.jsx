// Real wedding story (/real-weddings/:weddingSlug). Labelled as a prototype:
// the wedding is illustrative and not an IndianWeddings couple.
import { Link } from '../../router';
import { paths } from '../../routes';
import SiteShell from '../../site/SiteShell';
import { useSite } from '../../site/siteContext';
import { usePageTitle } from '../../site/usePageTitle';
import { CountUp, KineticTitle } from '../../site/motion';
import { ALL_STORIES, weddingBySlug } from '../../data/stories';
import NotFoundPage from '../NotFoundPage';
import { StoryCard } from './RealWeddingsPage';
import './stories.css';

export default function WeddingStoryPage({ weddingSlug }) {
  const s = weddingBySlug(weddingSlug);
  usePageTitle(s ? s.title : 'Page not found');
  if (!s) return <NotFoundPage />;
  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only)">
      <Story s={s} />
    </SiteShell>
  );
}

function Story({ s }) {
  const { requestAccount } = useSite();
  const related = ALL_STORIES.filter(x => x !== s).slice(0, 3);
  return (
    <>
      <header className="st-hero">
        <span className="st-hero-img drift" data-parallax="0.12"><img src={s.image} alt={s.imageAlt} fetchpriority="high" decoding="async" /></span>
        <div className="iws-wrap st-hero-text">
          <ol className="pg-crumbs">
            <li><Link to={paths.realWeddings}>Real Weddings</Link></li>
            <li><span aria-current="page">{s.title}</span></li>
          </ol>
          <KineticTitle className="pg-h1 st-hero-h1" text={s.title} />
          <p className="st-hero-place" data-reveal="up" style={{ '--i': 4 }}><span className="st-type">Real wedding</span> {s.place} · {s.meta.split(' · ')[1]}</p>
        </div>
      </header>

      <div className="iws-wrap">
        <p className="st-proto st-proto-block">Prototype story. This wedding is illustrative: {s.title} are not an IndianWeddings couple, and the photographs are by PTaufiq Photography, used for design review.</p>
      </div>

      <section className="pg-section" aria-label="Their wedding">
        <div className="iws-wrap st-body">
          <figure className="st-quote" data-reveal="up">
            <blockquote><p>{s.quote}</p></blockquote>
            <figcaption>{s.quoteBy}</figcaption>
          </figure>
          <dl className="st-facts">
            {s.facts.map(([n, label], i) => <div key={label} data-reveal="up" style={{ '--i': i }}><dt>{label}</dt><dd>{/^\d+$/.test(n) ? <CountUp to={Number(n)} /> : n}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="pg-section" aria-label="Photographs">
        <div className="iws-wrap st-gallery">
          {s.gallery.map((g, i) => <span key={g.src} className="pg-frame" data-reveal="arch" data-parallax={i ? '-0.06' : '0.06'} style={{ '--i': i }}><img src={g.src} alt={g.alt} loading="lazy" decoding="async" /></span>)}
        </div>
      </section>

      <section className="pg-section" aria-labelledby="ws-team">
        <div className="iws-wrap st-team">
          <KineticTitle as="h2" id="ws-team" className="st-h2" text="The team" />
          <dl className="pg-facts">
            {s.team.map(t => (
              <div key={t.role}>
                <dt>{t.role}</dt>
                <dd>{t.vendorSlug ? <Link className="st-inline" to={paths.vendor(t.vendorSlug)}>{t.name}</Link> : t.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="pg-section" aria-labelledby="ws-plan">
        <div className="iws-wrap st-cta">
          <KineticTitle as="h2" id="ws-plan" className="st-h2 st-h2-lg" text="Plan something like this." />
          <p className="pg-lede">Start your own plan with the places and style you liked here as a starting point. You choose what to keep.</p>
          <button type="button" className="iws-btn iws-btn-primary" onClick={() => requestAccount('story-inspire')}>Plan something like this</button>
        </div>
      </section>

      <section className="pg-section st-last" aria-labelledby="ws-more">
        <div className="iws-wrap">
          <KineticTitle as="h2" id="ws-more" className="st-h2" text="More stories" />
          <ul className="st-grid st-grid-3" role="list">
            {related.map((r, i) => <li key={r.type + r.slug}><StoryCard story={r} headingLevel={3} index={i} /></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
