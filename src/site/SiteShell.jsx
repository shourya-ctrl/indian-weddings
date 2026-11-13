// The shell every destination page renders inside: header, footer, the
// persistent Ask Noor entry and the account prompt. Pages reach these through
// useSite().
import { useCallback, useMemo, useState } from 'react';
import { useLocation } from '../router';
import SiteHeader, { NoorMark } from './SiteHeader';
import SiteFooter from './SiteFooter';
import AskNoorPanel from './AskNoorPanel';
import AccountPrompt from './AccountPrompt';
import { prepareIntent } from './intent';
import { getSession } from './session';
import { SiteContext } from './siteContext';
import './site.css';

export { useSite } from './siteContext';

export default function SiteShell({ children, footerCredit }) {
  const { query } = useLocation();
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

  const value = useMemo(() => ({ session, openNoor, requestAccount }), [session, openNoor, requestAccount]);

  return (
    <SiteContext.Provider value={value}>
      <div className="iws-page">
        <a className="iws-skip" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main" className="iws-main">{children}</main>
        <SiteFooter credit={footerCredit} />
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
