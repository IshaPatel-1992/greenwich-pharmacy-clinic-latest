import React from "react";
import { FaUserMd, FaHandsHelping } from "react-icons/fa";

const team = [
  {
    name: "Dr. Curtis Thompson MD, CCFP, DIPG[FM]",
    role: "Doctor",
    icon: <FaUserMd className="text-3xl text-teal-600 mb-2" />,
  },
  {
    name: "Mehul Jadav",
    role: "Pharmacy Manager",
    icon: <FaHandsHelping className="text-3xl text-teal-600 mb-2" />,
    license: "Pharmacy License #14106", // License Number
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-gray-50 px-6 text-center" data-aos="fade-up">
      <div className="inline-block mb-10 relative">
        <h2 className="text-3xl font-bold text-teal-700 relative z-10">Meet Our Team</h2>
        <div className="absolute w-20 h-1 bg-teal-500 bottom-0 left-1/2 transform -translate-x-1/2 rounded"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
        {team.map((member, idx) => (
         <div
            key={idx}
            className="w-64 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
          >
            {member.icon}
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            {member.license && (
              <p className="text-sm text-gray-500 mt-1 italic">{member.license}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
