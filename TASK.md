# TripFix Design Research — Task Tracker

## Completed Tasks

### 2026-02-22 — Railway Landing Page Navigation Fix
- [x] Investigate non-responsive landing page card navigation on Railway deployment
- [x] Confirm `research.html` and `prototype.html` exist and are linked correctly
- [x] Update static server commands to non-SPA mode for multi-page navigation (`serve .` instead of `serve -s .`)
- [x] Update README quick-start command to match deployment mode

### 2026-02-17 — Create Interactive Web Report
- [x] Read and analyze both research PDF reports
- [x] Identify all referenced products, design patterns, and resources
- [x] Search for embeddable assets (YouTube videos, product screenshots, blog posts)
- [x] Build interactive HTML report with sidebar navigation
- [x] Embed 6 YouTube videos across product sections
- [x] Create product cards for EvenUp, Harvey AI, GitHub Copilot, Labelbox, CLARA Analytics, Relativity aiR, Shape of AI, Agentic Design Patterns
- [x] Build visual components: tier cards, zone cards, confidence traffic lights, review triad, comparison table, KPI grid, timeline, resource cards
- [x] Add scroll progress bar and active section highlighting
- [x] Create PLANNING.md and TASK.md

## Discovered During Work
- Harvey AI videos are hosted on their own domain (not YouTube) — linked to their video page instead
- Labelbox has interactive Arcade.software demos that can be linked directly
- Some product screenshots are not directly embeddable (CDN restrictions) — used graceful fallback with `onerror` handlers

### 2026-02-19 — Claim History & Citation Popups
- [x] Merge Evidence, AI Reasoning, and Audit Trail into unified "Claim History" section (Section 6)
- [x] Add visual Claim History timeline mockup with colour-coded event types
- [x] Update Review Triad right panel to reference Claim History
- [x] Update sidebar navigation (Governance → Claim History)
- [x] Cross-reference Claim History from Section 5.2 Reasoning Trails
- [x] Implement NotebookLM-style citation system with numbered badges
- [x] Add 18 citation badges at key factual claims throughout the report
- [x] Build hover popup system showing source excerpts and document references
- [x] Citation popup with smooth positioning, viewport awareness, and hover persistence

### 2026-02-19 — Landing Page & UX Prototype
- [x] Rename index.html to research.html
- [x] Create landing page (index.html) with two cards: Research and Prototype
- [x] Build UX prototype page with dashboard and review workbench views
- [x] Dashboard: three-zone layout (Action queue, Pipeline monitor, Audit completions)
- [x] Review workbench: three-pane triad (Queue, Claim Review, Claim History timeline)
- [x] Interactive actions: approve/edit/reject with visual feedback
- [x] Separate CSS and JS for prototype (prototype-styles.css, prototype-app.js)
- [x] Update README, PLANNING.md with new architecture
- [x] Push to GitHub for Railway deployment

## Future Improvements
- [ ] Add dark/light theme toggle
- [ ] Add search functionality across report content
- [ ] Add print-friendly stylesheet
- [ ] Consider adding Labelbox Arcade.software embeds as iframes
- [ ] Add team annotation/comment capability
- [ ] Consider PDF export option
