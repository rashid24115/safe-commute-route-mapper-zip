import { ShieldCheck, Info } from "lucide-react";

export default function SafetyScore({score, compact=false}:{score:number;compact?:boolean}){
  const label=score>=85?"Low concern":score>=70?"Moderate concern":"Higher concern";
  return <div className={`rounded-2xl border border-emerald-100 bg-emerald-50/70 dark:border-emerald-900/50 dark:bg-emerald-950/20 ${compact?"p-3":"p-4"}`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-600" size={compact?17:20}/><span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">Safety score</span></div>
      <span className="text-2xl font-black text-emerald-700 dark:text-emerald-300">{score}<span className="text-xs font-bold text-emerald-600/70">/100</span></span>
    </div>
    <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-950"><div className="h-full rounded-full bg-emerald-500 transition-all" style={{width:`${score}%`}}/></div>
    <div className="mt-2 flex items-center justify-between"><span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">{label}</span>{!compact&&<span title="Estimate, not a guarantee"><Info size={14} className="text-emerald-700/60"/></span>}</div>
  </div>
}