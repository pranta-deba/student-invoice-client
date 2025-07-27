import {
  Users,
  FileText,
  UserPlus,
  CreditCard,
  ReceiptText,
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Total Student",
    icon: <Users size={28} />,
    link: "dashboard/total-student",
  },
  {
    name: "Student Information",
    icon: <FileText size={28} />,
    link: "dashboard/student-info",
  },
  {
    name: "Student Register",
    icon: <UserPlus size={28} />,
    link: "dashboard/register",
  },
  {
    name: "Payment",
    icon: <CreditCard size={28} />,
    link: "dashboard/payment",
  },
  {
    name: "Payment Information",
    icon: <ReceiptText size={28} />,
    link: "dashboard/payment-info",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            className="flex items-center gap-4 p-5 rounded-xl shadow-md bg-[#1A1A2E] text-white hover:bg-[#E94560] transition duration-300"
          >
            <div className="bg-white text-[#1A1A2E] p-2 rounded-full">
              {item.icon}
            </div>
            <span className="text-lg font-semibold">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
