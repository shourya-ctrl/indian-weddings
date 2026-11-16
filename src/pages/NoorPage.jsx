// Noor overview (/noor). Each capability is shown as a live demonstration
// built from the homepage's existing sample data, and carries a status label;
// nothing is presented as live. Visitors can try the public demo and continue
// into personalised Noor through an account.
import { useEffect, useState } from 'react';
import { Link } from '../router';
import { paths } from '../routes';
import { ADV_NAMES, ADVICE, ASK, ORBIT } from '../landingLogic';
import SiteShell from '../site/SiteShell';
import { useSite } from '../site/siteContext';
import { NoorMark } from '../site/SiteHeader';
import NoorOrb from '../site/NoorOrb';
import { CountUp, KineticTitle, reducedMotion, useInView } from '../site/motion';
import { usePageTitle } from '../site/usePageTitle';
import { VENDOR_RECORDS } from '../data/vendors';
import { categoryById } from '../data/taxonomy';
import './brand-pages.css';

const NOOR = ADV_NAMES.Noor;
const BUDGET = ADVICE.find(a => a.id === 'budget');
const IDEA = ADVICE.find(a => a.id === 'idea');
const JAIPUR = VENDOR_RECORDS.filter(v => v.location === 'Jaipur');
const PAIR = ['vermilion-films', 'studio-haveli'].map(s => VENDOR_RECORDS.find(v => v.slug === s)).filter(Boolean);
const lakh = s => parseFloat(String(s).replace(/[^\d.]/g, ''));

const STATUS = {
  dev: { label: 'In development', note: 'Designed in the IndianWeddings prototype; not live yet.' },
  proposed: { label: 'Proposed', note: 'Planned; not yet designed for release.' },
};
function StatusLabel({ status }) {
  return <span className={'bp-status bp-status-' + status} title={STATUS[status].note}>{STATUS[status].label}</span>;
}

export default function NoorPage() {
  usePageTitle('Noor');
  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only)">
      <Hero />
      <Knows />
      <section className="pg-section" aria-labelledby="np-does">
        <div className="iws-wrap">
          <div className="pg-head">
            <KineticTitle as="h2" id="np-does" text="What Noor does for you." />
            <p className="pg-note" data-reveal="up">Nothing here is live yet. <strong>In development</strong> means designed in the IndianWeddings prototype; <strong>Proposed</strong> means planned but not yet designed for release. The examples use sample data.</p>
          </div>
          <Capability status="dev" title="Vendors chosen for your wedding" body="Discovery that starts from your places, dates, guests, budget and taste, with the reason each vendor appears." demo={<DemoVendors />} />
          <Capability status="dev" title="A budget that holds" body="Noor holds your budget against what you want, catches what is running short and suggests a rebalance that keeps your total. Nothing changes until you say yes." demo={<DemoBudget />} flip />
          <Capability status="dev" title="Comparisons on what matters to you" body="Two or three vendors side by side, measured against your own priorities rather than a generic checklist." demo={<DemoCompare />} />
          <Capability status="dev" title="Answers from your own plan" body="Ask about next steps, quotes, guests or customs, and the answer starts from your wedding, not from wedding advice in general." demo={<DemoAnswer />} flip />
          <Capability status="proposed" title="Seeing it before you book it" body="Generated sketches of how a venue could be dressed, and a vision board built from the photographs you save. Sketches to talk through, never quotes." demo={<DemoSketch />} />
        </div>
      </section>
      <SampleAdvice />
      <TryIt />
      <NoorPromise />
    </SiteShell>
  );
}

function Hero() {
  const { requestAccount, openNoor } = useSite();
  return (
    <header className="bp-noor-hero">
      <span className="bp-noor-sky" aria-hidden="true" />
      <div className="iws-wrap bp-split">
        <div>
          <KineticTitle className="pg-h1 bp-hero-h1" text="The friend who has been to every wedding." />
          <p className="pg-lede" data-reveal="up" style={{ '--i': 5 }}>{NOOR.lede}</p>
          <div className="bp-ctas" data-reveal="up" style={{ '--i': 7 }}>
            <button type="button" className="iws-btn iws-btn-primary" onClick={() => requestAccount('noor-personalise')}>Try Noor with your wedding</button>
            <button type="button" className="iws-btn iws-btn-ghost" onClick={() => openNoor()}><NoorMark /> Ask Noor a question</button>
          </div>
        </div>
        <div className="bp-orb-stage" data-reveal="fade" data-parallax="-0.08"><NoorOrb className="bp-orb" /></div>
      </div>
    </header>
  );
}

function Knows() {
  return (
    <section className="pg-section" aria-labelledby="np-knows">
      <div className="iws-wrap">
        <div className="pg-head">
          <KineticTitle as="h2" id="np-knows" text="It starts with your wedding." />
          <p className="pg-lede" data-reveal="up">When you begin planning, Noor asks about the celebration you are imagining, then keeps learning as you plan.</p>
          <p className="bp-status-line" data-reveal="up"><StatusLabel status="dev" /></p>
        </div>
        <ol className="bp-knows" role="list">
          <li data-reveal="up" style={{ '--i': 0 }}>
            <div className="bp-knows-visual bp-chips" aria-hidden="true">
              {ORBIT.map((o, i) => <span key={o.n} style={{ '--i': i }}>{o.n}</span>)}
            </div>
            <h3>Your celebrations</h3>
            <p>Which events you are holding, from the roka to the reception, and the traditions you are bringing together.</p>
          </li>
          <li data-reveal="up" style={{ '--i': 1 }}>
            <div className="bp-knows-visual bp-big" aria-hidden="true"><CountUp to={150} /><small>guests · Udaipur · February</small></div>
            <h3>Where, when and how many</h3>
            <p>Your places, your dates or the months you are considering, and roughly how many guests.</p>
          </li>
          <li data-reveal="up" style={{ '--i': 2 }}>
            <div className="bp-knows-visual bp-big" aria-hidden="true"><span>₹<CountUp to={85} />L</span><small>total, held steady</small></div>
            <h3>Your budget</h3>
            <p>The total you have in mind, the currency you are paying in, and how much room you want to keep.</p>
          </li>
          <li data-reveal="up" style={{ '--i': 3 }}>
            <div className="bp-knows-visual bp-fan" aria-hidden="true">
              {ADVICE.map(a => <span key={a.id}><img src={a.img} alt="" loading="lazy" decoding="async" /></span>)}
            </div>
            <h3>Your taste</h3>
            <p>The photographs you save and choose, so Noor learns the light, colours and settings you keep returning to.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Capability({ status, title, body, demo, flip }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <article ref={ref} className={'bp-cap' + (flip ? ' is-flip' : '') + (inView ? ' is-live' : '')}>
      <div className="bp-cap-text" data-reveal="up">
        <StatusLabel status={status} />
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="bp-cap-demo" data-reveal="fade" aria-hidden="true">{demo}</div>
    </article>
  );
}

function DemoVendors() {
  return (
    <div className="dm-vendors">
      <p className="dm-caption">For a sample wedding in Jaipur</p>
      <div className="dm-fan">
        {JAIPUR.slice(0, 3).map((v, i) => (
          <div key={v.id} className="dm-vcard" style={{ '--i': i }}>
            <img src={v.image} alt="" loading="lazy" decoding="async" />
            <span className="dm-vcard-cat">{(categoryById(v.primaryCategory) || {}).short}</span>
            <span className="dm-vcard-name">{v.name}</span>
            <span className="dm-vcard-why">Based in Jaipur, where you are celebrating</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoBudget() {
  const max = Math.max(...BUDGET.rows.flatMap(([, v]) => v.split('→').map(lakh)));
  return (
    <div className="dm-budget">
      <p className="dm-caption">{BUDGET.head}</p>
      {BUDGET.rows.map(([k, v], i) => {
        const [from, to] = v.split('→').map(lakh);
        return (
          <div key={k} className="dm-bar" style={{ '--from': from / max, '--to': to / max, '--i': i }}>
            <div className="dm-bar-label"><span>{k}</span><span className="dm-bar-val"><s>₹{from}L</s> ₹{to}L</span></div>
            <div className="dm-bar-track"><span className={'dm-bar-fill' + (to > from ? ' is-up' : '')} /></div>
          </div>
        );
      })}
      <p className="dm-total">{BUDGET.foot}</p>
    </div>
  );
}

function DemoCompare() {
  return (
    <div className="dm-compare">
      {PAIR.map((v, i) => (
        <div key={v.id} className="dm-cmp" style={{ '--i': i }}>
          <img src={v.image} alt="" loading="lazy" decoding="async" />
          <span className="dm-vcard-name">{v.name}</span>
          <dl>
            <div><dt>Speciality</dt><dd>{v.speciality}</dd></div>
            <div><dt>Based in</dt><dd>{v.location}</dd></div>
          </dl>
        </div>
      ))}
    </div>
  );
}

// The question is asked, Noor types, then the written sample answer appears.
function DemoAnswer() {
  const q = ASK[0];
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [phase, setPhase] = useState(() => (reducedMotion() ? 2 : 0));
  useEffect(() => {
    if (!inView || reducedMotion()) return undefined;
    const a = setTimeout(() => setPhase(1), 500);
    const b = setTimeout(() => setPhase(2), 2000);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, [inView]);
  return (
    <div className="dm-chat" ref={ref}>
      <p className="dm-q">{q.q}</p>
      {phase === 1 ? <p className="dm-typing"><span /><span /><span /></p> : null}
      {phase === 2 ? (
        <div className="dm-a">
          <p>{q.a}</p>
          <ul>{q.rows.map(([k, v], i) => <li key={k} style={{ '--i': i }}><strong>{k}</strong>{v}</li>)}</ul>
        </div>
      ) : null}
    </div>
  );
}

function DemoSketch() {
  return (
    <div className="dm-sketch">
      <img src={IDEA.img} alt="" loading="lazy" decoding="async" className="dm-sketch-color" />
      <img src={IDEA.img} alt="" loading="lazy" decoding="async" className="dm-sketch-line" />
      <span className="dm-sketch-tag">Sketch, not a quote</span>
    </div>
  );
}

function SampleAdvice() {
  return (
    <section className="pg-section" aria-labelledby="np-advice">
      <div className="iws-wrap">
        <div className="pg-head">
          <KineticTitle as="h2" id="np-advice" text="The kind of thing Noor says." />
          <p className="pg-note" data-reveal="up">{NOOR.sample}</p>
        </div>
        <ul className="bp-advice" role="list">
          {ADVICE.map(a => (
            <li key={a.id}>
              <span className="pg-frame bp-advice-img lamp" data-reveal="arch"><img src={a.img} alt={a.alt} loading="lazy" decoding="async" /></span>
              <div className="bp-advice-text" data-reveal="up">
                <p className="pg-label pg-label-gold">{a.tab}</p>
                <h3>{a.head}</h3>
                <p>{a.body}</p>
                <dl className="pg-facts">
                  {a.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                </dl>
                {a.foot ? <p className="bp-advice-foot">{a.foot}</p> : null}
                <details className="bp-why">
                  <summary>Why Noor says this</summary>
                  <p>{a.why}</p>
                </details>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TryIt() {
  const { openNoor } = useSite();
  return (
    <section className="pg-section" aria-labelledby="np-try">
      <div className="iws-wrap bp-try">
        <div>
          <KineticTitle as="h2" id="np-try" className="bp-h2" text="Ask what you would ask a friend who knows." />
          <p className="pg-lede" data-reveal="up">Here Noor answers in general. In your plan, it answers from your own dates, guests and budget.</p>
        </div>
        <ul className="bp-questions" role="list">
          {ASK.map((item, i) => (
            <li key={item.q} data-reveal="up" style={{ '--i': i }}><button type="button" onClick={() => openNoor(item.q)}><span>{item.q}</span><NoorMark /></button></li>
          ))}
          <li data-reveal="up" style={{ '--i': ASK.length }}><button type="button" onClick={() => openNoor()}><span>Ask your own question</span><NoorMark /></button></li>
        </ul>
      </div>
    </section>
  );
}

function NoorPromise() {
  const { requestAccount } = useSite();
  return (
    <section className="pg-section bp-last" aria-labelledby="np-promise">
      <div className="iws-wrap bp-promise">
        <NoorOrb className="bp-orb bp-orb-sm" />
        <div>
          <KineticTitle as="h2" id="np-promise" className="bp-h2" text="Noor suggests. You decide." />
          <p className="pg-lede" data-reveal="up">{NOOR.trust}</p>
          <div className="bp-ctas" data-reveal="up">
            <button type="button" className="iws-btn iws-btn-primary" onClick={() => requestAccount('noor-personalise')}>Try Noor with your wedding</button>
            <Link className="iws-underlined" to={paths.ourApproach}>Our approach</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
