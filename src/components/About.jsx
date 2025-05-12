// src/components/About.jsx
import React from "react";
import iconHome from "../assets/icons/home-icon.png";
import aboutImg from "../assets/images/about-lawyer.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

        {/* Left: Heading & Intro */}
        <div className="w-full lg:w-6/12 space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
              <img src={iconHome} alt="Icon" className="w-6 h-6" />
            </div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              About Juristic
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Ms. Sangeeta Joshi
          </h2>

          <p className="text-gray-700 leading-relaxed">
            With over 25 years at the Supreme Court of India, Ms. Sangeeta Joshi
            is renowned for her expertise in civil, criminal, arbitration, and
            mediation matters.  She’s successfully secured landmark judgments
            and consistently places client needs at the heart of every strategy.
          </p>

          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-[#0052E1] text-white font-medium rounded-lg border border-[#0052E1] hover:bg-white hover:text-[#0052E1] transition-colors duration-300"
          >
            Read Full Profile
          </Link>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-6/12">
          <img
            src={aboutImg}
            alt="Ms. Sangeeta Joshi"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
