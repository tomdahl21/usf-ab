import React from 'react';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';

export default function V5_RightRail({ products, searchTerm = 'HUSH PUPPIES', onSearch }) {
  const organicProducts = products.filter(p => !p.isSponsored);
  const sponsoredProducts = products.filter(p => p.isSponsored);

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

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6 items-start">

          {/* Main column: organic product list */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 gap-4">
              {organicProducts.map((product) => (
                <ProductCard key={product.productId} product={product} />
              ))}
            </div>
          </div>

          {/* Right rail: sponsored sidebar */}
          <div className="flex-shrink-0 w-52 sticky top-4">
            <div className="inline-block rounded mb-2 px-2 py-0.5" style={{ backgroundColor: '#EEEEEE' }}>
              <p className="text-xs" style={{ color: '#717073' }}>Sponsored</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {sponsoredProducts.map((product) => (
                <div
                  key={product.productId}
                  className="bg-white rounded p-3 cursor-pointer hover:shadow-sm transition-shadow"
                  style={{ border: '1px solid #E0E0E0' }}
                  onClick={() => onSearch && onSearch('Cheese')}
                >
                  <div className="w-full h-24 bg-white flex items-center justify-center mb-2 rounded">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-contain p-1"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/96/ffffff/cccccc?text=img'; }}
                    />
                  </div>
                  <p className="text-xs mb-0.5 font-medium" style={{ color: '#717073' }}>{product.brand}</p>
                  <p className="text-xs leading-snug line-clamp-2 mb-2" style={{ color: '#1A1A1A' }}>{product.title}</p>
                  <p className="text-xs font-semibold" style={{ color: '#5C8727' }}>${product.priceCS.toFixed(2)} CS</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Variation Label */}
      <div className="px-4 py-3" style={{ backgroundColor: '#E3F2FD', borderTopColor: '#90CAF9', borderTopWidth: '1px' }}>
        <div className="max-w-7xl mx-auto text-sm" style={{ color: '#1565C0' }}>
          <strong>V5 – Right Rail:</strong> Sponsored products occupy a dedicated sidebar column. The main list is 100% organic. Clear separation — risk is buyers learn to ignore the rail over time.
        </div>
      </div>

    </div>
  );
}
