import React from "react";
import CorporationIcon from "../assets/icons/Corporation.png";
import arbitrationIcon from "../assets/icons/Arbitration india.png";
import CriminalIcon from "../assets/icons/Criminal.png";
import PILIcon from "../assets/icons/PIL.png";

const plans = [
  {
    id: 1,
    icon: CorporationIcon,
    subtitle: "Civil Cases",
    title: "Corporate Law ",
  },
  {
    id: 2,
    icon: arbitrationIcon,
    subtitle: "Arbitration India & International",
    title: "ADR",
  },
  {
    id: 3,
    icon: CriminalIcon,
    subtitle: "Criminal Cases",
    title: "Criminal Law",
  },
  {
    id: 4,
    icon: PILIcon,
    subtitle: "Public Interst litigation ",
    title: "PIL",
  },
];

export default function Plans() {
  return (
    <section className="-mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                     bg-[#F7F7F7] shadow-lg divide-x divide-gray-200
                     rounded-lg overflow-hidden"
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="group flex flex-col items-center text-center p-8
                         bg-[#F7F7F7] text-gray-800
                         hover:bg-[#0052E1] hover:text-white
                         transition-colors duration-300 ease-in-out"
            >
              <img
                src={plan.icon}
                alt={`${plan.title} icon`}
                className="w-12 h-12 mb-4 filter transition duration-300
                           group-hover:brightness-150"
              />
              <span
                className="text-sm mb-1 text-gray-500
                           transition-colors duration-300
                           group-hover:text-white/80"
              >
                {plan.subtitle}
              </span>
              <h3
                className="text-lg font-semibold
                           transition-colors duration-300
                           group-hover:text-white"
              >
                {plan.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
