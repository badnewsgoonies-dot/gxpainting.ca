
# Contributing Guide

## Branching
- `main` = production
- `dev` = staging / preview

## Workflow
1. Create a feature branch from `dev`.
2. Run locally: `npm ci && npm run dev`.
3. Lint/format (optional): `npm run fmt`.
4. Commit small, descriptive changes.
5. Open a PR into `dev`; Netlify Preview will build automatically.
6. After review, merge `dev` -> `main` to deploy to production.

## Commit messages
- Use concise, action-oriented messages.
  - `feat: add owner section`
  - `fix: gallery lightbox sizing`
  - `style: tighten hero spacing`

## Testing checklist
- [ ] Home loads without layout shift (CLS OK)
- [ ] Gallery lightbox opens and navigates
- [ ] Contact form submits and shows success/error
- [ ] Mobile header and CTA look good
- [ ] Dark mode toggle persists
