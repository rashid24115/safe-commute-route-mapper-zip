import { Bell, CheckCircle2, Info } from "lucide-react";
import { alerts } from "../data/mockData";
export default function SafetyAlerts(){
 return <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
  <div className="mb-3 flex items-center gap-2"><Bell size={17} className="text-amber-500"/><h2 className="text-lg font-extrabold dark:text-white">Safety alerts</h2></div>
  <div className="space-y-2">{alerts.map(a=><div key={a.title} className="flex gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60"><span className="mt-0.5 text-slate-400">{a.tone==="positive"?<CheckCircle2 size={16} className="text-emerald-600"/>:<Info size={16}/>}</span><div><p className="text-xs font-extrabold dark:text-white">{a.title}</p><p className="mt-0.5 text-[11px] leading-4 text-slate-500">{a.text}</p></div></div>)}</div>
 </section>
}