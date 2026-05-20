#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());

function parseYamlFrontmatter(md) {
  const m = md.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!m) return null;
  return m[1];
}

function veryLightYamlParse(yamlText) {
  // Minimal parser: handles scalars, arrays of scalars, and simple lists.
  // Assumes format produced/maintained by this repo.
  const out = {};
  const lines = yamlText.split(/\r?\n/);
  let currentArrayKey = null;

  for (let rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim()) continue;

    const arrMatch = line.match(/^([a-zA-Z0-9_\-]+):\s*\[(.*)\]\s*$/);
    if (arrMatch) {
      const key = arrMatch[1];
      const inner = arrMatch[2].trim();
      const items = inner
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => s.replace(/^['"]|['"]$/g, ''));
      out[key] = items;
      currentArrayKey = null;
      continue;
    }

    const arrayStart = line.match(/^([a-zA-Z0-9_\-]+):\s*$/);
    if (arrayStart && lines[lines.indexOf(rawLine) + 1]?.trim().startsWith('- ')) {
      const key = arrayStart[1];
      out[key] = [];
      currentArrayKey = key;
      continue;
    }

    const kv = line.match(/^([a-zA-Z0-9_\-]+):\s*(.*)$/);
    if (kv && !line.startsWith('- ')) {
      const key = kv[1];
      let val = kv[2].trim();
      // strip quotes
      val = val.replace(/^['"]|['"]$/g, '');
      out[key] = val;
      currentArrayKey = null;
      continue;
    }

    if (currentArrayKey) {
      const item = line.match(/^-\s*(.*)$/);
      if (item) {
        out[currentArrayKey].push(item[1].trim().replace(/^['"]|['"]$/g, ''));
        continue;
      }
      currentArrayKey = null;
    }
  }

  return out;
}

function requiredFields() {
  return [
    'app_id',
    'source_plan_id',
    'slug',
    'title',
    'tags',
    'status',
    'evidence_labels',
    'boundary_note',
  ];
}

async function main() {
  const entriesDir = path.join(ROOT, 'codex', 'entries');
  const files = (await fs.readdir(entriesDir)).filter(f => f.endsWith('.md'));

  const req = requiredFields();
  const results = [];

  for (const f of files.sort()) {
    const fp = path.join(entriesDir, f);
    const md = await fs.readFile(fp, 'utf8');
    const fm = parseYamlFrontmatter(md);
    if (!fm) {
      results.push({ file: f, ok: false, error: 'missing_yaml_frontmatter' });
      continue;
    }
    const parsed = veryLightYamlParse(fm);

    const missing = req.filter(k => parsed[k] === undefined);
    const typeIssues = [];
    if (parsed.tags !== undefined && !Array.isArray(parsed.tags)) typeIssues.push('tags_not_array');
    if (parsed.evidence_labels !== undefined && !Array.isArray(parsed.evidence_labels)) typeIssues.push('evidence_labels_not_array');

    results.push({ file: f, ok: missing.length === 0 && typeIssues.length === 0, missing, typeIssues });
  }

  const failed = results.filter(r => !r.ok);
  const report = {
    generated_at: new Date().toISOString(),
    total: results.length,
    failed: failed.length,
    failures: failed,
  };

  if (failed.length) {
    console.error(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  console.log(JSON.stringify(report, null, 2));
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});

