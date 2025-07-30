
import {
  FaSyringe,
  FaVial,
  FaStethoscope,
  FaMortarPestle,
  FaUserMd,
  FaPills,
  FaPlaneDeparture,
  FaHome,
  FaPumpMedical,
  FaTruck,
  FaFilePrescription,
  FaPrescriptionBottleAlt,
  FaNotesMedical,
  FaBaby
} from "react-icons/fa";



const pharmacyServices = [
  {
    title: "Vaccinations & Immunizations",
    icon: <FaSyringe className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Flu shots, travel vaccines & more",
  },
  {
    title: "Injection Services",
    icon: <FaPrescriptionBottleAlt className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Safe administration of injectable meds",
  },
  {
    title: "Consultation",
    icon: <FaUserMd className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Private consultations & medication reviews",
  },
  {
    title: "Prescribing Pharmacist",
    icon: <FaStethoscope className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Walk-in assessment & prescribing",
  },
  {
    title: "OAT (Opioid Agonist Treatment)",
    icon: <FaNotesMedical className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Supervised opioid dependency treatment",
  },
  {
    title: "Compounding",
    icon: <FaPills className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Custom-made medications for your needs",
  },
  {
    title: "Compliance Packaging",
    icon: <FaFilePrescription className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Blister packs to simplify medication use",
  },
  {
    title: "Travel Health Services",
    icon: <FaPlaneDeparture className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Travel consults & required immunizations",
  },
  {
    title: "Home Care Supplies",
    icon: <FaHome className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Mobility aids, incontinence & wound care",
  },
  {
    title: "Breast Pump Rental",
    icon: <FaBaby className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Rent electric breast pumps hassle-free",
  },
  {
    title: "Free Local Delivery",
    icon: <FaTruck className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Free delivery within Calgary",
  },
];

export default function PharmacyServices() {
  return (
    <section id="pharmacy" className="bg-gradient-to-br from-yellow-100 via-white to-yellow-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-yellow-700 mb-14">
          Our Pharmacy Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pharmacyServices.map(({ title, description, icon }) => (
            <div
              key={title}
              className="group bg-yellow-500 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center text-center text-white"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm sm:text-base leading-relaxed opacity-90">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
