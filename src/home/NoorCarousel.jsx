// Homepage: Noor in one section. Three sample moments of advice and a slide
// for asking Noor, as a carousel. It advances on its own (paused on hover,
// focus, off screen, after the visitor picks a slide, and under reduced
// motion); each moment can be answered Yes or No to show what happens next.
import { useEffect, useRef, useState } from 'react';
import { Link } from '../router';
import { paths } from '../routes';
import { ADV_NAMES, ADVICE, ASK } from '../landingLogic';
import { useSite } from '../site/siteContext';
import { NoorMark } from '../site/SiteHeader';
import NoorOrb from '../site/NoorOrb';
import { KineticTitle, reducedMotion } from '../site/motion';
import './home.css';

const NOOR = ADV_NAMES.Noor;
const SLIDES = [...ADVICE.map(a => ({ id: a.id, tab: a.tab, sub: a.sub, advice: a })), { id: 'ask', tab: 'Ask Noor yourself', sub: 'What you would ask a friend who knows' }];
const DWELL = 9000;

export default function NoorCarousel() {
  const { openNoor } = useSite();
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(() => !reducedMotion());
  const [hold, setHold] = useState(false);
  const [visible, setVisible] = useState(false);
  const [answers, setAnswers] = useState({});
  const [why, setWhy] = useState({});
  const root = useRef(null);

  useEffect(() => {
    const el = root.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = auto && !hold && visible;
  useEffect(() => {
    if (!running) return undefined;
    const t = setTimeout(() => setI(n => (n + 1) % SLIDES.length), DWELL);
    return () => clearTimeout(t);
  }, [running, i]);

  const pick = n => { setAuto(false); setI(n); };
  const slide = SLIDES[i];

  return (
    <section
      id="noor" ref={root} className="hn" aria-labelledby="hn-h" data-screen-label="04 Noor"
      onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}
      onFocusCapture={() => setHold(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setHold(false); }}
    >
      <div className="hn-wrap">
        <div className="hn-side">
          <KineticTitle as="h2" id="hn-h" className="hn-h" text="The friend who has been to every wedding." />
          <p className="hn-trust" data-reveal="up">{NOOR.trust}</p>
          <div role="tablist" aria-label="Moments with Noor" className="hn-tabs" data-reveal="up" style={{ '--i': 2 }}>
            {SLIDES.map((s, n) => (
              <button key={s.id} type="button" role="tab" id={`hn-tab-${s.id}`} aria-selected={n === i} aria-controls="hn-stage" tabIndex={n === i ? 0 : -1} className={'hn-tab' + (n === i ? ' is-on' : '')} onClick={() => pick(n)}>
                <span className="hn-tab-label">{s.tab}</span>
                <span className="hn-tab-sub">{s.sub}</span>
                <span className="hn-tab-bar" aria-hidden="true"><span className={n === i && running ? 'is-running' : ''} style={{ animationDuration: `${DWELL}ms` }} /></span>
              </button>
            ))}
          </div>
          <div className="hn-ctas" data-reveal="up" style={{ '--i': 3 }}>
            <Link className="hn-btn" to={paths.noor}>Meet Noor</Link>
            <button type="button" className="hn-link" onClick={() => openNoor()}><NoorMark /> Ask Noor a question</button>
          </div>
        </div>

        <div id="hn-stage" role="tabpanel" aria-labelledby={`hn-tab-${slide.id}`} className="hn-stage" data-reveal="fade">
          {SLIDES.map((s, n) => (
            <div key={s.id} className={'hn-slide' + (n === i ? ' is-on' : '')} aria-hidden={n !== i} inert={n !== i ? '' : undefined}>
              {s.advice ? (
                <Moment a={s.advice} answer={answers[s.id]} onAnswer={v => { setAuto(false); setAnswers(x => ({ ...x, [s.id]: v })); }} showWhy={!!why[s.id]} onWhy={() => { setAuto(false); setWhy(x => ({ ...x, [s.id]: !x[s.id] })); }} />
              ) : (
                <div className="hn-ask">
                  <NoorOrb className="hn-ask-orb" />
                  <p className="hn-ask-note">Noor answers in general here, and from your own dates, guests and budget in your plan.</p>
                  <ul>
                    {ASK.map(q => <li key={q.q}><button type="button" onClick={() => openNoor(q.q)}><span>{q.q}</span><NoorMark /></button></li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <p className="hn-sample">{NOOR.sample}</p>
        </div>
      </div>
    </section>
  );
}

function Moment({ a, answer, onAnswer, showWhy, onWhy }) {
  return (
    <div className="hn-moment">
      <span className="hn-img"><img src={a.img} alt={a.alt} loading="lazy" decoding="async" /></span>
      <div className="hn-card">
        <h3>{a.head}</h3>
        <p>{a.body}</p>
        <dl>{a.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
        {a.foot ? <p className="hn-foot">{a.foot}</p> : null}
        {answer ? (
          <p className="hn-outcome" role="status">{answer === 'yes' ? a.done : a.skipped}</p>
        ) : (
          <div className="hn-answers">
            <button type="button" className="hn-yes" onClick={() => onAnswer('yes')}>{a.yes}</button>
            <button type="button" className="hn-no" onClick={() => onAnswer('no')}>{a.no}</button>
            <button type="button" className="hn-why" aria-expanded={showWhy} onClick={onWhy}>Why this?</button>
          </div>
        )}
        {showWhy && !answer ? <p className="hn-why-text">{a.why}</p> : null}
      </div>
    </div>
  );
}
