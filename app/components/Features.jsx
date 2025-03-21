'use client';

import React from 'react';
import { Instagram, Bolt, Image, Smartphone } from '@mui/icons-material';

const features = [
  {
    icon: <Instagram fontSize="large" className="text-red-600" />,
    title: 'Instagram Support',
    description: 'Download reels, stories, posts, and videos from Instagram.',
  },
  {
    icon: <Bolt fontSize="large" className="text-amber-500" />,
    title: 'Fast Processing',
    description: 'Ultra-fast processing delivers instant downloads.',
  },
  {
    icon: <Image fontSize="large" className="text-blue-500" />,
    title: 'High Quality',
    description: 'Get media in the highest available quality.',
  },
  {
    icon: <Smartphone fontSize="large" className="text-green-500" />,
    title: 'Mobile Friendly',
    description: 'Fully responsive design for all devices.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 flex justify-center items-center text-black bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Everything you need for hassle-free Instagram downloads.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;