import { MapContainer, TileLayer, Polyline, CircleMarker, Popup } from "react-leaflet";
import { LocateFixed, Layers3 } from "lucide-react";
import { RouteOption, SafePlace } from "../types";
import { MUMBAI_CENTER } from "../data/mockData";

const routeColor=(kind:string)=>kind==="Safest Route"?"#16a34a":kind==="Balanced Route"?"#f59e0b":"#475569";
const placeColor=(type:string)=>type==="Police"?"#2563eb":type==="Hospital"?"#dc2626":type==="Fire"?"#ea580c":type==="Transit"?"#7c3aed":"#0891b2";

export default function MapView({routes,selected,safePlaces,heatmap,onToggleHeatmap}:{routes:RouteOption[];selected:string;safePlaces:SafePlace[];heatmap:boolean;onToggleHeatmap:()=>void}){
 return <div className="relative h-full min-h-[500px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-soft dark:border-slate-800">
  <MapContainer center={MUMBAI_CENTER} zoom={13} scrollWheelZoom className="z-0">
    <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    {heatmap && <>
      <CircleMarker center={[19.073,72.884]} radius={70} pathOptions={{color:"#f59e0b",fillOpacity:.12,weight:1}}/>
      <CircleMarker center={[19.084,72.895]} radius={58} pathOptions={{color:"#dc2626",fillOpacity:.10,weight:1}}/>
      <CircleMarker center={[19.079,72.889]} radius={85} pathOptions={{color:"#16a34a",fillOpacity:.10,weight:1}}/>
    </>}
    {routes.map(r=><Polyline key={r.id} positions={r.coords} pathOptions={{color:routeColor(r.kind),weight:r.id===selected?8:5,opacity:r.id===selected?1:.48,dashArray:r.id==="fast"?"10 10":undefined}} className="route-line"/>)}
    {safePlaces.map(p=><CircleMarker key={p.id} center={p.coords} radius={7} pathOptions={{color:placeColor(p.type),fillColor:placeColor(p.type),fillOpacity:.95,weight:2}}><Popup><strong>{p.name}</strong><br/>{p.type} · {p.distance}<br/><small>{p.verified?"Verified public facility":"Demo location"}</small></Popup></CircleMarker>)}
  </MapContainer>
  <div className="absolute left-4 top-4 z-[500] flex items-center gap-2 rounded-2xl border border-white/70 bg-white/95 p-2 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
    <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-700"><LocateFixed size={18}/></span>
    <div className="pr-2"><p className="text-xs font-extrabold text-slate-900 dark:text-white">Mumbai demo area</p><p className="text-[10px] text-slate-500">Aggregated safety view</p></div>
  </div>
  <button onClick={onToggleHeatmap} className={`absolute right-4 top-4 z-[500] flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-extrabold shadow-lg backdrop-blur ${heatmap?"border-emerald-500 bg-emerald-600 text-white":"border-white/70 bg-white/95 text-slate-700 dark:border-slate-700 dark:bg-slate-900/95 dark:text-white"}`}><Layers3 size={15}/>{heatmap?"Hide safety layer":"Safety heatmap"}</button>
  <div className="absolute bottom-4 left-4 z-[500] rounded-2xl border border-white/70 bg-white/95 p-3 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
    <div className="mb-2 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Routes</div>
    <div className="flex flex-wrap gap-3 text-[10px] font-bold text-slate-600 dark:text-slate-300">
      <span><i className="mr-1 inline-block h-2 w-6 rounded bg-emerald-600"/>Safest</span>
      <span><i className="mr-1 inline-block h-2 w-6 rounded bg-amber-500"/>Balanced</span>
      <span><i className="mr-1 inline-block h-2 w-6 rounded bg-slate-600"/>Fastest</span>
    </div>
  </div>
 </div>
}