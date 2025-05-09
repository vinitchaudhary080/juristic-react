// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";

// Social icons
import facebookIcon  from "../assets/icons/facebook.png";
import twitterIcon   from "../assets/icons/twitter.png";
import linkedinIcon  from "../assets/icons/linkedin.png";



export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowTopBar(window.scrollY < 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Services","Contact"];

  return (
    <header>
      {/* Top Bar */}
      {showTopBar && (
        <div className="bg-[#212121] text-white text-sm">
          <div className="container mx-auto px-6 flex items-center justify-between h-8">
            <div className="flex space-x-6">
              <span>Call Us: 548978478</span>
              <span>Email us: demo@example.com</span>
              <span>Our address: 45 Dreem street Austria</span>
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
          <a href="#" className="flex items-center">
            <img src={logo} alt="Juristic" className="h-8" />
            <span className="ml-2 text-2xl font-semibold text-gray-800">Juristic</span>
          </a>

          {/* Menu Links */}
          <ul className="hidden lg:flex items-center space-x-8 text-gray-700">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-gray-900">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
