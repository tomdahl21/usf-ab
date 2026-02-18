import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Breadcrumb from './components/Breadcrumb';
import SearchLanding from './components/SearchLanding';
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

function App() {
  const [screen, setScreen] = useState('index'); // 'index' | 'search' | 'results'
  const [searchTerm, setSearchTerm] = useState('');
  const [variation, setVariation] = useState('v1');

  const handleLaunch = (variationId) => {
    setVariation(variationId);
    setSearchTerm('Cheese');
    setScreen('results');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setScreen('results');
  };

  const handleHome = () => {
    setScreen('index');
    setSearchTerm('');
  };

  if (screen === 'index') {
    return <ExperienceIndex onLaunch={handleLaunch} />;
  }

  if (screen === 'search') {
    return <SearchLanding onSearch={handleSearch} onHome={handleHome} />;
  }

  const ActiveVariation = VARIATION_COMPONENTS[variation] || V1_CurrentState;

  return (
    <div className="min-h-screen bg-white pb-14">
      <NavBar />
      <Breadcrumb onHome={handleHome} />
      <ActiveVariation
        products={mockProducts}
        carousel={sponsoredCarousel}
        searchTerm={searchTerm}
        onSearch={handleSearch}
      />
      <VariationSwitcher active={variation} onChange={setVariation} />
    </div>
  );
}

export default App;
