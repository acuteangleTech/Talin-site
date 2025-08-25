import React from 'react';

const PropertiesSectorsSection = () => {
  const sectors = [
    {
      id: 1,
      icon: '🏗️',
      title: 'Real Estate Development',
      description: 'Land acquisition & residential/commercial projects, luxury housing & residential complexes, commercial centers & modern markets, renovation of old buildings.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      icon: '🔨',
      title: 'Construction',
      description: 'Modern construction techniques (lightweight bricks, precast, modular), infrastructure projects (roads, utilities), fast & eco-friendly building (green building), project maintenance & operation.',
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 3,
      icon: '📐',
      title: 'Architectural & Engineering Design',
      description: 'Interior & exterior design services, BIM & CAD architectural planning, urban planning for large projects.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 4,
      icon: '📊',
      title: 'Project & Property Management',
      description: 'Full project management from planning to delivery, property management & leasing, asset evaluation & investment consulting.',
      color: 'from-green-500 to-green-700'
    },
    {
      id: 5,
      icon: '🚀',
      title: 'Construction Technology & Innovation',
      description: 'Smart building solutions, sustainable energy integration (solar, energy efficiency), 3D printing in construction, AI for quality monitoring & design.',
      color: 'from-indigo-500 to-indigo-700'
    },
    {
      id: 6,
      icon: '📢',
      title: 'Marketing & Sales',
      description: 'Local & international property marketing, digital platforms & social media sales, client & investor relations management.',
      color: 'from-pink-500 to-pink-700'
    },
    {
      id: 7,
      icon: '🤝',
      title: 'Partnerships & Collaboration',
      description: 'Partnerships with contractors & suppliers, collaboration with banks & financial institutions, agreements with government entities for project permits.',
      color: 'from-teal-500 to-teal-700'
    }
  ];

  return (
    <section className="bg-global-1 pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
            Our Business Sectors
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            Comprehensive real estate and construction solutions, from development to innovation, ensuring quality and sustainability in every project we undertake.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={sector.id}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-black/20 animate-fadeInUp animate-stagger-${index + 1}`}
            >
              {/* Icon with gradient background */}
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${sector.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl text-white">
                    {sector.icon}
                  </span>
                </div>
              </div>

              {/* Sector Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {sector.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-gray-200 transition-colors duration-300">
                  {sector.description}
                </p>
              </div>

              {/* Hover effect indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-full h-1 bg-gradient-to-r ${sector.color} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSectorsSection;
