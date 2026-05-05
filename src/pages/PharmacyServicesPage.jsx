import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";


import {
  FaSyringe,
  FaPrescriptionBottleAlt,
  FaUserMd,
  FaStethoscope,
  FaNotesMedical,
  FaPills,
  FaFilePrescription,
  FaPlaneDeparture,
  FaHome,
  FaBaby,
  FaTruck,
  FaFileInvoice,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const pharmacyServices = [
  {
    title: "Vaccinations & Immunizations",
    icon: <FaSyringe className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Stay protected with flu, shingles, pneumonia vaccines, and travel immunizations.",
  },
  {
    title: "Injection Services",
    icon: <FaPrescriptionBottleAlt className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "We administer injectable medications—no appointment required for most services.",
  },
  {
    title: "Consultation",
    icon: <FaUserMd className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Private medication reviews and advice for safe and effective treatment.",
  },
  {
    title: "Prescribing Pharmacist",
    icon: <FaStethoscope className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "We assess and prescribe for minor conditions like UTIs, cold sores, and more.",
  },
  {
    title: "OAT (Opioid Agonist Treatment)",
    icon: <FaNotesMedical className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Discreet and supportive care for opioid dependency, including supervised dosing.",
  },
  {
    title: "Compounding",
    icon: <FaPills className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Custom medications for allergies, children, dermatology, and hormone therapy.",
  },
  {
    title: "Compliance Packaging",
    icon: <FaFilePrescription className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Blister packs organized by day and time to simplify your medication routine.",
  },
  {
    title: "Travel Health Services",
    icon: <FaPlaneDeparture className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Travel consults, vaccines, and prescriptions to keep you protected abroad.",
  },
  {
    title: "Home Care Supplies",
    icon: <FaHome className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Mobility aids, wound care, incontinence products, and medical equipment.",
  },
  {
    title: "Free Local Delivery",
    icon: <FaTruck className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Same-day delivery for prescriptions across Calgary—fast and convenient.",
  },
  {
    title: "Uninsured Services",
    icon: <FaFileInvoice className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Private-pay options available for services not covered by public health plans.",
  },
];

export default function PharmacyServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div id="pharmacy" className="scroll-mt-28">
      <Helmet>
  {/* Primary Pharmacy SEO */}
  <title>
    Pharmacy Services in NW Calgary | Greenwich Pharmacy
  </title>

  <meta
    name="description"
    content="Greenwich Pharmacy in NW Calgary offers prescription dispensing, vaccinations, injection services, prescribing pharmacist care, OAT programs, compounding, compliance packaging, travel health services, home care supplies, uninsured pharmacy services, and free local delivery."
  />

  <meta
    name="keywords"
    content="Pharmacy Services NW Calgary, Calgary Pharmacy, Prescriptions NW Calgary, Vaccinations Pharmacy Calgary, Prescribing Pharmacist, OAT Pharmacy Calgary, Compounding Pharmacy, Compliance Packaging, Travel Vaccines Pharmacy, Injection Services, Free Prescription Delivery Calgary"
  />

  <link
    rel="canonical"
    href="https://greenwichhealth.ca/pharmacy-services"
  />

  {/* Local SEO Signals */}
  <meta name="geo.region" content="CA-AB" />
  <meta name="geo.placename" content="NW Calgary" />
  <meta name="robots" content="index, follow" />

  {/* ✅ Pharmacy Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "@id": "https://greenwichhealth.ca/pharmacy-services#pharmacy",
      "name": "Greenwich Pharmacy",
      "url": "https://greenwichhealth.ca/pharmacy-services",
      "logo": "https://greenwichhealth.ca/greenwich-logo.png",
      "telephone": "+1-587-943-9526",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "45 Greenbriar Dr NW Unit #109",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "postalCode": "T3B 6M2",
        "addressCountry": "CA"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "NW Calgary, AB"
      },
      "availableService": [
        { "@type": "MedicalTherapy", "name": "Prescription Dispensing" },
        { "@type": "MedicalTherapy", "name": "Vaccinations & Immunizations" },
        { "@type": "MedicalTherapy", "name": "Injection Services" },
        { "@type": "MedicalTherapy", "name": "Prescribing Pharmacist Services" },
        { "@type": "MedicalTherapy", "name": "OAT (Opioid Agonist Treatment)" },
        { "@type": "MedicalTherapy", "name": "Compounding Services" },
        { "@type": "MedicalTherapy", "name": "Compliance Packaging" },
        { "@type": "MedicalTherapy", "name": "Travel Health Services" },
        { "@type": "MedicalTherapy", "name": "Home Care & Medical Supplies" },
        { "@type": "MedicalTherapy", "name": "Free Prescription Delivery" },
        { "@type": "MedicalTherapy", "name": "Uninsured Pharmacy Services" }
      ],
      "sameAs": [
        "https://www.google.com/maps/place/Greenwich+Medical+Clinic+%26+Pharmacy"
      ]
    })}
  </script>
</Helmet>

      <section className="pt-24 py-20 px-6 bg-white text-gray-700 max-w-4xl mx-auto" data-aos="fade-up">
        <div className="inline-block mb-6 relative">
          <h2 className="text-4xl font-extrabold text-teal-800 relative z-10">Pharmacy Services</h2>
          <div className="absolute w-20 h-1 bg-teal-600 bottom-0 left-0 rounded"></div>
        </div>

        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p className="flex items-start gap-3">
            <FaStethoscope className="text-teal-600 mt-1" />
            At Greenwich Pharmacy, we offer a wide range of services designed for your convenience and well-being.
          </p>
          <p className="flex items-start gap-3">
            <FaUserMd className="text-teal-600 mt-1" />
            Our pharmacists provide expert support, personalized care, and even home delivery — all tailored to your health needs.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-6 pt-2 text-gray-800">
            <li>Prescriptions, refills, and reviews</li>
            <li>Vaccinations & injections</li>
            <li>Consultations and minor condition assessments</li>
            <li>Custom compounding & compliance packaging</li>
            <li>Free same-day prescription delivery in Calgary</li>
          </ul>
        </div>
      </section>

      <section className="bg-gradient-to-br from-teal-300 via-white to-teal-100 py-20 px-6" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-center text-teal-700 mb-14">
            Expert Care with Convenient Access
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pharmacyServices.map(({ title, description, icon }) => (
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
