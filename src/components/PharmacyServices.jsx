
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
    description: "Stay protected with flu shots, shingles, pneumonia, and other essential vaccines. We also offer travel-related immunizations for global destinations.",
  },
  {
    title: "Injection Services",
    icon: <FaPrescriptionBottleAlt className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Our trained pharmacists administer injectable medications safely and professionally—no appointment needed for most services.",
  },
  {
    title: "Consultation",
    icon: <FaUserMd className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Receive private medication reviews and health consultations. We'll answer your questions and ensure you're on the right path with your prescriptions.",
  },
  {
    title: "Prescribing Pharmacist",
    icon: <FaStethoscope className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Our pharmacists can assess and prescribe medications for minor conditions like UTIs, allergies, cold sores, and more—on the spot.",
  },
  {
    title: "OAT (Opioid Agonist Treatment)",
    icon: <FaNotesMedical className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Supportive and discreet care for opioid dependency. We offer supervised medication dispensing and ongoing treatment support.",
  },
  {
    title: "Compounding",
    icon: <FaPills className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Customized medications tailored to your unique needs—ideal for allergies, pediatrics, dermatology, and hormone therapies.",
  },
  {
    title: "Compliance Packaging",
    icon: <FaFilePrescription className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Simplify your routine with blister packs organized by day and time. Perfect for seniors, caregivers, and those on multiple medications.",
  },
  {
    title: "Travel Health Services",
    icon: <FaPlaneDeparture className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Plan ahead with travel consults, country-specific vaccine recommendations, and prescriptions for travel-related health concerns.",
  },
  {
    title: "Home Care Supplies",
    icon: <FaHome className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "We carry medical equipment and supplies like mobility aids, wound dressings, incontinence products, and daily living essentials.",
  },
  {
    title: "Breast Pump Rental",
    icon: <FaBaby className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Convenient electric breast pump rentals available by the day, week, or month. Clean, safe, and reliable equipment for new moms.",
  },
  {
    title: "Free Local Delivery",
    icon: <FaTruck className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />,
    description: "Enjoy the convenience of free same-day prescription delivery within Calgary. Perfect for busy families, seniors, or anyone at home.",
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
