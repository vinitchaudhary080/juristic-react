// src/components/IntegritySection.jsx
import React, { useState } from "react";
import integrityImg from "../assets/images/integrity-section.jpg";

export default function IntegritySection() {
  const [openItem, setOpenItem] = useState(null);
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <section id="integrity" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8 
                      flex flex-col lg:flex-row 
                      items-start  /* align children at top */
                      gap-12">

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 self-start flex-shrink-0">
          <img
            src={integrityImg}
            alt="Client consultation"
            className="w-full rounded-lg"
          />
        </div>

        {/* Right: Text + Accordions */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            We uphold the highest standards of integrity
          </h2>
          <p className="text-gray-600 mb-8">
            We prioritize our clients' needs, understanding that each case is unique.
            Our team of seasoned attorneys is committed to delivering tailored
            solutions, ensuring you receive the attention and representation you
            deserve. Our comprehensive expertise allows us to handle a wide range
            of legal matters effectively.
          </p>

          <div className="space-y-4">
            {/* Proven track record */}
            <div className="border-b">
              <button
                onClick={() => toggleItem("proven")}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  Proven track record
                </span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    openItem === "proven" ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
              {openItem === "proven" && (
                <p className="pb-4 text-gray-600">
                  Our firm boasts decades of successful outcomes across civil,
                  criminal, and corporate cases. We’ve secured landmark
                  judgments and favourable settlements that speak to our
                  dedication and skill.
                </p>
              )}
            </div>

            {/* Personalized approach */}
            <div className="border-b">
              <button
                onClick={() => toggleItem("personalized")}
                className="w-full flex justify-between items-center py-4 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  Personalized approach
                </span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    openItem === "personalized" ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
              {openItem === "personalized" && (
                <p className="pb-4 text-gray-600">
                  We craft every legal strategy around your unique circumstances.
                  From the first consultation to the final resolution, you get a
                  tailored plan that puts your goals front and centre.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
