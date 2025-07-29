import React from 'react';

import { useEffect } from 'react';
import Navbar from './components/Navbar1';
import Hero from './components/Hero';
import About from './components/About';
import OurTeam from './components/OurTeam';
import MedicalClinicServices from './components/MedicalClinicServices';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Greenwich Medical Clinic & Pharmacy';
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 via-white to-teal-400 font-sans">
      <Navbar />
      <Hero />
      <About />
      <OurTeam />
      <MedicalClinicServices />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
