import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutuspg" element={<AboutUs />} />
        {/* Add more pages here */}
      </Routes>
      <Footer />
    </Router>
  );
}
