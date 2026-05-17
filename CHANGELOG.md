# Changelog

## 2026-05-17 — Initial Drive-to-GitHub migration

Initialized `codex-corpus` as the canonical corpus repository for TechnoBioFascia / Resonance / ARBP source material.

### Added

- `README.md`
- `docs/SOURCE_INVENTORY.md`
- `docs/TBFC_V0_1_ENTRY_MAP.md`
- `docs/ARBP_FRAMEWORK.md`
- `docs/DAILY_PRACTICE_INTERFACE_SPEC.md`
- `docs/UNIFIED_CREATIVE_EXECUTION_PLAN.md`
- `codex/ENTRY_TEMPLATE.md`
- `codex/ENTRY_STATUS.md`
- `codex/entries/001-fascia.md`
- `codex/entries/002-mechanotransduction.md`
- `codex/entries/003-myofascial-meridians.md`
- `codex/entries/004-tensegrity.md`
- `codex/entries/005-extracellular-matrix.md`
- `codex/entries/006-ground-substance.md`
- `data/codex-index.json`
- `data/frequency-library.json`
- `data/temporal-frequency-planner.json`
- `data/arbp-protocol-schema.json`

### Notes

This first migration favors structured Markdown and JSON over opaque binary transfer. Full original PDF/DOCX/XLSX extraction remains pending for some source files.

### Known gaps

- Full TBFC source text not yet fully segmented.
- Original 45-entry planned numbering and six-entry sprint numbering need reconciliation.
- Frequency workbook is partially extracted into JSON; per-sheet CSV exports are not yet complete.
- Scientific Illustration Series style guide still needs extraction.
- ARBP is summarized and schema-mapped; full dissertation text is not yet committed.
