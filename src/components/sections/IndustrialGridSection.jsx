import React from 'react';

const IndustrialGridSection = () => {
  const industrialImages = [
    // Mineral Water Factories Images
    {
      id: 1,
      src: '/mineral water factories/WhatsApp Image 2025-08-16 at 10.59.20 PM (2).jpeg',
      alt: 'Mineral Water Factory Operations',
      title: 'Mineral Water Factory'
    },
    {
      id: 2,
      src: '/mineral water factories/WhatsApp Image 2025-08-16 at 10.59.20 PM (1).jpeg',
      alt: 'Mineral Water Production Line',
      title: 'Water Production Facility'
    },
    {
      id: 3,
      src: '/mineral water factories/WhatsApp Image 2025-08-16 at 10.59.20 PM.jpeg',
      alt: 'Mineral Water Manufacturing',
      title: 'Water Manufacturing Plant'
    },
    // Tanks Factories Images
    // {
    //   id: 4,
    //   src: '/Tanks factories/WhatsApp Image 2025-08-16 at 10.59.59 PM.jpeg',
    //   alt: 'Tanks Factory Operations',
    //   title: 'Tanks Manufacturing'
    // },
    // {
    //   id: 5,
    //   src: '/Tanks factories/WhatsApp Image 2025-08-16 at 11.05.54 PM (2).jpeg',
    //   alt: 'Tanks Production Line',
    //   title: 'Tanks Production Facility'
    // },
    // {
    //   id: 6,
    //   src: '/Tanks factories/WhatsApp Image 2025-08-16 at 11.05.54 PM (1).jpeg',
    //   alt: 'Tanks Manufacturing Process',
    //   title: 'Tanks Manufacturing Process'
    // },
    {
      id: 7,
      src: '/Tanks factories/WhatsApp Image 2025-08-16 at 10.59.58 PM.jpeg',
      alt: 'Tanks Factory Equipment',
      title: 'Tanks Factory Equipment'
    },
    {
      id: 8,
      src: '/Tanks factories/WhatsApp Image 2025-08-16 at 10.59.57 PM.jpeg',
      alt: 'Tanks Production Operations',
      title: 'Tanks Production Operations'
    },
    // Real Estate Images
    {
      id: 9,
      src: '/real state/WhatsApp Image 2025-08-16 at 11.01.59 PM.jpeg',
      alt: 'Real Estate Development',
      title: 'Real Estate Projects'
    },
    {
      id: 10,
      src: '/real state/WhatsApp Image 2025-08-16 at 11.01.58 PM (1).jpeg',
      alt: 'Real Estate Construction',
      title: 'Real Estate Construction'
    },
    {
      id: 11,
      src: '/real state/WhatsApp Image 2025-08-16 at 11.01.58 PM.jpeg',
      alt: 'Real Estate Development Site',
      title: 'Real Estate Development Site'
    },
    // {
    //   id: 12,
    //   src: '/real state/WhatsApp Image 2025-08-16 at 11.01.57 PM (1).jpeg',
    //   alt: 'Real Estate Infrastructure',
    //   title: 'Real Estate Infrastructure'
    // },
    // {
    //   id: 13,
    //   src: '/real state/WhatsApp Image 2025-08-16 at 11.01.57 PM.jpeg',
    //   alt: 'Real Estate Project Management',
    //   title: 'Real Estate Project Management'
    // }
  ];

  return (
    <section className="bg-global-1 pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#666666] to-black bg-clip-text text-transparent">
            Our Industrial Operations
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            Showcasing our diverse industrial capabilities across manufacturing, production, and real estate development.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {industrialImages.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
            >
              <div className="relative">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 md:h-56 object-cover rounded-xl transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialGridSection;
