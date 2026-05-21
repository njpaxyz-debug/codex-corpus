import React, { useMemo, useState } from "react";

const WORKBOOK_META = {
  matrixRows: 247,
  longViewRows: 1235,
  relationshipEdges: 78,
  directionProfiles: 5,
  gematriaRows: 18,
  aetherCrosswalkRows: 10,
  sourceRows: 14
};

const chapters = [
  {
    id: "orientation",
    title: "Orientation",
    tag: "Start",
    icon: "✦",
    summary: "Keep the historical merkavah, modern merkaba geometry, and correspondence matrix in separate interpretive layers.",
    body: [
      "Merkavah is the throne-chariot vision and later Jewish ascent-mysticism frame.",
      "Modern merkaba usage usually points to the star tetrahedron, also called the stella octangula.",
      "This app treats the star tetrahedron as a practical 8-node spatial processor while keeping esoteric correspondences labeled as symbolic research records."
    ]
  },
  {
    id: "geometry",
    title: "Geometry Engine",
    tag: "Math",
    icon: "△▽",
    summary: "The strongest mathematical claim is the stella octangula: two interlocked tetrahedra inside a cube hull.",
    body: [
      "The two tetrahedra occupy alternating vertices of a cube.",
      "The full star decomposes into a central octahedron plus eight tetrahedral spikes.",
      "The star fills exactly one half of its cube hull, which makes it a clean proportional model for field mapping and teaching."
    ]
  },
  {
    id: "matrix",
    title: "Correspondence Matrix",
    tag: "Workbook",
    icon: "🜁",
    summary: "The uploaded workbook becomes a navigable atlas instead of a flat spreadsheet dump.",
    body: [
      "The enhanced workbook contains 247 matrix rows, 1,235 direction-specific long-view rows, and 78 relationship edges.",
      "Rows are separated by confidence, evidence type, domain, tradition frame, relationship class, and Aether/Center role.",
      "The practical rule is filter-first interpretation: use high-confidence rows for anchors, medium rows for tradition-specific comparison, and low rows as explicit analogy only."
    ]
  },
  {
    id: "application",
    title: "OCTANGULA-8",
    tag: "Tool",
    icon: "◈",
    summary: "Use eight nodes as measurable inputs, then compute balance, direction, and asymmetry.",
    body: [
      "Each star point can hold a sensor, slider, LED, ritual symbol, or design variable.",
      "The app compares T+ and T− tetrahedra, calculates a 3D gradient, and visualizes the result.",
      "This turns merkaba geometry into a practical educational tool, field mapper, design engine, or symbolic dashboard."
    ]
  }
];

const matrixSamples = [
  {
    id: 1,
    domain: "Mathematical / symbolic systems",
    category: "Compass geometry",
    question: "Compass bearing in navigation degrees",
    north: "0° / 360°",
    east: "90°",
    south: "180°",
    west: "270°",
    center: "Origin point; all bearings radiate from observer/center",
    confidence: "High",
    relationship: "Axis / geometry"
  },
  {
    id: 2,
    domain: "Terrestrial / astronomical sciences",
    category: "Earth axes",
    question: "Geographic pole relation",
    north: "Toward geographic North Pole",
    east: "Eastward along parallels",
    south: "Toward geographic South Pole",
    west: "Westward along parallels",
    center: "Earth rotational axis and globe center as reference",
    confidence: "High",
    relationship: "Axis / geometry"
  },
  {
    id: 3,
    domain: "Terrestrial / astronomical sciences",
    category: "Local horizon",
    question: "Azimuth in horizontal coordinates",
    north: "0° azimuth",
    east: "90° azimuth",
    south: "180° azimuth",
    west: "270° azimuth",
    center: "Altitude / zenith-nadir axis adds vertical comparison",
    confidence: "High",
    relationship: "Axis / geometry"
  },
  {
    id: 4,
    domain: "Chinese cosmology / Wuxing",
    category: "Five phases",
    question: "Directional phase pattern",
    north: "Water / winter / storage",
    east: "Wood / spring / generation",
    south: "Fire / summer / expression",
    west: "Metal / autumn / contraction",
    center: "Earth / center / mediation",
    confidence: "Medium",
    relationship: "Element / transformation"
  },
  {
    id: 5,
    domain: "Western esoteric / Hermetic",
    category: "Quarter model",
    question: "Ritualized directional associations",
    north: "Earth / materialization",
    east: "Air / breath / dawn",
    south: "Fire / heat / will",
    west: "Water / depth / dusk",
    center: "Operator point / circle center",
    confidence: "Medium",
    relationship: "Guardian / personification"
  },
  {
    id: 6,
    domain: "Wave / resonance models",
    category: "Standing wave analogy",
    question: "Directional metaphor for phase and opposition",
    north: "Node / stillness analogy",
    east: "Rising phase analogy",
    south: "Antinode / maximum analogy",
    west: "Falling phase analogy",
    center: "Reference oscillator / integration point",
    confidence: "Low",
    relationship: "Phase / resonance"
  }
];

const directionProfiles = [
  { key: "North", angle: "0°", tone: "axis / origin / storage", note: "Best used for poleward, reference, winter, stillness, or structural readings." },
  { key: "East", angle: "90°", tone: "dawn / rotation / emergence", note: "Best used for sunrise, beginning, breath, motion, or generative readings." },
  { key: "South", angle: "180°", tone: "culmination / heat / expression", note: "Best used for noon, fire, maximum, visibility, or expressive readings." },
  { key: "West", angle: "270°", tone: "descent / dusk / return", note: "Best used for sunset, water, contraction, memory, or completion readings." },
  { key: "Aether / Center", angle: "origin", tone: "datum / observer / integrator", note: "Use as the reference point; do not assume all traditions treat the fifth as equivalent." }
];

const gematriaRows = [
  { text: "מרכבה", label: "merkavah", value: 267, note: "Mem 40 + Resh 200 + Kaf 20 + Bet 2 + He 5" },
  { text: "רכב", label: "root r-k-b", value: 222, note: "Ride / vehicle / chariot root" },
  { text: "אחד", label: "echad", value: 13, note: "Unity; included as symbolic comparison only" },
  { text: "אור", label: "or", value: 207, note: "Light; useful for modern light-body comparisons, not historical proof" }
];

const glossary = [
  ["Merkavah", "Hebrew chariot; the throne-chariot vision and mystical ascent tradition."],
  ["Merkaba", "Modern sacred-geometry spelling usually used for the star tetrahedron or light-body symbol."],
  ["Stella Octangula", "The compound of two regular tetrahedra; the strongest mathematical identity for the modern symbol."],
  ["Cube Hull", "The invisible cube whose eight vertices are occupied by the star tetrahedron points."],
  ["Aether / Center", "A fifth-reference role: datum, observer point, integrator, or tradition-specific fifth element."],
  ["Confidence", "A workbook control field: High = source-backed/formal, Medium = contextual/traditional, Low = interpretive analogy."],
  ["Relationship Edge", "An explicit link such as opposition, cycle, guardian, process, or geometry relationship."],
  ["OCTANGULA-8", "The app's 8-node practical application model for measurable or symbolic inputs." ]
];

const quiz = [
  {
    q: "What is the strongest mathematical identity of the modern merkaba symbol?",
    options: ["A flat compass", "A compound of two tetrahedra", "A literal physical portal", "A zodiac wheel"],
    a: 1
  },
  {
    q: "What should the Aether / Center field do in a rigorous correspondence matrix?",
    options: ["Erase all differences", "Act as datum, observer, or integrator depending on tradition", "Replace evidence", "Always mean the same thing"],
    a: 1
  },
  {
    q: "What makes OCTANGULA-8 practical?",
    options: ["It treats every symbol as scientific fact", "It uses 8 nodes as inputs and computes balance/gradient", "It ignores geometry", "It removes the center"],
    a: 1
  }
];

const nodeMeta = [
  { key: "A", coord: "+ + +", tet: "+", x: 170, y: 54 },
  { key: "B", coord: "+ − −", tet: "+", x: 258, y: 194 },
  { key: "C", coord: "− + −", tet: "+", x: 82, y: 194 },
  { key: "D", coord: "− − +", tet: "+", x: 170, y: 306 },
  { key: "E", coord: "− − −", tet: "−", x: 170, y: 194 },
  { key: "F", coord: "− + +", tet: "−", x: 82, y: 82 },
  { key: "G", coord: "+ − +", tet: "−", x: 258, y: 82 },
  { key: "H", coord: "+ + −", tet: "−", x: 170, y: 330 }
];

function round(n, places = 2) {
  return Number.isFinite(n) ? Number(n.toFixed(places)) : 0;
}

function Badge({ children }) {
  return <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-white/75">{children}</span>;
}

function Panel({ children, className = "" }) {
  return <section className={`rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-black/30 backdrop-blur ${className}`}>{children}</section>;
}

function Metric({ label, value }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"><div className="text-[11px] uppercase tracking-widest text-white/45">{label}</div><div className="mt-1 font-bold text-white">{value}</div></div>;
}

function Reader() {
  const [idx, setIdx] = useState(0);
  const ch = chapters[idx];
  return <Panel>
    <div className="flex items-center justify-between"><Badge>{ch.tag}</Badge><span className="text-xs text-white/45">{idx + 1}/{chapters.length}</span></div>
    <div className="mt-5 flex items-start gap-3"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-2xl">{ch.icon}</div><div><h2 className="text-2xl font-black leading-tight text-white">{ch.title}</h2><p className="mt-1 text-sm text-cyan-100/80">{ch.summary}</p></div></div>
    <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-white/78">{ch.body.map((p, i) => <p key={i}>{p}</p>)}</div>
    <div className="mt-5 flex gap-2"><button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} className="flex-1 rounded-2xl bg-white/10 px-3 py-3 text-sm font-bold text-white disabled:opacity-30">Back</button><button onClick={() => setIdx(Math.min(chapters.length - 1, idx + 1))} disabled={idx === chapters.length - 1} className="flex-1 rounded-2xl bg-cyan-300 px-3 py-3 text-sm font-black text-slate-950 disabled:opacity-30">Next</button></div>
  </Panel>;
}

function GeometryCalculator() {
  const [cube, setCube] = useState(100);
  const vals = useMemo(() => {
    const C = cube;
    const a = C * Math.sqrt(2);
    const b = a / 2;
    const R = Math.sqrt(3) * C / 2;
    const vCube = C ** 3;
    return { a, b, R, vCube, vStar: vCube / 2, vOct: vCube / 6, vOneSpike: vCube / 24, surface: 3 * Math.sqrt(3) * a * a / 2 };
  }, [cube]);
  return <Panel>
    <div className="mb-3 flex items-center justify-between gap-3"><div><Badge>Calculator</Badge><h2 className="mt-2 text-xl font-black text-white">Pocket Geometry Lab</h2></div><div className="rounded-2xl bg-white/10 px-3 py-2 text-right text-xs text-white/70">Cube<br/><b className="text-white">{cube} mm</b></div></div>
    <input className="w-full accent-cyan-300" type="range" min="40" max="180" value={cube} onChange={e => setCube(Number(e.target.value))} />
    <div className="mt-4 grid grid-cols-2 gap-2 text-sm"><Metric label="Tetra edge" value={`${round(vals.a)} mm`} /><Metric label="Small edge" value={`${round(vals.b)} mm`} /><Metric label="Center → point" value={`${round(vals.R)} mm`} /><Metric label="Surface" value={`${round(vals.surface)} mm²`} /><Metric label="Cube volume" value={`${round(vals.vCube, 0)} mm³`} /><Metric label="Star volume" value={`${round(vals.vStar, 0)} mm³`} /><Metric label="Central oct." value={`${round(vals.vOct, 0)} mm³`} /><Metric label="One spike" value={`${round(vals.vOneSpike, 0)} mm³`} /></div>
    <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-xs leading-relaxed text-cyan-50"><b>a = C√2</b> converts cube side to tetrahedron edge. <b>Vstar = 1/2 C³</b> means the star fills exactly half of its cube hull.</div>
  </Panel>;
}

function StarDiagram({ values, activeNode, setActiveNode }) {
  const max = Math.max(1, ...Object.values(values));
  const linesPlus = [["A", "B"], ["A", "C"], ["A", "D"], ["B", "C"], ["B", "D"], ["C", "D"]];
  const linesMinus = [["E", "F"], ["E", "G"], ["E", "H"], ["F", "G"], ["F", "H"], ["G", "H"]];
  const byKey = Object.fromEntries(nodeMeta.map(n => [n.key, n]));
  return <div className="relative mx-auto aspect-[5/6] w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.18),rgba(15,23,42,0.4)_44%,rgba(2,6,23,1)_90%)]"><svg viewBox="0 0 340 390" className="h-full w-full">
    <rect x="44" y="44" width="252" height="296" rx="28" fill="none" stroke="rgba(255,255,255,.08)" strokeDasharray="8 8" />
    {linesPlus.map(([a, b]) => <line key={`${a}${b}`} x1={byKey[a].x} y1={byKey[a].y} x2={byKey[b].x} y2={byKey[b].y} stroke="rgba(34,211,238,.72)" strokeWidth="2.5" />)}
    {linesMinus.map(([a, b]) => <line key={`${a}${b}`} x1={byKey[a].x} y1={byKey[a].y} x2={byKey[b].x} y2={byKey[b].y} stroke="rgba(216,180,254,.72)" strokeWidth="2.5" />)}
    <circle cx="170" cy="194" r="44" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.12)" />
    <text x="170" y="199" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="11" letterSpacing="2">CENTER</text>
    {nodeMeta.map(n => { const intensity = values[n.key] / max; const r = 9 + intensity * 17; const active = activeNode === n.key; return <g key={n.key} onClick={() => setActiveNode(n.key)} className="cursor-pointer"><circle cx={n.x} cy={n.y} r={r + 7} fill={n.tet === "+" ? "rgba(34,211,238,.08)" : "rgba(216,180,254,.08)"} /><circle cx={n.x} cy={n.y} r={r} fill={n.tet === "+" ? "rgba(34,211,238,.82)" : "rgba(216,180,254,.82)"} stroke={active ? "white" : "rgba(255,255,255,.42)"} strokeWidth={active ? 3 : 1.5} /><text x={n.x} y={n.y + 4} textAnchor="middle" fill="rgba(2,6,23,.95)" fontWeight="800" fontSize="12">{n.key}</text></g>; })}
  </svg></div>;
}

function FieldMapper() {
  const [activeNode, setActiveNode] = useState("A");
  const [values, setValues] = useState({ A: 70, B: 45, C: 35, D: 55, E: 20, F: 60, G: 82, H: 40 });
  const calc = useMemo(() => {
    const { A, B, C, D, E, F, G, H } = values; const sum = A + B + C + D + E + F + G + H; const tp = A + B + C + D; const tm = E + F + G + H;
    const gx = ((A + B + G + H) - (C + D + E + F)) / 400; const gy = ((A + C + F + H) - (B + D + E + G)) / 400; const gz = ((A + D + F + G) - (B + C + E + H)) / 400;
    return { mean: sum / 8, tp, tm, balance: sum === 0 ? 0 : (tp - tm) / sum, gx, gy, gz, mag: Math.sqrt(gx * gx + gy * gy + gz * gz) };
  }, [values]);
  const active = nodeMeta.find(n => n.key === activeNode);
  const randomize = () => setValues(Object.fromEntries(nodeMeta.map(n => [n.key, Math.floor(10 + Math.random() * 90)])));
  return <Panel><div className="mb-3"><Badge>Interactive</Badge><h2 className="mt-2 text-xl font-black text-white">OCTANGULA-8 Field Mapper</h2><p className="mt-1 text-sm text-white/60">Use the 8 tips as measurable or symbolic inputs.</p></div><StarDiagram values={values} activeNode={activeNode} setActiveNode={setActiveNode} />
    <div className="mt-3 flex gap-2"><button onClick={randomize} className="flex-1 rounded-2xl bg-cyan-300 px-3 py-2 text-sm font-black text-slate-950">Random Field</button><button onClick={() => setValues({ A: 50, B: 50, C: 50, D: 50, E: 50, F: 50, G: 50, H: 50 })} className="flex-1 rounded-2xl bg-white/10 px-3 py-2 text-sm font-bold text-white">Balance</button></div>
    <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.05] p-3"><div className="mb-2 flex items-center justify-between"><b>Node {activeNode}</b><span className="text-xs text-white/50">{active?.coord} · T{active?.tet}</span></div><input className="w-full accent-fuchsia-300" type="range" min="0" max="100" value={values[activeNode]} onChange={e => setValues({ ...values, [activeNode]: Number(e.target.value) })} /><div className="mt-1 text-right text-sm font-bold text-white">{values[activeNode]}</div></div>
    <div className="mt-4 grid grid-cols-2 gap-2 text-sm"><Metric label="Mean field" value={round(calc.mean)} /><Metric label="T+ total" value={round(calc.tp)} /><Metric label="T− total" value={round(calc.tm)} /><Metric label="Balance" value={round(calc.balance, 3)} /><Metric label="gx" value={round(calc.gx, 3)} /><Metric label="gy" value={round(calc.gy, 3)} /><Metric label="gz" value={round(calc.gz, 3)} /><Metric label="|g|" value={round(calc.mag, 3)} /></div>
  </Panel>;
}

function MatrixExplorer() {
  const [q, setQ] = useState("");
  const [confidence, setConfidence] = useState("All");
  const rows = matrixSamples.filter(r => (confidence === "All" || r.confidence === confidence) && JSON.stringify(r).toLowerCase().includes(q.toLowerCase()));
  return <Panel><div className="flex items-start justify-between gap-3"><div><Badge>Matrix</Badge><h2 className="mt-2 text-xl font-black text-white">Correspondence Atlas</h2><p className="mt-1 text-sm text-white/60">Workbook summary: {WORKBOOK_META.matrixRows} matrix rows · {WORKBOOK_META.longViewRows} direction rows · {WORKBOOK_META.relationshipEdges} edges.</p></div></div>
    <div className="mt-4 grid grid-cols-2 gap-2 text-sm"><Metric label="Matrix rows" value={WORKBOOK_META.matrixRows} /><Metric label="Long-view" value={WORKBOOK_META.longViewRows} /><Metric label="Edges" value={WORKBOOK_META.relationshipEdges} /><Metric label="Sources" value={WORKBOOK_META.sourceRows} /></div>
    <div className="mt-4 grid grid-cols-3 gap-2"><button onClick={() => setConfidence("All")} className={`rounded-2xl px-3 py-2 text-sm font-bold ${confidence === "All" ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-white"}`}>All</button><button onClick={() => setConfidence("High")} className={`rounded-2xl px-3 py-2 text-sm font-bold ${confidence === "High" ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-white"}`}>High</button><button onClick={() => setConfidence("Medium")} className={`rounded-2xl px-3 py-2 text-sm font-bold ${confidence === "Medium" ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-white"}`}>Medium</button></div>
    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search domain, direction, center, relationship..." className="mt-3 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-cyan-300/50" />
    <div className="mt-4 space-y-3">{rows.map(r => <details key={r.id} className="rounded-3xl border border-white/10 bg-white/[0.05] p-3"><summary className="cursor-pointer list-none"><div className="flex items-center justify-between gap-2"><b className="text-white">{r.category}</b><span className="rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/70">{r.confidence}</span></div><div className="mt-1 text-xs text-white/50">{r.domain} · {r.relationship}</div></summary><div className="mt-3 grid gap-2 text-sm text-white/70"><p><b className="text-white">Question:</b> {r.question}</p><p><b>North:</b> {r.north}</p><p><b>East:</b> {r.east}</p><p><b>South:</b> {r.south}</p><p><b>West:</b> {r.west}</p><p><b>Center:</b> {r.center}</p></div></details>)}</div>
  </Panel>;
}

function CompassAtlas() {
  return <Panel><Badge>Directions</Badge><h2 className="mt-2 text-xl font-black text-white">Compass + Aether Atlas</h2><div className="mt-4 space-y-2">{directionProfiles.map(d => <div key={d.key} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3"><div className="flex items-center justify-between"><b>{d.key}</b><span className="text-xs text-cyan-100/70">{d.angle}</span></div><div className="mt-1 text-sm text-white/65">{d.tone}</div><p className="mt-2 text-xs leading-relaxed text-white/50">{d.note}</p></div>)}</div></Panel>;
}

function Gematria() {
  const [value, setValue] = useState(267);
  const nearest = gematriaRows.map(r => ({ ...r, distance: Math.abs(r.value - Number(value || 0)) })).sort((a, b) => a.distance - b.distance)[0];
  return <Panel><Badge>Gematria</Badge><h2 className="mt-2 text-xl font-black text-white">Number Crosswalk</h2><input className="mt-4 w-full accent-cyan-300" type="range" min="1" max="300" value={value} onChange={e => setValue(Number(e.target.value))} /><div className="mt-2 text-center text-3xl font-black text-cyan-200">{value}</div><div className="mt-4 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4"><div className="text-sm text-cyan-50/70">Nearest workbook anchor</div><div className="mt-1 text-xl font-black text-white">{nearest.text} · {nearest.label}</div><p className="mt-2 text-sm text-white/70">Value {nearest.value}. {nearest.note}</p></div><div className="mt-4 space-y-2">{gematriaRows.map(r => <div key={r.text} className="rounded-2xl bg-white/5 p-3 text-sm"><b>{r.text}</b> · {r.label} · <span className="text-cyan-200">{r.value}</span></div>)}</div></Panel>;
}

function Glossary() {
  const [query, setQuery] = useState("");
  const items = glossary.filter(([t, d]) => `${t} ${d}`.toLowerCase().includes(query.toLowerCase()));
  return <Panel><Badge>Reference</Badge><h2 className="mt-2 text-xl font-black text-white">Glossary Deck</h2><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search terms..." className="mt-4 w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-cyan-300/50" /><div className="mt-4 space-y-2">{items.map(([term, def]) => <details key={term} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3"><summary className="cursor-pointer list-none font-bold text-white">{term}</summary><p className="mt-2 text-sm leading-relaxed text-white/65">{def}</p></details>)}</div></Panel>;
}

function Quiz() {
  const [answers, setAnswers] = useState({});
  const score = quiz.reduce((s, item, i) => s + (answers[i] === item.a ? 1 : 0), 0);
  return <Panel><div className="flex items-start justify-between gap-3"><div><Badge>Review</Badge><h2 className="mt-2 text-xl font-black text-white">Pocket Quiz</h2></div><div className="rounded-2xl bg-white/10 px-3 py-2 text-center text-xs text-white/60">Score<br/><b className="text-white">{score}/{quiz.length}</b></div></div><div className="mt-4 space-y-4">{quiz.map((item, i) => <div key={item.q} className="rounded-3xl border border-white/10 bg-white/[0.05] p-3"><div className="text-sm font-bold leading-snug text-white">{i + 1}. {item.q}</div><div className="mt-3 grid gap-2">{item.options.map((op, j) => <button key={op} onClick={() => setAnswers({ ...answers, [i]: j })} className={`rounded-2xl border px-3 py-2 text-left text-sm ${answers[i] === j && j === item.a ? "border-emerald-300/50 bg-emerald-300/20 text-emerald-50" : answers[i] === j ? "border-rose-300/50 bg-rose-300/20 text-rose-50" : "border-white/10 bg-white/5 text-white/70"}`}>{op}</button>)}</div></div>)}</div></Panel>;
}

const tabs = [
  { id: "read", label: "Read", icon: "☰" },
  { id: "calc", label: "Calc", icon: "√" },
  { id: "map", label: "Map", icon: "◈" },
  { id: "matrix", label: "Matrix", icon: "▦" },
  { id: "dir", label: "Dir", icon: "＋" },
  { id: "gem", label: "Gem", icon: "267" },
  { id: "terms", label: "Terms", icon: "Aa" },
  { id: "quiz", label: "Quiz", icon: "?" }
];

export default function PocketMerkabahTextbookIntegrated() {
  const [tab, setTab] = useState("read");
  const view = { read: <Reader />, calc: <GeometryCalculator />, map: <FieldMapper />, matrix: <MatrixExplorer />, dir: <CompassAtlas />, gem: <Gematria />, terms: <Glossary />, quiz: <Quiz /> }[tab];
  return <div className="min-h-screen bg-slate-950 text-white"><div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,.22),transparent_35%),linear-gradient(180deg,#111827,#020617_62%)]"><header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/85 px-4 py-3 backdrop-blur-xl"><div className="text-[10px] uppercase tracking-[0.28em] text-cyan-200/70">Pocket Interactive Textbook</div><h1 className="text-lg font-black leading-tight">MERKABAH MATRIX FIELD GUIDE</h1></header><main className="flex-1 space-y-4 px-4 pb-32 pt-4 text-[15px]">{view}</main><nav className="fixed bottom-0 left-0 right-0 z-30 mx-auto max-w-md border-t border-white/10 bg-slate-950/92 px-2 pb-3 pt-2 backdrop-blur-xl"><div className="grid grid-cols-8 gap-1">{tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} className={`rounded-2xl px-1 py-2 text-center ${tab === t.id ? "bg-cyan-300 text-slate-950" : "bg-white/5 text-white/65"}`}><div className="text-sm font-black leading-none">{t.icon}</div><div className="mt-1 text-[9px] font-bold">{t.label}</div></button>)}</div></nav></div></div>;
}
