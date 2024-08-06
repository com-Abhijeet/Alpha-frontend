import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js";

import Landing from "./pages/Landing";
import useMuteMedia from "./helpers/useMuteMedia";

// Lazy load the Portfolio component
const Portfolio = lazy(() => import("./pages/Portfolio"));

function App() {
  useMuteMedia();
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
