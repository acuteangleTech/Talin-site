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
    //   src: '/Tanks factories/WhatsApp Image 2025-08-16 at 10.59.58 PM (2).jpeg',
    //   alt: 'Tanks Production Line',
    //   title: 'Tanks Production Facility'
    // },
    // {
    //   id: 6,
    //   src: '/Tanks factories/WhatsApp Image 2025-08-16 at 10.59.58 PM (1).jpeg',
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {industrialImages.map((image) => (
            <div 
              key={image.id} 
              className="  "
            >
              <div className="">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded "
                 
                />
              </div>
              
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialGridSection;
