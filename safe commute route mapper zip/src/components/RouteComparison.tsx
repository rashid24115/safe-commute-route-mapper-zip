import { Building2, BusFront, Lightbulb, MapPinned, ShieldAlert, Timer } from "lucide-react";
import { RouteOption } from "../types";
import SafetyScore from "./SafetyScore";

export default function RouteComparison({route}:{route:RouteOption}){
 const rows=[
  [MapPinned,"Distance",route.distance],[Timer,"ETA",route.duration],[Lightbulb,"Lighting",route.lighting],
  [Building2,"Emergency facilities",route.emergency],[BusFront,"Public transport",route.transit],[ShieldAlert,"Incident density",route.incidents]
 ];
 return <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
   <div className="mb-4"><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Selected route</p><h2 className="mt-1 text-lg font-extrabold text-slate-950 dark:text-white">{route.kind}</h2><p className="mt-1 text-xs leading-5 text-slate-500">{route.note}</p></div>
   <SafetyScore score={route.score}/>
   <div className="mt-4 divide-y divide-slate-100 dark:divide-slate-800">
    {rows.map(([Icon,label,value]:any)=><div key={label} className="flex items-center justify-between py-3 text-sm"><span className="flex items-center gap-2 text-slate-500"><Icon size={15}/>{label}</span><span className="font-bold text-slate-900 dark:text-white">{value}</span></div>)}
   </div>
 </section>
}