# TripFix Design Research — Interactive Report

## Project Overview
Interactive web presentation of TripFix's Human-in-the-Loop AI UX design research. Combines two independent research reports into a single, navigable web experience with embedded product examples (videos, images, links).

## Architecture
- **Single-page HTML application** (`index.html`) — fully self-contained
- No build tools, frameworks, or dependencies required
- Google Fonts loaded via CDN (Inter, JetBrains Mono)
- YouTube videos embedded via iframe
- Product images loaded from source websites with fallback handling

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
