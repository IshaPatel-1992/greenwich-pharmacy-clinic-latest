import React from "react";
import logo from "../assets/logo/greenwich-logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-950 via-teal-900 to-teal-800 text-gray-200 py-8 font-raleway border-t border-teal-700">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Logo and Clinic Name */}
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <img
            src={logo}
            alt="Greenwich Logo"
            className="h-16 w-auto rounded-xl border-2 border-teal-700 shadow-lg hover:shadow-yellow-400 transition duration-500 hover:scale-105"
          />
          <div className="leading-tight">
            <div
              className="text-lg text-white font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Greenwich Medical Clinic
            </div>
            <div
              className="text-sm text-yellow-400 italic"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              & Pharmacy
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center space-x-6 text-sm">
          <a href="#privacy" className="text-gray-300 hover:text-yellow-400 transition duration-300">
            Privacy
          </a>
          <a href="#terms" className="text-gray-300 hover:text-yellow-400 transition duration-300">
            Terms
          </a>
          <a href="#contactus" className="text-gray-300 hover:text-yellow-400 transition duration-300">
            Contact
          </a>
        </nav>

        {/* Socials and Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4 text-yellow-400 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <div className="text-xs text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Greenwich Medical Clinic and Pharmacy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
