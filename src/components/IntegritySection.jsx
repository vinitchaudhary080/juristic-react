import React, { useState } from "react";
import integrityImg from "../assets/images/integrity-section.jpg";

export default function IntegritySection() {
  const [openItem, setOpenItem] = useState("proven");
  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <section id="integrity" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12">
        <div className="w-full lg:w-1/2 self-start flex-shrink-0">
          <img
            src={integrityImg}
            alt="Ms. Joshi in consultation"
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            We uphold the highest standards of integrity
          </h2>
          <p className="text-gray-600 mb-8">
            Advocate Ms. Sangeeta Joshi brings over 25 years at the Supreme Court of India,
            combining deep courtroom experience with recognized certification in mediation and arbitration.
          </p>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <button
                onClick={() => toggleItem("proven")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  Proven track record
                </span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    openItem === "proven" ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
              {openItem === "proven" && (
                <p className="mt-4 text-gray-600">
                  • 25+ years of Supreme Court practice in civil, criminal & constitutional matters.<br />
                  • Life Member, Supreme Court Bar Association (Membership No. J-00608/RES dated 07.09.2011).<br />
                  • Empaneled Arbitrator at Delhi International Arbitration Centre (DIAC), handling 100+ cases.
                </p>
              )}
            </div>
            <div className="border-b pb-4">
              <button
                onClick={() => toggleItem("mediator")}
                className="w-full flex justify-between items-center py-2 text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  Certified Mediator
                </span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    openItem === "mediator" ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
              {openItem === "mediator" && (
                <p className="mt-4 text-gray-600">
                  • 40-hour mediation training (Concepts & Techniques) at Delhi Judicial Academy (March 2022).<br />
                  • Panel Mediator, Supreme Court Mediation Centre (SCMC) – Order dated 09.02.2023.<br />
                  • Successfully mediated 10+ disputes under SCMC and MCPC, Supreme Court of India.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
