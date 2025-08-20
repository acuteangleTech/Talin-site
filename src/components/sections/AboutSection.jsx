'use client';
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full bg-global-1 flex justify-center items-center">
      <Image 
        src="/images/img_about_section_mask_group.png" 
        alt="About Section"
        width={1438}
        height={890}
        className="w-full h-auto max-w-[1438px]"
      />
    </section>
  );
};

export default AboutSection;
