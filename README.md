
# GX Painting LTD — Netlify + Resend

This repo is ready for **Netlify** deploys and sends contact emails via a **Netlify Function** using **Resend**.

## Local dev
```bash
npm ci
npm run dev
```

## Production build
```bash
npm run build
npm run preview # optional
```


![Vite](https://img.shields.io/badge/build-Vite-646CFF)
![Netlify](https://img.shields.io/badge/deploy-Netlify-00AD9F)
![License](https://img.shields.io/badge/license-MIT-green)


## Deploy to Netlify
- Use Git: connect this repo; Netlify auto-detects Vite.
- Or CLI:
  ```bash
  npm i -g netlify-cli
  netlify login
  netlify init          # link this folder to a Netlify site
  netlify deploy --build --prod
  ```

### Build settings
- Build command: `vite build`
- Publish directory: `dist`
- SPA routing is handled by `netlify.toml` (/* → /index.html).

## Contact form via Resend (Netlify Function)
- Function file: `netlify/functions/mail.js`
- Endpoint: `/.netlify/functions/mail`
- Environment variable in Netlify:
  - `RESEND_API_KEY` = (your API key from https://resend.com/)
- Optional: replace the `from` address with your verified sending domain in `mail.js`.

## Fallback (no backend)
If you prefer no server at all, switch `Contact.tsx` back to:
```ts
const ENDPOINT = 'https://formsubmit.co/ajax/gxpainting@hotmail.com';
```
(FYI: first form submission requires a verification click from FormSubmit.)

## Icons & PWA manifest
- PNG icons in `/public`: `icon-32.png`, `icon-64.png`, `apple-touch-icon.png`
- `site.webmanifest` is linked in `index.html`.
- You can add larger sizes later (192/512) if you want installable app prompts.

## Repo layout
- `src/` — React + Tailwind
- `public/` — static assets (icons, logos, robots, sitemap)
- `netlify/functions/` — serverless function(s)
- `netlify.toml` — build+redirect config



## Netlify environment variable
In your Netlify site:
1. **Site settings → Environment variables**
2. Add `RESEND_API_KEY` with your Resend key
3. Redeploy

> The function is at `/.netlify/functions/mail` and is already wired in `src/pages/Contact.tsx`.
