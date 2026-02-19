import React from 'react';
import ProductCard from '../components/ProductCard';
import SponsoredInterstitial from '../components/SponsoredInterstitial';
import FilterBar from '../components/FilterBar';

const GROUP_SIZE = 5;

export default function V4_SponsoredInterstitial({ products, carousel, searchTerm = 'HUSH PUPPIES', onSearch }) {
  const organicProducts = products.filter(p => !p.isSponsored);

  // Split organic products into groups of GROUP_SIZE
  const groups = [];
  for (let i = 0; i < organicProducts.length; i += GROUP_SIZE) {
    groups.push(organicProducts.slice(i, i + GROUP_SIZE));
  }

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

      {/* Product groups with interstitials between them */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {groups.map((group, groupIdx) => (
          <React.Fragment key={groupIdx}>
            {/* Interstitial banner before every group after the first */}
            {groupIdx > 0 && (
              <SponsoredInterstitial
                carousel={carousel}
                onClick={() => onSearch && onSearch('Cheese')}
              />
            )}
            <div className="grid grid-cols-1 gap-4 mb-4">
              {group.map((product) => (
                <ProductCard key={product.productId} product={product} />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Variation Label */}
      <div className="px-4 py-3" style={{ backgroundColor: '#E3F2FD', borderTopColor: '#90CAF9', borderTopWidth: '1px' }}>
        <div className="max-w-7xl mx-auto text-sm" style={{ color: '#1565C0' }}>
          <strong>V4 – Sponsored Interstitial: ABC</strong> Sponsored content appears as full-width branded breaks between every 5 organic results. High visual impact without interrupting individual product comparison.
        </div>
      </div>

    </div>
  );
}
