'use client';

import React, { useState } from 'react';

const DownloadForm = ({ selectedFeature }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState(null);

  const downloadVideo = async () => {
    const urlInput = document.getElementById('urlInput');
    const url = urlInput.value.trim();

    if (!url) {
      setError('Please enter a valid Instagram URL.');
      return;
    }

    setLoading(true);
    setError('');
    setVideoData(null);

    try {
      const response = await fetch('https://tooltik.imgtype.com/getVideoUrls', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: [url] }),
      });

      const data = await response.json();

      if (data.success && data.videoUrls.data.length > 0) {
        setVideoData(data.videoUrls.data[0]);
      } else {
        setError('Invalid URL or no video found.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const placeholderText = {
    video: 'Enter Instagram Video URL',
    photo: 'Enter Instagram Photo URL',
    story: 'Enter Instagram Story URL',
    reel: 'Enter Instagram Reel URL',
    igtv: 'Enter IGTV Video URL',
  }[selectedFeature];

  return (
    <div className="max-w-3xl mx-auto p-6 text-black">
      {/* Input Field */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          id="urlInput"
          className="flex-1 w-full p-4 border border-black"
          placeholder={placeholderText}
        />
        <button className="w-full md:w-auto p-4 bg-black text-white" onClick={downloadVideo}>
          Download
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex flex-col items-center justify-center my-6">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
          <p className="mt-2 text-gray-600">Loading, please wait...</p>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <div className="p-4 mb-6 text-red-600 bg-red-100 border border-red-200 rounded-lg">
          {error}
        </div>
      )}

      {/* Video Preview Box */}
      {videoData && (
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 p-6 border-2 border-black rounded-lg bg-white">
          {/* Image Box */}
          <div className="flex-1 p-4 border border-gray-200 rounded-lg">
            <img src={videoData.thumbnail} alt="Instagram thumbnail" className="w-full max-w-xs mx-auto" />
          </div>

          {/* Button Box */}
          <div className="flex-1 flex flex-col gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <a
              href={videoData.url}
              download
              className="p-4 bg-black text-white text-center rounded-lg hover:bg-gray-900 transition-colors"
              onClick={reloadPage}
            >
              Download
            </a>
            <button
              onClick={reloadPage}
              className="p-4 bg-gray-100 text-gray-800 text-center rounded-lg hover:bg-gray-200 transition-colors"
            >
              Download Other Video
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadForm;
