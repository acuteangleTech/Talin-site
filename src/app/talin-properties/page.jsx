'use client';
import React from 'react';
import Header from '@/components/common/Header';
import PropertiesSectorsSection from '@/components/sections/PropertiesSectorsSection';
import Footer from '@/components/sections/Footer';

const TalinPropertiesPage = () => {
  const realEstateImages = [
    {
      id: 1,
      src: '/real state/WhatsApp Image 2025-08-16 at 11.01.59 PM.jpeg',
      alt: 'Real Estate Development',
    },
    {
      id: 2,
      src: '/real state/WhatsApp Image 2025-08-16 at 11.01.58 PM (1).jpeg',
      alt: 'Real Estate Construction',
    },
    {
      id: 3,
      src: '/real state/WhatsApp Image 2025-08-16 at 11.01.58 PM.jpeg',
      alt: 'Real Estate Project',
    },
    {
      id: 4,
      src: '/real state/WhatsApp Image 2025-08-16 at 11.01.57 PM (1).jpeg',
      alt: 'Real Estate Portfolio',
    },
    {
      id: 5,
      src: '/real state/WhatsApp Image 2025-08-16 at 11.01.57 PM.jpeg',
      alt: 'Real Estate Innovation',
    }
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <Header />
      </div>
      <main className="bg-global-1">
        <section className="pt-32 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              <div className="w-full lg:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left whitespace-nowrap bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
                  Talin Properties
                </h1>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-xl text-gray-300 text-right">
                  A leader in innovative real estate construction in Sudan. Introduced lightweight brick technology for faster, cost-effective, and sustainable building. 
                  Our comprehensive business spans 7 key sectors including development, construction, design, management, technology, marketing, and partnerships. 
                  Portfolio includes luxury villas and residential developments adhering to global engineering standards.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <PropertiesSectorsSection />
        
        {/* Real Estate Images Grid */}
        <section className="bg-global-1 pt-16 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
                Our Real Estate Portfolio
              </h2>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
                Showcasing our diverse real estate projects, construction capabilities, and innovative building technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {realEstateImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Overlay with title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg">
                          {image.alt}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default TalinPropertiesPage;
