import React from 'react';

const HeroSection = () => {
  return (
    <main className="w-full bg-white">
      <div className="max-w-4xl mx-auto text-center py-20 px-4">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Analyze your data
          <br />
          with computational AI.
        </h1>
        
        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Chat with your files and get expert-level insights in seconds.
        </p>
        
        {/* CTA Button */}
        <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-full hover:bg-blue-700 inline-flex items-center">
          Try DataSaki
          <svg 
            className="w-5 h-5 ml-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </main>
  );
};

export default HeroSection;