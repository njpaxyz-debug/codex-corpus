# Codex Astrolabe App

Separated React/Vite application rebuilt from `codex compiled code astrolabe_.md`. It lives in the corpus repo at `apps/codex-astrolabe/` and opens as a pocket field-guide with Learn, Geometry, Field, Compass, Matrix, and Index tabs.

## Codespaces

1. Open `njpaxyz-debug/codex-corpus` on GitHub.
2. Choose **Code → Codespaces → Create codespace on main**.
3. In the Codespace terminal run:

```bash
cd apps/codex-astrolabe
npm install
npm run verify
npm run dev
```

4. Open the forwarded Vite port. The dev script uses `vite --host 0.0.0.0`, so the Codespaces preview can load the app.

## Local run

```bash
cd apps/codex-astrolabe
npm install
npm run verify
npm run dev
```

## Scripts

- `npm run check:syntax` parses JS/JSX with TypeScript.
- `npm run test:engines` checks the calculation/search/validation modules.
- `npm run debug` runs syntax + engine checks.
- `npm run build` creates the production bundle.
- `npm run verify` runs debug + build.

## What was fixed

- Reconstructed the truncated `App.jsx` navigation.
- Removed markdown escape artifacts from the uploaded dump.
- Split app logic into data, library, UI, feature, and tool modules.
- Added Codespaces-ready run instructions.
- Added guarded localStorage/UUID handling.
- Added symbolic scaffold data so every tab renders until the full workbook export is attached.

## Evidence boundary

Correspondences, merkabah mappings, astrolabe mappings, and field scores are treated as symbolic, historical, pedagogical, or speculative models. The app does not claim medical, physical, therapeutic, or validated sensor diagnostics.
