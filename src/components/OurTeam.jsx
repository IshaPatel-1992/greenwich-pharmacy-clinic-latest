import React from "react";
import { FaUserMd, FaHandsHelping, FaHeadset } from "react-icons/fa";

const team = [
  { name: "Dr. Amy Patel", role: "Pharmacist", img: "/assets/team1.jpg", icon: <FaUserMd className="text-teal-600 inline mr-1" /> },
  { name: "John Lee", role: "Pharmacy Assistant", img: "/assets/team2.jpg", icon: <FaHandsHelping className="text-teal-600 inline mr-1" /> },
  { name: "Sarah Wong", role: "Customer Care", img: "/assets/team3.jpg", icon: <FaHeadset className="text-teal-600 inline mr-1" /> },
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-gray-50 px-6 text-center" data-aos="fade-up">
      <div className="inline-block mb-10 relative">
        <h2 className="text-3xl font-bold text-teal-700 relative z-10">Meet Our Team</h2>
        <div className="absolute w-20 h-1 bg-teal-500 bottom-0 left-1/2 transform -translate-x-1/2 rounded"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="w-60 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-60 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.icon}{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      { /* <a
        href="/about"
        className="text-teal-600 font-medium mt-10 inline-block hover:underline"
        data-aos="fade-up"
      >
        Meet the full team →
      </a> */ }
    </section>
  );
}
