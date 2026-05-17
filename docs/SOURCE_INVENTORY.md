# Source Inventory

This inventory records the Drive artifacts migrated into `codex-corpus` and identifies how each should be represented in GitHub.

## Primary Drive sources

| Source | Drive ID | Drive title | Migrated role | Repo representation |
|---|---:|---|---|---|
| TBFC v0.1 | `1xwhXoJN8fETeVpSI1pKMtnYBXNWJd9o2` | `TechnoBioFasciaCodex v0.1 — Living Reference.pdf` | Foundational Codex reference | `docs/TBFC_V0_1_ENTRY_MAP.md`, `codex/entries/*`, `data/codex-index.json` |
| Unified Frequency Library | `1GWcKwZdgqjVmf9m98sdTK_Ka2JOWBCNb` | `Unified Frequency Library — Cross-Engine Reference.xlsx` | Structured frequency data | `data/frequency-library.json`, `data/temporal-frequency-planner.json` |
| Unified Creative Execution Plan | `1ShQZ0uYcPTByBNteJX2v3XYr3hzWsSDN` | `Unified Creative Execution Plan - April 2026 (1).docx` | Project operating blueprint | `docs/UNIFIED_CREATIVE_EXECUTION_PLAN.md` |
| Daily Practice Interface | `14fPaYCF8x-AAUzLo--R6d_BRtfOQ_mtg` | `Daily Practice Interface — Design Specification.docx` | Resonance Planner spec | `docs/DAILY_PRACTICE_INTERFACE_SPEC.md` |
| ARBP | `1ICo-Hk5Tv5mA50t4m9brmFUNPzRBeLZI` | `ARBP.txt` | Aqua-Resonance Bio-Programming framework | `docs/ARBP_FRAMEWORK.md`, `data/arbp-protocol-schema.json` |
| Scientific Illustration Style Guide | `18wb3H-5MyQtT_lTb6H-BDA_bofxmmUDF` / `1uFMJnH4UKnXT8n3Bcks5jdHdYXB5c4yh` | `Scientific Illustration Series — Style Guide` | Visual style reference | pending extraction |

## Migration strategy

The GitHub corpus should avoid opaque Drive dumps where possible. Each source is converted into one or more of the following:

1. **Human-readable Markdown** for reference, planning, and editorial work.
2. **Machine-readable JSON** for app builds and downstream tools.
3. **Entry-level Markdown** for TBFC Codex entries.
4. **Schema files** for experimental logging and app integration.

## Claim taxonomy

Every migrated item should eventually receive one or more claim/evidence labels:

- `BIOPHYSICAL`
- `ANATOMICAL`
- `PRACTICE_BASED`
- `TRADITIONAL`
- `ANECDOTAL`
- `CONTESTED`
- `SPECULATIVE`
- `EXPERIMENTAL`
- `PERSONAL_LOG_ONLY`

## Current migration state

| Area | Status |
|---|---|
| Repo initialized | complete |
| README | complete |
| Source inventory | complete |
| TBFC entry map | in progress |
| Entries 001–006 | in progress |
| Frequency JSON | in progress |
| Temporal planner JSON | in progress |
| ARBP framework | in progress |
| ARBP protocol schema | in progress |
| Scientific illustration extraction | pending |
