import React from 'react';

export default function SearchSpotlight({ carousel, searchTerm, onClick }) {
  return (
    <div className="px-4 pt-4 pb-0" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto">

        {/* Sponsored pill */}
        <div className="inline-block rounded mb-2 px-2 py-0.5" style={{ backgroundColor: '#EEEEEE' }}>
          <p className="text-xs" style={{ color: '#717073' }}>
            Sponsored — matched to &ldquo;{searchTerm}&rdquo;
          </p>
        </div>

        {/* Hero card */}
        <div
          className="bg-white rounded-lg overflow-hidden cursor-pointer group"
          style={{
            border: '1px solid #E0E0E0',
            background: 'linear-gradient(135deg, #faf8f4 0%, #ede8df 100%)',
          }}
          onClick={onClick}
        >
          <div className="flex items-stretch gap-0">

            {/* Brand column */}
            <div
              className="flex-shrink-0 flex flex-col items-center justify-center text-center p-6"
              style={{ width: '200px', borderRight: '1px solid #E0E0E0', backgroundColor: 'rgba(255,255,255,0.6)' }}
            >
              <div
                className="w-20 h-20 rounded-full overflow-hidden mb-3 bg-white"
                style={{ border: '3px solid #CF4520' }}
              >
                <img
                  src={carousel.brandLogoUrl}
                  alt={carousel.brandName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentNode.innerHTML = `<span style="color:#CF4520;font-weight:800;font-size:14px">${carousel.brandName.slice(0,2).toUpperCase()}</span>`;
                  }}
                />
              </div>
              <p className="text-base font-bold mb-1" style={{ color: '#1A1A1A' }}>{carousel.brandName}</p>
              <p className="text-xs mb-4 leading-snug" style={{ color: '#717073' }}>{carousel.title}</p>
              <button
                className="w-full text-sm font-semibold py-2 px-3 rounded"
                style={{ color: '#5C8727', border: '1px solid #5C8727', backgroundColor: 'white' }}
              >
                {carousel.subtitle}
              </button>
            </div>

            {/* Product tiles */}
            <div className="flex-1 grid grid-cols-4 gap-3 p-5">
              {carousel.products.map((p, i) => (
                <div
                  key={i}
                  className="bg-white rounded p-3 flex flex-col"
                  style={{ border: '1px solid #E0E0E0' }}
                >
                  <div className="h-24 flex items-center justify-center mb-2">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-contain"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/96/ffffff/cccccc?text=img'; }}
                    />
                  </div>
                  <p className="text-xs leading-snug line-clamp-2 group-hover:underline" style={{ color: '#1A1A1A' }}>
                    {p.title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
