
import { useEffect, useState } from 'react';
export default function ThemeToggle(){
  const [dark, setDark] = useState(false);
  useEffect(()=>{ const s=localStorage.getItem('theme'); if(s==='dark'){ document.documentElement.classList.add('dark'); setDark(true);} },[]);
  useEffect(()=>{ if(dark){ document.documentElement.classList.add('dark'); localStorage.setItem('theme','dark'); } else { document.documentElement.classList.remove('dark'); localStorage.setItem('theme','light'); } }, [dark]);
  return <button onClick={()=>setDark(d=>!d)} className="text-sm px-3 py-2 rounded-lg border hover:bg-slate-50 dark:hover:bg-slate-800" aria-label="Toggle dark mode">{dark?'Light':'Dark'} mode</button>
}
