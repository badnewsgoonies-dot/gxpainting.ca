
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
const linkCls = ({isActive}:{isActive:boolean}) => `hover:text-emerald-700 ${isActive ? 'text-emerald-700 font-semibold' : ''}`
export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo-mark.svg" alt="GX logo" className="w-9 h-9" />
          GX Painting LTD
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/services" className={linkCls}>Services</NavLink>
          <NavLink to="/gallery" className={linkCls}>Gallery</NavLink>
          <NavLink to="/process" className={linkCls}>Process</NavLink>
          <NavLink to="/reviews" className={linkCls}>Reviews</NavLink>
          <NavLink to="/faq" className={linkCls}>FAQ</NavLink>
          <NavLink to="/contact" className={linkCls}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="text-sm bg-emerald-600 text-white px-3 py-2 rounded-lg">Free Quote</Link>
        </div>
      </div>
    </header>
  )
}
