# Website page inventory

Status: proposed, documentation only. Defines what each page is for and what it needs; it is not a visual design.
Companion documents: [information architecture](website-information-architecture.md), [conversion flows](website-conversion-flows.md), [existing component inventory](website-existing-component-inventory.md).

Conventions used below:
- **Reuse** points to existing homepage code (`src/`) or couples-app prototype screens (V3 screen numbers), detailed in the component inventory.
- **Data** lists what must exist before the page can launch with real content. Pages whose data does not exist yet are not built with sample data.
- **Responsive** uses the site's existing breakpoints: drawer navigation below 1140px, reduced decorative motion below 960px, header CTA moves into the drawer below 360px, 44px minimum targets throughout (`DESIGN.md`).
- Every page carries the site header, footer and persistent Ask Noor entry, so these are not repeated per page.

---

## 1. Home `/`

**Purpose:** brand introduction and the overview of the whole product. Preserved as it is.

**Content hierarchy:** unchanged (hero → open dates → the experience → your advisor → Noor at work → planning → celebrations → vendors → real weddings → connected → invitation → footer).

**Changes allowed under this architecture (links only):**

| Section | Add |
|---|---|
| Header | Route links (Noor, Vendors, Real Weddings, Our Approach), Ask Noor utility, Log in |
| Your advisor / Noor at work | "More about Noor" → `/noor` |
| Vendors | "Find your people" → `/vendors`; category tabs → `/vendors/categories/:categorySlug` |
| Real weddings | "More stories" → `/real-weddings` (only once real or editorial stories exist) |
| Footer | Site-wide footer links |

**Data:** existing sample data stays labelled as sample.
**Responsive:** already verified at 320–1280px.

---

## 2. Noor `/noor`

**Purpose:** explain what Noor does for a couple, let a visitor try it without an account, and route into personalised Noor after sign-up.

**Content hierarchy:**
1. Introduction: who Noor is ("Noor means light"), the promise and the trust line ("Noor suggests; you decide…", existing copy).
2. How Noor gets to know you: understanding the couple's wedding vision (onboarding questions, taste read).
3. Capabilities, each with a status label (see below):
   - Personalised vendor discovery.
   - AI-generated wedding imagery and venue/décor visualisation.
   - Budget planning and allocation.
   - Vendor comparison based on preferences.
4. Interactive demonstration: the public Ask Noor demo inline (suggested questions + free text), plus the existing "Noor at work" stage.
5. What Noor will not do (books, pays or messages only with the couple's yes; does not guess at money or availability).
6. Closing CTA: "Try Noor with your wedding".

**Capability status (must be shown on the page):**

| Capability | Evidence | Label until confirmed |
|---|---|---|
| Understanding the vision | Couples app onboarding and taste read (prototype) | In development |
| Personalised vendor discovery | Couples app "Best fit", fit %, "Why this match" (prototype) | In development |
| AI imagery and venue/décor visualisation | Styling sketches and vision board generation; images are stand-ins in the prototype | Proposed |
| Budget planning and allocation | Assistant drafts budget moves for confirmation (prototype); homepage sample advice | In development |
| Vendor comparison by preference | Compare screen (prototype) | In development |
| Answering questions from the couple's plan | Assistant question set (prototype) | In development |

Labels are **Available**, **In development** and **Proposed**. Nothing is marked Available until the product owner confirms it is live. The labels are a product decision, not copywriting; see IA §9.

**Reuse:** `ADV_NAMES` lede and trust copy, `ADVICE` cards, `NW` stage and orb canvas, `ASK`/`ASK_FREE` block, celebration strip (`ORBIT`) to show Noor across events.
**Data:** confirmed capability status; any screenshots must come from the real product, not the prototype, once it exists.
**CTAs:** "Try Noor with your wedding" → `/account/create?intent=noor-personalise`; "Ask Noor" (inline demo); "Find vendors" → `/vendors`.
**Responsive:** capabilities stack to one column below 960px; the demo stays fully usable at 320px; the stage animation is replaced by its end state when motion is reduced.

---

## 3. Vendors landing `/vendors`

**Purpose:** start vendor discovery, curated or personalised, and give a path into the full taxonomy.

**Content hierarchy:**
1. Introduction and search ("Search a vendor or service": services and vendors suggestions).
2. **Best fit for your wedding:**
   - Signed in: the personalised rail.
   - Signed out: curated discovery (featured vendors or a collection) with an invitation, "See vendors that fit your wedding: tell Noor about it".
3. **Explore by category:** the primary discovery categories (8 flagged today; 10 per the brief — open decision).
4. **See all categories** → `/vendors/categories`.
5. Curated collections (editorial groupings, e.g. by destination or style).
6. Featured vendors.

**Reuse:** couples app screen 7 (structure), `VendorCardDS` (public variant), category tile, search.
**Data:** approved public listings; curated collections and featured vendors with an editorial owner; category imagery with licences.
**CTAs:** category tile → `/vendors/categories/:categorySlug`; search → `/vendors/search?q=…`; vendor card → `/vendors/:vendorSlug`; Save / Compare (see conversion flows); personalise → account (`vendors-personalise`).
**Responsive:** rails scroll horizontally with visible next/previous controls on desktop and swipe on touch; category tiles in a 2-column grid on phones, 4 on desktop; search stays at the top on mobile.

---

## 4. All categories `/vendors/categories`

**Purpose:** show all 19 categories and their vendor types without becoming a wall of icons.

**Content hierarchy:** primary categories first, then the remaining categories; each with its blurb and its service families; each vendor type is a link.
**Reuse:** couples app 7d "Every category"; `TX_CATS` families.
**Data:** taxonomy (exists), category imagery.
**CTAs:** category → category page; vendor type → `/vendors/search?category=…&type=…`.
**Responsive:** one column on phones with collapsible families (each type remains a link when expanded); long type names wrap rather than truncate.

---

## 5. Category `/vendors/categories/:categorySlug`

**Purpose:** choose a service or vendor type within a category and move to matches.

**Content hierarchy:**
1. Category hero: name, blurb.
2. "What are you looking for?": vendor-type pills grouped by service family.
3. Results preview for the whole category (top vendors), with "See all" → search.
4. Related categories.
5. Signed in only: "We already have someone" shortcut (never blocks results).

**Reuse:** couples app 7c.
**Data:** taxonomy; listings for the preview.
**CTAs:** type pill → `/vendors/search?category=…&type=…`; vendor card → profile; Save/Compare.
**Rule:** every pill links to results regardless of how many vendors exist. Pill counts are shown only if they are accurate; a zero count does not disable the pill.
**Responsive:** families stack; pills wrap; the results preview becomes a horizontal rail on phones.

---

## 6. Results / Matches `/vendors/search`

**Purpose:** the Matches step: vendors for a query, category or vendor type, ranked publicly or for the couple.

**Content hierarchy:**
1. Query summary (category › type, or free text) with editable chips.
2. Filters (guest capacity, price, dietary needs, location, style, included services; availability only when signed in) and sort.
3. Results in the state that applies: plentiful, limited, none close (IA §5.4).
4. Related vendor types.
5. Compare tray (sticky, up to 3).

**Reuse:** couples app 7a states and copy, filter and sort sets, `VendorCardDS`.
**Data:** search service over approved listings; cross-listing so a vendor appears once per list.
**CTAs:** card → profile; Save → account; Compare → tray → `/vendors/compare?ids=…`; **Broaden the search**; **Adjust preferences** (signed out: opens filters; signed in: preferences).
**Responsive:** filters in a bottom sheet on phones with an "Apply" button and the result count; compare tray collapses to a bar above the Ask Noor button (which moves up to avoid overlap).

---

## 7. Vendor profile `/vendors/:vendorSlug`

**Purpose:** everything a couple needs to decide whether to contact a vendor.

**Content hierarchy (common):**
1. Name, vendor types, locations, gallery.
2. About and services (with what is included).
3. Pricing guidance (ranges or "from" prices, currency) and security deposit terms where the vendor provides them.
4. Venue only: spaces and capacities, rooms, events it suits, packages (from couples app screen 8).
5. Real weddings featuring the vendor (only consented, real ones).
6. Links ("Find us on").
7. Next step: **Send an enquiry**, **Check availability**, **Save**, **Compare**, **Ask Noor about this vendor**.

**Reuse:** couples app venue detail (8). **Missing:** a profile layout for non-venue vendors (the prototype uses a decision screen).
**Data:** approved listing with all of the above; licensed media. No ratings or accolades unless a real review or editorial process exists.
**CTAs:** enquiry and availability → account prompt, draft kept; Save → account; Compare → tray; Ask Noor → panel seeded with the vendor.
**Responsive:** gallery becomes a swipeable strip; the next-step actions stick to the bottom of the screen on phones; long service lists collapse by family.

---

## 8. Compare `/vendors/compare`

**Purpose:** compare up to three vendors side by side.

**Content hierarchy:** vendor headers; what is included; pricing guidance; capacity and location; differences in plain language ("What changes if you choose each one"); next step per vendor.
Signed in adds: fit to the couple's priorities and cost against their budget line.
**Reuse:** couples app 7b (relabel "Compare venues" for non-venues).
**Data:** the same listing fields as the profile.
**CTAs:** **Save comparison** → account (`compare-save`); per-vendor enquiry; remove/replace vendor.
**Responsive:** below 768px, vendors become swipeable columns with sticky row labels, or a stacked list per attribute; never a horizontally clipped table.

---

## 9. Real Weddings hub `/real-weddings`

**Purpose:** inspiration from real weddings and editorial stories in one place, with clear labelling.

**Content hierarchy:**
1. Introduction.
2. View tabs: **All stories** · **Real Weddings** · **The Edit** (`?view=`), with The Edit section filters (trends, design and décor, fashion and bridal style, destinations, culture, interviews).
3. Story grid; every card shows its type label.
4. Closing CTA.

**Reuse:** homepage Real weddings layout patterns (not its data); text tabs.
**Data:** consented real weddings; editorial stories. The Real Weddings view has no content at launch (IA §7).
**CTAs:** story card → story page; "Plan something like this" (real weddings) → account; "Begin planning".
**Responsive:** one column on phones, two on tablets, three on desktop; tabs scroll horizontally if they do not fit.

---

## 10. Real wedding story `/real-weddings/:weddingSlug`

**Purpose:** tell one couple's wedding with their consent, and show how it came together.

**Content hierarchy:** couple and place; celebrations (by event); gallery with photographer credit; the couple's words (quoted only with consent); facts supported by records; the team (vendors linking to public profiles); related stories.
**Reuse:** homepage `WEDS` layout (quote, facts, team).
**Data:** consent record, licensed photos, vendor confirmations, account linkage (IA §7).
**CTAs:** "Plan something like this" → account (`story-inspire`); vendor links → profiles.
**Responsive:** gallery becomes a vertical sequence on phones; facts stack.

---

## 11. The Edit story `/real-weddings/the-edit/:storySlug`

**Purpose:** editorial inspiration.

**Content hierarchy:** section label ("The Edit · Destinations"), headline, author and date, body with images and credits, "In this story" vendor links (optional), related stories.
**Data:** authored stories with image licences and interview consent.
**Rule:** no claim that a featured wedding, vendor or person worked with IndianWeddings unless documented.
**CTAs:** "Ask Noor about this" → public panel; vendor links → profiles.
**Responsive:** reading measure 65–75ch; images full width on phones.

---

## 12. Our Approach `/our-approach`

**Purpose:** explain how IndianWeddings works and why, in plain terms.

**Content hierarchy:**
1. Philosophy (from `PRODUCT.md` principles: the couple's plan is the source of truth; many celebrations, one plan; fewer tools; clarity over pressure).
2. What is different (Noor inside the plan; built for Indian weddings; everything in one place).
3. How vendor discovery works: the taxonomy, matching by the couple's preferences, no dead ends, no paid placement claims unless policy exists.
4. How Noor supports couples (links to `/noor`).
5. Platform standards and trust practices: **only practices that actually exist** (listing approval, how data is used, what Noor does and does not do).
6. The planning experience from first search to the day.

**Reuse:** homepage Planning chapters, Celebrations strip, Connected section, trust line.
**Data:** documented listing criteria and approval process; data and privacy practices. Without them, section 5 is omitted, not written generically.
**Avoid:** "verified", "hand-picked", "exclusive", "guaranteed" unless a documented process backs each word.
**CTAs:** "See how vendor discovery works" → `/vendors`; "Meet Noor" → `/noor`; "Begin planning".
**Responsive:** long-form reading layout; any diagrams reflow to vertical.

---

## 13. Account create `/account/create` and login `/account/login`

**Purpose:** one shared entry into an account that remembers what the visitor was doing.

**Content hierarchy:** intent heading; email or phone; one-time code; consent links; switch between create and log in.
**Reuse:** couples app Splash and Sign up (prototype: email/phone + 6-digit code, no passwords).
**Data:** account service; intent payload (conversion flows §5).
**CTAs:** continue → onboarding or resume; back → originating page.
**Responsive:** single column; code input uses the platform's one-time-code autofill; 16px inputs to avoid iOS zoom.

---

## 14. Not found (404)

**Purpose:** recover from a bad link.
**Content:** short message, vendor search box, primary destinations.
**Responsive:** standard.

---

## 15. Ask Noor panel (utility, every page)

Specified in [conversion flows §2](website-conversion-flows.md#2-persistent-ask-noor-entry). Reuses the homepage `ASK` / `ASK_FREE` content and the existing Q&A block.
