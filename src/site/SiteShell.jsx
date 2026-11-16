// The shell every destination page renders inside: header, footer, the
// persistent Ask Noor entry and the account prompt. Pages reach these through
// useSite().
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from '../router';
import SiteHeader, { NoorMark } from './SiteHeader';
import SiteFooter from './SiteFooter';
import AskNoorPanel from './AskNoorPanel';
import AccountPrompt from './AccountPrompt';
import { prepareIntent } from './intent';
import { getSession } from './session';
import { COMPARE_MAX, SiteContext } from './siteContext';
import CompareTray from './CompareTray';
import './site.css';
import './page.css';
import './motion.css';
import { useMotion } from './motion';

export { useSite, COMPARE_MAX } from './siteContext';

const COMPARE_KEY = 'iw-compare';
const readCompare = () => { try { return JSON.parse(sessionStorage.getItem(COMPARE_KEY)) || []; } catch (_) { return []; } };

export default function SiteShell({ children, footerCredit, compareTray = false, home = false }) {
  const { query } = useLocation();
  const mainRef = useRef(null);
  useMotion(mainRef);
  const session = useMemo(() => getSession(query), [query.toString()]); // eslint-disable-line react-hooks/exhaustive-deps
  const [noor, setNoor] = useState({ open: false, seed: null });
  const [account, setAccount] = useState(null);

  const openNoor = useCallback(seed => setNoor({ open: true, seed: seed || null }), []);
  const closeNoor = useCallback(() => setNoor(n => ({ ...n, open: false })), []);
  const requestAccount = useCallback((intent, details = {}) => {
    setNoor(n => ({ ...n, open: false }));
    setAccount({ intent, details, links: prepareIntent(intent, details) });
  }, []);
  const closeAccount = useCallback(() => setAccount(null), []);

  // Vendors chosen for comparison, kept for this browser session only.
  const [compare, setCompare] = useState(readCompare);
  useEffect(() => {
    try { sessionStorage.setItem(COMPARE_KEY, JSON.stringify(compare)); } catch (_) { /* session only */ }
  }, [compare]);
  const toggleCompare = useCallback(id => setCompare(c => (c.includes(id) ? c.filter(x => x !== id) : c.length >= COMPARE_MAX ? c : [...c, id])), []);
  const clearCompare = useCallback(() => setCompare([]), []);

  const value = useMemo(() => ({ session, openNoor, requestAccount, compare, toggleCompare, clearCompare }), [session, openNoor, requestAccount, compare, toggleCompare, clearCompare]);

  const showTray = compareTray && compare.length > 0;
  useEffect(() => {
    document.documentElement.toggleAttribute('data-iws-tray', showTray);
    return () => document.documentElement.removeAttribute('data-iws-tray');
  }, [showTray]);

  return (
    <SiteContext.Provider value={value}>
      <div className="iws-page">
        <a className="iws-skip" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main" ref={mainRef} className="iws-main">{home ? children : <div className="pg-enter">{children}</div>}</main>
        <SiteFooter credit={footerCredit} />
        {showTray ? <CompareTray /> : null}
        {noor.open ? null : (
          <button type="button" className="iws-noor-fab" onClick={() => openNoor()} aria-label="Ask Noor">
            <NoorMark size={22} />
          </button>
        )}
      </div>
      <AskNoorPanel open={noor.open} seed={noor.seed} onClose={closeNoor} onPersonalise={() => requestAccount('noor-personalise')} />
      <AccountPrompt request={account} onClose={closeAccount} />
    </SiteContext.Provider>
  );
}
