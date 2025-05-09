// src/components/Plans.jsx
import React from "react";
// SVG/PNG icons ko assets/icons folder mein daal ke yahan import karo
import familyIcon    from "../assets/icons/family-law.png";
import personalIcon  from "../assets/icons/personal-injury.png";
import criminalIcon  from "../assets/icons/criminal-law.png";
import businessIcon  from "../assets/icons/business-law.png";

// plans array ab sirf data rakhega, active flag ko ignore karenge
const plans = [
  {
    id: 1,
    icon: familyIcon,
    subtitle: "Family Law plan",
    title:    "Family Law",
  },
  {
    id: 2,
    icon: personalIcon,
    subtitle: "Personal injury plan",
    title:    "Personal Injury",
  },
  {
    id: 3,
    icon: criminalIcon,
    subtitle: "Criminal plan",
    title:    "Criminal Law",
  },
  {
    id: 4,
    icon: businessIcon,
    subtitle: "Business law plan",
    title:    "Business Law",
  },
];

export default function Plans() {
  return (
    <section className="-mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                     bg-white shadow-lg divide-x divide-gray-200
                     rounded-lg overflow-hidden"
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              // group class se child hover styles apply kar sakte hain
              className="group flex flex-col items-center text-center p-8
                         bg-white text-gray-800
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
