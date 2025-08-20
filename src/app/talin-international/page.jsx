'use client';
import React from 'react';
import Header from '@/components/common/Header';
import CompanyHeaderSection from '@/components/sections/CompanyHeaderSection';
import IndustrialGridSection from '@/components/sections/IndustrialGridSection';
import ServicesSection from '@/components/sections/ServicesSection';
import Footer from '@/components/sections/Footer';

const TalinInternationalPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <Header />
      </div>
      <main className="bg-global-1">
        <CompanyHeaderSection />
        <IndustrialGridSection />
        <ServicesSection />
        <Footer />
      </main>
    </div>
  );
};

export default TalinInternationalPage;
