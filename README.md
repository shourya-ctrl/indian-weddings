# IndianWeddings landing page

React + Vite build of the Claude Design file **IndianWeddings Premium Landing Page V5**.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Structure

| File | What it holds |
| --- | --- |
| `src/LandingView.jsx` | All markup, converted one-to-one from the design template. Reads every value from `v`. |
| `src/landingLogic.js` | Page behaviour from the design: state, scroll and reveal effects, hero variants, Noor demo, canvases. `renderVals()` builds `v`. |
| `src/Landing.jsx` | Hosts the logic object and re-renders the view when its state changes. |
| `src/dc.js` | `DCLogic` base class plus the `sx` (CSS text to style object) and `arr` helpers. |
| `src/styles.css` | Global styles, keyframes and the design's hover, focus and active rules. |
| `src/fonts.css`, `public/fonts/` | Self-hosted Marcellus and Nunito Sans. |

## Options

The design's controls are props with the same defaults. Override them from the URL, for example
`/?heroStyle=Orbit&presenter=false`.

- `heroStyle`: `Cinematic` (default), `Mosaic`, `Orbit`, `Seam`, `Arch`, `Your sky`, `Petals`
- `presenter`: shows the hero switcher bar and the `[` `]` `1`–`7` keys (default `true`; set `false` for production)
- `heroSlides`, `motion`, `celestial`: `true` / `false`
- `sparkle`: `Subtle`, `Radiant`, `Off`
- `advisorName`: `Noor`, `Advisor`, `Best friend`, `Co-planner`

## Known gaps carried over from the design

- "Sign in" and "Start planning" link to `IndianWeddings%20Couples%20Web%20App%20V2.html`, the design's couples app, which is not part of this build.
- Photography is hot-linked from ptaufiqphotography.com and Unsplash, licensed for design review only (as the footer says).
- The design referenced five local photos (`assets/website/sunset.jpg`, `couple1–3.jpg`, `mandap.jpg`) that were missing from the export. Photos from the same set stand in for them; see `NWA_IMG` in `src/landingLogic.js`.
