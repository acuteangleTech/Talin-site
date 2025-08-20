'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/sections/Footer';

const HollywoodCosmeticsPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="relative">
        <Header />
      </div>
      <main className="bg-global-1">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Hollywood Cosmetics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beauty and personal care products. This page is under development.
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default HollywoodCosmeticsPage;
