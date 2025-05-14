import React from "react";
import serviceBg from "../assets/images/services-bg.jpg";
import arbitrationIcon from "../assets/icons/Arbitration india.png";
import MediationServicesIcon from "../assets/icons/Mediation Services.png";
import ServiceMatterIcon from "../assets/icons/Service Matter.png";
import CorporateLawIcon from "../assets/icons/Corporate Law.png";
import CivivlIcon from "../assets/icons/Civil.png";
import CorporationIcon from "../assets/icons/Corporation.png";
import CriminalIcon from "../assets/icons/Criminal.png";
import PILIcon from "../assets/icons/PIL.png";

const services = [
  {
    id: 1,
    icon: arbitrationIcon,
    title: "Arbitration india & International",
    desc: "100+ arbitrations handled; empaneled with DIAC & multiple corporate panels."
  },
  {
    id: 2,
    icon: MediationServicesIcon,
    title: "Mediation Services",
    desc: "Delhi Judicial Academy certified (40 hrs); successfully mediated 10+ disputes."
  },
  {
    id: 3,
    icon: ServiceMatterIcon,
    title: "Service Matter",
    desc: "25+ years Supreme Court practice in civil, criminal & constitutional matters."
  },
  {
    id: 4,
    icon: CorporateLawIcon,
    title: "Corporate Law",
    desc: "Strategic counsel on commercial, property & personal legal issues."
  },
  {
    id: 5,
    icon: CivivlIcon,
    title: "Civil",
    desc: "Comprehensive agreements: employment, sale, lease, partnership & more."
  },
  {
    id: 6,
    icon: CorporationIcon,
    title: "Corporation",
    desc: "Registration & enforcement for patents, trademarks, copyrights & designs."
  },
  {
    id: 7,
    icon: CriminalIcon,
    title: "Criminal",
    desc: "Company formation, compliance, mergers & acquisitions services."
  },
  {
    id: 8,
    icon: PILIcon,
    title: "PIL",
    desc: "Advisory on SEBI, RBI, FEMA & other statutory regulations."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
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
      <div className="pt-16 pb-24 container mx-auto px-6 lg:px-8">
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
        <div
          className="relative mt-12 rounded-lg text-center text-white h-80 bg-cover bg-center flex flex-col justify-center overflow-hidden"
          style={{ backgroundImage: `url(${serviceBg})` }}
        >
          <section
  className="relative bg-cover bg-center"
  style={{ backgroundImage: `url(${serviceBg})` }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 bg-[#0052E1] bg-opacity-60" />

  {/* content wrapper */}
  <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
    <div className="text-center">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
        Streamlined Legal Solutions, Trusted Results
      </h3>
      <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-white/90 mb-6">
        Navigate complex disputes with confidence—benefit from 25+ years of Supreme Court advocacy,
        Supreme Court–certified mediation and DIAC-empaneled arbitration expertise, all tailored to your needs.
      </p>
      <a
        href="#contact"
        className="inline-block px-6 sm:px-8 py-3 bg-white text-[#0052E1] font-medium rounded-md transition-colors duration-300 hover:bg-[#0052E1] hover:text-white"
      >
        Schedule Your Free Consultation
      </a>
    </div>
  </div>
</section>




        </div>
      </div>
    </section>
  );
}
