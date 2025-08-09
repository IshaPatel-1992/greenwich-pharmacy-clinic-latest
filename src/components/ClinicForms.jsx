import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaUserPlus, FaCapsules } from "react-icons/fa";

// Common input style
const inputStyle =
  "border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full";
const submitButton =
  "bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg transition w-full md:w-auto";

export default function ClinicForms() {
  const [activeTab, setActiveTab] = useState("registration");

  // ✅ Form ref for EmailJS
  const transferFormRef = useRef();

  // ✅ Email sending function
  const sendEmail = (formRef, templateID, successMsg) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        templateID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert(successMsg);
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  // ✅ Effect for tab switching (existing code)
  useEffect(() => {
    const applyStoredTab = () => {
      const storedTab = localStorage.getItem("activeTab");
      if (storedTab) {
        setActiveTab(storedTab);
        localStorage.removeItem("activeTab");
        const targetId = storedTab === "registration" ? "register" : "transfer";
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 250);
        }
      }
    };
    applyStoredTab();

    const onOpenTab = (e) => {
      if (!e?.detail) return;
      const tab = e.detail;
      setActiveTab(tab);
      const targetId = tab === "registration" ? "register" : "transfer";
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 150);
      }
    };

    window.addEventListener("openTab", onOpenTab);
    return () => window.removeEventListener("openTab", onOpenTab);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-teal-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-4">
          <TabButton
            icon={<FaUserPlus className="mr-2" />}
            label="Patient Registration"
            isActive={activeTab === "registration"}
            onClick={() => setActiveTab("registration")}
          />
          <TabButton
            icon={<FaCapsules className="mr-2" />}
            label="Transfer Prescription"
            isActive={activeTab === "transfer"}
            onClick={() => setActiveTab("transfer")}
          />
        </div>

        {/* Form Panels */}
        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          {/* Microsoft Forms (unchanged) */}
          {activeTab === "registration" && (
            <div id="register">
              <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">
                Patient Registration
              </h2>
              <div className="w-full h-[600px]">
                <iframe
                  title="Registration Form"
                  width="100%"
                  height="100%"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=ZdlrskVmiU6QDTni28A9UknxdGhB-I5Nu8x_qVls8HVUMjRJQ1QySTNOUk9MT1BBR0tMNkU5QzNHTy4u&embed=true"
                  frameBorder="0"
                  style={{
                    border: "none",
                    maxWidth: "100%",
                    maxHeight: "100vh",
                  }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* React Transfer Prescription Form */}
          {activeTab === "transfer" && (
            <div id="transfer">
              <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">
                Transfer Prescription
              </h2>
              <form
                ref={transferFormRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  sendEmail(
                    transferFormRef,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_TRANSFER,
                    "Transfer request sent successfully!"
                  );
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    required
                    pattern="[A-Za-z\s]{2,}"
                    title="First name should be at least 2 characters and contain only letters"
                    className={inputStyle}
                  />
                  <input
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    required
                    pattern="[A-Za-z\s]{2,}"
                    title="Last name should be at least 2 characters and contain only letters"
                    className={inputStyle}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    pattern="\(\d{3}\)-\d{3}-\d{4}"
                    title="Enter phone in format: (123)-456-7890"
                    className={inputStyle}
                  />
                  <input
                    name="dob"
                    type="date"
                    placeholder="Date of Birth"
                    required
                    className={inputStyle}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Enter a valid email address"
                    className={inputStyle}
                  />
                  <input
                    name="address"
                    type="text"
                    placeholder="Address"
                    required
                    className={inputStyle}
                  />
                  <input
                    name="current_pharmacy"
                    type="text"
                    placeholder="Name of Current Pharmacy"
                    required
                    className={inputStyle}
                  />
                  <input
                    name="clinic_doctor"
                    type="text"
                    placeholder="Name of the Medical Clinic/Doctor"
                    required
                    className={inputStyle}
                  />
                  <textarea
                    name="medicines"
                    placeholder="Name of the Medicines"
                    required
                    rows="4"
                    className={`${inputStyle} md:col-span-2`}
                  ></textarea>
                </div>
                <button type="submit" className={submitButton}>
                  Submit Transfer
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TabButton({ label, icon, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-5 py-2 rounded-full transition font-medium shadow-sm ${
        isActive
          ? "bg-teal-600 text-white"
          : "bg-gray-100 text-teal-700 hover:bg-gray-200"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
