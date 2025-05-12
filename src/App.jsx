import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import Plans        from "./components/Plans";
import AboutSection from "./components/About";
import Services     from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactUs    from "./components/ContactUs";
import AboutPage    from "./components/AboutPage";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Plans />
              <AboutSection />
              <Services />
              <Testimonials />
              <ContactUs />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
