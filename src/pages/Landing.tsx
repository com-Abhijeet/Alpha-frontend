import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhatWeDo from "../components/WhatWeDo";
import AboutSection from "../components/AboutSection";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Clients from "../components/Clients";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <AboutSection />
      <Services />
      <Clients />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Landing;
