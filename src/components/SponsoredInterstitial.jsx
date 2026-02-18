import React from 'react';

export default function SponsoredInterstitial({ carousel, onClick }) {
  return (
    <div
      className="rounded-lg overflow-hidden cursor-pointer my-3"
      style={{
        border: '1px solid #E0E0E0',
        background: 'linear-gradient(135deg, #faf8f4 0%, #ede8df 100%)',
      }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between px-6 py-5">

        {/* Left: brand + title */}
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center bg-white"
            style={{ border: '2px solid #CF4520' }}
          >
            <img
              src={carousel.brandLogoUrl}
              alt={carousel.brandName}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.parentNode.innerHTML = `<span style="color:#CF4520;font-weight:800;font-size:11px;padding:2px">${carousel.brandName.slice(0, 2).toUpperCase()}</span>`;
              }}
            />
          </div>
          <div>
            <h3 className="text-base font-bold mb-0.5" style={{ color: '#1A1A1A' }}>
              Trusted Pantry Staples
            </h3>
            <p className="text-xs" style={{ color: '#717073' }}>
              from {carousel.brandName}
            </p>
          </div>
        </div>

        {/* Right: sponsored label + product thumbnails */}
        <div className="flex items-center gap-3">
          <div
            className="text-xs px-2 py-0.5 rounded mr-1"
            style={{ backgroundColor: '#EEEEEE', color: '#717073' }}
          >
            Sponsored
          </div>
          {carousel.products.slice(0, 3).map((p, i) => (
            <div
              key={i}
              className="w-20 h-20 bg-white rounded flex items-center justify-center flex-shrink-0"
              style={{ border: '1px solid #E0E0E0' }}
            >
              <img
                src={p.imageUrl}
                alt={p.title}
                className="w-full h-full object-contain p-2"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/80/ffffff/cccccc?text=img'; }}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
