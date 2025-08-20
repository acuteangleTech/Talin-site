'use client';
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full bg-global-1 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1438px]">
        <Image 
          src="/images/img_about_section_mask_group.png" 
          alt="About Section"
          width={1438}
          height={890}
          className="w-full h-auto"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1438px"
        />
      </div>
    </section>
  );
};

export default AboutSection;
