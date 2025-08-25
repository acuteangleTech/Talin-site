import React from 'react';

const CosmeticsGridSection = () => {
  const cosmeticsImages = [
    {
      id: 1,
      src: '/cosmetics hollywood/WhatsApp Image 2025-08-16 at 6.54.17 PM.jpeg',
      alt: 'Hollywood Cosmetics Products',
      title: 'Cosmetics Manufacturing'
    },
    {
      id: 2,
      src: '/cosmetics hollywood/WhatsApp Image 2025-08-16 at 6.54.15 PM.jpeg',
      alt: 'Hollywood Cosmetics Production',
      title: 'Cosmetics Production Line'
    },
    {
      id: 3,
      src: '/cosmetics hollywood/WhatsApp Image 2025-08-16 at 6.54.16 PM.jpeg',
      alt: 'Hollywood Cosmetics Operations',
      title: 'Cosmetics Operations'
    },
    {
      id: 4,
      src: '/profile factory/WhatsApp Image 2025-08-16 at 11.43.06 PM (2).jpeg',
      alt: 'Profile Factory Operations',
      title: 'Profile Factory'
    },
    {
      id: 5,
      src: '/profile factory/WhatsApp Image 2025-08-16 at 11.43.06 PM (1).jpeg',
      alt: 'Profile Factory Production',
      title: 'Profile Factory Production'
    },
    {
      id: 6,
      src: '/profile factory/WhatsApp Image 2025-08-16 at 11.43.06 PM.jpeg',
      alt: 'Profile Factory Manufacturing',
      title: 'Profile Factory Manufacturing'
    },
    {
      id: 7,
      src: '/profile factory/WhatsApp Image 2025-08-16 at 10.58.54 PM.jpeg',
      alt: 'Profile Factory Operations',
      title: 'Profile Factory Operations'
    },
    {
      id: 8,
      src: '/profile factory/WhatsApp Image 2025-08-16 at 10.58.53 PM (1).jpeg',
      alt: 'Profile Factory Production Line',
      title: 'Profile Factory Production Line'
    },
    {
      id: 9,
      src: '/profile factory/WhatsApp Image 2025-08-16 at 10.58.53 PM.jpeg',
      alt: 'Profile Factory Manufacturing',
      title: 'Profile Factory Manufacturing'
    }
  ];

  return (
    <section className="bg-global-1 pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
            Our Cosmetics Operations
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            Showcasing our diverse cosmetics manufacturing capabilities, production facilities, and quality control processes.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cosmeticsImages.map((image, index) => (
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

export default CosmeticsGridSection;
