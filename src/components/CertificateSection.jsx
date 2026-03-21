export default function CertificateSection() {
  return (
    <section
      id="certificate"
      className="py-20 px-6 bg-gray-50 text-center"
      data-aos="fade-up"
    >
      <h3 className="text-3xl font-bold text-teal-800 mb-6">
        Pharmacy Certification
      </h3>

      <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
        Greenwich Pharmacy is fully licensed and accredited by certified
        pharmacists. This ensures safe, reliable, and professional
        healthcare services for our community.
      </p>

      {/* PDF Button */}
      <div className="mt-6">
        <a
          href="/files/certificate.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-700 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-600 transition"
        >
          View Official Certificate (PDF)
        </a>
      </div>

      {/* Compliance Statement */}
      <div className="mt-6 max-w-2xl mx-auto rounded-xl border border-gray-200 bg-white p-4 text-sm leading-6 text-gray-700">
        <p>
          Upon request, patients may receive the name and practice permit number
          of any regulated member who provides them with a pharmacy service or
          who engages in the practice of pharmacy in relation to their care.
        </p>
      </div>
    </section>
  );
}