'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home page first
    if (!isHomePage) {
      router.push(`/#${sectionId}`);
      setMenuOpen(false);
      return;
    }

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

  const handleNavigation = (path) => {
    router.push(path);
    setMenuOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 cursor-pointer"
                >
                  About
                </button>
              ) : (
                <Link 
                  href="/#about"
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200"
                >
                  About
                </Link>
              )}
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection('companies')}
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 cursor-pointer"
                >
                  Companies
                </button>
              ) : (
                <Link 
                  href="/#companies"
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200"
                >
                  Companies
                </Link>
              )}
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection('factories')}
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 cursor-pointer"
                >
                  Factories
                </button>
              ) : (
                <Link 
                  href="/#factories"
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200"
                >
                  Factories
                </Link>
              )}
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 cursor-pointer"
                >
                  Gallery
                </button>
              ) : (
                <Link 
                  href="/#gallery"
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200"
                >
                  Gallery
                </Link>
              )}
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection('talin-global')}
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 cursor-pointer"
                >
                  Talin Global
                </button>
              ) : (
                <Link 
                  href="/#talin-global"
                  className="text-[14px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] md:leading-[21px] lg:leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200"
                >
                  Talin Global
                </Link>
              )}
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
            className="hidden lg:flex justify-center items-center w-auto border-2 border-gray-200 bg-white text-black px-4 py-3 md:px-5 md:py-4 lg:px-[20px] lg:py-[20px] shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105 rounded-lg h-12"
          >
            <span className="text-[14px] md:text-[15px] lg:text-[16px] font-dm-sans font-medium leading-[19px] md:leading-[20px] lg:leading-[21px] text-left">
              Get in touch
            </span>
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden bg-black rounded-lg shadow-lg z-[9999] mt-4`}>
          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-0">
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-6 hover:text-global-4 transition-colors duration-200 py-3 px-4 hover:bg-global-8"
            >
              Home
            </Link>
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('about')}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8 cursor-pointer text-left w-full"
              >
                About
              </button>
            ) : (
              <Link 
                href="/#about"
                onClick={() => setMenuOpen(false)}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8"
              >
                About
              </Link>
            )}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('companies')}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8 cursor-pointer text-left w-full"
              >
                Companies
              </button>
            ) : (
              <Link 
                href="/#companies"
                onClick={() => setMenuOpen(false)}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8"
              >
                Companies
              </Link>
            )}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('factories')}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8 cursor-pointer text-left w-full"
              >
                Factories
              </button>
            ) : (
              <Link 
                href="/#factories"
                onClick={() => setMenuOpen(false)}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8"
              >
                Factories
              </Link>
            )}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8 cursor-pointer text-left w-full"
              >
                Gallery
              </button>
            ) : (
              <Link 
                href="/#gallery"
                onClick={() => setMenuOpen(false)}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8"
              >
                Gallery
              </Link>
            )}
            {isHomePage ? (
              <button 
                onClick={() => scrollToSection('talin-global')}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8 cursor-pointer text-left w-full"
              >
                Talin Global
              </button>
            ) : (
              <Link 
                href="/#talin-global"
                onClick={() => setMenuOpen(false)}
                className="text-[16px] font-manrope font-normal leading-[22px] text-left text-global-7 hover:text-global-6 transition-colors duration-200 py-3 px-4 hover:bg-global-8"
              >
                Talin Global
              </Link>
            )}
            <Link 
              href="/contact" 
              onClick={() => setMenuOpen(false)}
              className="mx-4 mb-3 flex justify-center items-center w-auto border-2 border-gray-200 bg-white text-black px-4 py-3 hover:bg-gray-50 transition-all duration-200 rounded-lg h-11"
            >
              <span className="text-[16px] font-dm-sans font-medium leading-[21px] text-left">
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