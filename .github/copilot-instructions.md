# Copilot Cloud Agent Instructions for `joiellantero/picksy`

## Project at a glance
- Stack: React 19 + Vite 8 + Tailwind CSS 4 + Jotai.
- App purpose: client-side random name picker (list mode + spin wheel mode).
- Entry points:
  - `src/index.jsx`
  - `src/App.jsx`
- Main user page: `src/pages/Home.jsx`.

## Fast, reliable workflow
1. Install dependencies first: `npm install`
2. Start dev server: `npm run dev`
3. Validate production build: `npm run build`

Notes:
- There is no lint script and no test script in `package.json`.
- Build output is `dist/` (configured in `vite.config.js`).

## Source map for common changes
- Global persisted state atoms: `src/shared/globalState.js`
- Name picking + mode toggle container: `src/components/Wheel.jsx`
- Canvas spin wheel implementation: `src/components/SpinWheel.jsx`
- Name input/upload UI: `src/components/List.jsx` and `src/components/FileUpload.jsx`
- Navigation components actively used: `src/components/Nav/*`

## Conventions and pitfalls
- `namesListState` is stored as a newline-delimited string in localStorage (not an array in practice); preserve that format when editing related logic.
- `winnerMessageState` is initialized as `[]` but used as text in components; keep compatibility with current checks unless intentionally refactoring.
- App is fully client-side; avoid introducing server dependencies for normal feature work.
- Tailwind styling is mostly inline class-based in JSX; follow existing style patterns.

## Documentation drift to be aware of
`README.md` has stale setup details (e.g., `npm start`, React/Recoil versions, and `build/` output references). Treat actual scripts/config in `package.json` and `vite.config.js` as source of truth.

## Errors encountered during onboarding and workarounds
1. **Error:** `npm run build` initially failed with `sh: 1: vite: not found`.
   - **Cause:** dependencies were not installed yet.
   - **Workaround:** run `npm install` first, then rerun `npm run build`.
2. **Build warning (non-blocking):** Vite reports a large chunk (>500 kB) after minification.
   - **Current handling:** warning only; build succeeds.
