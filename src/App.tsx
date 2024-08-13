import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy} from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";

import Landing from "./pages/Landing";
import useMuteMedia from "./helpers/useMuteMedia";

import ReactGA from 'react-ga4';
ReactGA.initialize('G-LTC9GWLF3P');


// Lazy load the Portfolio component
const Portfolio = lazy(() => import("./components/Portfolio"));


function App() {
  useMuteMedia();
  ReactGA.send({
    hitType : "pageview",
    page : "/",
    title : "Home Page"
  });
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/portfolio"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Portfolio />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
