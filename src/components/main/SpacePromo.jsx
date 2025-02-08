import React from 'react';

const SpacePromo = () => {
  return (
    <div className="h-[40vh] bg-black flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full  rounded-3xl overflow-hidden">
        {/* Background Image */}
        {/* <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/800/800')`,
            backgroundBlendMode: 'overlay'
          }}
        /> */}
        
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" /> */}
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
          <h2 className="text-green-200 text-4xl md:text-5xl mt-6 font-medium mb-8">
            try Datasaki today!
          </h2>
          
          <button className="w-full max-w-md bg-white text-black rounded-lg py-3 px-6 flex items-center justify-center gap-3 font-medium hover:bg-gray-100 transition-colors mb-4">
            <img className='w-6 h-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1920px-Google_Chrome_icon_%28February_2022%29.svg.png" alt="" />
            Add to Chrome
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpacePromo;