'use client';
import React from 'react';
import Header from '@/components/common/Header';
import CompanyHeaderSection from '@/components/sections/CompanyHeaderSection';
import CosmeticsGridSection from '@/components/sections/CosmeticsGridSection';
import Footer from '@/components/sections/Footer';

const HollywoodCosmeticsPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <Header />
      </div>
      <main className="bg-global-1">
        <section className="pt-32 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center">
              <div className="w-full lg:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-left whitespace-nowrap bg-gradient-to-r from-[#979797] to-[#333333] bg-clip-text text-transparent">
                  Hollywood Cosmetics
                </h1>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-xl text-gray-300 text-left lg:text-right">
                Manufactures and imports international brands such as L’Oréal, MAC, Maybelline, and Max Factor. Distributes through wholesale networks, pharmacies, and retail stores.
                </p>
              </div>
            </div>
          </div>
        </section>
        <CosmeticsGridSection />
        <Footer />
      </main>
    </div>
  );
};

export default HollywoodCosmeticsPage;
