import React from 'react';
import ProductCard from '../components/ProductCard';
import SponsoredCarousel from '../components/SponsoredCarousel';
import FilterBar from '../components/FilterBar';

export default function V1_CurrentState({ products, carousel, searchTerm = 'HUSH PUPPIES', onSearch }) {
  // In V1, sponsored products appear multiple times (the duplication bug mentioned in README)
  const renderedProducts = [];
  products.forEach(product => {
    renderedProducts.push(product);
    // Duplicate sponsored items to show the V1 issue
    if (product.isSponsored) {
      renderedProducts.push(product);
    }
  });

  return (
    <div className="space-y-0">
      {/* Sponsored Carousel */}
      <SponsoredCarousel carousel={carousel} onSearch={onSearch} />

      {/* Search Results Title + Filters */}
      <div className="bg-white" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px' }}>
        <div className="max-w-7xl mx-auto px-4 pt-5 pb-2">
          <h1 className="mb-4" style={{ color: '#1A1A1A' }}>
            <span className="text-3xl" style={{ fontFamily: "'League Gothic', sans-serif", fontWeight: 400 }}>SHOP &ldquo;{searchTerm.toUpperCase()}&rdquo;</span>{' '}
            <span className="text-sm font-normal" style={{ color: '#717073' }}>(999+ Results)</span>
          </h1>
        </div>
        <FilterBar />
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-4">
          {renderedProducts.map((product, idx) => (
            <ProductCard key={`${product.productId}-${idx}`} product={product} />
          ))}
        </div>
      </div>

      {/* Variation Label */}
      <div className="px-4 py-3" style={{ backgroundColor: '#E3F2FD', borderTopColor: '#90CAF9', borderTopWidth: '1px' }}>
        <div className="max-w-7xl mx-auto text-sm" style={{ color: '#1565C0' }}>
          <strong>V1 - Current State:</strong> Replicates existing MOXe experience. Sponsored products appear inline and may be duplicated. Carousel at top.
        </div>
      </div>
    </div>
  );
}
