import { ArrowRight, Car, Bike, BusFront, Footprints, MapPin, Search } from "lucide-react";
import { TravelMode, TimeOfDay } from "../types";

interface Props {
  start:string; destination:string; setStart:(v:string)=>void; setDestination:(v:string)=>void;
  mode:TravelMode; setMode:(v:TravelMode)=>void; time:TimeOfDay; setTime:(v:TimeOfDay)=>void; onPlan:()=>void;
}
const modes: {name:TravelMode; icon:any}[] = [
  {name:"Walking",icon:Footprints},{name:"Cycling",icon:Bike},{name:"Public Transport",icon:BusFront},{name:"Car",icon:Car}
];

export default function SearchBar({start,destination,setStart,setDestination,mode,setMode,time,setTime,onPlan}:Props){
  return <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900 lg:p-5">
    <div className="mb-4 flex items-center justify-between gap-3">
      <div><p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Plan a commute</p><h1 className="mt-1 text-xl font-extrabold tracking-tight text-slate-950 dark:text-white">Choose a safer way to get there.</h1></div>
      <span className="hidden rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 sm:block">Demo data active</span>
    </div>
    <div className="grid gap-3 lg:grid-cols-[1fr_1fr_auto]">
      <label className="relative block">
        <span className="sr-only">Starting location</span><MapPin className="absolute left-3 top-3.5 text-emerald-600" size={18}/>
        <input value={start} onChange={e=>setStart(e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm font-medium outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Starting location"/>
      </label>
      <label className="relative block">
        <span className="sr-only">Destination</span><ArrowRight className="absolute left-3 top-3.5 text-slate-400" size={18}/>
        <input value={destination} onChange={e=>setDestination(e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm font-medium outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Destination"/>
      </label>
      <button onClick={onPlan} className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800 dark:bg-emerald-600 dark:hover:bg-emerald-500"><Search size={17} className="mr-2 inline"/> Plan route</button>
    </div>
    <div className="mt-4 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-wrap gap-2">
        {modes.map(({name,icon:Icon})=><button key={name} onClick={()=>setMode(name)} className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold transition ${mode===name?"border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300":"border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"}`}><Icon size={15}/>{name}</button>)}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-500">Time</span>
        <select value={time} onChange={e=>setTime(e.target.value as TimeOfDay)} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white">
          {(["Morning","Afternoon","Evening","Night"] as TimeOfDay[]).map(t=><option key={t}>{t}</option>)}
        </select>
      </div>
    </div>
  </section>
}