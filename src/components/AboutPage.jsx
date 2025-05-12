// src/components/AboutPage.jsx
import React from "react";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

// Assets – अपनी images इन paths में डाल लें
import headerImg from "../assets/images/about-header.jpg";   // हल्का overlay वाला background
import aboutImg  from "../assets/images/about-lawyer.jpg";
import IntegritySection from "./IntegritySection";
import RangeSection from "./RangeSection";
import DefendSection from "./DefendSection";
import ServicesHeader from "./ServicesHeader";
import ImageSliderSection from "./ImageSliderSection";


export default function AboutPage() {
  return (
    <>
      {/* Hero Header */}
      <header
        className="relative h-60 md:h-72 lg:h-96 bg-center bg-cover"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            About
          </h1>
        </div>
      </header>

      {/* Main About Section */}
      <section className="container mx-auto px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImg}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right: Text + List & Footnotes */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
            We uphold the highest standards of integrity
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We prioritize our clients’ needs, understanding that each case is unique.
            Our team of seasoned attorneys is committed to delivering tailored solutions,
            ensuring you receive the attention and representation you deserve.
            Our comprehensive expertise allows us to handle a wide range of legal matters effectively.
          </p>

          {/* Improved List + Footnotes */}
          <div className="mt-8 max-w-lg space-y-6">
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Empaneled Arbitrator</strong> at Delhi International Arbitration Centre (DIAC)
                <sup>[1][2]</sup>
              </li>
              <li>
                <strong>Panel Mediator</strong> of Supreme Court Mediation Centre (SCMC),
                vide order dated 09.02.2023<sup>[3][4]</sup>
              </li>
              <li>
                <strong>Member</strong> of International Council of Jurists, London
              </li>
              <li>
                <strong>National President</strong>, Rajya Mahila Adhivakta Sangh
              </li>
              <li>Ex-Director, Madhya Pradesh Education Board</li>
              <li>Ex-Executive Member, Rani Durgavati Vishwavidyalaya (M.P.)</li>
            </ul>

            {/* Footnotes */}
            <div className="space-y-1 text-xs text-gray-500">
              <p>
                <sup>[1]</sup> DIAC Empanelment Certificate
              </p>
              <p>
                <sup>[2]</sup> Name update on DIAC website
              </p>
              <p>
                <sup>[3]</sup> Supreme Court Mediation Centre appointment letter dated 09.02.2023
              </p>
              <p>
                <sup>[4]</sup> SCMC official order document
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <IntegritySection />
      <RangeSection />
      <DefendSection />
      <ServicesHeader />
      <ImageSliderSection />
    

      <ContactUs />
    </>
  );
}
