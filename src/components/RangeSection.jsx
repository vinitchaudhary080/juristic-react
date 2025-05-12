// src/components/RangeSection.jsx
import React from "react";
import rangeImg from "../assets/images/range-section.jpg"; // replace with your image

export default function RangeSection() {
  return (
    <section id="range" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Heading, paragraph & stats */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            We handle a wide range of legal matters
          </h2>
          <p className="text-gray-600 mb-8">
            We prioritize our clients' needs, understanding that each case is unique.
            Our team of seasoned attorneys is committed to delivering tailored
            solutions, ensuring you receive the attention and representation you
            deserve. Our comprehensive expertise allows us to handle a wide range
            of legal matters effectively.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            {/* Years of experience */}
            <div className="bg-blue-50 p-6 rounded-lg flex flex-col">
              <span className="text-4xl font-bold text-blue-900">15+</span>
              <span className="text-gray-600">Years of experience</span>
            </div>
            {/* Clients worldwide */}
            <div className="bg-blue-50 p-6 rounded-lg flex flex-col">
              <span className="text-4xl font-bold text-blue-900">84k</span>
              <span className="text-gray-600">Clients worldwide</span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={rangeImg}
            alt="Legal consultation on desk"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
