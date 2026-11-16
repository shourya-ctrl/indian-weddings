// Sticky tray listing the vendors chosen for comparison (up to three).
import { Link } from '../router';
import { paths } from '../routes';
import { vendorById } from '../data/vendors';
import { useSite } from './siteContext';

export default function CompareTray() {
  const { compare, toggleCompare, clearCompare } = useSite();
  const vendors = compare.map(vendorById).filter(Boolean);
  return (
    <div className="pg-tray" role="region" aria-label="Compare vendors">
      <div className="iws-wrap pg-tray-inner">
        <p className="pg-tray-count">{vendors.length} of 3 chosen</p>
        <ul className="pg-tray-names" role="list">
          {vendors.map(v => (
            <li key={v.id}>{v.name}<button type="button" onClick={() => toggleCompare(v.id)} aria-label={`Remove ${v.name} from compare`}>×</button></li>
          ))}
        </ul>
        <div className="pg-tray-actions">
          <button type="button" className="pg-tray-clear" onClick={clearCompare}>Clear</button>
          {vendors.length >= 2
            ? <Link className="iws-btn iws-btn-primary" to={paths.compare(compare)}>Compare {vendors.length}</Link>
            : <span className="pg-note" style={{ margin: 0 }}>Choose one more to compare</span>}
        </div>
      </div>
    </div>
  );
}
