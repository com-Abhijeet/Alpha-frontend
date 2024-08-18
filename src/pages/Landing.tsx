import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhatWeDo from "../components/WhatWeDo";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";
// import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Clients from "../components/Clients";
import Portfolio from "../components/Portfolio";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/r4hm69zlng3e7d6x1bvbtkawsym24vps.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <AboutSection />
      <Services />
      <Portfolio />
      <Clients />
      {/* <Testimonials /> */}
      {/* <Team /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
