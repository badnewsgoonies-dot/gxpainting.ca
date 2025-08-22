
export default function Process(){
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Our Painting Process</h1>
        <p className="text-slate-600">Clear communication, clean job sites, and durable results from first call to final walkthrough.</p>
      </header>
      <ol className="grid md:grid-cols-2 gap-6">
        <li className="p-5 border rounded-xl bg-white dark:bg-slate-900/40"><h3 className="text-xl font-semibold">1) Consult & Estimate</h3><p className="mt-2 text-slate-700 dark:text-slate-300">Scope, colors, timeline, and access. Same‑day written estimate.</p></li>
        <li className="p-5 border rounded-xl bg-white dark:bg-slate-900/40"><h3 className="text-xl font-semibold">2) Schedule & Prep</h3><p className="mt-2 text-slate-700 dark:text-slate-300">Furniture protection, masking, and site safety.</p></li>
        <li className="p-5 border rounded-xl bg-white dark:bg-slate-900/40"><h3 className="text-xl font-semibold">3) Surface Repair</h3><p className="mt-2 text-slate-700 dark:text-slate-300">Sanding, patching, caulking, and priming.</p></li>
        <li className="p-5 border rounded-xl bg-white dark:bg-slate-900/40"><h3 className="text-xl font-semibold">4) Painting</h3><p className="mt-2 text-slate-700 dark:text-slate-300">Two-coat coverage with premium products matched to the surface.</p></li>
        <li className="p-5 border rounded-xl bg-white dark:bg-slate-900/40"><h3 className="text-xl font-semibold">5) Touch‑ups</h3><p className="mt-2 text-slate-700 dark:text-slate-300">Line checks, light de‑nib sanding on trim, and consistency review.</p></li>
        <li className="p-5 border rounded-xl bg-white dark:bg-slate-900/40"><h3 className="text-xl font-semibold">6) Clean‑up & Walkthrough</h3><p className="mt-2 text-slate-700 dark:text-slate-300">Hardware reinstalled, rooms cleaned, and a final walkthrough together.</p></li>
      </ol>
    </section>
  )
}
