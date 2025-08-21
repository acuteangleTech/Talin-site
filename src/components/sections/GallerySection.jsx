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
      "/images/img_f48408c8_d809_4e45_8_jpg_webp.png",
      "/images/img_f48408c8_d809_4e45_8_jpg_webp_1.png", 
      "/images/img_f48408c8_d809_4e45_8_jpg_webp_2.png",
      "/images/img_frame_40.png",
      "/images/img_frame_40_1.png",
      "/images/img_workspace.png",
      "/images/img_rear_view_of_black.png",
      "/images/img_black_man.png",
      "/images/img_man_in_the_street.png",
      "/images/img_room.png",
      "/images/img_garden.png",
      "/images/img_bathroom.png"
    ],
    Events: [
      "/images/img_rear_view_of_black.png",
      "/images/img_black_man.png",
      "/images/img_man_in_the_street.png",
      "/images/img_workspace.png",
      "/images/img_room.png",
      "/images/img_garden.png",
      "/images/img_f48408c8_d809_4e45_8_jpg_webp.png",
      "/images/img_frame_40.png",
      "/images/img_bathroom.png",
      "/images/img_rectangle_11.png",
      "/images/img_frame_13_1.png",
      "/images/img_8023860372_1.png"
    ],
    Products: [
      "/images/img_bathroom.png",
      "/images/img_room.png",
      "/images/img_garden.png",
      "/images/img_workspace.png",
      "/images/img_frame_13_1.png",
      "/images/img_rectangle_11.png",
      "/images/img_f48408c8_d809_4e45_8_jpg_webp.png",
      "/images/img_frame_40.png",
      "/images/img_rear_view_of_black.png",
      "/images/img_black_man.png",
      "/images/img_man_in_the_street.png",
      "/images/img_8023860372_1.png"
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
            className="border-2 border-[#ffffff26] shadow-[0px_0px_1px_#0055ff1e] px-6 lg:px-8 py-4 lg:py-5 transition-all duration-300 hover:border-[#ffffff40] hover:shadow-[0px_0px_8px_#0055ff3e]"
            onClick={() => console.log(`View all ${activeTab.toLowerCase()}`)}
          >
            <span className="text-sm lg:text-base font-medium text-white">
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
