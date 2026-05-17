# Codex Entry Status

This status file tracks the app-facing written-entry sequence used by the current Resonance Codex Companion and sprint documents.

## Numbering rule

Each entry should now carry both:

- `app_id` — stable identifier used by the app and repo file names.
- `source_plan_id` — original TBFC planned-map identifier where known.

| App ID | Source Plan ID | Title | Source status | Repo status | Priority |
|---:|---:|---|---|---|---|
| 001 | 001 | Fascia: The Body's Undernet | complete in TBFC v0.1 | migrated summary | refine full source text |
| 002 | 011 | Mechanotransduction: How Touch Becomes Signal | complete in TBFC v0.1 | migrated summary | refine full source text |
| 003 | 029 | Myofascial Meridians: Where Anatomy Trains Meet Energy Lines | complete in TBFC v0.1 | migrated summary | refine full source text |
| 004 | 002 | Tensegrity: The Architecture of Aliveness | complete in sprint notes | migrated summary | expand from source notes |
| 005 | 003 | Extracellular Matrix: The Body's Living Scaffold | complete in sprint notes | migrated summary | expand from source notes |
| 006 | 005 | Ground Substance: The Body's Liquid Crystal | complete in sprint notes | migrated summary | expand from source notes |
| 007 | 004 | Collagen Architecture: Cables of the Living Bridge | planned / inferred from map | next-pass expansion draft | verify against full source |
| 008 | 008 | Piezoelectricity of Bone and Connective Tissue | planned | next-pass expansion draft | verify evidence boundaries |
| 009 | 009 | Fascial Innervation: The Sensory Web | planned | next-pass expansion draft | verify receptor taxonomy |
| 010 | 010 | Interstitium: The Organ That Wasn't | planned | next-pass expansion draft | verify anatomical language |

## Current app-ready state

- `data/codex-index.json` now includes app metadata for entries 001–010.
- Entries 007–010 exist as Markdown expansion drafts.
- Claim-boundary metadata exists in `docs/CLAIM_LABELS.md`.
- Numbering policy is documented in `docs/NUMBERING_RECONCILIATION.md`.

## Remaining editorial work

Before public release:

1. Segment the full TBFC source into all planned entries.
2. Add source quotations or paraphrase citations where appropriate.
3. Add `source_plan_id` frontmatter to every individual Markdown entry.
4. Decide whether the public-facing ordering should show app IDs, source-plan IDs, or both.
5. Update downstream apps consuming entry IDs.

## Editorial warning

The original TBFC v0.1 PDF table of contents and later sprint-written-entry numbering are not fully aligned. The repo currently prioritizes the app-facing written-entry sequence while preserving source-plan IDs as metadata.
