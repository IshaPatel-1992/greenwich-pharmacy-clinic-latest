import React from "react";
import heroImg from "../assets/banners/shutterstock_2502182081.jpg";
import { FaStethoscope, FaHeartbeat, FaClinicMedical } from "react-icons/fa";
import { MdLocalPharmacy, MdMedicalServices } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-24 md:pt-28 flex items-center justify-center text-white px-4 scroll-mt-24 overflow-hidden"
    >
      {/* Image Background */}
      <img
        src={heroImg}
        alt="Healthcare background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Softer luxury overlay + vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-teal-950/35 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),rgba(0,0,0,0.0)_45%,rgba(0,0,0,0.25)_75%)]" />

      {/* Subtle ambient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl" />

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-3xl text-center px-6 py-11 md:px-10 md:py-14 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
        {/* Icon Row (more refined) */}
        <div className="flex justify-center gap-6 mb-7 text-yellow-300/90 text-3xl md:text-4xl">
          <FaStethoscope />
          <FaHeartbeat />
          <MdLocalPharmacy />
        </div>

        {/* Premium badge */}
        <div className="mb-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/15 text-yellow-200 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide">
            Accepting New Patients
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
          </span>
        </div>

        {/* Headline (luxury typography + spacing) */}
        <h1 className="text-[2rem] leading-[1.15] md:text-6xl md:leading-[1.05] font-extrabold tracking-tight mb-5">
          We’re here to support{" "}
          <span className="text-yellow-200">your health</span>{" "}
          journey
        </h1>

        {/* Subtext (calmer + narrower for elegance) */}
        <p className="text-base md:text-xl text-white/85 font-light max-w-xl mx-auto mb-9 leading-relaxed">
          Compassionate care, expert professionals, and seamless access — thoughtfully
          delivered under one roof.
        </p>

        {/* Primary CTAs (sleeker buttons) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/medical-services"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3.5 rounded-full
              bg-yellow-300 text-teal-950 font-semibold shadow-lg
              hover:bg-yellow-200 transition
              focus:outline-none focus:ring-4 focus:ring-yellow-200/40"
          >
            <MdMedicalServices className="text-xl" />
            Medical Services
          </Link>

          <Link
            to="/pharmacy-services"
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-7 py-3.5 rounded-full
              bg-white/10 text-white font-semibold border border-white/15
              hover:bg-white/15 transition
              focus:outline-none focus:ring-4 focus:ring-white/20"
          >
            <GiMedicines className="text-xl" />
            Pharmacy Services
          </Link>
        </div>

        {/* Contact cards (more luxury + balanced) */}
        <div className="mt-9 grid sm:grid-cols-2 gap-4">
          {/* Clinic */}
          <a
            href="tel:+15879439528"
            className="group flex items-center gap-4 rounded-2xl p-4 md:p-5
              bg-white/5 hover:bg-white/10 border border-white/10 transition
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            <div className="h-11 w-11 rounded-full grid place-items-center bg-yellow-300/20 border border-yellow-200/20">
              <FaClinicMedical className="text-yellow-200 text-lg" />
            </div>
            <div className="text-left">
              <p className="text-xs md:text-sm text-white/70">Medical Clinic</p>
              <p className="text-lg font-semibold tracking-wide group-hover:text-yellow-200 transition">
                (587) 943-9528
              </p>
              <p className="text-xs text-white/60">Tap to call</p>
            </div>
          </a>

          {/* Pharmacy */}
          <a
            href="tel:+15879439526"
            className="group flex items-center gap-4 rounded-2xl p-4 md:p-5
              bg-white/5 hover:bg-white/10 border border-white/10 transition
              shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >
            <div className="h-11 w-11 rounded-full grid place-items-center bg-teal-300/15 border border-teal-200/15">
              <MdLocalPharmacy className="text-teal-100 text-xl" />
            </div>
            <div className="text-left">
              <p className="text-xs md:text-sm text-white/70">Pharmacy</p>
              <p className="text-lg font-semibold tracking-wide group-hover:text-yellow-200 transition">
                (587) 943-9526
              </p>
              <p className="text-xs text-white/60">Tap to call</p>
            </div>
          </a>
        </div>

        {/* Trust indicators (refined chips) */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs md:text-sm text-white/75">
          {["Walk-in Available", "Prescription Transfers", "On-site Pharmacy"].map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
