
export default function Process(){
  const steps = [
    { title: 'Prep & Protection', text: 'Cover floors & furniture, mask edges, and repair minor imperfections.' },
    { title: 'Surface Repair', text: 'Scrape, sand, fill gaps, and spot-prime as needed for clean adhesion.' },
    { title: 'Prime', text: 'Use the correct primer for the surface (stain blocking, bonding, or drywall).' },
    { title: 'Paint', text: 'Premium coatings applied in even coats; crisp lines and consistent coverage.' },
    { title: 'Clean Up', text: 'Job site tidied daily; full cleanup and walkthrough on completion.' },
    { title: 'Final Walkthrough', text: 'Inspect with you, touch-ups as needed, and advice on care.' },
  ];
  return (
    <section>
      <h1 className="text-3xl font-bold">Our Process</h1>
      <p className="text-slate-600 mb-4">A clear, tidy workflow from start to finish.</p>
      <ol className="grid md:grid-cols-2 gap-4 list-decimal pl-5">
        {steps.map((s,i)=>(
          <li key={i}><span className="font-semibold">{s.title}:</span> {s.text}</li>
        ))}
      </ol>
    </section>
  )
}
