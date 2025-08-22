
export default function Footer(){
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-12">
      <div className="container mx-auto px-4 py-8 text-sm text-slate-600 dark:text-slate-400">
        <div>© {new Date().getFullYear()} GX Painting LTD · WSIB · $5M liability · <a className="underline" href="mailto:gxpainting@hotmail.com">gxpainting@hotmail.com</a></div>
      </div>
    </footer>
  )
}
