import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="bg-gray-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-24 relative">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-[#E6DAC9] mb-24 max-w-4xl mx-auto leading-tight">
          Trusted by people in some of the world's most 
          innovative and data intensive teams
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-4 gap-8 mb-24">
          {/* Cult.fit */}
          <div className="flex items-center">
            <span className="font-semibold flex items-center text-xl">
                <img src="https://avatars.githubusercontent.com/u/20183371?s=200&v=4" alt="cult.fit" className="w-10 h-10 mr-2" />
               cult.fit
            </span>
          </div>

          {/* SOMOS */}
          <div className="flex items-center justify-center">
            <span className="font-bold text-2xl tracking-wider">
                <img src="https://static.wixstatic.com/media/024a55_8a56f4a2203f43309e1ac0c0100ab6d1~mv2.png/v1/fill/w_212,h_40,al_c,lg_1,q_85,enc_avif,quality_auto/Recurso%201.png" alt="SOMOS" className=" h-10 mr-2" />
            </span>
          </div>

          {/* Lynx Analytics */}
          <div className="flex items-center justify-center">
            <span className="flex items-center">
              <img src="https://www.hosehdigital.com/brands-logo/lynx-logo.svg" alt="Lynx Analytics" className="w-72 h-72 mr-2" />
            </span>
          </div>

          {/* Hive */}
          <div className="flex items-center justify-end">
            <span className="font-semibold flex items-center text-xl">
              <img src="https://hub.hive.app/hc/theming_assets/01HZKV2DTH1J74NJTW6X7ZPT7E" alt="Hive" className="w-70 h-70 mr-2" />
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 gap-24">
          {/* First Testimonial */}
          <div className="bg-pink-200 rounded-2xl p-8 shadow-sm min-h-[280px] relative">
            <blockquote className="text-m mb-16 font-semibold text-gray-900">
              "Really good work! I genuinely wouldn't have tried an analysis had I not had this tool. And 0 errors!"
            </blockquote>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3">
                <img 
                  src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">Apoorv Saxena</div>
                  <div className="text-gray-600">Research Scientist @ Adobe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="bg-pink-200 rounded-2xl p-8 shadow-sm min-h-[280px] relative">
            <blockquote className="text-m font-semibold mb-16 text-gray-800">
              "MinusX has effectively replaced the need for a dedicated data analyst. I simply upload my data, and it intuitively aligns to my requirements, even accommodating minor input errors. As a regular user, I've found that Minus X AI has significantly streamlined my data analysis process."
            </blockquote>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-3">
                <img 
                  src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369991.png" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">Nishkarsh Bansal</div>
                  <div className="text-gray-600">CEO @ doubtbuddy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;