# Existing pages, components and functionality

Status: inventory as of 13 November 2026, for planning the public website. Nothing was changed while compiling it.
Companion documents: [information architecture](website-information-architecture.md), [page inventory](website-page-inventory.md), [conversion flows](website-conversion-flows.md).

## 1. Sources inspected

| Source | Where | What it is |
|---|---|---|
| Public homepage | This repository (`src/`) | Vite + React landing page, the only public page that exists |
| `PRODUCT.md` | This repository, `origin/main` | Product context and pre-launch evidence rules |
| Couples Web App V3 | `IndianWeddings Couples Web App V3.html` (design prototype, outside this repo) | The signed-in couples app the CTAs point to. Unbundled for inspection; screen numbers below are its `data-screen-label`s |
| Vendor taxonomy | `Luxury_Indian_Wedding_Vendor_Taxonomy_and_Claude_Prompt.md` (outside this repo) | 19 categories, 207 vendor types, discovery rules |
| Coverage audit | `IndianWeddings Couple App - Inventory Coverage.dc.html` | Gap audit of an older mobile version (9 September) |
| Vendor Flow V2, Vendor Detail v11 | Standalone prototypes | Older vendor flows; predate the 19-category taxonomy |

The couples app and vendor prototypes are design files, not production code. "Exists" below means "exists in the prototype", not "built and shipped".

## 2. Routing and hosting

| Item | Current state |
|---|---|
| Router | None. `src/main.jsx` renders a single `Landing` component. |
| URL parameters | `heroStyle`, `presenter`, `heroSlides`, `motion`, `sparkle`, `celestial`, `advisorName` are read on every URL (design-review options). |
| In-page anchors | `#top`, `#open-dates`, `#experience`, `#advisor`, `#noor`, `#planning`, `#celebrations`, `#vendors`, `#real-weddings`, `#opening-soon` |
| External links | `src/links.js`: `APP_URL` from `VITE_APP_URL`, `SIGNIN_URL` from `VITE_SIGNIN_URL`; both fall back to `#opening-soon`. |
| Hosting | Vercel, static `dist/`. `vercel.json` sets `X-Robots-Tag: noindex, nofollow` for every path and has no rewrites, so any deep link returns 404. |
| Couples app routing | In-memory screen state (`go(screen)`); no URLs, no history, no deep links. |

**Implication:** none of the proposed routes exist in either codebase. The website needs a router and rewrites (or prerendering); the couples app needs URL routing for any return-to-action handoff from the website.

## 3. Homepage sections and reusable components

All live in `src/LandingView.jsx` (markup) and `src/landingLogic.js` (data and behaviour), styled with the `--iw-*` tokens in `src/styles.css` and documented in `DESIGN.md`.

| Section (screen label) | Anchor | Content / data | Reuse on new pages |
|---|---|---|---|
| Header + mobile drawer | — | Logo, anchor links, Sign in, Start planning, 44px menu button | Becomes the site-wide header; extend links to routes, add Ask Noor utility |
| 01 Hero (7 variants) | `#top` | Cinematic slideshow (default) and six presentation variants | Homepage only |
| 02 Open dates | `#open-dates` | `DEALS`: 6 sample venue offers with In India / Abroad tabs | Homepage only until decided (IA §9) |
| 03 Little details / Showcase | `#experience` | Pinned scroll story, `FRAGS` | Homepage only |
| 04 Your advisor | `#advisor` | `ADV_NAMES`, `ADVICE` (3 sample advice cards with Why this?, Yes/No outcomes), trust line | **Noor page**: advice cards, trust line |
| 04b Noor at work | `#noor` | `NW` (budget, website, portraits, the day), animated stage, orb canvas | **Noor page**: capability demos |
| Try it (Ask Noor) | inside `#noor` | `ASK` (3 suggested questions with written answers), `ASK_FREE` fallback, input with 160-char limit | **Persistent Ask Noor panel** and Noor page |
| 06 Planning (3 chapters) | `#planning` | Planning views tabs; save-the-date templates `TPLS`, `SD_IMGS`; day-of alerts `DAY_*` | Our Approach (how planning works) |
| 07 Celebrations | `#celebrations` | `ORBIT`: six events (roka → reception) strip with drag scroll | Noor page, Our Approach |
| 08 Vendors | `#vendors` | `CATS` (4 tabs: Venues, Photography, Décor and florals, Food and drink), `VENDORS` (12 sample vendors) | **Not reusable as data** (sample). Card layout and tab pattern can inform the public vendor card |
| 09 Real weddings | `#real-weddings` | `WEDS`: 3 illustrative weddings with quote, facts, team | Layout informs the story page; **data is illustrative and must not be reused as real weddings** |
| 10 Connected | — | Before/after fragments | Our Approach |
| 11 Invitation | — | Final CTA, `#opening-soon` note | Pattern for page-end CTAs |
| 12 Footer | — | Explore and Your wedding columns, photography credit | Becomes the site-wide footer |

Cross-cutting pieces worth extracting into shared components before new pages are built:
- Site header and mobile drawer; footer.
- Primary button, ghost button, underlined link, text tabs with arrow-key support (`main.jsx` handler), labels (see `DESIGN.md`).
- Ask Noor question/answer block (currently inside the Noor section).
- Photo frame with fixed aspect ratio and failed-image fallback.
- Sparkle and sky canvases (decorative; optional on inner pages).

## 4. Vendor taxonomy

| Fact | Source |
|---|---|
| 19 top-level categories, 207 vendor types | Taxonomy document; couples app `TX_CATS` matches |
| Category IDs | `planning, venues, decor, production, food, photo, entertainment, fashion, jewelry, beauty, mehendi, stationery, gifting, hospitality, transport, tech, experiences, safety, legal` |
| Vendor-type IDs | `catId:typeSlug`, e.g. `decor:floral-designer-florist` |
| Service families | Each category groups its types into families (e.g. Décor: Design & styling / Florals & fabric / Build & rentals) |
| Primary discovery set | **8** flagged `primary` in the couples app: planning, venues, decor, food, photo, entertainment, fashion, beauty. The brief says **10 primary + 9 extended**. The taxonomy document names no split. **Conflict: needs a product decision.** |
| Category record | `{id, label, short, img, line, primary?, blurb, icon, fam: [[family, [typeNames]]]}` |
| Vendor-type record | `{id, name, cat, fam}` |

## 5. Couples app: vendor discovery (V3 prototype)

| Capability | Exists | Detail | Website reuse |
|---|---|---|---|
| Vendors landing (7) | ✓ | Search "Search a vendor or service" (Services + Vendors results), "Best fit for your wedding" rail, "Explore by category" (primary), "See all 19 categories" | Structure carries over to `/vendors`; "Best fit" becomes curated when signed out |
| All categories (7d) | ✓ | "Every category" | `/vendors/categories` |
| Category (7c) | ✓ | Hero, "What are you looking for?", type pills grouped by family with counts, auto-selects the busiest type, inline matches | `/vendors/categories/:categorySlug`; the website should not auto-select a type for signed-out visitors (open decision) |
| Matches (7a) | ✓ | Plentiful / limited ("One close match so far") / none ("We couldn't find a close match yet") with **Broaden the search** and **Adjust preferences**; related-type suggestions | `/vendors/search`, same states |
| Vendor card (`VendorCardDS`) | ✓ | Image, name, city, "NN% fit", estimate with currency, budget delta, insight, accolades, security deposit, tags, Save, Why this match, Compare, View | Public variant drops fit %, budget delta and "Why this match" (they need the couple's plan) |
| Filters | ✓ | Guest capacity, Price, Dietary needs, Location, Style, Availability, Included services | Public filters (availability may need auth) |
| Sort | ✓ | Best profile fit, Lowest estimated cost, Closest to your line, Largest capacity | Public: drop "Best profile fit" and "Closest to your line" when signed out |
| Compare (7b) | ✓ | Max 3; sections on fit, inclusions, cost vs your line, trade-offs, next steps | `/vendors/compare`; public version omits plan-based rows. Label says "Compare venues" even for other vendors: fix |
| Venue detail (8) | ✓ | Fit, Spaces, Weddings here, Included, Book chapters; gallery, spaces, packages, "Your next step" | Basis for the public **venue** profile |
| Non-venue vendor detail | **Partial** | Opens the Decision screen (13), not a profile | **Missing:** a public profile for non-venue vendors |
| "We already have someone" | ✓ | On the Decision screen | Signed-in shortcut only |
| Styling sketches (8b/8c) | Prototype | "See it dressed"; images stand in for generations | Noor page (as proposed capability) |
| Enquiry (9 → 10) | ✓ | Form prefilled from profile, review sheet "Before it goes", RFP sent | Auth-gated; website hands off with the draft (conversion flows §5) |
| Quotes, contract, payments (27–33) | ✓ | Signed-in only | Not on the public site |
| Planner handoff (11) | ✓ | "Your brief is tighter than our current roster" | **Conflict:** implies manual sourcing, against the taxonomy rule and this brief. Do not link to it from public results |

## 6. Couples app: Noor / assistant

| Item | State in the prototype |
|---|---|
| Name | The name **Noor does not appear** in the couples app; it uses an unnamed "concierge" ("Ask about your plan"). Noor exists only on the homepage. |
| Entry | Persistent "Ask about your plan" bar above the tab bar on several screens; "Ask" button in the web top bar; opens one sheet |
| Scope | Answers and drafts from a fixed question set (next step, guests vs budget, affordability, quote fairness, compare quotes, vision-board brief, missing items, traditions); can draft a headcount change or budget move for the couple to confirm |
| Limits | "It never guesses at money or availability"; fallback "I cannot answer that from your plan" with **Ask your planner** |
| AI imagery | Styling sketches (stand-ins), vision board generation (prompt, mood, ratio, palette), taste read during onboarding |
| Status | All prototype. The older coverage audit lists the AI assistant as missing, with scope ("answering only, or also acting") undecided. |

**Conflicts for the Noor page:** the brief asks for personalised vendor discovery, AI imagery and venue/décor visualisation, budget allocation and vendor comparison. The prototype covers budget moves, comparison and sketch-style imagery as designs, not as a built Noor. The page must label these as in development or proposed (page inventory §2). The "Ask your planner" fallback and "human planner one tap away" note conflict with the brief's rule against implying human sourcing; the website's Noor copy should not promise a planner.

## 7. Couples app: account and onboarding

| Item | State |
|---|---|
| Sign up | Splash "Step inside" → email or phone → 6-digit one-time code (resend, change contact). "No passwords here." |
| Log in | No separate screen |
| Social sign-in | None |
| Onboarding | How much is done · names · date (fixed/range/flexible) · events and traditions · where and how many · budget (with flex reserve and currency) · wedding web address `{slug}.indianweddings.com` · taste (pick 3 images, Pinterest link, uploads) → Analysing → Profile reveal |
| Guest / signed-out mode | None |
| Return-to-action / intent | None |

## 8. Editorial and stories

| Item | State |
|---|---|
| Real weddings | Homepage `WEDS` (3, illustrative). Couples app "Recently celebrated" (3 static) and per-venue "Weddings here" (`PAST`), all sample data |
| The Edit | Does not exist anywhere |
| Our Approach / About | Does not exist |
| Accolades | Couples app vendor cards show labels such as "IW Editors' Pick" and "The Wedding Journal". **Risk:** these read as editorial endorsements; do not carry them to public profiles without a real editorial process |

## 9. Missing components and data dependencies

### Components to build

| Component | Needed by | Notes |
|---|---|---|
| Router + 404 page | All routes | |
| Site header (route-aware) and footer | All pages | Extract from homepage |
| Ask Noor panel / bottom sheet | All pages | Reuse `ASK` / `ASK_FREE` and the Q&A block |
| Account prompt sheet | Vendor, Noor, story CTAs | Conversion flows §3 |
| `/account/create`, `/account/login` | Conversion | Same one-time-code flow as the prototype |
| Intent payload store and resume handler | Conversion | Conversion flows §5 |
| Public vendor card | `/vendors`, search, stories | Public variant of `VendorCardDS` |
| Search bar with service + vendor suggestions | `/vendors`, search | From the couples app |
| Filter and sort panel | Search | Public subset |
| Category tile and all-categories grid | `/vendors`, categories | From `TX_CATS` |
| Vendor-type pill group (by family) | Category page | From the couples app |
| Results states (plentiful / limited / none) | Search | From Matches |
| Compare tray + compare table | Search, compare | Max 3 |
| Public vendor profile (all vendor types) | Profile | Venue detail exists; non-venue profile missing |
| Enquiry / availability form handoff | Profile | Draft held through auth |
| Curated collection module | `/vendors` | New; needs an editorial owner |
| Story card (with type label) and story-type tabs | `/real-weddings` | New |
| Story page templates (real wedding, The Edit) | Story routes | New |
| Capability status label (Available / In development / Proposed) | Noor, Our Approach | New |

### Data the website cannot launch without

| Data | Used by | Exists today |
|---|---|---|
| Approved public vendor listings, with stable `vendorId` and `vendorSlug` | All vendor pages | No (sample vendors only; prototype vendors keyed by name) |
| Vendor ↔ category/type assignments, locations, pricing ranges, media with licences | Search, profiles | No |
| Listing approval status and who approves | Search, Our Approach | Not defined |
| Curated collections and featured vendors (editorial selections) | `/vendors` | No |
| Consented real weddings with records and licensed photography | Real Weddings | No |
| Editorial stories (The Edit) with authors, credits, licences | The Edit | No |
| Platform standards and trust practices (listing criteria, review policy, data handling) | Our Approach | Not documented |
| Confirmed Noor capability status | Noor page | Not confirmed (all prototype) |
| Search and matching service for public queries | Search | Not built |
| Account service and intent handoff with the couples app | Conversion | Not built |
| Licensed photography for all public pages | Every page | No (current photos are review-only) |
