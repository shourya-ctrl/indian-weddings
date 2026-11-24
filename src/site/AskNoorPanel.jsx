// The persistent Ask Noor panel: the public, non-personalised Noor demo.
// It reuses the homepage's written sample answers (ASK, ASK_FREE) and never
// opens on its own. Side panel on wide screens, bottom sheet on phones.
import { useEffect, useRef, useState } from 'react';
import { ASK, ASK_FREE } from '../landingLogic';
import { Link } from '../router';
import { paths } from '../routes';
import { useDialog } from './useDialog';
import NoorBadge from './noor/NoorBadge';
import { NOOR_COPY } from './noor/states';
import { reducedMotion } from './motion';

export default function AskNoorPanel({ open, seed, onClose, onPersonalise }) {
  const ref = useDialog(open, onClose);
  const [answer, setAnswer] = useState(null);
  const [text, setText] = useState('');
  const [lastSeed, setLastSeed] = useState(null);
  // A short, calm thinking moment before each answer, so Noor reads as someone
  // considering the question (her jhumka sways). Skipped under reduced motion.
  const [thinking, setThinking] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => clearTimeout(timer.current), []);

  // A seeded question (from a page) is asked when the panel opens with it.
  // A known sample question gets its written answer; anything else gets the
  // honest general reply.
  if (open && seed && seed !== lastSeed) {
    setLastSeed(seed);
    const known = ASK.find(item => item.q === seed);
    setAnswer(known || { q: seed, ...ASK_FREE });
  }
  if (!open) return null;

  const ask = item => {
    clearTimeout(timer.current);
    if (reducedMotion()) { setAnswer(item); return; }
    setThinking(true);
    timer.current = setTimeout(() => { setAnswer(item); setThinking(false); }, 750);
  };
  const submit = e => {
    e.preventDefault();
    const q = text.trim();
    if (!q) return;
    ask({ q, ...ASK_FREE });
    setText('');
  };

  return (
    <div className="iws-overlay" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div ref={ref} className="iws-noor" role="dialog" aria-modal="true" aria-labelledby="iws-noor-h">
        <div className="iws-noor-head">
          <h2 id="iws-noor-h"><NoorBadge size={36} state={thinking ? 'thinking' : 'rest'} /> Ask Noor</h2>
          <button type="button" className="iws-icon-btn" onClick={onClose} aria-label="Close Ask Noor" data-autofocus="">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4.5 4.5l11 11M15.5 4.5l-11 11" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          </button>
        </div>
        <p className="iws-noor-note">Noor answers in general here. In your plan, it answers from your own dates, guests and budget.</p>

        <div className="iws-noor-body" aria-live="polite">
          {thinking ? <p className="iws-noor-thinking">{NOOR_COPY.thinking}</p> : answer ? (
            <div className="iws-noor-answer">
              <p className="iws-noor-q">{answer.q}</p>
              <p>{answer.a}</p>
              {answer.rows && answer.rows.length ? (
                <dl>
                  {answer.rows.map(([k, val]) => (
                    <div key={k}><dt>{k}</dt><dd>{val}</dd></div>
                  ))}
                </dl>
              ) : null}
              {answer.foot ? <p className="iws-noor-foot">{answer.foot}</p> : null}
            </div>
          ) : null}
          <p className="iws-noor-try">{answer ? 'Ask something else' : 'Try asking'}</p>
          <ul className="iws-noor-qs">
            {ASK.map(item => (
              <li key={item.q}><button type="button" onClick={() => ask(item)}>{item.q}</button></li>
            ))}
          </ul>
        </div>

        <form className="iws-noor-form" onSubmit={submit}>
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Or ask your own question" aria-label="Ask Noor a question" maxLength={160} enterKeyHint="send" />
          <button type="submit" className="iws-btn iws-btn-ghost">Ask</button>
        </form>
        <div className="iws-noor-cta">
          <button type="button" className="iws-btn iws-btn-primary" onClick={onPersonalise}>Make it personal</button>
          <Link className="iws-underlined" to={paths.noor} onClick={onClose}>Discover Noor</Link>
        </div>
      </div>
    </div>
  );
}
