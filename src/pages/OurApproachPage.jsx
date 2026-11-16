// Our Approach (/our-approach). States only what the product context and the
// homepage already establish. A platform standards and trust practices section
// is intentionally absent until those practices are documented.
// The focal sequence is the wedding week: the six celebrations travel past as
// you scroll, because an Indian wedding is many celebrations in one plan.
import { useEffect, useRef, useState } from 'react';
import { Link } from '../router';
import { paths } from '../routes';
import { IWU, ORBIT } from '../landingLogic';
import SiteShell from '../site/SiteShell';
import { Arrow } from '../site/VendorCard';
import NoorOrb from '../site/NoorOrb';
import { CountUp, KineticTitle, reducedMotion } from '../site/motion';
import { usePageTitle } from '../site/usePageTitle';
import { CATEGORIES, typeCount } from '../data/taxonomy';
import './brand-pages.css';

const TYPES = CATEGORIES.reduce((a, c) => a + typeCount(c), 0);

const BELIEFS = [
  { title: 'Your plan is the source of truth.', body: 'Every suggestion, from Noor or from us, starts from your own dates, places, guests, budget and taste.' },
  { title: 'Many celebrations, one plan.', body: 'An Indian wedding is the welcome party, haldi, mehendi, sangeet, baraat, pheras and reception, each with its own place, time, look and guests. We plan them as one connected whole.' },
  { title: 'Fewer tools, not more.', body: 'Vendors, budget, guests, your website and the run sheet live together, so nothing is copied between spreadsheets, screenshots and group chats.' },
  { title: 'Clarity over pressure.', body: 'We show what matters next, and leave room to enjoy the rest.' },
  { title: 'Nothing we can’t stand behind.', body: 'IndianWeddings is new. Where something is a sample, we say so. We don’t show reviews, ratings, partnerships or results we don’t have.' },
];

const CHAPTERS = [
  { title: 'Find the people who bring it to life', body: 'From the first look at a venue to the deposit, every vendor follows the same calm path, and every conversation stays with the decision it belongs to.', img: IWU + '2018/10/ptaufiq-indian-wedding-newyork-mandap-decor.jpg', alt: 'A mandap dressed in flowers' },
  { title: 'Bring the plan together', body: 'See your budget as the wedding it pays for. Keep each celebration’s run sheet beside the people delivering it. Know which decisions are with you, and which are with someone else.', img: IWU + '2024/07/ptaufiq-indian-wedding-the-ritz-carlton-abama-spain-haldi.jpg', alt: 'A haldi celebration' },
  { title: 'From the save the date to the day itself', body: 'Start with a save the date in a design that is actually Indian. It becomes your wedding website, then the app your guests carry through every event: one link that grows with your wedding.', img: IWU + '2025/08/elegant-wedding-reception-photos-ptaufiq.jpg', alt: 'A reception hall set for dinner' },
];

export default function OurApproachPage() {
  usePageTitle('Our Approach');
  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only)">
      <header className="bp-oa-hero">
        <div className="bp-oa-collage" aria-hidden="true">
          <span className="bp-oa-a drift" data-parallax="0.08"><img src={IWU + '2019/02/ptaufiq-indian-wedding-rajkot-india-ceremony-4.jpg'} alt="" fetchpriority="high" decoding="async" /></span>
          <span className="bp-oa-b" data-reveal="arch" data-parallax="0.2" style={{ '--i': 2 }}><img src={IWU + '2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg'} alt="" decoding="async" /></span>
          <span className="bp-oa-c" data-reveal="arch" data-parallax="-0.1" style={{ '--i': 4 }}><img src={IWU + '2021/04/ptaufiq-indian-wedding-cancun-mexico-sangeet2.jpg'} alt="" decoding="async" /></span>
        </div>
        <div className="iws-wrap bp-oa-hero-text">
          <KineticTitle className="pg-h1 bp-hero-h1" text="A wedding that feels like yours, without the plan becoming a second job." />
          <p className="pg-lede" data-reveal="up" style={{ '--i': 6 }}>IndianWeddings brings finding your vendors and venues, your budget, your guests, your website and the run sheet into one plan, with an advisor who knows what you don’t yet. More clarity for you, and more room to enjoy the celebration.</p>
        </div>
      </header>

      <section className="pg-section" aria-labelledby="oa-believe">
        <div className="iws-wrap bp-believe">
          <div className="bp-believe-head">
            <KineticTitle as="h2" id="oa-believe" className="bp-h2" text="What we believe." />
          </div>
          <ol className="bp-statements" role="list">
            {BELIEFS.map(b => (
              <li key={b.title} data-reveal="up">
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <WeddingWeek />

      <section className="pg-section" aria-labelledby="oa-discovery">
        <div className="iws-wrap">
          <div className="pg-head">
            <KineticTitle as="h2" id="oa-discovery" text="How vendor discovery works." />
          </div>
          <div className="bp-discovery">
            <div className="bp-stat" data-reveal="up"><CountUp to={CATEGORIES.length} className="bp-stat-n" /><span>categories, from planners and venues to security and permits</span></div>
            <div className="bp-stat" data-reveal="up" style={{ '--i': 1 }}><CountUp to={TYPES} duration={2000} className="bp-stat-n" /><span>services, each with its own results</span></div>
            <dl className="bp-points">
              <div data-reveal="up" style={{ '--i': 2 }}><dt>No dead ends</dt><dd>Every category and every service opens its results. When matches are few, we say so plainly and help you broaden the search. Nobody is quietly sourcing vendors behind the scenes.</dd></div>
              <div data-reveal="up" style={{ '--i': 3 }}><dt>Starting from you</dt><dd>As you tell Noor about your celebration, discovery starts from your places, dates, guests, budget and taste instead of a generic list.</dd></div>
            </dl>
          </div>
          <Link className="pg-arrow-link" to={paths.vendors} data-reveal="up">Explore vendors<Arrow /></Link>
        </div>
      </section>

      <section className="pg-section" aria-labelledby="oa-noor">
        <div className="iws-wrap bp-oa-noor">
          <NoorOrb className="bp-orb" />
          <div>
            <KineticTitle as="h2" id="oa-noor" className="bp-h2" text="How Noor helps." />
            <p className="pg-lede" data-reveal="up">Noor is an advisor inside your plan, not a chat window off to the side. It suggests; you decide. It never books, pays or messages anyone without you, and it always tells you why.</p>
            <Link className="pg-arrow-link" to={paths.noor} data-reveal="up">Meet Noor<Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="pg-section bp-last" aria-labelledby="oa-plan">
        <div className="iws-wrap">
          <div className="pg-head"><KineticTitle as="h2" id="oa-plan" text="From the first search to the morning of." /></div>
          <ol className="bp-chapters" role="list">
            {CHAPTERS.map((c, i) => (
              <li key={c.title}>
                <span className="pg-frame lamp" data-reveal="arch" style={{ '--i': i }} data-parallax={i === 1 ? '0.06' : '0'}><img src={c.img} alt={c.alt} loading="lazy" decoding="async" /></span>
                <h3 data-reveal="up">{c.title}</h3>
                <p data-reveal="up">{c.body}</p>
              </li>
            ))}
          </ol>
          <div className="bp-ctas bp-ctas-end" data-reveal="up">
            <Link className="iws-btn iws-btn-primary" to={paths.accountCreate({ intent: 'begin-planning' })}>Begin planning</Link>
            <Link className="iws-underlined" to={paths.realWeddings}>Read the stories</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

/* The wedding week: on wide screens the section pins while scrolling moves
   the six celebrations across in order; elsewhere it is a swipeable strip. */
function WeddingWeek() {
  const outer = useRef(null);
  const track = useRef(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)');
    const decide = () => setPinned(mq.matches && !reducedMotion());
    decide();
    mq.addEventListener('change', decide);
    return () => mq.removeEventListener('change', decide);
  }, []);

  useEffect(() => {
    if (!pinned) { if (track.current) track.current.style.transform = ''; return undefined; }
    let raf = 0;
    const tick = () => {
      raf = 0;
      const o = outer.current, t = track.current;
      if (!o || !t) return;
      const r = o.getBoundingClientRect();
      const travel = o.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / travel));
      // End with the last celebration fully in view, the same margin from the right edge as the first from the left.
      const pad = parseFloat(getComputedStyle(t.parentElement).paddingLeft) || 0;
      const max = Math.max(0, t.scrollWidth + 2 * pad - t.parentElement.clientWidth);
      t.style.transform = `translate3d(${-max * p}px, 0, 0)`;
      o.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [pinned]);

  return (
    <section ref={outer} className={'bp-week' + (pinned ? ' is-pinned' : '')} aria-labelledby="oa-events">
      <div className="bp-week-stage">
        <div className="iws-wrap bp-week-head">
          <KineticTitle as="h2" id="oa-events" className="bp-h2" text="Built around the way weddings actually happen." />
          <p className="pg-lede" data-reveal="up">Each celebration has its own place, time, look and guests. They belong to one plan.</p>
        </div>
        <div className="bp-week-viewport">
          <ol ref={track} className="bp-week-track" role="list">
            {ORBIT.map((o, i) => (
              <li key={o.n} className="bp-week-item">
                <span className="bp-week-img"><img src={o.img} alt="" loading="lazy" decoding="async" /></span>
                <span className="bp-week-day">{o.d}</span>
                <span className="bp-week-name">{o.n}</span>
                <span className="bp-week-n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="iws-wrap"><span className="bp-week-progress" aria-hidden="true"><span /></span></div>
      </div>
    </section>
  );
}
