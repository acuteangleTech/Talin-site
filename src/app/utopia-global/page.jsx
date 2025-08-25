'use client';
import React from 'react';
import Header from '@/components/common/Header';
import UtopiaSectorsSection from '@/components/sections/UtopiaSectorsSection';
import Footer from '@/components/sections/Footer';

const UtopiaGlobalPage = () => {
  const utopiaImages = [
    // Biscuits machines line
    {
      id: 1,
      src: '/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.10 PM (2).jpeg',
      alt: 'Biscuits Production Line',
    },
    {
      id: 2,
      src: '/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.10 PM (1).jpeg',
      alt: 'Biscuits Manufacturing Equipment',
    },
    {
      id: 3,
      src: '/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.10 PM.jpeg',
      alt: 'Biscuits Production Machinery',
    },
    {
      id: 4,
      src: '/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.09 PM.jpeg',
      alt: 'Biscuits Factory Equipment',
    },
    
    // Automatic and semi automatic blowing machines
    {
      id: 5,
      src: '/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.20 PM (1).jpeg',
      alt: 'Automatic Blowing Machine',
    },
    {
      id: 6,
      src: '/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.20 PM.jpeg',
      alt: 'Semi-Automatic Blowing Machine',
    },
    {
      id: 7,
      src: '/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.19 PM (2).jpeg',
      alt: 'Blowing Machine Technology',
    },
    {
      id: 8,
      src: '/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.19 PM (1).jpeg',
      alt: 'Advanced Blowing Equipment',
    },
    {
      id: 9,
      src: '/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.19 PM.jpeg',
      alt: 'Industrial Blowing Machine',
    },
    
    // Utopia machines
    {
      id: 10,
      src: '/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.53 PM.jpeg',
      alt: 'Utopia Manufacturing Equipment',
    },
    {
      id: 11,
      src: '/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.52 PM (1).jpeg',
      alt: 'Utopia Production Line',
    },
    {
      id: 12,
      src: '/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.52 PM.jpeg',
      alt: 'Utopia Factory Machinery',
    },
    {
      id: 13,
      src: '/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.51 PM.jpeg',
      alt: 'Utopia Industrial Equipment',
    },
    
    // Recycler factory
    {
      id: 14,
      src: '/recycler factory/WhatsApp Image 2025-08-16 at 11.05.37 PM.jpeg',
      alt: 'Recycling Factory Equipment',
    },
    {
      id: 15,
      src: '/recycler factory/WhatsApp Image 2025-08-16 at 11.05.36 PM (1).jpeg',
      alt: 'Recycling Production Line',
    },
    {
      id: 16,
      src: '/recycler factory/WhatsApp Image 2025-08-16 at 11.05.36 PM.jpeg',
      alt: 'Recycling Machinery',
    },
    
    // Dancom
    {
      id: 17,
      src: '/dancom/WhatsApp Image 2025-08-16 at 11.04.06 PM.jpeg',
      alt: 'Dancom Manufacturing',
    },
    {
      id: 18,
      src: '/dancom/WhatsApp Image 2025-08-16 at 11.04.05 PM (1).jpeg',
      alt: 'Dancom Production Equipment',
    },
    {
      id: 19,
      src: '/dancom/WhatsApp Image 2025-08-16 at 11.04.05 PM.jpeg',
      alt: 'Dancom Factory Machinery',
    },
    {
      id: 20,
      src: '/dancom/WhatsApp Image 2025-08-16 at 11.04.04 PM.jpeg',
      alt: 'Dancom Industrial Equipment',
    },
    
    // Production lines (PPR & PVC pipes)
    {
      id: 21,
      src: '/production lines/WhatsApp Image 2025-08-16 at 11.05.17 PM.jpeg',
      alt: 'PPR & PVC Production Line',
    },
    {
      id: 22,
      src: '/production lines/WhatsApp Image 2025-08-16 at 11.05.16 PM (1).jpeg',
      alt: 'Pipe Manufacturing Equipment',
    },
    {
      id: 23,
      src: '/production lines/WhatsApp Image 2025-08-16 at 11.05.16 PM.jpeg',
      alt: 'Pipe Production Machinery',
    }
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <Header />
      </div>
      <main className="bg-global-1">
        <section className="pt-32  px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              <div className="w-full lg:w-1/2">
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold leading-tight text-left whitespace-nowrap bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
                  Utopia Global General Trading
                </h1>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-xl text-gray-300 text-right">
                  Imports and installs factories and machinery for beverages, food products, recycling, oil, and packaging. 
                  Our comprehensive business spans 7 key sectors including factory ownership, management, production, R&D, 
                  marketing, distribution, and partnerships. Sources from China, Europe, and Asia, offering both new and 
                  refurbished solutions with full technical support.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <UtopiaSectorsSection />
        
        {/* Utopia Global Images Grid */}
        <section className="bg-global-1 pt-16 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
                Our Industrial Equipment Portfolio
              </h2>
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
                Showcasing our diverse range of industrial machinery, production lines, and manufacturing equipment across multiple industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {utopiaImages.map((image) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
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

export default UtopiaGlobalPage;
