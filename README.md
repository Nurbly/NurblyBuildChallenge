# NurblyBuildChallenge
Landing page for the Nurbly Build Challenge.

To publish, open Settings, then Pages, and set it to deploy from the `main` branch, `/ (root)` folder.
To change the Register, sponsor, rules, Discord and contact links, edit the constants at the top of `site.js`. Both pages use them. Leave `DISCORD_URL` empty to hide the Discord mention.

The official rules live in `rules.html`. When the rules change, update its "Last updated" date and check that the landing page's hero facts, prizes, dates, stage deadlines and judging still match.

The link preview image is `assets/share.png` (1200 by 630). It repeats the prize total and the start date, so rebuild it when either changes. Edit `tools/share-image.html`, then run this from the repo root in PowerShell.

```powershell
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=8000 --user-data-dir="$env:TEMP\share-image-profile" --screenshot="$PWD\assets\share.png" "file:///$($PWD.Path.Replace('\','/'))/tools/share-image.html"
```
