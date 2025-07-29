import React from 'react';
import {
  FaSyringe,
  FaFileMedical,
  FaHeartbeat,
  FaUserMd,
  FaStethoscope,
  FaNotesMedical,
  FaBaby,
  FaVenus,
  FaFileInvoice,
} from 'react-icons/fa';

const services = [
  {
    title: "Immunization",
    icon: <FaSyringe className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Protect against diseases with routine and travel vaccinations.",
  },
  {
    title: "Pap Smear / Pap Test",
    icon: <FaFileMedical className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Screening test to detect cervical cancer and other abnormalities.",
  },
  {
    title: "Minor Illness Treatment",
    icon: <FaHeartbeat className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Walk-in treatment for common colds, infections, and minor ailments.",
  },
  {
    title: "Health Education",
    icon: <FaUserMd className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Learn about disease prevention, nutrition, and healthy lifestyles.",
  },
  {
    title: "Routine Physical Exams",
    icon: <FaStethoscope className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Annual checkups to monitor your overall health and well-being.",
  },
  {
    title: "Medical Notes & Forms",
    icon: <FaNotesMedical className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "We provide sick notes, fitness forms, and other medical documentation.",
  },
  {
    title: "Pregnancy Testing",
    icon: <FaBaby className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Quick and confidential pregnancy tests with follow-up guidance.",
  },
  {
    title: "Women's Health",
    icon: <FaVenus className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Personalized care focused on women's health and wellness.",
  },
  {
    title: "Uninsured Services",
    icon: <FaFileInvoice className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "We offer a range of services not covered by provincial insurance.",
  },
];

export default function MedicalClinicServices() {
  return (
    <section id="services" className="bg-gradient-to-br from-teal-300 via-white to-teal-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-teal-700 mb-14">
          Our Medical Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group bg-teal-600 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center text-center text-white"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-90">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
