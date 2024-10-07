import { useEffect } from "react";
import Navbar from "../components/Navbar";
// import HeroSection from "../components/HeroSection";
import WhatWeDo from "../components/WhatWeDo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection2 from "../components/HeroSection2";

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
      <HeroSection2 />
      <WhatWeDo />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
