import React from "react";
import { FaClinicMedical, FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f7fffd] via-white to-[#eef8f6] px-6 pt-28 md:pt-32 pb-12">
      <div className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-teal-100 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-52 w-52 rounded-full bg-cyan-100 blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Compact Notice */}
        <div className="mx-auto mb-5 max-w-4xl rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900 shadow-sm">
          <p className="leading-relaxed">
            <span className="font-semibold">Notice:</span> Doctor will be away from{" "}
            <strong>May 15–20</strong>, and both the clinic & pharmacy will be closed on{" "}
            <strong>May 18</strong> for Victoria Day.
          </p>
        </div>

        <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 text-teal-700 px-4 py-1.5 text-sm font-medium">
          Accepting New Patients
        </span>

        <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight">
          Your Local Clinic & Pharmacy{" "}
          <span className="text-teal-700">in NW Calgary</span>
        </h1>

        <p className="mt-4 mx-auto max-w-3xl text-base md:text-lg text-slate-600 leading-relaxed">
          Greenwich Medical Clinic & Pharmacy provides accessible healthcare,
          walk-in support, prescription services, and ongoing care for individuals
          and families.
        </p>

        {/* Services */}
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3.5 py-2 text-sm text-slate-700 shadow-sm">
            <FaStethoscope className="text-teal-600" />
            Walk-in Clinic
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3.5 py-2 text-sm text-slate-700 shadow-sm">
            <MdLocalPharmacy className="text-teal-600" />
            Pharmacy Services
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3.5 py-2 text-sm text-slate-700 shadow-sm">
            <FaHeartbeat className="text-teal-600" />
            Preventive Care
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-3.5 py-2 text-sm text-slate-700 shadow-sm">
            <GiMedicines className="text-teal-600" />
            Prescription Support
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
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

        {/* Info Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-left">
          <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
            <p className="text-sm text-slate-500">Regular Hours</p>
            <p className="mt-1 font-semibold text-slate-800">
              Mon – Fri: 9am – 5pm
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
            <p className="text-sm text-slate-500">Location</p>
            <p className="mt-1 font-semibold text-slate-800">
              45 Greenbriar Dr NW, Unit #109
            </p>
          </div>

          <a
            href="tel:+15879439528"
            className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="h-10 w-10 rounded-full grid place-items-center bg-teal-50 shrink-0">
              <FaClinicMedical className="text-teal-700" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Clinic</p>
              <p className="font-semibold text-slate-800">(587) 943-9528</p>
            </div>
          </a>

          <a
            href="tel:+15879439526"
            className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="h-10 w-10 rounded-full grid place-items-center bg-teal-50 shrink-0">
              <MdLocalPharmacy className="text-teal-700 text-xl" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Pharmacy</p>
              <p className="font-semibold text-slate-800">(587) 943-9526</p>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 80"
          className="block w-full h-[35px] md:h-[50px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,55 C260,20 500,20 760,45 C1000,70 1240,60 1440,35 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}