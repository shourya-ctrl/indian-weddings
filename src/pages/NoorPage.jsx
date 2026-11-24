// Noor (/noor): her personality and what she does, in eight sections that each
// use one of her emotional states (docs/noor/NOOR-IDENTITY.md). Every capability
// carries an honest status label, demonstrations use sample data, and Noor is
// always presented as an AI assistant that suggests while the couple decides.
import { useEffect, useRef, useState } from 'react';
import { Link } from '../router';
import { paths } from '../routes';
import { ADVICE } from '../landingLogic';
import SiteShell from '../site/SiteShell';
import { useSite } from '../site/siteContext';
import NoorIllustration from '../site/noor/NoorIllustration';
import NoorBadge from '../site/noor/NoorBadge';
import NoorMark from '../site/noor/NoorMark';
import { NOOR_COPY, NOOR_STATES } from '../site/noor/states';
import { KineticTitle, reducedMotion, useInView } from '../site/motion';
import { usePageTitle } from '../site/usePageTitle';
import { VENDOR_RECORDS } from '../data/vendors';
import { categoryById } from '../data/taxonomy';
import './brand-pages.css';
import './noor-page.css';

const BUDGET = ADVICE.find(a => a.id === 'budget');
const IDEA = ADVICE.find(a => a.id === 'idea');
const JAIPUR = VENDOR_RECORDS.filter(v => v.location === 'Jaipur');
const PAIR = ['studio-haveli', 'vermilion-films'].map(s => VENDOR_RECORDS.find(v => v.slug === s)).filter(Boolean);
const lakh = s => parseFloat(String(s).replace(/[^\d.]/g, ''));

const STATUS = {
  dev: { label: 'In development', note: 'Designed in the IndianWeddings prototype; not live yet.' },
  proposed: { label: 'Proposed', note: 'Planned; not yet designed for release.' },
  example: { label: 'Example', note: 'An illustrative example with sample content.' },
};
function StatusLabel({ status }) {
  return <span className={'bp-status bp-status-' + (status === 'example' ? 'proposed' : status)} title={STATUS[status].note}>{STATUS[status].label}</span>;
}

/** Noor speaking a line from her emotional library. */
function NoorSays({ state, children }) {
  return (
    <p className="np-says" data-reveal="up">
      <NoorBadge size={30} />
      <span>{children || NOOR_STATES[state].copy}</span>
    </p>
  );
}

export default function NoorPage() {
  usePageTitle('Noor');
  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only)">
      <div className="np">
        <Hero />
        <Taste />
        <Discover />
        <Imagine />
        <Numbers />
        <Choose />
        <InAction />
        <Begin />
      </div>
    </SiteShell>
  );
}

/* 01 · Meet Noor */
function Hero() {
  const { requestAccount } = useSite();
  const toTaste = e => { e.preventDefault(); document.getElementById('np-taste')?.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth' }); };
  return (
    <header className="np-hero">
      <div className="iws-wrap np-hero-grid">
        <div className="np-hero-copy">
          <p className="pg-label pg-label-gold" data-reveal="up">Your AI wedding companion</p>
          <KineticTitle className="pg-h1 np-h1" text="Meet Noor. Your wedding, understood." />
          <p className="pg-lede" data-reveal="up" style={{ '--i': 2 }}>Every wedding begins with a feeling. Noor helps you turn yours into a celebration that feels unmistakably yours.</p>
          <p className="np-hero-what" data-reveal="up" style={{ '--i': 3 }}>She learns your taste, finds the right people, makes sense of the numbers and helps you compare, so the next decision always feels easier.</p>
          <div className="bp-ctas" data-reveal="up" style={{ '--i': 4 }}>
            <button type="button" className="iws-btn iws-btn-primary" onClick={() => requestAccount('noor-personalise')}>Start planning with Noor</button>
            <a className="iws-underlined" href="#np-taste" onClick={toTaste}>See what Noor can do</a>
          </div>
          <p className="np-ai-note" data-reveal="up" style={{ '--i': 5 }}><NoorMark size={14} /> Noor is an AI assistant. She suggests; you decide.</p>
        </div>
        <NoorIllustration state="hero" className="np-hero-art" />
      </div>
    </header>
  );
}

/* Shared section layout: copy beside an illustration, then the example. */
function Section({ id, n, title, lede, points, status, state, says, children, flip }) {
  const [exRef, live] = useInView({ threshold: 0.25 });
  return (
    <section className={'pg-section np-sec' + (flip ? ' is-flip' : '')} aria-labelledby={id}>
      <div className="iws-wrap">
        <div className="np-sec-grid">
          <div className="np-sec-copy">
            <p className="np-n" data-reveal="up">{n}</p>
            <KineticTitle as="h2" id={id} className="np-h2" text={title} />
            <p className="pg-lede" data-reveal="up">{lede}</p>
            {points ? <ul className="np-points" data-reveal="up">{points.map(p => <li key={p}>{p}</li>)}</ul> : null}
            {status ? <p className="bp-status-line" data-reveal="up">{[].concat(status).map(s => <StatusLabel key={s} status={s} />)}</p> : null}
            {state ? <NoorSays state={state}>{says}</NoorSays> : null}
          </div>
          {state ? <NoorIllustration state={state} className="np-sec-art" decorative /> : null}
        </div>
        {children ? <div className="np-example" data-reveal="fade"><div ref={exRef} className={live ? 'is-live' : undefined}>{children}</div></div> : null}
      </div>
    </section>
  );
}

/* 02 · She understands your taste (Curious) */
const SCATTER = ['Marigold, not roses', 'Pheras at golden hour', 'Nani needs a ground-floor room', 'Jaipur? Or Udaipur?', 'Around 120 people', 'Nothing too loud', 'That blush lehenga'];
const VISION = [['Feel', 'Intimate, warm and golden'], ['Where', 'A heritage haveli in Jaipur'], ['When', 'Late February, before the heat'], ['Guests', 'About 120'], ['Must-haves', 'Marigold everywhere, a ground-floor room for Nani'], ['Keep gentle', 'A quieter sangeet, more dinner than dance floor']];
function Taste() {
  return (
    <Section id="np-taste" n="02" title="She understands your taste." state="curious"
      lede="Bring her the half-formed ideas: the screenshots, the “not this, more like that”, the one song you know you want. Noor asks one good question at a time, and turns it into a vision you can plan from."
      points={['Your celebrations, from the roka to the reception', 'The look and feel you keep saving', 'Where you’re dreaming of, and when', 'What matters most, and what can give', 'The budget you want to hold']}
      status="dev">
      <div className="np-vision">
        <div className="np-scatter" aria-label="Scattered ideas, as a couple might share them">
          <p className="np-ex-label">What you share</p>
          <ul>
            {SCATTER.map((s, i) => <li key={s} style={{ '--i': i }}>{s}</li>)}
            {ADVICE.slice(0, 3).map((a, i) => <li key={a.id} className="np-scatter-img" style={{ '--i': i + SCATTER.length }}><img src={a.img} alt="" loading="lazy" decoding="async" /></li>)}
          </ul>
        </div>
        <span className="np-vision-arrow" aria-hidden="true">
          <svg viewBox="0 0 48 16" width="48" height="16"><path d="M0 8h44M37 2l7 6-7 6" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
        </span>
        <div className="np-vision-card">
          <p className="np-ex-label">Your wedding vision, as Noor understands it</p>
          <dl>{VISION.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        </div>
      </div>
      <p className="np-sample">Example with sample content.</p>
    </Section>
  );
}

/* 03 · She knows where to look (Thoughtful) */
function Discover() {
  return (
    <Section id="np-discover" n="03" title="She knows where to look." state="thoughtful" flip
      says="These three fit what you’ve told me. Here’s why each one is here."
      lede="Noor starts from your city, dates, guest count, style and budget, and shows you vendors whose work fits, with the reason each one appears. No scores, no rankings dressed up as certainty: she tells you why, in words."
      points={['Portfolios that match the look you’ve saved', 'Vendors who work where you’re celebrating', 'Services matched to your events', 'Budget fit, once vendors share their prices']}
      status="dev">
      <div className="dm-vendors np-vendors">
        <p className="dm-caption">For a sample wedding in Jaipur</p>
        <div className="np-vcards">
          {JAIPUR.slice(0, 3).map(v => (
            <article key={v.id} className="np-vcard">
              <img src={v.image} alt="" loading="lazy" decoding="async" />
              <span className="dm-vcard-cat">{(categoryById(v.primaryCategory) || {}).short}</span>
              <h3>{v.name}</h3>
              <p className="np-why"><NoorMark size={12} /> {v.speciality}, based in Jaipur, where you’re celebrating.</p>
            </article>
          ))}
        </div>
      </div>
      <p className="np-sample">Sample vendors. Not real IndianWeddings listings.</p>
    </Section>
  );
}

/* 04 · She helps you imagine it (Dreamer) */
function Imagine() {
  return (
    <Section id="np-imagine" n="04" title="She helps you imagine it." state="dreamer"
      lede="Describe the feeling, and Noor sketches how a venue might be dressed for it: a starting point to talk through with your décorator. A sketch to inspire, never a quote or a promise."
      points={['Décor ideas drawn from the photographs you save', 'A first look at how a space could be dressed', 'A vision board to share with your family and décorator']}
      status={['proposed', 'example']}>
      <div className="np-imagine">
        <div className="dm-sketch">
          <img src={IDEA.img} alt="" loading="lazy" decoding="async" className="dm-sketch-color" />
          <img src={IDEA.img} alt="" loading="lazy" decoding="async" className="dm-sketch-line" />
          <span className="dm-sketch-tag">Sketch, not a quote</span>
        </div>
        <div className="np-imagine-note">
          <p className="np-ex-label">You said</p>
          <p className="np-quote">“Lots of marigold, warm light, and a mandap that doesn’t feel like a stage.”</p>
          <p className="np-ex-label">Noor’s idea</p>
          <p>Low marigold strings at eye height rather than overhead, lanterns along the courtyard walls, and the mandap open on all four sides so the family sits close.</p>
        </div>
      </div>
      <p className="np-sample">Illustrative example. Visualisation is proposed and not yet built.</p>
    </Section>
  );
}

/* 05 · She helps you make sense of the numbers (Reassurer) */
function Numbers() {
  const max = Math.max(...BUDGET.rows.flatMap(([, v]) => v.split('→').map(lakh)));
  return (
    <Section id="np-numbers" n="05" title="She helps you make sense of the numbers." state="reassurer" flip
      says={NOOR_COPY.reassurance}
      lede="Budgets are where planning gets stressful. Noor keeps your total steady, shows where it’s going, explains each estimate in plain words, and finds a gentler way through when something runs over. Nothing moves until you say so."
      points={['Sharing your total across the celebrations', 'Understanding what an estimate includes', 'Comparing quotes line by line', 'Seeing the trade-off before you make it', 'Tracking what you’ve spent, in the planning app']}
      status="dev">
      <div className="dm-budget np-budget">
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
      <p className="np-sample">Sample figures.</p>
    </Section>
  );
}

/* 06 · She helps you choose (Thoughtful, shown through the comparison itself) */
function Choose() {
  return (
    <Section id="np-choose" n="06" title="She helps you choose."
      lede="Side by side, Noor explains what’s actually different (services, style, where they’re based, and price once quotes arrive) and which might suit you better, and why. The choice is always yours."
      status={['dev', 'example']}>
      <div className="np-choose">
        <div className="np-pair">
          {PAIR.map(v => (
            <article key={v.id} className="np-cmp">
              <img src={v.image} alt="" loading="lazy" decoding="async" />
              <h3>{v.name}</h3>
              <dl>
                <div><dt>Offers</dt><dd>{v.speciality}</dd></div>
                <div><dt>Based in</dt><dd>{v.location}</dd></div>
                <div><dt>Price</dt><dd>Not shared yet</dd></div>
              </dl>
            </article>
          ))}
        </div>
        <div className="np-choose-note">
          <p className="np-says"><NoorBadge size={30} /><span>{NOOR_STATES.thoughtful.copy}</span></p>
          <p>Studio Haveli is based in Jaipur, where you’re celebrating, and covers portraits and film together, so one team captures everything.</p>
          <p>Vermilion Films focuses on wedding films and is based in Delhi, so you’d plan for their travel.</p>
          <p>Neither has shared prices here, so ask both for a quote for your dates. If one team for everything matters most to you, I’d start with Studio Haveli.</p>
          <Link className="iws-underlined" to={paths.compare(PAIR.map(v => v.id))}>Compare vendors yourself</Link>
        </div>
      </div>
      <p className="np-sample">Sample vendors and an illustrative explanation.</p>
    </Section>
  );
}

/* 07 · See Noor in action: a scripted demonstration */
const FEELS = [
  { id: 'intimate', label: 'Candlelit and intimate', says: 'Candlelit and intimate, with the people who matter most.', reflect: 'So: warm light, a smaller circle, and room to actually talk to everyone.', direction: 'a heritage haveli in Jaipur in late February. Courtyards hold candlelight beautifully, the evenings are cool, and the scale keeps it close.' },
  { id: 'joyful', label: 'Big, bright and joyful', says: 'Big, bright and joyful. Everyone dancing.', reflect: 'So: colour, music, and a crowd that fills the room.', direction: 'a heritage hotel in Jaipur with a lawn for the sangeet and a palace courtyard for the pheras. February gives you clear skies for an outdoor celebration.' },
  { id: 'elegant', label: 'Slow and elegant', says: 'Slow and elegant. Nothing rushed.', reflect: 'So: a gentle pace, long dinners, and fewer, finer details.', direction: 'a quieter heritage property in Jaipur, with the ceremony in the morning light and one long dinner table in the evening.' },
];
const SIZES = ['Around 80', 'Around 150', '250 or more'];

function InAction() {
  const { requestAccount } = useSite();
  const [log, setLog] = useState([{ who: 'noor', text: 'So, tell me what you’re dreaming of. How should the day feel?' }]);
  const [step, setStep] = useState(0);
  const [thinking, setThinking] = useState(false);
  const [feel, setFeel] = useState(null);
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const later = (fn, ms) => { if (reducedMotion()) { fn(); return; } timers.current.push(setTimeout(fn, ms)); };
  const noorReplies = (items, next) => {
    setThinking(true);
    later(() => { setThinking(false); setLog(l => [...l, ...items]); setStep(next); }, 850);
  };
  const pickFeel = f => {
    setFeel(f);
    setLog(l => [...l, { who: 'you', text: f.says }]);
    setStep(-1);
    noorReplies([{ who: 'noor', text: `${f.reflect} Roughly how many guests are you imagining?` }], 1);
  };
  const pickSize = s => {
    setLog(l => [...l, { who: 'you', text: `${s} guests.` }]);
    setStep(-1);
    noorReplies([
      { who: 'noor', text: `${s.startsWith('250') ? 'A full house, then. ' : ''}Here’s a direction I think you’d love: ${feel.direction}` },
      { who: 'noor', kind: 'vendors' },
      { who: 'noor', text: 'Next, save the ones you like to your shortlist and ask each about your dates. I’ll help you prepare the questions; you decide who to contact.' },
    ], 2);
  };
  const restart = () => { timers.current.forEach(clearTimeout); setLog([{ who: 'noor', text: 'So, tell me what you’re dreaming of. How should the day feel?' }]); setFeel(null); setThinking(false); setStep(0); };

  return (
    <section className="pg-section np-sec" aria-labelledby="np-action">
      <div className="iws-wrap np-action">
        <div className="np-sec-copy">
          <p className="np-n" data-reveal="up">07</p>
          <KineticTitle as="h2" id="np-action" className="np-h2" text="See Noor in action." />
          <p className="pg-lede" data-reveal="up">A short conversation, the way planning with Noor begins: she asks about your vision, understands what you mean, suggests a direction and shows you who could bring it to life.</p>
          <p className="np-demo-note" data-reveal="up"><strong>Demonstration.</strong> Sample content with scripted replies. Not connected to Noor.</p>
        </div>
        <div className="np-chat" data-reveal="fade">
          <div className="np-chat-head"><NoorBadge size={32} state={thinking ? 'thinking' : 'rest'} /><span><b>Noor</b><small>AI wedding companion · demo</small></span></div>
          <ol className="np-chat-log" aria-live="polite">
            {log.map((m, i) => (
              <li key={i} className={'np-msg is-' + m.who}>
                {m.kind === 'vendors' ? (
                  <div className="np-msg-vendors">
                    {JAIPUR.slice(0, 3).map(v => (
                      <span key={v.id}><img src={v.image} alt="" loading="lazy" decoding="async" /><b>{v.name}</b><small>{v.speciality}</small></span>
                    ))}
                  </div>
                ) : m.text}
              </li>
            ))}
            {thinking ? <li className="np-msg is-noor is-thinking">{NOOR_COPY.thinking}</li> : null}
          </ol>
          <div className="np-chat-choices">
            {step === 0 ? FEELS.map(f => <button key={f.id} type="button" className="np-choice" onClick={() => pickFeel(f)}>{f.label}</button>) : null}
            {step === 1 ? SIZES.map(s => <button key={s} type="button" className="np-choice" onClick={() => pickSize(s)}>{s}</button>) : null}
            {step === 2 ? (
              <>
                <button type="button" className="iws-btn iws-btn-primary" onClick={() => requestAccount('noor-personalise')}>Start planning with Noor</button>
                <button type="button" className="np-choice" onClick={restart}>Try another answer</button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 08 · Begin your journey (Cheerleader) */
function Begin() {
  const { requestAccount } = useSite();
  return (
    <section className="pg-section bp-last np-begin" aria-labelledby="np-begin">
      <div className="iws-wrap np-begin-grid">
        <NoorIllustration state="cheerleader" className="np-begin-art" decorative />
        <div>
          <KineticTitle as="h2" id="np-begin" className="np-h2" text="Your story. Your vision. Let’s begin." />
          <p className="pg-lede" data-reveal="up">Tell Noor about your celebration, and everything from vendors to budget starts from your wedding, not weddings in general.</p>
          <div className="bp-ctas" data-reveal="up">
            <button type="button" className="iws-btn iws-btn-primary" onClick={() => requestAccount('noor-personalise')}>Start planning with Noor</button>
            <Link className="iws-underlined" to={paths.ourApproach}>Our approach</Link>
          </div>
          <p className="np-trust" data-reveal="up">Noor is an AI assistant. She suggests, explains and compares; you make every decision. She never books, pays, negotiates or messages anyone on your behalf.</p>
        </div>
      </div>
    </section>
  );
}
