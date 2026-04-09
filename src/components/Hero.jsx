import React from "react";
import { FaClinicMedical, FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fffdf7] via-white to-[#f4fbf9] min-h-[92vh] flex items-center px-6 pt-32 md:pt-36 pb-24">
      {/* Top-left botanical branch */}
      <div className="absolute top-0 left-0 w-64 md:w-80 opacity-20 pointer-events-none">
        <svg viewBox="0 0 300 220" className="w-full h-full">
          <path
            d="M10 20 C60 60, 90 80, 140 120 C180 150, 220 170, 290 210"
            stroke="#0f766e"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="82" cy="72" rx="16" ry="8" fill="#fde68a" transform="rotate(-28 82 72)" />
          <ellipse cx="118" cy="102" rx="15" ry="7" fill="#fde68a" transform="rotate(18 118 102)" />
          <ellipse cx="156" cy="132" rx="14" ry="7" fill="#99f6e4" transform="rotate(-20 156 132)" />
          <ellipse cx="205" cy="166" rx="16" ry="8" fill="#fde68a" transform="rotate(24 205 166)" />
        </svg>
      </div>

      {/* Bottom-right botanical accent */}
      <div className="absolute bottom-20 right-0 w-56 md:w-72 opacity-15 pointer-events-none">
        <svg viewBox="0 0 260 200" className="w-full h-full">
          <path
            d="M20 180 C80 140, 130 110, 240 20"
            stroke="#0f766e"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="96" cy="118" rx="15" ry="7" fill="#fde68a" transform="rotate(-30 96 118)" />
          <ellipse cx="128" cy="94" rx="14" ry="7" fill="#99f6e4" transform="rotate(25 128 94)" />
          <ellipse cx="168" cy="66" rx="15" ry="7" fill="#fde68a" transform="rotate(-18 168 66)" />
        </svg>
      </div>

      {/* Soft ambient glows */}
      <div className="absolute -top-16 right-20 h-52 w-52 rounded-full bg-yellow-100 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 left-20 h-56 w-56 rounded-full bg-teal-100 blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_.85fr] gap-10 items-center">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-50 text-teal-700 px-4 py-1.5 text-sm font-medium mb-5">
            Spring Wellness at Greenwich
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-[1.1]">
            Compassionate Care for{" "}
            <span className="text-teal-700">You and Your Family</span>
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
            From walk-in visits to pharmacy support, Greenwich Medical Clinic &
            Pharmacy makes care convenient, personal, and accessible.
          </p>

          {/* Service chips */}
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <FaStethoscope className="text-teal-600" />
              Walk-in Clinic
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <MdLocalPharmacy className="text-teal-600" />
              Pharmacy Services
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <FaHeartbeat className="text-teal-600" />
              Preventive Care
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <GiMedicines className="text-teal-600" />
              Prescription Support
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/medical-services"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-white font-semibold hover:bg-teal-700 transition"
            >
              Medical Services
            </Link>
            <Link
              to="/pharmacy-services"
              className="inline-flex items-center justify-center rounded-full border border-teal-200 bg-white px-6 py-3 text-teal-700 font-semibold hover:bg-teal-50 transition"
            >
              Pharmacy Services
            </Link>
          </div>

          {/* Contact cards */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <a
              href="tel:+15879439528"
              className="group flex items-center gap-4 rounded-2xl bg-white border border-slate-200 shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="h-11 w-11 rounded-full grid place-items-center bg-teal-50">
                <FaClinicMedical className="text-teal-700" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-500">Medical Clinic</p>
                <p className="text-lg font-semibold text-slate-800">(587) 943-9528</p>
              </div>
            </a>

            <a
              href="tel:+15879439526"
              className="group flex items-center gap-4 rounded-2xl bg-white border border-slate-200 shadow-sm p-4 hover:shadow-md transition"
            >
              <div className="h-11 w-11 rounded-full grid place-items-center bg-yellow-50">
                <MdLocalPharmacy className="text-teal-700 text-xl" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-500">Pharmacy</p>
                <p className="text-lg font-semibold text-slate-800">(587) 943-9526</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right side: minimal decorative panel */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-md min-h-[320px] rounded-[32px] border border-white/70 bg-white/60 backdrop-blur-sm shadow-[0_20px_60px_rgba(15,118,110,0.08)]">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-yellow-50/80 via-white to-teal-50/60" />
            <div className="relative p-10">
              <div className="inline-flex items-center rounded-full bg-teal-50 text-teal-700 px-4 py-1.5 text-sm font-medium border border-teal-100">
                Accepting New Patients
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-800">
                Care that feels calm, local, and connected
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/90 border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Hours</p>
                  <p className="mt-1 font-semibold text-slate-800">Mon – Fri: 9am – 5pm</p>
                </div>

                <div className="rounded-2xl bg-white/90 border border-slate-200 p-4">
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    45 Greenbriar Dr NW, Unit #109, Calgary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curved divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 180"
          className="block w-full h-[90px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160 C220,70 420,40 720,100 C980,150 1180,170 1440,90 L1440,180 L0,180 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}