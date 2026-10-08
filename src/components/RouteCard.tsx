import { Clock3, Route, Sparkles, Zap } from "lucide-react";
import { RouteOption } from "../types";
import SafetyScore from "./SafetyScore";

export default function RouteCard({route,selected,onSelect}:{route:RouteOption;selected:boolean;onSelect:()=>void}){
  const Icon=route.kind==="Safest Route"?Sparkles:route.kind==="Fastest Route"?Zap:Route;
  return <button onClick={onSelect} className={`w-full text-left rounded-2xl border p-3 transition ${selected?"border-emerald-500 bg-emerald-50/50 shadow-md dark:bg-emerald-950/10":"border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"}`}>
    <div className="flex items-start justify-between gap-3"><div className="flex min-w-0 items-center gap-2"><span className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${route.kind==="Safest Route"?"bg-emerald-100 text-emerald-700":route.kind==="Fastest Route"?"bg-slate-100 text-slate-700":"bg-amber-100 text-amber-700"}`}><Icon size={16}/></span><div><p className="font-extrabold text-slate-900 dark:text-white">{route.kind}</p><p className="text-xs text-slate-500">{route.distance} · <Clock3 className="mx-0.5 inline" size={12}/>{route.duration}</p></div></div><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-extrabold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{route.incidents}</span></div>
    <div className="mt-3"><SafetyScore score={route.score} compact/></div>
  </button>
}