'use client';

import React, { useEffect, useRef } from 'react';
import { ContentCopy, ArrowForward, Download } from '@mui/icons-material';

const HowItWorks = () => {
  const stepsRef = useRef(null);

  // Dynamic data for steps
  const steps = [
    {
      step: 1,
      title: 'Copy URL',
      description: 'Copy the URL of the Instagram content you want to download.',
      icon: <ContentCopy className="h-10 w-10 text-white" />,
    },
    {
      step: 2,
      title: 'Paste URL',
      description: 'Paste the URL into our downloader form.',
      icon: (
        <div className="w-full max-w-[200px] h-10 rounded-lg bg-white/20 flex items-center justify-between px-3">
          <div className="w-24 h-2 bg-white/40 rounded"></div>
          <div className="w-6 h-6 rounded-full bg-white"></div>
        </div>
      ),
    },
    {
      step: 3,
      title: 'Download Media',
      description: 'Your content will be processed and ready to download.',
      icon: <Download className="h-10 w-10 text-white animate-pulse" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.step-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('opacity-100', 'translate-y-0');
                child.classList.remove('opacity-0', 'translate-y-12');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }

    return () => {
      if (stepsRef.current) {
        observer.unobserve(stepsRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 text-black flex justify-center items-center">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Download Instagram content in three simple steps.
          </p>
        </div>

        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="step-item opacity-0 translate-y-12 transition-all duration-500 ease-in-out relative"
            >
              <div className="flex flex-col items-center text-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 shadow-lg h-full transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5 text-white">
                  <span className="text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
                <div className="mt-6">{step.icon}</div>
              </div>

              {/* Arrow for desktop (except last step) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <ArrowForward className="h-6 w-6 text-gray-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;