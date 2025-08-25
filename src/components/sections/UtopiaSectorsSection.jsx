import React from 'react';

const UtopiaSectorsSection = () => {
  const sectors = [
    {
      id: 1,
      icon: '🏭',
      title: 'Factory Ownership',
      description: 'Acquire or lease industrial land, establish new factories (food, chemical, plastics, pharmaceuticals), acquire and upgrade existing factories.',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 2,
      icon: '⚙️',
      title: 'Factory Management & Operation',
      description: 'Daily factory operations management, run production lines with quality & safety standards, machinery and equipment maintenance.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Production & Manufacturing',
      description: 'Produce food, beverages, and cosmetics, manufacture chemicals and industrial materials, produce plastic and metal packaging, develop new products & improve quality.',
      color: 'from-green-500 to-green-700'
    },
    {
      id: 4,
      icon: '🔬',
      title: 'Research & Development (R&D)',
      description: 'Innovate products and modern production techniques, test & analyze products for quality, optimize production efficiency and reduce costs.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 5,
      icon: '📢',
      title: 'Marketing & Sales',
      description: 'Local and international product marketing, client and distributor management, retail, distributor, and e-commerce sales.',
      color: 'from-pink-500 to-pink-700'
    },
    {
      id: 6,
      icon: '🚚',
      title: 'Distribution & Logistics',
      description: 'Warehouse and inventory management, organize local and international shipping, develop an efficient distribution network.',
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 7,
      icon: '🤝',
      title: 'Partnerships & Collaboration',
      description: 'Collaborate with suppliers and distributors, partner with tech companies to upgrade production lines, agreements with government for permits and industrial support.',
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  return (
    <section className="bg-global-1 pt-20  px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
            Our Business Sectors
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            Comprehensive factory and manufacturing solutions, from ownership to distribution, ensuring quality and innovation in every aspect of industrial operations.
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
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

export default UtopiaSectorsSection;
