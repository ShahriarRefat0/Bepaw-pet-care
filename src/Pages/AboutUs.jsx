import React from "react";
import aboutImg from "../assets/aboutIMG.jpg"; // change your image here

const AboutUs = () => {
  return (
    <div className="bg-[#F7EFE4] dark:bg-[#1E1A17] py-20 px-6 lg:px-20 transition-all duration-300">

    
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] dark:text-[#E8D6C9] leading-tight">
            About <span className="text-[#F8721F]">Bepaw</span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed text-lg">
            At Bepaw, we believe every pet deserves love, comfort, and the
            highest quality care. What started as a small initiative has grown
            into a trusted platform where pet parents can access reliable
            services, expert guidance, and premium pet essentials.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed text-lg">
            Our mission is to create a world where pets live happier, healthier,
            and more fulfilling lives — supported by a community that truly cares.
          </p>
        </div>

      
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Bepaw"
            className="rounded-3xl  dark:shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
          />
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-[#2C2C2C] dark:text-[#E8D6C9]">
          Why Choose Bepaw?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 bg-white dark:bg-[#25201C] rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#F8721F]">Care With Heart</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              We treat every pet with love, patience, and respect – like family.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-[#25201C] rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#F8721F]">Premium Grooming</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Safe, hygienic, and stress-free grooming by trained professionals.
            </p>
          </div>

          <div className="p-8 bg-white dark:bg-[#25201C] rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold text-[#F8721F]">Expert Support</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-3">
              Guidance on care, nutrition, behavior, and overall pet wellness.
            </p>
          </div>
        </div>
      </div>

    
      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 bg-white dark:bg-[#25201C] rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-[#F8721F]">Our Mission</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            To empower pet owners with trusted care services, quality products,
            and a community built on compassion and love for animals.
          </p>
        </div>

        <div className="p-8 bg-white dark:bg-[#25201C] rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-[#F8721F]">Our Vision</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
            To become Bangladesh’s most trusted pet care brand — helping pets
            live healthier, happier, and more fulfilling lives.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AboutUs;
