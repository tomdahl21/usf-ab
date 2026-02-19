import React from 'react';
import USFoodsLogo from '../img/US_Foods_logo.svg';

// Mini schematic diagrams showing ad placement per variation
function Diagram({ type, color }) {
  const org = '#E5E7EB';   // organic row fill
  const sp  = color;       // sponsored fill
  const rh  = 7;           // standard row height
  const W   = 140;         // viewBox width
  const row = (y, w, fill, opacity = 1) => (
    <rect x="0" y={y} width={w} height={rh} rx="2" fill={fill} fillOpacity={opacity} />
  );

  const layouts = {
    // Carousel banner at top + sponsored scattered inline
    v1: (
      <svg viewBox={`0 0 ${W} 80`} width="100%">
        <rect x="0" y="0" width={W} height="14" rx="2" fill={sp} fillOpacity="0.7" />
        <text x={W / 2} y="10" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">SPONSORED CAROUSEL</text>
        {row(20,  W,    org)}
        {row(30,  W,    sp,  0.4)}
        {row(40,  W,    org)}
        {row(50,  W,    org)}
        {row(60,  W,    sp,  0.4)}
        {row(70,  W,    org)}
      </svg>
    ),
    // No carousel, 1 sponsored every 4 organic
    v2: (
      <svg viewBox={`0 0 ${W} 80`} width="100%">
        {row(0,  W, org)}
        {row(10, W, org)}
        {row(20, W, org)}
        {row(30, W, org)}
        {row(40, W, sp, 0.4)}
        {row(50, W, org)}
        {row(60, W, org)}
        {row(70, W, org)}
      </svg>
    ),
    // Zero sponsored inline, carousel fixed to bottom
    v3: (
      <svg viewBox={`0 0 ${W} 80`} width="100%">
        {row(0,  W, org)}
        {row(10, W, org)}
        {row(20, W, org)}
        {row(30, W, org)}
        {row(40, W, org)}
        {row(50, W, org)}
        <rect x="0" y="63" width={W} height="14" rx="2" fill={sp} fillOpacity="0.7" />
        <text x={W / 2} y="73" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">SPONSORED CAROUSEL</text>
      </svg>
    ),
    // Groups of organic separated by full-width interstitial
    v4: (
      <svg viewBox={`0 0 ${W} 80`} width="100%">
        {row(0,  W, org)}
        {row(10, W, org)}
        {row(20, W, org)}
        <rect x="0" y="32" width={W} height="10" rx="2" fill={sp} fillOpacity="0.5" />
        <text x={W / 2} y="39" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="bold">INTERSTITIAL</text>
        {row(47, W, org)}
        {row(57, W, org)}
        {row(67, W, org)}
      </svg>
    ),
    // Two-column: organic list left, sponsored sidebar right
    v5: (
      <svg viewBox={`0 0 ${W} 80`} width="100%">
        {/* Main column */}
        {[0, 10, 20, 30, 40, 50, 60, 70].map(y => (
          <rect key={y} x="0" y={y} width="100" height={rh} rx="2" fill={org} />
        ))}
        {/* Sponsored sidebar */}
        {[0, 20, 40, 60].map(y => (
          <rect key={y} x="106" y={y} width="34" height="16" rx="2" fill={sp} fillOpacity="0.4" />
        ))}
        <text x="123" y="5" textAnchor="middle" fontSize="4.5" fill={sp} fontWeight="bold">SPON</text>
      </svg>
    ),
    // Large hero at top when keyword matches, clean organic below
    v6: (
      <svg viewBox={`0 0 ${W} 80`} width="100%">
        <rect x="0" y="0" width={W} height="22" rx="2" fill={sp} fillOpacity="0.7" />
        <text x={W / 2} y="9"  textAnchor="middle" fontSize="6"   fill="white" fontWeight="bold">KEYWORD SPOTLIGHT</text>
        <text x={W / 2} y="17" textAnchor="middle" fontSize="5.5" fill="white">matched to search term</text>
        {row(27, W, org)}
        {row(37, W, org)}
        {row(47, W, org)}
        {row(57, W, org)}
        {row(67, W, org)}
      </svg>
    ),
  };

  return (
    <div className="rounded mb-4 overflow-hidden p-2" style={{ backgroundColor: '#F9FAFB', border: '1px solid #F3F4F6' }}>
      {layouts[type]}
    </div>
  );
}

const variations = [
  {
    id: 'v1',
    tag: 'V1',
    color: '#718096',
    title: 'Current State',
    description: 'Replicates the existing Moxe experience — sponsored carousel at top, sponsored products inline and duplicated.',
    features: ['Sponsored carousel at top', 'Sponsored products inline (duplicated)', '"Featured" badge on cards'],
    benefits: ['Establishes control metrics for A/B comparison', 'Familiar flow for existing Moxe users', 'Validates current sponsor ROI as a baseline'],
    testing: ['Use as the control in all variant comparisons', 'Measure baseline sponsored CTR and add-to-cart rate', 'Track time-on-page to benchmark against other variants'],
  },
  {
    id: 'v2',
    tag: 'V2',
    color: '#3182CE',
    title: 'Deduplicated Inline',
    description: 'Sponsored products appear once, interspersed every 4th organic result. No carousel. Reduces redundancy.',
    features: ['No carousel', '1 sponsored per 4 organic', '"Sponsored" label on each'],
    benefits: ['Reduces ad fatigue from repeated products', 'Maintains sponsor visibility throughout scroll', 'Transparent labeling may increase buyer trust'],
    testing: ['A/B test directly against V1 with same search term', 'Survey users: "Did you notice any ads?" after session', 'Compare sponsored CTR and scroll depth vs. baseline'],
  },
  {
    id: 'v3',
    tag: 'V3',
    color: '#805AD5',
    title: 'Bottom Rail',
    description: 'Sponsored carousel is fixed to the bottom of the screen, overlaying results. The organic list is completely uninterrupted.',
    features: ['Sponsored carousel anchored to bottom', 'Zero sponsored inline', '100% organic results list'],
    benefits: ['Organic browse is completely uninterrupted', 'Carousel stays persistently visible while scrolling', 'Clear spatial separation of sponsored vs. organic'],
    testing: ['Measure carousel interaction rate vs. organic conversion', 'Ask users to rate perceived trustworthiness of results', 'Track whether users engage with the bottom rail while browsing'],
  },
  {
    id: 'v4',
    tag: 'V4',
    color: '#DD6B20',
    title: 'Sponsored Interstitial',
    description: 'Sponsored content appears as full-width branded breaks between every 5 organic results.',
    features: ['No top carousel', 'Full-width interstitial banners', 'Organic products in clean groups'],
    benefits: ['Full-width format commands strong attention', 'Clear visual separation from organic browse', 'Richer brand storytelling opportunity'],
    testing: ['Use heatmaps to measure dwell time on interstitial vs. organic rows', 'Ask users if breaks felt disruptive or informative', 'Compare average order value against V1 and V2'],
  },
  {
    id: 'v5',
    tag: 'V5',
    color: '#2C7A7B',
    title: 'Right Rail / Sidebar',
    description: 'Sponsored products occupy a dedicated right-column sidebar. Main list is 100% organic.',
    features: ['Two-column layout', 'Left: 100% organic', 'Right: sponsored sidebar'],
    benefits: ['Zero disruption to organic browse flow', 'Persistent sponsor visibility as user scrolls', 'Familiar two-column pattern from web retail'],
    testing: ['Eye-tracking study: does attention reach the right rail?', 'Compare sidebar CTR on desktop vs. mobile viewports', 'Ask users what they noticed in the right column post-task'],
  },
  {
    id: 'v6',
    tag: 'V6',
    color: '#B7791F',
    title: 'Search Spotlight',
    description: 'A branded hero unit fires when the search term matches a sponsored keyword. Collapses for unmatched searches.',
    features: ['Keyword-triggered hero unit', 'Full-width brand spotlight', 'Collapses when no match'],
    benefits: ['Highest relevance — appears only on keyword match', 'Captures high-intent search moments', 'Best potential CTR for matched sponsored terms'],
    testing: ['Test with matched keywords (e.g. "Cheese") vs. unmatched', 'Measure spotlight CTR relative to organic results below', 'Interview users: did the hero feel relevant or intrusive?'],
  },
];

function Chevron({ open }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 12 12" fill="none"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CollapsibleSection({ label, color, open, onToggle, children }) {
  return (
    <div className="mb-2" style={{ borderTop: '1px solid #F3F4F6' }}>
      <button
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        className="w-full flex items-center justify-between py-2 text-left"
        style={{ background: 'none', border: 'none', padding: '8px 0', cursor: 'pointer', color }}
      >
        <span className="text-xs font-semibold uppercase tracking-wide" style={{ opacity: 0.85 }}>{label}</span>
        <span style={{ color: '#A0AEC0' }}><Chevron open={open} /></span>
      </button>
      {open && <div className="pb-2">{children}</div>}
    </div>
  );
}

function VariationCard({ v }) {
  const [showFeatures, setShowFeatures] = React.useState(false);
  const [showBenefits, setShowBenefits] = React.useState(false);

  return (
    <div
      className="bg-white rounded-lg overflow-hidden flex flex-col"
      style={{ border: '1px solid #E0E0E0', borderLeft: `4px solid ${v.color}` }}
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3" style={{ borderBottomColor: '#F3F4F6', borderBottomWidth: '1px' }}>
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded"
            style={{ backgroundColor: v.color, color: '#fff', letterSpacing: '0.05em' }}
          >
            {v.tag}
          </span>
          <span className="text-xs font-mono" style={{ color: '#BDBDBD' }}>/#/{v.id}</span>
        </div>
        <h2 className="text-sm font-bold" style={{ color: '#1A1A1A' }}>{v.title}</h2>
      </div>

      {/* Diagram */}
      <div className="px-4 pt-3">
        <Diagram type={v.id} color={v.color} />
      </div>

      {/* Body */}
      <div className="px-4 pb-4 flex flex-col flex-1">
        <p className="text-xs leading-relaxed mb-1" style={{ color: '#717073' }}>
          {v.description}
        </p>

        {/* Collapsible: Approach */}
        <CollapsibleSection
          label="Approach"
          color={v.color}
          open={showFeatures}
          onToggle={() => setShowFeatures(s => !s)}
        >
          <ul className="space-y-1">
            {v.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs" style={{ color: '#717073' }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: v.color }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        {/* Collapsible: Perceived Benefits */}
        <CollapsibleSection
          label="Perceived Benefits"
          color={v.color}
          open={showBenefits}
          onToggle={() => setShowBenefits(s => !s)}
        >
          <ul className="space-y-1">
            {v.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs" style={{ color: '#4A5568' }}>
                <span className="flex-shrink-0 mt-0.5">↑</span>
                {b}
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        {/* Launch CTA */}
        <a
          href={`#/${v.id}`}
          className="w-full py-2 text-xs font-semibold rounded text-center no-underline block"
          style={{ backgroundColor: v.color, color: '#fff' }}
        >
          Launch {v.tag} →
        </a>
      </div>
    </div>
  );
}

export default function ExperienceIndex() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>

      {/* Header */}
      <div className="bg-white px-8 py-4 flex items-center justify-between" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px' }}>
        <img src={USFoodsLogo} alt="US Foods" className="h-10 w-auto" />
        <div className="text-right">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#CF4520' }}>MOXe POC</p>
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
          Select a variation to preview. Each represents a different ad placement strategy — diagrams show where sponsored content appears relative to organic results.
        </p>
      </div>

      {/* Variation cards */}
      <div className="max-w-5xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {variations.map((v) => <VariationCard key={v.id} v={v} />)}
        </div>
      </div>

      {/* How to Test — consolidated across all variations */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-lg overflow-hidden" style={{ border: '1px solid #E0E0E0' }}>
          <div className="px-6 py-4" style={{ borderBottomColor: '#F3F4F6', borderBottomWidth: '1px' }}>
            <h2
              className="text-2xl mb-1"
              style={{ fontFamily: "'League Gothic', sans-serif", fontWeight: 400, color: '#1A1A1A', letterSpacing: '0.02em' }}
            >
              HOW TO TEST
            </h2>
            <p className="text-xs" style={{ color: '#717073' }}>
              Recommended approaches for validating each variation with real users.
            </p>
          </div>
          <div className="divide-y" style={{ borderColor: '#F3F4F6' }}>
            {variations.map((v) => (
              <div key={v.id} className="px-6 py-4 flex gap-4">
                <div className="flex-shrink-0 pt-0.5">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: v.color, color: '#fff', letterSpacing: '0.05em' }}
                  >
                    {v.tag}
                  </span>
                </div>
                <ul className="flex-1 space-y-1.5">
                  {v.testing.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-xs" style={{ color: '#4A5568' }}>
                      <span className="flex-shrink-0 mt-0.5" style={{ color: v.color }}>→</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
