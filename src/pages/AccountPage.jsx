// Shared account screens (/account/create, /account/login): email or phone,
// then a 6-digit code, as in the couples app. Sign-in is not connected yet,
// so no code is sent; the screens say so and offer the way back to the
// action the visitor started (intent and return carried in the URL).
import { useId, useState } from 'react';
import { Link, navigate, useLocation } from '../router';
import { LEGAL_PAGES_LIVE, matchRoute, paths } from '../routes';
import { IWU } from '../landingLogic';
import SiteShell from '../site/SiteShell';
import { INTENT_COPY, intentTitle } from '../site/intent';
import { usePageTitle } from '../site/usePageTitle';
import { KineticTitle } from '../site/motion';
import { vendorById } from '../data/vendors';
import './brand-pages.css';

// A slow crossfade of four photographs in the arch.
const SLIDES = ['2025/08/scenic-wedding-ptaufiq-photography.jpg', '2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg', '2025/08/wedding-couple-sunset-ptaufiq-photography.jpg', '2018/10/ptaufiq-indian-wedding-jaisalmer-india-destination-engagement-scaled.jpg'];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[0-9][0-9 ()-]{6,}$/;

/** A same-site path that resolves to a page; anything else is ignored. */
function safeReturn(raw) {
  if (!raw || !raw.startsWith('/') || raw.startsWith('//')) return null;
  const path = raw.split(/[?#]/)[0];
  const page = matchRoute(path.length > 1 ? path.replace(/\/$/, '') : path).page;
  return page === 'not-found' || page.startsWith('account') ? null : raw;
}

export default function AccountPage({ mode }) {
  const { query } = useLocation();
  const intent = query.get('intent') || '';
  const back = safeReturn(query.get('return'));
  const vendor = vendorById(query.get('vendor') || '');
  const login = mode === 'login';
  const heading = INTENT_COPY[intent] ? intentTitle(intent, { vendorName: vendor && vendor.name }) : login ? 'Welcome back.' : 'Begin planning your wedding.';
  usePageTitle(login ? 'Log in' : 'Create your account');

  const carry = { intent: intent || undefined, return: back || undefined, vendor: vendor ? vendor.id : undefined };
  const other = login ? paths.accountCreate(carry) : paths.accountLogin(carry);

  return (
    <SiteShell footerCredit="Photography: PTaufiq Photography (design review only)">
      <section className="pg-intro bp-account bp-last">
        <div className="iws-wrap bp-account-grid">
          <div className="bp-account-form">
            <KineticTitle key={heading} className="pg-h1 bp-account-h1" text={heading} />
            <p className="pg-lede">{login ? 'Use the email address or phone number you signed up with. We’ll send you a code.' : 'Your email address or phone number is all you need. We’ll send you a code; there’s no password to remember.'}</p>
            <p className="bp-preview" role="note">Preview: sign-in isn’t connected yet, so no code will be sent.</p>
            <Flow login={login} back={back} />
            <p className="bp-switch">
              {login ? 'New to IndianWeddings? ' : 'Already have an account? '}
              <Link to={other}>{login ? 'Create an account' : 'Log in'}</Link>
            </p>
            {!login && LEGAL_PAGES_LIVE ? <p className="pg-note">By continuing you agree to the <Link className="bp-inline" to={paths.terms}>terms</Link> and the <Link className="bp-inline" to={paths.privacy}>privacy notice</Link>.</p> : null}
          </div>
          <figure className="bp-account-figure" aria-hidden="true">
            <span className="bp-arch bp-slides" data-reveal="arch" style={{ '--n': SLIDES.length }}>
              {SLIDES.map((src, i) => <img key={src} src={IWU + src} alt="" decoding="async" style={{ '--i': i }} />)}
            </span>
          </figure>
        </div>
      </section>
    </SiteShell>
  );
}

function Flow({ login, back }) {
  const uid = useId();
  const [step, setStep] = useState('contact');
  const [contact, setContact] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const submitContact = e => {
    e.preventDefault();
    const v = contact.trim();
    if (!EMAIL.test(v) && !PHONE.test(v)) { setError('Enter an email address, or a phone number with its country code.'); return; }
    setError(''); setStep('code');
  };
  const submitCode = e => {
    e.preventDefault();
    if (!/^\d{6}$/.test(code)) { setError('Enter the 6-digit code.'); return; }
    setError(''); setStep('done');
  };

  if (step === 'done') {
    return (
      <div className="bp-done" role="status">
        <h2>Sign-in isn’t connected yet.</h2>
        <p>{login ? 'You aren’t logged in.' : 'No account was created.'} When accounts open, this is where you would continue{back ? ' and go straight back to what you were doing' : ''}.</p>
        <div className="bp-ctas">
          {back ? <button type="button" className="iws-btn iws-btn-primary" onClick={() => navigate(back)}>Back to where you were</button> : null}
          <Link className={back ? 'iws-underlined' : 'iws-btn iws-btn-primary'} to={paths.vendors}>Explore vendors</Link>
        </div>
      </div>
    );
  }

  if (step === 'code') {
    return (
      <form className="bp-form" onSubmit={submitCode} noValidate>
        <label htmlFor={`${uid}-code`}>The 6-digit code sent to {contact.trim()}</label>
        <input id={`${uid}-code`} inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]*" maxLength={6} value={code}
          onChange={e => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))} aria-invalid={Boolean(error)} aria-describedby={error ? `${uid}-err` : undefined} className="bp-code" autoFocus />
        {error ? <p id={`${uid}-err`} className="bp-error">{error}</p> : null}
        <button type="submit" className="iws-btn iws-btn-primary bp-submit">{login ? 'Log in' : 'Create my account'}</button>
        <div className="bp-form-links">
          <button type="button" onClick={() => { setCode(''); setError(''); }}>Send a new code</button>
          <button type="button" onClick={() => { setStep('contact'); setCode(''); setError(''); }}>Use a different email or number</button>
        </div>
      </form>
    );
  }

  return (
    <form className="bp-form" onSubmit={submitContact} noValidate>
      <label htmlFor={`${uid}-contact`}>Email or phone number</label>
      <input id={`${uid}-contact`} type="text" inputMode="email" autoComplete="username" value={contact} maxLength={120}
        onChange={e => setContact(e.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? `${uid}-err` : undefined} placeholder="you@example.com or +91 98…" />
      {error ? <p id={`${uid}-err`} className="bp-error">{error}</p> : null}
      <button type="submit" className="iws-btn iws-btn-primary bp-submit">Send me a code</button>
    </form>
  );
}
