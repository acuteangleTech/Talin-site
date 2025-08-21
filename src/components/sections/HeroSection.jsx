'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const HeroSection = () => {
  return (
    <section className="w-full bg-global-3 relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-80"></div>
      <div className="container-standard relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-16">
          {/* Hero Content */}
          <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[48px] justify-start items-start w-full lg:w-[55%]">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[32px] justify-start items-start w-full">
              <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-2 justify-start items-start w-full lg:leading-tight">
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-manrope font-medium leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] text-left bg-gradient-to-r from-white to-[#ffffff4c] bg-clip-text text-transparent">
                  Building Sustainable
                </h1>
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-manrope font-medium leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] text-left bg-gradient-to-r from-white to-[#ffffff4c] bg-clip-text text-transparent">
                  Partnerships. Delivering
                </h1>
                <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-manrope font-medium leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[70px] text-left bg-gradient-to-r from-white to-[#ffffff4c] bg-clip-text text-transparent">
                  Global Excellence.
                </h1>
              </div>
              <div className="w-full lg:w-[75%] text-container-sm">
                <div className="w-full text-balanced">
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] font-manrope font-normal leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[22px] text-justify text-global-7">
                    Excellence is our commitment—through unity and innovation, we empower businesses and shape a brighter future.
                  </p>
                </div>
              </div>
            </div>
            <Button 
              variant="secondary"
              size="md"
              className="border-2 border-[#ffffff26] shadow-[0px_0px_1px_#ffffff0c] px-4 sm:px-5 lg:px-[16px] py-2 sm:py-3 lg:py-[12px]"
              onClick={() => {}}
            >
              <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[14px] font-manrope font-medium leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[20px] text-left text-global-1">
                Explore More
              </span>
            </Button>
          </div>
          {/* Corporate Excellence Card */}
          <div className="flex flex-row justify-center items-center w-full lg:w-[320px] bg-[#3f7dce56] border border-[#ffffff26] rounded-sm p-3 sm:p-4 md:p-5 lg:p-[8px] mt-8 lg:mt-16 lg:self-end lg:h-[140px]">
            <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[16px] justify-start items-start w-full">
              <div className="flex flex-row justify-start items-center w-full">
                <h3 className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[12px] font-manrope font-bold leading-[16px] sm:leading-[17px] md:leading-[18px] lg:leading-[16px] text-left text-global-6">
                  Corporate Excellence & Unity
                </h3>
              </div>
              <div className="flex flex-row justify-between items-end w-full">
                <Image 
                  src="/images/img_component_2.svg" 
                  alt="Corporate Excellence"
                  width={24}
                  height={24}
                  className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[24px] lg:h-[24px]"
                />
                <Image 
                  src="/images/img_rectangle_11.png" 
                  alt="Excellence Visual"
                  width={100}
                  height={100}
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
