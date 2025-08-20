'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-global-1 py-6 sm:py-8 md:py-10 lg:py-[50px] px-4 sm:px-6 md:px-8 lg:px-[48px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Main Content Section */}
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[220px] w-full lg:w-2/3">
            {/* Header Section */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[28px]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[28px]">
                <Image 
                  src="/images/img_group_2.svg" 
                  alt="Talin Global Group"
                  width={110}
                  height={110}
                  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] flex-shrink-0"
                />
                <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-ysabeau font-bold leading-[26px] sm:leading-[32px] md:leading-[42px] lg:leading-[54px] text-left uppercase text-global-6 shadow-[0px_23px_23px_#0000003f]">
                  Talin Global <br className="hidden sm:block" /> Group
                </h2>
              </div>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-manrope font-light leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[27px] text-left text-global-6 max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                We combine innovation and expertise to create experiences that matter, building a better future together.
              </p>
            </div>
            
            {/* Copyright Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
              <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4 flex-wrap">
                <p className="text-[10px] sm:text-[11px] font-manrope font-normal leading-[14px] sm:leading-[16px] text-global-7 whitespace-nowrap">
                  © 2005–2025
                </p>
                <div className="w-[4px] sm:w-[6px] h-[1px] sm:h-[2px] bg-global-9"></div>
                <p className="text-[9px] sm:text-[10px] font-manrope font-normal leading-[13px] sm:leading-[15px] text-global-7">
                  Tailin Global Group
                </p>
                <div className="w-[4px] sm:w-[6px] h-[1px] sm:h-[2px] bg-global-9"></div>
                <p className="text-[9px] sm:text-[10px] font-manrope font-normal leading-[13px] sm:leading-[15px] text-global-7">
                  All Rights Reserved
                </p>
              </div>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[94px] w-full lg:w-1/3">
            {/* Navigation Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {/* Links Column */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[22px]">
                <h3 className="text-[12px] sm:text-[13px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-6">
                  Links
                </h3>
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[6px]">
                  <Link href="/" className="text-[11px] sm:text-[12px] lg:text-[13px] font-inter font-normal leading-[15px] sm:leading-[17px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Home
                  </Link>
                  <Link href="/about" className="text-[11px] sm:text-[12px] lg:text-[13px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    About
                  </Link>
                  <Link href="/companies" className="text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Companies
                  </Link>
                  <Link href="/factories" className="text-[11px] sm:text-[12px] lg:text-[13px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Factories
                  </Link>
                  <Link href="/gallery" className="text-[11px] sm:text-[12px] lg:text-[13px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Gallery
                  </Link>
                  <Link href="/contact" className="text-[11px] sm:text-[12px] lg:text-[13px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Companies Column */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[22px]">
                <h3 className="text-[11px] sm:text-[12px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-6">
                  Companies
                </h3>
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[6px]">
                  <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-global-7">
                    Talin International
                  </p>
                  <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-manrope font-normal leading-[14px] sm:leading-[16px] lg:leading-[18px] text-global-7">
                    Utopia Global General Trading
                  </p>
                  <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-global-7">
                    Hollywood Cosmetics
                  </p>
                  <p className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-global-7">
                    Talin Properties
                  </p>
                </div>
              </div>

              {/* Socials Column */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[22px]">
                <h3 className="text-[11px] sm:text-[12px] lg:text-[13px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-6">
                  Socials
                </h3>
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[6px]">
                  <Link href="#" className="text-[10px] sm:text-[11px] lg:text-[12px] font-inter font-normal leading-[13px] sm:leading-[15px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Twitter
                  </Link>
                  <Link href="#" className="text-[10px] sm:text-[11px] lg:text-[12px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Instagram
                  </Link>
                  <Link href="#" className="text-[11px] sm:text-[12px] lg:text-[13px] font-inter font-normal leading-[14px] sm:leading-[16px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Facebook
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact & Legal Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Column */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[22px]">
                <h3 className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-global-6">
                  Contact
                </h3>
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[8px]">
                  <address className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-global-7 not-italic">
                    146 Franklin Street,<br />
                    Brooklyn, NY 11222<br />
                    United States
                  </address>
                  <div className="flex flex-col gap-1 sm:gap-2 lg:gap-[6px]">
                    <Link href="mailto:utobia07@yahoo.com" className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[16px] sm:leading-[18px] lg:leading-[19px] text-global-7 hover:text-global-6 transition-colors duration-200 break-all">
                      utobia07@yahoo.com
                    </Link>
                    <Link href="tel:+249912308175" className="text-[10px] sm:text-[11px] lg:text-[12px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-global-7 hover:text-global-6 transition-colors duration-200">
                      +249912308175
                    </Link>
                  </div>
                </div>
              </div>

              {/* Legal Column */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[22px]">
                <h3 className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[16px] sm:leading-[18px] lg:leading-[19px] text-global-6">
                  Legal
                </h3>
                <div className="flex flex-col gap-2 sm:gap-3 lg:gap-[6px]">
                  <Link href="/privacy" className="text-[10px] sm:text-[11px] lg:text-[12px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-[10px] sm:text-[11px] lg:text-[12px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[18px] text-global-7 hover:text-global-6 transition-colors duration-200">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
