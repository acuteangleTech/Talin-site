import React from 'react';

const IndustrialGridSection = () => {
  const industrialImages = [
    {
      id: 1,
      src: '/images/img_workspace.png',
      alt: 'Industrial workspace and manufacturing facility',
      title: 'Industrial Processing Equipment'
    },
    {
      id: 2,
      src: '/images/img_frame_40.png',
      alt: 'Advanced manufacturing and production line',
      title: 'Injection Molding Technology'
    },
    {
      id: 3,
      src: '/images/img_frame_40_1.png',
      alt: 'Industrial storage and container solutions',
      title: 'Industrial Storage Solutions'
    },
    {
      id: 4,
      src: '/images/img_frame_40_354x288.png',
      alt: 'Advanced processing facility with modern equipment',
      title: 'Advanced Processing Facility'
    },
    {
      id: 5,
      src: '/images/img_frame_13_1.png',
      alt: 'Quality control and production monitoring',
      title: 'Quality Control Process'
    },
    {
      id: 6,
      src: '/images/img_rectangle_11.png',
      alt: 'Rotational molding and manufacturing equipment',
      title: 'Rotational Molding Equipment'
    },
    {
      id: 7,
      src: '/images/img_room.png',
      alt: 'Manufacturing operations and production floor',
      title: 'Manufacturing Operations'
    },
    {
      id: 8,
      src: '/images/img_room_306x520.png',
      alt: 'Construction material production and processing',
      title: 'Construction Material Production'
    },
    {
      id: 9,
      src: '/images/img_garden.png',
      alt: 'Infrastructure development and project management',
      title: 'Infrastructure Development'
    }
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
