// Shown for any path without a page, including destinations scheduled for
// later phases. It keeps the site navigation so no route is a dead end.
import { useEffect } from 'react';
import { Link } from '../router';
import { paths } from '../routes';
import SiteShell from '../site/SiteShell';

export default function NotFoundPage() {
  useEffect(() => { document.title = 'Page not found · IndianWeddings'; }, []);
  return (
    <SiteShell>
      <section className="iws-wrap" style={{ padding: 'clamp(140px, 22vh, 220px) clamp(24px, 6vw, 112px) clamp(96px, 14vh, 160px)' }}>
        <h1 style={{ margin: 0, maxWidth: '12em', fontFamily: "'Marcellus', serif", fontWeight: 400, fontSize: 'clamp(25px, 3.08vw, 48px)', lineHeight: 1.07, letterSpacing: '-.01em', color: 'var(--iw-ivory)' }}>
          This page isn’t here.
        </h1>
        <p style={{ margin: '24px 0 0', maxWidth: '32em', fontSize: 'clamp(16px, 1.25vw, 19px)', lineHeight: 1.6, color: 'var(--iw-parchment)' }}>
          It may not be published yet, or the link may be wrong. You can start again from vendors or the homepage.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px 28px', alignItems: 'center', marginTop: '36px' }}>
          <Link className="iws-btn iws-btn-primary" to={paths.vendors}>Explore vendors</Link>
          <a className="iws-underlined" href="/">Go to the homepage</a>
        </div>
      </section>
    </SiteShell>
  );
}
