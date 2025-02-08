import React from 'react';

const IntegrationSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto flex justify-center items-center space-x-20">
        {/* Jupyter Logo */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="12" r="12" className="fill-current text-gray-900" />
              <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" className="fill-white" />
            </svg>
          </div>
          <span className="text-gray-900 font-medium">jupyter</span>
        </div>

        {/* Metabase Logo */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-2">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <g className="fill-current text-gray-900">
                <circle cx="12" cy="2" r="2" />
                <circle cx="12" cy="22" r="2" />
                <circle cx="2" cy="12" r="2" />
                <circle cx="22" cy="12" r="2" />
                <circle cx="5" cy="5" r="2" />
                <circle cx="19" cy="19" r="2" />
                <circle cx="5" cy="19" r="2" />
                <circle cx="19" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
              </g>
            </svg>
          </div>
          <span className="text-gray-900 font-medium">metabase</span>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;