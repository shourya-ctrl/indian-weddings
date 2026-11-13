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
| `src/links.js` | Call-to-action destinations, read from `VITE_APP_URL` and `VITE_SIGNIN_URL`. |
| `src/dc.js` | `DCLogic` base class plus the `sx` (CSS text to style object) and `arr` helpers. |
| `src/styles.css` | Global styles, keyframes and the design's hover, focus and active rules. |
| `src/fonts.css`, `public/fonts/` | Self-hosted Marcellus and Nunito Sans. |

## Options

The design's controls are props with the same defaults. Override them from the URL, for example
`/?heroStyle=Orbit&presenter=true`.

- `heroStyle`: `Cinematic` (default), `Mosaic`, `Orbit`, `Seam`, `Arch`, `Your sky`, `Petals`
- `presenter`: shows the hero switcher bar and the `[` `]` `1`–`7` keys (default `false`; add `?presenter=true` for design reviews)
- `heroSlides`, `motion`, `celestial`: `true` / `false`
- `sparkle`: `Subtle`, `Radiant`, `Off`
- `advisorName`: `Noor`, `Advisor`, `Best friend`, `Co-planner`

## Where the calls to action go

Set these in the deploy environment (Vercel → Settings → Environment Variables), then redeploy:

- `VITE_APP_URL`: the couples app. Every "Start planning", vendor card, open-date and real-wedding link goes here.
- `VITE_SIGNIN_URL`: sign-in, if it differs from the app URL. Defaults to `VITE_APP_URL`.

Until `VITE_APP_URL` is set, those links scroll to a short "opening soon" note under the final call to action instead of a missing page. See `src/links.js`.

## Known gaps carried over from the design

- Photography is hot-linked from ptaufiqphotography.com and Unsplash, licensed for design review only (as the footer says). Replace with self-hosted, licensed images before launch. If a hot-linked image fails to load, it is hidden and its tinted frame shows instead.
- The design referenced five local photos (`assets/website/sunset.jpg`, `couple1–3.jpg`, `mandap.jpg`) that were missing from the export. Photos from the same set stand in for them; see `NWA_IMG` in `src/landingLogic.js`.
