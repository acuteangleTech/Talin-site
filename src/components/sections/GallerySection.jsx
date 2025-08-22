'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState('Projects');
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Gallery images organized by category - using available images that match construction/industrial theme
  const galleryData = {
    Projects: [
      "/real state/WhatsApp Image 2025-08-16 at 11.01.59 PM.jpeg",
      "/real state/WhatsApp Image 2025-08-16 at 11.01.58 PM (1).jpeg",
      "/real state/WhatsApp Image 2025-08-16 at 11.01.58 PM.jpeg",
      "/real state/WhatsApp Image 2025-08-16 at 11.01.57 PM (1).jpeg",
      "/real state/WhatsApp Image 2025-08-16 at 11.01.57 PM.jpeg"
    ],
    Events: [
      "/events/WhatsApp Image 2025-08-16 at 11.46.48 PM.jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.46.47 PM (2).jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.46.47 PM (1).jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.46.47 PM.jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.45.31 PM (1).jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.45.31 PM.jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.45.03 PM.jpeg"
    ],
    Products: [
      // Automatic and semi automatic blowing machines
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.20 PM (1).jpeg",
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.20 PM.jpeg",
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.19 PM (2).jpeg",
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.19 PM (1).jpeg",
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.19 PM.jpeg",
      
      // Biscuits machines line
      "/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.10 PM (2).jpeg",
      "/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.10 PM (1).jpeg",
      "/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.10 PM.jpeg",
      "/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.09 PM.jpeg",
      
      // Blocks making machines
      "/Blocks making machines/WhatsApp Image 2025-08-16 at 11.41.41 PM.jpeg",
      "/Blocks making machines/WhatsApp Image 2025-08-16 at 11.41.40 PM (1).jpeg",
      "/Blocks making machines/WhatsApp Image 2025-08-16 at 11.41.40 PM.jpeg",
      "/Blocks making machines/WhatsApp Image 2025-08-16 at 11.41.39 PM.jpeg",
      
      // Papers machines
      "/papers machines/WhatsApp Image 2025-08-16 at 11.04.48 PM.jpeg",
      "/papers machines/WhatsApp Image 2025-08-16 at 11.04.47 PM (1).jpeg",
      "/papers machines/WhatsApp Image 2025-08-16 at 11.04.47 PM.jpeg",
      
      // Utopia machines
      "/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.53 PM.jpeg",
      "/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.52 PM (1).jpeg",
      "/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.52 PM.jpeg",
      "/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.51 PM.jpeg"
    ]
  };

  const currentImages = galleryData[activeTab];

  // Split images into two rows for carousel
  const topRowImages = currentImages.filter((_, index) => index % 2 === 0);
  const bottomRowImages = currentImages.filter((_, index) => index % 2 === 1);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused && carouselRef.current) {
          const scrollAmount = 420; // Width of one image + gap (416px + 4px)
          const currentScroll = carouselRef.current.scrollLeft;
          const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
          
          if (currentScroll >= maxScroll) {
            // Reset to beginning when reaching the end
            carouselRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          } else {
            // Continue scrolling
            carouselRef.current.scrollTo({
              left: currentScroll + scrollAmount,
              behavior: 'smooth'
            });
          }
        }
      }, 3000); // Scroll every 3 seconds
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, activeTab]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section id="gallery" className="w-full bg-black section-padding">
      <div className="container-standard">
        <div className="flex flex-col items-center">
          
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16 text-container-sm">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4 bg-gradient-to-r from-white to-[#ffffff4c] bg-clip-text text-transparent">
              A Glimpse Into Our World
            </h2>
            <div className="w-full text-balanced">
              <p className="text-gray-400 text-sm lg:text-base max-w-md mx-auto text-justify">
                A visual showcase of our work, culture, and milestones.
              </p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-12 lg:gap-20 mb-12 lg:mb-16">
            {['Projects', 'Events', 'Products'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg lg:text-xl font-medium transition-colors duration-300 ${
                  activeTab === tab 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Section - Full Width with No Side Padding */}
      <div className="w-full mb-16">
        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          className="flex flex-col gap-4 overflow-x-auto scrollbar-hide px-4 lg:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Top Row */}
          <div className="flex gap-4 min-w-max">
            {topRowImages.map((image, index) => (
              <div
                key={`top-${index}`}
                className="relative w-[280px] sm:w-[320px] md:w-[370px] lg:w-[416px] h-[220px] sm:h-[250px] md:h-[290px] lg:h-[326px] flex-shrink-0 overflow-hidden bg-gradient-to-b from-[#ffffff0c] to-[#9999990f] border border-[#ffffff0c] shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute inset-1 border border-[#ffffff14]">
                  <Image
                    src={image}
                    alt={`${activeTab} Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 370px, 416px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex gap-4 min-w-max">
            {bottomRowImages.map((image, index) => (
              <div
                key={`bottom-${index}`}
                className="relative w-[280px] sm:w-[320px] md:w-[370px] lg:w-[416px] h-[220px] sm:h-[250px] md:h-[290px] lg:h-[326px] flex-shrink-0 overflow-hidden bg-gradient-to-b from-[#ffffff0c] to-[#9999990f] border border-[#ffffff0c] shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="absolute inset-1 border border-[#ffffff14]">
                  <Image
                    src={image}
                    alt={`${activeTab} Image ${index + bottomRowImages.length + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 370px, 416px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-standard">
        <div className="flex flex-col items-center">
          {/* Divider Line */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffffff19] to-transparent mb-12"></div>

          {/* View All Gallery Button */}
          <Button 
            variant="primary"
            size="lg"
            className="w-auto"
            onClick={() => console.log(`View all ${activeTab.toLowerCase()}`)}
          >
            <span className="text-sm lg:text-base font-medium">
              View All gallery
            </span>
          </Button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
