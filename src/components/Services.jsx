// src/components/Services.jsx
import React from "react";
import serviceBg      from "../assets/images/services-bg.jpg";    // left card background
import attorneysIcon  from "../assets/icons/attorneys.png";
import defenceIcon    from "../assets/icons/scales.png";
import successIcon    from "../assets/icons/case-win.png";

const services = [
  {
    id: 1,
    icon: attorneysIcon,
    title: "Skilled Attorneys",
    desc: "Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull",
  },
  {
    id: 2,
    icon: defenceIcon,
    title: "Legal Defence",
    desc: "Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull",
  },
  {
    id: 3,
    icon: successIcon,
    title: "99% case win",
    desc: "Muff that covered the whole of her lower arm towards the viewer gregor then turned to look out the window at the dull",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          
          {/* Highlight Card */}
          <div className="relative w-full lg:w-1/4 h-96 rounded-lg overflow-hidden">
            <img
              src={serviceBg}
              alt="Highlight"
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
            <div className="relative z-10 h-full p-8 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-white leading-snug">
                Some few steps that you need to get the best services from juristic
              </h3>
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-white text-gray-800 font-medium rounded"
              >
                Contact With Us
              </a>
            </div>
          </div>

          {/* Service Cards */}
          {services.map((s) => (
            <div
              key={s.id}
              className="w-full lg:w-1/4 border border-gray-200 rounded-lg p-8 flex flex-col"
            >
              <img
                src={s.icon}
                alt={s.title}
                className="w-12 h-12 mb-4 mx-auto text-yellow-500"
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
