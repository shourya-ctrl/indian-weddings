---
name: IndianWeddings
description: A considered way to plan a wedding that feels entirely yours.
colors:
  ink: "#0C0907"
  field: "#120E0B"
  surface: "#1A1411"
  line: "#241C17"
  line-strong: "#3E3229"
  stone-dim: "#8A8077"
  stone: "#9C9289"
  sand: "#C5BAB0"
  parchment: "#EDE3D3"
  ivory: "#F4EEE4"
  zari-gold: "#C9A96E"
  zari-highlight: "#E8D19A"
  on-ivory: "#1E1915"
  on-gold: "#150E06"
typography:
  display:
    fontFamily: "Marcellus, serif"
    fontSize: "clamp(42px, 6vw, 98px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Marcellus, serif"
    fontSize: "clamp(36px, 4.4vw, 68px)"
    fontWeight: 400
    lineHeight: 1.07
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Marcellus, serif"
    fontSize: "clamp(24px, 2.2vw, 30px)"
    fontWeight: 400
    lineHeight: 1.12
  body:
    fontFamily: "Nunito Sans, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(16px, 1.25vw, 19px)"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Nunito Sans, Avenir Next, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Nunito Sans, Avenir Next, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  hairline: "2px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 4vw, 56px)"
  container: "1320px"
  control: "44px"
components:
  button-primary:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.on-ivory}"
    rounded: "{rounded.hairline}"
    padding: "0 34px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.on-ivory}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.hairline}"
    height: "44px"
  link-underlined:
    textColor: "{colors.ivory}"
    padding: "15px 0 8px"
  input-field:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.hairline}"
    padding: "0 16px"
    height: "52px"
  tab-inactive:
    textColor: "{colors.stone-dim}"
  tab-active:
    textColor: "{colors.ivory}"
---

# Design System: IndianWeddings

## Overview

**Creative North Star: "The Lamplit Courtyard"**

The page is a haveli courtyard after dark. Deep ink surfaces hold the space, wedding photography opens in them like lit windows, and Zari Gold is used the way lamplight is: on edges, thresholds and small marks, never poured over a surface. Headlines are set in Marcellus, a carved, inscriptional serif, at generous size with slightly tight tracking. Everything else is quiet Nunito Sans.

Density is low and pacing is slow. Sections are tall, copy is short, and each section has one idea and one image or demonstration. Motion is ambient (a slow sparkle field, a sky canvas, Ken Burns drift on photographs) and stops entirely under reduced-motion preferences.

**Key Characteristics:**
- Dark only: one ink ground (#0C0907 family), no light theme.
- Square geometry: corners are 0 or a 2px hairline; arches are the only curves.
- Gold as accent: rules, focus rings, small labels, check marks.
- Photography carries the colour; the interface carries almost none.
- No shadows; depth comes from tone, photography and the fixed sky canvas.

## Colors

A near-monochrome warm-dark palette in which a single metallic accent does all the signalling.

### Primary
- **Zari Gold** (zari-gold): the accent, named for metallic embroidery thread. Section rules, focus rings, selected-tab underlines, check marks, the second word of the wordmark.
- **Zari Highlight** (zari-highlight): the lighter thread. Link text and hover states on dark ground.

### Neutral
- **Courtyard Ink** (ink): the page ground and the base of every overlay gradient.
- **Field** (field): text inputs, one step above the ground.
- **Raised Stone** (surface): image frames before photographs load, and the tint left when one fails.
- **Hairline** (line): dividers and the header's scrolled border.
- **Rule** (line-strong): borders on inputs, ghost buttons and cards.
- **Weathered Stone** (stone-dim): inactive tabs and struck-through figures. The lowest text tone allowed; 4.7:1 or better on every surface.
- **Stone** (stone): captions, labels, metadata.
- **Sand** (sand): secondary copy and footer text.
- **Parchment** (parchment): body copy.
- **Ivory** (ivory): headlines, primary text, the primary button fill.

### Named Rules
**The Gold Marks, Never Fills Rule.** Zari Gold appears on accents, rules, focus rings and small labels. It never fills a surface larger than a chip, and it never sets a paragraph.

**The Photography Carries Colour Rule.** Saturated colour enters only through photographs and the save-the-date template samples. Interface colour stays within ink, stone, ivory and gold.

## Typography

**Display Font:** Marcellus (with serif)
**Body Font:** Nunito Sans (with Avenir Next, system-ui, sans-serif)

**Character:** Marcellus brings carved, inscriptional capitals with soft flared terminals; Nunito Sans is round and calm beside it. The pairing reads ceremonial without becoming ornate.

### Hierarchy
- **Display** (400, clamp 42–98px, 1.02): the hero H1 only.
- **Headline** (400, clamp 36–68px, 1.07): section H2s. Often split into two sentences, the second in a quieter tone.
- **Title** (400, clamp 24–30px): card and feature titles (H3).
- **Body** (400, clamp 16–19px, 1.6): section ledes, max about 30em.
- **Body small** (400, 15px, 1.6): card copy, demo text, footer links.
- **Label** (700, 12px, 0.12–0.16em, uppercase): tags, save badges, meta lines. Never below 12px in interface text.

### Named Rules
**The One Serif Voice Rule.** Marcellus is used only at 24px and above, always at weight 400. Anything smaller or bolder is Nunito Sans.

## Layout

Content sits in a 1320px container with a fluid gutter (clamp 20–56px). Sections are tall (often near full viewport) with generous vertical padding, and alternate between full-bleed photography and text-led bands. The header is fixed at 72px, transparent over the hero and turning solid with a hairline after 24px of scroll.

Below 1140px the primary navigation collapses into a 44px menu button. Below 360px the header's "Start planning" button moves into the menu. Below 960px decorative motion (parallax, sticky hero sequences) is switched off. Every interactive target is at least 44px tall.

## Elevation & Depth

The system is flat. There are no box shadows. Depth comes from tonal steps (ink → field → surface), gradient scrims over photography, and the fixed sky and sparkle canvases that sit behind and in front of content.

### Named Rules
**The No Shadow Rule.** Separation is tone or a hairline, never a drop shadow.

## Shapes

Corners are square (0px) almost everywhere; buttons, inputs and ghost controls take a 2px hairline radius. Curves are reserved for architectural shapes: arched photo frames (999px 999px 0 0) and the circular orb and dots.

## Components

### Buttons
- **Shape:** hairline corners (2px).
- **Primary:** ivory fill, on-ivory text, 700 weight, 0.03em tracking; 56px tall in sections, 44px in the header.
- **Hover / Focus:** fill brightens to white; pressed state nudges down 1px; keyboard focus shows a 2px ivory outline offset 3px.
- **Ghost:** transparent with a translucent ivory border, ivory text; used for the menu button and media controls.

### Underlined links
- Text-weight links with a 1px rule beneath ("Explore the experience", "Read their wedding"). Padded to a 44px target. Hover shifts text and rule to Zari Highlight.

### Inputs / Fields
- **Style:** field background, rule border, hairline corners, 16px text, 52px tall.
- **Focus:** border turns Zari Gold.
- **Placeholder:** stone.

### Tabs
- Text tabs on a hairline rule. Inactive in weathered stone, active in ivory with a gold underline or arrow. Arrow keys, Home and End move between tabs. Keyboard focus shows a 2px gold outline.

### Navigation
- Fixed header, wordmark left ("INDIAN" in ivory, "WEDDINGS" in Zari Gold, Marcellus with wide tracking). Desktop links are 14px/600 parchment, gold on hover. Mobile opens a full-width panel of 26px Marcellus links, then full-width "Start planning" and "Sign in".

### Photo frame
- Photographs sit in raised-stone frames with fixed aspect ratios (4:5 for portraits) and object-fit cover, so layout never shifts while they load and a failed image leaves a tinted frame.

## Do's and Don'ts

### Do:
- **Do** use the `--iw-*` CSS variables from `src/styles.css` for every interface colour.
- **Do** keep Zari Gold to marks: rules, rings, labels, check marks.
- **Do** keep every control at least 44px tall and give it a visible `:focus-visible` outline.
- **Do** keep text at or above weathered stone (#8A8077) on dark ground.

### Don't:
- **Don't** add drop shadows or glass effects; use tone and hairlines.
- **Don't** fill large areas with gold or use it for paragraph text.
- **Don't** set Marcellus below 24px or above weight 400.
- **Don't** set interface text below 12px.
- **Don't** introduce a light theme or a second accent colour.
