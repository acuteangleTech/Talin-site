'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const FactoriesSection = () => {
  const factories = [
    {
      name: "Dancon (beverages)",
      description: "For manufacturing and bottling essential food products to meet local and regional market demands.",
      image: "/images/img_room.png",
      year: "2025"
    },
    {
      name: "Recycle Factory (plastic recycling)",
      description: "Focused on plastic recycling, supporting sustainability and environmental protection.",
      image: "/images/img_garden.png",
      year: "2024"
    },
    {
      name: "Relax Factory (paper products, hygiene)",
      description: "Produces paper tissues, baby diapers, and feminine hygiene products according to strict health standards.",
      image: "/images/img_room_306x520.png",
      year: "2025"
    },
    {
      name: "Tancka (water tanks)",
      description: "Specialized in manufacturing water tanks, ensuring high-quality water storage solutions.",
      image: "/images/img_bathroom.png",
      year: "2022"
    },
    {
      name: "Ozone Factory",
      description: "Specialized in bottling mineral water, juices, and vinegar with the highest quality standards.",
      image: "/images/img_room.png",
      year: "2025"
    },
    {
      name: "Profile",
      description: "for manufacturing perfumes and cosmetics according to the highest international quality standard",
      image: "/images/img_garden_240x408.png",
      year: "2024"
    }
  ];

  return (
    <section className="w-full bg-global-6 py-12 sm:py-14 md:py-16 lg:py-[70px] px-8 sm:px-10 md:px-12 lg:px-[56px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[36px] justify-start items-center w-full">
          {/* Factories Header */}
          <div className="relative w-full max-w-[1242px] mx-auto px-6 sm:px-8 md:px-10 lg:px-[34px]">
            <div className="flex flex-col lg:flex-row justify-start items-start w-full gap-6 lg:gap-0">
              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-manrope font-medium leading-[44px] sm:leading-[52px] md:leading-[58px] lg:leading-[66px] text-left bg-gradient-to-r from-black to-[#666666] bg-clip-text text-transparent mb-6 lg:mb-[68px] w-full lg:w-auto">
                Our Factories
              </h2>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left text-global-3 w-full lg:w-[50%] lg:ml-16">
                Talin Global Group for Advanced Projects operates diverse factories across Sudan, including Khartoum, Madani, Kassala, and Port Sudan. Its industries span bottled water, juices, vinegar, ice cream, packaged foods, paper products, diapers, plastic recycling, and cosmetics. Committed to international quality standards, Talin focuses on sustainability, innovation, and efficiency—empowering local industries and strengthening Sudan's economy.
              </p>
            </div>
            {/* Background Text */}
            <div className="hidden lg:block absolute top-[432px] right-0 w-full pr-[78px]">
              <h3 className="text-[167px] font-inter font-medium leading-[203px] text-right text-[#e6e6e6]">
                Our Factories
              </h3>
            </div>
          </div>
          {/* Factories Grid */}
          <div className="relative z-10 w-full mb-6 sm:mb-7 md:mb-8 lg:mb-[28px] mt-6 sm:mt-7 md:mt-8 lg:mt-[36px]">
            <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[36px] justify-start items-center w-full">
              {/* Mobile Grid Layout */}
              <div className="block lg:hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {factories.map((factory, index) => (
                    <div key={index} className="flex flex-col gap-3 sm:gap-4 justify-center items-center w-full shadow-[5px_10px_60px_#00000014] bg-global-7 p-3">
                      <div className="relative w-full bg-global-7">
                        <Image 
                          src={factory.image} 
                          alt={factory.name}
                          width={630}
                          height={370}
                          className="w-full h-auto"
                        />
                        <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white"></div>
                      </div>
                      <div className="flex flex-row justify-center items-start w-full px-3">
                        <div className="flex flex-col gap-2 justify-start items-start self-center w-full">
                          <h3 className="text-[18px] sm:text-[20px] font-manrope font-medium leading-[26px] sm:leading-[28px] text-left text-global-1">
                            {factory.name}
                          </h3>
                          <p className="text-[14px] sm:text-[15px] font-manrope font-normal leading-[20px] sm:leading-[22px] text-left text-global-2 w-full">
                            {factory.description}
                          </p>
                        </div>
                        <Button 
                          variant="secondary"
                          size="xs"
                          className="bg-button-1 text-global-2 rounded-[14px] px-2 py-1 mt-3"
                          onClick={() => {}}
                        >
                          <span className="text-[12px] font-manrope font-normal leading-[16px] text-left text-global-2">
                            {factory.year}
                          </span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:flex flex-col lg:flex-row justify-start items-start w-full gap-6 lg:gap-8">
                <div className="flex flex-col gap-32 sm:gap-36 md:gap-40 lg:gap-[226px] justify-start items-start w-full">
                  {/* Dancon Factory */}
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[14px] justify-center items-center w-full shadow-[5px_10px_60px_#00000014] bg-global-7 p-2 sm:p-3 md:p-4 lg:p-[10px] mr-1 sm:mr-2 md:mr-3 lg:mr-[4px]">
                    <div className="relative w-full bg-global-7">
                      <Image 
                        src={factories[0].image} 
                        alt={factories[0].name}
                        width={630}
                        height={370}
                        className="w-full h-auto"
                      />
                      <div className="absolute top-4 sm:top-5 md:top-6 lg:top-[20px] right-4 sm:right-5 md:right-6 lg:right-[20px] w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px] lg:w-[12px] lg:h-[12px] border-t border-r border-white"></div>
                    </div>
                    <div className="flex flex-row justify-center items-start w-full px-2 sm:px-3 md:px-4 lg:px-[12px]">
                      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] justify-start items-start self-center w-full">
                        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-manrope font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] text-left text-global-1">
                          {factories[0].name}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left text-global-2 w-full lg:w-[96%]">
                          {factories[0].description}
                        </p>
                      </div>
                      <Button 
                        variant="secondary"
                        size="xs"
                        className="bg-button-1 text-global-2 rounded-[14px] px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-[6px] lg:py-[6px] mt-2 sm:mt-3 md:mt-4 lg:mt-[12px]"
                        onClick={() => {}}
                      >
                        <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] font-manrope font-normal leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] text-left text-global-2">
                          {factories[0].year}
                        </span>
                      </Button>
                    </div>
                  </div>
                  {/* Relax Factory */}
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] justify-start items-center w-full lg:w-[82%] shadow-[5px_10px_60px_#00000014] bg-global-7 p-2 sm:p-3 md:p-4 lg:p-[10px]">
                    <div className="relative w-full bg-global-7">
                      <Image 
                        src={factories[2].image} 
                        alt={factories[2].name}
                        width={520}
                        height={306}
                        className="w-full h-auto"
                      />
                      <div className="absolute top-4 sm:top-5 md:top-6 lg:top-[20px] right-4 sm:right-5 md:right-6 lg:right-[20px] w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px] lg:w-[12px] lg:h-[12px] border-t border-r border-white"></div>
                    </div>
                    <div className="flex flex-row justify-center items-start w-full px-2 sm:px-3 md:px-4 lg:px-[12px] mb-1 sm:mb-2 md:mb-3 lg:mb-[4px]">
                      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] justify-start items-start self-center w-full">
                        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-manrope font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] text-left text-global-1">
                          {factories[2].name}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left text-global-2 w-full">
                          {factories[2].description}
                        </p>
                      </div>
                      <Button 
                        variant="secondary"
                        size="xs"
                        className="bg-button-1 text-global-2 rounded-[14px] px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-[6px] lg:py-[6px] mt-2 sm:mt-3 md:mt-4 lg:mt-[12px]"
                        onClick={() => {}}
                      >
                        <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] font-manrope font-normal leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] text-left text-global-2">
                          {factories[2].year}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Right Column */}
                <div className="flex flex-col gap-32 sm:gap-36 md:gap-40 lg:gap-[232px] justify-start items-end self-center w-full py-6 sm:py-7 md:py-8 lg:py-[30px]">
                  {/* Recycle Factory */}
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[14px] justify-start items-center w-full sm:w-4/5 md:w-3/4 lg:w-[66%] shadow-[5px_10px_60px_#00000014] bg-global-7 p-2 sm:p-3 md:p-4 lg:p-[10px] mt-48 sm:mt-52 md:mt-56 lg:mt-[268px]">
                    <div className="relative w-full bg-global-7">
                      <Image 
                        src={factories[1].image} 
                        alt={factories[1].name}
                        width={408}
                        height={240}
                        className="w-full h-auto"
                      />
                      <div className="absolute top-4 sm:top-5 md:top-6 lg:top-[20px] right-4 sm:right-5 md:right-6 lg:right-[20px] w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px] lg:w-[12px] lg:h-[12px] border-t border-r border-white"></div>
                    </div>
                    <div className="flex flex-row justify-center items-start w-full px-2 sm:px-3 md:px-4 lg:px-[12px]">
                      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] justify-start items-center self-center w-full">
                        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-manrope font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] text-left text-global-1">
                          {factories[1].name}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left text-global-2 w-full">
                          {factories[1].description}
                        </p>
                      </div>
                      <Button 
                        variant="secondary"
                        size="xs"
                        className="bg-button-1 text-global-2 rounded-[14px] px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-[6px] lg:py-[6px] mt-4 sm:mt-5 md:mt-6 lg:mt-[24px] -ml-1 sm:-ml-1.5 md:-ml-2 lg:-ml-[4px]"
                        onClick={() => {}}
                      >
                        <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] font-inter font-normal leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[16px] text-left text-global-2">
                          {factories[1].year}
                        </span>
                      </Button>
                    </div>
                  </div>
                  {/* Tancka Factory */}
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[14px] justify-center items-center w-full shadow-[5px_10px_60px_#00000014] bg-global-7 p-1 sm:p-2 md:p-3 lg:p-[6px] ml-1 sm:ml-2 md:ml-3 lg:ml-[4px]">
                    <div className="relative w-full bg-global-7">
                      <Image 
                        src={factories[3].image} 
                        alt={factories[3].name}
                        width={630}
                        height={370}
                        className="w-full h-auto"
                      />
                      <div className="absolute top-4 sm:top-5 md:top-6 lg:top-[20px] right-4 sm:right-5 md:right-6 lg:right-[20px] w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px] lg:w-[12px] lg:h-[12px] border-t border-r border-white"></div>
                    </div>
                    <div className="flex flex-row justify-center items-start w-full px-2 sm:px-3 md:px-4 lg:px-[12px]">
                      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] justify-start items-start self-center w-full">
                        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-manrope font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] text-left text-global-1">
                          {factories[3].name}
                        </h3>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left text-global-2 w-full lg:w-[96%]">
                          {factories[3].description}
                        </p>
                      </div>
                      <Button 
                        variant="secondary"
                        size="xs"
                        className="bg-button-1 text-global-2 rounded-[14px] px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-[6px] lg:py-[6px] mt-2 sm:mt-3 md:mt-4 lg:mt-[12px]"
                        onClick={() => {}}
                      >
                        <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] font-manrope font-normal leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] text-left text-global-2">
                          {factories[3].year}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second Row */}
              <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 lg:gap-8">
                {/* Ozone Factory */}
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[14px] justify-start items-center w-full lg:w-[50%] shadow-[5px_10px_60px_#00000014] bg-global-7 p-2 sm:p-3 md:p-4 lg:p-[10px] mb-32 sm:mb-36 md:mb-40 lg:mb-[190px]">
                  <div className="relative w-full bg-global-7">
                    <Image 
                      src={factories[4].image} 
                      alt={factories[4].name}
                      width={630}
                      height={370}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 sm:top-5 md:top-6 lg:top-[20px] right-4 sm:right-5 md:right-6 lg:right-[20px] w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px] lg:w-[12px] lg:h-[12px] border-t border-r border-white"></div>
                  </div>
                  <div className="flex flex-row justify-center items-start w-full px-2 sm:px-3 md:px-4 lg:px-[12px]">
                    <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] justify-start items-start self-center w-full">
                      <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-manrope font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] text-left text-global-1">
                        {factories[4].name}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left text-global-2 w-full lg:w-[96%]">
                        {factories[4].description}
                      </p>
                    </div>
                    <Button 
                      variant="secondary"
                      size="xs"
                      className="bg-button-1 text-global-2 rounded-[14px] px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-[6px] lg:py-[6px] mt-2 sm:mt-3 md:mt-4 lg:mt-[12px]"
                      onClick={() => {}}
                    >
                      <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] font-manrope font-normal leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[18px] text-left text-global-2">
                        {factories[4].year}
                      </span>
                    </Button>
                  </div>
                </div>
                {/* Profile Factory */}
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[14px] justify-center items-center self-end w-full sm:w-2/3 md:w-1/2 lg:w-[32%] shadow-[5px_10px_60px_#00000014] bg-global-7 p-2 sm:p-3 md:p-4 lg:p-[8px]">
                  <div className="relative w-full bg-global-7">
                    <Image 
                      src={factories[5].image} 
                      alt={factories[5].name}
                      width={408}
                      height={240}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 sm:top-5 md:top-6 lg:top-[20px] right-4 sm:right-5 md:right-6 lg:right-[20px] w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] md:w-[12px] md:h-[12px] lg:w-[12px] lg:h-[12px] border-t border-r border-white"></div>
                  </div>
                  <div className="flex flex-row justify-center items-start w-full px-2 sm:px-3 md:px-4 lg:px-[12px]">
                    <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] justify-start items-start self-center w-full">
                      <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] font-manrope font-medium leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[31px] text-left text-global-1">
                        {factories[5].name}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left text-global-2 w-full lg:w-[98%]">
                        {factories[5].description}
                      </p>
                    </div>
                    <Button 
                      variant="secondary"
                      size="xs"
                      className="bg-button-1 text-global-2 rounded-[14px] px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 lg:px-[6px] lg:py-[6px] mt-4 sm:mt-5 md:mt-6 lg:mt-[24px]"
                      onClick={() => {}}
                    >
                      <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[13px] font-inter font-normal leading-[14px] sm:leading-[15px] md:leading-[16px] lg:leading-[16px] text-left text-global-2">
                        {factories[5].year}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoriesSection;
