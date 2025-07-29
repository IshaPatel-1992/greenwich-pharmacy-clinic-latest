import React, { useEffect } from 'react';
import Navbar1 from './components/Navbar1';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Greenwich Medical Clinic & Pharmacy';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-300 via-white to-teal-400 font-sans">
      <Navbar1 />
      <Hero/>
      <ContactForm />
      <Footer />
      {/* Add other sections like About, Team, etc. here */}
    </div>
  );
}

export default App;
