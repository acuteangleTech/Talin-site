'use client';
import React from 'react';
import Header from '@/components/common/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import ExcellenceSection from '@/components/sections/ExcellenceSection';
import TeamSection from '@/components/sections/TeamSection';
import MessageSection from '@/components/sections/MessageSection';
import CompaniesSection from '@/components/sections/CompaniesSection';
import FactoriesSection from '@/components/sections/FactoriesSection';
import GallerySection from '@/components/sections/GallerySection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
      <main className="bg-global-1">
        <AboutSection />
        <LeadershipSection />
        <ExcellenceSection />
        <TeamSection />
        <MessageSection />
        <CompaniesSection />
        <FactoriesSection />
        <GallerySection />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
