# Frontmatter schema — Codex entry Markdown

This repo uses `codex/entries/*.md` as the source of truth for human-readable chapters, and `data/codex-index.json` as the app-facing navigation spine.

## Format

Use **YAML frontmatter** at the top of each Markdown file:

```md
---
# fields...
---

# Markdown body starts here
```

## Required fields

These fields must exist and should be consistent with `data/codex-index.json` for the corresponding entry.

- `app_id` (string)
- `source_plan_id` (string)
- `slug` (string)
- `title` (string)
- `tags` (array of strings)
- `status` (string)
- `evidence_labels` (array of strings)
- `boundary_note` (string)

## Recommended fields

- `core_thesis` (string)
- `body_regions` (array of strings)
- `frequency_links_hz` (array of numbers)
- `practice_gate` (string)
- `illustration_links` (array of strings)
- `source_files` (array of strings)

## Notes

- The importer harness currently validates **joins** using `data/codex-index.json`, not Markdown frontmatter. Frontmatter is for documentation + editor tooling + human correctness.
- Keep evidence boundaries wording aligned with `docs/CLAIM_LABELS.md`.

