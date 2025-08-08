import React, { useState, useEffect } from "react";
import { FaUserPlus, FaCapsules } from "react-icons/fa";

export default function ClinicForms() {
  const [activeTab, setActiveTab] = useState("registration");

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
      localStorage.removeItem("activeTab");

      const targetId = storedTab === "registration" ? "register" : "transfer";
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-teal-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
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

        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          {activeTab === "registration" && (
            <div id="register">
              <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">Patient Registration</h2>
              <div className="w-full h-[600px]">
                <iframe
                  title="Registration Form"
                  width="100%"
                  height="100%"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=ZdlrskVmiU6QDTni28A9UknxdGhB-I5Nu8x_qVls8HVUMjRJQ1QySTNOUk9MT1BBR0tMNkU5QzNHTy4u&embed=true"
                  frameBorder="0"
                  style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {activeTab === "transfer" && (
            <div id="transfer">
              <h2 className="text-2xl font-bold text-teal-800 text-center mb-4">Transfer Prescription</h2>
              <div className="w-full h-[600px]">
                <iframe
                  title="Transfer Prescription Form"
                  width="100%"
                  height="100%"
                  src="https://forms.office.com/Pages/ResponsePage.aspx?id=ZdlrskVmiU6QDTni28A9UknxdGhB-I5Nu8x_qVls8HVUN0JTM1NSVkJYQ1NYODc2V1lCWEUwQzJKNS4u&embed=true"
                  frameBorder="0"
                  style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
                  allowFullScreen
                ></iframe>
              </div>
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
        isActive ? "bg-teal-600 text-white" : "bg-gray-100 text-teal-700 hover:bg-gray-200"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
