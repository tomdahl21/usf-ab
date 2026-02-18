import React from 'react';
import USFoodsLogo from '../img/US_Foods_logo.svg';

const variations = [
  {
    id: 'v1',
    tag: 'V1',
    title: 'Current State',
    description: 'Replicates the existing Moxe experience. Sponsored products appear inline and may be duplicated. Carousel at top of results.',
    features: [
      'Sponsored carousel at top',
      'Sponsored products inline (duplicated)',
      'Filter bar',
      '"Featured" badge on cards',
    ],
  },
  {
    id: 'v2',
    tag: 'V2',
    title: 'Deduplicated Inline',
    description: 'Sponsored products appear once, interspersed every 4th organic result. No carousel. Reduces redundancy and potential advertiser overcharging.',
    features: [
      'No carousel',
      '1 sponsored per 4 organic',
      '"Sponsored" label on inserted cards',
      'Each sponsored product shown once only',
    ],
  },
  {
    id: 'v3',
    tag: 'V3',
    title: 'Top Rail Only',
    description: 'All sponsored content isolated to the carousel rail at top. Results below are 100% organic — cleanest buyer experience after the fold.',
    features: [
      'Sponsored carousel at top',
      'Zero sponsored products inline',
      '100% organic results list',
      'Clear content separation',
    ],
  },
  {
    id: 'v4',
    tag: 'V4',
    title: 'Sponsored Interstitial',
    description: 'Sponsored content appears as full-width branded breaks between groups of 5 organic results. High visual impact without interrupting product comparison.',
    features: [
      'No top carousel',
      'Full-width interstitial banners',
      '"Trusted Pantry Staples" breaks',
      'Organic products in clean groups',
    ],
  },
  {
    id: 'v5',
    tag: 'V5',
    title: 'Right Rail / Sidebar',
    description: 'Sponsored products occupy a dedicated right-column sidebar. The main list is 100% organic. Clear visual separation between paid and earned.',
    features: [
      'Two-column layout',
      'Left: 100% organic list',
      'Right: sponsored sidebar',
      'Sticky rail while scrolling',
    ],
  },
  {
    id: 'v6',
    tag: 'V6',
    title: 'Search-Triggered Spotlight',
    description: 'A branded hero unit appears when the search term matches a sponsored keyword (e.g. "Cheese"). Collapses automatically for unmatched searches.',
    features: [
      'Keyword-triggered hero unit',
      'Full-width brand spotlight',
      'Organic-only results below',
      'Collapses when no keyword match',
    ],
  },
];

export default function ExperienceIndex({ onLaunch }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>

      {/* Header */}
      <div className="bg-white px-8 py-4 flex items-center justify-between" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px' }}>
        <img src={USFoodsLogo} alt="US Foods" className="h-10 w-auto" />
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#CF4520' }}>Internal Prototype</p>
          <p className="text-xs" style={{ color: '#717073' }}>Ad Placement A/B Testing</p>
        </div>
      </div>

      {/* Page title */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-6">
        <h1
          className="text-5xl mb-2"
          style={{ fontFamily: "'League Gothic', sans-serif", fontWeight: 400, color: '#1A1A1A', letterSpacing: '0.02em' }}
        >
          EXPERIENCE TESTING
        </h1>
        <p className="text-sm" style={{ color: '#717073' }}>
          Select a variation below to preview the experience. Each variation represents a different ad placement strategy for the Moxe search results page.
        </p>
      </div>

      {/* Variation cards */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {variations.map((v) => (
            <a
              key={v.id}
              href={`#/${v.id}`}
              className="bg-white rounded-lg p-5 flex flex-col group no-underline"
              style={{ border: '1px solid #E0E0E0' }}
            >
              {/* Tag + URL */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ backgroundColor: '#CF4520', color: '#fff', letterSpacing: '0.05em' }}
                >
                  {v.tag}
                </span>
                <span className="text-xs font-mono" style={{ color: '#BDBDBD' }}>
                  /#/{v.id}
                </span>
              </div>

              {/* Title + description */}
              <h2 className="text-base font-bold mb-1 group-hover:underline" style={{ color: '#1A1A1A' }}>
                {v.title}
              </h2>
              <p className="text-xs leading-relaxed mb-4" style={{ color: '#717073' }}>
                {v.description}
              </p>

              {/* Feature list */}
              <ul className="mb-5 space-y-1 flex-1">
                {v.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs" style={{ color: '#717073' }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: '#5C8727' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Launch CTA */}
              <div
                className="w-full py-2 text-sm font-semibold rounded text-center transition-opacity group-hover:opacity-90"
                style={{ backgroundColor: '#5C8727', color: '#fff' }}
              >
                Launch {v.tag} →
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
