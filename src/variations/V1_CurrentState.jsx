import React from 'react';
import ProductCard from '../components/ProductCard';
import SponsoredCarousel from '../components/SponsoredCarousel';

export default function V1_CurrentState({ products, carousel }) {
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
      <SponsoredCarousel carousel={carousel} />

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
          <strong>V1 - Current State:</strong> Replicates existing Moxe experience. Sponsored products appear inline and may be duplicated. Carousel at top.
        </div>
      </div>
    </div>
  );
}
