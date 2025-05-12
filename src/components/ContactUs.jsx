// src/components/ContactUs.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import emailIcon from "../assets/icons/email.png";
import phoneIcon from "../assets/icons/phone.png";

export default function ContactUs() {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // "SUCCESS" or "ERROR"

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("Missing EmailJS env vars:", { serviceID, templateID, publicKey });
      setStatus("ERROR");
      return;
    }

    emailjs
      .sendForm(
        serviceID,
        templateID,
        formRef.current,
        publicKey
      )
      .then(
        () => {
          setStatus("SUCCESS");
          e.target.reset();
        },
        (err) => {
          console.error("EmailJS error:", err);
          setStatus("ERROR");
        }
      );
  };

  return (
    <section id="contact" className="bg-[#F7F7F7] py-24">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        {/* Left side */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-2 text-gray-600">
            Email, call, or fill the form below—Ms. Joshi responds within 24 hours.
          </p>
          <div className="mt-6 space-y-4 text-lg text-gray-800">
            <p>
              <strong>Office:</strong> 209, C.K. Daphtary Chambers, Supreme Court Complex, New Delhi – 110 001
            </p>
            <p>
              <strong>Mobile:</strong> +91 8800576424
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:sangeetajoshisc@gmail.com" className="underline">
                sangeetajoshisc@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right side: the form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900">Contact Form</h3>
            <p className="text-gray-600 text-sm mt-1">You can reach us anytime</p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                name="from_name"
                type="text"
                placeholder="Your Name"
                required
                className="border rounded px-4 py-2"
              />
              <input
                name="from_email"
                type="email"
                placeholder="Your Email"
                required
                className="border rounded px-4 py-2"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                className="border rounded px-4 py-2"
              />
              <select name="service" className="border rounded px-4 py-2">
                <option value="">Consultation Type</option>
                <option value="Arbitration">Arbitration</option>
                <option value="Mediation">Mediation</option>
                <option value="Civil Litigation">Civil Litigation</option>
                <option value="Criminal Litigation">Criminal Litigation</option>
              </select>
              <textarea
                name="message"
                placeholder="How can we assist you?"
                required
                className="border rounded-lg p-4 md:col-span-2 h-32"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-[#0052E1] text-white font-medium rounded py-3
                           border-2 border-transparent
                           transition-colors duration-300
                           hover:bg-white hover:text-[#0052E1] hover:border-[#0052E1]"
              >
                Send Message
              </button>
            </form>

            {/* Feedback */}
            {status === "SUCCESS" && (
              <p className="mt-4 text-green-600">Message sent! Thank you.</p>
            )}
            {status === "ERROR" && (
              <p className="mt-4 text-red-600">
                Oops, something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
