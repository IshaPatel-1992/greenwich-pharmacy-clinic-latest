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
    description: "Protect yourself and your loved ones from serious diseases. We offer a full range of routine childhood and adult vaccines, including travel immunizations for global destinations.",
  },
  {
    title: "Pap Smear / Pap Test",
    icon: <FaFileMedical className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "A crucial screening test for cervical cancer and other abnormalities. Early detection helps in timely treatment and better health outcomes for women.",
  },
  {
    title: "Minor Illness Treatment",
    icon: <FaHeartbeat className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Visit us for walk-in treatment of common ailments like cold, flu, infections, rashes, or minor injuries. No appointment needed for quick care and peace of mind.",
  },
  {
    title: "Health Education",
    icon: <FaUserMd className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Get personalized advice on disease prevention, nutrition, fitness, and overall well-being. Our clinicians guide you in making healthier lifestyle choices.",
  },
  {
    title: "Routine Physical Exams",
    icon: <FaStethoscope className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Comprehensive annual check-ups to assess your physical health. We monitor vital signs, perform screenings, and discuss any health concerns proactively.",
  },
  {
    title: "Medical Notes & Forms",
    icon: <FaNotesMedical className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Need a sick note for work, school forms, or fitness assessments? We provide valid medical documentation tailored to your specific needs.",
  },
  {
    title: "Pregnancy Testing",
    icon: <FaBaby className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Confidential pregnancy tests with fast and accurate results. We offer emotional support, information, and next-step guidance regardless of the outcome.",
  },
  {
    title: "Women's Health",
    icon: <FaVenus className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Comprehensive care for women at every stage of life—from menstrual concerns to menopause. We prioritize your comfort, dignity, and health goals.",
  },
  {
    title: "Uninsured Services",
    icon: <FaFileInvoice className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Some services may not be covered by public health insurance. We offer affordable options for physicals, forms, and non-insured procedures upon request.",
  },
];

export default function MedicalClinicServices() {
  return (
    <section id="medical" className="bg-gradient-to-br from-teal-300 via-white to-teal-100 py-20">
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
