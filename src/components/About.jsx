import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        <img
          src="/assets/Img1.jpg"
          alt="Greenwich Clinic Pharmacy"
          className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover max-h-96"
        />
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-teal-700 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Greenwich Clinic Pharmacy
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Greenwich Clinic Pharmacy, we are committed to providing personalized and accessible healthcare services to our community. From expert prescription management to friendly health consultations and convenient delivery, your well-being is our priority.
          </p>
          <a
            href="/about"
            className="inline-block text-teal-700 font-semibold border-b-2 border-teal-700 hover:border-yellow-400 hover:text-yellow-400 transition duration-300"
          >
            Learn more about us →
          </a>
        </div>
      </div>
    </section>
  );
}
