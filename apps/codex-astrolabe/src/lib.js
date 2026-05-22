import {defaults,nodes,rows,profiles,sources} from './data.js';
export const clamp=(v,min,max)=>{const n=Number(v);return Number.isFinite(n)?Math.min(max,Math.max(min,n)):min};
export const sanitize=v=>Object.fromEntries(nodes.map(k=>[k,clamp(v?.[k]??defaults[k]??0,0,100)]));
export function metrics(values,cubeSide=100){const s=sanitize(values),C=Math.max(1,Number(cubeSide)||100),[A,B,Cv,D,E,F,G,H]=nodes.map(k=>s[k]),sum=A+B+Cv+D+E+F+G+H,tp=A+B+Cv+D,tm=E+F+G+H,gx=((A+B+G+H)-(Cv+D+E+F))/(4*C),gy=((A+Cv+F+H)-(B+D+E+G))/(4*C),gz=((A+D+F+G)-(B+Cv+E+H))/(4*C);return{values:s,sum,mean:sum/8,tp,tm,balance:sum?((tp-tm)/sum):0,gx,gy,gz,mag:Math.hypot(gx,gy,gz)}}
export const balanced=(v=50)=>Object.fromEntries(nodes.map(k=>[k,clamp(v,0,100)]));
export const random=(min=10,max=90)=>Object.fromEntries(nodes.map(k=>[k,Math.floor(min+Math.random()*(max-min+1))]));
export const spotlight=()=>({A:95,B:82,C:18,D:22,E:10,F:24,G:88,H:76});
export function star(cubeSide=100){const C=Math.max(1,Number(cubeSide)||100),a=C*Math.SQRT2;return{C,a,b:a/2,R:Math.sqrt(3)*C/2,vCube:C**3,vStar:C**3/2,vOct:C**3/6,vSpikes:C**3/3,vOneSpike:C**3/24,surface:3*Math.sqrt(3)*a*a/2}}
export const norm=v=>String(v??'').normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase().trim();
export const includes=(row,q)=>!norm(q)||norm(Object.values(row??{}).join(' ')).includes(norm(q));
export const unique=a=>[...new Set(a.filter(Boolean).map(String))].sort();
export const round=(v,p=2)=>Number.isFinite(Number(v))?Number(Number(v).toFixed(p)):0;
export const validate=()=>{const warnings=[];rows.forEach((r,i)=>['id','direction','element','arc','confidence'].forEach(f=>{if(!r[f])warnings.push(`Matrix row ${i+1} missing ${f}.`)}));if(!profiles.length)warnings.push('No direction profiles.');if(!sources.length)warnings.push('No sources.');return{ok:!warnings.length,warnings}};
export const stats=()=>({matrixRows:rows.length,sourceRows:sources.length,profileRows:profiles.length});
