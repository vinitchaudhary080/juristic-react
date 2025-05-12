// src/components/Services.jsx
import React from "react";
import serviceBg from "../assets/images/services-bg.jpg"; // agar banner me background use karna ho

// Existing icons
import arbitrationIcon from "../assets/icons/attorneys.png";
import mediationIcon  from "../assets/icons/scales.png";
import litigationIcon from "../assets/icons/case-win.png";
// …baaki icons import karo yahan…

const services = [
   { id: 1, icon: arbitrationIcon, title: "Arbitration india & International", desc: "100+ arbitrations handled; empaneled with DIAC & multiple corporate panels." },
    { id: 2, icon: arbitrationIcon, title: "Mediation Services",       desc: "Delhi Judicial Academy certified (40 hrs); successfully mediated 10+ disputes." },
    { id: 3, icon: arbitrationIcon, title: "Service Matter", desc: "25+ years Supreme Court practice in civil, criminal & constitutional matters." },
    { id: 4, icon: arbitrationIcon, title: "Corporate Law",           desc: "Strategic counsel on commercial, property & personal legal issues." },
    { id: 5, icon: arbitrationIcon, title: "Civil",         desc: "Comprehensive agreements: employment, sale, lease, partnership & more." },
    { id: 6, icon: arbitrationIcon, title: "Corporation", desc: "Registration & enforcement for patents, trademarks, copyrights & designs." },
    { id: 7, icon: arbitrationIcon, title: "Criminal",            desc: "Company formation, compliance, mergers & acquisitions services." },
    { id: 8, icon: arbitrationIcon, title: "PIL",     desc: "Advisory on SEBI, RBI, FEMA & other statutory regulations." },
    
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      
      {/* Heading Section */}
      <div className="pt-16 pb-0 container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-gray-900">
            Services
          </h2>
          <p className="mt-2 text-gray-600">
            We prioritize our clients' needs, understanding that each case is unique.
          </p>
        </div>
      </div>
      
      {/* Services Grid + Banner */}
      <div className="pt-16 pb-24 container mx-auto px-6 lg:px-8">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="w-full border border-gray-200 rounded-lg p-8 flex flex-col"
            >
              <img
                src={s.icon}
                alt={s.title}
                className="w-12 h-12 mb-4 mx-auto"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {s.title}
              </h4>
              <p className="text-gray-600 text-base leading-relaxed mt-auto text-center">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Big Banner */}
        <div
          className="relative mt-12 rounded-lg text-center text-white h-80 bg-cover bg-center flex flex-col justify-center overflow-hidden"
          style={{ backgroundImage: `url(${serviceBg})` }}
        >
          <div className="absolute inset-0 bg-[#0052E1]/60"></div>
          <div className="relative z-10 px-8">
            <h3 className="text-3xl font-semibold mb-6">
              Kuch simple steps se paayein best juristic services
            </h3>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-white text-[#0052E1] font-medium rounded transition-colors duration-300 hover:bg-gray-100"
            >
              Contact With Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}