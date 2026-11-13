// Curated vendor collections.
//
// No collection records exist yet. These are PROTOTYPE FIXTURES that show how
// collections will be presented: each is a theme and the taxonomy categories it
// draws from, not an editorial selection, partnership or claim that vendors in
// these themes are listed. Every surface showing them must label them as
// prototype collections. Replace with records from the editorial team.
import { IWU } from '../landingLogic';

export const COLLECTIONS_ARE_PROTOTYPE = true;

export const COLLECTIONS = [
  {
    slug: 'palace-and-heritage',
    title: 'Palace & Heritage Celebrations',
    line: 'Havelis, forts and palace hotels, and the planners and designers who work within old walls.',
    categories: ['venues', 'planning', 'decor'],
    image: IWU + '2019/02/ptaufiq-indian-wedding-rajkot-india-ceremony-4.jpg',
    alt: 'A wedding ceremony in a palace courtyard',
  },
  {
    slug: 'destination-specialists',
    title: 'Destination Wedding Specialists',
    line: 'For weddings that travel: planners, venues and hospitality for celebrations away from home.',
    categories: ['planning', 'venues', 'hospitality'],
    image: IWU + '2019/02/ptaufiq-indian-wedding-Como-Castello-Del-Nero-Florence-Italy-couple-portraits.jpg',
    alt: 'A couple in the gardens of an Italian villa',
  },
  {
    slug: 'the-art-of-decor',
    title: 'The Art of Wedding Décor',
    line: 'Mandaps, florals and the stage for every function.',
    categories: ['decor'],
    image: IWU + '2018/10/ptaufiq-indian-wedding-newyork-mandap-decor.jpg',
    alt: 'A mandap dressed in flowers',
  },
  {
    slug: 'photography-and-film',
    title: 'Photography & Cinematic Storytelling',
    line: 'The people who keep the day: photographers, filmmakers and editors.',
    categories: ['photo'],
    image: IWU + '2025/08/timeless-wedding-portrait-ptaufiq-photography.jpg',
    alt: 'A wedding portrait in soft light',
  },
  {
    slug: 'couture-and-bridal-styling',
    title: 'Couture & Bridal Styling',
    line: 'Couture, jewellery, hair and make-up, from the first fitting to the last look.',
    categories: ['fashion', 'jewelry', 'beauty'],
    image: IWU + '2025/08/bridal-portrait-outdoor-session-ptaufiq.jpg',
    alt: 'A bridal portrait outdoors',
  },
  {
    slug: 'exceptional-guest-experiences',
    title: 'Exceptional Guest Experiences',
    line: 'Hospitality, entertainment and the details your guests remember.',
    categories: ['hospitality', 'entertainment', 'experiences'],
    image: IWU + '2021/04/ptaufiq-indian-wedding-cancun-mexico-sangeet2.jpg',
    alt: 'Guests dancing at a sangeet',
  },
];
