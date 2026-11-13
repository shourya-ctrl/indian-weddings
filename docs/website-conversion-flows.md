# Website conversion flows

Status: proposed, documentation only. Nothing here is implemented yet.
Companion documents: [information architecture](website-information-architecture.md), [page inventory](website-page-inventory.md), [existing component inventory](website-existing-component-inventory.md).

This covers how a visitor moves from the public website into an account without losing what they were doing: the persistent Ask Noor entry, the moments that ask for an account, the shared account screens, and how the original action resumes afterwards.

---

## 1. Principles

1. **Browse freely, sign in to keep.** Reading, searching, comparing on screen and trying the Noor demo never ask for an account. An account is asked for only when the visitor wants something kept, sent or personalised.
2. **Ask at the moment of intent, in context.** The account prompt appears where the visitor acted (on the vendor card, the profile, the compare tray), names what will happen next ("Create an account to send your enquiry to Studio Haveli"), and never interrupts reading.
3. **One account experience.** Every entry point uses the same `/account/create` and `/account/login` screens with the same intent payload.
4. **Return to the action, not the homepage.** After authentication the visitor lands back where they were, and the action they started is completed or reopened for confirmation.
5. **Nothing is sent without a final yes.** Resuming an enquiry or availability request reopens the filled form for the couple to confirm; it is never auto-submitted.

---

## 2. Persistent Ask Noor entry

### Placement

| Viewport | Placement | Form |
|---|---|---|
| Desktop (≥1140px) | Header utility position, after the primary navigation and before **Begin planning** | Text button "Ask Noor" with Noor's orb mark |
| Tablet and mobile (<1140px) | A discreet fixed button in the lower corner (inline-end side), 48px, clear of the home indicator and browser chrome | Orb mark with an accessible name "Ask Noor" |
| Inside the mobile drawer | Listed after the destinations, above **Begin planning** | Text row "Ask Noor" |

The homepage keeps its existing in-page Noor demo (`#advisor` and `#noor` sections). The persistent entry opens the same demo content in a panel; it does not duplicate the homepage section's markup.

### Behaviour rules

- **Never opens on its own.** No auto-open on page load, on a timer, on scroll depth or on exit intent. It opens only when the visitor activates it.
- **No badge, pulse or unread count** on public pages. A short entrance (fade in after first paint) is the only motion, and it is skipped under `prefers-reduced-motion`.
- **Does not cover content or controls.** On mobile the button sits above the safe-area inset and moves up when a bottom compare tray or cookie notice is visible. It hides while the mobile drawer is open (the drawer has its own row) and while an on-screen keyboard is open.
- **Panel, not page.** Activating it opens a side panel on desktop (about 420px, inline-end) and a bottom sheet on mobile (up to 90% height, draggable to dismiss, with a visible close button). Focus moves into the panel and returns to the trigger on close; Escape closes it.
- **State is per visit.** The panel remembers the open conversation for the current tab only (session storage), and the visitor can clear it.

### What the public panel does (unauthenticated)

The public panel is the non-personalised Noor demo. It must be labelled as such ("Noor answers in general here. In your plan, it answers from your own dates, guests and budget.").

| Capability | Public panel | After account creation |
|---|---|---|
| Suggested questions with written sample answers | Yes (the homepage's existing `ASK` set) | Answers from the couple's plan |
| Free-text question | Accepts it and returns the existing general reply (`ASK_FREE`): honest, no invented specifics | Personalised answer |
| Context from the current page | Uses the page's public context only (e.g. "Ask about Villa Rajputana" pre-fills the question) | Adds the couple's plan |
| Saving, shortlisting, budget changes, generated imagery | Not available; shows the account prompt | Available where built |

Whether the public panel calls a live model or stays scripted is an open product decision (see §7). Until it is decided, the scripted demo is the only behaviour to build.

### Entry from page context

Pages can open the panel with a seeded question. The seed is the visible question text plus a public context object:

```
openNoor({
  question: "Is Villa Rajputana right for 150 guests in March?",
  context: { page: "vendor-profile", vendorId: "…", categorySlug: "venues" }
})
```

Context carries IDs and slugs only, never personal data.

---

## 3. Contextual authentication entry points

Every action below is public up to the moment shown, then asks for an account. The prompt is an inline sheet or popover anchored to the control, with the action named in the heading and two buttons: **Create an account** (primary) and **Log in**.

| Where | Visitor action | Prompt heading (draft) | Intent | What resumes after auth |
|---|---|---|---|---|
| Header, footer, page CTAs | **Begin planning** | none: goes straight to `/account/create` | `begin-planning` | Onboarding, then the planning home in the couples app |
| Noor panel | Asks for something personal, saves an answer, asks to apply a suggestion | "Save this to your plan" | `noor-continue` | Couples app Noor with the public conversation carried over (if technically possible) and the last question re-asked with plan context |
| Noor page `/noor` | "Try Noor with your wedding" | "Tell Noor about your wedding" | `noor-personalise` | Onboarding vision questions, then personalised Noor |
| Vendors landing, search, category | "Personalise these matches" / "Best fit for your wedding" | "See vendors that fit your wedding" | `vendors-personalise` | The same results route, re-ranked by the couple's preferences |
| Vendor card, profile | **Save** / shortlist | "Save Studio Haveli to your shortlist" | `vendor-save` | Return to the same card or profile; the vendor is saved and a confirmation shows |
| Compare tray, `/vendors/compare` | **Save comparison** | "Keep this comparison" | `compare-save` | `/vendors/compare` with the same vendor IDs, saved |
| Vendor profile | **Send an enquiry** | "Send your enquiry to Studio Haveli" | `vendor-enquiry` | Profile with the enquiry form reopened, fields restored, awaiting the couple's confirmation |
| Vendor profile | **Check availability** | "Ask Studio Haveli about your dates" | `vendor-availability` | Profile with the availability request reopened and confirmable |
| Real wedding story | "Plan something like this" | "Start a plan inspired by Ishani & Raghav" | `story-inspire` | Onboarding with the story's place and style offered as starting points (couple confirms) |
| The Edit story | "Ask Noor about this" | none: opens the public Noor panel | none | — |

Comparing on screen (up to 3 vendors, held in session storage) stays public; only saving it asks for an account.

---

## 4. Account creation and login

### One shared experience

- `/account/create` and `/account/login` are the only account screens on the public site. Every entry point links to one of them with the intent payload (§5).
- Each screen links to the other and keeps the payload when switching.
- The heading reflects the intent when there is one ("Create an account to send your enquiry"), and is generic otherwise ("Begin planning your wedding").
- The couples app prototype (V3) signs people up with an email address or phone number and a 6-digit one-time code ("No passwords here"), and has no separate login screen. This spec keeps that method: `/account/create` and `/account/login` are the same code flow with different headings, and an existing contact on create simply logs in. Social sign-in is not in the prototype; see §7.

### Create account

1. Visitor arrives at `/account/create?intent=…&return=…` (or with the payload in session storage, §5).
2. Screen shows the intent heading, the sign-up method(s), and links to the terms and privacy notice. Consent wording is the legal owner's decision.
3. On success, the visitor goes through onboarding only if the intent needs it (`begin-planning`, `noor-personalise`, `vendors-personalise`, `story-inspire`). Intents that act on one vendor (`vendor-save`, `vendor-enquiry`, `vendor-availability`, `compare-save`) skip onboarding and resume immediately; onboarding is offered afterwards.
4. Resume the intent (§5).

### Log in

1. Visitor arrives at `/account/login` with the same payload.
2. On success, resume the intent. No onboarding.
3. "Resend code" and "Use a different email or number" keep the same payload.

### Failure and edge states

| Situation | Behaviour |
|---|---|
| Visitor closes the account screen or presses Back | Return to the originating page with its state intact; nothing is saved or sent |
| Account already exists on create | The one-time code logs them in; continue with the payload |
| Vendor in the payload no longer has a public listing | Resume to the vendor search for that category with a neutral note ("This vendor's listing is no longer available") |
| Payload expired (older than 24 hours) or invalid | Land on the planning home with no error; drop the payload |
| Visitor is already signed in | Every account prompt is skipped; the action runs directly |

---

## 5. Return-to-action handling

### Intent payload

Stored client-side in `sessionStorage` under one key when an account prompt opens, and mirrored in the URL as a short `intent` and `return` pair so it survives a new tab or an email-link sign-in.

```json
{
  "v": 1,
  "intent": "vendor-enquiry",
  "returnTo": "/vendors/studio-haveli?tab=packages",
  "vendorId": "vnd_…",
  "vendorIds": ["vnd_…", "vnd_…"],
  "categorySlug": "photo",
  "vendorTypeSlug": "candid-wedding-photographer",
  "weddingId": null,
  "storySlug": null,
  "draft": { "message": "…", "dates": "…", "guests": 150 },
  "createdAt": "2026-11-13T09:00:00Z"
}
```

Field rules:
- `intent` is one of the values in §3. Unknown values are ignored.
- `returnTo` must be a same-origin relative path that matches a route in the route specification. Absolute URLs and protocol-relative paths are rejected (open-redirect protection).
- `vendorIds` is used by compare (ordered, capped at the compare limit).
- `weddingId` is used once the couple has a wedding (e.g. adding a vendor to a specific wedding's shortlist).
- `draft` holds unsent form input for enquiries and availability requests. It stays in session storage only, never in the URL, and is deleted once the request is sent or the payload expires.

### Resume sequence

1. Authentication succeeds.
2. Read the payload; validate `intent` and `returnTo`.
3. If the intent needs onboarding and the account has none, run onboarding, carrying the payload.
4. Navigate to `returnTo`.
5. Perform the resumable part of the action:
   - `vendor-save`, `compare-save`: perform it, then confirm inline ("Saved to your shortlist", with **Undo**).
   - `vendor-enquiry`, `vendor-availability`: reopen the form with `draft` restored; the couple presses **Send**.
   - `vendors-personalise`: re-run the same search with the couple's preferences.
   - `noor-continue`, `noor-personalise`: open Noor in the couples app with the last question.
6. Clear the payload.

### Where the couples app lives

The current homepage sends account traffic to an external couples app (`VITE_APP_URL`, see `src/links.js`). If `/account/*` and the post-auth destinations stay in that app on another origin, the payload must travel in the URL (`intent`, `return`, and IDs), and the app must validate `returnTo` against the public site's origin before redirecting back. This is the main integration decision in §7.

---

## 6. Journeys

**A. Homepage → Noor → account**
Homepage hero → Explore the experience → Noor section → **Ask Noor** (panel) → asks a personal question → "Save this to your plan" → `/account/create?intent=noor-continue` → onboarding (vision) → couples app Noor with the question.

**B. Vendors discovery → enquiry**
`/vendors` → Explore by category → category → vendor type → Matches (`/vendors/search?category=…&type=…`) → vendor profile → **Send an enquiry** → prompt → `/account/create?intent=vendor-enquiry&return=/vendors/…` → back on the profile with the form reopened → **Send**.

**C. Compare → save**
Search results → **Compare** on three cards (tray, public) → `/vendors/compare?ids=…` → **Save comparison** → log in → `/vendors/compare?ids=…` saved, confirmation shown.

**D. Story → plan**
`/real-weddings` → a real wedding → "Plan something like this" → create account → onboarding with place and style offered → planning home.

**E. Returning couple**
Any page → **Log in** in header → `/account/login` with `returnTo` set to the current page → back on the same page, signed in; personalised modules appear in place of public ones.

---

## 7. Open decisions

1. **Account host:** are `/account/create` and `/account/login` served by this website or by the couples app (`VITE_APP_URL`)? This decides whether the payload can use session storage or must ride in the URL.
2. **Sign-in methods:** keep the prototype's email/phone one-time code only, or add social sign-in.
3. **Public Noor:** scripted demo only, or a live, rate-limited general model for unauthenticated visitors.
4. **Carrying the public Noor conversation** into the account.
5. **Compare limit:** the couples app caps compare at 3 ("Three is the most that reads on one screen"). This spec adopts 3 for the public tray.
6. **Payload lifetime** (24 hours proposed).
7. **CTA label:** the brief names **Begin planning**; the current homepage uses **Start planning** in 20 places. One label should be chosen for the whole site.
