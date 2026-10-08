import { Map, ShieldCheck, Sun, Moon, LayoutDashboard } from "lucide-react";

interface Props { dark: boolean; setDark: (v:boolean)=>void; dashboard: boolean; setDashboard:(v:boolean)=>void; }

export default function NavigationHeader({dark,setDark,dashboard,setDashboard}:Props) {
  return (
    <header className="sticky top-0 z-[1000] border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 lg:px-6">
        <button onClick={()=>setDashboard(false)} className="flex items-center gap-3 text-left" aria-label="SafeRoute home">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
            <ShieldCheck size={22}/>
          </span>
          <span>
            <span className="block text-lg font-extrabold tracking-tight text-slate-950 dark:text-white">SafeRoute</span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[.18em] text-slate-500 sm:block">Safe Commute Mapper</span>
          </span>
        </button>
        <nav className="flex items-center gap-1">
          <button onClick={()=>setDashboard(false)} className={`hidden rounded-xl px-3 py-2 text-sm font-semibold sm:flex ${!dashboard ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white":"text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"}`}>
            <Map size={16} className="mr-2"/> Plan route
          </button>
          <button onClick={()=>setDashboard(true)} className={`rounded-xl px-3 py-2 text-sm font-semibold ${dashboard ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white":"text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"}`}>
            <LayoutDashboard size={16} className="mr-2"/> Dashboard
          </button>
          <button onClick={()=>setDark(!dark)} className="ml-1 grid h-10 w-10 place-items-center rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800" aria-label="Toggle dark mode">
            {dark ? <Sun size={18}/> : <Moon size={18}/>}
          </button>
        </nav>
      </div>
    </header>
  );
}