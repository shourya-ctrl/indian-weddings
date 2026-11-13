// Site-wide header for destination pages. It carries the homepage header's
// look (fixed, transparent over the top of the page, solid with a hairline
// once scrolled; drawer below 1140px) with route-based navigation.
import { useEffect, useState } from 'react';
import { Link, useLocation } from '../router';
import { activeSection, paths } from '../routes';
import { useSite } from './siteContext';

const NAV = [
  { key: 'noor', label: 'Noor', to: paths.noor },
  { key: 'vendors', label: 'Vendors', to: paths.vendors },
  { key: 'real-weddings', label: 'Real Weddings', to: paths.realWeddings },
  { key: 'our-approach', label: 'Our Approach', to: paths.ourApproach },
];

export function NoorMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="iws-noor-mark">
      <circle cx="10" cy="10" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}

export default function SiteHeader() {
  const { pathname } = useLocation();
  const { openNoor, requestAccount } = useSite();
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const active = activeSection(pathname);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setMenu(false); }, [pathname]);
  // The floating Ask Noor button steps aside while the drawer (which has its own Ask Noor row) is open.
  useEffect(() => {
    document.documentElement.toggleAttribute('data-iws-menu', menu);
    return () => document.documentElement.removeAttribute('data-iws-menu');
  }, [menu]);
  useEffect(() => {
    if (!menu) return undefined;
    const onKey = e => { if (e.key === 'Escape') setMenu(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menu]);

  const navLink = (item, cls) => (
    <Link key={item.key} to={item.to} className={cls} aria-current={active === item.key ? 'page' : undefined}>{item.label}</Link>
  );
  const begin = cls => (
    <a className={cls} href={paths.accountCreate({ intent: 'begin-planning' })} onClick={e => { e.preventDefault(); requestAccount('begin-planning'); }}>Begin planning</a>
  );

  return (
    <header className={'iws-header' + (solid || menu ? ' is-solid' : '')}>
      <nav className="iws-bar" aria-label="Primary">
        {/* The homepage manages its own lifecycle, so it loads as a full page. */}
        <a className="iws-logo" href="/" aria-label="IndianWeddings, home">INDIAN<span>WEDDINGS</span></a>
        <div className="iws-links">{NAV.map(item => navLink(item, 'iws-link'))}</div>
        <div className="iws-actions">
          <Link className="iws-link iws-login" to={paths.accountLogin({ return: pathname })}>Log in</Link>
          <button type="button" className="iws-ask" onClick={() => openNoor()}>
            <NoorMark /> Ask Noor
          </button>
          {begin('iws-btn iws-btn-primary iws-begin')}
          <button type="button" className="iws-menu" aria-expanded={menu} aria-controls="iws-drawer" aria-label={menu ? 'Close menu' : 'Menu'} onClick={() => setMenu(m => !m)}>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path d={menu ? 'M4.5 4.5l11 11M15.5 4.5l-11 11' : 'M3 7h14M3 13h14'} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
        </div>
      </nav>
      {menu ? (
        <div id="iws-drawer" className="iws-drawer">
          {NAV.map(item => navLink(item, 'iws-drawer-link'))}
          <button type="button" className="iws-drawer-ask" onClick={() => { setMenu(false); openNoor(); }}>
            <NoorMark size={20} /> Ask Noor
          </button>
          {begin('iws-btn iws-btn-primary iws-drawer-begin')}
          <Link className="iws-drawer-login" to={paths.accountLogin({ return: pathname })}>Log in</Link>
        </div>
      ) : null}
    </header>
  );
}
