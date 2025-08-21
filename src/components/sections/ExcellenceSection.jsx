'use client';
import React from 'react';
import Image from 'next/image';

const ExcellenceSection = () => {
  const statistics = [
    {
      number: "8",
      title: "Years experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli"
    },
    {
      number: "50+",
      title: "Projects completed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli"
    },
    {
      number: "97%",
      title: "Client satisfaction",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli"
    }
  ];

  return (
    <section className="w-full bg-global-1 py-8 sm:py-10 md:py-12 lg:py-[50px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-[100px] justify-start items-center w-full">
          {/* Excellence Header */}
          <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-8 lg:gap-16">
            <div className="w-full lg:w-[40%]">
              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-manrope font-medium leading-[40px] sm:leading-[46px] md:leading-[50px] lg:leading-[55px] text-left bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent">
                Talin Global Group: Excellence Without Borders
              </h2>
            </div>
            <div className="w-full lg:w-[60%]">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left text-global-7">
                Talin Global Group operates across multiple sectors to serve local, regional, and international markets. We specialize in supplying factories, machinery, and equipment for high-efficiency operations; producing cosmetics and perfumes for Gulf and local markets; developing real estate projects with innovative construction solutions; and operating integrated factories producing beverages, food products, and consumer goods.
              </p>
            </div>
          </div>
          {/* Image Gallery */}
          <div className="w-full overflow-x-auto">
            <div className="flex flex-row gap-4 md:gap-6 lg:gap-8 justify-start lg:justify-center items-end w-max lg:w-full lg:max-w-7xl mx-auto px-4 lg:px-0">
              {/* First Image - Real Estate */}
              <div className="flex flex-col justify-end items-center w-[160px] sm:w-[180px] md:w-[250px] lg:w-[300px] flex-shrink-0">
                <Image 
                  src="/images/img_bwp8cyttc1lingptk7lqja0_png.png" 
                  alt="Real Estate Project"
                  width={300}
                  height={400}
                  className="w-full h-[200px] sm:h-[240px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                />
              </div>
              
              {/* Second Image - Cosmetics */}
              <div className="flex flex-col justify-end items-center w-[160px] sm:w-[180px] md:w-[250px] lg:w-[300px] flex-shrink-0">
                <Image 
                  src="/images/img_rbmrrhit87wxdx7.png" 
                  alt="Cosmetics Products"
                  width={300}
                  height={400}
                  className="w-full h-[200px] sm:h-[240px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                />
              </div>
              
              {/* Third Image - Manufacturing */}
              <div className="flex flex-col justify-end items-center w-[160px] sm:w-[180px] md:w-[250px] lg:w-[300px] flex-shrink-0">
                <Image 
                  src="/images/img_twbl1rd5h93nv4u.png" 
                  alt="Manufacturing Facilities"
                  width={300}
                  height={400}
                  className="w-full h-[200px] sm:h-[240px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                />
              </div>
              
              {/* Fourth Image - Industrial */}
              <div className="flex flex-col justify-end items-center w-[160px] sm:w-[180px] md:w-[250px] lg:w-[300px] flex-shrink-0">
                <Image 
                  src="/images/img_a7ye2pbsrf4l2eg.png" 
                  alt="Industrial Operations"
                  width={300}
                  height={400}
                  className="w-full h-[200px] sm:h-[240px] md:h-[350px] lg:h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Statistics */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[118px] w-full justify-center items-start">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col justify-start items-start w-full sm:w-[230px] gap-2 lg:gap-3">
                <h3 className="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-manrope font-normal leading-[45px] sm:leading-[55px] md:leading-[60px] lg:leading-[70px] text-center text-global-6">
                  {stat.number}
                </h3>
                <div className="flex flex-col gap-1 lg:gap-[2px] justify-start items-start w-full">
                  <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-manrope font-semibold leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left text-global-6">
                    {stat.title}
                  </h4>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] text-left text-global-7 w-full">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
