# TripFix Design Research & UX Prototype

## Project Overview
Landing page with two experiences: (1) comprehensive interactive design research report and (2) UX prototype of the TripFix claims review workbench. Combines two independent research reports with an interactive mockup of the proposed interface.

## Architecture
- **Multi-page static site** served by `npx serve`
- `index.html` — Landing page (choose Research or Prototype)
- `research.html` — Full design research report (self-contained HTML)
- `prototype.html` + `prototype-styles.css` + `prototype-app.js` — UX prototype
- No build tools or frameworks required
- Google Fonts loaded via CDN (Inter, JetBrains Mono)
- YouTube videos embedded via iframe (research report)
- Product images loaded from source websites with fallback handling
- Railway deployment via `railway.json` + `package.json`

## Design Decisions
- **Dark theme**: Professional, modern look suitable for team presentations
- **Fixed sidebar navigation**: Quick access to all 10+ sections
- **Scroll progress indicator**: Visual feedback on reading progress
- **Product cards**: Consistent format for each referenced product with links, videos, and key takeaways
- **Interactive elements**: Collapsible sections, tier cards, zone cards, confidence visualizations
- **Responsive**: Sidebar collapses on mobile, grid layouts stack

## Source Documents
- `TripFix_Design_Research.pdf` — Initial research report (14 pages)
- `TripFix_HITL_Design_Research_Final.pdf` — Synthesized research report (16 pages)

## Embedded Assets
### YouTube Videos
- EvenUp Case Companion demo
- EvenUp Claims Intelligence Platform overview
- GitHub Copilot Agent HQ Mission Control intro
- GitHub Copilot Coding Agent walkthrough
- GitHub Copilot Agent Updates
- GitHub End-to-End Agentic Development demo

### External Product Links
- Harvey AI Workflow Builder (website + video tour)
- Labelbox Interactive Workflow Demo (Arcade.software)
- Shape of AI pattern library
- Agentic Design Patterns
- Google PAIR Guidebook
- Microsoft HAX Toolkit
- All 12 cross-domain exemplar products
