# TBFC Numbering Reconciliation

## Problem

The current corpus contains two overlapping numbering systems:

1. **Original planned 45-entry map** from `TechnoBioFasciaCodex v0.1`.
2. **Written-entry migration sequence** used during April/May 2026 corpus construction.

This creates a precision vacuum: the same concept may occupy different numerical slots depending on whether the source is the planned table of contents or the written entry stream.

## Canonical decision for this repository

For app-facing files, this repository currently uses the **written-entry migration sequence**:

| App-facing ID | Current title | Source relationship |
|---:|---|---|
| 001 | Fascia | TBFC Entry Zero / first written entry |
| 002 | Mechanotransduction | planned as 011 in the original map |
| 003 | Myofascial Meridians | planned as 029 in the original map |
| 004 | Tensegrity | originally planned as 002 but written later as 004 |
| 005 | Extracellular Matrix | originally planned as 003 but written later as 005 |
| 006 | Ground Substance | originally planned as 005 but written later as 006 |
| 007 | Collagen Architecture | returns to planned Domain A sequence |
| 008 | Piezoelectricity | planned Domain A / Resonance bridge |
| 009 | Fascial Innervation | planned Domain A / Signal bridge |
| 010 | Interstitium | planned Domain A / Fluid architecture bridge |

## Original planned map conflict examples

| Concept | Original planned number | Current repo number |
|---|---:|---:|
| Tensegrity | 002 | 004 |
| Extracellular Matrix | 003 | 005 |
| Ground Substance | 005 | 006 |
| Mechanotransduction | 011 | 002 |
| Myofascial Meridians | 029 | 003 |

## Recommended final architecture

Use two IDs for every entry:

```json
{
  "app_id": "002",
  "source_plan_id": "011",
  "slug": "mechanotransduction",
  "title": "Mechanotransduction",
  "status": "migrated_summary"
}
```

This preserves both:

- **source fidelity** to the original TBFC table of contents;
- **app continuity** for the already-built Resonance Codex Companion.

## Files affected

- `data/codex-index.json`
- `codex/ENTRY_STATUS.md`
- `docs/TBFC_V0_1_ENTRY_MAP.md`
- individual `codex/entries/*.md`
- future app imports in `symmetrical-goggles` / Resonance Codex Companion

## Decision status

Temporary decision made: keep app-facing sequence stable for now.

Final decision still needed before a public v1.0 tag:

1. Keep app IDs as current written sequence and store original planned IDs as metadata.
2. Re-number everything to match the original 45-entry plan.
3. Use semantic slugs only and demote numeric IDs to display ordering.

Preferred option: **1**.
