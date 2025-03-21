'use client';

import React from 'react';
import { Instagram, Facebook, Twitter, GitHub } from '@mui/icons-material';

const Footer = () => {
  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-purple-50 text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col  justify-between items-center gap-4">
          {/* Copyright Notice */}
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Codeinca. All rights reserved.
          </p>

          {/* Quick Links */}
          <div className="flex space-x-4">
            <button
              onClick={() => handleScroll('features')}
              className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
            >
              Features
            </button>
            <button
              onClick={() => handleScroll('how-it-works')}
              className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
            >
              How It Works
            </button>
            <button
              onClick={() => handleScroll('faq')}
              className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
            >
              FAQ
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="text-gray-600 hover:text-blue-500 transition-colors text-sm"
            >
              Contact
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Instagram fontSize="small" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Facebook fontSize="small" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Twitter fontSize="small" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <GitHub fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;