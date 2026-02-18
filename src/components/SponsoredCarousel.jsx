import React from 'react';

export default function SponsoredCarousel({ carousel, onSearch }) {
  const handleSponsoredClick = () => {
    if (onSearch) onSearch('Cheese');
  };
  return (
    <div className="px-4 pt-2 pb-5" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">

        {/* "Sponsored" pill — outside the white box */}
        <div className="inline-block rounded mb-2 px-2 py-0.5" style={{ backgroundColor: '#EEEEEE' }}>
          <p className="text-xs" style={{ color: '#717073' }}>Sponsored</p>
        </div>

        {/* Outer white box */}
        <div className="bg-white rounded p-4" style={{ border: '1px solid #E0E0E0' }}>

        {/* Horizontal row: brand column + product tiles */}
        <div className="flex items-start gap-4">

          {/* Brand column — vertically stacked, centered */}
          <div className="flex-1 flex flex-col items-center text-center bg-white rounded p-3" style={{ border: '1px solid #E0E0E0' }}>
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden mb-2"
              style={{ border: '2px solid #CF4520' }}
            >
              <img
                src={carousel.brandLogoUrl}
                alt={carousel.brandName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentNode.innerHTML =
                    `<span style="color:#CF4520;font-weight:800;font-size:13px;letter-spacing:-0.5px">${carousel.brandName.toUpperCase()}</span>`;
                }}
              />
            </div>
            <p className="text-sm font-bold leading-snug mb-3" style={{ color: '#1A1A1A' }}>
              {carousel.title}
            </p>
            <button
              className="w-full text-xs font-semibold py-1 px-2 rounded"
              style={{ color: '#5C8727', border: '1px solid #5C8727', backgroundColor: 'white' }}
              onClick={handleSponsoredClick}
            >
              {carousel.subtitle}
            </button>
          </div>

          {/* Product tiles — image on top, title below */}
          {carousel.products.map((product, idx) => (
            <div key={idx} className="flex-1 cursor-pointer group bg-white rounded p-2" style={{ border: '1px solid #E0E0E0' }} onClick={handleSponsoredClick}>
              {/* Image */}
              <div className="w-full h-28 bg-white flex items-center justify-center mb-2 rounded">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/120/ffffff/cccccc?text=img'; }}
                />
              </div>
              <p
                className="text-xs leading-snug line-clamp-2 group-hover:underline"
                style={{ color: '#1A1A1A' }}
              >
                {product.title}
              </p>
            </div>
          ))}

        </div>

        </div>{/* end outer white box */}
      </div>
    </div>
  );
}
