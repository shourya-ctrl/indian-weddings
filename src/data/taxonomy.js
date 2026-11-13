// Access to the canonical vendor taxonomy (vendorTaxonomy.json: 19 categories,
// 207 vendor/service types). The JSON is generated from the approved taxonomy
// document and the couples app's category IDs and service families; do not edit
// category or type names here.
import taxonomy from './vendorTaxonomy.json';

export const CATEGORIES = taxonomy.categories;
export const PRIMARY_CATEGORIES = CATEGORIES.filter(c => c.discovery === 'primary');
export const EXTENDED_CATEGORIES = CATEGORIES.filter(c => c.discovery === 'extended');

export const categoryById = id => CATEGORIES.find(c => c.id === id) || null;

export const typesOf = category => category.families.flatMap(f => f.types);
export const typeCount = category => typesOf(category).length;

/** Every vendor/service type with its category, for search. */
export const ALL_TYPES = CATEGORIES.flatMap(c => typesOf(c).map(t => ({ ...t, categoryId: c.id, categoryLabel: c.label })));

// Category photography, chosen by what each photograph shows. Sources: the
// couples app's Unsplash photos (licensed for use) and the homepage's PTaufiq
// Photography set (licensed for design review only, as on the homepage).
// Categories without a photograph that fits have none; pages fall back to text.
const IWU = 'https://www.ptaufiqphotography.com/wp-content/uploads/';
const PHOTOS = {
  planning: { ptaufiq: '2025/08/elegant-wedding-reception-photos-ptaufiq.jpg' },
  venues: { unsplash: 'photo-1758467745943-e80e6236d200' },
  decor: { ptaufiq: '2025/08/cultural-wedding-tradition-photography-ptaufiq.jpg' },
  production: { ptaufiq: '2025/08/luxury-wedding-reception-night-photos.jpg' },
  food: { ptaufiq: '2024/07/Ptaufiq-Indian-Wedding-Chicago-Marriott-Southwest-at-Burr-Ridge-cake2.jpg' },
  photo: { unsplash: 'photo-1640953148126-1962ec17a92b' },
  entertainment: { ptaufiq: '2019/01/ptaufiq-indian-wedding-the-ritz-carlton-abama-spain-sangeet1.jpg' },
  fashion: { unsplash: 'photo-1599462616558-2b75fd26a283' },
  jewelry: { unsplash: 'photo-1727430256509-0f897d6f4765' },
  beauty: { ptaufiq: '2018/10/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-bridal-entrance.jpg' },
  mehendi: { ptaufiq: '2019/02/ptaufiq-indian-wedding-costa-mujeres-mexico-destination-mehendi.jpg' },
  stationery: { unsplash: 'photo-1737749685390-0959c05aecbb' },
  hospitality: { unsplash: 'photo-1691673369591-f8b74c79b99d' },
};

/** Category image URL (Unsplash photos are cropped to w×h; others are served as published). */
export function categoryImage(id, w = 800, h) {
  const p = PHOTOS[id];
  if (!p) return null;
  if (p.unsplash) return `https://images.unsplash.com/${p.unsplash}?w=${w}${h ? `&h=${h}` : ''}&q=72&auto=format&fit=crop`;
  return IWU + p.ptaufiq;
}
