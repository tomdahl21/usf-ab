import React, { useState } from 'react';
import USFoodsLogo from '../img/US_Foods_logo.svg';

const suggestions = [
  'Cheese',
  'Dairy & Eggs',
  'Mozzarella',
  'Butter',
  'Pepperoni',
  'Hush Puppies',
  'Cream Cheese',
  'Cheddar',
];

export default function SearchLanding({ onSearch, onHome }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  const handleSuggestion = (term) => {
    onSearch(term);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F5F5' }}>

      {/* Minimal top bar with just the logo */}
      <div className="bg-white px-8 py-4 flex items-center justify-between" style={{ borderBottomColor: '#E0E0E0', borderBottomWidth: '1px' }}>
        <img src={USFoodsLogo} alt="US Foods" className="h-10 w-auto" />
        {onHome && (
          <button
            onClick={onHome}
            className="text-xs font-medium flex items-center gap-1 hover:underline"
            style={{ color: '#717073' }}
          >
            ← All Variations
          </button>
        )}
      </div>

      {/* Hero search area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">

        {/* Heading */}
        <h1
          className="text-5xl mb-2 text-center"
          style={{ fontFamily: "'League Gothic', sans-serif", fontWeight: 400, color: '#1A1A1A', letterSpacing: '0.02em' }}
        >
          WHAT ARE YOU LOOKING FOR?
        </h1>
        <p className="text-sm mb-10" style={{ color: '#717073' }}>
          Search the US Foods catalog
        </p>

        {/* Search input */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-8">
          <div
            className="flex items-center bg-white rounded-full overflow-hidden"
            style={{ border: '2px solid #5C8727', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
          >
            <svg className="w-5 h-5 ml-5 flex-shrink-0" fill="none" stroke="#717073" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Catalog"
              autoFocus
              className="flex-1 px-4 py-4 text-base focus:outline-none bg-transparent"
              style={{ color: '#1A1A1A' }}
            />
            <button
              type="submit"
              className="px-6 py-4 text-white text-sm font-semibold rounded-r-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#5C8727' }}
            >
              Search
            </button>
          </div>
        </form>

        {/* Suggestion chips */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
          <span className="text-xs mr-1 self-center" style={{ color: '#717073' }}>Try:</span>
          {suggestions.map((term) => (
            <button
              key={term}
              onClick={() => handleSuggestion(term)}
              className="px-4 py-1.5 rounded-full text-sm bg-white transition-colors hover:border-green-700 hover:text-green-700"
              style={{ border: '1px solid #E0E0E0', color: '#717073' }}
            >
              {term}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
