// Site-wide footer for destination pages, matching the homepage footer.
import { Link } from '../router';
import { LEGAL_PAGES_LIVE, paths } from '../routes';

export default function SiteFooter({ credit }) {
  return (
    <footer className="iws-footer">
      <div className="iws-wrap">
        <div className="iws-footer-top">
          <div className="iws-footer-brand">
            <span className="iws-logo iws-logo-lg">INDIAN<span>WEDDINGS</span></span>
            <p>A considered way to plan a wedding that feels entirely yours.</p>
          </div>
          <div className="iws-footer-cols">
            <nav aria-label="Explore">
              <p className="iws-footer-head">Explore</p>
              <Link to={paths.noor}>Noor</Link>
              <Link to={paths.vendors}>Vendors</Link>
              <Link to={paths.realWeddings}>Real Weddings</Link>
              <Link to={paths.ourApproach}>Our Approach</Link>
            </nav>
            <nav aria-label="Your wedding">
              <p className="iws-footer-head">Your wedding</p>
              <Link to={paths.accountCreate({ intent: 'begin-planning' })}>Begin planning</Link>
              <Link to={paths.accountLogin()}>Log in</Link>
              {LEGAL_PAGES_LIVE ? <Link to={paths.contact}>Contact</Link> : null}
            </nav>
          </div>
        </div>
        <div className="iws-footer-base">
          <span>© 2026 IndianWeddings</span>
          {LEGAL_PAGES_LIVE ? (
            <span className="iws-footer-legal">
              <Link to={paths.privacy}>Privacy</Link>
              <Link to={paths.terms}>Terms</Link>
            </span>
          ) : null}
          {credit ? <span>{credit}</span> : null}
        </div>
      </div>
    </footer>
  );
}
