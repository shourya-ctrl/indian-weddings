// Carries what a visitor was doing through account creation, so they return
// to that action afterwards (docs/website-conversion-flows.md §5). The payload
// is kept in sessionStorage and mirrored in the account URL.
import { paths } from '../routes';

const KEY = 'iw-intent';

export const INTENT_COPY = {
  'begin-planning': { title: 'Begin planning your wedding', body: 'Create an account to start your plan. It takes a minute, and nothing is shared until you choose.' },
  'vendor-save': { title: name => `Save ${name} to your shortlist`, body: 'Create an account to keep a shortlist. You will come straight back here, with this vendor saved.' },
  'vendors-personalise': { title: 'Make it personal with Noor', body: 'Tell Noor about your celebration, and vendor discovery starts from your dates, places, guests and taste.' },
  'noor-personalise': { title: 'Make it personal with Noor', body: 'In your plan, Noor answers from your own dates, guests and budget, not in general.' },
  'vendor-enquiry': { title: name => `Send your enquiry to ${name}`, body: 'Create an account to send enquiries. Your message is kept, and nothing is sent until you press Send.' },
  'vendor-availability': { title: name => `Ask ${name} about your dates`, body: 'Create an account to request availability. Your request is kept, and nothing is sent until you confirm.' },
  'compare-save': { title: 'Keep this comparison', body: 'Create an account to save comparisons and come back to them as quotes arrive.' },
  'story-inspire': { title: 'Start a plan inspired by this wedding', body: 'Create an account, and the places and style you liked can be your starting points. You choose what to keep.' },
  'profile-complete': { title: 'Finish your wedding profile', body: 'Add where, when and how many, and recommendations here start from your wedding.' },
};

export function intentTitle(intent, details = {}) {
  const t = INTENT_COPY[intent] && INTENT_COPY[intent].title;
  return typeof t === 'function' ? t(details.vendorName || 'this vendor') : t || 'Create your account';
}

/** Saves the intent and returns the account links that carry it. */
export function prepareIntent(intent, details = {}) {
  const returnTo = window.location.pathname + window.location.search;
  const payload = { v: 1, intent, returnTo, vendorId: details.vendorId || null, vendorIds: details.vendorIds || null, createdAt: new Date().toISOString() };
  try { sessionStorage.setItem(KEY, JSON.stringify(payload)); } catch (_) { /* storage unavailable: the URL still carries it */ }
  const q = { intent, return: returnTo, vendor: details.vendorId };
  return { create: paths.accountCreate(q), login: paths.accountLogin(q) };
}
