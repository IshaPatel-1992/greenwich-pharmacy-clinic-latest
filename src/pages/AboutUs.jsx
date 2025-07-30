import React, { useEffect } from "react";
import { FaCapsules, FaTruckMedical, FaComments } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import OurTeam from "../components/OurTeam";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div id="about" className="scroll-mt-28">
      {/* About Section */}
      <section
  id="about"
  className="py-20 px-6 bg-white text-gray-700 max-w-4xl mx-auto scroll-mt-28"
  data-aos="fade-up"
>

        <div className="inline-block mb-6 relative">
          <h2 className="text-4xl font-extrabold text-teal-800 relative z-10">
            About Us
          </h2>
          <div className="absolute w-16 h-1 bg-teal-600 bottom-0 left-0 rounded"></div>
        </div>

        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p className="flex items-start gap-3">
            <FaCapsules className="text-teal-600 mt-1" />
            At Greenwich Clinic Pharmacy, we are committed to delivering compassionate, personalized care.
          </p>
          <p className="flex items-start gap-3">
            <FaComments className="text-teal-600 mt-1" />
            Whether it’s managing prescriptions or providing expert consultations — we’ve got you covered.
          </p>
          <p className="flex items-start gap-3">
            <FaTruckMedical className="text-teal-600 mt-1" />
            We also offer convenient delivery options — because your comfort is our priority.
          </p>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section
        className="bg-white py-12 px-6 text-center"
        data-aos="fade-up"
      >
        <h3 className="text-3xl font-bold text-teal-800 mb-4">Meet Our Team</h3>
        <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
          Our team of healthcare professionals is dedicated to your well-being. Get to know the friendly faces behind our pharmacy and clinic.
        </p>
      </section>

      {/* OurTeam Component */}
      <OurTeam />
    </div>
  );
}
