# Fixed Gallery Data

This replaces your `src/data/gallery.ts` so that all `src` entries have a **leading slash** (e.g. `/photos/gx-1.webp`).

## Steps
1. Unzip this into your project root.
2. Overwrite `src/data/gallery.ts` with this one.
3. Deploy again to Netlify.

Now the gallery will correctly load images from `/photos/...`.
