import React from "react";
import { FaClinicMedical, FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f7fffd] via-white to-[#eef8f6] px-6 pt-28 md:pt-32 pb-10 md:pb-14">
      <div className="absolute -top-16 right-20 h-52 w-52 rounded-full bg-teal-100 blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-10 left-20 h-48 w-48 rounded-full bg-cyan-100 blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Full-width Notice */}
        <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 px-5 md:px-7 py-4 text-amber-900 shadow-sm">
          <p className="text-base md:text-lg font-semibold">
            Important Clinic & Pharmacy Notice
          </p>

          <div className="mt-3 grid md:grid-cols-2 gap-3 text-sm md:text-base leading-relaxed">
            <div className="rounded-xl bg-white/70 border border-amber-100 px-4 py-3">
              Doctor will be away from <strong>May 15 to May 20</strong>.
            </div>

            <div className="rounded-xl bg-white/70 border border-amber-100 px-4 py-3">
              Pharmacy will be closed on <strong>May 18</strong> for Victoria Day.
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-[1fr_390px] gap-7 lg:gap-10 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex w-fit items-center rounded-full border border-teal-200 bg-teal-50 text-teal-700 px-4 py-1.5 text-sm font-medium mb-4">
              Greenwich Medical Clinic & Pharmacy
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-slate-800 leading-[1.08]">
              Your Local Clinic & Pharmacy{" "}
              <span className="text-teal-700">in NW Calgary</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Greenwich Medical Clinic & Pharmacy provides accessible healthcare,
              walk-in support, prescription services, and ongoing care for
              individuals and families.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
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

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/medical-services"
                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2.5 text-white font-semibold hover:bg-teal-700 transition"
              >
                Medical Services
              </Link>

              <Link
                to="/pharmacy-services"
                className="inline-flex items-center justify-center rounded-full border border-teal-200 bg-white px-5 py-2.5 text-teal-700 font-semibold hover:bg-teal-50 transition"
              >
                Pharmacy Services
              </Link>
            </div>
          </div>

          {/* Right Info Card */}
          <div className="relative rounded-[26px] border border-white/70 bg-white/80 backdrop-blur-sm shadow-[0_16px_45px_rgba(15,118,110,0.08)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-teal-50/60 to-cyan-50/70" />

            <div className="relative p-5 md:p-6">
              <div className="inline-flex items-center rounded-full bg-teal-50 text-teal-700 px-4 py-1.5 text-sm font-medium border border-teal-100">
                Accepting New Patients
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-slate-800">
                Calm, local, and connected healthcare
              </h3>

              <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                Visit us for family care, walk-in support, prescription services,
                and pharmacy guidance in one convenient location.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl bg-white/90 border border-slate-200 p-3.5">
                  <p className="text-sm text-slate-500">Regular Hours</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    Mon – Fri: 9am – 5pm
                  </p>
                </div>

                <div className="rounded-2xl bg-white/90 border border-slate-200 p-3.5">
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-semibold text-slate-800">
                    45 Greenbriar Dr NW, Unit #109, Calgary
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                  <a
                    href="tel:+15879439528"
                    className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 shadow-sm p-3 hover:shadow-md transition"
                  >
                    <div className="h-10 w-10 rounded-full grid place-items-center bg-teal-50 shrink-0">
                      <FaClinicMedical className="text-teal-700" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Clinic</p>
                      <p className="text-sm font-semibold text-slate-800">
                        (587) 943-9528
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+15879439526"
                    className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 shadow-sm p-3 hover:shadow-md transition"
                  >
                    <div className="h-10 w-10 rounded-full grid place-items-center bg-teal-50 shrink-0">
                      <MdLocalPharmacy className="text-teal-700 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Pharmacy</p>
                      <p className="text-sm font-semibold text-slate-800">
                        (587) 943-9526
                      </p>
                    </div>
                  </a>
                </div>

                <div className="rounded-2xl bg-amber-50 border border-amber-200 p-3.5">
                  <p className="text-sm text-amber-700">Holiday Notice</p>
                  <p className="mt-1 font-semibold text-amber-900">
                    Pharmacy closed May 18 — Victoria Day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Softer divider, less vertical space */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="block w-full h-[45px] md:h-[65px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C240,40 480,40 720,70 C980,105 1220,95 1440,55 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}