import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";


import {
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaNotesMedical,
  FaSyringe,
  FaFileMedical,
  FaBaby,
  FaVenus,
  FaFileInvoice,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


// Service data in navbar order all inclusive 13 items
const services = [
  {
    title: "Family Practice",
    icon: <FaUserMd className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Comprehensive care for all ages — from children to seniors. We build long-term relationships for your lifelong health journey.",
  },
  {
    title: "Walk-in Clinic",
    icon: <FaNotesMedical className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "No appointment needed. Quick access to care for common illnesses, infections, and minor concerns.",
  },
  {
    title: "IUD & Contraceptive Implant Insertion",
    icon: <FaVenus className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Now offering IUD and contraceptive implant insertion with professional, confidential care.",
  },
  {
    title: "Spanish-Speaking Physician",
    icon: <FaUserMd className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Walk-in or book an appointment with our Spanish-speaking doctor available on-site.",
  },
  {
    title: "Telemedicine",
    icon: <FaStethoscope className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Virtual consultations from the comfort of your home. Get expert advice without traveling.",
  },
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
    title: "Chronic & Minor Illness Care",
    icon: <FaHeartbeat className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Comprehensive care for chronic conditions such as diabetes, hypertension, and asthma, along with treatment for minor illnesses like colds, flu, and infections. Walk-ins welcome.",
  },
  {
    title: "Routine Physical Exams",
    icon: <FaStethoscope className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Annual check-ups including vital signs, screening tests, and preventive consultations.",
  },
  {
    title: "Women's Health",
    icon: <FaVenus className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Personalized care for women of all ages — from menstruation to menopause.",
  },
  {
    title: "Pregnancy Testing",
    icon: <FaBaby className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Confidential, fast, and accurate tests with supportive follow-up care.",
  },
  {
    title: "Treatment for Minor Injuries",
    icon: <FaHeartbeat className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Prompt care for cuts, burns, sprains, and other non-life-threatening injuries. Walk-in welcome.",
  },
  {
    title: "Medical Notes & Forms",
    icon: <FaNotesMedical className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Sick notes, school forms, or fitness clearance — customized to your need.",
  },
  {
    title: "Health Education",
    icon: <FaUserMd className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Get guidance on disease prevention, nutrition, fitness, and overall well-being.",
  },
  {
    title: "Uninsured Services",
    icon: <FaFileInvoice className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Affordable private-pay options for services not covered by public health plans. This includes the IFHP (Interim Federal Health Program) for refugees.",
  },
];

export default function MedicalServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div id="medical" className="scroll-mt-28">
     <Helmet>
  {/* Primary Medical SEO */}
  <title>
    Medical Services in NW Calgary | Greenwich Medical Clinic
  </title>

  <meta
    name="description"
    content="Greenwich Medical Clinic provides comprehensive medical services in NW Calgary, including walk-in clinic care, family practice, women’s health, immunizations, chronic disease management, IUD and contraceptive implant insertion, telemedicine, and uninsured medical services including IFHP."
  />

  <meta
    name="keywords"
    content="Medical Services NW Calgary, Walk-In Clinic NW Calgary, Family Practice Calgary, Medical Clinic Greenbriar NW, Women's Health Clinic Calgary, IUD Insertion Calgary, Contraceptive Implant Calgary, Immunizations NW Calgary, Chronic Disease Management, Telemedicine Clinic Calgary, IFHP Medical Services"
  />

  <link
    rel="canonical"
    href="https://greenwichhealth.ca/medical-services"
  />

  {/* Local SEO Signals */}
  <meta name="geo.region" content="CA-AB" />
  <meta name="geo.placename" content="NW Calgary" />
  <meta name="robots" content="index, follow" />

  {/* ✅ Medical Services Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": "https://greenwichhealth.ca/medical-services#medical-business",
      "name": "Greenwich Medical Clinic",
      "url": "https://greenwichhealth.ca/medical-services",
      "logo": "https://greenwichhealth.ca/greenwich-logo.png",
      "telephone": "+1-587-943-9528",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "45 Greenbriar Dr NW Unit #109",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "postalCode": "T3B 6M2",
        "addressCountry": "CA"
      },
      "medicalSpecialty": [
        "FamilyPractice",
        "PrimaryCare",
        "Gynecology",
        "PreventiveMedicine"
      ],
      "availableService": [
        { "@type": "MedicalProcedure", "name": "Walk-In Clinic Services" },
        { "@type": "MedicalProcedure", "name": "Family Practice" },
        { "@type": "MedicalProcedure", "name": "Women's Health Services" },
        { "@type": "MedicalProcedure", "name": "IUD & Contraceptive Implant Insertion" },
        { "@type": "MedicalProcedure", "name": "Immunizations & Vaccinations" },
        { "@type": "MedicalProcedure", "name": "Chronic Disease Management" },
        { "@type": "MedicalProcedure", "name": "Telemedicine Consultations" },
        { "@type": "MedicalProcedure", "name": "Uninsured & IFHP Medical Services" }
      ],
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "NW Calgary, AB"
      },
      "sameAs": [
        "https://www.google.com/maps/place/Greenwich+Medical+Clinic+%26+Pharmacy"
      ]
    })}
  </script>
</Helmet>
{/* Intro Section */}
      <section className="py-20 px-6 bg-white text-gray-700 max-w-4xl mx-auto" data-aos="fade-up">
        <div className="inline-block mb-6 relative">
          <h2 className="text-4xl font-extrabold text-teal-800 relative z-10">
            Medical Services
          </h2>
          <div className="absolute w-20 h-1 bg-teal-600 bottom-0 left-0 rounded"></div>
        </div>

        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p className="flex items-start gap-3">
            <FaStethoscope className="text-teal-600 mt-1" />
            At Greenwich Medical Clinic, we’re committed to providing high-quality, compassionate care tailored to every stage of life.
          </p>
          <p className="flex items-start gap-3">
            <FaUserMd className="text-teal-600 mt-1" />
            From preventive check-ups to women’s health and chronic disease management, our team ensures your well-being is always prioritized.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-6 pt-2 text-gray-800">
            <li>Comprehensive annual physical exams</li>
            <li>Vaccinations & flu shots</li>
            <li>Pediatric care and pregnancy testing</li>
            <li>Women's health screenings</li>
            <li>Uninsured services available — including the IFHP (Interim Federal Health Program) for refugees</li>
          </ul>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gradient-to-br from-teal-300 via-white to-teal-100 py-20 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-center text-teal-700 mb-14">
            Walk-In & Appointment-Based Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ title, description, icon }) => (
              <div
                key={title}
                className="group bg-teal-600 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center text-center text-white"
              >
                <div className="mb-4">{icon}</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">{title}</h4>
                <p className="text-sm sm:text-base leading-relaxed opacity-90">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
