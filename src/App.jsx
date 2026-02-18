import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Breadcrumb from './components/Breadcrumb';
import V1_CurrentState from './variations/V1_CurrentState';
import { mockProducts, sponsoredCarousel } from './data';

function App() {
  const [activeVariation] = useState('v1');

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Breadcrumb />
      
      {/* Main Content */}
      {activeVariation === 'v1' && (
        <V1_CurrentState products={mockProducts} carousel={sponsoredCarousel} />
      )}
    </div>
  );
}

export default App;
