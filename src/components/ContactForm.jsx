import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "", // Your EmailJS Service ID
        "", // Your EmailJS Template ID
        formRef.current,
        "" // Your EmailJS Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        alert("Failed to send message. Please try again later.");
        console.error(error);
      });
  };

  return (
    <section
      id="contactus"
      className="relative py-24 bg-gradient-to-br from-teal-400 via-teal-100 to-white"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-white/20 to-transparent pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-teal-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-teal-700">
            Have questions or want to discuss your clinic and pharmacy needs? Fill
            out the form below and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-12">
          {/* Left: Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-teal-50 shadow-lg rounded-xl p-10 space-y-6 flex-1"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full rounded-md border border-teal-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full rounded-md border border-teal-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="w-full rounded-md border border-teal-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full rounded-md border border-teal-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="w-full rounded-md border border-teal-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-teal-700 hover:bg-teal-600 text-white font-semibold py-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Right: Contact Info & Map */}
          <div className="flex-1 mt-12 md:mt-0 bg-white rounded-xl shadow-lg p-8 text-teal-900">
            <h3 className="text-2xl font-semibold mb-6">Clinic & Pharmacy Contact</h3>
            <p className="mb-4">
              <strong>Address:</strong> 109 - 45 Greenbriar Dr NW, Calgary, AB
            </p>
            <p className="mb-4">
              <strong>Phone:</strong>{" "}
              <a href="tel:+15879439528" className="text-teal-700 hover:underline">
                (587) 943-9528
              </a>
            </p>
            <p className="mb-6">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@greenwichclinic.com"
                className="text-teal-700 hover:underline"
              >
                info@greenwichclinic.com
              </a>
            </p>

            <div className="w-full h-64 rounded-md overflow-hidden shadow-inner">
              <iframe
                title="Greenwich Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.951340578479!2d-114.13991958450512!3d51.09695897956845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717014d9aa78a5%3A0x5c4f1e70db9d3d18!2s109%2045%20Greenbriar%20Dr%20NW%2C%20Calgary%2C%20AB%20T3B%202Z3!5e0!3m2!1sen!2sca!4v1689873995601!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
