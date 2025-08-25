
GX Cleanup Pack — Force the Lite Layout live
--------------------------------------------
This pack deletes Services/Process/Reviews/FAQ pages, replaces the header and home,
and pushes your changes so Netlify will redeploy.

FILES INCLUDED
- src/layout/SiteHeader.tsx  (nav: Our Work + Contact)
- src/pages/Home.tsx         (Hero → Work → Contact only)
- src/App.tsx                (renders <Home />; includes schema + sticky CTA)
- apply_cleanup.ps1          (PowerShell script to apply + commit + push)

USAGE (Windows PowerShell)
1) Extract this zip anywhere.
2) Run:
   ./apply_cleanup.ps1 -RepoPath "E:\path\to\your\repo" -Branch "main"
3) Watch Netlify auto-deploy.

Notes
- If your branch isn’t `main`, pass the correct one.
- If files don't exist, the script ignores them safely.
