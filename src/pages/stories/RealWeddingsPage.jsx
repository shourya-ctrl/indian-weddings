// Real Weddings hub (/real-weddings). One destination, three views:
// All stories, Real Weddings and The Edit (?view=). The two content types keep
// their own labels on every card.
import { Link, useLocation } from '../../router';
import { paths, withQuery } from '../../routes';
import SiteShell from '../../site/SiteShell';
import { Arrow } from '../../site/VendorCard';
import { usePageTitle } from '../../site/usePageTitle';
import { KineticTitle, Marquee } from '../../site/motion';
import { ALL_STORIES } from '../../data/stories';
import { EDIT_SECTIONS, EDIT_STORIES, REAL_WEDDINGS, sectionLabel } from '../../data/stories';
import './stories.css';

const VIEWS = [
  { id: 'all', label: 'All stories' },
  { id: 'real-weddings', label: 'Real Weddings' },
  { id: 'the-edit', label: 'The Edit' },
];

// Interleave the two types so All stories doesn't read as two blocks.
function interleave(a, b) {
  const out = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) { if (a[i]) out.push(a[i]); if (b[i]) out.push(b[i]); }
  return out;
}

export default function RealWeddingsPage() {
  const { query } = useLocation();
  const view = VIEWS.some(v => v.id === query.get('view')) ? query.get('view') : 'all';
  const section = view === 'the-edit' ? query.get('section') || '' : '';
  usePageTitle(view === 'the-edit' ? 'The Edit' : 'Real Weddings');

  const stories = view === 'real-weddings' ? REAL_WEDDINGS
    : view === 'the-edit' ? EDIT_STORIES.filter(s => !section || s.section === section)
    : interleave(REAL_WEDDINGS, EDIT_STORIES);
  const usedSections = EDIT_SECTIONS.filter(s => EDIT_STORIES.some(x => x.section === s.id));

  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only)">
      <header className="pg-intro">
        <div className="iws-wrap">
          <KineticTitle className="pg-h1" text="Weddings, and the ideas behind them." />
          <p className="pg-lede" data-reveal="up" style={{ '--i': 5 }}>Real weddings, told with the couples who had them, and The Edit: our writing on design, destinations, style and custom.</p>
          <p className="st-proto" data-reveal="up" style={{ '--i': 6 }}>Prototype stories. The weddings are illustrative and are not IndianWeddings couples. The Edit pieces are drafts written from IndianWeddings’ sample advice.</p>
        </div>
        <Marquee duration={90} gap={16} className="st-strip">
          {ALL_STORIES.map(st => <span key={st.slug} className="st-strip-img"><img src={st.image} alt="" loading="lazy" decoding="async" /></span>)}
        </Marquee>
      </header>

      <section className="st-hub" aria-label="Stories">
        <div className="iws-wrap">
          <nav aria-label="Story types">
            <ul className="pg-tabs" role="list">
              {VIEWS.map(v => (
                <li key={v.id}><Link className="pg-tab" to={paths.realWeddingsView(v.id)} aria-current={view === v.id ? 'page' : undefined}>{v.label}</Link></li>
              ))}
            </ul>
          </nav>
          {view === 'the-edit' ? (
            <nav aria-label="Sections of The Edit" className="st-sections">
              <Link to={paths.realWeddingsView('the-edit')} aria-current={!section ? 'page' : undefined}>Everything</Link>
              {usedSections.map(s => (
                <Link key={s.id} to={withQuery('/real-weddings', { view: 'the-edit', section: s.id })} aria-current={section === s.id ? 'page' : undefined}>{s.label}</Link>
              ))}
            </nav>
          ) : null}

          {stories.length ? (
            <ul key={view + section} className="st-grid" role="list">
              {stories.map((s, i) => <li key={s.type + s.slug} className={i === 0 ? 'is-lead' : ''}><StoryCard story={s} index={i} /></li>)}
            </ul>
          ) : (
            <div className="pg-empty"><p>No stories in this section yet.</p><Link className="iws-underlined" to={paths.realWeddingsView('the-edit')}>See all of The Edit</Link></div>
          )}
        </div>
      </section>
    </SiteShell>
  );
}

export function StoryCard({ story: s, headingLevel = 2, index = 0 }) {
  const real = s.type === 'real-wedding';
  const H = `h${headingLevel}`;
  return (
    <Link to={real ? paths.weddingStory(s.slug) : paths.editStory(s.slug)} className="st-card">
      <span className="pg-frame lamp" data-reveal="arch" style={{ '--i': index % 3 }}><img src={s.image} alt={s.imageAlt} loading="lazy" decoding="async" /></span>
      <span className={'pg-label' + (real ? ' pg-label-gold' : '')}>{real ? 'Real wedding' : `The Edit · ${sectionLabel(s.section)}`}</span>
      <H className="st-card-title">{s.title}</H>
      <span className="st-card-dek">{real ? s.place : s.dek}</span>
      <span className="pg-arrow-link">{real ? 'Read their wedding' : 'Read the story'}<Arrow /></span>
    </Link>
  );
}
