// src/components/Hero.jsx
import React from "react";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background + dark overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Lawyer statue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-serif text-white leading-snug">
            Our Independence <br /> Makes the Difference
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Nationally Established. Internationally Recognized
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-yellow-500 text-white font-medium rounded hover:bg-yellow-600 transition"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>

    
    </section>
  );
}
