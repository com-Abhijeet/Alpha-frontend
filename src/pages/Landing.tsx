import Navbar from "../components/Navbar";
// import HeroSection from "../components/HeroSection";
import WhatWeDo from "../components/WhatWeDo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection2 from "../components/HeroSection2";
import SpecializationMachine from "../components/SpecializationMachine";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection2 />
      <WhatWeDo />
      <SpecializationMachine />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
