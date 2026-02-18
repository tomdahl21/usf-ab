import React from 'react';

const tagConfig = {
  cmpContract:    { label: 'CMP - Contract',  style: { borderColor: '#717073', color: '#717073', backgroundColor: 'white', borderWidth: '1px' } },
  direct:         { label: 'DIRECT',           style: { borderColor: '#CF4520', color: '#CF4520', backgroundColor: 'white', borderWidth: '1px' } },
  recentPurchase: { label: 'Recent Purchase',  style: { borderColor: '#717073', color: '#717073', backgroundColor: 'white', borderWidth: '1px' } },
  scoop:          { label: 'SCOOP',            style: { backgroundColor: '#CF4520', color: 'white' } },
  onML:           { label: 'On ML',            style: { borderColor: '#717073', color: '#717073', backgroundColor: 'white', borderWidth: '1px' } },
};

export default function ProductCard({ product }) {
  return (
    <div className="bg-white relative rounded-lg p-4" style={{ border: '1px solid #E0E0E0' }}>
      <div className="flex gap-4">

        {/* Product image */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded bg-white"
          style={{ width: 80, height: 80, border: '1px solid #E0E0E0' }}
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-contain p-1"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/80/ffffff/cccccc?text=img'; }}
          />
        </div>

        {/* Center: brand, title, SKU, rating, tags */}
        <div className="flex-1 min-w-0">
          <p className="text-xs mb-0.5" style={{ color: '#717073' }}>{product.brand}</p>
          <h3 className="font-semibold text-sm line-clamp-2 mb-1" style={{ color: '#1A1A1A' }}>
            {product.title}
          </h3>
          <p className="text-xs mb-2" style={{ color: '#717073' }}>
            #{product.glNumber} &nbsp;|&nbsp; GL {product.glNumber} &nbsp;|&nbsp; {product.packSize}
          </p>
          <div className="flex items-center gap-1 mb-2">
            <span className="text-yellow-400 text-xs tracking-tight">{renderStars(product.rating)}</span>
            <span className="text-xs" style={{ color: '#717073' }}>{product.rating}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {product.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-medium rounded-full whitespace-nowrap"
                style={tagConfig[tag].style}
              >
                {tagConfig[tag].label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: quantity inputs, pricing, savings, line #, kebab */}
        <div className="flex-shrink-0 flex flex-col" style={{ minWidth: 170 }}>

          {/* CS row */}
          <div className="flex items-center justify-end gap-2 mb-1.5">
            <input
              type="number"
              defaultValue="0"
              className="text-xs text-center rounded"
              style={{ width: 36, height: 28, border: '1px solid #E0E0E0', padding: '0 4px' }}
            />
            <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#5C8727', minWidth: 90, textAlign: 'right' }}>
              ${product.priceCS.toFixed(2)} CS
            </span>
          </div>

          {/* EA row */}
          <div className="flex items-center justify-end gap-2 mb-2">
            <input
              type="number"
              defaultValue="0"
              className="text-xs text-center rounded"
              style={{ width: 36, height: 28, border: '1px solid #E0E0E0', padding: '0 4px' }}
            />
            <span className="text-sm font-semibold whitespace-nowrap" style={{ color: '#717073', minWidth: 90, textAlign: 'right' }}>
              ${product.priceEA.toFixed(2)} EA
            </span>
          </div>

          {/* Savings badge */}
          <div className="flex justify-end mb-auto">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded whitespace-nowrap"
              style={{ backgroundColor: '#E8F5E9', color: '#5C8727' }}
            >
              {product.savings}
            </span>
          </div>

          {/* Line # + kebab */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs" style={{ color: '#717073' }}>Line #{product.lineNumber}</span>
            <button
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 28, height: 28, backgroundColor: '#5C8727' }}
            >
              <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  return Array.from({ length: 5 }, (_, i) => {
    if (i < full) return '★';
    if (i === full && half) return '☆';
    return '✩';
  }).join('');
}
