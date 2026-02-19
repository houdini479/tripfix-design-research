# TripFix Design Research — Task Tracker

## Completed Tasks

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

## Future Improvements
- [ ] Add dark/light theme toggle
- [ ] Add search functionality across report content
- [ ] Add print-friendly stylesheet
- [ ] Consider adding Labelbox Arcade.software embeds as iframes
- [ ] Add team annotation/comment capability
- [ ] Consider PDF export option
