import React from 'react';
export const Badge=({children})=><span className="badge">{children}</span>;
export const Pill=({children,className=''})=><span className={`pill ${className}`}>{children}</span>;
export const Panel=({children})=><section className="panel">{children}</section>;
export const Metric=({label,value})=><div className="metric"><span>{label}</span><b>{value}</b></div>;
export const Empty=({title,detail})=><div className="empty"><b>{title}</b><p>{detail}</p></div>;
export const Search=({value,onChange,placeholder})=><input className="input" value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}/>;
export const Select=({label,value,onChange,options})=><label><small>{label}</small><select className="input" value={value} onChange={e=>onChange(e.target.value)}><option value="">All</option>{options.map(o=><option key={o}>{o}</option>)}</select></label>;
export const confidence=c=>c==='High'?'good':c==='Medium'?'warn':c==='Low'?'risk':'';
