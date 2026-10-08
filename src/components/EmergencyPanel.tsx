import { PhoneCall, Share2, ShieldCheck, UserRoundCheck, X } from "lucide-react";
import { useState } from "react";

export default function EmergencyPanel(){
 const [open,setOpen]=useState(false); const [safe,setSafe]=useState(false); const [shared,setShared]=useState(false);
 return <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-slate-900">
  <div className="mb-3"><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Emergency & support</p><h2 className="mt-1 text-lg font-extrabold dark:text-white">Stay connected</h2></div>
  <div className="grid grid-cols-2 gap-2">
   <button onClick={()=>setOpen(true)} className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 px-3 py-3 text-xs font-extrabold text-white hover:bg-red-700"><PhoneCall size={16}/> Emergency call</button>
   <button onClick={()=>{setShared(true);setTimeout(()=>setShared(false),1800)}} className="flex items-center justify-center gap-2 rounded-2xl bg-slate-100 px-3 py-3 text-xs font-extrabold text-slate-700 dark:bg-slate-800 dark:text-white"><Share2 size={16}/>{shared?"Shared":"Share trip"}</button>
   <button onClick={()=>setSafe(!safe)} className={`col-span-2 flex items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-xs font-extrabold ${safe?"border-emerald-500 bg-emerald-50 text-emerald-700":"border-slate-200 text-slate-700 dark:border-slate-700 dark:text-white"}`}><UserRoundCheck size={16}/>{safe?"I'm Safe ✓":"I'm Safe"}</button>
  </div>
  <p className="mt-3 text-[10px] leading-4 text-slate-500">Emergency actions require your explicit confirmation. SafeRoute never places a call automatically.</p>
  {open&&<div className="fixed inset-0 z-[2000] grid place-items-center bg-slate-950/50 p-4"><div className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl dark:bg-slate-900"><div className="flex justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-red-600">Confirm action</p><h3 className="mt-1 text-xl font-extrabold dark:text-white">Call emergency services?</h3></div><button onClick={()=>setOpen(false)}><X/></button></div><p className="mt-3 text-sm leading-6 text-slate-500">This demo does not place a call. In production, this button should invoke the device's emergency-call flow only after explicit user confirmation.</p><button onClick={()=>setOpen(false)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 py-3 text-sm font-extrabold text-white"><PhoneCall size={17}/> Confirm & continue</button></div></div>}
 </section>
}