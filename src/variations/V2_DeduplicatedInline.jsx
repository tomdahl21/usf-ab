import React from 'react';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

export default function V2_DeduplicatedInline({ products, searchTerm = 'HUSH PUPPIES' }) {
  const organic = products.filter(p => !p.isSponsored);
  const sponsored = products.filter(p => p.isSponsored);

  // Interleave: after every 4 organic products, insert 1 sponsored (each only once)
  const interleaved = [];
  let sIdx = 0;
  organic.forEach((product, i) => {
    interleaved.push({ product, type: 'organic' });
    if ((i + 1) % 4 === 0 && sIdx < sponsored.length) {
      interleaved.push({ product: sponsored[sIdx], type: 'sponsored' });
      sIdx++;
    }
  });

  return (
    <div className="space-y-0">

      {/* Search Results Title + Filters */}
      <div className="bg-white" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px' }}>
        <div className="max-w-7xl mx-auto px-4 pt-5 pb-2">
          <h1 className="mb-4" style={{ color: '#1A1A1A' }}>
            <span className="text-3xl" style={{ fontFamily: "'League Gothic', sans-serif", fontWeight: 400 }}>
              SHOP &ldquo;{searchTerm.toUpperCase()}&rdquo;
            </span>{' '}
            <span className="text-sm font-normal" style={{ color: '#717073' }}>(999+ Results)</span>
          </h1>
        </div>
        <FilterBar />
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-4">
          {interleaved.map(({ product, type }, idx) => (
            <div key={`${type}-${product.productId}-${idx}`}>
              {type === 'sponsored' && (
                <div className="mb-1">
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{ backgroundColor: '#EEEEEE', color: '#717073' }}
                  >
                    Sponsored
                  </span>
                </div>
              )}
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Variation Label */}
      <div className="px-4 py-3" style={{ backgroundColor: '#E3F2FD', borderTopColor: '#90CAF9', borderTopWidth: '1px' }}>
        <div className="max-w-7xl mx-auto text-sm" style={{ color: '#1565C0' }}>
          <strong>V2 – Deduplicated Inline:</strong> Sponsored products appear once, interspersed every 4th organic result. No carousel. Reduces redundancy and potential advertiser overcharging.
        </div>
      </div>

    </div>
  );
}
