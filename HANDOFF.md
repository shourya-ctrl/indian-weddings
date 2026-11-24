# Handoff: IndianWeddings website

Written 23 November 2026 for continuing this work from a new Claude account on the same Mac.
To resume, open this folder in Claude Code and say: "Read HANDOFF.md and continue."

## Where the work is

- **Repo:** `/Users/shouryawork/indian-weddings`, branch `website-ia-docs`.
- **Last commit:** `e38e246`. The branch has **5 commits that are not on GitHub** and no upstream.
- **Uncommitted:** 24 changed paths. This includes the whole illustrated Noor system. Commit only when the owner asks.
- **Run it:** `npm run dev`. Build the single-file Noor page with `npm run standalone`, which writes `standalone/indianweddings-noor.html`.

## What was built

- IA docs, every sitemap page, the condensed homepage, calmer type and motion, and a subtle astrology-sky backdrop.
- German translation workbook for Release 1a.
- **Noor:** personality, voice, emotional states and an eight-section `/noor` page.

## Noor: where to look

| What | Where |
|---|---|
| Identity, voice, art direction, generation prompt | `docs/noor/NOOR-IDENTITY.md` |
| State names, copy, alt text | `src/site/noor/states.js` |
| Illustration, mark and badge components | `src/site/noor/` |
| Page and styles | `src/pages/NoorPage.jsx`, `src/pages/noor-page.css` |
| Final artwork (7 transparent WebP files) | `src/assets/noor/states/` |
| Before and after screenshots, oil-pastel overview | `docs/noor/screens/` |

## Decisions to keep

- Noor never shows a complete face, and has no headshot or circular avatar.
- Art style is **premium modern oil pastel**. The owner rejected the earlier sticker look. No ink outlines, no sticker edge, no text in the art.
- Recurring details: cat-eye sunglasses, teal dupatta with gold border, jhumka, marigolds, kulhad of chai.
- Be honest about capabilities: never claim Noor books, takes payments or negotiates. Label demos and sample content.
- Do not invent vendor data or legal text.
- Do not redesign the homepage or change the brand.
- Keep motion subtle, headings restrained and pages breathable. No water-droplet pattern.
- Commit only when asked.

## Open items

- Check the Noor illustrations on a real phone. They were only verified at laptop width.
- Dreamer has a soft white glow behind the fabric. Regenerate it if the owner dislikes it.
- Confirm Figma's AI terms for commercial use before launch.
- The full-size PNG masters and the cut-out script were in temporary storage and are gone. The WebP files on the site are intact. The originals remain in the Figma file, and the cut-out method is in `NOOR-IDENTITY.md` §5.

## Outside this repo

- **Figma:** "Noor illustrations", https://www.figma.com/design/wlymRGhFdWGUU2KodQUEu1 (plan: "Teams sorted by Client"). Figma needs its own sign-in in the new account.
- **Persona explorations:** the published artifacts belong to the old account. Local copies are `docs/noor/noor-persona-directions.html` and `docs/noor/noor-persona-alternatives.html`.
- **Norevia** is a separate repo at `/Users/shouryawork/norevia-app`, on `main`, with 41 uncommitted paths. That includes the mobile Critical chip fix in `app/src/v12/shared/mobile.css`.
