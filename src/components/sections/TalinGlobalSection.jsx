'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const TalinGlobalSection = () => {
  const carouselRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Images representing Talin Global Group's diverse operations
  const carouselImages = [
    {
      src: "/images/img_f48408c8_d809_4e45_8_jpg_webp.png", // Industrial machinery - blue and white hopper/conveyor
      alt: "Industrial Manufacturing & Recycling Operations",
      category: "Manufacturing"
    },
    {
      src: "/images/img_workspace.png", // Food production line with biscuits
      alt: "Food Production & Processing",
      category: "Food Production"
    },
    {
      src: "/images/img_room.png", // Modern house with flat roof and grey fence
      alt: "Real Estate Development",
      category: "Real Estate"
    },
    {
      src: "/images/img_frame_40.png", // Construction equipment - black and yellow machinery
      alt: "Construction & Industrial Solutions",
      category: "Construction"
    },
    {
      src: "/images/img_garden.png", // Lighthouse with pier/causeway
      alt: "Infrastructure & Trading",
      category: "Infrastructure"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = 320; // Width of one image + gap
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
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section className="w-full bg-black min-h-screen flex flex-col justify-center py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Image Carousel Section - Now takes more space */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div 
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px] xl:w-[280px] h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] xl:h-[360px] group"
              >
                {/* Image container with clean borders */}
                <div className="absolute inset-0 border border-white/20 rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, (max-width: 1280px) 340px, 360px"
                  />
                  
                  {/* Subtle overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Category label - positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <span className="text-white text-sm sm:text-base font-medium tracking-wide">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Description Section - Repositioned and restyled */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-left sm:text-center">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-loose sm:leading-[2.2] md:leading-[2.4] lg:leading-[2.6] font-light tracking-wide">
              Talin Global Group is a diversified conglomerate with operations spanning real estate, 
              manufacturing, cosmetics, trading, and industrial solutions. Our mission is to create 
              sustainable value by combining local expertise with international innovation. Through 
              strategic partnerships with public and private sectors, we deliver high-quality products 
              and services to markets across Sudan, the UAE, Egypt, Saudi Arabia, and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styling */}
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

export default TalinGlobalSection;