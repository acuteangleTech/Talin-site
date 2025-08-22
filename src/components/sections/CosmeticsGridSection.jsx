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
