// src/components/About.jsx
import React from "react";
import iconHome from "../assets/icons/home-icon.png";
import aboutImg from "../assets/images/about-lawyer.jpg";
// import signature   from "../assets/images/signature.png";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

                {/* Left: heading & intro */}
                <div className="w-full lg:w-5/12 space-y-6 text-left">
                    <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-[#0052E1] flex items-center justify-center">
                            <img src={iconHome} alt="Icon" className="w-6 h-6 text-yellow-500" />
                        </div>
                        <span className="ml-4 text-sm font-semibold text-[#0052E1] uppercase tracking-wider">
                            About Juristic
                        </span>
                    </div>
                    <h2 className="text-3xl font-serif text-gray-900">About Ms. Sangeeta Joshi</h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Ms. Sangeeta Joshi is a distinguished Advocate at the Supreme Court of India
                        with over 25 years of practice in civil, criminal, arbitration, and mediation.
                        She currently serves as:
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center text-[#0052E1] font-medium"
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
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
                    <ul className="mt-6 list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            <strong>Empaneled Arbitrator</strong> at Delhi International Arbitration Centre (DIAC) [1][2]
                        </li>
                        <li>
                            <strong>Panel Mediator</strong> of Supreme Court Mediation Centre (SCMC), vide order dated 09.02.2023 [3][4]
                        </li>
                        <li><strong>Member</strong> of International Council of Jurists, London</li>
                        <li><strong>National President</strong>, Rajya Mahila Adhivakta Sangh</li>
                        <li>Ex-Director, Madhya Pradesh Education Board</li>
                        <li>Ex-Executive Member, Rani Durgavati Vishwavidyalaya (M.P.)</li>
                    </ul>

                    {/* Footnotes */}
                    <div className="mt-4 text-sm text-gray-500">
                        <p>[1] DIAC Empanelment Certificate</p>
                        <p>[2] Name update on DIAC website</p>
                        <p>[3] Supreme Court Mediation Centre appointment letter dated 09.02.2023</p>
                        <p>[4] SCMC official order document</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
