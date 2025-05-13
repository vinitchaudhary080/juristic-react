// src/components/AboutPage.jsx
import React from "react";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

import headerImg from "../assets/images/about-header.jpg";
import aboutImg from "../assets/images/about-lawyer.jpg";
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
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            About Advocate Ms. Sangeeta Joshi
          </h1>
          <p className="mt-2 text-lg text-gray-200">
            Advocate, Supreme Court of India
          </p>
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

          {/* Right: Text + Memberships */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              A Profile of Excellence
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ms. Sangeeta Joshi is a distinguished advocate of the Supreme Court of India with over 25 years’ practice in civil, criminal, arbitration and mediation matters.
              She holds an LL.B. (1999), a Master of Journalism and an M.Com (Management), and is fluent in English, Hindi and Marathi.
            </p>

            {/* Professional Memberships */}
            <div className="mt-6">
              <p className="font-semibold text-gray-800">Professional Memberships:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Life Member, Supreme Court Bar Association (SCBA)<br />
                  Membership No. <strong>J-00608/RES</strong>, dated 07.09.2011
                </li>
                <li>
                  Enrolment with Bar Council of Madhya Pradesh<br />
                  Enrollment No. <strong>MP/3856/1999</strong>, dated 23.11.1999
                </li>
                <li>Regularly practicing in the Supreme Court of India</li>
                <li>Recognized for good moral character and conduct</li>
              </ul>
            </div>

            {/* Quick Achievements */}
            <div className="mt-8 space-y-3">
              <p className="font-semibold text-gray-800">Key Appointments & Roles:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Panel Arbitrator, Delhi International Arbitration Centre (DIAC)</li>
                <li>
                  Panel Mediator, Supreme Court Mediation Centre (SCMC)<br />
                  (Order dated 09.02.2023)
                </li>
                <li>Member, International Council of Jurists, London</li>
                <li>National President, Rajya Mahila Adhivakta Sangh</li>
                <li>Ex-Director, M.P. Education Board</li>
                <li>Ex-Executive Member, Rani Durgavati Vishwavidyalaya, Jabalpur (M.P.)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Follow-on Sections */}
      <RangeSection />
      <IntegritySection />
      
      <DefendSection />
      <ServicesHeader />
      <ImageSliderSection />

      <ContactUs />
    </>
  );
}
