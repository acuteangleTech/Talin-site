'use client';
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const CTASection = () => {
  return (
    <section className="w-full bg-global-1 relative">
      <div 
        className="w-full bg-cover bg-center bg-no-repeat py-12 sm:py-14 md:py-16 lg:py-[70px] px-8 sm:px-10 md:px-12 lg:px-[56px]"
        style={{
          backgroundImage: "url('/images/img_img.png')"
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="flex flex-row justify-center items-end w-full">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[16px] justify-start items-center w-full sm:w-4/5 md:w-3/5 lg:w-[46%] mt-24 sm:mt-28 md:mt-32 lg:mt-[126px]">
              <Button 
                variant="ghost"
                size="sm"
                className="bg-global-1 text-global-6 px-2 sm:px-3 md:px-4 lg:px-[10px] py-2 sm:py-3 md:py-4 lg:py-[10px]"
                onClick={() => {}}
              >
                <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-dm-sans font-medium leading-[19px] sm:leading-[20px] md:leading-[21px] lg:leading-[21px] text-left text-global-6">
                  Let's get started today!
                </span>
              </Button>
              <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[36px] justify-start items-center w-full">
                <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] justify-start items-center w-full">
                  <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-manrope font-semibold leading-[44px] sm:leading-[52px] md:leading-[58px] lg:leading-[66px] text-center text-global-6">
                    Ready to build your vision?
                  </h2>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-semibold leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-center text-global-7 w-full sm:w-4/5 md:w-3/4 lg:w-[66%]">
                    Let's build something extraordinary together—contact us today to get started!
                  </p>
                </div>
                <Link href="/contact">
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="border-2 border-[#ffffff26] shadow-[0px_0px_1px_#ffffff0c] px-4 sm:px-5 md:px-6 lg:px-[20px] py-4 sm:py-5 lg:py-[20px]"
                    onClick={() => {}}
                  >
                    <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-dm-sans font-medium leading-[19px] sm:leading-[20px] md:leading-[21px] lg:leading-[21px] text-left text-global-1">
                      Contact Us
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
