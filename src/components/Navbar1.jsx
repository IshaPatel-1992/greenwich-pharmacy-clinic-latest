import React, { useState } from 'react';
import logo from "../assets/logo/greenwich-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdMedicalServices, MdLocalPharmacy } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleMobileLinkClick = () => {
    setIsOpen(false);
    setOpenSubmenus({});
  };

  const menuItems = [
    {
      label: "Medical",
      href: "#medical",
      icon: <MdMedicalServices className="inline mr-2 text-yellow-500" />,
      submenu: [
        { label: "Family Practice", href: "#family-practice", desc: "Personalized care for all ages" },
        { label: "Walk-in Clinic", href: "#walk-in", desc: "No appointment? No problem." },
        { label: "Telemedicine", href: "#telemedicine", desc: "Virtual appointments at your convenience" },
        { label: "Immunization", href: "#immunization", desc: "Vaccinations for all ages" },
        { label: "Pap Smear or Pap Test", href: "#pap-smear", desc: "Screening for cervical cancer" },
        { label: "Treatment for Minor Injuries", href: "#minor-injuries", desc: "Quick care for cuts, burns, and sprains" },
        { label: "Health Education", href: "#health-education", desc: "Empowering wellness through education" },
        { label: "Routine Physical Examination", href: "#physical-exam", desc: "Annual checkups & health assessments" },
        { label: "Medical Notes and Forms", href: "#medical-notes", desc: "Official documentation for schools & work" },
        { label: "Pregnancy Testing", href: "#pregnancy-test", desc: "Quick and confidential" },
        { label: "Women's Health", href: "#womens-health", desc: "Comprehensive care for women" },
        { label: "Treatment for Minor Illness", href: "#minor-illness", desc: "Relief for common symptoms" },
        { label: "Uninsured Services", href: "#uninsured-services", desc: "Pay-per-use healthcare services" },
      ],
    },
    {
      label: "Pharmacy",
      href: "#pharmacy",
      icon: <MdLocalPharmacy className="inline mr-2 text-yellow-500" />,
      submenu: [
        { label: "Prescription Services", href: "#prescriptions", desc: "Easy prescription fills & renewals" },
        { label: "Consultation", href: "#consultation", desc: "Talk to our licensed pharmacists" },
        { label: "Prescribing Pharmacist", href: "#prescribing", desc: "Assess and prescribe medications" },
        { label: "Compounding", href: "#compounding", desc: "Custom-made medication solutions" },
        { label: "Direct Insurance Billing", href: "#insurance", desc: "We handle your insurance claims" },
        { label: "Travel Consultation", href: "#travel-consult", desc: "Vaccines & advice for safe travel" },
        { label: "Diabetic Supplies", href: "#diabetic-supplies", desc: "Monitoring & support products" },
        { label: "Vaccination & Flu Shots", href: "#vaccinations", desc: "Seasonal and routine shots" },
      ],
    },
    { label: "Our Team", href: "#team" },
    { label: "Transfer Prescription", href: "#transfer" },
    { label: "Register Now", href: "#register", isCTA: true },
    { label: "Careers", href: "#careers" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-30 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Greenwich Logo"
            className="h-16 w-auto rounded-xl border-2 border-teal-700 shadow-lg hover:shadow-yellow-400 transition duration-500 hover:scale-105"
          />
          <div className="leading-tight">
            <div className="text-1xl text-teal-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Greenwich Medical Clinic
            </div>
            <div className="text-sm text-yellow-600" style={{ fontFamily: "'Great Vibes', cursive" }}>
              & Pharmacy
            </div>
          </div>
        </a>

        <nav className="hidden md:flex space-x-6 text-teal-800 font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className={`${item.isCTA ? "bg-yellow-400 text-white px-4 py-2 rounded-full shadow hover:bg-yellow-500" : "hover:text-yellow-400"} transition duration-300 tracking-wide text-lg`}
              >
                {item.icon} {item.label}
              </a>
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-[500px] bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-50 p-4 grid grid-cols-2 gap-4">
                  {item.submenu.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block hover:bg-yellow-50 p-2 rounded text-sm text-teal-800"
                    >
                      <div className="font-semibold">{sub.label}</div>
                      <div className="text-xs text-gray-500">{sub.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button className="md:hidden text-teal-800 text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav
        className={`md:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-lg px-6 pb-6 space-y-4 text-teal-800 font-semibold transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {menuItems.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between items-center">
              <a
                href={item.href}
                onClick={handleMobileLinkClick}
                className={`block py-2 text-lg ${item.isCTA ? "bg-yellow-400 text-white px-4 py-1 rounded-full shadow hover:bg-yellow-500" : "hover:text-yellow-500"}`}
              >
                {item.icon} {item.label}
              </a>
              {item.submenu && (
                <button onClick={() => toggleSubmenu(item.label)} className="text-teal-600 text-sm">
                  {openSubmenus[item.label] ? "▲" : "▼"}
                </button>
              )}
            </div>
            {item.submenu && openSubmenus[item.label] && (
              <div className="ml-4 mt-2 border-l border-teal-200 pl-4 space-y-2">
                {item.submenu.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={handleMobileLinkClick}
                    className="block text-sm text-teal-700 hover:text-yellow-500"
                  >
                    <div className="font-medium">{sub.label}</div>
                    <div className="text-xs text-gray-500">{sub.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
