import React, { useState } from 'react';
import logo from '../assets/logo/greenwich-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const menuItems = [
    { name: 'Clinic', link: '#clinic' },
    {
      name: 'Pharmacy Services',
      link: '#pharmacyservices',
      submenu: [
        { name: 'Refill Prescription', link: '#refill' },
        { name: 'Medication Review', link: '#review' },
      ],
    },
    { name: 'Our Team', link: '#ourteam' },
    { name: 'Transfer Prescription', link: '#transferprescription' },
  ];

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md text-teal-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Janvi Technologies Logo"
            className="h-[80px] w-auto drop-shadow-md"
          />
          <div className="text-3xl font-extrabold font-serif text-teal-800 tracking-wide drop-shadow-sm">
            Janvi Technologies
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item, idx) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setSubmenuOpen(idx)}
              onMouseLeave={() => item.submenu && setSubmenuOpen(null)}
            >
              <a
                href={item.link}
                className="text-lg font-medium font-serif hover:text-teal-500 transition-all duration-300 hover:underline underline-offset-4"
              >
                {item.name}
              </a>
              {/* Desktop Dropdown */}
              {item.submenu && submenuOpen === idx && (
                <div className="absolute left-0 mt-2 bg-white border rounded shadow-md z-50 min-w-[180px]">
                  {item.submenu.map(sub => (
                    <a
                      key={sub.name}
                      href={sub.link}
                      className="block px-4 py-2 text-sm text-teal-700 hover:bg-teal-50"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-teal-700 hover:text-teal-500 transition"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-md px-6 pt-4 pb-6 space-y-4 shadow-md">
          {menuItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.link}
                className="block text-lg font-medium font-serif text-teal-700 hover:text-teal-500 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
              {/* Mobile: Indented submenu */}
              {item.submenu && (
                <div className="ml-4 mt-1">
                  {item.submenu.map(sub => (
                    <a
                      key={sub.name}
                      href={sub.link}
                      className="block text-base text-teal-600 hover:text-teal-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
