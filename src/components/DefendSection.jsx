// src/components/DefendSection.jsx
import React from "react";


const steps = [
  {
    id: 1,
    title: "Comprehensive Case Assessment",
    desc: `As a Supreme Court advocate (Regd. No. 3856/99, SCBA: 1082/J/608/RES), Ms. Joshi conducts an in-depth review of your case, identifying key strengths, risks, and the optimal legal pathway forward :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}.`,
  },
  {
    id: 2,
    title: "Strategic Arbitration & Mediation",
    desc: `Empaneled Arbitrator at DIAC and Senior Arbitration Council member (2013–2020), plus MCPC-trained Mediator on the Supreme Court panel, she crafts dispute-resolution strategies that save time and cost :contentReference[oaicite:2]{index=2}.`,
  },
  {
    id: 3,
    title: "Vigorous Courtroom Representation",
    desc: `Drawing on 25+ years of Supreme Court practice, she delivers persuasive pleadings and oral arguments in high-stakes appeals and original petitions—securing landmark judgments on behalf of clients :contentReference[oaicite:3]{index=3}:contentReference[oaicite:4]{index=4}.`,
  },
];

export default function DefendSection() {
  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12">
        {/* Left: Steps */}
        <div className="w-full lg:w-1/2 space-y-6">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`
                group relative
                p-6 bg-white rounded-lg shadow-md
                hover:bg-blue-900 transition-colors duration-300
                flex justify-between items-start
                ${idx === 1 ? "lg:ml-16" : ""}
              `}
            >
              <div className="flex-1 pr-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-200 transition-colors duration-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <span className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                {String(step.id).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Heading, paragraph & button */}
        <div className="w-full lg:w-1/2 self-center flex flex-col items-start space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900">
            Your rights matter, we are here to defend them
          </h2>
          <p className="text-gray-600 leading-relaxed">
            From the first consultation to the final judgment, Advocate Ms. Sangeeta Joshi
            brings strategic insight and unwavering advocacy to every matter, ensuring
            your interests are protected at every stage.
          </p>
          <a
            href="#consult"
            className="self-start mt-8 inline-block px-8 py-3 bg-[#0052E1] text-white rounded-md border border-transparent transition-colors duration-300 hover:bg-white hover:text-[#0052E1] hover:border-[#0052E1]"
          >
            Schedule Your Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
