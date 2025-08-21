'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-black/20 backdrop-blur-md z-10 p-3 sm:p-4 md:p-6 lg:p-[12px]">
      <div className="container-standard">
        <div className="flex flex-row justify-between items-center w-full">
          {/* Logo and Brand Section */}
          <div className="flex flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-[48px] justify-start items-center w-auto">
            <div className="flex flex-row gap-2 sm:gap-2.5 md:gap-3 lg:gap-[12px] justify-start items-center w-auto">
              <Link href="/" className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[38px] md:h-[38px] lg:w-[42px] lg:h-[42px]">
                <Image 
                  src="/images/img_group_2.svg" 
                  alt="Talin Global Group Logo"
                  width={42}
                  height={42}
                  className="w-full h-full"
                />
              </Link>
              <h1 className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] font-ysabeau font-bold leading-[14px] sm:leading-[16px] md:leading-[18px] lg:leading-[20px] text-left uppercase text-global-6">
                Talin Global Group
              </h1>
            </div>
            
            {/* Vertical Line */}
            <div className="hidden md:block w-[1px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] bg-[linear-gradient(180deg,#ffffff00_0%,#ffffff33_50%,_#ffffff00_100%)]"></div>
            
            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex flex-row gap-[24px] md:gap-[28px] lg:gap-[32px] justify-start items-center w-auto">
              <Link href="/" className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-6 hover:text-global-4 transition-colors duration-200">
                Home
              </Link>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 cursor-pointer"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('companies')}
                className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 cursor-pointer"
              >
                Companies
              </button>
              <button 
                onClick={() => scrollToSection('factories')}
                className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 cursor-pointer"
              >
                Factories
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 cursor-pointer"
              >
                Gallery
              </button>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-global-6 hover:text-global-4 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Get in Touch Button - Desktop */}
          <Link 
            href="/contact" 
            className="hidden lg:flex justify-center items-center w-auto border-2 border-[#ffffff26] bg-global-2 px-4 py-3 md:px-5 md:py-4 lg:px-[20px] lg:py-[20px] shadow-[0px_0px_1px_#0055ff1e] hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
          >
            <span className="text-[14px] md:text-[15px] lg:text-[16px] font-dm-sans font-medium leading-[19px] md:leading-[20px] lg:leading-[21px] text-left text-global-6">
              Get in touch
            </span>
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden bg-global-1 rounded-lg shadow-lg`}>
          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-0">
            <Link href="/" className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-6 hover:text-global-4 transition-colors duration-200 py-3 px-4 hover:bg-global-8">
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8 cursor-pointer text-left w-full"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('companies')}
              className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8 cursor-pointer text-left w-full"
            >
              Companies
            </button>
            <button 
              onClick={() => scrollToSection('factories')}
              className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8 cursor-pointer text-left w-full"
            >
              Factories
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8 cursor-pointer text-left w-full"
            >
              Gallery
            </button>
            <Link 
              href="/contact" 
              className="mx-4 mb-3 flex justify-center items-center w-auto border-2 border-[#ffffff26] bg-global-2 px-4 py-3 hover:bg-opacity-90 transition-all duration-200 rounded-md"
            >
              <span className="text-[16px] font-dm-sans font-medium leading-[21px] text-left text-global-6">
                Get in touch
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;