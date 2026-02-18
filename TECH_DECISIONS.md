# Technical Decisions

## Stack & Infrastructure
- **Framework:** React 18 with Vite (fast HMR, modern build tooling)
- **Styling:** Tailwind CSS (utility-first, scalable, component-friendly)
- **Build Tool:** Vite (chosen for zero-config setup, fast dev server)
- **State Management:** React useState + Context API (lightweight, sufficient for variation switching)
- **Data:** Static JSON mock files (no backend integration needed for prototype)
- **Responsive:** Mobile-first approach using Tailwind breakpoints (sm, md, lg, xl)

## Design Tokens
- **Primary Green:** `#5C8727` (US Foods brand)
- **Orange:** `#CF4520` (DIRECT pill, SCOOP pill)
- **Gray:** `#717073` (text, borders)
- **Border Color:** Light gray `#E0E0E0`
- **Background:** White `#FFFFFF`
- **Typography:** Aktiv Grotesk (body), Balboa (headings)

## Component Architecture
- **Reusable Components:** ProductCard, NavBar, Breadcrumb, FilterBar, SponsoredCarousel
- **Layout Components:** Each variation is a self-contained layout file that composes shared components
- **No shared layout mutations:** Changes to ProductCard don't affect other variations

## Image Handling
- **Strategy:** Local public folder + relative URLs
- **Format:** Use of publicly available product images styled as realistic mock data
- **Fallback:** Placeholder backgrounds if images unavailable

## Future Extensibility
- Adding a new variation requires only a new layout file in `/src/variations/`
- Shared components should remain agnostic to variation logic
- State container in App.jsx holds active variation + search/filter state
