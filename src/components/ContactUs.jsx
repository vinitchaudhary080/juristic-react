// src/components/ContactUs.jsx
import React, { useState } from "react"
import emailIcon from "../assets/icons/email.png"
import phoneIcon from "../assets/icons/phone.png"

export default function ContactUs() {
  const [message, setMessage] = useState("")

  return (
    <section id="contact" className="bg-blue-50 py-24">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
        
        {/* Left side */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-700 text-base lg:text-lg">
            Email, call, or complete the form to learn how Snappy can solve your messaging problem.
          </p>
          <p className="text-gray-900 font-medium">info@snappy.io</p>
          <p className="text-gray-900 font-medium">321-221-231</p>
          <a href="#" className="underline text-blue-600">Customer Support</a>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Customer Support</h4>
              <p className="text-gray-600 text-sm mt-2">
                Our support team is available around the clock to address any concerns or queries you may have.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Feedback and Suggestions</h4>
              <p className="text-gray-600 text-sm mt-2">
                We value your feedback and are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Media Inquiries</h4>
              <p className="text-gray-600 text-sm mt-2">
                For media-related questions or press inquiries, please contact us at media@snappyapp.com.
              </p>
            </div>
          </div>
        </div>

        {/* Right side: the form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
            <p className="text-gray-600 text-sm mt-1">You can reach us anytime</p>

            <form className="mt-6 space-y-4">
              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border border-gray-200 rounded-full px-4 py-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border border-gray-200 rounded-full px-4 py-2 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <img
                  src={emailIcon}
                  alt="Email icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-gray-200 rounded-full pl-12 pr-4 py-2 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <select className="bg-transparent focus:outline-none text-gray-700">
                    <option>+91</option>
                    {/* <option>+44</option>
                    <option>+91</option> */}
                  </select>
                  {/* <img
                    src={phoneIcon}
                    alt="Phone icon"
                    className="w-5 h-5 text-gray-400"
                  /> */}
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full border border-gray-200 rounded-full pl-20 pr-4 py-2 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="How can we help?"
                  maxLength={600}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-4 pt-4 pr-12 h-32 resize-none focus:outline-none"
                />
                <span className="absolute bottom-4 right-4 text-sm text-gray-400">
                  {message.length}/600
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition"
              >
                Submit
              </button>

              {/* Terms */}
              <p className="text-center text-gray-500 text-xs">
                By contacting us, you agree to our{" "}
                <a href="#" className="underline">
                  Terms of service
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
