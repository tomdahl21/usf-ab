import React from 'react';

const tagConfig = {
  cmpContract: { label: 'CMP - Contract', style: { borderColor: '#717073', color: '#717073', backgroundColor: 'white', borderWidth: '1px' } },
  direct: { label: 'DIRECT', style: { borderColor: '#CF4520', color: '#CF4520', backgroundColor: 'white', borderWidth: '1px' } },
  recentPurchase: { label: 'Recent Purchase', style: { borderColor: '#717073', color: '#717073', backgroundColor: 'white', borderWidth: '1px' } },
  scoop: { label: 'SCOOP', style: { backgroundColor: '#CF4520', color: 'white' } },
  onML: { label: 'On ML', style: { borderColor: '#717073', color: '#717073', backgroundColor: 'white', borderWidth: '1px' } },
};

export default function ProductCard({ product }) {
  return (
    <div className="bg-white relative rounded-lg p-4" style={{ borderColor: '#E0E0E0', borderWidth: '1px' }}>
      <div className="flex gap-4 md:gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img 
            src={product.imageUrl} 
            alt={product.title}
            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded"
            style={{ borderColor: '#E0E0E0', borderWidth: '1px' }}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/100'; }}
          />
        </div>

        {/* Content - Left Section */}
        <div className="flex-1 min-w-0">
          {/* Brand & Title */}
          <div className="mb-2">
            <p className="text-xs md:text-sm" style={{ color: '#717073' }}>{product.brand}</p>
            <h3 className="font-semibold text-xs md:text-sm line-clamp-2 mb-1">
              {product.title}
            </h3>
          </div>

          {/* SKU/Pack Info */}
          <div className="text-xs mb-2" style={{ color: '#717073' }}>
            #{product.glNumber} | GL {product.glNumber} | {product.packSize}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex text-yellow-400 text-sm">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs" style={{ color: '#717073' }}>{product.rating}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap"
                style={tagConfig[tag].style}
              >
                {tagConfig[tag].label}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Pricing & Actions */}
        <div className="flex-shrink-0 flex flex-col items-end justify-between py-1">
          {/* Pricing Section */}
          <div className="text-right space-y-2">
            {/* CS Pricing */}
            <div className="flex items-center gap-2 justify-end">
              <input 
                type="number" 
                defaultValue="0" 
                className="w-10 md:w-12 px-2 py-1 rounded text-xs text-center"
                style={{ borderColor: '#E0E0E0', borderWidth: '1px' }}
              />
              <span className="text-xs md:text-sm font-semibold whitespace-nowrap" style={{ color: '#5C8727' }}>
                ${product.priceCS.toFixed(2)} CS
              </span>
            </div>
            
            {/* EA Pricing */}
            <div className="flex items-center gap-2 justify-end">
              <input 
                type="number" 
                defaultValue="0" 
                className="w-10 md:w-12 px-2 py-1 rounded text-xs text-center"
                style={{ borderColor: '#E0E0E0', borderWidth: '1px' }}
              />
              <span className="text-xs md:text-sm font-semibold whitespace-nowrap" style={{ color: '#717073' }}>
                ${product.priceEA.toFixed(2)} EA
              </span>
            </div>
          </div>

          {/* Savings Badge */}
          <div className="px-2 py-1 text-xs font-semibold rounded whitespace-nowrap mt-2" style={{ backgroundColor: '#E8F5E9', color: '#5C8727' }}>
            {product.savings}
          </div>

          {/* Line Number */}
          <div className="text-xs mt-2" style={{ color: '#717073' }}>Line #{product.lineNumber}</div>

          {/* Kebab Menu */}
          <button className="p-1 rounded mt-2" style={{ color: '#717073' }}>
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sponsored Badge */}
      {product.isSponsored && (
        <div className="absolute top-2 right-2 md:top-4 md:right-4 text-xs font-medium" style={{ color: '#717073' }}>
          {product.sponsoredLabel}
        </div>
      )}
    </div>
  );
}

function renderStars(rating) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<span key={`star-${i}`}>★</span>);
    } else if (i === fullStars && hasHalf) {
      stars.push(<span key={`star-${i}`}>☆</span>);
    } else {
      stars.push(<span key={`star-${i}`} className="text-gray-300">★</span>);
    }
  }
  return stars;
}
