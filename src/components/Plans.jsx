// src/components/Plans.jsx
import React from "react";
// Apni actual SVG/PNG icons ko assets/icons folder mein daal ke yahan import karo
import familyIcon    from "../assets/icons/family-law.png";
import personalIcon  from "../assets/icons/personal-injury.png";
import criminalIcon  from "../assets/icons/criminal-law.png";
import businessIcon  from "../assets/icons/business-law.png";

const plans = [
  {
    id: 1,
    icon: familyIcon,
    subtitle: "Family Law plan",
    title:    "Family Law",
    active:   false,
  },
  {
    id: 2,
    icon: personalIcon,
    subtitle: "Personal injury plan",
    title:    "Personal Injury",
    active:   false,
  },
  {
    id: 3,
    icon: criminalIcon,
    subtitle: "Criminal plan",
    title:    "Criminal Law",
    active:   true,    // isko gold background milega
  },
  {
    id: 4,
    icon: businessIcon,
    subtitle: "Business law plan",
    title:    "Business Law",
    active:   false,
  },
];

export default function Plans() {
  return (
    <section className="-mt-16 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                        bg-white shadow-lg divide-x divide-gray-200
                        rounded-lg overflow-hidden">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`
                flex flex-col items-center text-center p-8
                ${plan.active
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-gray-800"}
              `}
            >
              <img
                src={plan.icon}
                alt={plan.title + " icon"}
                className={`w-12 h-12 mb-4
                  ${plan.active ? "filter brightness-150" : ""}
                `}
              />
              <span
                className={`text-sm mb-1 ${
                  plan.active ? "text-white/80" : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </span>
              <h3
                className={`text-lg font-semibold ${
                  plan.active ? "text-white" : "text-gray-800"
                }`}
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
