import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo/greenwich-logo.png";
import { HashLink as Link } from "react-router-hash-link";

const menuItems = [
  {
    label: "Medical",
    href: "/medical-services",
    submenu: [
      { label: "Family Practice", href: "/medical-services", desc: "Personalized care for all ages" },
      { label: "Walk-in Clinic", href: "/medical-services", desc: "No appointment? No problem." },
      { label: "IUD & Contraceptive Implant Insertion", href: "/medical-services", desc: "Now offering IUD and implant insertion services" },
      { label: "Spanish-Speaking Physician Available", href: "/medical-services", desc: "Walk-in or appointment with a Spanish-speaking doctor" },
      { label: "Telemedicine", href: "/medical-services", desc: "Virtual appointments at your convenience" },
      { label: "Immunization", href: "/medical-services", desc: "Vaccinations for all ages" },
      { label: "Pap Smear or Pap Test", href: "/medical-services", desc: "Screening for cervical cancer" },
      { label: "Treatment for Minor Injuries", href: "/medical-services", desc: "Quick care for cuts, burns, and sprains" },
      { label: "Health Education", href: "/medical-services", desc: "Empowering wellness through education" },
      { label: "Routine Physical Examination", href: "/medical-services", desc: "Annual checkups & health assessments" },
      { label: "Medical Notes and Forms", href: "/medical-services", desc: "Official documentation for schools & work" },
      { label: "Pregnancy Testing", href: "/medical-services", desc: "Quick and confidential" },
      { label: "Women's Health", href: "/medical-services", desc: "Comprehensive care for women" },
      { label: "Treatment for Minor Illness", href: "/medical-services", desc: "Relief for common symptoms" },
      { label: "Uninsured Services", href: "/medical-services", desc: "Pay-per-use healthcare services, including IFHP coverage for refugees." },
    ],
  },
  {
    label: "Pharmacy",
    href: "/pharmacy-services",
    submenu: [
      { label: "Vaccinations & Immunizations", href: "/pharmacy-services", desc: "Flu shots, travel vaccines & more" },
      { label: "Injection Services", href: "/pharmacy-services", desc: "Safe administration of injectable meds" },
      { label: "Consultation", href: "/pharmacy-services", desc: "Private consultations & medication reviews" },
      { label: "Prescribing Pharmacist", href: "/pharmacy-services", desc: "Walk-in assessment & prescribing" },
      { label: "OAT (Opioid Agonist Treatment)", href: "/pharmacy-services", desc: "Supervised opioid dependency treatment" },
      { label: "Compounding", href: "/pharmacy-services", desc: "Custom-made medications for your needs" },
      { label: "Compliance Packaging", href: "/pharmacy-services", desc: "Blister packs to simplify medication use" },
      { label: "Travel Health Services", href: "/pharmacy-services", desc: "Travel consults & required immunizations" },
      { label: "Home Care Supplies", href: "/pharmacy-services", desc: "Mobility aids, incontinence & wound care" },
      { label: "Free Local Delivery", href: "/pharmacy-services", desc: "Free delivery within Calgary" },
    ],
  },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/#contactus" },
  {
    label: "Transfer Prescription",
    href: "/#transfer",
    tabName: "transfer",
  },
  {
    label: "Register Now",
    href: "/#register",
    isCTA: true,
    tabName: "registration",
  },
];

export default function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubmenuIndex(null);
  };

  const handleNavClick = (item) => {
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      closeMenu();
      return;
    }

    if (item.tabName) {
      try {
        localStorage.setItem("activeTab", item.tabName);
      } catch {}

      window.dispatchEvent(new CustomEvent("openTab", { detail: item.tabName }));
    }

    if (item.href) {
      const linkUrl = new URL(item.href, window.location.origin);
      const currentPath = window.location.pathname;

      if (linkUrl.pathname === currentPath) {
        window.location.hash = linkUrl.hash || "";
      } else {
        window.location.href = item.href;
      }
    }

    closeMenu();
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center gap-3">
        {/* Logo */}
        <Link to="/#home" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Greenwich Medical Clinic & Pharmacy Logo"
            className="h-14 md:h-18 lg:h-20 w-auto rounded-xl border-2 border-teal-700 shadow-md transition duration-300 hover:scale-105"
          />

          <div className="leading-tight">
            <div
              className="text-lg md:text-xl xl:text-2xl font-semibold text-teal-900 tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Greenwich Medical
              <br className="hidden xl:block" /> Clinic
            </div>

            <div
              className="text-sm md:text-base text-yellow-600 -mt-0.5"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              & Pharmacy
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-end gap-1 xl:gap-2 flex-1">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`inline-flex items-center justify-center rounded-full text-sm font-semibold transition whitespace-nowrap ${
                  item.isCTA
                    ? "bg-yellow-400 text-white px-3 py-1.5 hover:bg-yellow-500 shadow-sm"
                    : "text-teal-800 hover:text-yellow-600 hover:bg-teal-50 px-3 py-2"
                }`}
              >
                {item.label}
              </a>

              {item.submenu && (
                <div className="absolute left-0 top-full pt-3 z-50 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                  <div className="w-[560px] max-h-[70vh] overflow-y-auto bg-white shadow-xl border border-slate-100 rounded-2xl">
                    <ul className="grid grid-cols-2 gap-2 p-4">
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <a
                            href={sub.href}
                            onClick={closeMenu}
                            className="block hover:bg-teal-50 p-2.5 rounded-xl transition"
                          >
                            <div className="text-sm font-semibold text-teal-800">
                              {sub.label}
                            </div>
                            <div className="text-xs text-gray-500 leading-snug">
                              {sub.desc}
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Book Appointment */}
        <div className="hidden lg:flex shrink-0 ml-2">
          <a
            href="https://www.avaemr.ca/bookings/eda28100-b0ae-4f85-8175-efd218666a27"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:bg-teal-800 transition whitespace-nowrap"
          >
            Book an Appointment
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-teal-800"
            aria-label="Toggle navigation menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-5 pb-6 pt-3 shadow-md max-h-[calc(100vh-86px)] overflow-y-auto">
          <ul className="space-y-2">
            {menuItems
              .concat([
                {
                  label: "Book an Appointment",
                  href: "https://www.avaconnect.ca/",
                  external: true,
                  isPrimary: true,
                },
              ])
              .map((item, index) => (
                <li key={item.label}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-left text-teal-800 text-base font-semibold hover:bg-teal-50"
                      >
                        <span>{item.label}</span>
                        <span>{openSubmenuIndex === index ? "−" : "+"}</span>
                      </button>

                      {openSubmenuIndex === index && (
                        <ul className="mt-1 ml-3 space-y-1 border-l border-teal-100 pl-4">
                          {item.submenu.map((sub) => (
                            <li key={sub.label}>
                              <a
                                href={sub.href}
                                onClick={closeMenu}
                                className="block text-sm text-gray-700 hover:text-teal-600 py-1.5"
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item);
                      }}
                      className={`block rounded-xl px-4 py-3 text-base font-semibold ${
                        item.isCTA
                          ? "bg-yellow-400 text-white hover:bg-yellow-500 text-center"
                          : item.isPrimary
                          ? "bg-teal-700 text-white hover:bg-teal-800 text-center"
                          : "text-teal-800 hover:bg-teal-50"
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}
    </header>
  );
}