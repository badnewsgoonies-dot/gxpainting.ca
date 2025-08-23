
# GX Painting LTD — Website

Vite + React + TypeScript + **Material UI** + Tailwind utilities + React Router.  
Netlify-ready with SPA routing and a serverless email function (Resend).

## Dev
```bash
npm install
npm run dev
```

## Build & Preview
```bash
npm run build
npm run preview
```

## Deploy (Netlify)
- Build command: `vite build`
- Publish directory: `dist`
- SPA fallback: `netlify.toml` (/* -> /index.html)

### Contact (Resend via Netlify Function)
- Endpoint: `/.netlify/functions/mail`
- Set env var: `RESEND_API_KEY` in Netlify → Site settings → Environment.
- You can switch to FormSubmit (no backend) by posting to https://formsubmit.co/ajax/gxpainting@hotmail.com

## Notes
- Images live in `/public`. Update homepage featured images in `src/pages/Home.tsx`.
- Logos: `/public/logo-bold.svg`, `/public/logo-lockup.svg`, `/public/logo-hero.svg`.
