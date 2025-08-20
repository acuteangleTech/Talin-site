'use client';
import React from 'react';
import Image from 'next/image';

const MessageSection = () => {
  return (
    <section className="w-full bg-global-6 py-16 sm:py-20 md:py-24 lg:py-[108px] px-8 sm:px-10 md:px-12 lg:px-[56px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-[98px] justify-center items-center w-full">
          {/* Message Header */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[24px] justify-start items-center w-full sm:w-4/5 md:w-3/5 lg:w-[40%]">
            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-manrope font-medium leading-[44px] sm:leading-[52px] md:leading-[58px] lg:leading-[66px] text-center bg-gradient-to-r from-black to-[#666666] bg-clip-text text-transparent mt-2 sm:mt-3 md:mt-4 lg:mt-[8px]">
              Our Message
            </h2>
            <div className="flex flex-col justify-center items-center w-full ml-3 sm:ml-4 md:ml-5 lg:ml-[12px]">
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-manrope font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[28px] text-center text-global-3">
                Real stories from businesses we've partnered with to create
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-manrope font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[28px] text-center text-global-3">
                lasting success.
              </p>
            </div>
          </div>
          {/* Message Content */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[88%] gap-8 lg:gap-16">
            <Image 
              src="/images/img_image_portrait.png" 
              alt="Portrait"
              width={408}
              height={332}
              className="w-full lg:w-[34%] h-auto"
            />
            <div className="flex flex-col gap-10 sm:gap-12 md:gap-14 lg:gap-[56px] justify-start items-center w-full lg:w-[60%]">
              <div className="flex flex-row justify-start items-center w-full">
                <Image 
                  src="/images/img_group_2_blue_a700.svg" 
                  alt="Talin Global Group"
                  width={50}
                  height={50}
                  className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[48px] md:h-[48px] lg:w-[50px] lg:h-[50px]"
                />
                <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-ysabeau font-bold leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-left uppercase text-global-4 w-full sm:w-3/4 md:w-2/3 lg:w-[18%] ml-1 sm:ml-2 md:ml-3 lg:ml-[6px]">
                  Talin Global Group
                </h3>
              </div>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-manrope font-medium leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] text-left text-global-3 w-full mb-6 sm:mb-7 md:mb-8 lg:mb-[34px]">
                "At Talin Global Group, our mission is to make inspirational, high-quality products and services accessible to our customers in every aspect of our business. We believe the quest for perfection delivers the most profitable results in the long term. By combining our strengths as a group with the expertise of our teams, we continuously identify new trends and innovative solutions, adding value to our conglomerate and the markets we serve."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
