import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css/animate.compat.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";

import Landing from "./pages/Landing";
import useMuteMedia from "./helpers/useMuteMedia";

import ReactGA from "react-ga4";
import Portfolio from "./pages/Portfolio";
import AboutSection from "./pages/AboutSection";
import Services from "./pages/Services";

ReactGA.initialize("G-LTC9GWLF3P");
function App() {
  useMuteMedia();
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home Page",
  });

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
