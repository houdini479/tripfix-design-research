# TripFix Design Research — Interactive Report

Interactive web presentation of the TripFix Human-in-the-Loop AI UX design research, combining two independent research analyses into a single navigable experience with embedded product demos and videos.

## Quick Start (Local)

```bash
npx serve -s . -l 8080
```

Then open [http://localhost:8080](http://localhost:8080)

## Deploy to Railway

1. Push this repo to GitHub
2. In Railway, click **New Project → Deploy from GitHub repo**
3. Select this repository — Railway will auto-detect the config
4. Deploy. No environment variables needed.

## What's Included

- `index.html` — Self-contained interactive report (no build step)
- `TripFix_Design_Research.pdf` — Initial research report (14 pages)
- `TripFix_HITL_Design_Research_Final.pdf` — Synthesized research report (16 pages)
- `railway.json` — Railway deployment configuration

## Features

- Fixed sidebar navigation with scroll-aware highlighting
- 6 embedded YouTube product demo videos
- Product cards for 12 cross-domain exemplars
- Visual components: tier cards, confidence traffic lights, comparison tables, KPI grids
- Downloadable source PDF reports from the top bar
- Fully responsive layout
