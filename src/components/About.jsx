import React from "react";
import { FaArrowRight } from "react-icons/fa";
import aboutImage from "../assets/About/Pharmacist-img1.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-teal-50 to-white px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-16">
        {/* Image Side */}
        <div
          className="w-full md:w-1/2 rounded-3xl shadow-2xl overflow-hidden max-h-[28rem]"
          data-aos="fade-right"
        >
          <img
            src={aboutImage}
            alt="Greenwich Clinic Pharmacy"
            className="object-cover w-full h-full rounded-3xl"
            style={{ minHeight: "20rem" }}
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center max-w-xl" data-aos="fade-left">
          <h2
            className="mb-6 text-teal-900 tracking-tight"
            style={{
              fontSize: "1.75rem",
              lineHeight: 1.3,
              fontWeight: 800,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            About Greenwich{" "}
            <span
              style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#f59e0b",
                fontWeight: 700,
                borderBottom: "2px solid #facc15",
                paddingBottom: "2px",
              }}
            >
              <i>Medical Clinic & Pharmacy</i>
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            At Greenwich Clinic Pharmacy, we are committed to delivering
            compassionate, personalized care. Whether it’s managing
            prescriptions, providing expert consultations, or offering
            convenient delivery options — your health and comfort are always our
            priority.
          </p>

          <a
            href="/about"
            className="
              self-start inline-flex items-center gap-2
              bg-yellow-400 hover:bg-yellow-500
              text-white font-semibold 
              px-6 py-3 rounded-full
              shadow-md hover:shadow-lg 
              transition duration-300 ease-in-out
              select-none
            "
          >
            Learn more about us <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
