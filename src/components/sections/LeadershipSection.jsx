'use client';
import React from 'react';
import Image from 'next/image';

const LeadershipSection = () => {
  return (
    <section id="about" className="w-full bg-global-1 py-16 sm:py-20 md:py-24 lg:py-[106px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-16">
          {/* Leadership Image */}
          <div className="w-full lg:w-[44%] relative">
            <div className="relative bg-global-1 border border-[#ffffff0c] p-2 sm:p-3 md:p-4 lg:p-[10px] ">
              <div className=" mt-2 sm:mt-3 md:mt-4 lg:mt-[10px]">
                <Image 
                  src="/images/img_frame_13_1.png" 
                  alt="Dr. Asaad Eltoum"
                  width={504}
                  height={514}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          {/* Leadership Content */}
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px] justify-start items-start w-full lg:w-[48%]">
            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-manrope font-medium leading-[40px] sm:leading-[46px] md:leading-[50px] lg:leading-[55px] text-left bg-gradient-to-r from-white to-[#ffffff4c] bg-clip-text text-transparent w-full lg:w-[78%]">
              Visionary Leadership Behind Our Journey
            </h2>
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[26px] text-left text-global-7 w-full lg:w-[88%]">
              <span className="font-bold text-global-6">Dr. Asaad Eltoum</span>
              <span className="font-bold text-global-7">,</span>
              <span className="font-normal"> Founder & President, is a visionary leader in business development with expertise in building strategic partnerships between the public and private sectors. With a strong background in project management and investment, he has successfully established diverse companies across real estate, manufacturing, cosmetics, and perfumery. Guided by his commitment to innovation, quality, and sustainable economic growth, Dr. Eltoum continues to drive impactful ventures that shape industries and create lasting value.</span>
            </p>
          </div>
        </div>
        {/* Leadership Name */}
        <div className="flex flex-col justify-start items-start w-full max-w-[848px] mx-auto mt-8 sm:mt-10 md:mt-12 lg:mt-16 mb-1 sm:mb-2 md:mb-3 lg:mb-[6px]">
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] font-manrope font-light leading-[28px] sm:leading-[30px] md:leading-[32px] lg:leading-[33px] text-left text-global-6">
            Dr. Asaad Eltoum
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[21px] md:leading-[22px] lg:leading-[22px] text-center text-global-7 ml-4 sm:ml-5 md:ml-6 lg:ml-[18px]">
            Founder & President
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
