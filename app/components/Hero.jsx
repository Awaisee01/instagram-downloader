'use client';

import React, { useState } from 'react';
import DownloadForm from './DownloadFrom';
import FeatureSelector from './FeatureSelector';

const Hero = () => {
  const [selectedFeature, setSelectedFeature] = useState('photo');

  const featureLabels = {
    video: 'Instagram Video',
    photo: 'Instagram Photo',
    story: 'Instagram Story',
    reel: 'Instagram Reels',
    igtv: 'IGTV Video',
  };

  return (
    <section
    id="hero"
    className="px-4 py-32 flex justify-center items-center text-white relative"
    style={{
      background: 'linear-gradient(-45deg, #f9f9f9, #e0e0e0, #f9f9f9, #e0e0e0)',
      backgroundSize: '400% 400%',
      animation: 'gradient 15s ease infinite',
    }}
  >
    <div className="container text-center">
      <h1 className="text-4xl font-bold mb-6 text-black">
        {featureLabels[selectedFeature]} Downloader
      </h1>
      <p className="text-gray-600 mb-8">
        Download reels, stories, posts, and videos from Instagram instantly.
      </p>
      <FeatureSelector onSelect={setSelectedFeature} />
      <DownloadForm selectedFeature={selectedFeature} />
    </div>
  </section>
  );
};

export default Hero;
