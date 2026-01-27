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
        <title>Greenwich Medical Clinic & Pharmacy | Accepting New Patients</title>

        <meta
          name="description"
          content="Welcome to Greenwich Medical Clinic & Pharmacy. Your trusted partner for health and wellness, offering family practice, walk-in clinic, pharmacy services, immunizations, telemedicine, OAT, compounding, and home delivery."
        />

        <meta
          name="keywords"
          content="Greenwich Medical Clinic, Pharmacy, Walk-in Clinic, Family Practice, Health, Wellness, Medication, Prescription, OAT, Compounding, Vaccination & Immunizations, Spanish Speaking Physician, Travel Health Services, Blister Packaging, Medication Reviews, Telemedicine, Home Delivery, IFHP Services, Minor Illness Treatment"
        />

        <link rel="canonical" href="https://greenwichhealth.ca" />
      </Helmet>  
      <Hero />
      <About />
      <ContactForm />
      <ClinicForms />
    </>
  );
}
