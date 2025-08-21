'use client';
import React from 'react';
import Image from 'next/image';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Abied Abdelgawe",
      position: "The Deputy Manager",
      image: "/images/img_frame_40.png",
      description: "He has extensive experience in managing operations and leading teams to achieve company goals, coordinating communication with partners and clients, and building strategic relationships to strengthen the group's market position. They also contribute to opening new investment opportunities and expanding business scope to support the company's growth and sustainability."
    },
    {
      id: 2,
      name: "Dr. Asaad Eltoum,",
      position: "Marketing and Sales Manager",
      image: "/images/img_frame_40_354x288.png",
      description: "Is responsible for developing and implementing marketing strategies, managing sales operations, and building client relationships to enhance market share and achieve growth objectives."
    },
    {
      id: 3,
      name: "Afsal E Muhammed",
      position: "Technical Lead",
      image: "/images/img_frame_40_1.png",
      description: "The leader of the programming, development, and electronic applications team is responsible for setting visions and integrated digital solutions. Their role is to transform ideas into smart products, enhance user experience, and support business growth."
    }
  ];

  return (
    <section className="w-full bg-global-1">
      <div className="container-standard">
        <div className="flex flex-col lg:flex-row justify-center items-start">
          <div className="flex flex-col justify-start items-start w-full lg:w-[32%] bg-global-1 py-8 sm:py-10 md:py-12 lg:py-[36px] lg:px-0 mt-6 sm:mt-7 md:mt-8 lg:mt-[28px]">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[18px] justify-start items-start w-full text-container-sm">
              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] font-manrope font-medium leading-[44px] sm:leading-[52px] md:leading-[58px] lg:leading-[66px] text-left bg-gradient-to-r from-[#999999] to-white bg-clip-text text-transparent">
                Meet the Team
              </h2>
              <div className="w-full text-balanced">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-justify text-global-7 w-full mb-2 sm:mb-3 md:mb-4 lg:mb-[10px]">
                  The company's leadership team consists of a group of highly skilled professionals in programming, development, marketing, and business management, with extensive experience in local and international markets. The team works as one to achieve the company's vision of providing innovative digital solutions that support client growth and business development.
                  The leaders set clear strategies and effective execution plans to ensure performance quality and sustainable success.
                  With their high competence and continuous commitment, they drive the company toward leadership in the software and electronic applications industry.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center self-center w-full lg:w-[60%] bg-global-1 py-12 sm:py-14 md:py-16 lg:py-[64px] px-6 sm:px-8 md:px-10 lg:px-[36px]">
            <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[36px] w-full">
              {teamMembers.map((member, index) => (
                <div key={member.id} className="flex flex-col lg:flex-row justify-between items-center w-full bg-global-4 py-6 sm:py-7 md:py-8 lg:py-[34px] px-6 sm:px-7 md:px-8 lg:px-[32px] gap-6 lg:gap-8">
                  <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[12px] justify-start items-start w-full lg:w-auto">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      width={288}
                      height={354}
                      className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:w-[288px] h-auto lg:h-[354px] object-cover"
                    />
                    <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-[4px] justify-start items-center w-full px-8 sm:px-10 md:px-12 lg:px-[66px]">
                      <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-manrope font-normal leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] text-center text-global-6">
                        {member.name}
                      </h3>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[21px] md:leading-[22px] lg:leading-[22px] text-center text-global-7">
                        {member.position}
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-[56%] text-container-sm">
                    <div className="w-full text-balanced">
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] text-justify text-global-7">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
