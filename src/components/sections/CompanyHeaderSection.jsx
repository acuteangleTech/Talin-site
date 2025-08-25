import React from 'react';

const CompanyHeaderSection = () => {
  return (
    <section className="bg-global-1 pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Company Name */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#666666] to-[#333333] bg-clip-text text-transparent whitespace-nowrap overflow-hidden">
              Talin International
            </h1>
          </div>
          
          {/* Company Description */}
          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl">
              Specializes in creating high-value investment opportunities through smart partnering models across 10 key business sectors. 
              Our expertise spans infrastructure, manufacturing, agriculture, healthcare, technology, and more, with projects focused on 
              reconstruction and development of Sudan through strategic partnerships and comprehensive agreements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHeaderSection;
