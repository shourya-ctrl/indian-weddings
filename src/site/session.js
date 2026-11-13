// The visitor's account state, as the public website sees it.
//
// There is no account service yet, so every real visitor is anonymous. For
// design review, the three states can be previewed with ?as= on the URL
// (development builds, or any build with ?presenter=true):
//   ?as=anonymous            signed out (default)
//   ?as=couple-new           signed in, wedding profile not complete
//   ?as=couple               signed in, sample wedding profile complete
// The sample profile is fixture data and is labelled as such where it is used.

const SAMPLE_PROFILE = {
  sample: true,
  complete: true,
  city: 'Jaipur',
  region: 'Rajasthan',
  guests: 250,
  month: 'December',
};

export function getSession(query) {
  const q = query || new URLSearchParams(window.location.search);
  const previewAllowed = import.meta.env.DEV || /^(true|1|on|yes)$/i.test(q.get('presenter') || '');
  const as = previewAllowed ? q.get('as') : null;
  if (as === 'couple') return { status: 'signed-in', profile: SAMPLE_PROFILE, fixture: true };
  if (as === 'couple-new') return { status: 'signed-in', profile: { complete: false }, fixture: true };
  return { status: 'anonymous', profile: null, fixture: false };
}

export const hasCompleteProfile = s => s.status === 'signed-in' && Boolean(s.profile && s.profile.complete);
