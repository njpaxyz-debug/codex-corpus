# Codex Corpus

Canonical GitHub corpus for the TechnoBioFascia / Resonance / ARBP research constellation.

This repository preserves the project’s Drive-based research artifacts in a versioned, repo-friendly structure. It is not a single app repo. It is the source corpus that downstream tools can read from: the Resonance Codex Companion, future body-map interfaces, frequency planners, ARBP notebooks, illustration systems, and related dashboards.

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
│   ├── ARBP_FRAMEWORK.md
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
│       └── 006-ground-substance.md
└── data/
    ├── codex-index.json
    ├── frequency-library.json
    ├── temporal-frequency-planner.json
    └── arbp-protocol-schema.json
```

## Evidence boundary

The corpus combines several knowledge categories:

- anatomy / biophysics reference notes
- somatic practice design language
- symbolic and traditional correspondence systems
- speculative ARBP experimental frameworks
- creative/interface design specifications

These categories must remain labeled. In particular, ARBP materials are archived as speculative experimental design and personal-research framework, not as validated medical, chemical, water-purification, or treatment claims.

## Downstream usage

This repository should feed:

- `symmetrical-goggles` / Resonance Codex Companion
- future Resonance Planner builds
- frequency-library components
- body-map and Codex browser components
- Aqua Lab / ARBP experiment-log interfaces
- scientific illustration prompt/style systems

## Immediate next migration tasks

- Import the full PDF text of TBFC v0.1 in segmented entry files.
- Expand entries 007–010.
- Convert the full Unified Frequency Library into CSV/JSON by sheet.
- Add scientific illustration style guide extraction.
- Add source provenance fields to every JSON record.
- Add validation levels for biophysical, traditional, anecdotal, contested, and speculative claims.
