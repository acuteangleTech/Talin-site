import React from 'react';

const SectorsSection = () => {
  const sectors = [
    {
      id: 1,
      icon: '🏭',
      title: 'Industrial Sector',
      description: 'Food manufacturing partnerships, recycling agreements (plastics, metals), raw material supply mediation, cosmetic and detergent manufacturing, joint production with global companies.',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      icon: '🌾',
      title: 'Agricultural Sector',
      description: 'Modern farming partnerships (crops, fruits, vegetables), seed, fertilizer, pesticide import/export agreements, agricultural product marketing mediation, smart farms / hydroponics projects.',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 3,
      icon: '🏥',
      title: 'Medical & Health Sector',
      description: 'Medical equipment supply agreements, specialized medical centers partnerships, digital health insurance mediation, medicines and medical supplies agreements.',
      color: 'from-red-600 to-red-800'
    },
    {
      id: 4,
      icon: '⚡',
      title: 'Energy & Utilities',
      description: 'Solar and wind power partnerships, fuel and gas supply agreements, industrial and urban utilities services mediation, maintenance of energy stations agreements.',
      color: 'from-yellow-600 to-yellow-800'
    },
    {
      id: 5,
      icon: '🚚',
      title: 'Transport & Logistics',
      description: 'Smart warehouses partnerships, shipping & freight agreements, taxi / smart transport mediation, port and container management solutions agreements.',
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 6,
      icon: '💻',
      title: 'Technology & Telecom',
      description: 'Data centers / cloud storage partnerships, mobile app development agreements, USSD and e-wallet mediation, AI and analytics solutions partnerships.',
      color: 'from-indigo-600 to-indigo-800'
    },
    {
      id: 7,
      icon: '🏗️',
      title: 'Construction & Real Estate',
      description: 'Housing and infrastructure projects partnerships, building materials supply agreements, real estate brokerage mediation, infrastructure projects agreements (roads, ports, warehouses).',
      color: 'from-orange-600 to-orange-800'
    },
    {
      id: 8,
      icon: '💰',
      title: 'Finance & Banking',
      description: 'Microfinance and SME funding partnerships, digital payment and wallet agreements, investment and insurance mediation, joint banking products agreements.',
      color: 'from-emerald-600 to-emerald-800'
    },
    {
      id: 9,
      icon: '🎓',
      title: 'Education & Training',
      description: 'Vocational and technical institutes partnerships, scholarship and training programs agreements, expert / trainer mediation, e-learning / distance education agreements.',
      color: 'from-teal-600 to-teal-800'
    },
    {
      id: 10,
      icon: '🏨',
      title: 'Tourism & Hospitality',
      description: 'Hotels and resorts partnerships, travel and tourism services agreements, event, conference, and exhibition mediation, international tourism promotion partnerships.',
      color: 'from-pink-600 to-pink-800'
    }
  ];

  return (
    <section className="bg-global-1 pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#666666] to-black bg-clip-text text-transparent">
            Our Business Sectors
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            Comprehensive partnerships and agreements across diverse industries, driving growth and innovation in Sudan's reconstruction and development.
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

export default SectorsSection;
