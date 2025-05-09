// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";

// Social icons
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon from "../assets/icons/twitter.png";
import linkedinIcon from "../assets/icons/linkedin.png";

export default function Navbar() {
    const [showTopBar, setShowTopBar] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTopBar(window.scrollY < 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = ["Home", "About", "Services", "Contact"];

    return (
        <header>
            {/* Top Bar */}
            {showTopBar && (
                <div className="bg-[#182B4B] text-white text-sm">
                    <div
                        className="
              container mx-auto px-6 py-2
              flex items-center justify-between
            "
                    >
                        {/* Left side */}
                        <div className="flex items-center space-x-4">
                            {/* Always visible */}
                            <span>
                                <span className="text-[#b3b3b3]">Call Us:</span>{" "}
                                <span className="text-white">+91 8800576424</span>
                            </span>

                            {/* Visible only on sm and up */}
                            <span className="hidden sm:inline">
                                <span className="text-[#b3b3b3]">Email us:</span>{" "}
                                <span className="text-white">sangeetajoshisc@gmail.com</span>
                            </span>
                            <span className="hidden sm:inline">
                                <span className="text-[#b3b3b3]">Our address:</span>{" "}
                                <span className="text-white">
                                    209, C.K. Daphtary Chambers, Supreme Court Complex, New Delhi – 110 001
                                </span>
                            </span>
                        </div>


                        {/* Social Icons (always visible) */}
                        <div className="flex space-x-4">
                            <img src={facebookIcon} alt="Facebook" className="w-4 h-4" />
                            <img src={twitterIcon} alt="Twitter" className="w-4 h-4" />
                            <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            )}

            {/* Main Nav */}
            <nav className="bg-[#f7f7f7] sticky top-0 z-50 shadow-sm">
                <div className="container mx-auto px-6 flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="flex items-center">
                        <img src={logo} alt="Juristic" className="h-8" />
                        <span className="ml-2 text-2xl font-semibold text-gray-800">
                            Juristic
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <ul className="hidden lg:flex items-center space-x-8 text-gray-700">
                        {links.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className="hover:text-gray-900"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden text-gray-700 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-[#f7f7f7]">
                        <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700">
                            {links.map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="block px-4 py-2 hover:text-gray-900"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}
