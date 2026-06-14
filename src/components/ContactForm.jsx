import React from "react";
import {
  FaMapMarkerAlt,
  FaUserMd,
  FaPills,
  FaDirections,
  FaCertificate,
  FaComments,
  FaCalendarAlt,
} from "react-icons/fa";
import concernPoster from "../assets/ContactUS/Poster_PatientConcerns.jpg";
import { Helmet } from "react-helmet-async";

const openSaturdays = [
  { month: "June", dates: ["13", "27"] },
  { month: "July", dates: ["11", "25"] },
  { month: "August", dates: ["8", "22"] },
  { month: "September", dates: ["12", "26"] },
  { month: "October", dates: ["17", "31"] },
  { month: "November", dates: ["7", "21"] },
  { month: "December", dates: ["5", "12"] },
];

export default function ContactForm() {
  return (
    <>
      <Helmet>
        <title>
          Greenwich Medical Clinic & Pharmacy | NW Calgary Walk-In & Pharmacy
        </title>

        <meta
          name="description"
          content="Greenwich Medical Clinic & Pharmacy in NW Calgary offers walk-in care, family medicine, onsite pharmacy services, immunizations, telemedicine, compounding, and prescription delivery."
        />

        <link rel="canonical" href="https://greenwichhealth.ca/contact" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MedicalClinic",
                "@id": "https://greenwichhealth.ca/#medical-services",
                "name": "Greenwich Medical Clinic & Pharmacy",
                "url": "https://greenwichhealth.ca",
                "telephone": "+1-587-943-9528",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "45 Greenbriar Dr NW Unit #109",
                  "addressLocality": "Calgary",
                  "addressRegion": "AB",
                  "postalCode": "T3B 6N4",
                  "addressCountry": "CA"
                },
                "openingHours": [
                  "Mo-Fr 09:00-17:00",
                  "Sa 10:00-14:00"
                ],
                "sameAs": [
                  "https://www.google.com/maps/place/Greenwich+Medical+Clinic+%26+Pharmacy"
                ]
              },
              {
                "@type": "Pharmacy",
                "@id": "https://greenwichhealth.ca/#pharmacy-services",
                "name": "Greenwich Pharmacy",
                "url": "https://greenwichhealth.ca",
                "telephone": "+1-587-943-9526",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "45 Greenbriar Dr NW Unit #109",
                  "addressLocality": "Calgary",
                  "addressRegion": "AB",
                  "postalCode": "T3B 6N4",
                  "addressCountry": "CA"
                },
                "openingHours": "Mo-Fr 09:00-18:00",
                "sameAs": [
                  "https://www.google.com/maps/place/Greenwich+Medical+Clinic+%26+Pharmacy"
                ]
              }
            ]
          }
          `}
        </script>
      </Helmet>

      <section
        id="contactus"
        className="relative bg-gradient-to-br from-teal-500 via-teal-100 to-white py-24 text-teal-900"
      >
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-white drop-shadow-md">
              Get in Touch With Us
            </h2>

            <p className="text-lg text-white/90">
              Your health and comfort are our priority. Whether you’re reaching
              out for care, prescriptions, or to share feedback — we’re here to
              listen and help.
            </p>
          </div>

          <div className="mb-16 rounded-xl bg-white p-8 text-center shadow-lg md:text-left">
            <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
              <FaMapMarkerAlt className="text-2xl text-teal-600" />
              <h3 className="text-xl font-semibold">Address</h3>
            </div>

            <p className="mb-4">
              45 Greenbriar Dr NW Unit #109, Calgary, AB T3B 6N4
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=109+-+45+Greenbriar+Lane+NW,+Calgary,+AB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-6 py-3 font-medium text-white transition hover:bg-teal-600"
            >
              <FaDirections />
              Get Directions
            </a>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-white p-8 shadow-xl transition hover:shadow-2xl">
              <div className="mb-4 flex items-center gap-3">
                <FaUserMd className="text-3xl text-teal-600" />
                <h3 className="text-2xl font-semibold">Clinic</h3>
              </div>

              <p className="mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+15879439528"
                  className="text-teal-700 hover:underline"
                >
                  (587) 943-9528
                </a>
              </p>

              <p className="mb-2">
                <strong>Fax:</strong> 1-(833) 665-3180
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

              <p className="mb-4">
                <strong>Regular Hours:</strong> Mon – Fri: 9:00 AM – 5:00 PM
                <br />
                Sunday & Statutory Holidays: Closed
              </p>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5">
                <div className="mb-3 flex items-center gap-2">
                  <FaCalendarAlt className="text-amber-600" />
                  <h4 className="font-extrabold text-amber-700">
                    Selected Saturdays Open
                  </h4>
                </div>

                <p className="mb-4 inline-block rounded-full bg-teal-700 px-4 py-1.5 text-sm font-bold text-white">
                  10:00 AM – 2:00 PM
                </p>

                <div className="space-y-3">
                  {openSaturdays.map((item) => (
                    <div
                      key={item.month}
                      className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="font-bold text-slate-800">{item.month}</span>

                      <div className="flex gap-2">
                        {item.dates.map((date) => (
                          <span
                            key={date}
                            className="grid h-9 w-9 place-items-center rounded-full bg-amber-100 text-sm font-extrabold text-amber-700"
                          >
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-xl transition hover:shadow-2xl">
              <div className="mb-4 flex items-center gap-3">
                <FaPills className="text-3xl text-teal-600" />
                <h3 className="text-2xl font-semibold">Pharmacy</h3>
              </div>

              <p className="mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+15879439526"
                  className="text-teal-700 hover:underline"
                >
                  (587) 943-9526
                </a>
              </p>

              <p className="mb-2">
                <strong>Fax:</strong> (587) 943-9527
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

              <p className="mb-4">
                <strong>Hours:</strong> Mon – Fri: 9:00 AM – 6:00 PM
                <br />
                Saturday, Sunday & Statutory Holidays: Closed
              </p>

              <p className="mb-4">
                <strong>Pharmacy Licensee:</strong> Mehulkumar Jadav
                <br />
                <strong>Practice Permit No:</strong> 14106
              </p>

              <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                <p>
                  Upon a patient’s request, the licensee is required to provide
                  the name and practice permit number of any regulated member who
                  provides a pharmacy service to that patient or who engages in
                  the practice of pharmacy with respect to that patient.
                </p>
              </div>

              <a
                href="/files/certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-teal-700 shadow-sm transition hover:bg-gray-300"
              >
                <FaCertificate className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:text-yellow-500" />
                View License Certificate
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 text-center shadow-lg">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center">
              <div className="md:w-1/2">
                <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
                  <FaComments className="text-3xl text-teal-600" />
                  <h3 className="text-2xl font-semibold text-teal-800">
                    Questions or Concerns?
                  </h3>
                </div>

                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                  We’re committed to listening, learning, and continually
                  improving our services. If you have questions, feedback, or
                  concerns, please reach out — our team will respond promptly and
                  with care.
                </p>

                <p className="mb-6 text-base italic text-gray-600">
                  “Your voice helps us serve you better — together, we make care
                  stronger.”
                </p>
              </div>

              <div className="flex justify-center md:w-1/2">
                <a
                  href="/files/Poster_PatientConcerns.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src={concernPoster}
                    alt="Alberta College of Pharmacy - Patient Concerns Poster"
                    className="max-w-full rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}