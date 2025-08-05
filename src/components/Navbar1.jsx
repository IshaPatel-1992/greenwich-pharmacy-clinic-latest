import React, { useState, useEffect } from "react";
import { MdMedicalServices, MdLocalPharmacy } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo/greenwich-logo.png";
import { HashLink as Link } from "react-router-hash-link";

const menuItems = [
  {
    label: "Medical",
    href: "/#medical",
    icon: <MdMedicalServices className="inline mr-2 text-yellow-500" />,
    submenu: [
      { label: "Family Practice", href: "/#medical", desc: "Personalized care for all ages" },
      { label: "Walk-in Clinic", href: "/#medical", desc: "No appointment? No problem." },
      { label: "Telemedicine", href: "/#medical", desc: "Virtual appointments at your convenience" },
      { label: "Immunization", href: "/#medical", desc: "Vaccinations for all ages" },
      { label: "Pap Smear or Pap Test", href: "/#medical", desc: "Screening for cervical cancer" },
      { label: "Treatment for Minor Injuries", href: "/#medical", desc: "Quick care for cuts, burns, and sprains" },
      { label: "Health Education", href: "/#medical", desc: "Empowering wellness through education" },
      { label: "Routine Physical Examination", href: "/#medical", desc: "Annual checkups & health assessments" },
      { label: "Medical Notes and Forms", href: "/#medical", desc: "Official documentation for schools & work" },
      { label: "Pregnancy Testing", href: "/#medical", desc: "Quick and confidential" },
      { label: "Women's Health", href: "/#medical", desc: "Comprehensive care for women" },
      { label: "Treatment for Minor Illness", href: "/#medical", desc: "Relief for common symptoms" },
      { label: "Uninsured Services", href: "/#medical", desc: "Pay-per-use healthcare services" },
    ],
  },
  {
    label: "Pharmacy",
    href: "/#pharmacy",
    icon: <MdLocalPharmacy className="inline mr-2 text-yellow-500" />,
    submenu: [
      { label: "Vaccinations & Immunizations", href: "/#pharmacy", desc: "Flu shots, travel vaccines & more" },
      { label: "Injection Services", href: "/#pharmacy", desc: "Safe administration of injectable meds" },
      { label: "Consultation", href: "/#pharmacy", desc: "Private consultations & medication reviews" },
      { label: "Prescribing Pharmacist", href: "/#pharmacy", desc: "Walk-in assessment & prescribing" },
      { label: "OAT (Opioid Agonist Treatment)", href: "/#pharmacy", desc: "Supervised opioid dependency treatment" },
      { label: "Compounding", href: "/#pharmacy", desc: "Custom-made medications for your needs" },
      { label: "Compliance Packaging", href: "/#pharmacy", desc: "Blister packs to simplify medication use" },
      { label: "Travel Health Services", href: "/#pharmacy", desc: "Travel consults & required immunizations" },
      { label: "Home Care Supplies", href: "/#pharmacy", desc: "Mobility aids, incontinence & wound care" },
      { label: "Breast Pump Rental", href: "/#pharmacy", desc: "Rent electric breast pumps hassle-free" },
      { label: "Free Local Delivery", href: "/#pharmacy", desc: "Free delivery within Calgary" },
    ],
  },
  { label: "About Us", href: "/#about" },
  { label: "Transfer Prescription", href: "/#transfer" },
  { label: "Contact Us", href: "/#contactus" },
  { label: "Register Now", href: "/#register", isCTA: true },
];


export default function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Track which main menu item is open on mobile (null if none)
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle submenu open/close for mobile
  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  // Close menu and submenu when clicking a link
  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubmenuIndex(null);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolling ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-md"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link to="/#home" className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Greenwich Logo"
            className="h-16 w-auto rounded-xl border-2 border-teal-700 shadow-lg hover:shadow-yellow-400 transition duration-500 hover:scale-105"
          />
        
        <div className="leading-tight">
            <div
              className="text-1xl text-teal-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Greenwich Medical Clinic
            </div>
            <div
              className="text-sm text-yellow-600"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              & Pharmacy
            </div>
          </div>
        </Link>
        {/* Mobile Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-teal-800">
            <GiHamburgerMenu />
          </button>
        </div>

        {/* Desktop Menu (unchanged) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className={`text-teal-800 hover:text-yellow-600 font-semibold transition-all ${
                  item.isCTA ? "bg-yellow-400 px-4 py-2 rounded-full text-white hover:bg-yellow-500" : ""
                }`}
              >
                {item.icon}
                {item.label}
              </a>

              {item.submenu && (
                <div
                  className="absolute left-0 mt-2 w-[600px] max-h-80 overflow-y-auto bg-white shadow-lg border rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50"
                >
                  <ul className="grid grid-cols-2 gap-4 p-4">
                    {item.submenu.map((sub) => (
                      <li key={sub.label} className="border-b last:border-0 pb-2">
                        <a
                          href={sub.href}
                          className="block hover:bg-teal-50 p-2 rounded-md transition"
                        >
                          <div className="font-medium text-teal-800">{sub.label}</div>
                          <div className="text-sm text-gray-500">{sub.desc}</div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-6 pb-6 pt-2 shadow-md">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <div key={item.label}>
                {/* If has submenu, make clickable to toggle */}
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className={`w-full text-left flex items-center justify-between text-teal-800 text-lg font-semibold ${item.isCTA ? "bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500" : "hover:text-yellow-600"}`}
                    >
                      <span className="flex items-center">
                        {item.icon}
                        {item.label}
                      </span>
                      <span>{openSubmenuIndex === index ? "-" : "+"}</span>
                    </button>

                    {/* Show submenu only if open */}
                    {openSubmenuIndex === index && (
                      <ul className="mt-1 ml-4 space-y-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.label}>
                            <a
                              href={sub.href}
                              onClick={closeMenu}
                              className="block text-sm text-gray-700 hover:text-teal-500"
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  // No submenu, just normal link closes menu on click
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={`block text-teal-800 text-lg font-semibold ${item.isCTA ? "bg-yellow-400 text-white px-4 py-2 rounded-full hover:bg-yellow-500" : "hover:text-yellow-600"}`}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
