'use client';
import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/sections/Footer';
import Image from 'next/image';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Gallery images organized by category - using available images that match construction/industrial theme
  const galleryData = {
    All: [
      // Projects - Real Estate
      "/real state/WhatsApp Image 2025-08-16 at 11.01.59 PM.jpeg",
      "/real state/WhatsApp Image 2025-08-16 at 11.01.58 PM (1).jpeg",
      "/real state/WhatsApp Image 2025-08-16 at 11.01.58 PM.jpeg",
      "/real state/WhatsApp Image 2025-08-16 at 11.01.57 PM (1).jpeg",
      "/real state/WhatsApp Image 2025-08-16 at 11.01.57 PM.jpeg",
      
      // Events
      "/events/WhatsApp Image 2025-08-16 at 11.46.48 PM.jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.46.47 PM (2).jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.46.47 PM (1).jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.46.47 PM.jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.45.31 PM (1).jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.45.31 PM.jpeg",
      "/events/WhatsApp Image 2025-08-16 at 11.45.03 PM.jpeg",
      
      // Products - Industrial Machinery
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.20 PM (1).jpeg",
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.20 PM.jpeg",
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.19 PM (2).jpeg",
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.19 PM (1).jpeg",
      "/Automatic and semi automatic blowing machines/WhatsApp Image 2025-08-16 at 11.41.19 PM.jpeg",
      "/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.10 PM (2).jpeg",
      "/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.10 PM (1).jpeg",
      "/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.10 PM.jpeg",
      "/Biscuits machines line/WhatsApp Image 2025-08-16 at 11.42.09 PM.jpeg",
      "/Blocks making machines/WhatsApp Image 2025-08-16 at 11.41.41 PM.jpeg",
      "/Blocks making machines/WhatsApp Image 2025-08-16 at 11.41.40 PM (1).jpeg",
      "/Blocks making machines/WhatsApp Image 2025-08-16 at 11.41.40 PM.jpeg",
      "/Blocks making machines/WhatsApp Image 2025-08-16 at 11.41.39 PM.jpeg",
      "/papers machines/WhatsApp Image 2025-08-16 at 11.04.48 PM.jpeg",
      "/papers machines/WhatsApp Image 2025-08-16 at 11.04.47 PM (1).jpeg",
      "/papers machines/WhatsApp Image 2025-08-16 at 11.04.47 PM.jpeg",
      "/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.53 PM.jpeg",
      "/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.52 PM (1).jpeg",
      "/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.52 PM.jpeg",
      "/Utopia machines/WhatsApp Image 2025-08-16 at 11.00.51 PM.jpeg"
    ],
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

  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <Header />
      </div>
      <main className="bg-global-1">
        {/* Hero Section */}
        <section className="pt-32 py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
              Our Complete Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of projects, events, and industrial machinery that showcases our expertise and achievements.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-global-1 pt-16 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8 mb-8 lg:mb-16 px-4">
              {['All', 'Projects', 'Events', 'Products'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm sm:text-base lg:text-lg font-medium transition-colors duration-300 px-3 py-2 sm:px-4 sm:py-2 rounded-lg whitespace-nowrap ${
                    activeTab === tab 
                      ? 'text-white bg-[#ffffff1a] border border-[#ffffff2a]' 
                      : 'text-gray-500 hover:text-gray-300 hover:bg-[#ffffff0a]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {currentImages.map((image, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-b from-[#ffffff0c] to-[#9999990f] border border-[#ffffff0c]">
                    <div className="aspect-square relative">
                      <Image
                        src={image}
                        alt={`${activeTab} Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-sm font-semibold">{activeTab} #{index + 1}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Count Info */}
            <div className="text-center mt-12">
              <p className="text-gray-400 text-lg">
                Showing {currentImages.length} images in {activeTab} category
              </p>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default GalleryPage;
