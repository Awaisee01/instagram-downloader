'use client';

import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQS = () => {
  const faqs = [
    {
      question: "Is this service free?",
      answer: "Yes, our service is completely free to use. You can download Instagram content without any limits."
    },
    {
      question: "Is it legal to download Instagram content?",
      answer: "Our service is meant for downloading content for personal use only. Please respect copyright and intellectual property rights."
    },
    {
      question: "What content can I download?",
      answer: "You can download Instagram reels, stories, posts, and videos. Our service supports all types of Instagram content."
    },
    {
      question: "Do you store the downloaded content?",
      answer: "No, we don't store any content on our servers. All processing is done in real-time and we don't keep any copies of your downloads."
    },
    {
      question: "Why is your service faster than others?",
      answer: "We've built our service with performance in mind. Our backend uses asynchronous processing and optimized algorithms to ensure the fastest possible download experience."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 flex justify-center items-center bg-gray-100 text-black">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our service.</p>
        </div>

        {/* FAQ List */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <Accordion key={index} className="mb-4 shadow-sm rounded-lg border border-gray-200">
              <AccordionSummary expandIcon={<ExpandMoreIcon />} className="font-medium text-lg">
                {faq.question}
              </AccordionSummary>
              <AccordionDetails className="text-gray-600">{faq.answer}</AccordionDetails>
            </Accordion>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to download your favorite Instagram content?</h3>
          <p className="text-gray-600 mb-6">Start downloading Instagram reels, stories, posts, and videos now!</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Try It Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQS;
