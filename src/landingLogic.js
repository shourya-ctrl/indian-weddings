// Behaviour for the IndianWeddings landing page, from the Claude Design source
// (IndianWeddings Premium Landing Page V5). It follows the design's DCLogic
// contract: state, setState, lifecycle hooks and renderVals(), hosted by
// Landing.jsx. renderVals() returns everything LandingView.jsx renders.
import React from 'react';
import { DCLogic } from './dc';

const U = (id, w) => `https://images.unsplash.com/${id}?w=${w}&q=72&auto=format&fit=crop`;
const CATS = [['venues', 'Venues'], ['photo', 'Photography'], ['decor', 'Décor and florals'], ['food', 'Food and drink']];
const VENDORS = {
  venues: [
    { name: 'Villa Rajputana', kind: 'Heritage hotel', place: 'Jaipur', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/luxury-wedding-photography-boston-ptaufiq.jpg', alt: 'A luxury wedding venue' },
    { name: 'The Lake Pavilion', kind: 'Lakeside courtyards', place: 'Udaipur', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/destination-wedding-photographer-india-ptaufiq.jpg', alt: 'A destination wedding in India' },
    { name: 'Villa Oleandra', kind: 'Garden villa', place: 'Lake Como', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2019/02/ptaufiq-indian-wedding-Como-Castello-Del-Nero-Florence-Italy-couple-portraits.jpg', alt: 'A couple at a villa outside Florence' }
  ],
  photo: [
    { name: 'Sahara Wire', kind: 'Candid photography', place: 'Mumbai', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/romantic-couple-photoshoot-ptaufiq.jpg', alt: 'A couple’s portrait session' },
    { name: 'Vermilion Films', kind: 'Wedding films', place: 'Delhi', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/intimate-wedding-portrait-session-ptaufiq.jpg', alt: 'An intimate wedding portrait' },
    { name: 'Studio Haveli', kind: 'Portraits and film', place: 'Jaipur', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/timeless-wedding-portrait-ptaufiq-photography.jpg', alt: 'A wedding portrait' }
  ],
  decor: [
    { name: 'Amrapali Flower Studio', kind: 'Florals and décor', place: 'Delhi', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2025/08/luxury-wedding-reception-night-photos.jpg', alt: 'A reception at night' },
    { name: 'Marigold Works', kind: 'Stage and mandap design', place: 'Mumbai', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-newyork-mandap-decor.jpg', alt: 'Mandap décor at a New York wedding' },
    { name: 'Tent and Thread', kind: 'Outdoor décor', place: 'Goa', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-gotham-hall-newyork-mehendi2.jpg', alt: 'A mehendi set-up at Gotham Hall' }
  ],
  food: [
    { name: 'Sohan Table', kind: 'Wedding catering', place: 'Jaipur', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/Ptaufiq-Indian-Wedding-Chicago-Marriott-Southwest-at-Burr-Ridge-cake2.jpg', alt: 'A couple cutting their wedding cake' },
    { name: 'The Long Table', kind: 'Reception dining', place: 'Mumbai', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2019/01/ptaufiq-indian-wedding-the-ritz-carlton-abama-spain-sangeet1.jpg', alt: 'An evening celebration in Spain' },
    { name: 'Chai and Chaat Co.', kind: 'Live food counters', place: 'Ahmedabad', img: 'https://www.ptaufiqphotography.com/wp-content/uploads/2024/07/ptaufiq-indian-wedding-Generations-Riviera-Maya-Mexico2.jpg', alt: 'A daytime celebration in the Riviera Maya' }
  ]
};
const STAGGER = ['0px', 'clamp(0px,5vw,72px)', 'clamp(0px,2.5vw,36px)'];
const FRAGS = [
  { la: 'Email', ta: 'Fwd: Fwd: Re: revised quote (2)', lb: 'Decisions', tb: 'Vermilion Films’ revised quote, beside the budget', s: [2, 3, -3] },
  { la: 'Family group', ta: '214 unread messages', lb: 'Messages', tb: 'Each vendor conversation in its own thread', s: [46, 0, 2.5] },
  { la: 'Spreadsheet', ta: 'budget_FINAL_v7.xlsx', lb: 'Budget', tb: 'Updated with every booking', s: [12, 33, 1.5] },
  { la: 'Text', ta: 'Did anyone confirm the mehendi artist?', lb: 'Plan', tb: 'Mehendi artist confirmed for Thursday', s: [52, 29, -2] },
  { la: 'Screenshot', ta: 'IMG_4471, the décor reference', lb: 'Décor', tb: 'Moodboard saved with Amrapali Flower Studio', s: [0, 64, 2] },
  { la: 'Voice note', ta: 'Nani’s room needs to be on the ground floor · 0:48', lb: 'Guests', tb: 'Ground-floor room noted for Nani and Nana', s: [42, 61, -1.5] }
];
const SLIDE_ALT = ['Jaisalmer', 'Iceland', 'A destination portrait'];
const EASE = 'cubic-bezier(.2,.7,.1,1)';
const Rnd = Math.random, RAD = Math.PI / 180, ROT0 = 0.578, BETA = -0.646;
const UMA = [[11.0621, 61.751, 1.8], [11.0307, 56.383, 2.3], [11.8972, 53.695, 2.4], [12.2571, 57.033, 3.3], [12.9005, 55.96, 1.8], [13.3988, 54.925, 2.2], [13.4204, 54.988, 4.0], [13.7924, 49.313, 1.9]];
const UMA_LINES = [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 7]];
const IWU = 'https://www.ptaufiqphotography.com/wp-content/uploads/';
const ORBIT = [
  { n: 'The roka', d: 'Where it begins', img: IWU + '2024/07/ptaufiq-indian-wedding-capadoccia-engagement-9.jpg' },
  { n: 'Mehendi', d: 'Thursday afternoon', img: IWU + '2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg' },
  { n: 'Haldi', d: 'Friday morning', img: IWU + '2024/07/ptaufiq-indian-wedding-the-ritz-carlton-abama-spain-haldi.jpg' },
  { n: 'Sangeet', d: 'Friday night', img: IWU + '2021/04/ptaufiq-indian-wedding-cancun-mexico-sangeet2.jpg' },
  { n: 'The wedding', d: 'Saturday', img: IWU + '2019/02/ptaufiq-indian-wedding-rajkot-india-ceremony-4.jpg' },
  { n: 'Reception', d: 'Sunday evening', img: IWU + '2018/10/ndian-Wedding-Photography-Boston-PTaufiq-Reception-Grand-entrance-2-scaled.jpg' }
];
const ORBIT_COMETS = [{ k: 1, v: 0.21, dir: 1, a0: 1.2, gap: 0.034, n: 7 }, { k: 1.16, v: 0.13, dir: -1, a0: 4.1, gap: 0.026, n: 6 }];
const cometSz = (j, nar) => Math.round((j === 0 ? 20 : Math.max(3, 11 - j * 1.4)) * (nar ? 0.7 : 1));
const ORBIT_STARS = (() => { let s = 7; const r = () => (s = (s * 16807) % 2147483647) / 2147483647; return Array.from({ length: 46 }, () => { const q = r(), z = q < 0.18 ? 2.5 : q < 0.5 ? 1.6 : 1.1, gold = r() < 0.45; return { x: (r() * 100).toFixed(2) + '%', y: (4 + r() * 92).toFixed(2) + '%', z: z + 'px', c: gold ? '#F0D9A4' : '#FFF6E6', g: z > 2 ? '0 0 8px 1px rgba(255,230,180,.55)' : 'none' }; }); })();
const HEROES = ['Cinematic', 'Mosaic', 'Orbit', 'Seam', 'Arch', 'Your sky', 'Petals'];
const SYN = 29.530588853, NEW0 = Date.UTC(2000, 0, 6, 18, 14) / 864e5, SKY_KEY = 'iw-landing-wedding-date';
const MARIA = [[-0.25, -0.3, 0.32, 0.26], [0.15, -0.35, 0.25, 0.22], [0.3, -0.05, 0.22, 0.2], [-0.05, 0.05, 0.2, 0.18], [-0.42, 0.1, 0.28, 0.2], [0.1, 0.35, 0.18, 0.15], [-0.15, 0.42, 0.15, 0.12], [0.45, 0.3, 0.12, 0.12]];
const RASHI = ['Mesha', 'Vrishabha', 'Mithuna', 'Karka', 'Simha', 'Kanya', 'Tula', 'Vrishchika', 'Dhanu', 'Makara', 'Kumbha', 'Meena'];

const DEALS = [
  { r: 'india', name: 'Villa Rajputana', place: 'Heritage hotel · Jaipur', dates: 'Fri 12 to Sun 14 March 2027', inc: 'Three nights, 60 rooms, the lawns and the courtyard', price: '₹24L', was: '₹33L', save: 'Save ₹9L', hold: 'Held at this price until 30 November', img: IWU + '2025/08/luxury-wedding-photography-boston-ptaufiq.jpg', alt: 'A luxury wedding venue' },
  { r: 'abroad', name: 'Villa Oleandra', place: 'Garden villa · Lake Como', dates: 'Sun 19 to Tue 21 September 2027', inc: 'Exclusive use, 40 suites, the lakeside terrace', price: '€96K', was: '€140K', save: 'Save €44K', hold: 'Held at this price until 15 December', img: IWU + '2019/02/ptaufiq-indian-wedding-Como-Castello-Del-Nero-Florence-Italy-couple-portraits.jpg', alt: 'A couple at a villa outside Florence' },
  { r: 'india', name: 'The Lake Pavilion', place: 'Lakeside courtyards · Udaipur', dates: 'Tue 8 to Thu 10 December 2026', inc: 'Midweek, both courtyards, up to 220 guests', price: '₹18L', was: '₹26L', save: 'Save ₹8L', hold: 'Held at this price until 20 November', img: IWU + '2025/08/destination-wedding-photographer-india-ptaufiq.jpg', alt: 'A destination wedding in India' },
  { r: 'abroad', name: 'Hacienda Solana', place: 'Beach resort · Riviera Maya', dates: 'Thu 4 to Sun 7 February 2027', inc: 'Four nights, a beach mandap, up to 250 guests', price: '$210K', was: '$290K', save: 'Save $80K', hold: 'Held at this price until 30 November', img: IWU + '2024/07/ptaufiq-indian-wedding-Generations-Riviera-Maya-Mexico2.jpg', alt: 'A daytime celebration in the Riviera Maya' },
  { r: 'india', name: 'Haveli Saanjh', place: 'Fort palace · Jodhpur', dates: 'Sat 23 to Mon 25 January 2027', inc: 'Released by a cancellation, rooms for 180', price: '₹21L', was: '₹30L', save: 'Save ₹9L', hold: 'Held at this price until 25 November', img: IWU + '2025/08/destination-wedding-venue-ptaufiq-photography.jpg', alt: 'A destination wedding venue' },
  { r: 'abroad', name: 'Quinta da Serra', place: 'Hillside estate · Sintra', dates: 'Fri 14 to Sun 16 May 2027', inc: 'Three nights, the gardens and the chapel lawn', price: '€72K', was: '€98K', save: 'Save €26K', hold: 'Held at this price until 10 December', img: IWU + '2025/08/scenic-wedding-ptaufiq-photography.jpg', alt: 'A couple in a scenic landscape' }
];
const ADV_NAMES = {
  Noor: { nav: 'Meet Noor', over: 'Meet Noor · your AI advisor', card: 'Noor · your advisor', tabs: 'Moments with Noor', sample: 'Sample advice, written to show how Noor works.',
    lede: 'You don’t know what you don’t know. Noor does. Think of a best friend who has been to a thousand Indian weddings and remembers every one: the venues, the seasons, the costs and the customs. Noor learns your taste as you plan, and speaks up with the ideas and the catches nobody else would.',
    trust: 'Noor suggests; you decide. It never books, pays or messages anyone without you, and it always tells you why.' },
  Advisor: { nav: 'Your advisor', over: 'Your AI advisor', card: 'Your advisor · AI',
    lede: 'You don’t know what you don’t know. Your advisor does. Think of a best friend who happens to know the industry: the venues, the seasons, the costs and the customs. It learns your taste as you plan, and speaks up with the ideas and the catches nobody else would.',
    trust: 'It suggests; you decide. Your advisor never books, pays or messages anyone without you, and it always tells you why.' },
  'Best friend': { nav: 'Your best friend', over: 'Your AI best friend', card: 'Your best friend · AI',
    lede: 'You don’t know what you don’t know. This friend does. It happens to know the industry, from the venues and the seasons to the costs and the customs. It learns your taste as you plan, and speaks up with the ideas and the catches nobody else would.',
    trust: 'It suggests; you decide. It never books, pays or messages anyone without you, and it always tells you why.' },
  'Co-planner': { nav: 'Co-planner', over: 'Your AI co-planner', card: 'Your co-planner · AI',
    lede: 'You don’t know what you don’t know. Your co-planner does. Think of a best friend who happens to know the industry: the venues, the seasons, the costs and the customs. It learns your taste as you plan, and speaks up with the ideas and the catches nobody else would.',
    trust: 'It suggests; you decide. Your co-planner never books, pays or messages anyone without you, and it always tells you why.' }
};
// The design referenced local assets/website/*.jpg photos that were not part of
// the exported bundle; these stand in from the design's own photography set.
const NWA_IMG = {
  sunset: IWU + '2025/08/wedding-couple-sunset-ptaufiq-photography.jpg',
  couple1: IWU + '2025/08/romantic-couple-photoshoot-ptaufiq.jpg',
  couple2: IWU + '2025/08/intimate-wedding-portrait-session-ptaufiq.jpg',
  couple3: IWU + '2025/08/timeless-wedding-portrait-ptaufiq-photography.jpg',
  mandap: IWU + '2018/10/ptaufiq-indian-wedding-newyork-mandap-decor.jpg'
};
const NW_DUR = 8200;
const NW = [
  { id: 'budget', label: 'Your budget', sub: 'Catches what runs short, before it costs you', status: ['Reading your budget', 'Holding it against what you saved', 'Found something', 'Rebalancing, same total', 'Rebalanced · undo any time'] },
  { id: 'site', label: 'Your website', sub: 'A page and a look for every event', status: ['Reading your events', 'Building the welcome party', 'Theming the Haldi and the sangeet', 'Adding your Haldi poster', 'Six pages · ready for you'] },
  { id: 'portraits', label: 'The two of you', sub: 'Posters made from your photographs', status: ['Reading your photographs', 'Choosing the clearest ones', 'Matching your faces and the light', 'A vintage film poster', 'Restyled for the Haldi'] },
  { id: 'day', label: 'The day itself', sub: 'Calm, while everything happens at once', status: ['Watching the run sheet', 'The sangeet is running late', 'Moving what comes next', 'Drafting an alert for you', 'Sent, once you said yes'] }
];
const NW_PAGES = [
  { when: 'Friday · 7 pm · the beach terrace', title: 'Bienvenidos, amigos', bg: '#F4E6D3', fg: '#3B1F14', acc: '#B23A48', band: true, img: NWA_IMG.sunset },
  { when: 'Saturday · 10 am · the lawn', title: 'Haldi on the lawn', bg: '#F6C445', fg: '#3D2600', acc: '#7A3E00', pat: 'radial-gradient(circle,rgba(255,138,0,.7) 0 5px,transparent 6px) 0 0/22px 22px', img: NWA_IMG.couple3 },
  { when: 'Saturday · 8 pm · the ballroom', title: 'One night, every song', bg: 'linear-gradient(160deg,#2A0B3D,#110420)', fg: '#F3E6FF', acc: '#E7B8FF', pat: 'radial-gradient(circle,rgba(255,255,255,.75) 0 1px,transparent 1.5px) 0 0/24px 24px', img: NWA_IMG.couple2 },
  { when: 'Sunday · 4 pm · the beach mandap', title: 'The wedding', bg: '#F3EDE2', fg: '#2B1D12', acc: '#7A5A2E', img: NWA_IMG.mandap }
];
const ASK = [
  { q: 'Where could we marry in February, with 150 guests?', a: 'February is peak season, so the famous places book a year out. Three that suit 150 guests and still have weekends open:', rows: [['Udaipur', 'Lake palaces, warm days, fly in from Delhi or Mumbai'], ['Cancún', 'A beach mandap, a warm sea, direct flights from New York'], ['Kandy, Sri Lanka', 'Tea-country estates, cool evenings, three hours from Colombo']], foot: 'In the app, I can check which of these still have your dates.' },
  { q: 'What do couples forget for a destination mehendi?', a: 'Time and shade. Bridal mehendi takes five to six hours, and henna darkens best away from the heat.', rows: [['Book it early', 'Thursday for the bride, Friday for everyone else'], ['Two artists', 'So guests aren’t queueing through the sangeet'], ['Natural henna only', 'No chemical dye, and a patch test the week before']] },
  { q: 'Is ₹10L enough for décor for 250 guests?', a: 'For a simple mandap and table florals, yes. For the hanging installations you’ve probably been saving, weddings like that usually spend ₹14L to ₹16L.', rows: [['Simple and elegant', '₹8L to ₹10L'], ['Hanging florals over the mandap', '₹14L to ₹16L'], ['Where the difference could come from', 'Food and drink, travel and the rest']], foot: 'In the app, I can rebalance your budget without moving the total.' }
];
const ASK_FREE = { a: 'Good question, and the honest answer depends on your dates, your guests and your budget. Noor answers from your own plan, so start planning and ask again there.', rows: [] };
const ADVICE = [
  { id: 'idea', tab: 'An idea you hadn’t had', sub: 'Read from the photographs you save', img: IWU + '2025/08/mountain-view-wedding-ptaufiq-photography.jpg', alt: 'A wedding with a mountain view',
    head: 'Have you thought about the Dolomites?',
    body: 'You keep saving mountain light, long tables and smaller numbers. A 120-guest wedding there in late June has green meadows, open passes and evenings that stay light until nine.',
    rows: [['Where', 'A meadow above Cortina for the pheras'], ['Getting there', 'Fly into Venice, then two hours by coach'], ['What travels', 'Mandap and florals from Milan, your caterer from Delhi']],
    why: 'You saved fourteen mountain photographs, chose “intimate” for your guest list and left June open. Couples with those three answers rarely search for the Alps, so it would not have come up on its own.',
    yes: 'Show me how', no: 'Not for us',
    done: 'Added to your ideas, with three venues and a first estimate to look through.', skipped: 'Set aside. It won’t come up again unless you ask.' },
  { id: 'budget', tab: 'A catch before it costs you', sub: 'Your budget, held against what you want', img: IWU + '2018/10/ptaufiq-indian-wedding-newyork-mandap-decor.jpg', alt: 'Mandap décor at a New York wedding',
    head: 'Your décor may be underfunded.',
    body: 'You’ve set ₹10L for décor and florals. For a lakeside mandap with the hanging florals you saved, weddings like yours usually spend ₹14L to ₹16L. Here is one way to find the difference without moving your total.',
    rows: [['Décor and florals', '₹10L → ₹14L'], ['Food and drink', '₹15L → ₹13L'], ['Travel and the rest', '₹7.5L → ₹5.5L']],
    foot: 'Your total stays at ₹85L.',
    why: 'A hanging installation over a forty-foot mandap needs around two thousand stems and a rigging crew. The two décor studios you saved quoted ₹13.5L and ₹15L for similar work this season.',
    yes: 'Rebalance my budget', no: 'Keep my numbers',
    done: 'Rebalanced. Your previous budget is saved, so you can go back to it at any time.', skipped: 'Kept as it is. It will mention this again only if a décor quote comes in above ₹10L.' },
  { id: 'custom', tab: 'Something nobody tells you', sub: 'The timings and customs that are easy to miss', img: IWU + '2019/02/ptaufiq-indian-wedding-costa-mujeres-mexico-destination-mehendi.jpg', alt: 'A destination mehendi in Costa Mujeres',
    head: 'Give your mehendi two days to deepen.',
    body: 'Bridal mehendi takes five to six hours, and the colour keeps darkening for a day or two after. A Thursday sitting is at its deepest on your wedding day; a Friday one won’t have caught up.',
    rows: [['Thursday', 'Your bridal mehendi, from 1 pm'], ['Friday', 'Family and friends, two artists, before the sangeet'], ['Saturday', 'The colour at its darkest for the pheras']],
    why: 'Your mehendi is on the Friday, the day before the wedding. Henna colour usually peaks a day or two after the paste comes off.',
    yes: 'Move it to Thursday', no: 'Leave it on Friday',
    done: 'Moved to Thursday. A note to your mehendi artist is drafted for you to send.', skipped: 'Left on Friday. Nothing has changed.' }
];
const TPLS = [
  { id: 'jharokha', name: 'Jharokha', from: 'Rajasthan', ink: '#4A1F1A', soft: '#7A5646', accent: '#9A4424', rule: '#DCC5A8', bw: '1px', arch: '999px 999px 0 0', btnBg: '#4A1F1A', btnFg: '#F3E6D3',
    frame: 'linear-gradient(#F3E6D3,#F3E6D3) padding-box, linear-gradient(#9A4424,#9A4424) border-box', sw: 'linear-gradient(135deg,#F3E6D3 0 50%,#9A4424 50% 100%)' },
  { id: 'kanjeevaram', name: 'Kanjeevaram', from: 'Tamil Nadu', ink: '#F6E7C8', soft: '#D9BC86', accent: '#E0BC72', rule: '#7D2B36', bw: '10px', arch: '0', btnBg: '#E0BC72', btnFg: '#3A0C14',
    frame: 'linear-gradient(#5B1522,#5B1522) padding-box, repeating-linear-gradient(45deg,#D9B26A 0 2px,#7D2B36 2px 6px) border-box', sw: 'linear-gradient(135deg,#5B1522 0 50%,#D9B26A 50% 100%)' },
  { id: 'phulkari', name: 'Phulkari', from: 'Punjab', ink: '#FCEBD5', soft: '#E9B98A', accent: '#F2A93B', rule: '#4A2A4F', bw: '8px', arch: '0', btnBg: '#F2A93B', btnFg: '#2B1431',
    frame: 'linear-gradient(#2B1431,#2B1431) padding-box, repeating-conic-gradient(from 45deg,#E2457A 0 25%,#F2A93B 0 50%) 0 0/12px 12px border-box', sw: 'linear-gradient(135deg,#2B1431 0 50%,#E2457A 50% 100%)' },
  { id: 'chikankari', name: 'Chikankari', from: 'Lucknow', ink: '#26332C', soft: '#5F6E64', accent: '#4E6E5C', rule: '#DCE3DA', bw: '10px', arch: '50%', btnBg: '#26332C', btnFg: '#F6F3EC',
    frame: 'linear-gradient(#F6F3EC,#F6F3EC) padding-box, radial-gradient(circle,#8FA898 1.3px,transparent 1.8px) 0 0/7px 7px border-box, #F6F3EC', sw: 'linear-gradient(135deg,#F6F3EC 0 50%,#8FA898 50% 100%)' }
];
const SD_IMGS = [
  { src: IWU + '2018/10/ptaufiq-indian-wedding-jaisalmer-india-destination-engagement-scaled.jpg', alt: 'Jaisalmer engagement' },
  { src: IWU + '2024/07/ptaufiq-indian-wedding-iceland-destination-engagement.jpg', alt: 'Iceland engagement' },
  { src: IWU + '2024/07/ptaufiq-indian-wedding-capadoccia-engagement-9.jpg', alt: 'Cappadocia engagement' },
  { src: IWU + '2025/08/romantic-couple-photoshoot-ptaufiq.jpg', alt: 'portrait session' }
];
const DAY_BASE = [{ t: '09:30', m: 'Breakfast is on the terrace until 10:30.' }, { t: '10:05', m: 'Shuttles to the lakeside lawn leave every ten minutes.' }];
const DAY_SEND = [{ t: '10:20', m: 'The baraat gathers at the north gate. The dhol starts at 10:30.' }, { t: '10:55', m: 'The pheras begin at 11. Please take your seats.' }, { t: '13:15', m: 'Lunch is served in the courtyard.' }];
const DAY_PHOTOS = [IWU + '2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg', IWU + '2024/07/ptaufiq-indian-wedding-the-ritz-carlton-abama-spain-haldi.jpg', IWU + '2021/04/ptaufiq-indian-wedding-cancun-mexico-sangeet2.jpg', IWU + '2019/02/ptaufiq-indian-wedding-rajkot-india-ceremony-4.jpg'];
const WEDS = [
  { names: 'Ishani & Raghav', place: 'Udaipur · City Palace', meta: 'Udaipur · February 2026',
    img: IWU + '2024/06/ptaufiq-indian-wedding-rajkot-India-ceremony-couple-portraits.jpg', alt: 'Ishani and Raghav at their ceremony',
    a: IWU + '2025/08/cultural-wedding-tradition-photography-ptaufiq.jpg', aAlt: 'A tradition during the wedding', b: IWU + '2024/07/ptaufiq-indian-wedding-gotham-hall-newyork-mehendi2.jpg', bAlt: 'The mehendi set-up',
    quote: 'Five functions, two families and one very opinionated grandmother. Our advisor caught a clash between the haldi and the mehendi artist weeks before anyone else noticed.',
    by: 'Ishani, three months after', facts: [['5', 'celebrations'], ['320', 'guests replied online'], ['9 of 11', 'vendors booked here']],
    team: [['Venue', 'City Palace'], ['Photography', 'Vermilion Films'], ['Décor', 'Marigold Works'], ['Catering', 'Sohan Table']] },
  { names: 'Aarushi & Dev', place: 'Lake Como · Villa Erba', meta: 'Lake Como · September 2025',
    img: IWU + '2018/10/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-bridal-entrance.jpg', alt: 'Aarushi’s bridal entrance',
    a: IWU + '2024/07/ptaufiq-indian-wedding-como-castello-del-nero-florence-italy-mehendi1.jpg', aAlt: 'The mehendi in Italy', b: IWU + '2019/02/ptaufiq-indian-wedding-Como-Castello-Del-Nero-Florence-Italy-couple-portraits.jpg', bAlt: 'Aarushi and Dev in the villa gardens',
    quote: 'We planned Lake Como from Bangalore. Every quote, room and guest lived in one place, so my mother and I finally stopped forwarding each other screenshots.',
    by: 'Aarushi, on planning from abroad', facts: [['4', 'celebrations'], ['180', 'guests travelled in'], ['7 of 8', 'vendors booked here']],
    team: [['Venue', 'Villa Erba'], ['Photography', 'Studio Haveli'], ['Décor', 'Amrapali Flower Studio'], ['Dining', 'The Long Table']] },
  { names: 'Naina & Arjun', place: 'Jaipur · Rambagh', meta: 'Jaipur · December 2025',
    img: IWU + '2025/08/luxury-destination-wedding-couple-portrait-ptaufiq.jpg', alt: 'Naina and Arjun’s portrait',
    a: IWU + '2025/08/elegant-wedding-reception-photos-ptaufiq.jpg', aAlt: 'The reception set for dinner', b: IWU + '2025/08/bridal-portrait-outdoor-session-ptaufiq.jpg', bAlt: 'Naina’s bridal portrait',
    quote: 'Our save the date became the website, and the website became the app on the day. Guests shared more than a thousand photographs we would never have seen otherwise.',
    by: 'Arjun, after the album arrived', facts: [['3', 'celebrations'], ['240', 'guests on the day app'], ['6 of 9', 'vendors booked here']],
    team: [['Venue', 'Rambagh'], ['Photography', 'Sahara Wire'], ['Décor', 'Tent and Thread'], ['Food', 'Chai and Chaat Co.']] }
];

export default class LandingLogic extends DCLogic {
  state = { nwStep: 0, nwPh: 0, nwRun: false, nwPaused: false, askI: null, askPh: 0, askText: '', askFreeQ: '', w: typeof window !== 'undefined' ? window.innerWidth : 1280, solid: false, menu: false, tab: 'budget', cat: 'venues', evP: 0, evVis: 0.4, slide: 0, paused: false, settled: false, archI: 0, dealF: 'all', adv: 0, advRes: {}, advWhy: {}, tpl: 'jharokha', sdImg: 0, sdOver: false, sdCustom: null, alertN: 0, rw: 0 };
  rootRef = React.createRef(); showRef = React.createRef(); heroFrameRef = React.createRef(); heroParRef = React.createRef();
  evRef = React.createRef(); cnRef = React.createRef(); sparkRef = React.createRef(); skyRef = React.createRef();
  orbitRef = React.createRef(); orbitTextRef = React.createRef(); orbitEllRef = React.createRef(); orbitPolyRef = React.createRef(); orbitItemRefs = ORBIT.map(() => React.createRef());
  orbitAuraRef = React.createRef(); orbitRaysRef = React.createRef(); orbitStarsRef = React.createRef(); orbitGlowEllRef = React.createRef(); orbitOuterRef = React.createRef(); orbitInnerRef = React.createRef();
  orbitCometRefs = ORBIT_COMETS.flatMap(c => Array.from({ length: c.n }, () => React.createRef()));
  seamRef = React.createRef(); seamHandleRef = React.createRef(); archRef = React.createRef(); archProgRef = React.createRef(); archCapRef = React.createRef(); archSecRef = React.createRef(); archAuraRef = React.createRef(); archImgRefs = ORBIT.map(() => React.createRef());
  moonRef = React.createRef(); petalRef = React.createRef(); petalBackRef = React.createRef(); petalFrontRef = React.createRef();
  nwStageRef = React.createRef(); orbRef = React.createRef(); evThumbRef = React.createRef();

  motionOn() { return !this.reduced && this.props.motion !== false; }
  anim() { return this.motionOn() && this.state.w >= 960; }
  slidesOn() { return this.props.heroSlides !== false; }

  componentDidMount() {
    this.reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.onResize = () => { const w = window.innerWidth; if (w !== this.state.w) this.setState({ w }, () => { this.applyP(); this.onEvScroll(); this.startArch(); this.startOrbit(); this.startPetals(); this.startMoon(); }); };
    this.onScrollAny = () => { if (this._raf) return; this._raf = requestAnimationFrame(() => { this._raf = 0; this.tick(); }); };
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.onScrollAny, { passive: true, capture: true });
    document.documentElement.style.scrollBehavior = this.motionOn() ? 'smooth' : 'auto';
    if (!this.motionOn()) this.setState({ settled: true });
    this.tick();
    this.onEvScroll();
    this.startAuto();
    this.initSparkle();
    this.startOrbit(); this.seamHint(); this.loadSky(); this.startPetals(); this.startMoon(); this.startArch();
    this._onKey = e => {
      if (this.props.presenter === false || e.metaKey || e.ctrlKey || e.altKey) return;
      const tg = e.target; if (tg && (tg.tagName === 'INPUT' || tg.tagName === 'TEXTAREA' || tg.tagName === 'SELECT' || tg.isContentEditable)) return;
      if (e.key === ']') this.heroStep(1); else if (e.key === '[') this.heroStep(-1);
      else if (/^[1-7]$/.test(e.key)) this.pickHero(HEROES[+e.key - 1]);
      else if (e.key === 'H' && e.shiftKey) this.setState(s => ({ swHidden: !s.swHidden }));
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', this._onKey);
    this._onBlur = () => { this.seamUp(); this.evUp(); };
    window.addEventListener('blur', this._onBlur);
    if (this.motionOn()) { this.heroIn(); this._rvT = setTimeout(() => this.setupReveal(), 80); }
    if ('IntersectionObserver' in window && this.cnRef.current) {
      this.cnIo = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting && e.intersectionRatio >= 0.4 && !this._cnTouched) {
          this._cnTouched = true; this.cnIo.disconnect();
          this._cnT = setTimeout(() => this.setState({ settled: true }), 450);
        }
      }), { threshold: [0, 0.4, 0.6] });
      this.cnIo.observe(this.cnRef.current);
    }
    this.noorMount();
  }
  componentDidUpdate(pp, ps) {
    pp = pp || {}; ps = ps || {};
    if (ps.slide !== this.state.slide) this.kenBurns();
    if (ps.archI !== this.state.archI) { if (!this.archPinned()) this.archProg(); if (this.motionOn() && this.archCapRef.current) this.archCapRef.current.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 800, delay: 300, easing: EASE, fill: 'backwards' }); }
    if (pp.sparkle !== this.props.sparkle || pp.celestial !== this.props.celestial) this.sizeSparkle();
    if (pp.heroStyle !== this.props.heroStyle && this.state.heroPick) this.setState({ heroPick: null });
    if (pp.motion !== this.props.motion || pp.heroSlides !== this.props.heroSlides) {
      document.documentElement.style.scrollBehavior = this.motionOn() ? 'smooth' : 'auto';
      this.applyP(); this.startAuto(); this.sparkLoop(); this.startArch();
    }
  }
  componentWillUnmount() {
    this.noorUnmount();
    window.removeEventListener('resize', this.onResize);
    if (this._sdUrl) URL.revokeObjectURL(this._sdUrl);
    window.removeEventListener('scroll', this.onScrollAny, { capture: true });
    if (this.io) this.io.disconnect();
    if (this.cnIo) this.cnIo.disconnect();
    clearInterval(this._auto); clearInterval(this._archT); if (this._archPg) this._archPg.cancel(); if (this._archAu) this._archAu.cancel(); clearTimeout(this._rvT); clearTimeout(this._cnT);
    cancelAnimationFrame(this._spRaf); cancelAnimationFrame(this._obRaf); cancelAnimationFrame(this._seamRaf); cancelAnimationFrame(this._ptRaf); cancelAnimationFrame(this._mnRaf);
    if (this._onKey) window.removeEventListener('keydown', this._onKey);
    if (this._onBlur) window.removeEventListener('blur', this._onBlur);
    if (this._onSpRs) window.removeEventListener('resize', this._onSpRs);
    if (this._onVis) document.removeEventListener('visibilitychange', this._onVis);
  }

  nwGo(i) {
    (this._nwT || []).forEach(clearTimeout); this._nwT = []; this._nwStarted = true;
    if (!this.motionOn()) { this.setState({ nwStep: i, nwPh: 4, nwRun: false }); return; }
    this.setState({ nwStep: i, nwPh: 0, nwRun: false });
    this._nwT.push(setTimeout(() => this.setState({ nwRun: true }), 80));
    [800, 2400, 4000, 5700].forEach((ms, k) => this._nwT.push(setTimeout(() => this.setState({ nwPh: k + 1 }), ms)));
    if (!this.state.nwPaused) this._nwT.push(setTimeout(() => { if (this._nwVis && !this.state.nwPaused) this.nwGo((i + 1) % NW.length); }, NW_DUR));
  }
  nwStop() { (this._nwT || []).forEach(clearTimeout); this._nwT = []; }
  nwPause() {
    if (this.state.nwPaused) this.setState({ nwPaused: false }, () => this.nwGo(this.state.nwStep));
    else { this.nwStop(); this.setState({ nwPaused: true, nwPh: 4, nwRun: false }); }
  }
  askGo(i) {
    clearTimeout(this._askT); const mo = this.motionOn();
    this.setState({ askI: i, askPh: mo ? 0 : 1 });
    if (mo) this._askT = setTimeout(() => this.setState({ askPh: 1 }), 1100);
  }
  nwWords(text, d0, step) {
    const mo = this.motionOn(); d0 = d0 || 0; step = step || 38;
    return String(text).split(' ').map((w, i) => ({ w: w, s: 'display:inline-block;margin-right:.26em' + (mo ? ';animation:nwword .55s cubic-bezier(.2,.7,.1,1) ' + (d0 + i * step) + 'ms both' : '') }));
  }
  noorMount() {
    this._orbP = { x: 0, y: 0, tx: 0, ty: 0 };
    this._nwRs = () => this.orbStart(); window.addEventListener('resize', this._nwRs);
    const stage = this.nwStageRef.current, orb = this.orbRef.current;
    if ('IntersectionObserver' in window) {
      this.nwIo = new IntersectionObserver(es => es.forEach(e => {
        if (e.target === orb) { const v = e.isIntersecting; if (v !== this._orbVis) { this._orbVis = v; this.orbStart(); } return; }
        const v = e.isIntersecting && e.intersectionRatio >= 0.3;
        if (v === !!this._nwVis) return; this._nwVis = v;
        if (v) this.nwGo(this._nwStarted ? this.state.nwStep : 0); else this.nwStop();
      }), { threshold: [0, 0.3, 0.6] });
      if (stage) this.nwIo.observe(stage);
      if (orb) this.nwIo.observe(orb);
    } else { this._nwVis = true; this._orbVis = true; this.nwGo(0); }
    this.orbStart();
  }
  noorUnmount() {
    this.nwStop(); clearTimeout(this._askT); cancelAnimationFrame(this._orbRaf);
    if (this.nwIo) this.nwIo.disconnect();
    if (this._nwRs) window.removeEventListener('resize', this._nwRs);
  }
  orbStart() {
    const c = this.orbRef.current; if (!c) return;
    const sz = c.clientWidth; if (!sz) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1), px = Math.round(sz * dpr);
    if (c.width !== px) { c.width = px; c.height = px; }
    const x = c.getContext('2d'); if (!x) return;
    if (!this._motes) { this._motes = []; for (let i = 0; i < 56; i++) this._motes.push({ a: Math.random() * 6.283, r: .22 + Math.random() * .26, s: (.00018 + Math.random() * .0005) * (Math.random() < .5 ? -1 : 1), z: .6 + Math.random() * 1.5, ph: Math.random() * 6.283, tw: .0008 + Math.random() * .0018 }); }
    const P = this._orbP || (this._orbP = { x: 0, y: 0, tx: 0, ty: 0 });
    const draw = t => {
      const W = c.width, R = W / 2; P.x += (P.tx - P.x) * .05; P.y += (P.ty - P.y) * .05;
      const cx = R + P.x * R * .1, cy = R + P.y * R * .1, br = 1 + Math.sin(t / 1800) * .05;
      x.clearRect(0, 0, W, W);
      let g = x.createRadialGradient(cx, cy, 0, cx, cy, R * .98 * br);
      g.addColorStop(0, 'rgba(240,221,179,.32)'); g.addColorStop(.28, 'rgba(201,169,110,.15)'); g.addColorStop(.62, 'rgba(201,169,110,.045)'); g.addColorStop(1, 'rgba(201,169,110,0)');
      x.fillStyle = g; x.fillRect(0, 0, W, W);
      for (let k = 0; k < 3; k++) { x.save(); x.translate(cx, cy); x.rotate(t * .00005 * (k % 2 ? -1 : 1) + k * 1.05); x.scale(1, .3 + k * .07); x.beginPath(); x.arc(0, 0, R * (.5 + k * .11), 0, 6.283); x.restore(); x.strokeStyle = 'rgba(201,169,110,' + (.26 - k * .06) + ')'; x.lineWidth = dpr; x.stroke(); }
      const rr = R * .19 * br;
      g = x.createRadialGradient(cx, cy, 0, cx, cy, rr * 1.9); g.addColorStop(0, 'rgba(255,248,230,.9)'); g.addColorStop(.35, 'rgba(240,221,179,.5)'); g.addColorStop(1, 'rgba(201,169,110,0)');
      x.fillStyle = g; x.beginPath(); x.arc(cx, cy, rr * 1.9, 0, 6.283); x.fill();
      let rg = 'var(--iw-gold)';
      if (x.createConicGradient) { rg = x.createConicGradient(t * .0005 + 3.5, cx, cy); rg.addColorStop(0, '#C9A96E'); rg.addColorStop(.33, '#F0DDB3'); rg.addColorStop(.66, '#A9864C'); rg.addColorStop(1, '#C9A96E'); }
      x.beginPath(); x.arc(cx, cy, rr, 0, 6.283); x.lineWidth = R * .07; x.strokeStyle = rg; x.stroke();
      x.globalCompositeOperation = 'lighter';
      for (const m of this._motes) {
        const a = m.a + t * m.s, r = R * (m.r + Math.sin(t * .0006 + m.ph) * .02), al = .2 + .6 * (.5 + .5 * Math.sin(t * m.tw + m.ph));
        x.fillStyle = 'rgba(240,221,179,' + al.toFixed(3) + ')'; x.beginPath(); x.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r * .86, m.z * dpr, 0, 6.283); x.fill();
      }
      x.globalCompositeOperation = 'source-over';
    };
    cancelAnimationFrame(this._orbRaf);
    if (!this.motionOn() || !this._orbVis) { draw(2400); return; }
    const loop = t => { draw(t); this._orbRaf = requestAnimationFrame(loop); };
    this._orbRaf = requestAnimationFrame(loop);
  }
  noorVals() {
    const s = this.state, ph = s.nwPh || 0, st = s.nwStep || 0, mo = this.motionOn(), nar = s.w < 900, E = 'cubic-bezier(.2,.7,.1,1)';
    const vis = (on, d, dx, dy) => 'opacity:' + (on ? 1 : 0) + ';transform:' + (on ? 'none' : 'translate(' + (dx || 0) + 'px,' + (dy == null ? 10 : dy) + 'px)') + ';transition:opacity .6s ease ' + (d || 0) + 'ms,transform .7s ' + E + ' ' + (d || 0) + 'ms';
    const sig = (sz, run) => 'flex:0 0 ' + sz + 'px;width:' + sz + 'px;height:' + sz + 'px;border-radius:50%;display:grid;place-items:center;background:conic-gradient(from 200deg,var(--iw-gold),#F0DDB3,#A9864C,var(--iw-gold))' + (mo ? ';animation:nwspin 2.6s linear infinite;animation-play-state:' + (run ? 'running' : 'paused') : '');
    const N = NW[st];
    const tabs = NW.map((t, i) => {
      const on = i === st; let lw = '0%', tr = 'width .3s ease';
      if (on) { if (!mo || s.nwPaused) { lw = '100%'; tr = 'none'; } else { lw = s.nwRun ? '100%' : '0%'; tr = s.nwRun ? 'width ' + (NW_DUR - 80) + 'ms linear' : 'none'; } }
      return { no: '0' + (i + 1), label: t.label, sub: t.sub, tid: 'nw-tab-' + t.id, sel: on ? 'true' : 'false', on: () => this.nwGo(i),
        style: 'appearance:none;position:relative;width:100%;display:flex;align-items:baseline;gap:' + (nar ? 10 : 16) + 'px;padding:' + (nar ? '14px 0' : '20px 0') + ';background:none;border:0;border-bottom:1px solid var(--iw-line-strong);text-align:left;cursor:pointer;font-family:inherit;color:' + (on ? 'var(--iw-ivory)' : 'var(--iw-stone-dim)') + ';outline:none;transition:color .25s ease,background-color .25s ease',
        lineStyle: 'position:absolute;left:0;bottom:-1px;height:1px;background:var(--iw-gold);width:' + lw + ';transition:' + tr,
        subStyle: nar ? 'display:none' : 'display:block;margin-top:6px;font-size:13px;line-height:1.5;color:var(--iw-stone)' };
    });
    const BUD = [['Décor and florals', 10, 14], ['Food and drink', 15, 13], ['Photography and film', 7.5, 7.5], ['Travel and the rest', 7.5, 5.5]];
    const Lk = v => '₹' + v + 'L';
    const budget = BUD.map((b, i) => { const ch = b[1] !== b[2], hi = i === 0 && ph >= 2, mv = ph >= 3 && ch, v = mv ? b[2] : b[1]; return { k: b[0], from: Lk(b[1]), to: ch ? '→ ' + Lk(b[2]) : '',
      rowStyle: 'padding:12px 10px;margin:0 -10px;border-bottom:1px solid var(--iw-line);transition:background-color .5s ease;background:' + (hi ? 'rgba(201,169,110,.07)' : 'transparent'),
      kStyle: 'font-size:15px;color:' + (hi ? 'var(--iw-gold-light)' : 'var(--iw-parchment)') + ';transition:color .4s ease',
      fromStyle: 'font-size:15px;color:' + (mv ? 'var(--iw-stone-dim)' : 'var(--iw-parchment)') + ';transition:color .4s ease',
      toStyle: (ch ? 'display:inline-block;' : 'display:none;') + 'font-size:15px;font-weight:700;color:var(--iw-gold-light);' + vis(mv, i * 140, -6, 0),
      barStyle: 'display:block;height:100%;width:' + (v / 20 * 100) + '%;background:' + (hi ? 'var(--iw-gold-light)' : '#5A4D42') + ';transition:width 1.1s ' + E + ' ' + (i * 140) + 'ms,background-color .5s ease' }; });
    const shown = [ph >= 1, ph >= 2, ph >= 2, ph >= 3], latest = ph >= 3 ? 3 : ph >= 2 ? 2 : ph >= 1 ? 0 : -1, dl = [0, 0, 240, 0];
    const pages = NW_PAGES.map((p, i) => ({ when: p.when, title: p.title, img: p.img, band: !!p.band,
      style: 'position:relative;overflow:hidden;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:66px;padding:' + (p.band ? '18px' : '10px') + ' 10px 10px 16px;border-radius:2px;background:' + p.bg + ';' + vis(shown[i], dl[i], 0, 18),
      patStyle: 'position:absolute;top:0;bottom:0;right:0;width:60%;background:' + (p.pat || 'none') + ';opacity:.55;-webkit-mask-image:linear-gradient(90deg,transparent,#000);mask-image:linear-gradient(90deg,transparent,#000);pointer-events:none',
      whenStyle: 'display:block;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:' + p.acc,
      titleStyle: 'display:block;margin-top:4px;font-family:Marcellus,serif;font-size:' + (nar ? 18 : 21) + 'px;line-height:1.15;color:' + p.fg,
      imgStyle: 'width:100%;height:100%;object-fit:cover;filter:' + (i === 1 && ph >= 3 ? 'sepia(.35) saturate(1.9) hue-rotate(-12deg) brightness(1.05)' : 'none') + ';transition:filter 1.2s ease',
      shimStyle: 'position:absolute;inset:0;pointer-events:none;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.38) 50%,transparent 70%);background-size:220% 100%;opacity:' + (mo && i === latest && ph < 4 ? 1 : 0) + ';transition:opacity .5s ease' + (mo ? ';animation:nwshim 1.5s linear infinite' : '') }));
    const tw = nar ? 52 : 64, th = nar ? 64 : 80;
    const srcs = ['couple1', 'couple2', 'couple3'].map((k, i) => { const lit = ph >= 1 && !(ph >= 2 && i === 1); return { img: NWA_IMG[k],
      style: 'position:relative;display:block;width:' + tw + 'px;height:' + th + 'px;overflow:hidden;border-radius:2px;outline:1px solid ' + (lit ? 'var(--iw-gold)' : 'transparent') + ';outline-offset:2px;opacity:' + (lit ? 1 : .4) + ';transition:opacity .5s ease ' + (i * 180) + 'ms,outline-color .5s ease ' + (i * 180) + 'ms' }; });
    const capBase = 'position:absolute;left:0;right:0;bottom:0;padding:26px 14px 16px;text-align:center;';
    const run = [
      { t: '19:15', what: 'Family performances, seven acts', flag: 'Running 20 minutes late', on: ph >= 1, warn: true },
      { t: '20:30', nt: '20:50', what: 'Your entrance', flag: 'Moved 20 minutes', on: ph >= 2 },
      { t: '21:00', nt: '21:20', what: 'Dinner service, forty Jain plates marked', flag: 'Moved 20 minutes', on: ph >= 2 }
    ].map((r, i) => { const mv = !!r.nt && ph >= 2; return { t: r.t, nt: r.nt || '', what: r.what, flag: r.flag,
      oldStyle: 'color:' + (mv ? 'var(--iw-stone-dim)' : 'var(--iw-parchment)') + ';text-decoration:' + (mv ? 'line-through' : 'none') + ';text-decoration-color:var(--iw-stone-dim);transition:color .4s ease',
      newStyle: (r.nt ? 'display:inline-block;' : 'display:none;') + 'margin-left:10px;font-weight:700;color:var(--iw-gold-light);' + vis(mv, i * 150, -6, 0),
      flagStyle: 'display:block;margin-top:4px;font-size:13px;font-weight:700;color:' + (r.warn ? '#E0A87A' : 'var(--iw-stone)') + ';' + vis(r.on, i * 150, 0, 6) }; });
    const AQ = s.askI, A = AQ === 'free' ? ASK_FREE : AQ != null ? ASK[AQ] : null, ans = !!A && s.askPh >= 1;
    const aw = A ? A.a.split(' ').length * 32 : 0, rise = d => mo ? ';animation:nwrise .6s ' + E + ' ' + d + 'ms both' : '';
    return {
      nwStageRef: this.nwStageRef, orbRef: this.orbRef,
      orbMove: e => { const c = this.orbRef.current, P = this._orbP; if (!c || !P) return; const r = c.getBoundingClientRect(); P.tx = Math.max(-1, Math.min(1, (e.clientX - r.left - r.width / 2) / r.width)); P.ty = Math.max(-1, Math.min(1, (e.clientY - r.top - r.height / 2) / r.height)); },
      orbLeave: () => { if (this._orbP) { this._orbP.tx = 0; this._orbP.ty = 0; } },
      nwTabs: tabs, nwLabelledBy: 'nw-tab-' + N.id, nwStatus: N.status[ph],
      nwRailStyle: nar ? 'display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 18px;border-top:1px solid var(--iw-line-strong)' : 'border-top:1px solid var(--iw-line-strong)',
      nwCanPause: mo, nwPausedA: s.nwPaused ? 'true' : 'false', nwPauseLabel: s.nwPaused ? 'Play the demo' : 'Pause the demo', nwPauseToggle: () => this.nwPause(),
      nwSigStyle: sig(22, ph < 4 && !s.nwPaused),
      nwBodyStyle: 'position:relative;flex:1;display:flex;flex-direction:column;min-height:' + (nar ? '0' : '520px') + ';padding:clamp(20px,2.6vw,36px)',
      nwIsBudget: st === 0, nwIsSite: st === 1, nwIsPortraits: st === 2, nwIsDay: st === 3,
      nwScanStyle: 'position:absolute;left:0;right:0;height:56px;z-index:1;pointer-events:none;top:' + (ph >= 1 ? 'calc(100% - 56px)' : '-56px') + ';opacity:' + (ph === 1 ? 1 : 0) + ';background:linear-gradient(180deg,rgba(232,209,154,0) 0%,rgba(232,209,154,.1) 100%);border-bottom:1px solid var(--iw-gold-light);transition:top 1.5s cubic-bezier(.45,0,.2,1),opacity .5s ease',
      nwBudget: budget,
      nwNoteStyle: 'display:flex;gap:12px;align-items:flex-start;margin-top:18px;' + vis(ph >= 2),
      nwBudgetWords: ph >= 2 ? this.nwWords('Hanging florals over a forty-foot mandap usually cost ₹14L to ₹16L. Here is one way to find the difference without moving your total.', 0, 30) : [],
      nwBudDone: 'display:flex;gap:10px;align-items:flex-start;margin-top:auto;padding-top:16px;font-size:14px;line-height:1.55;color:var(--iw-parchment);' + vis(ph >= 4),
      nwSiteCount: ['Starting', '1 of 6 pages', '3 of 6 pages', '4 of 6 pages', '6 of 6 pages'][ph],
      nwPages: pages,
      nwSiteDone: 'display:flex;gap:10px;align-items:flex-start;margin-top:auto;padding-top:16px;font-size:14px;line-height:1.55;color:var(--iw-parchment);' + vis(ph >= 4),
      nwSrc: srcs,
      nwPosterStyle: 'position:absolute;inset:0;opacity:' + (ph >= 2 ? 1 : 0) + ';transform:scale(' + (ph >= 2 ? 1 : .96) + ');transition:opacity .8s ease,transform 1s ' + E,
      nwPImgA: 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:' + (ph >= 3 ? 'sepia(.75) contrast(1.1) saturate(.8)' : ph >= 2 ? 'blur(0px) saturate(.95)' : 'blur(10px) saturate(.6)') + ';opacity:' + (ph >= 4 ? 0 : 1) + ';transition:filter 1.4s ease,opacity 1s ease',
      nwPImgB: 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:sepia(.35) saturate(1.9) hue-rotate(-12deg) brightness(1.05);opacity:' + (ph >= 4 ? 1 : 0) + ';transition:opacity 1s ease',
      nwPFrame: 'position:absolute;inset:8px;border:2px solid #F2E2C4;pointer-events:none;opacity:' + (ph === 3 ? 1 : 0) + ';transition:opacity .8s ease',
      nwPCapA: capBase + 'background:linear-gradient(0deg,#3A1F10,transparent);color:#F2E2C4;' + vis(ph === 3, 200, 0, 12),
      nwPCapB: capBase + 'background:linear-gradient(0deg,rgba(122,62,0,.95),transparent);color:#FFE18A;' + vis(ph >= 4, 200, 0, 12),
      nwPTag: 'position:absolute;top:12px;right:12px;padding:4px 8px;border-radius:2px;background:rgba(12,9,7,.72);color:var(--iw-ivory);font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;' + vis(ph >= 3, 400, 0, -6),
      nwStyles: [['Vintage film poster', ph === 3], ['Haldi tug of war', ph >= 4], ['70s Bollywood', false], ['Miniature painting', false]].map(x => ({ label: x[0], style: 'padding:6px 0;font-size:13px;border-bottom:1px solid ' + (x[1] ? 'var(--iw-gold)' : 'transparent') + ';color:' + (x[1] ? 'var(--iw-ivory)' : 'var(--iw-stone-dim)') + ';transition:color .4s ease,border-color .4s ease' })),
      nwRun: run,
      nwAlertStyle: 'margin-top:16px;padding:16px 18px;border-radius:2px;background:var(--iw-surface);' + vis(ph >= 3),
      nwAlertWords: ph >= 3 ? this.nwWords('The sangeet is running twenty minutes late. Your entrance is now at 8:50, and dinner at 9:20. Shuttles back to the hotel are unchanged.', 150, 28) : [],
      nwSendLabel: ph >= 4 ? 'Sent by you' : 'Send to 240 guests',
      nwSendStyle: 'display:inline-flex;align-items:center;min-height:40px;padding:0 16px;border:1px solid var(--iw-gold);border-radius:2px;font-size:13px;font-weight:700;background:' + (ph >= 4 ? 'var(--iw-gold)' : 'transparent') + ';color:' + (ph >= 4 ? 'var(--iw-on-gold)' : 'var(--iw-ivory)') + ';transition:background-color .4s ease,color .4s ease',
      nwReadStyle: 'font-size:13px;color:var(--iw-stone);' + vis(ph >= 4, 300, -6, 0),
      askOpts: ASK.map((a, i) => { const on = AQ === i; return { q: a.q, pressed: on ? 'true' : 'false', on: () => this.askGo(i),
        style: 'appearance:none;width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:60px;padding:14px 0;background:none;border:0;border-bottom:1px solid var(--iw-line-strong);text-align:left;cursor:pointer;font-family:inherit;font-size:16px;line-height:1.45;color:' + (on ? 'var(--iw-ivory)' : 'var(--iw-sand)') + ';transition:color .2s ease',
        arrowStyle: 'flex:none;font-size:18px;color:var(--iw-gold);transition:transform .3s ' + E + ';transform:translateX(' + (on ? 6 : 0) + 'px)' }; }),
      askText: s.askText || '', askSet: e => this.setState({ askText: e.target.value }),
      askSubmit: e => { e.preventDefault(); const t = (this.state.askText || '').trim(); if (!t) return; this.setState({ askFreeQ: t, askText: '' }); this.askGo('free'); },
      askEmpty: !A, askHas: !!A, askQ: AQ === 'free' ? s.askFreeQ : A ? A.q : '',
      askThinking: !!A && s.askPh === 0, askSigStyle: sig(26, !!A && s.askPh === 0),
      askWords: ans ? this.nwWords(A.a, 0, 32) : [],
      askHasRows: ans && A.rows.length > 0,
      askRows: ans ? A.rows.map((r, i) => ({ k: r[0], v: r[1], style: 'display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:4px 20px;padding:12px 0;border-bottom:1px solid var(--iw-line)' + rise(aw + 200 + i * 140) })) : [],
      askHasFoot: ans && !!A.foot, askFoot: A && A.foot ? A.foot : '',
      askFootStyle: 'margin:14px 0 0;font-size:14px;line-height:1.6;color:var(--iw-gold-light)' + rise(aw + 200 + (A ? A.rows.length : 0) * 140 + 120),
      askIsFree: ans && AQ === 'free',
      askLinkStyle: 'display:inline-flex;align-items:center;min-height:44px;margin-top:12px;font-size:14px;font-weight:700;color:var(--iw-gold-light);text-decoration:underline;text-underline-offset:5px' + rise(aw + 200)
    };
  }
  archPinned() { return this.hs() === 'Arch' && this.motionOn() && this.state.w >= 960; }
  startArch() {
    clearInterval(this._archT); if (this._archAu) this._archAu.cancel();
    if (this.hs() !== 'Arch') return;
    const au = this.archAuraRef.current;
    if (au && this.motionOn()) this._archAu = au.animate([{ opacity: .8, transform: 'translate(-50%,-50%) scale(.96)' }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1.05)' }], { duration: 9000, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' });
    if (this.archPinned()) { if (this._archPg) this._archPg.cancel(); this.archScroll(); return; }
    const ai = this.state.archI || 0, mo = this.motionOn();
    this.archImgRefs.forEach((r, i) => { if (r.current) { r.current.style.opacity = i === ai ? '1' : '0'; r.current.style.transform = 'scale(' + (mo && i !== ai ? 1.06 : 1) + ')'; } });
    if (this.motionOn() && this.slidesOn()) this._archT = setInterval(() => this.setState(s => ({ archI: (s.archI + 1) % ORBIT.length })), 6500);
    this.archProg();
  }
  archProg() {
    if (this._archPg) this._archPg.cancel();
    const el = this.archProgRef.current; if (!el) return;
    if (!this.motionOn() || !this.slidesOn()) { el.style.transform = 'scaleX(0)'; return; }
    this._archPg = el.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: 6500, easing: 'linear', fill: 'forwards' });
  }
  archGeom() {
    const sec = this.archSecRef.current; if (!sec) return null;
    const r = sec.getBoundingClientRect(), total = Math.max(1, r.height - window.innerHeight);
    return { r, total, p: Math.min(1, Math.max(0, -r.top / total)) };
  }
  archScroll() {
    if (!this.archPinned()) return;
    const g = this.archGeom(); if (!g) return;
    const N = ORBIT.length, t = g.p * (N - 1);
    this.archImgRefs.forEach((ref, i) => {
      const el = ref.current; if (!el) return;
      const op = i === 0 ? 1 : Math.min(1, Math.max(0, (t - i + 0.5) / 0.5));
      el.style.opacity = op.toFixed(3);
      el.style.transform = 'scale(' + (1.07 - 0.07 * op - 0.025 * Math.min(1, Math.max(0, t - i))).toFixed(4) + ')';
    });
    const pr = this.archProgRef.current; if (pr) pr.style.transform = 'scaleX(' + g.p.toFixed(4) + ')';
    const idx = Math.min(N - 1, Math.max(0, Math.floor(t + 0.25)));
    if (idx !== this.state.archI) this.setState({ archI: idx });
  }
  archGo(i) {
    if (this.archPinned()) {
      const g = this.archGeom(); if (!g) return;
      const y = window.scrollY + g.r.top + (i === 0 ? g.r.height : (i / (ORBIT.length - 1)) * g.total);
      window.scrollTo({ top: y, behavior: 'smooth' }); return;
    }
    this.setState({ archI: i }); this.startArch();
  }
  startAuto() {
    clearInterval(this._auto);
    if (this.slidesOn() && this.motionOn() && !this.state.paused) this._auto = setInterval(() => this.setState(s => ({ slide: (s.slide + 1) % 3 })), 6500);
  }
  kenBurns() {
    const f = this.heroFrameRef.current; if (!f || !this.motionOn()) return;
    const im = f.querySelector(`[data-slide="${this.state.slide}"]`); if (!im) return;
    im.getAnimations().forEach(a => a.cancel());
    im.animate([{ transform: 'scale(1.1)' }, { transform: 'scale(1)' }], { duration: 8000, easing: 'cubic-bezier(.2,.6,.2,1)', fill: 'both' });
  }
  tick() {
    const root = this.rootRef.current;
    const y = root ? -root.getBoundingClientRect().top : (window.scrollY || 0);
    this._sy = y;
    this.archScroll();
    if (!this.motionOn() && this.skyOn() && this._sk) this.drawSky(9000);
    const solid = y > 24;
    if (solid !== this.state.solid) this.setState({ solid });
    const par = this.heroParRef.current;
    if (par) par.style.transform = this.motionOn() ? `translate3d(0, ${(Math.max(0, Math.min(y, 1000)) * 0.08).toFixed(1)}px, 0)` : 'none';
    this.applyP();
  }
  applyP() {
    const el = this.showRef.current; if (!el) return;
    if (!this.anim()) { el.style.setProperty('--p', '1'); return; }
    const r = el.getBoundingClientRect(), vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)));
    el.style.setProperty('--p', p.toFixed(4));
  }
  heroIn() {
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-hero]').forEach(el => {
        const d = +el.getAttribute('data-hero') || 0;
        el.animate([{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 820, delay: d, easing: EASE, fill: 'backwards' });
      });
      const f = this.heroFrameRef.current;
      if (f) f.animate([{ clipPath: 'inset(16% 20% 16% 20% round 4px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)' }], { duration: 1300, easing: 'cubic-bezier(.75,0,.2,1)', fill: 'backwards' });
      this.kenBurns();
      document.querySelectorAll('[data-draw]').forEach(el => { const L = el.getTotalLength ? el.getTotalLength() : 0; if (!L) return; el.style.strokeDasharray = L + ' ' + L; el.animate([{ strokeDashoffset: L }, { strokeDashoffset: 0 }], { duration: +(el.getAttribute('data-dur') || 2000), delay: +(el.getAttribute('data-draw') || 0), easing: 'cubic-bezier(.65,0,.25,1)', fill: 'both' }); });
      document.querySelectorAll('[data-arch]').forEach(el => el.animate([{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)' }], { duration: 1300, delay: 160, easing: 'cubic-bezier(.75,0,.2,1)', fill: 'backwards' }));
    });
  }
  setupReveal() {
    if (!('IntersectionObserver' in window)) return;
    const vh = window.innerHeight;
    this.io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        this.io.unobserve(e.target);
        (this._rvMap.get(e.target) || [e.target]).forEach(el => {
        const mask = el.getAttribute('data-rv') === 'mask';
        const d = +(el.getAttribute('data-rv-d') || 0);
        el.style.opacity = ''; el.style.clipPath = '';
        el.animate(mask
          ? [{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)' }]
          : [{ opacity: 0, transform: 'translateY(28px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: mask ? 1100 : 720, delay: d, easing: mask ? 'cubic-bezier(.7,0,.2,1)' : EASE, fill: 'backwards' });
        });
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.01 });
    this._rvMap = new Map();
    document.querySelectorAll('[data-rv]').forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.94) return;
      const mask = el.getAttribute('data-rv') === 'mask';
      if (mask) el.style.clipPath = 'inset(0 0 100% 0)'; else el.style.opacity = '0';
      const target = mask ? el.parentElement : el;
      if (!this._rvMap.has(target)) { this._rvMap.set(target, []); this.io.observe(target); }
      this._rvMap.get(target).push(el);
    });
  }

  sprite(rgb) {
    const s = 64, c = document.createElement('canvas'); c.width = c.height = s;
    const g = c.getContext('2d'), h = s / 2, gr = g.createRadialGradient(h, h, 0, h, h, h);
    gr.addColorStop(0, 'rgba(255,248,232,1)'); gr.addColorStop(0.16, 'rgba(' + rgb + ',.85)');
    gr.addColorStop(0.42, 'rgba(' + rgb + ',.2)'); gr.addColorStop(1, 'rgba(' + rgb + ',0)');
    g.fillStyle = gr; g.fillRect(0, 0, s, s); return c;
  }
  starSprite() {
    const s = 96, c = document.createElement('canvas'); c.width = c.height = s;
    const g = c.getContext('2d'), h = s / 2;
    const a = g.createLinearGradient(0, h, s, h), b = g.createLinearGradient(h, 0, h, s);
    [a, b].forEach(gr => { gr.addColorStop(0, 'rgba(232,209,154,0)'); gr.addColorStop(0.5, 'rgba(255,246,226,.95)'); gr.addColorStop(1, 'rgba(232,209,154,0)'); });
    g.fillStyle = a; g.fillRect(0, h - 0.6, s, 1.2); g.fillStyle = b; g.fillRect(h - 0.6, 0, 1.2, s);
    return c;
  }
  initSparkle() {
    const c = this.sparkRef.current; if (!c || !c.getContext) return;
    this._ctx = c.getContext('2d');
    const sc = this.skyRef.current; if (sc && sc.getContext) { this._sctx = sc.getContext('2d'); this._moon = this.moonSprite(); }
    this._spr = { gold: this.sprite('232,209,154'), ivory: this.sprite('244,238,228'), star: this.starSprite() };
    this._onSpRs = () => this.sizeSparkle(); window.addEventListener('resize', this._onSpRs);
    this._onVis = () => this.sparkLoop(); document.addEventListener('visibilitychange', this._onVis);
    this.sizeSparkle();
  }
  sizeSparkle() {
    const c = this.sparkRef.current; if (!c || !this._ctx) return;
    // Soft glows and blurred sprites look the same at 1x; a 2x full-viewport
    // canvas redrawn every frame costs four times the fill for no visible gain.
    const dpr = 1, W = window.innerWidth, H = window.innerHeight, R = Math.random;
    c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
    this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this._W = W; this._H = H; this._FH = H * 1.8;
    const lvl = this.props.sparkle || 'Subtle', rad = lvl === 'Radiant';
    const n = lvl === 'Off' ? 0 : Math.round(W * H / (rad ? 12000 : 24000));
    this._sp = Array.from({ length: n }, () => ({ x: R() * W, y: R() * this._FH, r: 0.6 + Math.pow(R(), 3) * 2.2, d: R() < 0.65 ? 0.08 : 0.22, ph: R() * 6.283, f: 0.35 + R() * 1.1, ivory: R() < 0.3, star: R() < 0.07, dx: (R() - 0.5) * 6 }));
    this._gl = lvl === 'Off' ? [] : [[0.16, 0.2], [0.84, 0.52], [0.42, 0.92]].map(([x, y], i) => ({ x: x * W, y: y * H, rad: Math.max(W, H) * (0.3 + i * 0.05), ph: i * 2.1, a: rad ? 0.075 : 0.045 }));
    this.sizeSky();
    this.sparkLoop();
  }
  sparkLoop() {
    cancelAnimationFrame(this._spRaf);
    if (!this._sp || (!this._sp.length && !this._gl.length && !this.skyOn())) { if (this._ctx) this._ctx.clearRect(0, 0, this._W || 0, this._H || 0); return; }
    if (!this.motionOn() || document.visibilityState === 'hidden') { this.drawSparkle(9000); return; }
    let last = 0;
    const step = ts => { this._spRaf = requestAnimationFrame(step); if (ts - last < 48) return; last = ts; this.drawSparkle(ts); };
    this._spRaf = requestAnimationFrame(step);
  }
  drawSparkle(ts) {
    this.drawSky(ts);
    const g = this._ctx; if (!g || !this._sp) return;
    const W = this._W, H = this._H, FH = this._FH, t = ts / 1000, sy = this.motionOn() ? (this._sy || 0) : 0;
    g.clearRect(0, 0, W, H);
    g.globalCompositeOperation = 'lighter';
    for (const o of this._gl) {
      const x = o.x + Math.sin(t * 0.07 + o.ph) * W * 0.05, y = o.y + Math.cos(t * 0.05 + o.ph) * H * 0.05;
      const a = o.a * (0.75 + 0.25 * Math.sin(t * 0.2 + o.ph)), gr = g.createRadialGradient(x, y, 0, x, y, o.rad);
      gr.addColorStop(0, 'rgba(201,169,110,' + a + ')'); gr.addColorStop(0.5, 'rgba(201,169,110,' + (a * 0.35) + ')'); gr.addColorStop(1, 'rgba(201,169,110,0)');
      g.fillStyle = gr; g.fillRect(0, 0, W, H);
    }
    for (const s of this._sp) {
      let y = (s.y - sy * s.d) % FH; if (y < 0) y += FH; if (y > H + 20) continue;
      const x = s.x + Math.sin(t * 0.1 + s.ph) * s.dx, tw = 0.5 + 0.5 * Math.sin(t * s.f + s.ph), size = s.r * 7;
      g.globalAlpha = (0.12 + Math.pow(tw, 4) * 0.88) * (s.d > 0.1 ? 0.9 : 0.6);
      g.drawImage(s.ivory ? this._spr.ivory : this._spr.gold, x - size / 2, y - size / 2, size, size);
      if (s.star && tw > 0.8) { const k = (tw - 0.8) / 0.2, L = s.r * 16 * k; g.globalAlpha = k * 0.8; g.drawImage(this._spr.star, x - L / 2, y - L / 2, L, L); }
    }
    g.globalAlpha = 1; g.globalCompositeOperation = 'source-over';
  }

  hs() { return (this.state && this.state.heroPick) || this.props.heroStyle || 'Cinematic'; }
  pickHero(name) { if (HEROES.indexOf(name) < 0) return; this.setState({ heroPick: name }); window.scrollTo({ top: 0, behavior: 'auto' }); }
  heroStep(d) { const i = Math.max(0, HEROES.indexOf(this.hs())); this.pickHero(HEROES[(i + d + HEROES.length) % HEROES.length]); }
  switcherVals(narrow) {
    const cur = this.hs(), ci = HEROES.indexOf(cur), open = !!this.state.swOpen;
    return {
      showSwitcher: this.props.presenter !== false && !this.state.swHidden, swOpen: open, swClosed: !open,
      swCur: (ci + 1) + ' / ' + HEROES.length + ' · ' + cur,
      heroOpts: HEROES.map((n, i) => ({ no: String(i + 1), label: narrow ? '' : n, title: n + ' (press ' + (i + 1) + ')', pressed: n === cur ? 'true' : 'false', bg: n === cur ? 'var(--iw-ivory)' : 'transparent', fg: n === cur ? 'var(--iw-on-ivory)' : 'var(--iw-sand)', noC: n === cur ? '#8A7245' : 'var(--iw-stone-dim)', on: () => this.pickHero(n) })),
      swPrev: () => this.heroStep(-1), swNext: () => this.heroStep(1),
      swEnter: () => { if (!this.state.swOpen) this.setState({ swOpen: true }); },
      swLeave: () => { if (this.state.swOpen && !(document.activeElement && document.activeElement.closest && document.activeElement.closest('[aria-label="Hero options for presenting"]'))) this.setState({ swOpen: false }); },
      swBlur: e => { if (!e.currentTarget.contains(e.relatedTarget)) this.setState({ swOpen: false }); },
      petalHintB: this.props.presenter !== false && !this.state.swHidden ? '84px' : '20px'
    };
  }
  heroVals(narrow) {
    const hs = this.hs();
    if (this._lastHs !== hs) {
      const first = this._lastHs === undefined; this._lastHs = hs;
      if (!first) setTimeout(() => { if (this.motionOn()) this.heroIn(); this.startOrbit(); this.seamHint(); this.startPetals(); this.startMoon(); this.startArch(); }, 60);
    }
    return {
      heroCine: hs === 'Cinematic', heroMosaic: hs === 'Mosaic', heroOrbit: hs === 'Orbit', heroSeam: hs === 'Seam', heroArch: hs === 'Arch', heroSky: hs === 'Your sky', heroPetals: hs === 'Petals', ...this.switcherVals(narrow),
      moonRef: this.moonRef, moonSz: narrow ? '180px' : 'clamp(190px, 25vh, 300px)', ...this.skyVals(),
      petalRef: this.petalRef, petalBackRef: this.petalBackRef, petalFrontRef: this.petalFrontRef, petalMove: this.petalMove, petalDown: this.petalDown, petalLeave: this.petalLeave,
      petalHint: narrow ? 'Tap to shower petals' : 'Move to part the petals · Tap to shower them',
      orbitRef: this.orbitRef, orbitTextRef: this.orbitTextRef, orbitEllRef: this.orbitEllRef, orbitPolyRef: this.orbitPolyRef,
      orbits: ORBIT.map((o, i) => ({ ...o, bg: 'url("' + o.img + '")', ref: this.orbitItemRefs[i] })),
      orbitAuraRef: this.orbitAuraRef, orbitRaysRef: this.orbitRaysRef, orbitStarsRef: this.orbitStarsRef, orbitGlowEllRef: this.orbitGlowEllRef, orbitOuterRef: this.orbitOuterRef, orbitInnerRef: this.orbitInnerRef,
      orbitStars: ORBIT_STARS,
      orbitComets: (() => { let ci = 0; return ORBIT_COMETS.flatMap(cm => Array.from({ length: cm.n }, (_, j) => ({ ref: this.orbitCometRefs[ci++], sz: cometSz(j, narrow) + 'px',
        bg: j === 0 ? 'radial-gradient(circle, rgba(255,250,238,.95) 0%, rgba(244,214,150,.55) 28%, rgba(232,190,120,0) 70%)' : 'radial-gradient(circle, rgba(255,236,196,' + (0.75 - j * 0.1).toFixed(2) + ') 0%, rgba(232,190,120,0) 70%)' }))); })(),
      orbitSz: narrow ? '64px' : '120px', orbitCapDisp: narrow ? 'none' : 'block', orbitAlign: narrow ? 'flex-end' : 'center', orbitPadB: narrow ? '40px' : '0px',
      seamRef: this.seamRef, seamHandleRef: this.seamHandleRef, seamDown: this.seamDown, seamMove: this.seamMove, seamUp: this.seamUp, seamKey: this.seamKey,
      seamPlanW: narrow ? '62%' : 'min(46%, 640px)', seamPlanJust: narrow ? 'flex-start' : 'center', seamCopyW: narrow ? '100%' : '44%',
      seamTimeSz: narrow ? 'clamp(48px,12vw,72px)' : 'clamp(64px,9vw,156px)', seamRowsDisp: narrow ? 'none' : 'block', seamPlanPad: narrow ? '132px 20px 0 0' : '112px clamp(20px,4vw,56px) 40px 0',
      ...this.archVals(narrow)
    };
  }
  archVals(narrow) {
    const ai = this.state.archI || 0, nx = (ai + 1) % ORBIT.length, mo = this.motionOn(), pin = !narrow && mo, pad = n => String(n).padStart(2, '0');
    return {
      archRef: this.archRef, archProgRef: this.archProgRef, archCapRef: this.archCapRef, archSecRef: this.archSecRef, archAuraRef: this.archAuraRef,
      archSlides: ORBIT.map((o, i) => ({ ref: this.archImgRefs[i], bg: 'url("' + o.img + '")', op: pin ? (i === 0 ? 1 : 0) : (i === ai ? 1 : 0), sc: !pin && mo && i !== ai ? 1.06 : 1 })),
      archTr: pin ? 'opacity .35s linear, transform .35s linear' : 'opacity 1.6s ease, transform 8s cubic-bezier(.2,.6,.2,1)',
      archSecH: pin ? 'calc(100svh + ' + ((ORBIT.length - 1) * 60) + 'vh)' : 'auto', archPos: pin ? 'sticky' : 'relative', archInnerH: pin ? '100svh' : 'auto',
      archNo: pad(ai + 1) + ' / ' + pad(ORBIT.length), archName: ORBIT[ai].n, archDay: ORBIT[ai].d, archNextName: pin && nx === 0 ? 'continue' : ORBIT[nx].n, archNext: () => this.archGo(nx),
      archCols: narrow ? 'minmax(0,1fr)' : 'minmax(0,480px) auto', archGap: narrow ? '72px' : 'clamp(56px,7vw,112px)',
      archTextW: narrow ? '560px' : '480px', archJs: narrow ? 'center' : 'start', archTA: narrow ? 'center' : 'left', archRuleM: narrow ? 'auto' : '0',
      archW: narrow ? 'min(300px, 74vw)' : 'min(clamp(300px,27vw,420px), calc((100svh - 300px) * .714))',
      archPadB: this.props.presenter !== false && !this.state.swHidden ? '92px' : '48px'
    };
  }
  startOrbit() {
    cancelAnimationFrame(this._obRaf);
    (this._obAnims || []).forEach(a => a.cancel()); this._obAnims = [];
    if (this.hs() !== 'Orbit') return;
    if (this.motionOn()) {
      const A = (el, k, o) => { if (el && el.animate) this._obAnims.push(el.animate(k, o)); };
      A(this.orbitRaysRef.current, [{ transform: 'translate(-50%,-50%) rotate(0deg)' }, { transform: 'translate(-50%,-50%) rotate(360deg)' }], { duration: 240000, iterations: Infinity });
      A(this.orbitAuraRef.current, [{ opacity: 0.75, transform: 'translate(-50%,-50%) scale(.94)' }, { opacity: 1, transform: 'translate(-50%,-50%) scale(1.06)' }], { duration: 7000, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });
      const st = this.orbitStarsRef.current;
      if (st) Array.from(st.children).forEach((s, i) => A(s, [{ opacity: 0.15 }, { opacity: 1 }, { opacity: 0.15 }], { duration: 2600 + (i * 733) % 3400, delay: -((i * 1171) % 5000), iterations: Infinity, easing: 'ease-in-out' }));
    }
    const step = ts => { this.orbitTick(ts); if (this.motionOn() && document.visibilityState !== 'hidden') this._obRaf = requestAnimationFrame(step); };
    this._obRaf = requestAnimationFrame(step);
  }
  orbitTick(ts) {
    const el = this.orbitRef.current; if (!el) return;
    const W = el.clientWidth, H = el.clientHeight, nar = W < 960, mo = this.motionOn();
    const sz = nar ? 64 : 120, cx = W / 2;
    let cy = (H + 72) / 2 - 8, rx = Math.min(W * 0.44, 700), ry = (H - 72) * 0.4;
    if (nar) {
      const tb = this.orbitTextRef.current && this.orbitTextRef.current.firstElementChild;
      const textTop = tb ? tb.getBoundingClientRect().top - el.getBoundingClientRect().top : H * 0.5;
      const top = 72 + sz * 0.3 + 8, bottom = textTop - sz / 2 - 16;
      cy = (top + bottom) / 2; ry = Math.max(24, (bottom - top) / 2); rx = Math.min(W * 0.4, W / 2 - sz / 2 - 8);
    }
    const n = this.orbitItemRefs.length, base = mo ? ts / 1000 * 0.035 + (this._sy || 0) * 0.0009 : 0.4, pts = [];
    this.orbitItemRefs.forEach((r, i) => {
      const node = r.current; if (!node) return;
      const a = base + i * 6.2832 / n, x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a), d = (Math.sin(a) + 1) / 2;
      node.style.transform = 'translate(' + (x - sz / 2).toFixed(1) + 'px,' + (y - sz / 2).toFixed(1) + 'px) scale(' + (0.6 + 0.4 * d).toFixed(3) + ')';
      node.style.zIndex = d > 0.55 ? '3' : '1';
      node.style.opacity = (0.4 + 0.6 * d).toFixed(3);
      const cap = node._cap || (node._cap = node.querySelector('figcaption'));
      if (cap) { const right = x > cx; if (cap._r !== right) { cap._r = right; cap.style.left = right ? 'auto' : 'calc(100% + 14px)'; cap.style.right = right ? 'calc(100% + 14px)' : 'auto'; cap.style.textAlign = right ? 'right' : 'left'; } }
      pts.push(x.toFixed(1) + ',' + y.toFixed(1));
    });
    const e = this.orbitEllRef.current; if (e) { e.setAttribute('cx', cx); e.setAttribute('cy', cy); e.setAttribute('rx', rx); e.setAttribute('ry', ry); }
    const pl = this.orbitPolyRef.current; if (pl && pts.length) pl.setAttribute('points', pts.concat(pts[0]).join(' '));
    el.style.setProperty('--ocx', cx.toFixed(1) + 'px'); el.style.setProperty('--ocy', cy.toFixed(1) + 'px');
    [[this.orbitGlowEllRef, 1], [this.orbitOuterRef, 1.16], [this.orbitInnerRef, 0.62]].forEach(([r, k]) => { const x = r.current; if (x) { x.setAttribute('cx', cx); x.setAttribute('cy', cy); x.setAttribute('rx', rx * k); x.setAttribute('ry', ry * k); } });
    const t = mo ? ts / 1000 : 0; let ci = 0;
    ORBIT_COMETS.forEach(cm => {
      for (let j = 0; j < cm.n; j++) {
        const node = this.orbitCometRefs[ci++].current; if (!node) continue;
        const a = cm.a0 + cm.dir * (t * cm.v - j * cm.gap), s = cometSz(j, nar);
        const x = cx + rx * cm.k * Math.cos(a), y = cy + ry * cm.k * Math.sin(a);
        node.style.transform = 'translate(' + (x - s / 2).toFixed(1) + 'px,' + (y - s / 2).toFixed(1) + 'px)';
        node.style.opacity = (0.45 + 0.55 * (Math.sin(a) + 1) / 2).toFixed(3);
      }
    });
  }
  seamSet(v) {
    v = Math.max(4, Math.min(96, v)); this._seam = v;
    const s = this.seamRef.current; if (s) s.style.setProperty('--seam', v.toFixed(2) + '%');
    const h = this.seamHandleRef.current; if (h) h.setAttribute('aria-valuenow', String(Math.round(v)));
  }
  seamFrom(e) { const s = this.seamRef.current; if (!s) return; const r = s.getBoundingClientRect(); this.seamSet((e.clientX - r.left) / r.width * 100); }
  seamDown = e => {
    const s = this.seamRef.current; if (!s || (e.target.closest && e.target.closest('a'))) return;
    const r = s.getBoundingClientRect(), sx = r.left + r.width * (this._seam ?? 54) / 100;
    const onHandle = e.target.closest && e.target.closest('[data-seam]');
    if (!onHandle && Math.abs(e.clientX - sx) > 48) return;
    // One pointer owns the drag; a second finger landing mid-drag is ignored.
    if (this._seamDrag) return;
    this._seamDrag = true; this._seamPid = e.pointerId; cancelAnimationFrame(this._seamRaf);
    try { s.setPointerCapture(e.pointerId); } catch (_) {}
    this.seamFrom(e);
  };
  seamMove = e => { if (this._seamDrag && e.pointerId === this._seamPid) this.seamFrom(e); };
  // Ends the drag on release, cancel, lost capture or window blur.
  seamUp = e => {
    if (!this._seamDrag || (e && e.pointerId != null && e.pointerId !== this._seamPid)) return;
    const s = this.seamRef.current, pid = this._seamPid;
    this._seamDrag = false; this._seamPid = null;
    try { if (s && s.hasPointerCapture && s.hasPointerCapture(pid)) s.releasePointerCapture(pid); } catch (_) {}
  };
  seamKey = e => {
    const v = this._seam ?? 54, k = e.key;
    if (k === 'ArrowLeft' || k === 'ArrowDown') this.seamSet(v - 4); else if (k === 'ArrowRight' || k === 'ArrowUp') this.seamSet(v + 4);
    else if (k === 'Home') this.seamSet(4); else if (k === 'End') this.seamSet(96); else return;
    cancelAnimationFrame(this._seamRaf); e.preventDefault();
  };
  seamHint() {
    cancelAnimationFrame(this._seamRaf);
    if (this.hs() !== 'Seam') return;
    const def = this.state.w < 960 ? 38 : 54;
    if (!this.motionOn()) { this.seamSet(def); return; }
    let t0 = 0; const from = 86;
    const step = ts => { if (!t0) t0 = ts; const k = Math.min(1, (ts - t0) / 1700), q = 1 - Math.pow(1 - k, 3); this.seamSet(from + (def - from) * q); if (k < 1) this._seamRaf = requestAnimationFrame(step); };
    this._seamRaf = requestAnimationFrame(step);
  }
  moonAge(ds) { const d = ds ? new Date(ds + 'T21:00:00') : new Date(); return ((d.getTime() / 864e5 - NEW0) % SYN + SYN) % SYN; }
  phaseName(a) { return a < 1 || a > 28.5 ? 'new moon' : a < 6.4 ? 'waxing crescent moon' : a < 8.4 ? 'first-quarter moon' : a < 13.8 ? 'waxing gibbous moon' : a < 15.8 ? 'full moon' : a < 21.1 ? 'waning gibbous moon' : a < 23.1 ? 'last-quarter moon' : 'waning crescent moon'; }
  skyCopy() {
    const s = this.state, d = s.skyDate;
    if (!d) { const a = this.moonAge(null); return { over: 'Tonight’s sky', count: '', line: 'Tonight the moon is a ' + this.phaseName(a) + '. Tell us your date and we’ll turn the sky to the night of your wedding.' }; }
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const dt = new Date(d + 'T00:00:00'), days = Math.round((dt - today) / 864e5), a = this.moonAge(d), ph = this.phaseName(a);
    const nice = dt.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }), plain = /^(new|full)/.test(ph);
    if (days > 0) return { over: (s.skyReturn ? 'Welcome back · ' : 'Your sky · ') + nice, count: days === 1 ? '1 day to go' : days.toLocaleString('en-IN') + ' days to go', line: 'On ' + nice + ', a ' + ph + (plain ? '' : ', ' + Math.round(a) + ' days old,') + ' rises over your wedding.' };
    if (days === 0) return { over: 'Your sky · today', count: 'Today', line: 'Tonight a ' + ph + ' rises over your wedding. Congratulations.' };
    return { over: 'Your sky · ' + nice, count: '', line: 'On ' + nice + ' the sky held a ' + ph + '.' };
  }
  skyVals() { const c = this.skyCopy(); return { skyOver: c.over, skyCount: c.count, skyHasCount: !!c.count, skyLine: c.line, skyDraft: this.state.skyDraft || '', skyChange: this.skyChange, skySubmit: this.skySubmit }; }
  loadSky() {
    let v = ''; try { v = localStorage.getItem(SKY_KEY) || ''; } catch (_) {}
    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) { this._moonAge = this.moonAge(v); this.setState({ skyDate: v, skyDraft: v, skyReturn: true }); }
  }
  skyChange = e => this.setState({ skyDraft: e.target.value });
  skySubmit = e => {
    e.preventDefault();
    const v = this.state.skyDraft || ''; if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return;
    const y = +v.slice(0, 4); if (y < 1900 || y > 2100) return;
    try { localStorage.setItem(SKY_KEY, v); } catch (_) {}
    this.setState({ skyDate: v, skyReturn: false });
    this.moonTo(this.moonAge(v));
    if (this.motionOn()) { const now = performance.now(); this._spin = { t0: now, amt: 6.2832 * 0.55, base: this.spinVal(now) }; }
  };
  spinVal(ts) {
    const s = this._spin; if (!s) return this._spinAcc || 0;
    const k = Math.min(1, Math.max(0, (ts - s.t0) / 2800)), e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    if (k >= 1) { this._spinAcc = s.base + s.amt; this._spin = null; return this._spinAcc; }
    return s.base + s.amt * e;
  }
  moonTo(a) {
    const cur = this._moonAge != null ? this._moonAge : a;
    if (!this.motionOn()) { this._moonAge = a; this._moonFrom = null; this.startMoon(); return; }
    let tgt = a; while (tgt < cur) tgt += SYN; if (tgt - cur < 0.5) tgt += SYN;
    this._moonFrom = cur; this._moonTarget = tgt; this._moonT0 = 0; this.startMoon();
  }
  startMoon() {
    cancelAnimationFrame(this._mnRaf);
    if (this.hs() !== 'Your sky') return;
    if (this._moonAge == null) this._moonAge = this.moonAge(this.state.skyDate || null);
    const step = ts => { if (!this.drawMoon(ts)) this._mnRaf = requestAnimationFrame(step); };
    this._mnRaf = requestAnimationFrame(step);
  }
  drawMoon(ts) {
    const c = this.moonRef.current; if (!c || !c.getBoundingClientRect().width) return (this._mnTry = (this._mnTry || 0) + 1) > 120;
    this._mnTry = 0;
    let done = true;
    if (this._moonFrom != null) {
      if (!this._moonT0) this._moonT0 = ts;
      const k = Math.min(1, (ts - this._moonT0) / 2600), e = 1 - Math.pow(1 - k, 3);
      this._moonAge = this._moonFrom + (this._moonTarget - this._moonFrom) * e;
      if (k < 1) done = false; else { this._moonAge = this._moonTarget % SYN; this._moonFrom = null; }
    }
    const S = c.getBoundingClientRect().width;
    const dpr = Math.min(2, window.devicePixelRatio || 1), px = Math.round(S * dpr);
    if (c.width !== px) { c.width = px; c.height = px; }
    const g = c.getContext('2d'); g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, S, S);
    const cx = S / 2, cy = S / 2, Rr = S * 0.34, a = ((this._moonAge % SYN) + SYN) % SYN, th = a / SYN * 6.2832, k = (1 - Math.cos(th)) / 2;
    const hg = g.createRadialGradient(cx, cy, Rr * 0.9, cx, cy, S * 0.5); hg.addColorStop(0, 'rgba(232,209,154,' + (0.06 + 0.24 * k) + ')'); hg.addColorStop(1, 'rgba(232,209,154,0)');
    g.fillStyle = hg; g.fillRect(0, 0, S, S);
    const dg = g.createRadialGradient(cx - Rr * 0.3, cy - Rr * 0.35, Rr * 0.1, cx, cy, Rr); dg.addColorStop(0, '#F6F0E2'); dg.addColorStop(1, '#C7BAA3');
    g.save(); g.beginPath(); g.arc(cx, cy, Rr, 0, 6.2832); g.fillStyle = dg; g.fill(); g.clip();
    for (const m of MARIA) { const mx = cx + m[0] * Rr, my = cy + m[1] * Rr, mg = g.createRadialGradient(mx, my, 0, mx, my, m[2] * Rr); mg.addColorStop(0, 'rgba(110,98,84,' + m[3] + ')'); mg.addColorStop(1, 'rgba(110,98,84,0)'); g.fillStyle = mg; g.fillRect(0, 0, S, S); }
    if (k < 0.985) {
      g.fillStyle = 'rgba(10,8,6,.9)'; g.filter = 'blur(' + Math.max(1, Rr * 0.025).toFixed(1) + 'px)';
      g.beginPath();
      if (k < 0.015) g.arc(cx, cy, Rr + 2, 0, 6.2832);
      else {
        const rx = Rr * Math.abs(Math.cos(th)), wax = th < Math.PI, cres = k < 0.5;
        if (wax) { g.arc(cx, cy, Rr + 2, -Math.PI / 2, Math.PI / 2, true); g.ellipse(cx, cy, rx, Rr + 2, 0, Math.PI / 2, -Math.PI / 2, cres); }
        else { g.arc(cx, cy, Rr + 2, -Math.PI / 2, Math.PI / 2, false); g.ellipse(cx, cy, rx, Rr + 2, 0, Math.PI / 2, -Math.PI / 2, !cres); }
      }
      g.fill(); g.filter = 'none';
    }
    g.restore();
    g.strokeStyle = 'rgba(232,209,154,.22)'; g.lineWidth = 1; g.beginPath(); g.arc(cx, cy, Rr + 0.5, 0, 6.2832); g.stroke();
    return done;
  }
  makePetalSprites() {
    const cols = [['#F7B44A', '#E0832A'], ['#F2A23A', '#C9661F'], ['#C9455E', '#86203A'], ['#A8304A', '#6E1A2E'], ['#FBF6EC', '#DCCDB4'], ['#E2C487', '#B48C45']];
    return cols.map((c, i) => [false, true].map(blur => {
      const s = 64, cv = document.createElement('canvas'); cv.width = cv.height = s; const g = cv.getContext('2d');
      if (blur) g.filter = 'blur(3px)';
      const lg = g.createLinearGradient(32, 6, 32, 58); lg.addColorStop(0, c[0]); lg.addColorStop(1, c[1]); g.fillStyle = lg;
      g.beginPath();
      if (i % 2 === 0) { g.moveTo(32, 8); g.bezierCurveTo(54, 14, 56, 44, 32, 56); g.bezierCurveTo(8, 44, 10, 14, 32, 8); }
      else { g.moveTo(32, 6); g.bezierCurveTo(45, 18, 45, 46, 32, 58); g.bezierCurveTo(19, 46, 19, 18, 32, 6); }
      g.fill();
      g.globalAlpha = 0.22; g.strokeStyle = '#FFF8EA'; g.lineWidth = 1; g.beginPath(); g.moveTo(32, 14); g.quadraticCurveTo(34, 32, 32, 50); g.stroke();
      return cv;
    }));
  }
  startPetals() {
    cancelAnimationFrame(this._ptRaf);
    if (this.hs() !== 'Petals') { this._pt = null; return; }
    const sec = this.petalRef.current, cb = this.petalBackRef.current, cf = this.petalFrontRef.current;
    if (!sec || !cb || !cf || !sec.clientWidth) { if ((this._ptTry = (this._ptTry || 0) + 1) < 120) this._ptRaf = requestAnimationFrame(() => this.startPetals()); return; }
    this._ptTry = 0;
    if (!this._ptSpr) this._ptSpr = this.makePetalSprites();
    const W = sec.clientWidth, H = sec.clientHeight, dpr = Math.min(2, window.devicePixelRatio || 1), Rn = Math.random, nar = W < 700;
    [cb, cf].forEach(c => { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); });
    const mk = (front, initial) => ({ x: Rn() * W, y: initial ? -Rn() * H * 1.4 - 20 : -20 - Rn() * 60, z: front ? 1.6 + Rn() * 0.8 : 0.45 + Rn() * 0.9, vx: 0, vy: initial ? 120 + Rn() * 120 : 40, rot: Rn() * 6.28, vr: (Rn() - 0.5) * 2.4, fl: Rn() * 6.28, vf: 1 + Rn() * 2.5, k: Math.floor(Rn() * 6) });
    this._pt = { W, H, dpr, back: Array.from({ length: nar ? 110 : 230 }, () => mk(false, true)), front: Array.from({ length: nar ? 7 : 14 }, () => mk(true, true)), settled: [], mx: -9999, my: -9999, last: 0, mk, cap: nar ? 90 : 200 };
    if (!this.motionOn()) { this._pt.back.forEach(p => { p.y = Rn() * H; }); this._pt.front.forEach(p => { p.y = Rn() * H; }); this.drawPetals(); return; }
    const step = ts => { this._ptRaf = requestAnimationFrame(step); this.stepPetals(ts); };
    this._ptRaf = requestAnimationFrame(step);
  }
  stepPetals(ts) {
    const P = this._pt, sec = this.petalRef.current; if (!P || !sec) return;
    if (sec.getBoundingClientRect().bottom < 0 || document.visibilityState === 'hidden') { P.last = ts; return; }
    const dt = Math.min(0.05, P.last ? (ts - P.last) / 1000 : 0.016); P.last = ts;
    const t = ts / 1000, W = P.W, H = P.H, Rn = Math.random;
    const upd = p => {
      const wind = Math.sin(t * 0.35 + p.y * 0.004 + p.z) * 26 * p.z, tv = 34 + 34 * p.z;
      p.vx += (wind - p.vx) * Math.min(1, 1.2 * dt); p.vy += (tv - p.vy) * Math.min(1, 0.9 * dt);
      const dx = p.x - P.mx, dy = p.y - P.my, d = Math.hypot(dx, dy);
      if (d < 150 && d > 0.1) { const fo = (1 - d / 150) * 1400 * dt; p.vx += dx / d * fo; p.vy += dy / d * fo * 0.8; p.vr += (Rn() - 0.5) * fo * 0.02; }
      p.vr *= 1 - 0.4 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt; p.fl += p.vf * dt;
      if (p.x < -30) p.x += W + 60; else if (p.x > W + 30) p.x -= W + 60;
    };
    P.back.forEach(p => { upd(p); if (p.y > H - 8 - Rn() * 4) { if (P.settled.length > P.cap) P.settled.shift(); P.settled.push({ x: p.x, y: H - 4 - Rn() * 14, rot: p.rot, fl: p.fl, k: p.k, z: p.z }); Object.assign(p, P.mk(false, false)); } });
    P.front.forEach(p => { upd(p); if (p.y > H + 60) { Object.assign(p, P.mk(true, false)); p.y = -80; } });
    this.drawPetals();
  }
  drawPetals() {
    const P = this._pt, cb = this.petalBackRef.current, cf = this.petalFrontRef.current; if (!P || !cb || !cf) return;
    const gb = cb.getContext('2d'), gf = cf.getContext('2d'), d = P.dpr, S = this._ptSpr;
    gb.setTransform(1, 0, 0, 1, 0, 0); gb.clearRect(0, 0, cb.width, cb.height); gf.setTransform(1, 0, 0, 1, 0, 0); gf.clearRect(0, 0, cf.width, cf.height);
    const draw = (g, p, blur, al) => {
      const s = 14 * p.z, c = Math.cos(p.rot), sn = Math.sin(p.rot), fx = Math.cos(p.fl), sx = (0.25 + 0.75 * Math.abs(fx)) * (fx < 0 ? -1 : 1);
      g.globalAlpha = al * (0.6 + 0.4 * Math.abs(fx));
      g.setTransform(c * sx * d, sn * sx * d, -sn * d, c * d, p.x * d, p.y * d);
      g.drawImage(S[p.k][blur ? 1 : 0], -s / 2, -s / 2, s, s);
    };
    P.settled.forEach(p => draw(gb, p, false, 0.85));
    P.back.forEach(p => draw(gb, p, p.z < 0.7, 0.55 + 0.45 * Math.min(1, p.z)));
    P.front.forEach(p => draw(gf, p, true, 0.75));
    gb.globalAlpha = 1; gf.globalAlpha = 1;
  }
  petalMove = e => { const P = this._pt, s = this.petalRef.current; if (!P || !s) return; const r = s.getBoundingClientRect(); P.mx = e.clientX - r.left; P.my = e.clientY - r.top; };
  petalLeave = () => { if (this._pt) { this._pt.mx = -9999; this._pt.my = -9999; } };
  petalDown = e => {
    const P = this._pt, s = this.petalRef.current; if (!P || !s || !this.motionOn()) return;
    const r = s.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, Rn = Math.random;
    for (let i = 0; i < 40; i++) {
      let p; if (P.back.length < 380) { p = P.mk(false, false); P.back.push(p); } else p = P.back[Math.floor(Rn() * P.back.length)];
      const an = -Math.PI / 2 + (Rn() - 0.5) * 2.2, sp = 220 + Rn() * 360;
      Object.assign(p, { x, y, vx: Math.cos(an) * sp, vy: Math.sin(an) * sp, vr: (Rn() - 0.5) * 8 });
    }
  };
  skyOn() { return this.props.celestial !== false && !!this._sctx; }
  moonSprite() {
    const s = 64, c = document.createElement('canvas'); c.width = c.height = s;
    const g = c.getContext('2d'), h = s / 2;
    g.fillStyle = 'rgba(246,240,228,.95)'; g.beginPath(); g.arc(h, h, 13, 0, 6.2832); g.fill();
    g.globalCompositeOperation = 'destination-out'; g.beginPath(); g.arc(h + 7, h - 3, 12, 0, 6.2832); g.fill();
    return c;
  }
  sizeSky() {
    const c = this.skyRef.current; if (!c || !this._sctx) return;
    const dpr = Math.min(1.5, window.devicePixelRatio || 1), W = window.innerWidth, H = window.innerHeight, Rn = Math.random;
    c.width = Math.round(W * dpr); c.height = Math.round(H * dpr);
    this._sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const px = W * 0.8, py = H * (W < 700 ? 0.14 : 0.2), K = Math.min(1.45 * H, 1.05 * W);
    const D = Math.max(...[[0, 0], [W, 0], [0, H], [W, H]].map(([x, y]) => Math.hypot(x - px, y - py))) + 40;
    this._sk = { W, H, px, py, K, D, u: Math.max(0.6, K / 1566) };
    if (!this.skyOn()) { this._sctx.clearRect(0, 0, W, H); this._stars = []; return; }
    const A = 1.5, bOff = 0.5 * K, bW = 0.16 * K, cA = Math.cos(A), sA = Math.sin(A);
    const n = Math.min(9000, Math.round(Math.PI * D * D / 2600));
    this._stars = Array.from({ length: n }, () => {
      let x, y;
      if (Rn() < 0.34) { const bx = (Rn() * 2 - 1) * D, by = bOff + (Rn() + Rn() + Rn() - 1.5) / 1.5 * bW; x = bx * cA - by * sA; y = bx * sA + by * cA; }
      else { const r = D * Math.sqrt(Rn()), a = Rn() * 6.2832; x = r * Math.cos(a); y = r * Math.sin(a); }
      return { x, y, s: 0.5 + Math.pow(Rn(), 4) * 1.4, a: 0.18 + Math.pow(Rn(), 2) * 0.62, tw: Rn() < 0.12, ph: Rn() * 6.2832, f: 0.4 + Rn() * 1.4, gold: Rn() < 0.28 };
    });
    const q = 0.25, S = Math.ceil(2 * D * q), m = document.createElement('canvas'); m.width = m.height = S;
    const g = m.getContext('2d'); g.translate(S / 2, S / 2); g.scale(q, q); g.rotate(A);
    const lg = g.createLinearGradient(0, bOff - bW * 1.6, 0, bOff + bW * 1.6);
    lg.addColorStop(0, 'rgba(232,214,180,0)'); lg.addColorStop(0.5, 'rgba(232,214,180,.075)'); lg.addColorStop(1, 'rgba(232,214,180,0)');
    g.fillStyle = lg; g.fillRect(-D, bOff - bW * 1.6, 2 * D, bW * 3.2);
    for (let i = 0; i < 46; i++) {
      const bx = (Rn() * 2 - 1) * D, by = bOff + (Rn() - 0.5) * bW * 1.4, rr = bW * (0.25 + Rn() * 0.7), w = Rn() < 0.5 ? '232,209,154' : '244,232,214';
      const rg = g.createRadialGradient(bx, by, 0, bx, by, rr); rg.addColorStop(0, 'rgba(' + w + ',' + (0.03 + Rn() * 0.04) + ')'); rg.addColorStop(1, 'rgba(' + w + ',0)');
      g.fillStyle = rg; g.fillRect(bx - rr, by - rr, rr * 2, rr * 2);
    }
    g.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < 14; i++) {
      const bx = (Rn() * 2 - 1) * D, by = bOff + (Rn() - 0.5) * bW * 0.5, rr = bW * (0.12 + Rn() * 0.3);
      g.save(); g.translate(bx, by); g.scale(3.2, 0.7);
      const rg = g.createRadialGradient(0, 0, 0, 0, 0, rr); rg.addColorStop(0, 'rgba(0,0,0,.22)'); rg.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = rg; g.fillRect(-rr, -rr, rr * 2, rr * 2); g.restore();
    }
    this._mw = { c: m, S, q };
    const root = this.rootRef.current;
    this._kS = 0.9 / Math.max(3000, (root ? root.scrollHeight : 9000) - H);
    this._twk = this._stars.filter(s => s.tw); this._cache = null;
    this._nextShoot = 0; this._shoot = null;
  }
  drawSky(ts) {
    const g = this._sctx; if (!g || !this.skyOn() || !this._sk || !this._stars) return;
    const { W, H, px, py, K, u } = this._sk, mo = this.motionOn(), t = ts / 1000, syR = this._sy || 0, sy = mo ? syR : 0;
    const cl = v => Math.min(1, Math.max(0, v)), skyH = this.hs() === 'Your sky', si = skyH ? 1 : cl((syR - H * 0.35) / (H * 0.5)), plIn = skyH ? 1 : cl((syR - H * 0.6) / (H * 0.4));
    const rot = ROT0 + sy * (this._kS || 0) + (mo ? t * 0.0018 + this.spinVal(ts) : 0), dr = rot - ROT0, cr = Math.cos(rot), sr = Math.sin(rot);
    const p = cl((syR - H * 0.45) / (H * 1.1));
    const ck = this._cache;
    if (!ck || ck.W !== W || ck.H !== H || ck.mo !== mo || Math.abs(ck.rot - rot) > 0.0005 || Math.abs(ck.p - p) > 0.004 || Math.abs(ck.si - si) > 0.004) this.renderSkyCache(rot, p, mo, si);
    const off = (x, y, m) => x < -m || x > W + m || y < -m || y > H + m;
    g.clearRect(0, 0, W, H);
    g.drawImage(this._cache.c, 0, 0, W, H);
    if (mo) {
      for (const s of this._twk) {
        const x = px + s.x * cr + s.y * sr, y = py - s.x * sr + s.y * cr; if (off(x, y, 3)) continue;
        g.fillStyle = s.gold ? 'rgb(232,209,154)' : 'rgb(244,238,228)';
        g.globalAlpha = s.a * (0.35 + 0.65 * si) * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.f + s.ph)));
        g.fillRect(x - s.s / 2, y - s.s / 2, s.s, s.s);
      }
      g.globalAlpha = 1;
    }
    const be = BETA - dr, cx = px + 0.434 * K * Math.cos(be), cy = py + 0.434 * K * Math.sin(be), re = 1.09 * K, bw = 18 * u;
    const pv = Math.atan2(H * 0.55 - cy, W * 0.45 - cx), rp = re - bw / 2, ls = 'letterSpacing' in g;
    g.font = '600 ' + Math.round(10 * Math.max(1, u)) + 'px "Nunito Sans", sans-serif'; g.textBaseline = 'middle';
    if (ls) g.letterSpacing = Math.round(3 * Math.max(1, u)) + 'px';
    [[1 / 95, 0, 'SHUKRA'], [1 / 150, 0.5, null]].filter(q => !(skyH && !q[2])).forEach(([spd, o, lab]) => {
      if (plIn <= 0) return;
      const fr = mo ? (t * spd + o) % 1 : 0.35 + o * 0.5, al = Math.sin(Math.PI * fr) * plIn, an = pv + (0.5 - fr) * 0.9;
      const x = cx + Math.cos(an) * rp, y = cy + Math.sin(an) * rp; if (off(x, y, 30)) return;
      g.globalCompositeOperation = 'lighter';
      if (lab) { const z = 20 * u; g.globalAlpha = al; g.drawImage(this._spr.ivory, x - z / 2, y - z / 2, z, z); const z2 = 30 * u; g.globalAlpha = al * 0.6; g.drawImage(this._spr.star, x - z2 / 2, y - z2 / 2, z2, z2); }
      else { const h = 70 * u; g.globalAlpha = al * 0.22; g.drawImage(this._spr.gold, x - h / 2, y - h / 2, h, h); g.globalCompositeOperation = 'source-over'; const z = 44 * u; g.globalAlpha = al * 0.85; g.drawImage(this._moon, x - z / 2, y - z / 2, z, z); }
      g.globalCompositeOperation = 'source-over';
      if (lab) { g.globalAlpha = al; g.textAlign = 'left'; g.fillStyle = 'rgba(237,227,211,.34)'; g.fillText(lab, x + 12 * u, y - 10 * u); }
      g.globalAlpha = 1;
    });
    if (ls) g.letterSpacing = '0px';
    if (p > 0) {
      const pts = this.umaPts(cr, sr), sa = Math.min(1, p * 1.5);
      g.globalCompositeOperation = 'lighter';
      UMA.forEach((s, i) => { const z = (6 - s[2]) * 5 * u, [x, y] = pts[i]; g.globalAlpha = sa; g.drawImage(this._spr.ivory, x - z / 2, y - z / 2, z, z); });
      const dz = 24 * u; g.globalAlpha = sa; g.drawImage(this._spr.gold, px - dz / 2, py - dz / 2, dz, dz);
      const gz = 46 * u * (mo ? 0.85 + 0.15 * Math.sin(t * 0.8) : 1); g.globalAlpha = sa * 0.75; g.drawImage(this._spr.star, px - gz / 2, py - gz / 2, gz, gz);
      g.globalCompositeOperation = 'source-over'; g.globalAlpha = 1;
    }
    if (mo) {
      if (!this._nextShoot) this._nextShoot = t + 4 + Rnd() * 6;
      if (!this._shoot && t > this._nextShoot) { const ang = (140 + Rnd() * 30) * RAD, spd = 650 + Rnd() * 400; this._shoot = { x: W * (0.25 + Rnd() * 0.7), y: H * (0.05 + Rnd() * 0.4), vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd, b: t, life: 0.85 + Rnd() * 0.4 }; this._nextShoot = t + 10 + Rnd() * 14; }
      const s = this._shoot;
      if (s) {
        const k = (t - s.b) / s.life;
        if (k >= 1 || k < 0) this._shoot = null;
        else { const e = t - s.b, hx = s.x + s.vx * e, hy = s.y + s.vy * e, nv = Math.hypot(s.vx, s.vy), len = 170 * u * Math.sin(Math.PI * k), tx = hx - s.vx / nv * len, ty = hy - s.vy / nv * len; const lg = g.createLinearGradient(hx, hy, tx, ty); lg.addColorStop(0, 'rgba(255,246,226,' + (0.75 * Math.sin(Math.PI * k)) + ')'); lg.addColorStop(1, 'rgba(232,209,154,0)'); g.strokeStyle = lg; g.lineWidth = 1.1; g.beginPath(); g.moveTo(hx, hy); g.lineTo(tx, ty); g.stroke(); }
      }
    }
  }
  umaPts(cr, sr) {
    const { px, py, K } = this._sk;
    const pts = UMA.map(([ra, dec]) => { const r = K * Math.tan((90 - dec) / 2 * RAD), a = -ra * 15 * RAD, x = r * Math.cos(a), y = r * Math.sin(a); return [px + x * cr + y * sr, py - x * sr + y * cr]; });
    pts[6] = [pts[5][0] + (pts[6][0] - pts[5][0]) * 6, pts[5][1] + (pts[6][1] - pts[5][1]) * 6];
    return pts;
  }
  renderSkyCache(rot, p, mo, si = 1) {
    const { W, H, px, py, K, u } = this._sk, dpr = Math.min(2, window.devicePixelRatio || 1);
    let ck = this._cache;
    if (!ck || ck.W !== W || ck.H !== H) { const c = document.createElement('canvas'); c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); ck = this._cache = { c, g: c.getContext('2d'), W, H }; }
    const g = ck.g; ck.rot = rot; ck.p = p; ck.mo = mo; ck.si = si;
    g.setTransform(dpr, 0, 0, dpr, 0, 0); g.clearRect(0, 0, W, H);
    const dr = rot - ROT0, cr = Math.cos(rot), sr = Math.sin(rot);
    const gold = a => 'rgba(201,169,110,' + a + ')', off = (x, y, m) => x < -m || x > W + m || y < -m || y > H + m;
    const mw = this._mw;
    if (mw) { g.save(); g.globalAlpha = 0.25 + 0.75 * si; g.translate(px, py); g.rotate(-rot); g.drawImage(mw.c, -mw.S / 2 / mw.q, -mw.S / 2 / mw.q, mw.S / mw.q, mw.S / mw.q); g.restore(); }
    g.lineWidth = 0.75; g.globalAlpha = si;
    const rC = 0.656 * K, rE = K;
    g.setLineDash([2, 7]); g.strokeStyle = gold(0.13); g.beginPath(); g.arc(px, py, rC, 0, 6.2832); g.stroke(); g.setLineDash([]);
    g.strokeStyle = gold(0.12); g.beginPath(); g.arc(px, py, rE, 0, 6.2832); g.stroke();
    g.beginPath();
    for (let i = 0; i < 72; i++) { const a = i * Math.PI / 36 - dr, ca = Math.cos(a), sa = Math.sin(a), x1 = px + ca * rE, y1 = py + sa * rE; if (off(x1, y1, 20)) continue; const L = (i % 3 ? 5 : 12) * u; g.moveTo(x1, y1); g.lineTo(px + ca * (rE - L), py + sa * (rE - L)); }
    g.strokeStyle = gold(0.18); g.stroke();
    const be = BETA - dr, cx = px + 0.434 * K * Math.cos(be), cy = py + 0.434 * K * Math.sin(be), re = 1.09 * K, bw = 18 * u;
    g.strokeStyle = gold(0.16); g.beginPath(); g.arc(cx, cy, re, 0, 6.2832); g.stroke(); g.beginPath(); g.arc(cx, cy, re - bw, 0, 6.2832); g.stroke();
    g.beginPath();
    for (let i = 0; i < 360; i++) { const a = -i * RAD - dr, ca = Math.cos(a), sa = Math.sin(a), x1 = cx + ca * re, y1 = cy + sa * re; if (off(x1, y1, 30)) continue; const L = i % 30 === 0 ? bw : (i % 5 === 0 ? 8 * u : 4 * u); g.moveTo(x1, y1); g.lineTo(cx + ca * (re - L), cy + sa * (re - L)); }
    g.strokeStyle = gold(0.17); g.stroke();
    const rn = re - bw - 24 * u, rl = re - bw - 10 * u;
    g.strokeStyle = gold(0.08); g.beginPath(); g.arc(cx, cy, rn, 0, 6.2832); g.stroke();
    g.fillStyle = gold(0.32);
    for (let i = 0; i < 27; i++) { const a = -i * 6.2832 / 27 - dr - 0.05, x = cx + Math.cos(a) * rn, y = cy + Math.sin(a) * rn; if (off(x, y, 5)) continue; g.beginPath(); g.arc(x, y, 1.3 * u, 0, 6.2832); g.fill(); }
    const ls = 'letterSpacing' in g;
    g.font = '600 ' + Math.round(10 * Math.max(1, u)) + 'px "Nunito Sans", sans-serif'; if (ls) g.letterSpacing = Math.round(3 * Math.max(1, u)) + 'px';
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = 'rgba(237,227,211,.3)';
    for (let i = 0; i < 12; i++) {
      const a = -(i * 30 + 15) * RAD - dr, x = cx + Math.cos(a) * rl, y = cy + Math.sin(a) * rl; if (off(x, y, 60)) continue;
      let ang = a + Math.PI / 2; const nm = ((ang % 6.2832) + 6.2832) % 6.2832; if (nm > Math.PI / 2 && nm < Math.PI * 1.5) ang += Math.PI;
      g.save(); g.translate(x, y); g.rotate(ang); g.fillText(RASHI[i].toUpperCase(), 0, 0); g.restore();
    }
    for (let pass = 0; pass < 2; pass++) {
      g.fillStyle = pass ? 'rgb(232,209,154)' : 'rgb(244,238,228)';
      for (const s of this._stars) {
        if (s.gold !== (pass === 1) || (mo && s.tw)) continue;
        const x = px + s.x * cr + s.y * sr; if (x < -3 || x > W + 3) continue;
        const y = py - s.x * sr + s.y * cr; if (y < -3 || y > H + 3) continue;
        g.globalAlpha = s.a * (0.35 + 0.65 * si); g.fillRect(x - s.s / 2, y - s.s / 2, s.s, s.s);
      }
    }
    g.globalAlpha = 1;
    if (p > 0) {
      const pts = this.umaPts(cr, sr);
      g.lineWidth = 0.9; g.strokeStyle = 'rgba(232,209,154,' + (0.32 * Math.min(1, p * 1.4)) + ')';
      const prog = p * UMA_LINES.length;
      g.beginPath();
      UMA_LINES.forEach(([i, j], k) => { const f = Math.min(1, Math.max(0, prog - k)); if (f <= 0) return; const [x1, y1] = pts[i], [x2, y2] = pts[j]; g.moveTo(x1, y1); g.lineTo(x1 + (x2 - x1) * f, y1 + (y2 - y1) * f); });
      g.stroke();
      const pf = Math.min(1, Math.max(0, p * 1.6 - 0.6));
      if (pf > 0) { const [dx, dy] = pts[0]; g.setLineDash([1.5, 6]); g.strokeStyle = gold(0.3 * pf); g.beginPath(); g.moveTo(dx, dy); g.lineTo(dx + (px - dx) * pf, dy + (py - dy) * pf); g.stroke(); g.setLineDash([]); }
      const la = 0.36 * Math.min(1, Math.max(0, p * 2 - 1));
      if (la > 0) {
        g.fillStyle = 'rgba(237,227,211,' + la + ')'; g.textAlign = 'left';
        g.fillText('DHRUVA', px + 16 * u, py + 14 * u);
        g.fillText('ARUNDHATI', pts[6][0] + 10 * u, pts[6][1] - 12 * u);
        const bx = (pts[0][0] + pts[1][0] + pts[2][0] + pts[3][0]) / 4, by = (pts[0][1] + pts[1][1] + pts[2][1] + pts[3][1]) / 4;
        g.textAlign = 'center'; g.fillText('SAPTARISHI', bx, by);
      }
    }
    if (ls) g.letterSpacing = '0px';
  }
  onEvScroll = () => {
    if (this._evRaf) return;
    this._evRaf = requestAnimationFrame(() => {
      this._evRaf = 0;
      const el = this.evRef.current; if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      const evP = max > 0 ? el.scrollLeft / max : 0, evVis = el.scrollWidth ? el.clientWidth / el.scrollWidth : 1;
      // Move the progress thumb directly; re-render the page only when the
      // end-of-strip state or the visible share changes, not on every frame.
      const th = this.evThumbRef.current, tw = Math.max(10, Math.min(100, evVis * 100));
      if (th) { th.style.width = tw + '%'; th.style.left = (evP * (100 - tw)) + '%'; }
      const S = this.state, edge = p => (p <= 0.01 ? -1 : p >= 0.99 ? 1 : 0);
      if (edge(evP) !== edge(S.evP) || Math.abs(evVis - S.evVis) > 0.004) this.setState({ evP, evVis });
    });
  };
  evStep(dir) {
    const el = this.evRef.current; if (!el) return;
    const card = el.querySelector('[data-ev]');
    const w = card ? card.getBoundingClientRect().width + 24 : 320;
    el.scrollBy({ left: dir * w, behavior: this.motionOn() ? 'smooth' : 'auto' });
  }
  evDown = e => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    const el = this.evRef.current; if (!el) return;
    this._drag = { x: e.clientX, s: el.scrollLeft };
    el.style.scrollSnapType = 'none';
  };
  evMove = e => {
    if (!this._drag) return;
    const el = this.evRef.current; const dx = e.clientX - this._drag.x;
    if (Math.abs(dx) > 3) el.style.cursor = 'grabbing';
    el.scrollLeft = this._drag.s - dx;
  };
  evUp = () => {
    if (!this._drag) return;
    const el = this.evRef.current; this._drag = null;
    if (el) { el.style.cursor = ''; el.style.scrollSnapType = ''; }
  };

  extVals() {
    const s = this.state, T = TPLS.find(t => t.id === s.tpl) || TPLS[0];
    const A = ADVICE[s.adv] || ADVICE[0], res = (s.advRes || {})[A.id], why = !!(s.advWhy || {})[A.id];
    const W = WEDS[s.rw] || WEDS[0];
    const nm = ADV_NAMES[this.props.advisorName] || ADV_NAMES.Noor;
    const setRes = v => this.setState(p => ({ advRes: { ...p.advRes, [A.id]: v } }));
    const sent = DAY_SEND.slice(0, s.alertN).map((a, i) => ({ ...a, tc: i === s.alertN - 1 ? T.accent : T.soft, wt: i === s.alertN - 1 ? '700' : '400' })).reverse();
    const dayAlerts = [...sent, ...DAY_BASE.slice().reverse().map(a => ({ ...a, tc: T.soft, wt: '400' }))].slice(0, 3);
    const sdSrc = s.sdImg < 0 && s.sdCustom ? s.sdCustom : SD_IMGS[Math.max(0, s.sdImg)].src;
    return {
      navWide: s.w >= 1140, navNarrow: s.w < 1140, navCta: s.w >= 360,
      // On phones the hero copy climbs to a third of the way down the photo, so the
      // scrim darkens from there instead of leaving a clear band behind the text.
      heroScrim: s.w < 768
        ? 'linear-gradient(180deg,rgba(12,9,7,.5) 0%,rgba(12,9,7,.18) 14%,rgba(12,9,7,.55) 30%,rgba(12,9,7,.88) 100%)'
        : 'linear-gradient(180deg,rgba(12,9,7,.5) 0%,rgba(12,9,7,0) 20%,rgba(12,9,7,0) 42%,rgba(12,9,7,.82) 100%)', advNav: nm.nav,
      dealTabs: [['all', 'All'], ['india', 'In India'], ['abroad', 'Abroad']].map(([id, label]) => ({
        label, tid: 'od-tab-' + id, sel: s.dealF === id ? 'true' : 'false',
        color: s.dealF === id ? 'var(--iw-ivory)' : 'var(--iw-stone)', line: s.dealF === id ? 'var(--iw-gold)' : 'transparent',
        on: () => { this.setState({ dealF: id }); const g = document.getElementById('od-list'); if (g) g.scrollLeft = 0; }
      })),
      dealLabelledBy: 'od-tab-' + s.dealF,
      deals: DEALS.filter(d => s.dealF === 'all' || d.r === s.dealF).map(d => ({ ...d, aria: 'Ask about ' + d.name + ', ' + d.dates + '. Sample open date, opens the app' })),
      advOver: nm.over, advCard: nm.card, advLede: nm.lede, advTrust: nm.trust, advTabsLabel: nm.tabs || 'Moments with your advisor', advSample: nm.sample || 'Sample advice, written to show how the advisor works.',
      advTabs: ADVICE.map((a, i) => ({ no: '0' + (i + 1), label: a.tab, sub: a.sub, tid: 'adv-tab-' + a.id, sel: s.adv === i ? 'true' : 'false', color: s.adv === i ? 'var(--iw-ivory)' : 'var(--iw-stone-dim)', arrow: s.adv === i ? '1' : '0', lineW: s.adv === i ? '100%' : '0%', on: () => this.setState({ adv: i }) })),
      advLabelledBy: 'adv-tab-' + A.id,
      advImg: A.img, advAlt: A.alt, advHead: A.head, advBody: A.body, advRows: A.rows.map(([k, v]) => ({ k, v })),
      advHasFoot: !!A.foot, advFoot: A.foot || '',
      advWhyOpen: why, advWhy: A.why, advWhyLabel: why ? 'Hide why' : 'Why this?', advWhyExp: why ? 'true' : 'false',
      advPending: !res, advSettled: !!res, advTaken: res === 'yes', advResult: res === 'yes' ? A.done : res === 'no' ? A.skipped : '',
      advYes: A.yes, advNo: A.no,
      advTake: () => setRes('yes'), advSkip: () => setRes('no'), advUndo: () => setRes(null),
      advWhyToggle: () => this.setState(p => ({ advWhy: { ...p.advWhy, [A.id]: !why } })),
      tp: T,
      tpls: TPLS.map(t => ({ name: t.name, from: t.from, sw: t.sw, pressed: s.tpl === t.id ? 'true' : 'false', bd: s.tpl === t.id ? 'var(--iw-gold)' : 'var(--iw-line-strong)', nc: s.tpl === t.id ? 'var(--iw-ivory)' : 'var(--iw-sand)', on: () => this.setState({ tpl: t.id }) })),
      sdSrc, sdOverOn: !!s.sdOver,
      sdThumbs: SD_IMGS.map((p, i) => ({ src: p.src, aria: 'Use the ' + p.alt + ' photograph', pressed: s.sdImg === i ? 'true' : 'false', bd: s.sdImg === i ? 'var(--iw-gold)' : 'transparent',
        on: () => this.setState({ sdImg: i }),
        drag: e => { try { e.dataTransfer.setData('text/plain', 'iw-sd:' + i); e.dataTransfer.effectAllowed = 'copy'; } catch (_) {} } })),
      sdOver: e => { e.preventDefault(); if (!this.state.sdOver) this.setState({ sdOver: true }); },
      sdLeave: e => { if (e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) return; this.setState({ sdOver: false }); },
      sdDrop: e => {
        e.preventDefault();
        const dt = e.dataTransfer, f = dt.files && dt.files[0], txt = dt.getData('text/plain') || '';
        if (f && /^image\//.test(f.type)) { if (this._sdUrl) URL.revokeObjectURL(this._sdUrl); this._sdUrl = URL.createObjectURL(f); this.setState({ sdOver: false, sdImg: -1, sdCustom: this._sdUrl }); return; }
        const m = /^iw-sd:(\d)$/.exec(txt); this.setState({ sdOver: false, ...(m ? { sdImg: +m[1] } : {}) });
      },
      dayAlerts, dayPhotos: DAY_PHOTOS.map(src => ({ src })),
      sendLabel: s.alertN >= DAY_SEND.length ? 'Start the morning again' : s.alertN ? 'Send the next alert' : 'Send an alert to every guest',
      sendHasNote: s.alertN > 0, sendNote: s.alertN ? 'Delivered to the 240 guests invited to the wedding.' : '',
      sendAlert: () => this.setState(p => ({ alertN: p.alertN >= DAY_SEND.length ? 0 : p.alertN + 1 })),
      rwTabs: WEDS.map((w, i) => ({ names: w.names, place: w.place, img: w.img, tid: 'rw-tab-' + i, sel: s.rw === i ? 'true' : 'false', nc: s.rw === i ? 'var(--iw-ivory)' : 'var(--iw-stone)', line: s.rw === i ? 'var(--iw-gold)' : 'transparent', on: () => this.setState({ rw: i }) })),
      rwLabelledBy: 'rw-tab-' + s.rw, rw: W, rwFacts: W.facts.map(([n, l]) => ({ n, l })), rwTeam: W.team.map(([k, v]) => ({ k, v }))
    };
  }
  renderVals() {
    const s = this.state, narrow = s.w < 960, mo = this.motionOn();
    const tabs = [['budget', 'Budget'], ['run', 'Run sheet'], ['dec', 'Decisions']].map(([id, label]) => ({
      id, label, tid: 'tab-' + id, sel: s.tab === id ? 'true' : 'false',
      color: s.tab === id ? 'var(--iw-ivory)' : 'var(--iw-stone)', line: s.tab === id ? 'var(--iw-gold)' : 'transparent',
      on: () => this.setState({ tab: id })
    }));
    const catName = (CATS.find(c => c[0] === s.cat) || CATS[0])[1];
    const cats = CATS.map(([id, label], i) => ({
      id, label, no: '0' + (i + 1), sel: s.cat === id ? 'true' : 'false',
      color: s.cat === id ? 'var(--iw-ivory)' : 'var(--iw-stone-dim)', arrow: s.cat === id ? '1' : '0',
      on: () => { this.setState({ cat: id }); const g = document.getElementById('vd-grid'); if (g) g.scrollLeft = 0; }
    }));
    const vendors = VENDORS[s.cat].map((v, i) => ({ ...v, mt: STAGGER[i], aria: `${v.name}, ${v.kind.toLowerCase()} in ${v.place}. Sample listing, opens the app` }));
    const thumbW = Math.max(10, Math.min(100, s.evVis * 100));
    const st = s.settled;
    const frags = FRAGS.map((f, i) => ({
      ...f,
      l: st ? 'calc(50% - min(210px, 41%))' : `min(${f.s[0]}%, calc(100% - min(420px, 82%)))`,
      t: st ? `${2 + i * 16.2}%` : f.s[1] + '%',
      r: st ? '0deg' : f.s[2] + 'deg',
      d: mo ? (st ? i * 70 : (5 - i) * 50) + 'ms' : '0ms',
      d2: mo ? (st ? 300 + i * 70 : 0) + 'ms' : '0ms',
      bg: st ? 'var(--iw-ink)' : 'var(--iw-surface)', bd: st ? 'var(--iw-line)' : '#2F251E',
      oa: st ? '0' : '1', ob: st ? '1' : '0'
    }));
    const slidesOn = this.slidesOn();
    const cur = slidesOn ? s.slide : 0;
    const segs = [0, 1, 2].map(i => ({
      aria: `Show photograph ${i + 1}: ${SLIDE_ALT[i]}`, pressed: cur === i ? 'true' : 'false',
      bg: cur === i ? 'var(--iw-ivory)' : 'rgba(244,238,228,.32)',
      on: () => { this.setState({ slide: i }); this.startAuto(); }
    }));
    return {
      ...this.noorVals(),
      ...this.extVals(),
      rootRef: this.rootRef, showRef: this.showRef, heroFrameRef: this.heroFrameRef, heroParRef: this.heroParRef,
      evRef: this.evRef, cnRef: this.cnRef, ...this.heroVals(narrow), skyRef: this.skyRef, skyDisp: this.props.celestial === false ? 'none' : 'block', sparkRef: this.sparkRef, sparkDisp: this.props.sparkle === 'Off' ? 'none' : 'block',
      narrow, wide: !narrow,
      menuOpen: s.w < 1140 && s.menu, menuExpanded: s.menu ? 'true' : 'false', menuLabel: s.menu ? 'Close' : 'Menu',
      toggleMenu: () => this.setState({ menu: !s.menu }), closeMenu: () => this.setState({ menu: false }),
      navBg: (s.solid || s.menu) ? 'rgba(12,9,7,.88)' : 'rgba(12,9,7,0)',
      navLine: (s.solid || s.menu) ? 'var(--iw-line)' : 'transparent',
      navBlur: (s.solid || s.menu) ? 'blur(14px) saturate(1.1)' : 'none',
      slideOp0: cur === 0 ? '1' : '0', slideOp1: cur === 1 ? '1' : '0', slideOp2: cur === 2 ? '1' : '0',
      slideNo: '0' + (cur + 1), segs, slideCtlDisp: slidesOn ? 'flex' : 'none',
      pauseLabel: (s.paused || !mo) ? 'Play' : 'Pause', pauseAria: (s.paused || !mo) ? 'Play the photographs' : 'Pause the photographs',
      togglePause: () => {
        if (!mo) { this.setState(p => ({ slide: (p.slide + 1) % 3 })); return; }
        this.setState({ paused: !s.paused }, () => this.startAuto());
      },
      scH: this.anim() ? '270vh' : 'auto', stPos: this.anim() ? 'sticky' : 'relative', stH: this.anim() ? '100vh' : 'auto',
      stPad: this.anim() ? '0' : 'clamp(80px,12vw,120px) 0 clamp(64px,10vw,96px)', frameH: this.anim() ? 'min(600px,70vh)' : 'auto',
      textADisp: this.anim() ? 'flex' : 'none', railDisp: narrow ? 'none' : 'flex',
      tabs, tabBudget: s.tab === 'budget', tabRun: s.tab === 'run', tabDec: s.tab === 'dec', tabLabelledBy: 'tab-' + s.tab,
      cats, catLabel: catName, vendors,
      evThumbRef: this.evThumbRef, evThumbW: thumbW + '%', evThumbL: (s.evP * (100 - thumbW)) + '%',
      evPrevOp: s.evP <= 0.01 ? '.35' : '1', evNextOp: s.evP >= 0.99 ? '.35' : '1',
      evPrev: () => this.evStep(-1), evNext: () => this.evStep(1),
      onEvScroll: this.onEvScroll, evDown: this.evDown, evMove: this.evMove, evUp: this.evUp,
      frags, stageH: s.w < 640 ? '660px' : 'clamp(500px,44vw,560px)', cnDur: mo ? '.95s' : '0s',
      cnPanelOp: st ? '1' : '0', cnPressed: st ? 'true' : 'false',
      cnLabel: st ? 'Show the usual way' : 'Bring it together',
      cnToggle: () => { this._cnTouched = true; clearTimeout(this._cnT); this.setState({ settled: !s.settled }); }
    };
  }
}
