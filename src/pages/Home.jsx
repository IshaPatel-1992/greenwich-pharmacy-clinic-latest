import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import MedicalClinicServices from "../components/MedicalClinicServices";
import PharmacyServices from "../components/PharmacyServices";
import ContactForm from "../components/ContactForm";
import ClinicForms from "../components/ClinicForms.jsx";

export default function Home() {
  return (
    <>
      
      <Hero />
      <About />
      <MedicalClinicServices />
      <PharmacyServices />
      <ContactForm />
      <ClinicForms />
    </>
  );
}
