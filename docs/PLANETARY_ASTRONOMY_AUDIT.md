# Planetary Astronomy + Astrology Audit

Status: v0.2 precision audit  
Scope: Unified Frequency Library, Temporal Frequency Planner, astrology/celestial correspondences, and downstream Resonance Codex Companion import logic.

## Immediate finding

The corpus had useful planetary/celestial correspondences, but it was missing the layer that explains **which astronomical period produced each audible frequency**. That is the main precision vacuum.

A frequency such as `210.42 Hz` is not a raw astronomical vibration. It is an octave-transposed value derived from a very low astronomical cycle. Therefore each value must carry:

```json
{
  "astronomical_period_days": 29.530588853,
  "period_type": "mean_synodic_month",
  "base_frequency_hz": "1 / period_seconds",
  "octave_transposition": 29,
  "audible_frequency_hz": 210.42,
  "correspondence_layer": "symbolic/practice, not physical emission"
}
```

## What was incomplete

### 1. Planetary frequency values lacked period provenance

The values were present, but several did not specify whether they came from:

- sidereal orbital period;
- synodic cycle;
- rotation period;
- tropical/seasonal year;
- symbolic source table;
- octave convention from another frequency tradition.

### 2. Moon value needed explicit synodic vs sidereal distinction

`210.42 Hz` corresponds to the **mean synodic month** transposed by octave. That is the lunar phase cycle, not the Moon's sidereal orbital period.

Recommended handling:

- `Moon Synodic` → phase/lunar-practice layer.
- `Moon Sidereal` → orbital/star-background layer, optional supplemental value.

### 3. Sun value needed caution

`126.22 Hz` is common in cosmic-octave style tables, but the Sun does not have a single solid-body rotation period. Solar rotation is differential: equatorial and polar regions rotate at different rates. Treat the value as a **symbolic/corpus source value**, not a definitive solar physical constant.

### 4. Venus, Uranus, Neptune values need octave-choice notes

These are mathematically consistent if the corpus chooses a higher audible octave:

- Venus: lower computed octave around `110.61 Hz`; corpus uses `221.23 Hz`.
- Uranus: lower computed octave around `103.67 Hz`; corpus uses `207.36 Hz`.
- Neptune: lower computed octave around `105.71 Hz`; corpus uses `211.44 Hz`.

This is acceptable, but the octave choice must be explicit.

### 5. Pluto was not fully normalized

Pluto appeared in source-cross-validation as missing/no value. If included as a modern astrology / dwarf-planet correspondence, use approximately `140.25 Hz` under the standard cosmic-octave convention, with a period-dependent approximation note.

### 6. Astrology was not separated from astronomy

The corpus must not merge astronomy and astrology into one factual layer.

Recommended layers:

| Layer | Status |
|---|---|
| Astronomy | measurable periods, rotations, orbits, phases |
| Octave correspondence | mathematical transposition into audible range |
| Astrology | symbolic/traditional interpretive mapping |
| App practice | user-facing reflection prompts, not claims |

### 7. Tropical zodiac vs IAU constellation zodiac was not documented

For app use, astrology should be tagged as `tropical_western`, `sidereal`, `vedic`, `traditional_western`, or `modern_western` as applicable. Do not treat the 12 astrological signs as identical to astronomical constellations.

## Audit status by value

| Body / cycle | Current corpus value | Audit status | Action |
|---|---:|---|---|
| Earth Year / OM | 136.10 Hz | mathematically consistent | keep; label sidereal/tropical convention |
| Earth Day | 194.18 Hz | mathematically consistent for 24h solar day | keep; distinguish sidereal day if added |
| Moon Synodic | 210.42 Hz | mathematically consistent | keep; label as phase cycle |
| Mercury | 141.27 Hz | mathematically consistent | keep |
| Venus | 221.23 Hz | mathematically consistent at higher octave | keep; document octave choice |
| Mars | 144.72 Hz | mathematically consistent | keep |
| Jupiter | 183.58 Hz | mathematically consistent | keep |
| Saturn | 147.85 Hz | mathematically consistent | keep |
| Uranus | 207.36 Hz | mathematically consistent at higher octave | add to validation layer |
| Neptune | 211.44 Hz | mathematically consistent at higher octave | add to validation layer |
| Pluto | ~140.25 Hz | acceptable supplemental modern/dwarf-planet value | add only with dwarf-planet boundary |
| Sun | 126.22 Hz | source/corpus value; solar rotation is differential | keep only with caution |
| Platonic Year | 172.06 Hz | corresponds to ~25,920-year precession convention | keep as symbolic long-cycle value |

## Astrology correspondence policy

Use two rulership systems:

### Traditional Western rulerships

| Planet | Signs |
|---|---|
| Sun | Leo |
| Moon | Cancer |
| Mercury | Gemini, Virgo |
| Venus | Taurus, Libra |
| Mars | Aries, Scorpio |
| Jupiter | Sagittarius, Pisces |
| Saturn | Capricorn, Aquarius |

### Modern Western additions

| Planet | Sign |
|---|---|
| Uranus | Aquarius |
| Neptune | Pisces |
| Pluto | Scorpio |

The app should display these as symbolic/traditional metadata, not astronomical facts.

## App-safe wording

Use:

- “planetary correspondence”
- “symbolic timing layer”
- “octave-transposed astronomical period”
- “traditional rulership”
- “modern rulership”
- “practice association”

Avoid:

- “planet emits this healing frequency”
- “this frequency is scientifically proven to affect the body”
- “astrology proves biological timing”
- “Sun frequency” without defining the period source

## Files added in this audit pass

- `docs/PLANETARY_ASTRONOMY_AUDIT.md`
- `data/planetary-correspondence-audit.json`
- `data/astrology-correspondence-table.json`

## Next required app migration

The Resonance Codex Companion should import `data/planetary-correspondence-audit.json` before rendering any celestial/frequency card. The frequency label should show at least:

```text
Moon Synodic — 210.42 Hz
Derived from: mean synodic month, octave +29
Layer: symbolic/practice correspondence, not physical emission
```
