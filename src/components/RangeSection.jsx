// src/components/RangeSection.jsx
import React from "react";
import rangeImg from "../assets/images/range-section.jpg";

export default function RangeSection() {
  return (
    <section id="range" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Heading, paragraph & stats */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900">
            Comprehensive Practice Areas
          </h2>
          <p className="text-gray-600">
            With over <strong>25 years</strong> of Supreme Court advocacy,  
            Ms. Joshi’s expertise spans civil & criminal litigation,  
            arbitration & conciliation, certified mediation, corporate advisory,  
            constitutional matters, family & estate planning, and regulatory compliance.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            {/* Years of practice */}
            <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-start">
              <span className="text-4xl font-bold text-blue-900">25+</span>
              <span className="text-gray-600">Years of practice</span>
            </div>
            {/* High-stakes cases */}
            <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-start">
              <span className="text-4xl font-bold text-blue-900">50+</span>
              <span className="text-gray-600">High-stakes cases</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={rangeImg}
            alt="Legal consultation"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
