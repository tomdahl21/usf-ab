import React from 'react';
import USFoodsLogo from '../img/US_Foods_logo.svg';

const variations = [
  {
    id: 'v1',
    label: 'Baseline',
    tag: 'V1',
    title: 'Current State',
    description: 'Replicates the existing Moxe experience. Sponsored products appear inline alongside organic results. Sponsored carousel at top of results page.',
    status: 'ready',
    features: ['Sponsored carousel', 'Inline sponsored products', 'Filter bar', 'Search landing'],
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
          Select a variation below to preview the experience. Each variation represents a different ad placement strategy.
        </p>
      </div>

      {/* Variation cards */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {variations.map((v) => (
            <div
              key={v.id}
              className="bg-white rounded-lg p-5 flex flex-col"
              style={{ border: '1px solid #E0E0E0' }}
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-3">
                <div
                  className="text-xs font-bold px-2 py-0.5 rounded"
                  style={{ backgroundColor: '#CF4520', color: '#fff', letterSpacing: '0.05em' }}
                >
                  {v.tag}
                </div>
                <div
                  className="text-xs px-2 py-0.5 rounded"
                  style={{ backgroundColor: '#E8F5E9', color: '#5C8727', border: '1px solid #5C8727' }}
                >
                  Ready
                </div>
              </div>

              {/* Title */}
              <h2 className="text-lg font-bold mb-1" style={{ color: '#1A1A1A' }}>
                {v.title}
              </h2>
              <p className="text-xs leading-relaxed mb-4" style={{ color: '#717073' }}>
                {v.description}
              </p>

              {/* Feature list */}
              <ul className="mb-5 space-y-1 flex-1">
                {v.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs" style={{ color: '#717073' }}>
                    <span style={{ color: '#5C8727' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Launch button */}
              <button
                className="w-full py-2 text-sm font-semibold rounded transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#5C8727', color: '#fff' }}
                onClick={() => onLaunch(v.id)}
              >
                Launch Experience →
              </button>
            </div>
          ))}

          {/* Placeholder card for future variations */}
          <div
            className="bg-white rounded-lg p-5 flex flex-col items-center justify-center text-center"
            style={{ border: '2px dashed #E0E0E0', minHeight: '220px' }}
          >
            <div className="text-3xl mb-2" style={{ color: '#E0E0E0' }}>+</div>
            <p className="text-sm font-semibold mb-1" style={{ color: '#BDBDBD' }}>Next Variation</p>
            <p className="text-xs" style={{ color: '#BDBDBD' }}>V2 coming soon</p>
          </div>

        </div>
      </div>

    </div>
  );
}
