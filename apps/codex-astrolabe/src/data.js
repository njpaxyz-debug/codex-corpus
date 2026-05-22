export const tabs=[['learn','Learn','L'],['geo','Geo','G'],['field','Field','F'],['compass','Compass','C'],['matrix','Matrix','M'],['ref','Index','I']].map(([id,label,icon])=>({id,label,icon}));
export const nodes=['A','B','C','D','E','F','G','H'];
export const defaults={A:70,B:45,C:35,D:55,E:20,F:60,G:82,H:40};
export const nodeMeta=[['A',170,58,'+','top'],['B',78,178,'+','left'],['C',262,178,'+','right'],['D',170,304,'+','base'],['E',170,332,'-','low'],['F',78,212,'-','west'],['G',262,212,'-','east'],['H',170,86,'-','high']].map(([key,x,y,tet,coord])=>({key,x,y,tet,coord}));
export const directions=['North','East','South','West','Above','Below','Center'];
export const rows=[
{id:'north-air',direction:'North',element:'Air',arc:'Orientation',keyword:'breath, signal, baseline',confidence:'Medium',note:'Compass anchor for navigation and first-pass reading.'},
{id:'east-fire',direction:'East',element:'Fire',arc:'Ignition',keyword:'spark, dawn, activation',confidence:'Medium',note:'Start-state or launch vector in symbolic mapping.'},
{id:'south-water',direction:'South',element:'Water',arc:'Flow',keyword:'memory, fluid, adaptation',confidence:'Low',note:'Symbolic flow logic for comparison.'},
{id:'west-earth',direction:'West',element:'Earth',arc:'Closure',keyword:'mass, archive, compression',confidence:'Medium',note:'Storage, reflection, and material consolidation.'},
{id:'above-aether',direction:'Above',element:'Aether',arc:'Integration',keyword:'synthesis, crown, overview',confidence:'Low',note:'Speculative bridge for system-level synthesis.'},
{id:'below-body',direction:'Below',element:'Body',arc:'Grounding',keyword:'base, gravity, stability',confidence:'Medium',note:'Grounding metaphor for setup and baseline.'},
{id:'center-axis',direction:'Center',element:'Axis',arc:'Balance',keyword:'witness, hub, zeroing',confidence:'High',note:'Balancing and comparison center.'}
];
export const profiles=directions.map((direction,i)=>({direction,node:nodes[i]||'H',prompt:`What does ${direction.toLowerCase()} organize?`,practice:'Name the boundary, set a baseline, then compare the map against the session log.'}));
export const chapters=[{id:'intro',title:'Astrolabe Logic',body:'An astrolabe is a layered orientation instrument. This app adapts that idea into an educational correspondence reader.'},{id:'field',title:'Octangula Field',body:'The eight tips are manual inputs. Balance and gradient values help compare sessions.'},{id:'boundary',title:'Claim Boundary',body:'Use the app for study, journaling, design, and symbolic modeling.'}];
export const glossary=[['Astrolabe','A navigational metaphor for layered orientation.'],['Codex','A structured collection of notes and correspondences.'],['Gradient','A directional bias calculated from the eight node values.']].map(([term,definition])=>({term,definition}));
export const sources=[{id:'uploaded-md',title:'codex compiled code astrolabe_.md',kind:'uploaded source',confidence:'High',note:'Source dump for reconstruction.'},{id:'scaffold',title:'Generated scaffold data',kind:'app scaffold',confidence:'Medium',note:'Replace with full workbook export later.'}];
export const crosswalk=[['Symbolic','Metaphor and correspondence','Proof claim'],['Mathematical','Geometry ratios and comparisons','Overstated output claim'],['Practical','Session journaling','Overinterpretation']].map(([layer,safeUse,unsafeUse])=>({layer,safeUse,unsafeUse}));
