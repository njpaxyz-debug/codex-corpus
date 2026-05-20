# TODO — Remaining TBFC → Codex Corpus Migration (0.2.0)

## 0) Establish frontmatter schema + entry metadata policy
- [x] Define YAML frontmatter schema (fields to include) consistent with `data/codex-index.json` + `codex/ENTRY_TEMPLATE.md`.
- [x] Implement frontmatter on `codex/entries/001-*.md` through `010-*.md`.
- [ ] Add consistency linter (optional) to ensure `app_id/source_plan_id/slug/title` match `data/codex-index.json`.



## 1) Expand entries 001–010 into full source-linked chapters
- [ ] Expand each section: Core Thesis, Biological Ground, Technological Mirror, Practice Gate.
- [ ] Populate “Source Stratum” with segmentation anchors (quote/paraphrase provenance placeholders if exact pages unavailable).
- [ ] Ensure Cross-References list is coherent and aligned to planned map.

## 2) Create entries 011–045 (incremental segmentation)
- [ ] Create TBFC segmentation manifest `docs/TBFC_SOURCE_SEGMENTATION_PLAN.md`.
- [ ] Generate entry markdown files for 011–020.
- [ ] Populate content for 011–020.
- [ ] Update `data/codex-index.json` for 011–020.
- [ ] Repeat for 021–030.
- [ ] Repeat for 031–045.

## 3) Workbook sheet exports (exact CSV + JSON per sheet)
- [ ] Identify all remaining workbook sources needing sheet-parity exports.
- [ ] Implement deterministic exporter under `tools/workbook-export/`.
- [ ] Export each workbook sheet to `data/workbooks/<id>/` as `.csv` and `.json` + `manifest.json`.
- [ ] (If needed) update primary import files to use sheet exports.

## 4) Raw-source archive strategy (byte-faithful if required)
- [ ] Document archive policy in `docs/RAW_SOURCE_ARCHIVE_STRATEGY.md`.
- [ ] Extend `docs/SOURCE_INVENTORY.md` with file hashes + archive status.

## 5) Sync into Resonance Codex Companion
- [ ] Implement `tools/sync/prepare-companion-payload.mjs` to assemble a `dist/` payload.
- [ ] Validate payload via `node tools/importer/harness.mjs --report`.
- [ ] Update changelog with completion state.

## 6) Final validation
- [ ] Run harness: `node tools/importer/harness.mjs --report`.
- [ ] Spot-check Markdown rendering for frontmatter correctness.

