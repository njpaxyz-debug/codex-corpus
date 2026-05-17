# Anatomica Invisibilia — Plate Prompt Template

Use this template for generating or commissioning a new plate while preserving the Scientific Illustration Series style system.

## Master prompt

Create a historical scientific illustration plate in the **Anatomica Invisibilia** series, titled:

```text
PLATE [ROMAN] — [TITLE]
```

The image should depict:

```text
[SUBJECT DESCRIPTION]
```

Style requirements:

- 19th-century anatomical/naturalist plate fusion.
- Influences: Vesalian anatomical rigor, Haeckel-style biological symmetry, Gray's Anatomy callout clarity.
- Central specimen occupies 60–70% of the image.
- Background is aged parchment, not white: warm gradient `#F5F0E6` to `#E8DCC8`.
- Weighted ink lines with visible hierarchy: 0.15mm–0.8mm equivalent.
- Hatching follows tissue fiber orientation.
- Stippling used for ground substance, cellular environment, or field effects.
- Callout lines are thin, clean, non-crossing, and connect to margin annotations.
- Typography appears in serif small caps / italic, dark sepia or Anatomical Red only.
- No pure black typography.
- Series title along bottom margin: `ANATOMICA INVISIBILIA`.
- Plate number upper-left in Anatomical Red.

Palette:

- Anatomical Red `#8B3A3A`
- Fascia Gold `#C4A35A`
- Bone White `#F5F0E6`
- Nerve Blue `#3A5A8B`
- Visceral Purple `#6B3A6B`
- Ground Substance Amber `#D4A034`
- Living Green `#4A6B3A`
- Meridian Cyan `#2A8B8B`
- Frequency Violet `#5A3A8B`
- Inflammation Orange `#C45A2A`
- Dark Sepia `#3A2A1A`

Rendering vocabulary to include:

```text
[COLLAGEN / ELASTIN / GROUND SUBSTANCE / NERVE FIBERS / BLOOD VESSELS / ENERGY FIELD / BOTANICAL ELEMENTS / OTHER]
```

Scientific labels to include:

```text
[LABEL 1]
[LABEL 2]
[LABEL 3]
[LABEL 4]
[LABEL 5]
```

Composition:

```text
[FRONTAL FULL BODY / MICROSCOPIC ZOOM / CUTAWAY / CROSS-SECTION / SPLIT PLATE / LANDSCAPE / CAPSTONE COMPOSITE]
```

Output target:

- 11 × 14 inch fine-art plate ratio.
- 300 DPI print-ready composition.
- Leave one-inch visual border.
- Do not make it look like modern glossy medical stock art.
- Do not use neon colors.
- Do not use flat vector cartoon rendering.
- Do not omit labels.
- Do not crowd the central specimen.

## Coloring-book variant toggle

For a coloring-book edition, use this transformation:

- Remove color washes.
- Preserve clean black/brown sepia line art.
- Keep labels and callouts.
- Reduce stippling density by 50%.
- Keep major anatomical shapes bold and readable.
- Convert botanical/anatomical textures into open fillable regions.
- Preserve 11 × 14 inch page ratio.

## App metadata fields

```json
{
  "plate_id": "plate_[roman]_[slug]",
  "codex_links": ["001"],
  "palette_keys": ["fascia_gold", "nerve_blue"],
  "rendering_focus": ["collagen_fibers"],
  "claim_boundary": "Creative anatomical illustration, not diagnostic imagery."
}
```
