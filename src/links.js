// Where the page's calls to action go. Set these in the deploy environment:
//   VITE_APP_URL     the couples app ("Start planning", vendor cards, real weddings)
//   VITE_SIGNIN_URL  sign-in, if it differs from the app URL
// Until VITE_APP_URL is set, every call to action scrolls to the
// "opening soon" note at the end of the page instead of a missing page.
const env = import.meta.env;

export const APP_LIVE = Boolean(env.VITE_APP_URL);
export const OPENING_SOON_ID = 'opening-soon';

const fallback = `#${OPENING_SOON_ID}`;
export const APP_URL = env.VITE_APP_URL || fallback;
export const SIGNIN_URL = env.VITE_SIGNIN_URL || APP_URL;
