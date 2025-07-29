import React from "react";
// import heroImage from '../assets/banners/b7.png'; // Banner image temporarily commented out
import { FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center justify-center text-white px-4 pt-24 scroll-mt-24"
      // style={{ backgroundImage: `url(${heroImage})` }} // Banner image temporarily commented out
      style={{ backgroundColor: "#2c7a7b" }} // Temporary teal-ish background color
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-teal-900/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl p-6 rounded-xl">
        <div className="flex justify-center space-x-6 mb-6 text-yellow-300 text-4xl">
          <FaStethoscope />
          <FaHeartbeat />
          <MdLocalPharmacy />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
          We're here to support your health journey
        </h1>
        <p className="text-lg md:text-xl mb-6 text-white/90 font-light">
          Compassionate care, expert professionals, and convenient access—all
          under one roof.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold rounded-full shadow-lg transition duration-300"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
