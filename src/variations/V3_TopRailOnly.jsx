import React from 'react';
import ProductCard from '../components/ProductCard';
import SponsoredCarousel from '../components/SponsoredCarousel';
import FilterBar from '../components/FilterBar';

export default function V3_TopRailOnly({ products, carousel, searchTerm = 'HUSH PUPPIES', onSearch }) {
  // Zero sponsored products in the list — organic only
  const organicProducts = products.filter(p => !p.isSponsored);

  return (
    <div className="space-y-0">

      {/* Sponsored Carousel — all ad content lives here */}
      <SponsoredCarousel carousel={carousel} onSearch={onSearch} />

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

      {/* Product Grid — 100% organic */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-4">
          {organicProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))}
        </div>
      </div>

      {/* Variation Label */}
      <div className="px-4 py-3" style={{ backgroundColor: '#E3F2FD', borderTopColor: '#90CAF9', borderTopWidth: '1px' }}>
        <div className="max-w-7xl mx-auto text-sm" style={{ color: '#1565C0' }}>
          <strong>V3 – Top Rail Only:</strong> All sponsored content is isolated to the carousel at top. Results below are 100% organic — cleanest buyer experience after the fold.
        </div>
      </div>

    </div>
  );
}
