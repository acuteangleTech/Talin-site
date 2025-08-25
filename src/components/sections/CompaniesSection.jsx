'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CompaniesSection = () => {
  const router = useRouter();
  
  const companies = [
    {
      name: "Talin International",
      image: "/images/img_f48408c8_d809_4e45_8_jpg_webp.png",
      icon: "/images/img_component_2_black_900_02.svg",
      route: "/talin-international",
      description: "أكيد، هذه نسخة مختصرة جدًا باللغة الإنجليزية على شكل نقاط لكل قطاع"
    },
    {
      name: "Utopia Global General Trading",
      image: "/images/img_f48408c8_d809_4e45_8_jpg_webp_150x104.png",
      icon: "/images/img_component_2_black_900_02.svg",
      route: "/utopia-global",
      description: "أكيد، هذه نسخة مختصرة جدًا باللغة الإنجليزية للنقاط السابقة"
    },
    {
      name: "Hollywood Cosmetics",
      image: "/images/img_f48408c8_d809_4e45_8_jpg_webp_1.png",
      icon: "/images/img_component_2_blue_gray_900.svg",
      route: "/hollywood-cosmetics",
      description: "كيد، هذه نسخة مختصرة جدًا للنقاط السبعة باللغة الإنجليزية"
    },
    {
      name: "Talin Properties",
      image: "/images/img_f48408c8_d809_4e45_8_jpg_webp_2.png",
      icon: "/images/img_component_2_blue_gray_900.svg",
      route: "/talin-properties",
      description: "أكيد، هذه نسخة مختصرة جدًا باللغة الإنجليزية للنقاط السبعة"
    }
  ];

  const handleCompanyClick = (route) => {
    router.push(route);
  };

  return (
    <section id="companies" className="w-full bg-global-6 section-padding">
      <div className="container-standard">
        <div className="flex flex-col gap-12 sm:gap-14 md:gap-16 lg:gap-[70px] justify-start items-center w-full">
          {/* Companies Header */}
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[36px] justify-start items-start w-full text-container-sm">
            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-manrope font-medium leading-[44px] sm:leading-[52px] md:leading-[58px] lg:leading-[66px] text-left bg-gradient-to-r from-black to-[#666666] bg-clip-text text-transparent">
              Our Companies
            </h2>
            <div className="w-full text-balanced">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-justify text-global-3 w-full">
                Discover our diverse portfolio of companies, each specializing in different sectors and delivering excellence in their respective fields.
              </p>
            </div>
          </div>
          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-[32px] w-full lg:w-[86%]">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="flex flex-row justify-start items-center w-full bg-global-7 border border-gray-200 rounded-sm p-2 sm:p-3 md:p-4 lg:p-[12px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-global-2"
                onClick={() => handleCompanyClick(company.route)}
              >
                <div className="flex flex-col gap-16 sm:gap-18 md:gap-20 lg:gap-[106px] justify-start items-start w-full">
                  <div>
                    <h3 className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[18px] font-manrope font-semibold leading-[22px] sm:leading-[23px] md:leading-[24px] lg:leading-[25px] text-left text-global-1 mb-2 sm:mb-3 md:mb-4 lg:mb-[12px] hover:text-global-2 transition-colors duration-300">
                      {company.name}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] font-manrope font-normal leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] text-left text-global-2">
                      {company.description}
                    </p>
                  </div>
                  <Image 
                    src={company.icon} 
                    alt={`${company.name} Icon`}
                    width={60}
                    height={62}
                    className="w-[50px] h-[52px] sm:w-[55px] sm:h-[57px] md:w-[58px] md:h-[60px] lg:w-[60px] lg:h-[62px]"
                  />
                </div>
                <div className="flex flex-col justify-start items-center w-full sm:w-2/3 md:w-1/2 lg:w-[36%] bg-global-6 border border-gray-100 rounded-sm p-6 sm:p-7 md:p-8 lg:p-[28px] mr-1 sm:mr-2 md:mr-3 lg:mr-[4px]">
                  <Image 
                    src={company.image} 
                    alt={company.name}
                    width={104}
                    height={150}
                    className="w-[80px] h-[115px] sm:w-[90px] sm:h-[130px] md:w-[95px] md:h-[140px] lg:w-[104px] lg:h-[150px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
