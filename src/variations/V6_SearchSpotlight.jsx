import React from 'react';
import ProductCard from '../components/ProductCard';
import SearchSpotlight from '../components/SearchSpotlight';
import FilterBar from '../components/FilterBar';

// Searches containing these keywords will trigger the spotlight hero
const SPOTLIGHT_KEYWORDS = ['cheese', 'dairy', 'cheddar', 'mozzarella', 'butter'];

export default function V6_SearchSpotlight({ products, carousel, searchTerm = '', onSearch }) {
  const organicProducts = products.filter(p => !p.isSponsored);
  const termLower = searchTerm.toLowerCase();
  const showSpotlight = SPOTLIGHT_KEYWORDS.some(kw => termLower.includes(kw));

  return (
    <div className="space-y-0">

      {/* Spotlight hero — only renders when search keyword matches */}
      {showSpotlight && (
        <SearchSpotlight
          carousel={carousel}
          searchTerm={searchTerm}
          onClick={() => onSearch && onSearch('Cheese')}
        />
      )}

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

      {/* Product Grid — organic only */}
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
          <strong>V6 – Search-Triggered Spotlight:</strong> A branded hero unit appears when the search term matches a sponsored keyword (e.g. &ldquo;Cheese&rdquo;). No hero for unmatched searches — results are always organic.
        </div>
      </div>

    </div>
  );
}
