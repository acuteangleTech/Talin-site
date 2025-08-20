import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: '⚡',
      title: 'Infrastructure Development',
      description: 'We deliver innovative infrastructure that drives growth, sustainability, and lasting value.'
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Industrial Manufacturing Partnerships',
      description: 'We provide advanced machinery and solutions to boost industrial efficiency.'
    },
    {
      id: 3,
      icon: '💧',
      title: 'Strategic Commodity Supply',
      description: 'We deliver reliable, sustainable commodities for industries worldwide.'
    },
    {
      id: 4,
      icon: '💡',
      title: 'International Trade and Logistics',
      description: 'We connect businesses globally with seamless trade and efficient logistics.'
    }
  ];

  return (
    <section className="bg-global-1 pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#666666] to-black bg-clip-text text-transparent">
            Our Services
          </h2>
        </div>

        {/* Services Grid - 2x2 layout as shown in image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-800 rounded-lg p-8 transition-all duration-300"
            >
              {/* Icon with circular blue outline */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <div className="text-2xl text-global-2">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
