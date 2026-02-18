import React from 'react';

export default function FilterBar() {
  const filters = [
    'All Filters',
    'US Foods Delivered',
    'My Lists',
    'Our Exclusives',
    'Categories',
    'Product Type',
    'Product Ratings',
    'Sales Pack Size',
  ];

  return (
    <div className="bg-white px-4 py-4" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px' }}>
      <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            className="px-3 py-1 rounded-full text-sm hover:transition-colors"
            style={{ 
              borderColor: '#717073', 
              borderWidth: '1px',
              color: '#717073',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#5C8727';
              e.target.style.color = '#5C8727';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = '#717073';
              e.target.style.color = '#717073';
            }}
          >
            {filter}
          </button>
        ))}
      </div>
      
      {/* Action Buttons */}
      <div className="max-w-7xl mx-auto flex gap-4 mt-3 text-sm" style={{ borderTopColor: '#E0E0E0', borderTopWidth: '1px', paddingTop: '12px' }}>
        <button className="hover:underline" style={{ color: '#5C8727' }}>Compare Products</button>
        <button className="hover:underline" style={{ color: '#5C8727' }}>+ Add To List</button>
        <button className="hover:underline" style={{ color: '#5C8727' }}>+ Add To Inventory</button>
      </div>
    </div>
  );
}
