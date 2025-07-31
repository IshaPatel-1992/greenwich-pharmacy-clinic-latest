import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUserPlus, FaCapsules } from "react-icons/fa";

export default function ClinicForms() {
  const [activeTab, setActiveTab] = useState("registration");

  const registerFormRef = useRef();
  const transferFormRef = useRef();

  const sendEmail = (formRef, templateID, successMsg) => (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        templateID,
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert(successMsg);
        formRef.current.reset();
      })
      .catch((error) => {
        alert("Failed to send. Please try again.");
        console.error(error);
      });
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500";
  const submitButton =
    "w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg transition";

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
          {activeTab === "registration" && (
            <>
            <div id="register"> {/* 👈 Add this */}
              <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">
                Patient Registration
              </h2>
              <form
                ref={registerFormRef}
                onSubmit={sendEmail(
                  registerFormRef,
                  "template_register",
                  "Registration submitted successfully!"
                )}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="first_name"
                    placeholder="First Name"
                    required
                    className={inputStyle}
                  />
                  <input
                    name="last_name"
                    placeholder="Last Name"
                    required
                    className={inputStyle}
                  />
                  {/* <input name="phone" type="tel" placeholder="Phone Number" required className={inputStyle} /> */}
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    required
                    pattern="\(\d{3}\)-\d{3}-\d{4}"
                    title="Enter phone in format: (000)-000-0000"
                    className={inputStyle}
                  />
                  {/* <input name="email" type="email" placeholder="Email" required className={inputStyle} /> */}
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Enter a valid email like: abcdef@gmail.com"
                    className={inputStyle}
                  />
                  <input
                    name="address"
                    placeholder="Address"
                    required
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
                    name="family_physician"
                    placeholder="Current Family Physician"
                    className={`${inputStyle} md:col-span-2`}
                  />
                </div>
                <button type="submit" className={submitButton}>
                  Submit Registration
                </button>
              </form>
              </div> {/* 👈 Close the div */}
            </>
          )}

          {activeTab === "transfer" && (
            <>
            <div id="transfer"> {/* 👈 Add this */}
              <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">
                Transfer Prescription
              </h2>
              <form
                ref={transferFormRef}
                onSubmit={sendEmail(
                  transferFormRef,
                  "template_transfer",
                  "Transfer request sent successfully!"
                )}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="first_name"
                    placeholder="First Name"
                    required
                    className={inputStyle}
                  />
                  <input
                    name="last_name"
                    placeholder="Last Name"
                    required
                    className={inputStyle}
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    pattern="\(\d{3}\)-\d{3}-\d{4}"
                    title="Enter phone in format: (000)-000-0000"
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
                    title="Enter a valid email like: abcdef@gmail.com"
                    className={inputStyle}
                  />
                  <input
                    name="address"
                    placeholder="Address"
                    required
                    className={inputStyle}
                  />
                  <input
                    name="medication_name"
                    placeholder="Name of Medication(s)"
                    className={`${inputStyle} md:col-span-2`}
                  />
                </div>
                <button type="submit" className={submitButton}>
                  Submit Transfer
                </button>
              </form>
              </div> {/* 👈 Close the div */}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// Tab button component
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
