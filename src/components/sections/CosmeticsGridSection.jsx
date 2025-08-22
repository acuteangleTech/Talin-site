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
    <section className="bg-global-1 pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          {cosmeticsImages.map((image) => (
            <div 
              key={image.id} 
              className=""
            >
              <div className="">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CosmeticsGridSection;
