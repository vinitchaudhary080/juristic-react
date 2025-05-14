// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

// Social icons
import facebookIcon from "../assets/icons/facebook.png";
import twitterIcon  from "../assets/icons/twitter.png";
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
          <div className="container mx-auto px-6 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span>
                <span className="text-[#b3b3b3]">Email us:</span>{" "}
                <span className="text-white">sangeetajoshisc@gmail.com</span>
              </span>
             
             
            </div>
            <div className="flex space-x-4">
              <img src={facebookIcon} alt="Facebook" className="w-4 h-4" />
              <img src={twitterIcon}  alt="Twitter"  className="w-4 h-4" />
              <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
            </div>
          </div>
        </div>
      )}

      {/* Main Nav */}
      <nav className="bg-[#f7f7f7] sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Juristic" className="h-8" />
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Adv.Sangeeta Joshi
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center space-x-8 text-gray-700">
            {links.map((link) => (
              <li key={link}>
                {link === "Home" ? (
                  <Link to="/" className="hover:text-gray-900">
                    {link}
                  </Link>
                ) : link === "About" ? (
                  <Link to="/about" className="hover:text-gray-900">
                    {link}
                  </Link>
                ) : (
                  <a href={`#${link.toLowerCase()}`} className="hover:text-gray-900">
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                 stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden
                      ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Off-canvas Mobile Menu */}
        <div
          className={`
            fixed top-0 right-0 h-full w-64 bg-[#f7f7f7] shadow-lg transition-transform duration-300 lg:hidden
            ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="p-4 flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                   stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col space-y-4 px-6">
            {links.map((link) => (
              <li key={link}>
                {link === "Home" ? (
                  <Link to="/" className="block text-lg text-gray-700 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    {link}
                  </Link>
                ) : link === "About" ? (
                  <Link to="/about" className="block text-lg text-gray-700 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    {link}
                  </Link>
                ) : (
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block text-lg text-gray-700 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
