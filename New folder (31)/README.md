# GX Painting — Patch (SEO, a11y, contact form)

This patch gives you:
- Proper meta tags (description, Open Graph, Twitter, PWA) and a `<main>` landmark in `index.html`
- A ready-to-use **Netlify** contact form in `ContactForm.tsx` that posts to `/thanks.html`
- A nicer `public/thanks.html`
- `public/robots.txt` and `public/sitemap.xml`
- `_headers` update so `/thanks.html` is not cached (so users always see fresh copy)

## Apply

1. Open your repo and replace files as follows:
   - `index.html` → root `index.html` (Vite entry)
   - `src/components/ContactForm.tsx` → replace with `src.components.ContactForm.tsx`
   - `public/thanks.html` → replace with `public.thanks.html`
   - `public/robots.txt` → new
   - `public/sitemap.xml` → new
   - `public/_headers` → replace with `public._headers` (or merge lines)

2. Commit and deploy on Netlify.

## Notes
- If your domain is **not** `https://gxpainting.ca`, update the canonical URL and sitemap `loc` values inside the files.
- Keep only **one** `index.html` for Vite at the project root; the `public/index.html` is not needed for Vite.
- Ensure `ContactForm.tsx` is actually rendered on your Contact section/page.
