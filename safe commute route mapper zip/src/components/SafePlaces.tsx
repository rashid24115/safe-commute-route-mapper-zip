import { BadgeCheck, Building2, Flame, Hospital, MapPin, ShieldCheck, TrainFront } from "lucide-react";
import { SafePlace } from "../types";

const icons:any={Police:ShieldCheck,Hospital:Hospital,Fire:Flame,Transit:TrainFront,"Public Space":Building2};
export default function SafePlaces({places}:{places:SafePlace[]}){
 return <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
  <div className="mb-3 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Nearby</p><h2 className="mt-1 text-lg font-extrabold dark:text-white">Safe places</h2></div><MapPin size={18} className="text-slate-400"/></div>
  <div className="space-y-2">{places.map(p=>{const Icon=icons[p.type];return <div key={p.id} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200"><Icon size={17}/></span><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold dark:text-white">{p.name}</p><p className="text-xs text-slate-500">{p.type} · {p.distance}</p></div>{p.verified&&<BadgeCheck size={17} className="text-emerald-600" aria-label="Verified public facility"/>}</div>})}</div>
 </section>
}