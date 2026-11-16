// The Edit story (/real-weddings/the-edit/:storySlug). Editorial; makes no
// claim that anything featured was planned or booked through IndianWeddings.
import { Link } from '../../router';
import { paths, withQuery } from '../../routes';
import SiteShell from '../../site/SiteShell';
import { useSite } from '../../site/siteContext';
import { NoorMark } from '../../site/SiteHeader';
import { usePageTitle } from '../../site/usePageTitle';
import { KineticTitle } from '../../site/motion';
import { useEffect, useRef } from 'react';
import { EDIT_STORIES, editStoryBySlug, sectionLabel } from '../../data/stories';
import NotFoundPage from '../NotFoundPage';
import { StoryCard } from './RealWeddingsPage';
import './stories.css';

export default function EditStoryPage({ storySlug }) {
  const s = editStoryBySlug(storySlug);
  usePageTitle(s ? s.title.replace(/\.$/, '') : 'Page not found');
  if (!s) return <NotFoundPage />;
  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only)">
      <Story s={s} />
    </SiteShell>
  );
}

function Story({ s }) {
  const { openNoor } = useSite();
  const bar = useRef(null);
  // A gold line along the top of the page marks how far through the story you are.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = document.querySelector('.st-article');
      if (!el || !bar.current) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - r.top) / r.height));
      bar.current.style.transform = `scaleX(${p})`;
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', on, { passive: true });
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', on); };
  }, []);
  const related = EDIT_STORIES.filter(x => x !== s).slice(0, 3);
  return (
    <>
      <span ref={bar} className="st-progress" aria-hidden="true" />
      <header className="pg-intro">
        <div className="iws-wrap st-article-head">
          <ol className="pg-crumbs">
            <li><Link to={paths.realWeddingsView('the-edit')}>The Edit</Link></li>
            <li><Link to={withQuery('/real-weddings', { view: 'the-edit', section: s.section })}>{sectionLabel(s.section)}</Link></li>
          </ol>
          <KineticTitle className="pg-h1" text={s.title} />
          <p className="pg-lede" data-reveal="up" style={{ '--i': 4 }}>{s.dek}</p>
          <p className="st-proto">Prototype story: a draft written from IndianWeddings’ sample advice, for design review.</p>
        </div>
      </header>

      <figure className="iws-wrap st-article-figure">
        <span className="pg-frame" data-reveal="arch"><img src={s.image} alt={s.imageAlt} fetchpriority="high" decoding="async" data-parallax="0.08" /></span>
        <figcaption>Photography: PTaufiq Photography</figcaption>
      </figure>

      <article className="iws-wrap st-article">
        {s.body.map(p => <p key={p.slice(0, 24)} data-reveal="up">{p}</p>)}
        <h2 className="st-h2">{s.rowsTitle}</h2>
        <dl className="pg-facts" data-reveal="up">
          {s.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
        <div className="st-ask">
          <p>Have a question about your own wedding?</p>
          <button type="button" className="iws-btn iws-btn-ghost" onClick={() => openNoor(s.askNoor)}><NoorMark /> Ask Noor about this</button>
        </div>
      </article>

      <section className="pg-section st-last" aria-labelledby="es-more">
        <div className="iws-wrap">
          <KineticTitle as="h2" id="es-more" className="st-h2" text="More from The Edit" />
          <ul className="st-grid st-grid-3" role="list">
            {related.map((r, i) => <li key={r.slug}><StoryCard story={r} headingLevel={3} index={i} /></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
