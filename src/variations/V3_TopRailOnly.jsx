import React from 'react';
import ProductCard from '../components/ProductCard';
import SponsoredCarousel from '../components/SponsoredCarousel';
import FilterBar from '../components/FilterBar';

export default function V3_TopRailOnly({ products, carousel, searchTerm = 'HUSH PUPPIES', onSearch }) {
  // Zero sponsored products in the list — organic only
  const organicProducts = products.filter(p => !p.isSponsored);

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

      {/* Product Grid — 100% organic, padded so carousel doesn't cover last item */}
      <div className="max-w-7xl mx-auto px-4 py-6" style={{ paddingBottom: '260px' }}>
        <div className="grid grid-cols-1 gap-4">
          {organicProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      </div>

      {/* Variation Label */}
      <div className="px-4 py-3" style={{ backgroundColor: '#E3F2FD', borderTopColor: '#90CAF9', borderTopWidth: '1px', marginBottom: '260px' }}>
        <div className="max-w-7xl mx-auto text-sm" style={{ color: '#1565C0' }}>
          <strong>V3 – Bottom Rail:</strong> All sponsored content is anchored to the bottom of the screen, overlaying results. Results above are 100% organic — cleanest buyer experience while browsing.
        </div>
      </div>

      {/* Sponsored Carousel — fixed to bottom, above VariationSwitcher */}
      <div
        style={{
          position: 'fixed',
          bottom: '48px',
          left: 0,
          right: 0,
          zIndex: 40,
          boxShadow: '0 -4px 16px rgba(0,0,0,0.12)',
          backgroundColor: '#F5F5F5',
          borderTop: '1px solid #E0E0E0',
        }}
      >
        <SponsoredCarousel carousel={carousel} onSearch={onSearch} />
      </div>

    </div>
  );
}
