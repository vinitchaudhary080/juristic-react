// src/components/Hero.jsx
import React from "react";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-screen overflow-hidden"
        >
            <div className="absolute inset-0">
                <img
                    src={heroBg}
                    alt="Lawyer statue"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative z-10 container mx-auto px-6 lg:px-8 h-full flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/2 text-center lg:text-left mt-16 lg:mt-0">
                    <h1 className="text-5xl font-serif text-white">
                        Adv.Sangeeta Joshi
                        <br />
                        Supreme Court of India
                    </h1>
                    <p className="mt-4 text-lg text-white">
                        Empaneled Arbitrator – Delhi International Arbitration Centre (DIAC)
                        | Panel Mediator – Supreme Court Mediation Centre (SCMC)
                        | Member – International Council of Jurists, London
                    </p>
                    <a
                        href="#contact"
                        className="mt-8 inline-block px-8 py-3 bg-[#0052E1] text-white rounded-md transition-colors duration-300 hover:bg-white hover:text-[#0052E1]"
                    >
                        Book a Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
