import React from "react";

import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import ClinicForms from "../components/ClinicForms.jsx";

export default function Home() {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Greenwich Medical Clinic & Pharmacy | NW Calgary Walk-In & Pharmacy</title>

        <meta
          name="description"
          content="Welcome to Greenwich Medical Clinic & Pharmacy. Your trusted partner for health and wellness, offering family practice, walk-in clinic, pharmacy services, immunizations, telemedicine, OAT, compounding, and home delivery."
        />

        <meta
          name="keywords"
          content="Medical clinic & pharmacy in NW Calgary, Greenwich Medical Clinic, Pharmacy, Walk-in Clinic, Family Practice, Health, Wellness, Medication, Prescription, OAT, Compounding, Vaccination & Immunizations, Spanish Speaking Physician, Travel Health Services, Blister Packaging, Medication Reviews, Telemedicine, Home Delivery, IFHP Services, Minor Illness Treatment"
        />

        <link rel="canonical" href="https://greenwichhealth.ca" />
        {/* Local Business Schema */}
   <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://greenwichhealth.ca/#medical-services",
      "name": "Greenwich Medical Clinic & Pharmacy",
      "url": "https://greenwichhealth.ca",
      "telephone": "+1-587-943-9528",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "45 Greenbriar Dr NW Unit #109",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "postalCode": "T3B 6M2",
        "addressCountry": "CA"
      },
      "openingHours": "Mo-Fr 09:00-17:00",
      "sameAs": [
        "https://www.google.com/maps/place/Greenwich+Medical+Clinic+%26+Pharmacy"
      ]
    },
    {
      "@type": "Pharmacy",
      "@id": "https://greenwichhealth.ca/#pharmacy-services",
      "name": "Greenwich Pharmacy",
      "url": "https://greenwichhealth.ca",
      "telephone": "+1-587-943-9526",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "45 Greenbriar Dr NW Unit #109",
        "addressLocality": "Calgary",
        "addressRegion": "AB",
        "postalCode": "T3B 6N4",
        "addressCountry": "CA"
      },
      "openingHours": "Mo-Fr 09:00-17:00",
      "sameAs": [
        "https://www.google.com/maps/place/Greenwich+Medical+Clinic+%26+Pharmacy"
      ]
    }
  ]
}
`}
</script>

      </Helmet>
      <Hero />
      <About />
      <ContactForm />
      <ClinicForms />
    </>
  );
}
