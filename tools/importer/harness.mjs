#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());

const PRIMARY_IMPORT_FILES = [
  'data/codex-index.json',
  'data/body-region-schema.json',
  'data/frequency-library.json',
  'data/frequency-validation.json',
  'data/temporal-frequency-planner.json',
  'data/instrument-frequency-practice-matrix.csv',
  'data/illustration-plate-catalog.json',
  'data/arbp-protocol-schema.json',
  'templates/arbp-experiment-log.csv',
];

function normalizeHzForComparison(hz) {
  // Return:
  // - exactNumber: as-is if number
  // - stringForm: original if number/string
  // - normalizedNumber: rounded to 2 decimals (corpus target mostly 2) for “rounding issue” reporting.
  if (typeof hz === 'number' && Number.isFinite(hz)) {
    return {
      originalType: 'number',
      originalValue: hz,
      exactNumber: hz,
      normalizedNumber: Math.round(hz * 100) / 100,
      stringForm: String(hz),
    };
  }
  if (typeof hz === 'string') {
    const cleaned = hz.trim();
    const parsed = Number(cleaned);
    if (Number.isFinite(parsed)) {
      return {
        originalType: 'string',
        originalValue: hz,
        exactNumber: parsed,
        normalizedNumber: Math.round(parsed * 100) / 100,
        stringForm: hz,
      };
    }
  }
  return {
    originalType: typeof hz,
    originalValue: hz,
    exactNumber: null,
    normalizedNumber: null,
    stringForm: typeof hz === 'string' ? hz : String(hz),
  };
}

async function loadJson(rel) {
  const p = path.join(ROOT, rel);
  const raw = await fs.readFile(p, 'utf8');
  return JSON.parse(raw);
}

function buildIndexById(arr, idKey = 'id') {
  const map = new Map();
  for (const item of arr) map.set(item[idKey], item);
  return map;
}

function buildFrequencyValidationIndex(frequencyValidation) {
  // { frequencies: [{hz, ...}]} -> Map exact hz -> record
  const mapExact = new Map();
  const mapNormalized2 = new Map();
  for (const rec of frequencyValidation.frequencies || []) {
    mapExact.set(rec.hz, rec);
    const n2 = Math.round(rec.hz * 100) / 100;
    mapNormalized2.set(n2, rec);
  }
  return { mapExact, mapNormalized2 };
}

function report(items, title) {
  return {
    title,
    count: items.length,
    items,
  };
}

function validateCodexJoins({ codexIndex, bodyRegionSchema, freqValidation, plateCatalog }) {
  const bodyRegionMap = buildIndexById(bodyRegionSchema.regions, 'id');
  const { mapExact: freqExact, mapNormalized2: freqNorm2 } = buildFrequencyValidationIndex(freqValidation);
  const plateMap = buildIndexById(plateCatalog.plates, 'id');

  const missingBodyRegions = [];
  const missingFrequencyValidation = [];
  const missingPlates = [];
  const hzTypeRoundingIssues = [];

  for (const entry of codexIndex.entries || []) {
    for (const brId of entry.body_regions || []) {
      if (!bodyRegionMap.has(brId)) {
        missingBodyRegions.push({ app_id: entry.app_id, slug: entry.slug, missing_body_region_id: brId });
      }
    }

    for (const hzRaw of entry.frequency_links_hz || []) {
      const hzN = normalizeHzForComparison(hzRaw);
      const exact = hzN.exactNumber;
      if (exact === null) {
        missingFrequencyValidation.push({
          app_id: entry.app_id,
          slug: entry.slug,
          hz: hzRaw,
          issue: 'hz_not_number_or_numeric_string',
        });
        continue;
      }

      if (!freqExact.has(exact)) {
        const rec2 = freqNorm2.get(hzN.normalizedNumber);
        if (rec2) {
          hzTypeRoundingIssues.push({
            app_id: entry.app_id,
            slug: entry.slug,
            hz_in_codex: hzRaw,
            hz_exact: exact,
            hz_normalized_2dp: hzN.normalizedNumber,
            hz_validation_matched_on_normalized_2dp: rec2.hz,
          });
        } else {
          missingFrequencyValidation.push({
            app_id: entry.app_id,
            slug: entry.slug,
            hz: hzRaw,
            issue: 'missing_frequency_validation_record',
          });
        }
      }
    }

    for (const plateId of entry.illustration_links || []) {
      if (!plateMap.has(plateId)) {
        missingPlates.push({ app_id: entry.app_id, slug: entry.slug, missing_plate_id: plateId });
      }
    }
  }

  return {
    bodyRegionMissing: {
      ...report(missingBodyRegions, 'codex-index.body_regions -> body-region-schema.regions[id] mismatches'),
    },
    frequencyValidationMissing: {
      ...report(
        missingFrequencyValidation,
        'codex-index.frequency_links_hz -> frequency-validation.frequencies[].hz missing records'
      ),
    },
    illustrationPlateMissing: {
      ...report(missingPlates, 'codex-index.illustration_links -> illustration-plate-catalog.plates[id] mismatches'),
    },
    hzTypeRoundingIssues: {
      title: 'hz type/rounding issues (matched only after normalization)',
      count: hzTypeRoundingIssues.length,
      items: hzTypeRoundingIssues,
    },
  };
}

function validatePlannerHz({ planner, freqValidation }) {
  const { mapExact: freqExact, mapNormalized2: freqNorm2 } = buildFrequencyValidationIndex(freqValidation);
  const missingPlannerHz = [];
  const plannerHzTypeRoundingIssues = [];

  for (const row of planner.planner || planner) {
    const recHzRaw = row.recommended_hz;
    const hzN = normalizeHzForComparison(recHzRaw);
    if (hzN.exactNumber === null) {
      missingPlannerHz.push({ planner_id: row.id, recommended_hz: recHzRaw, issue: 'hz_not_number_or_numeric_string' });
      continue;
    }

    if (!freqExact.has(hzN.exactNumber)) {
      const rec2 = freqNorm2.get(hzN.normalizedNumber);
      if (rec2) {
        plannerHzTypeRoundingIssues.push({
          planner_id: row.id,
          recommended_hz_raw: recHzRaw,
          recommended_hz_exact: hzN.exactNumber,
          recommended_hz_normalized_2dp: hzN.normalizedNumber,
          hz_validation_matched_on_normalized_2dp: rec2.hz,
        });
      } else {
        missingPlannerHz.push({
          planner_id: row.id,
          recommended_hz: recHzRaw,
          issue: 'missing_frequency_validation_record',
        });
      }
    }
  }

  return {
    missingPlannerHz: report(missingPlannerHz, 'temporal-frequency-planner.recommended_hz -> frequency-validation missing records'),
    plannerHzTypeRoundingIssues: report(plannerHzTypeRoundingIssues, 'planner hz type/rounding issues (matched only after normalization)'),
  };
}

function safePlannerRenderingPolicy({ plannerRow, freqValidation }) {
  const { mapExact } = buildFrequencyValidationIndex(freqValidation);
  const hzN = normalizeHzForComparison(plannerRow.recommended_hz);
  const record = hzN.exactNumber !== null ? mapExact.get(hzN.exactNumber) : null;

  const base = {
    planner_id: plannerRow.id,
    time_of_day: plannerRow.time_of_day,
    boundary_note: plannerRow.boundary_note ?? freqValidation?.boundary_note ?? null,
    // Always include the practice prompt scaffolding fields as provided.
    prompt_skeleton: {
      practice_type: plannerRow.practice_type ?? null,
      instrument_suggestion: plannerRow.instrument_suggestion ?? null,
      duration_min: plannerRow.duration_min ?? null,
      chakra_focus: plannerRow.chakra_focus ?? null,
      body_region_ids: plannerRow.body_region_ids ?? [],
      codex_links: plannerRow.codex_links ?? [],
      lunar_phase_modifier: plannerRow.lunar_phase_modifier ?? null,
    },
  };

  // Graceful degradation: if no validation record, suppress any “frequency claim”.
  if (!record) {
    return { ...base, frequency_claim: null };
  }

  // When validation exists, the UI layer may render wording using app_safe_wording/avoid_wording.
  return {
    ...base,
    frequency_claim: {
      hz: record.hz,
      frequency_name: plannerRow.frequency_name ?? record.name ?? null,
      validation_status: record.validation_status ?? [],
      app_safe_wording: record.app_safe_wording ?? null,
    },
  };
}

async function main() {
  const args = process.argv.slice(2);
  const doReport = args.includes('--report');

  const loaded = {};
  for (const rel of PRIMARY_IMPORT_FILES) {
    const isJson = rel.endsWith('.json');
    const isCsv = rel.endsWith('.csv');
    if (isJson) loaded[rel] = await loadJson(rel);
    else if (isCsv) loaded[rel] = await fs.readFile(path.join(ROOT, rel), 'utf8');
  }

  const codexIndex = loaded['data/codex-index.json'];
  const bodyRegionSchema = loaded['data/body-region-schema.json'];
  const frequencyValidation = loaded['data/frequency-validation.json'];
  const plateCatalog = loaded['data/illustration-plate-catalog.json'];
  const planner = loaded['data/temporal-frequency-planner.json'];

  const joinValidation = validateCodexJoins({
    codexIndex,
    bodyRegionSchema,
    freqValidation: frequencyValidation,
    plateCatalog,
  });
  const plannerValidation = validatePlannerHz({ planner, freqValidation: frequencyValidation });

  // Produce a sample degradation check for the first planner row.
  const firstPlannerRow = (planner.planner || planner)[0];
  const sampleRendered = safePlannerRenderingPolicy({ plannerRow: firstPlannerRow, freqValidation: frequencyValidation });

  const reportObj = {
    metadata: {
      generated_at: new Date().toISOString(),
      primary_files_loaded: PRIMARY_IMPORT_FILES,
    },
    joinValidation,
    plannerValidation,
    samplePlannerRowDegradation: {
      planner_row_id: firstPlannerRow?.id,
      rendered: sampleRendered,
    },
  };

  if (doReport) {
    const outPath = path.join(ROOT, 'tools/importer/harness-report.json');
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, JSON.stringify(reportObj, null, 2), 'utf8');
    console.log(`Wrote report: ${outPath}`);
  } else {
    console.log(JSON.stringify(reportObj, null, 2));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

