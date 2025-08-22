
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Layout(){
  return (
    <div className="antialiased text-slate-800 dark:text-slate-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded">Skip to content</a>
      <Navbar />
      <div className="md:hidden sticky top-16 z-30 bg-white/90 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-4 py-2 flex justify-between items-center">
        <span className="text-sm">Need a quote?</span>
        <a className="text-sm bg-emerald-600 text-white px-3 py-2 rounded-lg" href="/contact">Free Quote</a>
      </div>
      <main id="main" className="container mx-auto px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
