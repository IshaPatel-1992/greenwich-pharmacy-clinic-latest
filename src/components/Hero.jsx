import React from "react";
import heroVideo from "../assets/videos/1076374976-preview.mp4";
import { FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { MdLocalPharmacy, MdMedicalServices } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";
import qrCode from "../assets/QRCode/QRCodeEMR.png";

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

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl px-4 py-10 md:py-16 bg-black/30 backdrop-blur-sm rounded-2xl shadow-lg">
        {/* Left Content: Text, Icons, Buttons */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-6 mb-6 text-yellow-300 text-4xl">
            <FaStethoscope />
            <FaHeartbeat />
            <MdLocalPharmacy />
          </div>

          <div className="mb-6">
            <span className="bg-yellow-400 text-teal-900 font-bold px-4 py-1 rounded-full shadow-md animate-bounce">
              Accepting New Patients!
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
            We're here to support your health journey
          </h1>
          <p className="text-base md:text-xl mb-8 text-white/90 font-light max-w-xl">
            Compassionate care, expert professionals, and convenient access—all under one roof.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <Link
              to="/medical-services"
              className="flex items-center gap-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              <MdMedicalServices className="text-xl" />
              Medical Services
            </Link>
            <Link
              to="/pharmacy-services"
              className="flex items-center gap-2 px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              <GiMedicines className="text-xl" />
              Pharmacy Services
            </Link>
          </div>
        </div>

        {/* Right Content: QR Code */}
        <div className="mt-6 md:mt-0 md:ml-10 flex flex-col items-center">
          <a
            href="https://greenwichmedicalclinic.inputhealth.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={qrCode}
              alt="Scan QR code to book an appointment"
              className="w-28 h-28 md:w-36 md:h-36 shadow-lg rounded-xl hover:scale-105 transition-transform"
            />
          </a>
          <p className="mt-2 text-white/80 text-sm md:text-base text-center md:text-left">
            Scan to book your appointment instantly
          </p>
        </div>
      </div>
    </section>
  );
}
