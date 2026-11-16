# IndianWeddings public website: information architecture

Status: proposed, documentation only (v2 brief, 13 November 2026). No page described here is implemented except the homepage.
Companion documents: [page inventory](website-page-inventory.md), [conversion flows](website-conversion-flows.md), [existing component inventory](website-existing-component-inventory.md).

## 1. Scope and ground rules

- **The homepage is the condensed overview.** `/` renders inside the shared site shell and every link leads to a destination page; its section list is in the [page inventory](website-page-inventory.md#1-home-).
- **Pre-launch evidence rules apply** (from `PRODUCT.md`): no real vendors, couples, testimonials, metrics or press exist yet. Every page below that shows vendors, weddings or stories depends on real, approved data before it can launch; none of it is to be filled with invented records. The homepage's sample content stays labelled as sample.
- **Vendor categories come only from the Luxury Indian Wedding Vendor Taxonomy** (19 categories, 207 vendor types). This document does not add, rename or merge categories.
- **No placeholder pages.** Routes for capabilities that do not exist yet are listed as dependencies, not built as empty screens.

## 2. Sitemap

```
/                                   Home (existing, preserved)
├── /noor                           Noor overview + public demo
├── /vendors                        Vendors landing
│   ├── /vendors/categories         All 19 categories
│   ├── /vendors/categories/:categorySlug
│   │                               Category page (vendor types grouped into service families)
│   ├── /vendors/search             Results / Matches (query: q, category, type, location, filters)
│   ├── /vendors/:vendorSlug
│   │                               Public vendor profile
│   └── /vendors/compare            Compare (query: ids)
├── /real-weddings                  Stories hub (views: All stories · Real Weddings · The Edit)
│   ├── /real-weddings/:weddingSlug Real wedding story + gallery
│   └── /real-weddings/the-edit/:storySlug
│                                   The Edit story
├── /our-approach                   Our Approach
└── /account
    ├── /account/create             Shared account creation
    └── /account/login              Shared login
```

Utility, not destinations: the persistent **Ask Noor** panel (available on every page) and the **compare tray** (on vendor pages).

Legal pages (privacy, terms, cookies) are required before launch but are outside this brief; the footer reserves their slots.

## 3. Navigation

### Primary navigation (desktop, ≥1140px)

| Position | Item | Destination |
|---|---|---|
| Start | Logo "IndianWeddings" | `/` |
| Centre | Noor | `/noor` |
| | Vendors | `/vendors` |
| | Real Weddings | `/real-weddings` |
| | Our Approach | `/our-approach` |
| End | Log in (text) | `/account/login?return=<current path>` |
| | Ask Noor (utility) | Opens the Noor panel; does not navigate |
| | **Begin planning** (primary button) | `/account/create?intent=begin-planning` |

- The Edit is **not** a primary item. It is reached through the Real Weddings destination (its own view tab and story cards) and from the footer.
- Active state: the item whose route prefix matches the current path (`/vendors/*` lights **Vendors**; `/real-weddings/the-edit/*` lights **Real Weddings**).

### Mobile and tablet (<1140px)

- Header: logo, **Begin planning** (hidden below 360px, as today), drawer button.
- Drawer (full width, below the header): Noor, Vendors, Real Weddings, Our Approach as large rows; then Ask Noor; then **Begin planning** and **Log in**. This extends the existing mobile menu in `LandingView.jsx`.
- Persistent Ask Noor: discreet fixed button in the lower inline-end corner, rules in [conversion flows §2](website-conversion-flows.md#2-persistent-ask-noor-entry).

### Homepage navigation

The homepage uses the same header, drawer and footer as every other page. Homepage sections no longer use in-page anchors for navigation; each section's links lead to its destination page.

### Footer

| Column | Links |
|---|---|
| Explore | Noor, Vendors, All categories, Real Weddings, The Edit (`/real-weddings?view=the-edit`), Our Approach |
| Your wedding | Begin planning, Log in, Ask Noor |
| Legal (reserved) | Privacy, Terms, Cookies |

The existing footer credit line for photography stays until the photography is replaced.

## 4. Page hierarchy

| Level | Pages |
|---|---|
| 0 | Home |
| 1 (primary destinations) | Noor · Vendors · Real Weddings · Our Approach |
| 2 | All categories · Vendor search/Matches · Compare · Real wedding story · The Edit story |
| 3 | Category page |
| 4 | Vendor profile (reachable from levels 1–3 and from stories) |
| Utility | Account create · Account login · Ask Noor panel · Compare tray |

### Vendor discovery hierarchy (preserved from the taxonomy brief)

```
Vendors landing
 → Best fit for your wedding        (signed in: personalised rail · signed out: curated discovery + "personalise with Noor")
 → Explore by category              (10 primary discovery categories)
 → See all categories               (/vendors/categories: all 19)
 → Category                         (/vendors/categories/:categorySlug)
 → Service / vendor type            (selection on the category page)
 → Matches                          (/vendors/search?category=…&type=…)
 → Vendor profile                   (/vendors/:vendorSlug)
 → Compare / Enquiry                (/vendors/compare, enquiry from the profile)
```

## 5. Route specification

All routes are new except `/`. The current site is a single-page Vite build with no router (see [existing component inventory §2](website-existing-component-inventory.md#2-routing-and-hosting)); §5.3 lists what has to change.

### 5.1 Routes

| Route | Page | Params / query | Access | Notes |
|---|---|---|---|---|
| `/` | Home | Existing presentation params (`heroStyle`, `presenter`, `motion`…) | Public | Preserved. |
| `/noor` | Noor overview | `?ask=<question>` optional, opens the panel seeded | Public | Personalised Noor lives behind auth in the couples app. |
| `/vendors` | Vendors landing | none | Public; personalised rail when signed in | |
| `/vendors/categories` | All categories | none | Public | Lists all 19 with their vendor types. |
| `/vendors/categories/:categorySlug` | Category | `categorySlug` ∈ the 19 existing category IDs (§5.5) | Public | Unknown slug → 404 page with links to `/vendors/categories`. |
| `/vendors/search` | Results / Matches | `q`, `category`, `type`, `location`, `guests`, `budget`, `style`, `sort`, `page` | Public; personalised ranking when signed in | The Matches step. Serves category-only, type-level and free-text searches. Never returns a dead end (§5.4). |
| `/vendors/:vendorSlug` | Vendor profile | `vendorSlug` unique per vendor; `?tab=` optional | Public (approved public listings only) | One profile per business even when it is cross-listed in several categories or types. |
| `/vendors/compare` | Compare | `ids` (comma-separated vendor IDs, ordered, max 3 as in the couples app) | Public to view; saving needs auth | Built from the compare tray. |
| `/real-weddings` | Stories hub | `view` ∈ `all` (default), `real-weddings`, `the-edit`; optional `tag` | Public | One destination, three views. |
| `/real-weddings/:weddingSlug` | Real wedding story | `weddingSlug` | Public | Only weddings with consent and records (§7). |
| `/real-weddings/the-edit/:storySlug` | The Edit story | `storySlug` | Public | Editorial. |
| `/our-approach` | Our Approach | none | Public | |
| `/account/create` | Account creation | `intent`, `return`, IDs | Public | Shared screen; see conversion flows. |
| `/account/login` | Login | `intent`, `return`, IDs | Public | Shared screen. |

Param naming: the brief writes `:slug` throughout; this spec names them `:categorySlug`, `:vendorSlug`, `:weddingSlug`, `:storySlug` so each is unambiguous in code.

### 5.2 Ambiguity rules

1. **`the-edit` is a reserved wedding slug.** `/real-weddings/the-edit/:storySlug` and `/real-weddings/:weddingSlug` share a prefix. The router must match the literal `the-edit` segment first, and the CMS must refuse `the-edit` (and `index`, `view`, `page`) as a wedding slug.
2. **`/real-weddings/the-edit` alone** (no story) redirects to `/real-weddings?view=the-edit`; it is not a separate page.
3. **Vendor type has no path segment.** The brief's route list has no `/vendors/categories/:categorySlug/:typeSlug`. To avoid a second dynamic segment that can collide, the type is a query on Matches: `/vendors/search?category=<categorySlug>&type=<typeSlug>`. If the product wants shareable type pages for search engines, add `/vendors/categories/:categorySlug/:typeSlug` as an alias that renders the same results (open decision).
4. **Static vendor paths win over vendor slugs.** `/vendors/categories`, `/vendors/search` and `/vendors/compare` are matched before `/vendors/:vendorSlug`, and `categories`, `search` and `compare` are reserved so no vendor can take them (`RESERVED_VENDOR_SLUGS` in `src/routes.js`).
5. **Slugs reuse existing IDs where they exist** (§5.5) and are otherwise lowercase kebab-case, ASCII, generated once and kept stable; a renamed vendor keeps a redirect from the old slug.
6. **Trailing slashes** redirect to the bare path; unknown paths render a 404 page with the primary navigation and a search box.

### 5.3 Conflicts with the current codebase

| Conflict | Detail | Resolution |
|---|---|---|
| No router | `src/main.jsx` renders one `Landing` component; there is no `react-router` or file routing. | Add a client router (or move to a framework with file routing). The homepage becomes the `/` route without markup changes. |
| No SPA rewrites | `vercel.json` sets only a `noindex` header. Deep links like `/vendors` would 404. | Add a rewrite of all non-asset paths to `/index.html`, or prerender each route. Public discovery pages benefit from prerendering or SSR for search engines. |
| Homepage presentation params | `?heroStyle`, `?presenter`, `?motion` etc. are read in `main.jsx` for every URL. | Keep them scoped to `/` only. |
| Hash anchors | Header links use `#vendors`, `#real-weddings`, `#advisor`, `#noor`. The `#noor` section id and the `/noor` route coexist without technical conflict. | Header switches to route links; in-page anchors stay for the homepage's own sections. |
| External app links | `src/links.js` sends every CTA to `VITE_APP_URL` (or `#opening-soon`). | `/account/create` and `/account/login` replace those destinations once decided (see conversion flows §7). |
| `noindex` header | `vercel.json` marks the whole site `noindex, nofollow`. | Correct for the review build; must be lifted per route at launch for public discovery pages. |
| CTA label | Brief says **Begin planning**; homepage says **Start planning** (20 instances). | Choose one label for the whole site. |

### 5.4 No dead ends in vendor discovery

- Every one of the 19 categories and 207 vendor types links to `/vendors/search` with the right `category`/`type`. No category or type tile is disabled or hidden because supply is thin.
- Match availability is a **result state**, not a navigation permission:

| Result | Behaviour |
|---|---|
| Plentiful | Normal results with the rich vendor card. |
| Limited | Show what exists; one line saying the results are narrower; **Broaden the search** (drop the narrowest filter, widen location). |
| None close | Stay on the results page: "We couldn't find a close match yet", **Broaden the search**, **Adjust preferences**, and nearby vendor types from the same category. |

- Copy never implies a person is sourcing vendors ("A planner is looking", "We'll find one", "Ask us to find one" are not used).
- "We already have someone" may appear on a category page as a secondary shortcut (signed-in: add an outside vendor to the plan); it never blocks the route to results.

### 5.5 Category and vendor-type identifiers

The couples app prototype (V3) already defines identifiers; the website reuses them so links between the two never need a mapping table.

| Category (taxonomy name) | ID / `categorySlug` | Primary in the couples app (website: see §9.1) |
|---|---|---|
| Planning & Coordination | `planning` | ✓ |
| Venues & Stay | `venues` | ✓ |
| Decor, Floral & Event Design | `decor` | ✓ |
| Production, AV & Infrastructure | `production` | |
| Food, Beverage & Culinary | `food` | ✓ |
| Photography, Film & Content | `photo` | ✓ |
| Entertainment, Artists & Dance | `entertainment` | ✓ |
| Fashion, Attire & Styling | `fashion` | ✓ |
| Jewelry & Accessories | `jewelry` | |
| Hair, Makeup & Beauty | `beauty` | ✓ |
| Mehendi & Ceremony Services | `mehendi` | |
| Invitations, Stationery & Wedding Identity | `stationery` | |
| Gifting, Trousseau & Favors | `gifting` | |
| Guest Hospitality & Destination Services | `hospitality` | |
| Transport & Mobility | `transport` | |
| Wedding Tech & Digital | `tech` | |
| Experiences & Specialty Services | `experiences` | |
| Safety, Security & On-ground Support | `safety` | |
| Legal, Finance, Insurance & Permissions | `legal` | |

Vendor types use the app's `catId:typeSlug` form (e.g. `decor:floral-designer-florist`). On the website the two halves travel as `category=decor&type=floral-designer-florist`. Vendors have no stable ID or slug in the prototype (they are keyed by name, venues by `v1…`); a `vendorId` and `vendorSlug` must be added to the vendor record before profiles can have URLs.

### 5.6 Cross-listed vendors

A vendor has one `primaryCategory`, many `vendorTypes[]`, and one profile at `/vendors/:vendorSlug`. It appears in every category and type result it qualifies for, de-duplicated within a single result list. Cards show the vendor type matched by the current search as secondary metadata.

## 6. Access matrix

| Capability | Signed out | Signed in |
|---|---|---|
| Homepage | ✓ | ✓ |
| Noor overview and scripted demo | ✓ | ✓ |
| Personalised Noor session | Prompt to create an account | ✓ |
| Saving AI-generated concepts | Prompt | ✓ (when built) |
| Vendor search, categories, results | ✓ (curated, non-personalised ranking) | ✓ (personalised ranking, "Best fit") |
| Public vendor profiles | ✓ | ✓ |
| Compare on screen | ✓ (session only) | ✓ |
| Save a comparison | Prompt | ✓ |
| Shortlist / save a vendor | Prompt | ✓ |
| Vendor enquiry | Prompt (form kept as a draft) | ✓ |
| Availability request | Prompt (form kept as a draft) | ✓ |
| Real Weddings, galleries, The Edit | ✓ | ✓ |
| Our Approach | ✓ | ✓ |
| Persistent wedding planning (budget, guests, website, run sheet) | Prompt | ✓ (couples app) |

"Prompt" means the contextual account sheet described in [conversion flows §3](website-conversion-flows.md#3-contextual-authentication-entry-points), carrying the action through authentication.

## 7. Real Weddings and The Edit

One destination, `/real-weddings`, with three views and two distinct content types.

| | Real Wedding | The Edit |
|---|---|---|
| What it is | An actual wedding planned with IndianWeddings | Editorial: trends, design and décor, fashion and bridal style, destinations, cultural features, interviews |
| Label on cards and pages | "Real wedding" | "The Edit" plus its section (e.g. "Destinations") |
| Route | `/real-weddings/:weddingSlug` | `/real-weddings/the-edit/:storySlug` |
| Required evidence | Written consent from the couple for names, photographs and quotes; photographer credit and licence; a record linking the wedding to an IndianWeddings account; vendor credits only for vendors confirmed by the couple | Author and date; credits and licences for imagery; any interview subject's consent |
| Claims allowed | "Planned with IndianWeddings", facts from the couple's own records (celebrations, guest numbers, vendors booked here) only when the records support them | None about IndianWeddings' involvement unless documented. An interview or feature is not presented as having been planned or booked through IndianWeddings |
| Vendor links | "The team" credits link to public vendor profiles where they exist | Optional "In this story" links to public profiles; never implies endorsement |
| Conversion | "Plan something like this" (account prompt) | "Ask Noor about this" (public panel) |

Views:
- **All stories** (default): both types interleaved by date, each card carrying its type label.
- **Real Weddings**: real weddings only.
- **The Edit**: editorial only, with its own section filters.

Launch state: `PRODUCT.md` records that there are no real IndianWeddings couples yet, and the homepage's three weddings are illustrative with photography licensed for review only. The **Real Weddings** view therefore has no launchable content today. Options: launch `/real-weddings` with **The Edit** only and the Real Weddings view hidden until the first consented wedding exists, or hold the destination. This is an open decision (§8); it must not be filled with the illustrative stories.

## 8. Conversion journeys

Summarised here; full flows in [conversion flows §6](website-conversion-flows.md#6-journeys).

| From | Path | Converts at |
|---|---|---|
| Home | Hero → Begin planning | `/account/create?intent=begin-planning` |
| Home | Noor section → `/noor` → "Try Noor with your wedding" | Account (onboarding vision) |
| Home | Vendors section → `/vendors` → category → type → results → profile | Enquiry / availability (account) |
| Vendors | Results → Compare tray → `/vendors/compare` | Save comparison (account) |
| Vendors (signed out) | "Best fit for your wedding" invitation | Account, then personalised results on the same route |
| Real Weddings | Story → "Plan something like this" | Account (onboarding seeded from story) |
| The Edit | Story → "Ask Noor about this" | Public Noor panel → account on personal follow-up |
| Our Approach | "How vendor discovery works" → `/vendors`; "How Noor helps" → `/noor` | Downstream |
| Any page | Ask Noor panel → personal question | Account (`noor-continue`) |

## 9. Open product questions

1. ~~Primary discovery categories~~ **Resolved (Vendors landing brief):** 10 primary (planning, venues, decor, food, photo, entertainment, fashion, jewelry, beauty, stationery) and 9 extended. The couples app still flags 8; it should add jewelry and stationery to match.
2. Whether the vendor-type step needs its own path for search (§5.2 rule 3).
3. Where accounts live (this site or the couples app) and the sign-in methods.
4. Public Noor: scripted demo or live model.
5. Real Weddings at launch without real weddings (§7).
6. What "approved public listing" means operationally (who approves, what fields are required) and whether any vendor verification exists to describe on Our Approach.
7. **Begin planning** vs **Start planning**.
8. **Noor in the couples app.** The couples app prototype has an unnamed assistant ("concierge"), not Noor, and its fallback says "Ask your planner". The website promises Noor by name and the brief rules out implying human sourcing. The app needs to adopt Noor and drop planner wording before `/noor` hands visitors into it.
9. **Planner handoff screen.** The couples app sends thin-budget results to "Planner handoff" ("Your brief is tighter than our current roster"). Public results must not route there.
10. **Non-venue vendor profiles.** Only venues have a detail page in the prototype; a profile layout for the other 18 categories is needed before `/vendors/:vendorSlug` can serve every vendor.
11. **Vendor IDs and slugs.** Prototype vendors are keyed by name; stable `vendorId` and `vendorSlug` fields are required.
12. Open dates: the homepage shows it, the brief does not mention it; it has no destination page in this architecture. Keep it as a homepage-only section, fold it into `/vendors` (e.g. a filter on venues), or drop it.
