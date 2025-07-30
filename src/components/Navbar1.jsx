import React, { useState } from "react";
import logo from "../assets/logo/greenwich-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdMedicalServices, MdLocalPharmacy } from "react-icons/md";

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

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

  // Delayed submenu open/close handlers to avoid flicker
  const onMouseEnter = (label) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setHoveredMenu(label);
  };

  const onMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredMenu(null);
    }, 200); // 200ms delay before closing submenu
    setHoverTimeout(timeout);
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
  // Clinical Services
  { label: "Vaccinations & Immunizations", href: "#vaccinations", desc: "Flu shots, travel vaccines & more" },
  { label: "Injection Services", href: "#injections", desc: "Safe administration of injectable meds" },
  { label: "Consultation", href: "#consultation", desc: "Private consultations & medication reviews" },
  { label: "Prescribing Pharmacist", href: "#prescribing", desc: "Walk-in assessment & prescribing" },
  { label: "OAT (Opioid Agonist Treatment)", href: "#oat", desc: "Supervised opioid dependency treatment" },

  // Specialty Services
  { label: "Compounding", href: "#compounding", desc: "Custom-made medications for your needs" },
  { label: "Compliance Packaging", href: "#blister-pack", desc: "Blister packs to simplify medication use" },

  // Travel & Wellness
  { label: "Travel Health Services", href: "#travel-health", desc: "Travel consults & required immunizations" },

  // Home & Family Support
  { label: "Home Care Supplies", href: "#home-care", desc: "Mobility aids, incontinence & wound care" },
  { label: "Breast Pump Rental", href: "#breast-pump", desc: "Rent electric breast pumps hassle-free" },

  // Convenience
  { label: "Free Local Delivery", href: "#delivery", desc: "Free delivery within Calgary" },
]

},

    { label: "About Us", href: "#about" },
    { label: "Transfer Prescription", href: "#transfer" },
    { label: "Register Now", href: "#register", isCTA: true },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-4">
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
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex space-x-6 text-teal-800 font-semibold"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => onMouseEnter(item.label)}
              onMouseLeave={onMouseLeave}
            >
              <div>
                <a
                  href={item.href}
                  className={`${
                    item.isCTA
                      ? "bg-yellow-400 text-white px-3 py-1 rounded-full shadow hover:bg-yellow-500 text-sm" // smaller button styles here
                      : "hover:text-yellow-400"
                  } transition duration-300 tracking-wide text-lg flex items-center`}
                >
                  {item.icon} {item.label}
                </a>

                {item.submenu && hoveredMenu === item.label && (
                  <div
                    className="absolute left-0 mt-1 w-[500px] bg-white border rounded-lg shadow-lg z-50 p-4 grid grid-cols-2 gap-4"
                    // no onMouseLeave here — handled by parent div
                  >
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block hover:bg-yellow-50 p-2 rounded text-sm text-teal-800"
                        onClick={() => setHoveredMenu(null)} // optional
                      >
                        <div className="font-semibold">{sub.label}</div>
                        <div className="text-xs text-gray-500">{sub.desc}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-teal-800 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-lg px-6 pb-6 space-y-4 text-teal-800 font-semibold transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {menuItems.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between items-center">
              <a
                href={item.href}
                onClick={handleMobileLinkClick}
                className={`block py-2 text-lg ${
                  item.isCTA
                    ? "bg-yellow-400 text-white px-4 py-1 rounded-full shadow hover:bg-yellow-500"
                    : "hover:text-yellow-500"
                }`}
              >
                {item.icon} {item.label}
              </a>
              {item.submenu && (
                <button
                  onClick={() => toggleSubmenu(item.label)}
                  className="text-teal-600 text-sm"
                  aria-expanded={!!openSubmenus[item.label]}
                  aria-controls={`${item.label}-submenu-mobile`}
                >
                  {openSubmenus[item.label] ? "▲" : "▼"}
                </button>
              )}
            </div>
            {item.submenu && openSubmenus[item.label] && (
              <div
                id={`${item.label}-submenu-mobile`}
                className="ml-4 mt-2 border-l border-teal-200 pl-4 space-y-2"
              >
                {item.submenu.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    onClick={handleMobileLinkClick}
                    className="block text-sm text-teal-800 hover:bg-yellow-50 hover:text-yellow-500 p-2 rounded transition-colors"
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
