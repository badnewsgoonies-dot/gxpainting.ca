
import { useEffect, useState } from 'react';
import { ImageList, ImageListItem, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const IMAGES = [
  { src: `/gx-1.webp`, alt: `Recent work 1`, width: 1600, height: 1200 },
  { src: `/gx-2.webp`, alt: `Recent work 2`, width: 1600, height: 1200 },
  { src: `/gx-3.webp`, alt: `Recent work 3`, width: 1600, height: 1200 },
  { src: `/gx-4.webp`, alt: `Recent work 4`, width: 1600, height: 1200 },
  { src: `/gx-5.webp`, alt: `Recent work 5`, width: 1600, height: 1200 },
  { src: `/gx-6.webp`, alt: `Recent work 6`, width: 1600, height: 1200 }
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
    <section>
      <h1 className="text-3xl font-bold">Gallery</h1>
      <p className="text-slate-600">Click any photo to view it larger. Use Left/Right arrows or ESC to close.</p>

      <ImageList variant="masonry" cols={3} gap={12}>
        {IMAGES.map((img, i) => (
          <ImageListItem key={i} onClick={() => setIndex(i)} sx={{ cursor:'zoom-in' }}>
            <img src={img.src} alt={img.alt} loading="lazy" width={img.width} height={img.height} />
          </ImageListItem>
        ))}
      </ImageList>

      <Dialog open={index !== null} onClose={() => setIndex(null)} maxWidth="lg" fullWidth>
        <IconButton onClick={() => setIndex(null)} sx={{ position:'absolute', right:8, top:8 }} aria-label="Close">
          <CloseIcon/>
        </IconButton>
        {index !== null && (
          <img src={IMAGES[index].src} alt={IMAGES[index].alt} style={{ width:'100%', height:'auto' }} />
        )}
      </Dialog>
    </section>
  );
}
