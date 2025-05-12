// src/components/DefendSection.jsx
import React from "react";
import desktopImg from "../assets/images/defend-desktop.jpg"; // replace with your actual image

const steps = [
  {
    id: 1,
    title: "Initial consultation",
    desc:
      "Our comprehensive expertise allows us to handle a wide range of legal matters effectively.",
  },
  {
    id: 2,
    title: "Tailored legal strategy",
    desc:
      "Our comprehensive expertise allows us to handle a wide range of legal matters effectively.",
  },
  {
    id: 3,
    title: "Dedicated representation",
    desc:
      "Our comprehensive expertise allows us to handle a wide range of legal matters effectively.",
  },
];

export default function DefendSection() {
  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12">
        {/* Left: Steps */}
        <div className="w-full lg:w-1/2 space-y-6">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`
                group relative 
                p-6 bg-white rounded-lg shadow-md 
                hover:bg-blue-900 transition-colors duration-300 
                flex justify-between items-center
                ${idx === 1 ? "lg:ml-16" : ""}
              `}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-blue-200 transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
              <span className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                {String(step.id).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Heading, paragraph & button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Your rights matter, we are here to defend them
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We prioritize our clients' needs, understanding that each case is
            unique. Our team of seasoned attorneys is committed to delivering
            tailored solutions, ensuring you receive the attention and
            representation you deserve. Our comprehensive expertise allows us
            to handle a wide range of legal matters effectively.
          </p>
          <a
            href="#consult"
            className="inline-block px-8 py-3 bg-blue-900 text-white rounded-full font-medium text-lg
                       hover:bg-blue-800 transition-colors duration-300"
          >
            Get A Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
