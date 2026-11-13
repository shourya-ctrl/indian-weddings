// Vendor search with grouped suggestions: vendor profiles, categories, service
// types and locations. Follows the ARIA combobox pattern (arrow keys, Enter,
// Escape). Choosing a suggestion goes to its destination; pressing Enter on
// free text goes to public results with the query preserved.
import { useId, useMemo, useRef, useState } from 'react';
import { navigate } from '../../router';
import { paths } from '../../routes';
import { ALL_TYPES, CATEGORIES } from '../../data/taxonomy';
import { LOCATIONS, VENDOR_RECORDS } from '../../data/vendors';

const fold = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');

function rank(items, q, text, limit) {
  const f = fold(q);
  const scored = [];
  for (const it of items) {
    const t = fold(text(it));
    const i = t.indexOf(f);
    if (i < 0) continue;
    // Whole-word starts rank above matches inside a word.
    const word = i === 0 || /[\s/&(-]/.test(t[i - 1]);
    scored.push([word ? i : 1000 + i, t.length, it]);
  }
  return scored.sort((a, b) => a[0] - b[0] || a[1] - b[1]).slice(0, limit).map(s => s[2]);
}

function suggestionsFor(q) {
  if (fold(q).trim().length < 2) return [];
  const vendors = rank(VENDOR_RECORDS, q, v => v.name, 3).map(v => ({
    group: 'Vendors', label: v.name, meta: `${v.speciality} · ${v.location} · sample listing`, to: paths.vendor(v.slug),
  }));
  const cats = rank(CATEGORIES, q, c => c.label, 3).map(c => ({
    group: 'Categories', label: c.label, meta: `${c.families.reduce((a, f) => a + f.types.length, 0)} services`, to: paths.category(c.slug),
  }));
  const types = rank(ALL_TYPES, q, t => t.name, 5).map(t => ({
    group: 'Services', label: t.name, meta: t.categoryLabel, to: paths.search({ category: t.categoryId, type: t.slug }),
  }));
  const places = rank(LOCATIONS, q, l => l, 3).map(l => ({
    group: 'Locations', label: l, meta: 'Vendors based here', to: paths.search({ location: l }),
  }));
  return [...vendors, ...cats, ...types, ...places];
}

const GROUP_ORDER = ['Vendors', 'Categories', 'Services', 'Locations'];

export default function VendorSearch({ examples }) {
  const uid = useId();
  const listId = `${uid}-list`;
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const inputRef = useRef(null);

  const items = useMemo(() => suggestionsFor(q), [q]);
  const showList = open && fold(q).trim().length >= 2;
  const optId = i => `${uid}-opt-${i}`;

  const go = to => { setOpen(false); navigate(to); };
  const submit = e => {
    e.preventDefault();
    if (active >= 0 && items[active]) { go(items[active].to); return; }
    const text = q.trim();
    if (text) go(paths.search({ q: text }));
    else inputRef.current && inputRef.current.focus();
  };
  const onKey = e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setActive(a => (items.length ? (a + 1) % items.length : -1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setOpen(true); setActive(a => (items.length ? (a <= 0 ? items.length - 1 : a - 1) : -1)); }
    else if (e.key === 'Escape') { if (open) { e.preventDefault(); setOpen(false); setActive(-1); } else setQ(''); }
  };

  return (
    <div className="vd-search">
      <form role="search" onSubmit={submit} className="vd-search-form">
        <label htmlFor={`${uid}-input`} className="vd-sr">Search vendors, services or places</label>
        <svg className="vd-search-icon" width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
          <circle cx="9.5" cy="9.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M14.5 14.5L20 20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <input
          ref={inputRef}
          id={`${uid}-input`}
          type="search"
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={showList && active >= 0 ? optId(active) : undefined}
          autoComplete="off"
          enterKeyHint="search"
          maxLength={80}
          placeholder="Vendors, services, places"
          value={q}
          onChange={e => { setQ(e.target.value); setOpen(true); setActive(-1); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={onKey}
        />
        <button type="submit" className="vd-search-go">Search</button>
      </form>

      <div id={listId} role="listbox" aria-label="Suggestions" className="vd-suggest" hidden={!showList}>
        {items.length ? GROUP_ORDER.map(group => {
          const groupItems = items.filter(it => it.group === group);
          if (!groupItems.length) return null;
          return (
            <div role="group" aria-labelledby={`${uid}-${group}`} key={group} className="vd-suggest-group">
              <div id={`${uid}-${group}`} className="vd-suggest-head" role="presentation">{group}</div>
              {groupItems.map(it => {
                const i = items.indexOf(it);
                return (
                  <div
                    key={it.group + it.label}
                    id={optId(i)}
                    role="option"
                    aria-selected={i === active}
                    className={'vd-suggest-opt' + (i === active ? ' is-active' : '')}
                    onMouseDown={e => { e.preventDefault(); go(it.to); }}
                    onMouseEnter={() => setActive(i)}
                  >
                    <span className="vd-suggest-label">{it.label}</span>
                    <span className="vd-suggest-meta">{it.meta}</span>
                  </div>
                );
              })}
            </div>
          );
        }) : (
          <div className="vd-suggest-none" role="presentation">No suggestions. Press Enter to search every vendor for “{q.trim()}”.</div>
        )}
      </div>

      {examples ? (
        <p className="vd-search-examples">
          Try{' '}
          {examples.map((ex, i) => (
            <span key={ex.label}>
              <a href={ex.to} onClick={e => { e.preventDefault(); navigate(ex.to); }}>{ex.label}</a>
              {i < examples.length - 2 ? ', ' : i === examples.length - 2 ? ' or ' : ''}
            </span>
          ))}
        </p>
      ) : null}
    </div>
  );
}
