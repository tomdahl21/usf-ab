# MOXe Ad Placement Experience — Demo App

**Type:** React Prototype | **Client:** US Foods | **Team:** Slalom Consulting  
**Status:** In Development | **Version:** 0.1 | **Date:** February 2026  
**Stakeholders:** James (US Foods), Veo (Digital Experience), Emily, Evan

---

## Overview

This app is a React-based prototype that demonstrates alternative advertising and sponsored content placement strategies within the US Foods MOXe digital ordering platform. It replicates the current MOXe catalog and search result experience using mock data, then presents a suite of 6 ad placement variations that stakeholders can explore interactively via a variation switcher.

The demo supports alignment discussions between product, digital experience, and revenue stakeholders, and serves as a design artifact for evaluating trade-offs between ad revenue growth and buyer experience quality.

---

## Business Context

### Ad Revenue Growth Targets

US Foods has set aggressive ad spend targets for the MOXe platform:

| Year | Target |
|------|--------|
| Current Year | $2.8M |
| Year 2 | $5–6M |
| Year 3 | $10M |

Achieving these targets requires expanding advertiser participation while demonstrating that ad placements can scale without degrading the buyer experience — the primary risk identified by product and UX teams.

### Core Tension

The prototype makes a fundamental trade-off tangible and testable:

- **Advertiser value:** Maximizing impressions, clicks, and attribution clarity
- **Buyer experience:** Ensuring the ordering workflow remains fast, relevant, and trustworthy for restaurant operators

### Known Current-State Problems

These issues are surfaced in V1 (Current State) as a baseline comparison:

- Sponsored listings appear multiple times in a single result set → redundant impressions, potential advertiser overcharging
- Some searches return only sponsored listings, breaking buyer expectation of organic relevance
- Inconsistent sponsored treatment across product flow (search results vs. cart vs. category browse)
- No data contracts between tools — attribution breaks when UI changes are made

---

## Ad Placement Variations

The variation switcher allows toggling between 6 layouts instantly with no page reload.

| ID | Name | Description | Business Hypothesis |
|----|------|-------------|---------------------|
| V1 | Current State | Replicates existing MOXe: sponsored carousel at top, sponsored products appearing inline multiple times, Featured badge. Includes known duplication bug. | Baseline — shows current problems that motivate the redesign |
| V2 | Deduplicated Inline | Sponsored products appear once, labeled "Sponsored", mixed into organic results at a controlled cadence (1 sponsored per 4 organic). No carousel. | Balances advertiser visibility with relevance. Reduces redundancy and potential overcharging. |
| V3 | Bottom Rail | Sponsored carousel is fixed to the bottom of the screen, overlaying search results. The organic results list is completely uninterrupted from top to bottom. | Persistent sponsor visibility without disrupting the browse flow. Risk: carousel may be ignored as buyers focus on the main list above. |
| V4 | Sponsored Interstitial | Sponsored content appears as full-width content breaks between groups of organic results (e.g., every 5–6 products). Uses branded section headers like "Trusted Pantry Staples." | High visual impact for advertisers without interrupting individual product comparison. Works well for category-level promotions. |
| V5 | Right Rail / Sidebar | Sponsored products appear in a dedicated right-column sidebar. Main list is entirely organic. | Clear separation of sponsored and organic. Risk: buyers may learn to ignore the rail. |
| V6 | Search-Triggered Spotlight | When a search term matches a sponsored keyword, a featured hero unit appears at top of results. Collapses if no sponsored match exists. | Highest relevance for advertisers investing in specific keywords. Supports future semantic search evolution. |

---

## Prototype Scope

### Included
- Pixel-faithful replication of MOXe desktop catalog and search results
- Variation switcher UI (tab bar or dropdown) — no page reload
- Realistic mock product data (names, images, SKUs, pricing, ratings, tag pills)
- Realistic sponsored product mock data with advertiser labels
- Visual indicators differentiating sponsored vs. organic per variation
- Annotation/callout label per variation explaining the layout logic

### Excluded
- Real backend API integration (all data is mocked)
- Working cart, checkout, or order submission
- Real click tracking, impression logging, or attribution
- Mobile/tablet responsive layouts (desktop-first for this phase)
- Authentication or account switching

---

## App Structure

```
src/
├── components/
│   ├── NavBar.jsx               # Top nav replica (logo, account selector, search, nav links)
│   ├── Breadcrumb.jsx
│   ├── FilterBar.jsx            # Visual only — not functional
│   ├── VariationSwitcher.jsx    # Tab bar or dropdown — controls active variation state
│   ├── ProductCard.jsx          # Reusable card component
│   ├── SponsoredCarousel.jsx    # Banner carousel component
│   ├── SponsoredInterstitial.jsx # Section break component (V4)
│   ├── SearchSpotlight.jsx      # Hero unit (V6)
│   └── ResultsList.jsx          # Renders correct variation layout based on active state
├── variations/
│   ├── V1_CurrentState.jsx
│   ├── V2_DeduplicatedInline.jsx
│   ├── V3_TopRailOnly.jsx       # Bottom Rail — carousel fixed to bottom overlay
│   ├── V4_SponsoredInterstitial.jsx
│   ├── V5_RightRail.jsx
│   └── V6_SearchSpotlight.jsx
├── data/
│   ├── products.json            # Mock product data
│   └── carousel.json            # Mock carousel/sponsored data
└── App.jsx                      # Root — holds variation state, renders switcher + ResultsList
```

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | React 18 (Vite) |
| Styling | Tailwind CSS |
| State | React useState / Context |
| Data | Static JSON mock files |
| Backend | None — fully client-side |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

The app runs locally at `http://localhost:5173`. No external dependencies or API keys required.

---

## Product Card Spec

Each `ProductCard` component renders:

- Product image (left-aligned thumbnail)
- Brand/manufacturer name
- Product title (supports ~83 character long names, wraps to 2 lines)
- SKU, GL number, pack size (e.g., `12/12 OZ`)
- Star rating (out of 5, half-star support)
- Tag pills: `CMP-Contract` | `DIRECT` (orange) | `Recent Purchase` | `SCOOP` (red/orange) | `On ML`
- Quantity inputs: CS (case) and EA (each)
- Pricing: `$X.XX CS` and `$X.XX EA`
- Savings badge (e.g., `SAVE $2 OFF / EA`)
- Line number label (e.g., `Line #1`)
- Three-dot kebab overflow menu (placeholder dropdown)

---

## Mock Data Spec

### products.json

```json
{
  "productId": "2673628",
  "glNumber": "2673628",
  "packSize": "12/12 OZ",
  "brand": "Applegate Naturals",
  "title": "White, Mild, Print Wrapped Yellow Sliced Cheese",
  "rating": 3.5,
  "tags": ["cmpContract", "direct", "recentPurchase", "scoop", "onML"],
  "priceCS": 10.00,
  "priceEA": 100.00,
  "savings": "SAVE $2 OFF / EA",
  "lineNumber": 1,
  "imageUrl": "/images/product.jpg",
  "isSponsored": true,
  "sponsoredLabel": "Featured"
}
```

### carousel.json

```json
{
  "brandLogoUrl": "/images/monarch-logo.png",
  "brandName": "Monarch",
  "title": "Super Bowl Game Day Ingredients",
  "ctaLabel": "Shop Now",
  "productImages": ["/images/item1.jpg", "/images/item2.jpg"]
}
```

---

## Variation Switching Logic

Active variation is stored in `App.jsx` state and passed as a prop to `ResultsList`. Switching is instant — no loading state. Each variation is self-contained in its own layout file under `/variations/`, composing shared components. Adding a new variation requires only creating a new layout file — no changes to shared components.

Each variation displays a short inline description label explaining its layout philosophy (1–2 sentences).

---

## Visual Style Reference

Match the US Foods MOXe desktop visual language:

- **Primary green:** US Foods brand green (approx. `#4CAF50`)
- **DIRECT pill:** Orange, outlined
- **SCOOP pill:** Red/orange, filled
- **Card borders:** Light gray
- **Background:** White
- **Typography:** Inter or system-ui sans-serif
- **Sponsored label:** Small, subtle gray text (`Sponsored`)
- **Featured badge:** Replaces or supplements tag pills

---

## Success Criteria

- [ ] Stakeholders can switch between all 6 variations in under 3 seconds with no page reload
- [ ] V1 (Current State) is recognizable to US Foods stakeholders who use MOXe regularly
- [ ] App runs locally via `npm run dev` with no external dependencies
- [ ] Adding a new variation requires only a new layout file — no changes to shared components
- [ ] Demo can be used in a live 30-minute stakeholder presentation with James and Veo

---

## Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| 1 | Should the variation switcher be visible to demo audiences, or presenter-controlled? | Tom | Open |
| 2 | Which search term should V6 (Search-Triggered Spotlight) use as the demo scenario? | Tom / Evan | Open |
| 3 | Are there US Foods brand guidelines or approved color values to match more precisely? | Evan / Veo | Open |
| 4 | Should the prototype support a mobile breakpoint for future tablet kiosk scenarios? | Tom | Open |
| 5 | Has the ad spend metrics slide been shared with Tom? (follow-up action item) | Evan | Pending |

---

## Out of Scope / Future Considerations

**Out of scope for this prototype:**
- CDP integration or real audience targeting (acknowledged data maturity gap)
- Click tracking, impression logging, or real attribution
- A/B testing infrastructure
- Mobile/tablet responsive layouts
- Semantic vs. keyword search exploration

**Future considerations (from Slalom–MOXe alignment session):**
- A Customer Data Platform (CDP) is a foundational prerequisite for V5 and V6 to reach full potential — enables audience-based targeting and robust product analytics
- Data contracts between MOXe, Sales Cloud, and Marketing Cloud are needed to prevent attribution breakage as the UI evolves
- Miro-based user journey map (Evan) will support future prototyping and testing sessions
- If the ad platform proves profitable, a broader vision document will be required (James/Emily)

---

*Prepared by Slalom Consulting | US Foods MOXe — Ad Platform Experience | Confidential*
