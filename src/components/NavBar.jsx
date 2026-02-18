import React, { useState } from 'react';
import USFoodsLogo from '../img/US_Foods_logo.svg';

export default function NavBar() {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigationItems = [
    { label: 'Products & Deals', submenu: ['Browse Products', 'Deals & Promotions', 'New Arrivals'] },
    { label: 'My Business', submenu: ['Account Settings', 'Locations', 'Payment Methods'] },
    { label: 'My Orders', submenu: ['Order History', 'Reorder', 'Track Order'] },
    { label: 'My Lists', submenu: ['Shopping Lists', 'Favorites', 'Saved Items'] },
  ];

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px' }}>
      {/* Top Navigation */}
      <div className="px-6 py-3 flex items-center justify-between">
        {/* Left: Logo + Location Dropdown */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={USFoodsLogo} 
              alt="US Foods" 
              className="h-12 w-auto"
            />
          </div>

          {/* Location Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition-colors"
              style={{ backgroundColor: 'transparent', border: '2px solid #5C8727', color: '#5C8727' }}
            >
              <span className="text-xs">The Corner Grill (23456789) Pizza (123)</span>
              <span className="text-xs inline-block" style={{ lineHeight: '1', marginTop: '1px' }}>▼</span>
            </button>
            {showLocationDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg z-50 min-w-max" style={{ borderColor: '#E0E0E0', borderWidth: '1px' }}>
                <a href="#" className="block px-4 py-3 hover:bg-gray-100 text-sm" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px', color: '#717073' }}>The Corner Grill (Main)</a>
                <a href="#" className="block px-4 py-3 hover:bg-gray-100 text-sm" style={{ color: '#717073' }}>Downtown Location</a>
              </div>
            )}
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 mx-8 max-w-md">
          <div className="flex items-center rounded-full bg-white" style={{ borderColor: '#E0E0E0', borderWidth: '1px' }}>
            <svg className="w-5 h-5 text-gray-400 ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text"
              placeholder="Search Catalog"
              className="w-full px-4 py-2 text-sm focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Right: Icons and CTA */}
        <div className="flex items-center gap-4">
          {/* Notification/Alerts */}
          <button className="p-2 relative" style={{ color: '#717073' }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Account Avatar */}
          <button className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            U
          </button>

          {/* Create Order Button */}
          <button className="px-4 py-2 text-white text-sm font-medium rounded-md flex items-center gap-1 flex-shrink-0 hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5C8727' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Order
          </button>
        </div>
      </div>

      {/* Second Row: Main Navigation with Dropdowns */}
      <div className="px-6 bg-gray-50" style={{ borderTopColor: '#E0E0E0', borderTopWidth: '1px' }}>
        <div className="flex gap-6 text-sm">
          {navigationItems.map((item) => (
            <div key={item.label} className="relative group">
              <button 
                onClick={() => toggleDropdown(item.label)}
                className="py-3 font-medium flex items-center gap-1 border-b-2 border-transparent transition-colors"
                style={{ color: '#717073', borderBottomColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#5C8727';
                  e.target.style.borderBottomColor = '#5C8727';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#717073';
                  e.target.style.borderBottomColor = 'transparent';
                }}
              >
                {item.label}
                <span className={`text-xs transition-transform inline-block ${openDropdown === item.label ? 'rotate-180' : ''}`} style={{ lineHeight: '1' }}>
                  ▼
                </span>
              </button>
              
              {/* Dropdown Menu */}
              {openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-0 bg-white rounded shadow-lg z-50 min-w-max" style={{ borderColor: '#E0E0E0', borderWidth: '1px' }}>
                  {item.submenu.map((submenu) => (
                    <a 
                      key={submenu}
                      href="#" 
                      className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                      style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: submenu !== item.submenu[item.submenu.length - 1] ? '1px' : '0px' }}
                    >
                      {submenu}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
