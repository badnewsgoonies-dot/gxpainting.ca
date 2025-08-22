
import { useEffect, useState } from 'react';
const IMAGES = [
  { src: `/gx-1.webp`, alt: `Recent work 1`, width: 1920, height: 1080 },
  { src: `/gx-2.webp`, alt: `Recent work 2`, width: 1920, height: 1281 },
  { src: `/gx-3.webp`, alt: `Recent work 3`, width: 1000, height: 667 },
  { src: `/gx-4.webp`, alt: `Recent work 4`, width: 1920, height: 1280 },
  { src: `/gx-5.webp`, alt: `Recent work 5`, width: 1920, height: 1440 },
  { src: `/gx-6.webp`, alt: `Recent work 6`, width: 1920, height: 1385 }
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent){
      if(index === null) return;
      if(e.key === 'Escape') setIndex(null);
      if(e.key === 'ArrowRight') setIndex((i) => i === null ? null : (i + 1) % IMAGES.length);
      if(e.key === 'ArrowLeft') setIndex((i) => i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="text-slate-600">Click any photo to view it larger. Use Left/Right arrows or ESC to close.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {IMAGES.map((img, i) => (
          <figure key={i} className="rounded-xl overflow-hidden cursor-zoom-in" onClick={() => setIndex(i)}>
            <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" className="w-full h-56 object-cover transition hover:opacity-90" />
            <figcaption className="text-sm text-slate-600 p-2">{img.alt}</figcaption>
          </figure>
        ))}
      </div>

      {index !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setIndex(null)}>
          <div className="relative max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img src={IMAGES[index].src} alt={IMAGES[index].alt} width={IMAGES[index].width} height={IMAGES[index].height} className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl" />
            <button aria-label="Close" onClick={() => setIndex(null)} className="absolute -top-3 -right-3 bg-white text-black rounded-full w-9 h-9 grid place-items-center shadow">×</button>
            <button aria-label="Previous image" onClick={() => setIndex((index! - 1 + IMAGES.length) % IMAGES.length)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 text-black rounded-full w-10 h-10 grid place-items-center shadow">‹</button>
            <button aria-label="Next image" onClick={() => setIndex((index! + 1) % IMAGES.length)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 text-black rounded-full w-10 h-10 grid place-items-center shadow">›</button>
          </div>
        </div>
      )}
    </section>
  );
}
