'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const TalinGlobalSection = () => {
  const carouselRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [imageErrors, setImageErrors] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // All images from the Home folder representing Talin Global Group's diverse operations
  // Fixed: All paths now use correct case-sensitive folder name "Home"
  const carouselImages = [
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.07 PM (1).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.07 PM.jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.06 PM (2).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.06 PM (1).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.06 PM.jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.05 PM (2).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.05 PM (1).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.05 PM.jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.04 PM (1).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.04 PM.jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.02 PM (1).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.02 PM.jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.00 PM (1).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.03.00 PM.jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.02.59 PM (2).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.02.59 PM (1).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.02.59 PM.jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.02.58 PM (1).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.02.58 PM.jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.02.57 PM.jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.02.56 PM (1).jpeg",
      alt: "Talin Global Group Operations",
    },
    {
      src: "/Home/WhatsApp Image 2025-08-16 at 11.02.56 PM.jpeg",
      alt: "Talin Global Group Operations",
    }
  ];

  // Handle image loading errors
  const handleImageError = (index) => {
    console.warn(`Failed to load image at index ${index}:`, carouselImages[index].src);
    setImageErrors(prev => new Set(prev).add(index));
  };

  // Handle successful image load
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Filter out images that failed to load
  const validImages = carouselImages.filter((_, index) => !imageErrors.has(index));

  // Debug logging
  useEffect(() => {
    console.log(`TalinGlobalSection: Total images: ${carouselImages.length}, Valid images: ${validImages.length}`);
    if (validImages.length === 0) {
      console.warn('TalinGlobalSection: No valid images available for display');
    }
  }, [validImages.length]);

  // Auto-scroll functionality with improved performance for more images
  useEffect(() => {
    if (!isAutoScrolling || validImages.length === 0) return;

    const interval = setInterval(() => {
      if (carouselRef.current && validImages.length > 1) {
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
    }, 3000); // Reduced to 3 seconds for better engagement with more images

    return () => clearInterval(interval);
  }, [isAutoScrolling, validImages.length]);

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id="talin-global" className="w-full bg-black min-h-screen flex flex-col justify-center section-padding relative">
      <div className="container-standard relative z-10">
        
        {/* Image Carousel Section - Enhanced for more images */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          {validImages.length > 0 ? (
            <div 
              ref={carouselRef}
              className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {validImages.map((image, index) => (
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
                      priority={index < 3} // Priority load first 3 images
                      className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, (max-width: 1024px) 320px, (max-width: 1280px) 340px, 360px"
                      onError={() => handleImageError(index)}
                      onLoad={handleImageLoad}
                    />
                    
                    {/* Subtle overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                    
                    {/* Image counter indicator */}
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {index + 1}/{validImages.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-[360px] bg-black/20 border border-white/20 rounded-lg">
              <div className="text-center text-white/60">
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
                    <p className="text-lg mb-2">Loading Images...</p>
                  </>
                ) : (
                  <>
                    <p className="text-lg mb-2">Images Unavailable</p>
                    <p className="text-sm">Please check your internet connection or refresh the page</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Text Description Section - Repositioned and restyled */}
        <div className="w-full max-w-5xl mx-auto text-container-sm">
          <div className="text-left sm:text-center">
            <div className="w-full text-balanced">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-loose sm:leading-[2.2] md:leading-[2.4] lg:leading-[2.6] font-light tracking-wide text-justify">
                <span className="font-bold text-white">Talin Global Group</span> is a diversified conglomerate with operations spanning real estate, 
                manufacturing, cosmetics, trading, and industrial solutions. Our mission is to create 
                sustainable value by combining local expertise with international innovation. Through 
                strategic partnerships with public and private sectors, we deliver high-quality products 
                and services to markets across Sudan, the UAE, Egypt, Saudi Arabia, and beyond.
              </p>
            </div>
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