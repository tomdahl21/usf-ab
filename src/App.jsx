import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Breadcrumb from './components/Breadcrumb';
import ExperienceIndex from './components/ExperienceIndex';
import VariationSwitcher from './components/VariationSwitcher';
import V1_CurrentState from './variations/V1_CurrentState';
import V2_DeduplicatedInline from './variations/V2_DeduplicatedInline';
import V3_TopRailOnly from './variations/V3_TopRailOnly';
import V4_SponsoredInterstitial from './variations/V4_SponsoredInterstitial';
import V5_RightRail from './variations/V5_RightRail';
import V6_SearchSpotlight from './variations/V6_SearchSpotlight';
import { mockProducts, sponsoredCarousel } from './data';

const VARIATION_COMPONENTS = {
  v1: V1_CurrentState,
  v2: V2_DeduplicatedInline,
  v3: V3_TopRailOnly,
  v4: V4_SponsoredInterstitial,
  v5: V5_RightRail,
  v6: V6_SearchSpotlight,
};

// Parse variation ID from hash, e.g. "#/v2" → "v2", "#/" or "" → null
function getVariationFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  return VARIATION_COMPONENTS[hash] ? hash : null;
}

function navigate(variationId) {
  window.location.hash = variationId ? `/${variationId}` : '/';
}

export default function App() {
  const [variation, setVariation] = useState(getVariationFromHash);
  const [searchTerm, setSearchTerm] = useState('Cheese');

  // Keep state in sync with browser back/forward navigation
  useEffect(() => {
    const onHashChange = () => setVariation(getVariationFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleVariationChange = (id) => {
    navigate(id);
    setVariation(id);
  };

  // No variation in hash → show index
  if (!variation) {
    return (
      <ExperienceIndex
        onLaunch={(id) => handleVariationChange(id)}
      />
    );
  }

  const ActiveVariation = VARIATION_COMPONENTS[variation];

  return (
    <div className="min-h-screen bg-white pb-14">
      <NavBar />
      <Breadcrumb />
      <ActiveVariation
        products={mockProducts}
        carousel={sponsoredCarousel}
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />
      <VariationSwitcher active={variation} onChange={handleVariationChange} />
    </div>
  );
}
