# App Import Guide — Resonance Codex Companion

This guide explains how downstream apps should consume `codex-corpus` without reintroducing overlapping hard-coded arrays.

## Primary import files

| File | Purpose |
|---|---|
| `data/codex-index.json` | canonical app-facing Codex entries |
| `data/body-region-schema.json` | body-map regions and practice links |
| `data/frequency-library.json` | main frequency/correspondence library |
| `data/frequency-validation.json` | safe wording, blocked wording, validation status |
| `data/temporal-frequency-planner.json` | time-of-day practice planner |
| `data/instrument-frequency-practice-matrix.csv` | sound tool and practice matrix |
| `data/illustration-plate-catalog.json` | plate IDs and visual/codex cross-links |
| `data/arbp-protocol-schema.json` | ARBP log schema |
| `templates/arbp-experiment-log.csv` | starter ARBP log export |

## Import rule

The app should treat `data/codex-index.json` as the navigation spine.

Every rendered Codex card should display or internally carry:

```json
{
  "app_id": "008",
  "source_plan_id": "008",
  "slug": "piezoelectricity",
  "title": "Piezoelectricity of Bone and Connective Tissue",
  "evidence_labels": ["BIOPHYSICAL", "ANATOMICAL", "PRACTICE_BASED", "CONTESTED_BOUNDARY", "NOT_MEDICAL"],
  "boundary_note": "Piezoelectricity is a real material principle; broad therapeutic claims require separate evidence and are not asserted here."
}
```

## Rendering requirements

### Required on every Codex card

- title
- short thesis
- body-region links
- practice gate
- evidence labels
- boundary note

### Required before rendering a frequency claim

The app must check `data/frequency-validation.json`.

Do not render an unsupported frequency claim unless a validation object exists.

### Required before rendering ARBP tools

The app must show:

```text
Exploratory personal-research log only. Not medical advice. Not water purification. Not water-safety testing.
```

## Recommended data joins

### Codex card joins

```text
codex-index.entries[n].body_regions
  → body-region-schema.regions[id]
```

```text
codex-index.entries[n].frequency_links_hz
  → frequency-library + frequency-validation
```

```text
codex-index.entries[n].illustration_links
  → illustration-plate-catalog.plates[id]
```

### Practice planner joins

```text
time of day / planetary hour / moon phase
  → temporal-frequency-planner
  → recommended frequency
  → frequency-validation
  → body-region-schema
  → codex-index
```

## Boundary enforcement pseudocode

```js
function canRenderFrequencyClaim(hz, claimText) {
  const record = frequencyValidation.frequencies.find(f => f.hz === hz);
  if (!record) return false;

  const blocked = record.avoid_wording
    .toLowerCase()
    .split(/[,.;]| or | and /)
    .map(s => s.trim())
    .filter(Boolean);

  return !blocked.some(term => claimText.toLowerCase().includes(term));
}
```

## Anti-overlap rule

Do not maintain separate copies of these arrays inside the app:

- codex entries
- frequency definitions
- body regions
- illustration plate definitions
- ARBP schema fields

Import from this corpus or paste from this corpus with a version label.

## Current corpus version target

`metadata_version`: `0.2.0`

This is a structured migration checkpoint, not a final public evidence-reviewed release.
