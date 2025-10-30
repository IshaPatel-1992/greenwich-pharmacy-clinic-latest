import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaSyringe } from "react-icons/fa";
import { Link } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";
import MedicalServicesPage from './pages/MedicalServicesPage';
import PharmacyServicesPage from './pages/PharmacyServicesPage';

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
        <Route path="/medical-services" element={<MedicalServicesPage />} />
        <Route path="/pharmacy-services" element={<PharmacyServicesPage />} />
        {/* Add more pages here */}
      </Routes>
      {/* Floating Flu Vaccine Button — visible on ALL pages */}
      <Link
        to="/pharmacy-services"
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold px-5 py-3 rounded-full shadow-lg flex items-center gap-2 animate-bounce z-50"
      >
        <FaSyringe className="text-xl" />
        Flu Shots Available
      </Link>
      <Footer />
    </Router>
  );
}
