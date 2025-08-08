import React from "react";
import heroVideo from "../assets/videos/3795116439-preview.mp4";
import { FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { MdLocalPharmacy, MdMedicalServices } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RiStethoscopeFill } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white px-4 scroll-mt-24 overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-teal-900/40 to-black/70" />
      <div className="absolute top-8 left-8 bg-red-600 text-white font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
        Opening Soon!
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-3xl px-4 py-10 md:py-16 bg-black/30 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="flex justify-center space-x-6 mb-6 text-yellow-300 text-4xl">
          <FaStethoscope />
          <FaHeartbeat />
          <MdLocalPharmacy />
        </div>
        { /* Opening Soon Banner */ }
        <div className="mb-4">
          <span className="bg-yellow-400 text-teal-900 font-bold px-4 py-1 rounded-full shadow-md animate-bounce">
            Opening Soon!
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
          We're here to support your health journey
        </h1>
        <p className="text-base md:text-xl mb-8 text-white/90 font-light">
          Compassionate care, expert professionals, and convenient access—all under one roof.
        </p>

        {/* Button Group */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/medical-services"
            className="flex items-center gap-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold rounded-full shadow-lg transition"
          >
            <MdMedicalServices className="text-xl" />
            Medical Services
          </Link>
          <Link
            to="/pharmacy-services"
            className="flex items-center gap-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold rounded-full shadow-lg transition"
          >
            <GiMedicines className="text-xl" />
            Pharmacy Services
          </Link>
          { /* <a
            href="#medeo"
            className="flex items-center gap-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold rounded-full shadow-lg transition"
          >
            <RiStethoscopeFill className="text-xl" />
            Book through Medeo
          </a> } */ }
        </div>
        { /* Opening Soon Banner */ }
        <p className="mt-6 text-lg font-semibold text-yellow-300 animate-pulse">
          🌟 Opening Soon! Stay Tuned 🌟
        </p>

      </div>
    </section>
  );
}
