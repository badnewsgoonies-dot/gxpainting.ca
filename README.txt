
GX Layout Lite — Only Hero, Our Work, and Contact
-------------------------------------------------
This pack removes *Services*, *Process*, *Reviews*, and *FAQ* sections and updates the header.

FILES
- src/layout/SiteHeader.tsx   (nav now has only "Our Work" and "Contact")
- src/pages/Home.tsx          (contains just Hero → Our Work → Contact)
- src/styles/scroll-snap.css  (optional)
- src/App.tsx                 (example wiring)

STEPS
1) Copy files to the same paths in your project (overwrite when asked).
2) Ensure you have:
   - src/components/Hero.tsx
   - src/components/Gallery.tsx
   - src/components/ContactForm.tsx
3) (Optional) In main.tsx, import global CSS:
   import "./styles/scroll-snap.css";
4) Delete any unused route/page files if present (e.g., Services/Process/Reviews/FAQ pages)
   or simply leave them—this layout does not render them.
5) Deploy.
