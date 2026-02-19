import React from 'react';

const VARIATIONS = [
  { id: 'v1', tag: 'V1', name: 'Baseline',       color: '#718096' },
  { id: 'v2', tag: 'V2', name: 'Deduped Inline', color: '#3182CE' },
  { id: 'v3', tag: 'V3', name: 'Top Rail Only',  color: '#805AD5' },
  { id: 'v4', tag: 'V4', name: 'Interstitial',   color: '#DD6B20' },
  { id: 'v5', tag: 'V5', name: 'Right Rail',     color: '#2C7A7B' },
  { id: 'v6', tag: 'V6', name: 'Spotlight',      color: '#B7791F' },
];

export default function VariationSwitcher({ active, onChange }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: '#E3F2FD',
        borderTopColor: '#90CAF9',
        borderTopWidth: '1px',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.10)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-2 flex-wrap">
        <span className="text-xs font-semibold uppercase tracking-wide mr-1" style={{ color: '#717073' }}>
          Variation:
        </span>
        {VARIATIONS.map((v) => (
          <button
            key={v.id}
            onClick={() => onChange(v.id)}
            className="flex items-center gap-1 px-3 py-1 rounded text-xs font-semibold transition-colors"
            style={
              active === v.id
                ? { backgroundColor: v.color, color: 'white' }
                : { backgroundColor: 'white', color: v.color, border: `1px solid ${v.color}` }
            }
          >
            <span className="font-bold">{v.tag}</span>
            <span className="font-normal" style={{ opacity: 0.8 }}>— {v.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
