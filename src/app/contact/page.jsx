'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Button from '@/components/ui/Button';
import EditText from '@/components/ui/EditText';
import Footer from '@/components/sections/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [localTime, setLocalTime] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now?.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col gap-[16px] sm:gap-[24px] md:gap-[28px] lg:gap-[32px] justify-center items-center w-full bg-global-1">
      {/* Header */}
      <Header />
      {/* Main Contact Section */}
      <section className="w-full bg-global-1 section-padding mt-[80px] sm:mt-[120px] md:mt-[160px] lg:mt-[200px]">
        <div className="container-standard">
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-[120px]">
            {/* Left Side - Contact Information */}
            <div className="w-full lg:w-[42%] flex flex-col gap-[50px] sm:gap-[70px] md:gap-[90px] lg:gap-[110px] justify-start items-start">
              {/* Let's talk! Title */}
              <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-manrope font-medium leading-[33px] sm:leading-[44px] md:leading-[55px] lg:leading-[66px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent mt-[8px] sm:mt-[12px] md:mt-[14px] lg:mt-[16px]">
                Let's talk!
              </h1>
              {/* Contact Details */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] md:gap-[18px] lg:gap-[20px] justify-start items-start w-full">
                {/* Office Section */}
                <div className="flex flex-col gap-[3px] sm:gap-[4px] md:gap-[5px] lg:gap-[6px] justify-start items-start w-full">
                  <h3 className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent">
                    Office:
                  </h3>
                  <div className="flex flex-col justify-center items-start w-full">
                    <p className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] font-inter font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] lg:leading-[21px] text-left text-global-6">
                      Keizersgracht 520, 1017EK<br />
                      Amsterdam<br />
                      The Netherlands
                    </p>
                    <div className="flex flex-row justify-start items-center w-full mt-2">
                      <span className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] font-inter font-normal leading-[16px] sm:leading-[17px] md:leading-[17px] lg:leading-[18px] text-left text-global-6">
                        Local time:
                      </span>
                      <span className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] font-inter font-normal leading-[16px] sm:leading-[17px] md:leading-[17px] lg:leading-[18px] text-left text-global-6 ml-1">
                        {localTime || '21:35:46'}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Divider Line */}
                <div className="w-full h-[1px] bg-global-8 my-[4px] sm:my-[6px] md:my-[7px] lg:my-[8px]"></div>
                {/* Email Section */}
                <div className="flex flex-col gap-[3px] sm:gap-[4px] md:gap-[5px] lg:gap-[6px] justify-start items-start w-full">
                  <h3 className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent">
                    Email:
                  </h3>
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-manrope font-extralight leading-[25px] sm:leading-[28px] md:leading-[31px] lg:leading-[33px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent">
                      utobia07@yahoo.com
                    </span>
                  </div>
                </div>
                {/* Divider Line */}
                <div className="w-full h-[1px] bg-global-8 my-[4px] sm:my-[6px] md:my-[7px] lg:my-[8px]"></div>
                {/* Phone Section 1 */}
                <div className="flex flex-col gap-[3px] sm:gap-[4px] md:gap-[5px] lg:gap-[6px] justify-start items-start w-full">
                  <h3 className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent">
                    Phone:
                  </h3>
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-manrope font-extralight leading-[25px] sm:leading-[28px] md:leading-[31px] lg:leading-[33px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent">
                      +249912308175 (sudan)
                    </span>
                  </div>
                </div>
                {/* Divider Line */}
                <div className="w-full h-[1px] bg-global-8 my-[4px] sm:my-[6px] md:my-[7px] lg:my-[8px]"></div>
                {/* Phone Section 2 */}
                <div className="flex flex-col gap-[3px] sm:gap-[4px] md:gap-[5px] lg:gap-[6px] justify-start items-start w-full">
                  <h3 className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent">
                    Phone:
                  </h3>
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-manrope font-extralight leading-[25px] sm:leading-[28px] md:leading-[31px] lg:leading-[33px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent">
                      +20 155 5067624 (Egypt)
                    </span>
                  </div>
                </div>
                {/* Divider Line */}
                <div className="w-full h-[1px] bg-global-8 my-[4px] sm:my-[6px] md:my-[7px] lg:my-[8px]"></div>
                {/* WhatsApp Section */}
                <div className="flex flex-col gap-[2px] sm:gap-[3px] md:gap-[3px] lg:gap-[4px] justify-start items-start w-full">
                  <h3 className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent">
                    WhatsApp
                  </h3>
                  <div className="flex flex-row justify-start items-center w-full">
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-manrope font-extralight leading-[25px] sm:leading-[28px] md:leading-[31px] lg:leading-[33px] text-left bg-[linear-gradient(90deg,#ffffff_0%,_#ffffff4c_100%)] bg-clip-text text-transparent">
                      00249912200031
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Side - Contact Form */}
            <div className="w-full lg:w-[50%] flex flex-col justify-start items-start py-[20px] sm:py-[30px] md:py-[40px] lg:py-[50px] mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[0px]">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="flex flex-col gap-[24px] sm:gap-[28px] md:gap-[32px] lg:gap-[36px] justify-start items-start w-full">
                  {/* Name Field */}
                  <div className="flex flex-col gap-[6px] sm:gap-[8px] md:gap-[9px] lg:gap-[10px] justify-start items-start w-full">
                    <label className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left text-global-6">
                      Name
                    </label>
                    <EditText
                      placeholder="John Doe"
                      value={formData?.name}
                      onChange={(value) => handleInputChange('name', value)}
                      className="w-full bg-edittext-1"
                    />
                  </div>
                  {/* Email Field */}
                  <div className="flex flex-col gap-[6px] sm:gap-[8px] md:gap-[9px] lg:gap-[10px] justify-start items-start w-full">
                    <label className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left text-global-6">
                      Email
                    </label>
                    <EditText
                      type="email"
                      placeholder="john@example.com"
                      value={formData?.email}
                      onChange={(value) => handleInputChange('email', value)}
                      className="w-full bg-edittext-1"
                    />
                  </div>
                  {/* Phone Field */}
                  <div className="flex flex-col gap-[6px] sm:gap-[8px] md:gap-[9px] lg:gap-[10px] justify-start items-start w-full">
                    <label className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left text-global-6">
                      Phone
                    </label>
                    <EditText
                      type="tel"
                      placeholder="+31 (0) 20 343 9223"
                      value={formData?.phone}
                      onChange={(value) => handleInputChange('phone', value)}
                      className="w-full bg-edittext-1 "
                    />
                  </div>
                  {/* Message Field */}
                  <div className="flex flex-col gap-[6px] sm:gap-[8px] md:gap-[9px] lg:gap-[10px] justify-start items-start w-full">
                    <label className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left text-global-6">
                      Message
                    </label>
                    <textarea
                      placeholder="Hi team Halo! I'm reaching out for..."
                      value={formData?.message}
                      onChange={(e) => handleInputChange('message', e?.target?.value)}
                      rows={4}
                      className="w-full px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-[24px] lg:py-[12px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] font-manrope font-normal leading-[20px] sm:leading-[21px] md:leading-[22px] lg:leading-[22px] text-left text-global-7 bg-edittext-1 rounded sm:rounded-md md:rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-global-4 focus:border-global-4 hover:border-global-7 placeholder:text-global-7 resize-vertical min-h-[100px]"
                    />
                  </div>
                  {/* Submit Button */}
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    onClick={() => {}}
                    className="self-start px-[20px] sm:px-[24px] md:px-[28px] lg:px-[32px] py-[8px] sm:py-[10px] md:py-[12px] lg:py-[14px] border-2 border-[#ffffff26] bg-global-2 shadow-[0px_0px_1px_#0055ff1e] hover:bg-opacity-90 transition-all duration-200 hover:scale-105 rounded sm:rounded-md md:rounded-lg"
                  >
                    <span className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-medium leading-[20px] sm:leading-[21px] md:leading-[21px] lg:leading-[22px] text-left text-global-6">
                      Submit
                    </span>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section with Background Image */}
      <section className="w-full bg-global-1 relative">
        <div className="absolute inset-0 bg-[url('/images/img_img.png')] bg-cover bg-center z-0"></div>
        <div className="relative z-10 section-padding">
          <div className="container-standard">
            <div className="flex flex-row justify-center items-end w-full">
              <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] justify-start items-center w-full sm:w-[80%] md:w-[60%] lg:w-[46%] mt-[63px] sm:mt-[94px] md:mt-[110px] lg:mt-[126px] text-container-sm">
                {/* Let's get started today! */}
                <Button 
                  onClick={() => {}}
                  className="px-[5px] sm:px-[7px] md:px-[8px] lg:px-[10px] py-[5px] sm:py-[7px] md:py-[8px] lg:py-[10px] bg-global-1"
                >
                  <span className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-dm-sans font-medium leading-[19px] sm:leading-[20px] md:leading-[20px] lg:leading-[21px] text-left text-global-6">
                    Let's get started today!
                  </span>
                </Button>
                {/* Main CTA Content */}
                <div className="flex flex-col gap-[18px] sm:gap-[27px] md:gap-[31px] lg:gap-[36px] justify-start items-center w-full">
                  <div className="flex flex-col gap-[2px] sm:gap-[3px] md:gap-[3px] lg:gap-[4px] justify-start items-center w-full">
                    <h2 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-manrope font-semibold leading-[33px] sm:leading-[44px] md:leading-[55px] lg:leading-[66px] text-center text-global-6">
                      Ready to build your vision?
                    </h2>
                    <div className="w-full text-balanced">
                      <p className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-manrope font-semibold leading-[21px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-center text-global-7 w-full">
                        Let's build something extraordinary together—contact us today to get started!
                      </p>
                    </div>
                  </div>
                  {/* Contact Us Button */}
                  <div className="flex flex-row justify-center items-center w-full sm:w-[40%] md:w-[35%] lg:w-[26%] border-2 border-[#ffffff26] bg-global-7 px-[10px] sm:px-[15px] md:px-[18px] lg:px-[20px] py-[10px] sm:py-[15px] md:py-[18px] lg:py-[20px] shadow-[0px_0px_1px_#ffffff0c] hover:bg-opacity-90 transition-all duration-200 hover:scale-105">
                    <Link href="/contact" className="w-full text-center">
                      <span className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-dm-sans font-medium leading-[19px] sm:leading-[20px] md:leading-[20px] lg:leading-[21px] text-left text-global-1">
                        Contact Us
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
      
    </div>
  );
};

export default ContactPage;