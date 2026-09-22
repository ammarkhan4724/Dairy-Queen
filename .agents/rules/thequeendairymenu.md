---
description: "Workspace instructions and rules for The Queen Dairy Menu"
---

# The Queen Dairy Menu (`thequeendairymenu.us`) — Workspace Rules

## Core Principles
1. **Domain & Brand**: The site is **The Queen Dairy Menu** (`thequeendairymenu.us`).
2. **Keyword Protection**: Keep high-intent keywords (`Dairy Queen menu with prices 2026`, specific item names) intact.
3. **Data Protection**: Never modify or estimate 2026 prices, calories, portions, allergens, or ingredients.
4. **AdX Slot IDs**: `div-gpt-ad-thequeendairymenu_us-before_content` and `div-gpt-ad-thequeendairymenu_us-paragraph`.
5. **Schema.org**: Injected via `<script type="application/ld+json">` across all 103 pages.
6. **Maintenance Commands**:
   - `python generate_sitemap.py` — updates `public/sitemap.xml`
   - `python audit_src_links.py` — scans for broken internal links
   - `npm run build` — static SSG build to `dist/`
