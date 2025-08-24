# GX Gallery — Photos Ready (MUI)

You can drop this into your project and the gallery will be ready with your 6 real photos.

## What’s inside
- `public/photos/gx-1.webp` ... `gx-6.webp` (your images)
- `src/data/gallery.ts` (pre-filled with correct width/height for each image)
- `src/components/Gallery.tsx` (responsive masonry gallery w/ placeholders)
- `src/pages/Gallery.tsx`
- `src/styles/gallery.css` (small hover effect)

## Install
Unzip at the root of your project (same level as `src/`). If you don't use the `@/src` alias, change imports to relative:
- In `src/components/Gallery.tsx`: `import { items } from "../data/gallery";`
- In `src/pages/Gallery.tsx`: `import Gallery from "../components/Gallery";`

Done. Build/deploy and the gallery shows your photos.