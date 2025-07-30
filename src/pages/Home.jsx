import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import MedicalClinicServices from "../components/MedicalClinicServices";
import PharmacyServices from "../components/PharmacyServices";


export default function Home() {
  return (
    <>
      
      <Hero />
      <About />
      <MedicalClinicServices />
      <PharmacyServices />
   
    </>
  );
}
