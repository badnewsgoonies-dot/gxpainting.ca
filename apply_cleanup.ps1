
param(
  [Parameter(Mandatory=$true)] [string]$RepoPath,
  [string]$Branch = "main"
)

Write-Host ">>> Applying GX Cleanup Pack to $RepoPath (branch: $Branch)" -ForegroundColor Cyan

# 1) Delete common Services/Process/Reviews/FAQ files if they exist
$pathsToRemove = @(
  "src/pages/Services.tsx", "src/pages/Services/index.tsx", "src/pages/Services",
  "src/pages/Process.tsx",  "src/pages/Process/index.tsx",  "src/pages/Process",
  "src/pages/Reviews.tsx",  "src/pages/Reviews/index.tsx",  "src/pages/Reviews",
  "src/pages/FAQ.tsx",      "src/pages/FAQ/index.tsx",      "src/pages/FAQ",
  "src/components/Services", "src/components/Process", "src/components/Reviews", "src/components/FAQ"
)
foreach ($p in $pathsToRemove) {
  $full = Join-Path $RepoPath $p
  if (Test-Path $full) {
    Write-Host "Removing $p"
    Remove-Item -Recurse -Force $full
  }
}

# 2) Ensure directories exist
New-Item -ItemType Directory -Force -Path (Join-Path $RepoPath "src/layout") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $RepoPath "src/pages")  | Out-Null

# 3) Copy replacement files
Copy-Item -Force -Path "$PSScriptRoot\src\layout\SiteHeader.tsx" -Destination (Join-Path $RepoPath "src\layout\SiteHeader.tsx")
Copy-Item -Force -Path "$PSScriptRoot\src\pages\Home.tsx"        -Destination (Join-Path $RepoPath "src\pages\Home.tsx")
Copy-Item -Force -Path "$PSScriptRoot\src\App.tsx"               -Destination (Join-Path $RepoPath "src\App.tsx")

# 4) Commit & push
Push-Location $RepoPath
git checkout $Branch 2>$null | Out-Null
git add -A
git commit -m "GX Cleanup: remove Services/Process/Reviews/FAQ and enforce Lite layout" || Write-Host "Nothing to commit"
git push
Pop-Location

Write-Host ">>> Done. Netlify should auto-deploy the pushed commit." -ForegroundColor Green
