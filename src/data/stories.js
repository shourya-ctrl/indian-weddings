// Stories for /real-weddings: two distinct content types.
//
// PROTOTYPE CONTENT. There are no real IndianWeddings weddings or editorial
// stories yet. Every story here is built only from content already on the
// homepage and is labelled "Prototype story" wherever it appears:
// - Real weddings: the homepage's illustrative weddings (WEDS). They are not
//   IndianWeddings couples; photographs are PTaufiq Photography, review only.
// - The Edit: drafts assembled from the homepage's written sample advice
//   (ADVICE, ASK). No interviews, quotes or facts beyond that copy.
// Replace with consented weddings and authored stories before launch.
import { ADVICE, ASK, IWU, WEDS } from '../landingLogic';
import { VENDOR_RECORDS } from './vendors';

export const STORIES_ARE_PROTOTYPE = true;

const slugify = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const vendorSlugFor = name => (VENDOR_RECORDS.find(v => v.name === name) || {}).slug || null;

export const REAL_WEDDINGS = WEDS.map(w => ({
  type: 'real-wedding',
  slug: slugify(w.names),
  title: w.names,
  place: w.place,
  meta: w.meta,
  image: w.img,
  imageAlt: w.alt,
  gallery: [{ src: w.a, alt: w.aAlt }, { src: w.b, alt: w.bAlt }],
  quote: w.quote,
  quoteBy: w.by,
  facts: w.facts,
  team: w.team.map(([role, name]) => ({ role, name, vendorSlug: vendorSlugFor(name) })),
  dek: `${w.meta}. ${w.facts[0][0]} ${w.facts[0][1]}.`,
}));

export const EDIT_SECTIONS = [
  { id: 'trends', label: 'Trends' },
  { id: 'design', label: 'Design & décor' },
  { id: 'fashion', label: 'Fashion & bridal style' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'culture', label: 'Culture & customs' },
  { id: 'interviews', label: 'Interviews' },
];

const advice = id => ADVICE.find(a => a.id === id);
const idea = advice('idea'), budget = advice('budget'), custom = advice('custom');

export const EDIT_STORIES = [
  {
    type: 'the-edit', slug: 'give-your-mehendi-two-days', section: 'culture',
    title: custom.head, dek: 'Why the day you choose for the mehendi decides how it looks at the pheras.',
    image: custom.img, imageAlt: custom.alt,
    body: [custom.body, custom.why],
    rows: custom.rows, rowsTitle: 'A timing that works',
    askNoor: 'When should our mehendi be, if the wedding is on a Saturday?',
  },
  {
    type: 'the-edit', slug: 'what-hanging-florals-ask-of-a-budget', section: 'design',
    title: 'What hanging florals ask of a budget.', dek: 'The installation many couples save, and what it usually costs.',
    image: budget.img, imageAlt: budget.alt,
    body: [ASK[2].a, budget.why],
    rows: ASK[2].rows, rowsTitle: 'Where the money goes',
    askNoor: ASK[2].q,
  },
  {
    type: 'the-edit', slug: 'a-wedding-in-the-dolomites', section: 'destinations',
    title: idea.head, dek: 'Mountain light, long tables and a smaller guest list.',
    image: idea.img, imageAlt: idea.alt,
    body: [idea.body],
    rows: idea.rows, rowsTitle: 'How it comes together',
    askNoor: 'Could we bring a Delhi caterer to a wedding in the Dolomites?',
  },
  {
    type: 'the-edit', slug: 'where-to-marry-in-february', section: 'destinations',
    title: 'Where to marry in February.', dek: 'Peak season, and three places that still suit 150 guests.',
    image: IWU + '2021/04/ptaufiq-indian-wedding-cancun-mexico-sangeet2.jpg', imageAlt: 'Guests dancing at an evening celebration by the sea',
    body: [ASK[0].a],
    rows: ASK[0].rows, rowsTitle: 'Three places',
    askNoor: ASK[0].q,
  },
];

export const ALL_STORIES = [...REAL_WEDDINGS, ...EDIT_STORIES];
export const weddingBySlug = slug => REAL_WEDDINGS.find(s => s.slug === slug) || null;
export const editStoryBySlug = slug => EDIT_STORIES.find(s => s.slug === slug) || null;
export const sectionLabel = id => (EDIT_SECTIONS.find(s => s.id === id) || {}).label || '';
