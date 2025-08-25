import React from 'react';

const CosmeticsSectorsSection = () => {
  const sectors = [
    {
      id: 1,
      icon: '🏭',
      title: 'Production & Manufacturing',
      description: 'Skin care products (creams, moisturizers, face washes), hair care products (shampoos, conditioners, masks), body care products (lotions, oils, shower gels), color cosmetics (makeup, lipsticks, foundations).',
      color: 'from-pink-500 to-pink-700'
    },
    {
      id: 2,
      icon: '🔬',
      title: 'Research & Development (R&D)',
      description: 'Develop new natural/organic products, improve existing products and formulas, product testing per local & international standards.',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 3,
      icon: '📦',
      title: 'Packaging',
      description: 'Attractive and modern packaging design, eco-friendly and recyclable packaging, multiple product sizes.',
      color: 'from-green-500 to-green-700'
    },
    {
      id: 4,
      icon: '📢',
      title: 'Marketing & Sales',
      description: 'Local and international product marketing, retail, pharmacy, and online sales, influencer and social media promotion.',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 5,
      icon: '🚚',
      title: 'Distribution & Logistics',
      description: 'Product distribution to stores and pharmacies, local and regional distribution network, inventory and shipping management.',
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 6,
      icon: '💡',
      title: 'Consultancy & Training',
      description: 'Customer skincare and haircare advice, sales and marketing team training, beauty workshops and courses.',
      color: 'from-teal-500 to-teal-700'
    },
    {
      id: 7,
      icon: '🤝',
      title: 'Partnerships & Collaboration',
      description: 'Salons and spa collaborations, local and international distributor partnerships, agreements with cosmetic equipment suppliers.',
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  return (
    <section className="bg-global-1 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
            Our Business Sectors
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            Comprehensive cosmetics and beauty industry solutions, from production to distribution, ensuring quality and innovation in every aspect of our business.
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
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

export default CosmeticsSectorsSection;
