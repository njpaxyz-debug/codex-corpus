import{spawnSync}from'node:child_process';import fs from'node:fs';import path from'node:path';
function walk(d){return fs.existsSync(d)?fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const f=path.join(d,e.name);return e.isDirectory()?walk(f):/\.(jsx?|mjs)$/.test(e.name)?[f]:[]}):[]}
const files=['src','tools'].flatMap(walk);const r=spawnSync('tsc',['--allowJs','--jsx','react-jsx','--noEmit','--skipLibCheck','--noResolve',...files],{stdio:'inherit'});process.exit(r.status??1);
