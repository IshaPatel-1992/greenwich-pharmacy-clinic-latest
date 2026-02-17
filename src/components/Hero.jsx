import React from "react";
import heroImg from "../assets/banners/shutterstock_2502182081.jpg";
import { FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { MdLocalPharmacy, MdMedicalServices } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-24 flex items-center justify-center text-white px-4 scroll-mt-24 overflow-hidden"
    >
      {/* Image Background */}
      <img
        src={heroImg}
        alt="Healthcare background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/75" />

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-3xl text-center px-5 py-10 md:py-14 bg-black/35 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl">

        {/* Icons */}
        <div className="flex justify-center space-x-6 mb-6 text-yellow-300 text-3xl md:text-4xl">
          <FaStethoscope />
          <FaHeartbeat />
          <MdLocalPharmacy />
        </div>

        {/* Accepting Patients Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center bg-yellow-400 text-teal-900 font-bold px-4 py-1 rounded-full shadow-md">
            Accepting New Patients
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
          We’re here to support your health journey
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-xl mb-6 text-white/90 font-light max-w-2xl mx-auto">
          Compassionate care, expert professionals, and convenient access — all under one roof.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/medical-services"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold rounded-full shadow-lg transition
              focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
          >
            <MdMedicalServices className="text-xl" />
            Medical Services
          </Link>

          <Link
            to="/pharmacy-services"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold rounded-full shadow-lg transition
              focus:outline-none focus:ring-4 focus:ring-yellow-300/50"
          >
            <GiMedicines className="text-xl" />
            Pharmacy Services
          </Link>
        </div>

        {/* Phone Numbers Section */}
        <div className="mt-6 space-y-1 text-sm md:text-base">
          <p>
            Clinic:{" "}
            <a
              href="tel:+1(587) 943-9528"
              className="underline font-semibold hover:text-yellow-300 transition"
            >
              (587) 943-9528
            </a>
          </p>
          <p>
            Pharmacy:{" "}
            <a
              href="tel:+1(587) 943-9526"
              className="underline font-semibold hover:text-yellow-300 transition"
            >
              (587) 943-9526
            </a>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-white/75">
          <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            ✔ Walk-in Available
          </span>
          <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            ✔ Prescription Transfers
          </span>
          <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            ✔ On-site Pharmacy
          </span>
        </div>
      </div>
    </section>
  );
}
