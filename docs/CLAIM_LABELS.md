# Claim Labels and Evidence Boundary Guide

This repository mixes anatomical reference, somatic practice, traditional correspondence systems, speculative experiment design, and creative interface work. Every app-facing entry should include explicit claim labels.

## Label set

| Label | Meaning | Allowed use |
|---|---|---|
| `ANATOMICAL` | conventional anatomy or histology concept | body structures, tissue layers, receptor categories |
| `BIOPHYSICAL` | physical or biological principle with scientific grounding | mechanotransduction, tensile loading, vibration, piezoelectric material behavior |
| `PRACTICE_BASED` | movement, breath, journaling, or self-observation protocol | body scans, sound practices, reflective logs |
| `TRADITIONAL` | traditional or historical correspondence system | chakras, meridians, planetary timing, mantra systems |
| `ANECDOTAL` | reported use without strong validation | many Solfeggio interpretations, subjective practice effects |
| `CONTESTED` | claim has disagreement, weak evidence, or known overclaim risk | DNA-repair frequency claims, broad therapeutic claims |
| `SPECULATIVE` | hypothesis or creative-research construct | ARBP, water-programming, ritual-sequence models |
| `EXPERIMENTAL` | proposed test protocol, not proven result | measurements, logs, trial design |
| `PERSONAL_LOG_ONLY` | self-tracking only; not generalizable | journals, dream logs, subjective observations |
| `NOT_MEDICAL` | explicit medical boundary | all practice, frequency, and ARBP interfaces |
| `NOT_WATER_SAFETY` | water experiments cannot establish potability or safety | all ARBP sample work |

## Required boundaries by content type

| Content type | Required labels |
|---|---|
| Codex anatomical entry | `ANATOMICAL`, plus `BIOPHYSICAL` where appropriate |
| Practice gate | `PRACTICE_BASED`, `NOT_MEDICAL` |
| Meridian/chakra/planetary overlay | `TRADITIONAL`, optionally `ANECDOTAL` |
| Solfeggio frequency | `ANECDOTAL` or `CONTESTED`, depending on claim |
| ARBP protocol | `SPECULATIVE`, `EXPERIMENTAL`, `PERSONAL_LOG_ONLY`, `NOT_MEDICAL`, `NOT_WATER_SAFETY` |
| Illustration plate | `CREATIVE_REFERENCE` plus source-entry labels where applicable |

## App wording rules

Use:

- “associated with”
- “practice correspondence”
- “symbolic mapping”
- “exploratory log”
- “self-observation”
- “not diagnostic”
- “not medical advice”

Avoid:

- “heals”
- “cures”
- “repairs DNA” as a factual app claim
- “purifies water”
- “treats disease”
- “proves frequency effect”

## Example app-safe wording

Unsafe:

> 528 Hz repairs DNA.

Safer:

> 528 Hz is commonly associated with transformation in Solfeggio-based practice systems. Biological repair claims are contested and should not be treated as established.

Unsafe:

> This water protocol changes molecular structure.

Safer:

> This protocol logs sound, intention, and sample conditions for exploratory comparison. It does not establish safety, purification, or therapeutic effect.

## Minimum metadata for each entry

```json
{
  "id": "008",
  "title": "Piezoelectricity of Bone and Connective Tissue",
  "labels": ["BIOPHYSICAL", "ANATOMICAL", "PRACTICE_BASED", "CONTESTED_BOUNDARY"],
  "boundary_note": "Biophysical principle with strict caution around therapeutic extrapolation."
}
```
