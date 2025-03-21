'use client';

import { useState } from 'react';
import { PlayCircleOutline, Image, CameraAlt, Movie } from '@mui/icons-material';

const features = [
  { id: 'video', label: 'Video', icon: PlayCircleOutline },
  { id: 'photo', label: 'Photo', icon: Image },
  { id: 'story', label: 'Story', icon: CameraAlt },
  { id: 'reel', label: 'Reel', icon: Movie },
];

export default function FeatureSelector({ onSelect }) {
  const [selected, setSelected] = useState('photo');

  const handleSelect = (feature) => {
    setSelected(feature);
    onSelect(feature);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-5">
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 mb-4">
        {features.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleSelect(id)}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full border-2 min-w-[120px] transition-all
              ${selected === id ? 'bg-black text-white border-white shadow-sm' : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'}
            `}
          >
            <Icon fontSize="small" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>

      <div className="w-full text-center">
        <h3 className="text-xl font-medium text-black">
          {selected === 'video' && 'Instagram Video Downloader'}
          {selected === 'photo' && 'Instagram Photo Downloader'}
          {selected === 'story' && 'Instagram Story Downloader'}
          {selected === 'reel' && 'Download Instagram Reels'}
        </h3>
      </div>
    </div>
  );
}
