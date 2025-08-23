
export default function Reviews(){
  const items = [
    { name:'C. Patel', text:'Excellent prep and clean finish. Will hire again.'},
    { name:'J. Adams', text:'On time, tidy, and great attention to detail.'},
    { name:'M. Singh', text:'They handled our exterior repaint beautifully.'},
  ]
  return (
    <section>
      <h1 className="text-3xl font-bold">Reviews</h1>
      <div className="mt-3 grid md:grid-cols-3 gap-3">
        {items.map((r,i)=>(
          <blockquote key={i} className="border rounded-lg p-3 bg-white shadow-sm">
            “{r.text}”
            <footer className="text-sm text-slate-600 mt-2">— {r.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
