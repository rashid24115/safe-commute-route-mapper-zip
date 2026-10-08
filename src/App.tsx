import { useMemo, useState } from "react";
import NavigationHeader from "./components/NavigationHeader";
import SearchBar from "./components/SearchBar";
import MapView from "./components/MapView";
import RouteCard from "./components/RouteCard";
import RouteComparison from "./components/RouteComparison";
import SafePlaces from "./components/SafePlaces";
import EmergencyPanel from "./components/EmergencyPanel";
import SafetyAlerts from "./components/SafetyAlerts";
import Dashboard from "./components/Dashboard";
import { routes, safePlaces } from "./data/mockData";
import { adjustSafetyScore } from "./services/safetyScoring";
import { TimeOfDay, TravelMode } from "./types";
import { ShieldAlert, LockKeyhole } from "lucide-react";

export default function App(){
 const [dark,setDark]=useState(false);
 const [dashboard,setDashboard]=useState(false);
 const [start,setStart]=useState("Andheri East");
 const [destination,setDestination]=useState("Bandra West");
 const [mode,setMode]=useState<TravelMode>("Walking");
 const [time,setTime]=useState<TimeOfDay>("Evening");
 const [selected,setSelected]=useState("safe");
 const [heatmap,setHeatmap]=useState(true);
 const scored=useMemo(()=>routes.map(r=>({...r,score:adjustSafetyScore(r.score,time)})),[time]);
 const current=scored.find(r=>r.id===selected) ?? scored[0];

 return <div className={dark?"dark":""}>
  <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
   <NavigationHeader dark={dark} setDark={setDark} dashboard={dashboard} setDashboard={setDashboard}/>
   {dashboard ? <Dashboard route={current} places={safePlaces} onBack={()=>setDashboard(false)}/> :
   <main className="mx-auto max-w-[1500px] px-4 py-5 lg:px-6">
    <div className="mb-5 rounded-3xl bg-slate-950 px-5 py-6 text-white shadow-soft lg:px-7">
      <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-400">Personal safety navigation</p><h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Choose a safer way to get there.</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Plan your commute using safety-focused route information, verified facilities, and travel conditions — without exposing sensitive incident details.</p></div>
    </div>
    <SearchBar start={start} destination={destination} setStart={setStart} setDestination={setDestination} mode={mode} setMode={setMode} time={time} setTime={setTime} onPlan={()=>setSelected("safe")}/>
    <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(340px,.8fr)]">
      <MapView routes={scored} selected={selected} safePlaces={safePlaces} heatmap={heatmap} onToggleHeatmap={()=>setHeatmap(!heatmap)}/>
      <aside className="space-y-4">
        <div><div className="mb-2 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Route alternatives</p><h2 className="text-lg font-extrabold dark:text-white">Compare options</h2></div><span className="text-xs font-bold text-slate-400">{mode}</span></div><div className="space-y-2">{scored.map(r=><RouteCard key={r.id} route={r} selected={r.id===selected} onSelect={()=>setSelected(r.id)}/>)}</div></div>
        <RouteComparison route={current}/>
        <EmergencyPanel/>
        <SafePlaces places={safePlaces}/>
        <SafetyAlerts/>
      </aside>
    </div>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
      <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200"><ShieldAlert size={19}/></span><div><h2 className="font-extrabold dark:text-white">Safety heatmap</h2><p className="mt-1 text-xs leading-5 text-slate-500">Only aggregated area trends are shown. Individual victim identities and exact incident addresses are intentionally excluded.</p><div className="mt-3 flex gap-2 text-[10px] font-bold"><span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700">Low concern</span><span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">Moderate</span><span className="rounded-full bg-red-100 px-2 py-1 text-red-700">Higher</span></div></div></div>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30"><LockKeyhole size={19}/></span><div><h2 className="font-extrabold dark:text-white">Privacy by design</h2><p className="mt-1 text-xs leading-5 text-slate-500">The demo uses aggregated/anonymized safety indicators. Real integrations should minimize personal data and clearly identify verified versus estimated information.</p></div></div>
      </section>
    </div>
    <footer className="py-7 text-center text-[11px] leading-5 text-slate-500">SafeRoute is a safety-support tool, not a guarantee. Always consider current conditions, local guidance, and your own judgement. Demo data is synthetic.</footer>
   </main>}
  </div>
 </div>
}