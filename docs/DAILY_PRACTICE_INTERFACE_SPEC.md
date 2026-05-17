# Daily Practice Interface — Design Specification

Source: `Daily Practice Interface — Design Specification.docx`  
Drive ID: `14fPaYCF8x-AAUzLo--R6d_BRtfOQ_mtg`  
Product name: **The Resonance Planner**  
Version: 1.0  
Status: Active Development — Phase 1 MVP

## Product vision

The Resonance Planner is the convergence interface for the four core engines. It answers:

> What should I practice right now?

It synthesizes:

1. RPG Meditative / Astrolabe celestial timing.
2. Acoustic Resonance / Unified Frequency Library recommendations.
3. Meridian Maps body-region focus.
4. TechnoBioFasciaCodex somatic practice gates.

## Design lineage

- Single-page web application.
- Portrait-first and scrollable.
- Client-side only.
- No server dependency.
- Visual language inherited from Astrolabe.

## Visual system

| Role | Value |
|---|---|
| Background | Midnight `#07070f` |
| Primary accent | Gold `#c4a35a` |
| Typography | Georgia serif |
| Layout | centered mobile column |
| Architecture | single HTML file preferred for MVP |

## Information architecture

The interface has five vertical sections:

1. **Celestial Header** — real-time temporal compass.
2. **Today's Frequency Prescription** — primary/secondary frequency recommendation.
3. **Body Focus Map** — highlighted somatic region with tap-to-reveal detail.
4. **Session Builder** — Calibrate → Activate → Integrate timer/practice flow.
5. **Session Log & Streaks** — local practice history and export.

## Session arc

```text
Orient → Attune → Locate → Execute → Reflect
```

## Celestial Header

Displays:

- current time
- solar phase name
- sun sign
- moon phase with illumination
- planetary hour
- subtle time-of-day background shift

## Frequency prescription

The frequency engine should:

1. Look up current solar phase in the Temporal Frequency Planner.
2. Cross-reference convergence score.
3. Apply moon phase modifier where available.
4. Retrieve linked Codex practice gate.
5. Present play button using Web Audio API.

## Body Focus Map

The body map combines:

- time-of-day logic
- chakra/frequency correspondence
- moon phase modifier
- Codex practice gate
- meridian / Anatomy Trains overlay data

Minimum tappable regions:

- head / crown
- throat
- heart / chest
- solar plexus / core
- pelvis / sacral
- legs / root
- arms / hands

## Session Builder

Three-phase structure:

| Phase | Duration | Purpose |
|---|---:|---|
| Calibrate | 3–5 min | settle breath, orient nervous system, establish attention |
| Activate | 10–20 min | primary sound, movement, or stillness practice |
| Integrate | 3–5 min | grounding, reflection, optional journal |

## localStorage keys from spec

```text
resonance_planner_sessions
resonance_planner_streak
resonance_planner_settings
```

Current app implementation may use updated key names; this document preserves the original design spec.

## Phase 1 MVP targets

- celestial header
- frequency prescription
- tone playback
- three-phase session timer
- localStorage session logging
- streak tracking
- JSON export

## Phase 2 targets

- full interactive body silhouette
- dynamic region highlighting
- tap-to-reveal Codex detail panels
- Anatomy Trains / meridian overlays

## Phase 3 targets

- deep link to Astrolabe
- deep link to Digital Altar
- shared session data format
- unified settings panel

## Accessibility requirements

- 44px minimum primary touch targets
- screen-reader labels for body map regions
- visual waveform when tone plays
- reduced-motion support
- color contrast above WCAG AA where possible

## Repo integration

This spec feeds:

- `data/frequency-library.json`
- `data/temporal-frequency-planner.json`
- `data/codex-index.json`
- `codex/entries/*`
- Resonance Codex Companion app builds
