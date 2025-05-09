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
                    <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="mt-2 text-gray-600">
                        Email, call, or fill the form below—Ms. Joshi responds within 24 hours.
                    </p>
                    <div className="mt-6 space-y-4 text-lg text-gray-800">
                        <p><strong>Office:</strong> 209, C.K. Daphtary Chambers, Supreme Court Complex, New Delhi – 110 001</p>
                        <p><strong>Mobile:</strong> +91 8800576424</p>
                        <p><strong>Email:</strong> <a href="mailto:sangeetajoshisc@gmail.com" className="underline">sangeetajoshisc@gmail.com</a></p>
                    </div>
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

                        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
  <input type="text" placeholder="Your Name" className="border rounded px-4 py-2"/>
  <input type="email" placeholder="Your Email" className="border rounded px-4 py-2"/>
  <input type="tel" placeholder="Phone" className="border rounded px-4 py-2"/>
  <select className="border rounded px-4 py-2">
    <option>Consultation Type</option>
    <option>Arbitration</option>
    <option>Mediation</option>
    <option>Civil Litigation</option>
    <option>Criminal Litigation</option>
  </select>
  <textarea placeholder="How can we assist you?" className="border rounded-lg p-4 md:col-span-2 h-32"></textarea>
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
                    </div>
                </div>
            </div>
        </section>
    )
}
