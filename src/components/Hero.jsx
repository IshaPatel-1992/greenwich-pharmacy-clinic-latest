import React from "react";
import { FaClinicMedical, FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f7fffd] via-white to-[#eef8f6] px-6 pb-12 pt-28 md:pt-32">
      <div className="pointer-events-none absolute -top-20 right-10 h-56 w-56 rounded-full bg-teal-100 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-52 w-52 rounded-full bg-cyan-100 opacity-30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700">
          Accepting New Patients
        </span>

        <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-800 md:text-5xl xl:text-6xl">
          Your Local Clinic & Pharmacy{" "}
          <span className="text-teal-700">in NW Calgary</span>
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          Greenwich Medical Clinic & Pharmacy provides accessible healthcare,
          walk-in support, prescription services, and ongoing care for
          individuals and families.
        </p>

        <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-amber-300 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 px-6 py-5 shadow-md">
          <p className="text-sm text-slate-800 md:text-base">
            <span className="font-extrabold text-amber-700">
              ⭐ Selected Saturdays Open:
            </span>{" "}
            Our clinic is open on designated Saturdays from{" "}
            <strong className="text-slate-900">10:00 AM – 2:00 PM</strong>.
          </p>

          <a
            href="#contactus"
            className="mt-3 inline-flex items-center rounded-full bg-amber-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-amber-700"
          >
            View Saturday Schedule →
          </a>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm">
            <FaStethoscope className="text-teal-600" />
            Walk-in Clinic
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm">
            <MdLocalPharmacy className="text-teal-600" />
            Pharmacy Services
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm">
            <FaHeartbeat className="text-teal-600" />
            Preventive Care
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm">
            <GiMedicines className="text-teal-600" />
            Prescription Support
          </span>
        </div>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/medical-services"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
          >
            Medical Services
          </Link>

          <Link
            to="/pharmacy-services"
            className="inline-flex items-center justify-center rounded-full border border-teal-200 bg-white px-6 py-3 font-semibold text-teal-700 transition hover:bg-teal-50"
          >
            Pharmacy Services
          </Link>
        </div>

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">Regular Hours</p>

            <p className="mt-1 font-semibold text-slate-800">
              Mon – Fri: 9am – 5pm
            </p>

            <a
              href="#contactus"
              className="mt-2 inline-block rounded-md bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700 transition hover:bg-amber-200"
            >
              Selected Saturdays Open →
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-500">Location</p>
            <p className="mt-1 font-semibold text-slate-800">
              45 Greenbriar Dr NW, Unit #109
            </p>
          </div>

          <a
            href="tel:+15879439528"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-50">
              <FaClinicMedical className="text-teal-700" />
            </div>

            <div>
              <p className="text-sm text-slate-500">Clinic</p>
              <p className="font-semibold text-slate-800">(587) 943-9528</p>
            </div>
          </a>

          <a
            href="tel:+15879439526"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-50">
              <MdLocalPharmacy className="text-xl text-teal-700" />
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
          className="block h-[35px] w-full md:h-[50px]"
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