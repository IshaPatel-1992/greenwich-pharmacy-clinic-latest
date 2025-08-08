import React from "react";
import { FaMapMarkerAlt, FaUserMd, FaPills, FaDirections } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section
      id="contactus"
      className="relative py-24 bg-gradient-to-br from-teal-500 via-teal-100 to-white text-teal-900"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-lg text-white/90">
            Whether you need medical consultation or prescription support,
            we're here for you. Explore our contact details below.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Clinic Info */}
          <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaUserMd className="text-3xl text-teal-600" />
              <h3 className="text-2xl font-semibold">Clinic</h3>
            </div>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+15879439528" className="text-teal-700 hover:underline">
                (587) 943-9528
              </a>
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@greenwichhealth.ca"
                className="text-teal-700 hover:underline"
              >
                info@greenwichhealth.ca
              </a>
            </p>
            <p>
              <strong>Hours:</strong> Mon – Fri: 9am – 5pm <br/>
              Weekends: Closed
            </p>
          </div>

          {/* Pharmacy Info */}
          <div className="bg-white shadow-xl rounded-xl p-8 hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FaPills className="text-3xl text-teal-600" />
              <h3 className="text-2xl font-semibold">Pharmacy</h3>
            </div>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+15879439526" className="text-teal-700 hover:underline">
                (587) 943-9526
              </a>
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:pharmacy@greenwichhealth.ca"
                className="text-teal-700 hover:underline"
              >
                pharmacy@greenwichhealth.ca
              </a>
            </p>
            <p>
              <strong>Hours:</strong> Mon – Fri: 9am – 6pm <br />
              Sat: 10am – 3pm <br />
              Sun: Closed
            </p>
          </div>
        </div>

        {/* Address & Map Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <FaMapMarkerAlt className="text-2xl text-teal-600" />
            <h3 className="text-xl font-semibold">Address</h3>
          </div>
          <p className="mb-4">
            109 - 45 Greenbriar Lane NW, Calgary, AB
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=109+-+45+Greenbriar+Lane+NW,+Calgary,+AB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition mt-2"
          >
            <FaDirections />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
