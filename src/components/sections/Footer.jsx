'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-global-1 section-padding">
      <div className="container-standard">
        {/* Main Footer Content - Desktop Side-by-Side, Mobile Stack */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Section - Company Info & Description */}
          <div className="flex-1 lg:max-w-[45%] xl:max-w-[50%]">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
              {/* Company Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                <Image 
                  src="/images/img_group_2.svg" 
                  alt="Talin Global Group"
                  width={110}
                  height={110}
                  className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] xl:w-[110px] xl:h-[110px] flex-shrink-0"
                />
                <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-ysabeau font-bold leading-[26px] sm:leading-[32px] md:leading-[42px] lg:leading-[48px] xl:leading-[54px] text-left uppercase text-global-6 shadow-[0px_23px_23px_#0000003f]">
                  Talin Global <br className="hidden sm:block" /> Group
                </h2>
              </div>
              
              {/* Company Description */}
              <div className="text-container-sm">
                <div className="w-full text-balanced">
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-manrope font-light leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px] xl:leading-[27px] text-justify text-global-6">
                    We combine innovation and expertise to create experiences that matter, building a better future together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Links & Contact */}
          <div className="flex-1 lg:max-w-[55%] xl:max-w-[50%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-10">
              
              {/* Navigation Links */}
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-inter font-semibold leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-6 uppercase tracking-wide">
                  Quick Links
                </h3>
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                  <Link href="/" className="text-[12px] sm:text-[13px] lg:text-[14px] font-inter font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:translate-x-1 transform">
                    Home
                  </Link>
                  <Link href="/about" className="text-[12px] sm:text-[13px] lg:text-[14px] font-inter font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:translate-x-1 transform">
                    About
                  </Link>
                  <Link href="/companies" className="text-[12px] sm:text-[13px] lg:text-[14px] font-inter font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:translate-x-1 transform">
                    Companies
                  </Link>
                  <Link href="/factories" className="text-[12px] sm:text-[13px] lg:text-[14px] font-inter font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:translate-x-1 transform">
                    Factories
                  </Link>
                  <Link href="/gallery" className="text-[12px] sm:text-[13px] lg:text-[14px] font-inter font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:translate-x-1 transform">
                    Gallery
                  </Link>
                  <Link href="/contact" className="text-[12px] sm:text-[13px] lg:text-[14px] font-inter font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:translate-x-1 transform">
                    Contact
                  </Link>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-manrope font-semibold leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-6 uppercase tracking-wide">
                  Contact
                </h3>
                <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                  {/* Sudan Office */}
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-semibold leading-[14px] sm:leading-[16px] lg:leading-[18px] text-global-6">
                      Sudan Office:
                    </span>
                    <address className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[19px] text-global-7 not-italic">
                      Villa no. 6, Taif st.<br />
                      Khartoum, Sudan
                    </address>
                  </div>
                  
                  {/* Egypt Office */}
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-semibold leading-[14px] sm:leading-[16px] lg:leading-[18px] text-global-6">
                      Egypt Office:
                    </span>
                    <address className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[19px] text-global-7 not-italic">
                      Building 2 Area 8<br />
                      El Shorouk city<br />
                      Cairo, Egypt
                    </address>
                  </div>
                  
                  {/* Contact Details */}
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <Link href="mailto:info@talinglobalgroup.com" className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[19px] text-global-7 hover:text-global-6 transition-colors duration-200 break-all hover:underline">
                      info@talinglobalgroup.com
                    </Link>
                    <Link href="tel:+249912308175" className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[19px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:underline">
                      +249912308175 (Sudan)
                    </Link>
                    <Link href="tel:+201555067624" className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[19px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:underline">
                      +20 155 5067624 (Egypt)
                    </Link>
                  </div>
                </div>
              </div>

              {/* Legal & Additional Links */}
              <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
                <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] font-manrope font-semibold leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-6 uppercase tracking-wide">
                  Legal
                </h3>
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                  <Link href="/privacy" className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[19px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:translate-x-1 transform">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-[11px] sm:text-[12px] lg:text-[13px] font-manrope font-normal leading-[15px] sm:leading-[17px] lg:leading-[19px] text-global-7 hover:text-global-6 transition-colors duration-200 hover:translate-x-1 transform">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="w-full border-t border-global-8 pt-8 sm:pt-10 md:pt-12 lg:pt-14 mt-12 sm:mt-14 md:mt-16 lg:mt-20">
          <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:gap-10">
            <h3 className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] font-manrope font-semibold leading-[16px] sm:leading-[18px] lg:leading-[20px] xl:leading-[22px] text-global-6 text-center uppercase tracking-wide">
              Follow Us
            </h3>
            <div className="flex flex-row justify-center items-center gap-6 sm:gap-7 md:gap-8 lg:gap-10">
              {/* Twitter/X Icon */}
              <Link href="#" className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] flex items-center justify-center bg-global-8 rounded-full hover:bg-global-7 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] fill-current text-global-6" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              
              {/* Instagram Icon */}
              <Link href="#" className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] flex items-center justify-center bg-global-8 rounded-full hover:bg-global-7 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] fill-current text-global-6" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              
              {/* Facebook Icon */}
              <Link href="#" className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] flex items-center justify-center bg-global-8 rounded-full hover:bg-global-7 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] fill-current text-global-6" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              
              {/* LinkedIn Icon */}
              <Link href="#" className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] flex items-center justify-center bg-global-8 rounded-full hover:bg-global-7 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] fill-current text-global-6" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="w-full border-t border-global-8 pt-6 sm:pt-8 md:pt-10 lg:pt-12 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 md:gap-4">
            <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-manrope font-normal leading-[16px] sm:leading-[18px] lg:leading-[20px] text-global-7 text-center">
              All Rights Reserved @2025 Talin Global Group
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
