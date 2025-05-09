// 2) Navbar + Hero test karo
import Navbar from "./components/Navbar";
import Hero   from "./components/Hero";
import Services from "./components/Services";
import Plans from "./components/Plans";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Plans />
      <About />
      <Services />
      <Testimonials />
      <ContactUs />
    </>
  );
}
