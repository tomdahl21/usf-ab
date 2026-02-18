import React from 'react';

export default function SponsoredCarousel({ carousel }) {
  return (
    <div className="bg-gray-50 px-4 py-6" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg p-6" style={{ borderColor: '#E0E0E0', borderWidth: '1px' }}>
          <div className="grid grid-cols-12 gap-6 items-center">
            {/* Brand Section */}
            <div className="col-span-12 md:col-span-3">
              <div className="border-2 rounded-full p-8 flex items-center justify-center mb-4" style={{ borderColor: '#CF4520' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#CF4520' }}>TPS</div>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 text-center md:text-left">
                {carousel.title}
              </h3>
              <button className="w-full md:w-auto px-4 py-2 rounded border border-gray-400 text-gray-700 hover:bg-gray-50" style={{ color: '#5C8727', borderColor: '#5C8727' }}>
                {carousel.subtitle}
              </button>
            </div>

            {/* Product Images */}
            <div className="col-span-12 md:col-span-9">
              <div className="flex gap-4 overflow-x-auto">
                {carousel.productImages.map((img, idx) => (
                  <div key={idx} className="flex-shrink-0">
                    <img
                      src={img}
                      alt={`Product ${idx + 1}`}
                      className="h-24 w-24 object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sponsored Label */}
        <div className="mt-2 text-xs text-center" style={{ color: '#717073' }}>Sponsored</div>
      </div>
    </div>
  );
}
