# Codex Corpus

Canonical GitHub corpus for the TechnoBioFascia / Resonance / ARBP research constellation.

This repository preserves the project’s Drive-based research artifacts in a versioned, repo-friendly structure. It is **not** a single app repo: it is the **source corpus** that downstream tools can import from (Codex Companion, resonance planner UIs, frequency planners, ARBP log UIs, illustration prompt systems, etc.).

> **Evidence boundary:** this repo contains reference notes, somatic practice design, symbolic/traditional correspondence, and speculative experiment frameworks. It is **not** a medical/therapeutic product.

## Quick start (what to run)

### 1) Use the corpus as data
Downstream apps should import from these primary files (see `docs/APP_IMPORT_GUIDE.md`):

- `data/codex-index.json` — Codex navigation spine
- `data/body-region-schema.json` — body regions + practice links
- `data/frequency-library.json` — frequencies and correspondences
- `data/frequency-validation.json` — which frequency renderings are safe
- `data/temporal-frequency-planner.json` — time-of-day/ritual frequency prescription
- `data/instrument-frequency-practice-matrix.csv` — instrument ↔ frequency ↔ practice matrix
- `data/illustration-plate-catalog.json` — illustration plate IDs and links
- `data/arbp-protocol-schema.json` — ARBP log schema
- `templates/arbp-experiment-log.csv` — starter ARBP log export template

### 2) Validate joins + rendering policy (the “abilities” harness)
The repo includes a Node harness that checks whether the app-facing indexes join correctly and whether the planner can be rendered without unsafe frequency claims.

Run:

```bash
node tools/importer/harness.mjs --report
```

This writes:
- `tools/importer/harness-report.json`

### 3) Inspect claim boundaries
- `docs/CLAIM_LABELS.md` — label set + required boundaries
- `data/frequency-validation.json` — avoid/blocked wording constraints

## Codespaces / repo startup

This repo is intended to be opened in GitHub Codespaces or any VS Code dev environment that has **Node.js** available.

### Minimal prerequisites

- Node.js (tested on Node `v24.x`)

### Recommended: open the repo and use the importer harness

1. Open the repo in Codespaces.
2. In the terminal, run:

```bash
node tools/importer/harness.mjs --report
```

3. Review the output:
- `tools/importer/harness-report.json`

### What the harness checks (“repo abilities”)

The harness loads the primary app-facing JSON/CSV assets and validates join integrity:

- Codex entry body-region IDs resolve in `data/body-region-schema.json`.
- Codex entry frequency links resolve in `data/frequency-validation.json`.
- Codex illustration links resolve in `data/illustration-plate-catalog.json`.
- Temporal planner rows’ `recommended_hz` resolve in `data/frequency-validation.json`.
- If a planner row’s `recommended_hz` has no validation record, the harness applies a **graceful degradation policy** and suppresses any frequency claim.


## Current migration checkpoint

**Corpus metadata target:** `0.2.0`  
**Status:** structured migration checkpoint; not final public evidence-reviewed release.

This repo favors Markdown, JSON, and CSV over opaque binary dumping so the material can be inspected, imported, versioned, and validated.

## Corpus scope

This repo currently migrates and indexes the following Drive source set:

1. **TechnoBioFasciaCodex v0.1 — Living Reference**
2. **Unified Frequency Library — Cross-Engine Reference**
3. **Unified Creative Execution Plan — April 2026**
4. **Daily Practice Interface — Design Specification**
5. **ARBP.txt — Aqua-Resonance Bio-Programming framework**
6. **Scientific Illustration Series — Style Guide references**


## Repository structure

```text
codex-corpus/
├── README.md
├── CHANGELOG.md
├── docs/
│   ├── SOURCE_INVENTORY.md
│   ├── UNIFIED_CREATIVE_EXECUTION_PLAN.md
│   ├── DAILY_PRACTICE_INTERFACE_SPEC.md
│   ├── APP_IMPORT_GUIDE.md
│   ├── ARBP_FRAMEWORK.md
│   ├── CLAIM_LABELS.md
│   ├── NUMBERING_RECONCILIATION.md
│   ├── SCIENTIFIC_ILLUSTRATION_STYLE_GUIDE.md
│   └── TBFC_V0_1_ENTRY_MAP.md
├── codex/
│   ├── ENTRY_TEMPLATE.md
│   ├── ENTRY_STATUS.md
│   └── entries/
│       ├── 001-fascia.md
│       ├── 002-mechanotransduction.md
│       ├── 003-myofascial-meridians.md
│       ├── 004-tensegrity.md
│       ├── 005-extracellular-matrix.md
│       ├── 006-ground-substance.md
│       ├── 007-collagen-architecture.md
│       ├── 008-piezoelectricity.md
│       ├── 009-fascial-innervation.md
│       └── 010-interstitium.md
├── data/
│   ├── arbp-protocol-schema.json
│   ├── body-region-schema.json
│   ├── codex-index.json
│   ├── frequency-library.json
│   ├── frequency-validation.json
│   ├── illustration-plate-catalog.json
│   ├── instrument-frequency-practice-matrix.csv
│   ├── source-cross-validation.csv
│   ├── source-provenance.json
│   └── temporal-frequency-planner.json
└── templates/
    ├── arbp-experiment-log.csv
    └── illustration-prompt-template.md
```

## Evidence boundary

The corpus combines several knowledge categories:


- anatomy / biophysics reference notes
- somatic practice design language
- symbolic and traditional correspondence systems
- speculative ARBP experimental frameworks
- creative/interface design specifications

These categories must remain labeled. ARBP materials are archived as speculative experimental design and personal-research framework, not as validated medical, chemical, water-purification, or treatment claims.

Core boundary files:

- `docs/CLAIM_LABELS.md`
- `docs/NUMBERING_RECONCILIATION.md`
- `data/frequency-validation.json`
- `data/source-provenance.json`

## Downstream usage

This repository should feed:

- `symmetrical-goggles` / Resonance Codex Companion
- future Resonance Planner builds
- frequency-library components
- body-map and Codex browser components
- Aqua Lab / ARBP experiment-log interfaces
- scientific illustration prompt/style systems

Use `docs/APP_IMPORT_GUIDE.md` before syncing this corpus into an app. The app should not maintain competing hard-coded arrays for Codex entries, frequencies, body regions, plates, or ARBP fields.

## Current migrated assets

- App-ready Codex index for entries 001–010.
- Markdown entry files for entries 001–010.
- Body-region schema for planner/body-map integration.
- Temporal frequency planner.
- Frequency library and validation layer.
- Instrument-frequency-practice matrix.
- Source cross-validation sheet extraction.
- ARBP framework, protocol schema, and log template.
- Anatomica Invisibilia style guide and 20-plate catalog.
- App import guide for downstream integration.

## Remaining migration tasks

- Segment the full TBFC source into all 45 planned entries.
- Expand entries 001–010 from summary/draft level into full source-linked chapters.
- Export every workbook sheet as exact CSV and JSON.
- Add raw-source archive strategy if byte-faithful Drive binaries are required.
- Add per-entry frontmatter to all Markdown files.
- Sync the upgraded corpus into Resonance Codex Companion.
