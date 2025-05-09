// src/components/Testimonials.jsx
import React from "react";
import quoteCircle    from "../assets/icons/quote-circle.png";
import quoteOutline   from "../assets/icons/quote-outline.png";
import client1        from "../assets/images/client1.jpg";
import client2        from "../assets/images/client2.jpg";

const testimonials = [
  {
    id: 1,
    img: client1,
    name: "Rajiv Mehta",
    role: "CEO, Mehta Industries",
    text: `Ms. Joshi’s arbitration award in our dispute was thorough, fair, and delivered ahead of schedule. Highly recommend her expertise.`,
  },
  {
    id: 2,
    img: client2,
    name: "Priya Verma",
    role: "Corporate Counsel",
    text: `Her mediation skills helped us settle a 5-year family property dispute amicably. Truly a life-changer.`,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left column */}
        <div className="w-full lg:w-5/12 space-y-6">
          {/* Subtitle */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-[#0052E1] flex items-center justify-center">
              <img src={quoteCircle} alt="Testimonials" className="w-6 h-6"/>
            </div>
            <span className="ml-4 text-sm font-semibold text-[#0052E1] uppercase tracking-wider">
              Testimonials
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 leading-snug">
            What Our Clients Say <br /> About Us
          </h2>
          {/* Intro text */}
          <p className="text-gray-600 text-base lg:text-lg">
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunct showed a lady fitted out
          </p>
          {/* Pagination dots */}
          <div className="flex items-center space-x-2">
            <span className="w-8 h-2 rounded-full bg-[#0052E1]"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="space-y-6">
              {/* Quote icon */}
              <div className="flex justify-center lg:justify-start">
                <img src={quoteOutline} alt="" className="w-8 h-8 text-yellow-500"/>
              </div>
              {/* Testimonial text */}
              <p className="text-gray-600 text-base leading-relaxed">
                {t.text}
              </p>
              {/* Client info */}
              <div className="flex items-center space-x-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                  <p className="text-blue-600 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
