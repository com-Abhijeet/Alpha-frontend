import { useEffect } from "react";
import Navbar from "../components/Navbar";
// import HeroSection from "../components/HeroSection";
import WhatWeDo from "../components/WhatWeDo";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollAnimation from "react-animate-on-scroll";
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

      <ScrollAnimation
        animateIn="slideInUp"
        duration={1}
        animateOnce
        animateOut="slideOutUp"
      >
        {" "}
        <AboutSection />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="slideInUp"
        duration={1}
        animateOnce
        animateOut="slideOutUp"
      >
        {" "}
        <Services />
      </ScrollAnimation>

      <Portfolio />

      <ScrollAnimation
        animateIn="slideInUp"
        duration={1}
        animateOnce
        animateOut="slideOutUp"
      >
        {" "}
        <Contact />
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default Landing;
