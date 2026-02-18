# Experience & Feature Scoping

## Phase 1: Current State Baseline (V1)
**Status:** In Progress → Near Complete (Testing)

### Features Included
- [x] Pixel-faithful replication of Moxe navbar (logo, search, nav links, account selector)
- [x] Breadcrumb navigation (Home > Browse Products > Dairy & Eggs > Cheese)
- [x] Product filter bar (All Filters, US Foods Delivered, My Lists, Our Exclusives, Categories, etc.)
- [x] Sponsored carousel at top (V1 style)
- [x] Inline product results with sponsored items appearing multiple times (replicating V1 duplication bug)
- [x] ProductCard component with full spec (image, brand, title, SKU, rating, tags, pricing, kebab menu)
- [x] Responsive layout (mobile, tablet, desktop with Tailwind breakpoints)
- [x] Mock product dataset (15 products with realistic images)
- [x] Dev server running without errors

### Features Excluded (by design)
- Search functionality (static results for V1)
- Cart integration
- Ordering workflow
- Click tracking / impressions
- Working dropdown menus / Kebab overlays

---

## Phase 2: Variation Switcher (TBD)
**Status:** Pending

### To Define
- Switcher UI (tab bar vs. dropdown)
- Visibility (always visible vs. presenter-controlled)
- State persistence (URL params or localStorage)

### Variations to Build
1. V1 - Current State ✓ (Phase 1)
2. V2 - Deduplicated Inline
3. V3 - Top Rail Only
4. V4 - Sponsored Interstitial
5. V5 - Right Rail / Sidebar
6. V6 - Search-Triggered Spotlight

---

## Known Constraints
- **Desktop-first focus** but responsive
- **No backend API** — all data is mocked and static
- **No real attribution** — buttons/links are visual only (no click tracking)
- **No mobile-specific flows** — tablet/kiosk considered for future

---

## Success Criteria (Phase 1)
- [x] V1 layout matches screenshots (product card layout, responsive design)
- [x] Product data loads and renders without errors
- [x] All product card elements visible (images, pricing, tags, ratings, kebab menu)
- [x] Responsive on mobile/tablet/desktop
- [x] Variation switcher hidden/disabled until Phase 2
- [x] App runs via `npm run dev` with no blocking errors
- [ ] Visual refinements: spacing, typography, color precision matching screenshots

---

## Open Decisions
- Should the carousel auto-scroll or require manual interaction?
- Should product images be fully localized or use placeholder service?
- Should quantity inputs be interactive or display-only in V1?
