import React from "react";
import { FaUserMd, FaHandsHelping } from "react-icons/fa";

const team = [
  {
    name: "Dr. Curtis Thompson",
    credentials: "MD, CCFP, DIPG [FM]",
    role: "Doctor",
    icon: <FaUserMd className="text-4xl text-teal-600" />, // 👈 fallback
  },
  {
    name: "Mehulkumar Jadav",
    role: "Pharmacy Manager",
    image: "/images/team/mehulkumar-jadav-pharmacy-manager.webp",
    permit: "Practice Permit No. #14106",
    license: "Pharmacy License #4657",
  },
];
export default function OurTeam() {
  return (
    <section className="py-20 bg-gray-50 px-6 text-center" data-aos="fade-up">
      <div className="inline-block mb-10 relative">
      </div>

      <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="w-64 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 p-6"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-100 flex items-center justify-center bg-gray-50">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              ) : (
                member.icon
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            {/* Doctor Credentials */}
            {member.credentials && (
              <p className="text-sm text-teal-600 font-medium mt-1">
                {member.credentials}
              </p>
            )}

            {/* Pharmacist Permit */}
            {member.permit && (
              <p className="text-xs text-gray-500 mt-2 italic">
                {member.permit}
              </p>
            )}

            {/* Pharmacist License */}
            {member.license && (
              <p className="text-xs text-gray-500 italic">
                {member.license}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
