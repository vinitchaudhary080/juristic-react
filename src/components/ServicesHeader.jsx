// src/components/Services.jsx
import React from "react";

import arbitrationIcon from "../assets/icons/Arbitration india.png";
import MediationServicesIcon from "../assets/icons/Mediation Services.png";
import ServiceMatterIcon from "../assets/icons/Service Matter.png";
import CorporateLawIcon from "../assets/icons/Corporate Law.png";
import CivivlIcon from "../assets/icons/Civil.png";
import CorporationIcon from "../assets/icons/Corporation.png";
import CriminalIcon from "../assets/icons/Criminal.png";
import PILIcon from "../assets/icons/PIL.png";
// …baaki icons import karo yahan…

const services = [
   { id: 1, icon: arbitrationIcon, title: "Arbitration india & International", desc: "100+ arbitrations handled; empaneled with DIAC & multiple corporate panels." },
    { id: 2, icon: MediationServicesIcon, title: "Mediation Services",       desc: "Delhi Judicial Academy certified (40 hrs); successfully mediated 10+ disputes." },
    { id: 3, icon: ServiceMatterIcon, title: "Service Matter", desc: "25+ years Supreme Court practice in civil, criminal & constitutional matters." },
    { id: 4, icon: CorporateLawIcon, title: "Corporate Law",           desc: "Strategic counsel on commercial, property & personal legal issues." },
    { id: 5, icon: CivivlIcon, title: "Civil",         desc: "Comprehensive agreements: employment, sale, lease, partnership & more." },
    { id: 6, icon: CorporationIcon, title: "Corporation", desc: "Registration & enforcement for patents, trademarks, copyrights & designs." },
    { id: 7, icon: CriminalIcon, title: "Criminal",            desc: "Company formation, compliance, mergers & acquisitions services." },
    { id: 8, icon: PILIcon, title: "PIL",     desc: "Advisory on SEBI, RBI, FEMA & other statutory regulations." },
    
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
        {/* <div className="mt-6 lg:mt-0">
          <a
            href="#all-services"
            className="inline-block px-6 py-3 bg-blue-900 text-white font-medium rounded-full hover:bg-blue-800 transition-colors duration-300"
          >
            Explore All
          </a>
        </div> */}
      </div>

      {/* Services Grid */}
      <div className="pt-16 pb-24 container mx-auto px-3 lg:px-4">
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
      </div>
    </section>
  );
}
