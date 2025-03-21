'use client';

import React from 'react';

const FeatureCard = ({ icon, title, description, className, iconClassName }) => {
  return (
    <div
      className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300
        hover:shadow-md hover:-translate-y-1 bg-black border border-gray-100 ${className}`}
    >
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-full mb-5 bg-gray-800 ${iconClassName}`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
