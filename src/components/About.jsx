// src/components/About.jsx
import React from "react";
import iconHome    from "../assets/icons/home-icon.png";
import aboutImg    from "../assets/images/about-lawyer.jpg";
// import signature   from "../assets/images/signature.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

        {/* Left: heading & intro */}
        <div className="w-full lg:w-5/12 space-y-6 text-left">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <img src={iconHome} alt="Icon" className="w-6 h-6 text-yellow-500"/>
            </div>
            <span className="ml-4 text-sm font-semibold text-yellow-500 uppercase tracking-wider">
              About Juristic
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 leading-snug">
            We Are The <br/>
            Most Populer Law Firm With <br/>
            Various Law Services!
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum
          </p>
          <a
            href="#"
            className="inline-flex items-center text-yellow-500 font-medium"
          >
            Read More About us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Center: image */}
        <div className="w-full lg:w-4/12">
          <img
            src={aboutImg}
            alt="About Juristic"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right: testimonial */}
        <div className="w-full lg:w-3/12 space-y-4 text-left">
          <p className="text-gray-600 text-base lg:text-lg">
            <span className="float-left text-5xl lg:text-6xl font-serif text-blue-600 leading-none mr-2">
              M
            </span>
            aecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien libero
          </p>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Michel Jhon</h3>
            <p className="text-gray-500 text-sm">- CEO of the company</p>
          </div>
          {/* <img
            src={signature}
            alt="Signature"
            className="w-32 h-auto"
          /> */}
        </div>

      </div>
    </section>
  );
}
