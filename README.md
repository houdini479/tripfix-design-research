# TripFix — Design Research & UX Prototype

Landing page with two experiences: comprehensive design research report and an interactive UX prototype of the TripFix claims review workbench.

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

### Pages
- `index.html` — Landing page with navigation to both experiences
- `research.html` — Interactive design research report (12 exemplars, 6 videos, pattern libraries)
- `prototype.html` — UX prototype of the TripFix review workbench
- `prototype-styles.css` — Styles for the prototype
- `prototype-app.js` — Interactivity for the prototype

### Source Documents
- `TripFix_Design_Research.pdf` — Initial research report (14 pages)
- `TripFix_HITL_Design_Research_Final.pdf` — Synthesized research report (16 pages)

### Deployment
- `railway.json` — Railway deployment configuration
- `package.json` — Node.js config for static serving

## Research Report Features

- Fixed sidebar navigation with scroll-aware highlighting
- 6 embedded YouTube product demo videos
- Product cards for 12 cross-domain exemplars
- NotebookLM-style citation popups with source excerpts
- Unified "Claim History" section with visual timeline mockup
- Downloadable source PDF reports

## UX Prototype Features

- **Dashboard view**: Three-zone layout (Action / Monitor / Audit)
- **Review workbench**: Three-pane triad (Queue / Claim Review / Claim History)
- **Claim History timeline**: Unified evidence + AI reasoning + human actions
- **Confidence indicators**: Field-level and claim-level confidence chips
- **Interactive actions**: Approve/Edit/Reject with visual feedback
- Responsive layout
