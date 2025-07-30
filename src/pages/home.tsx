import {
  Users,
  FileText,
  UserPlus,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";
import Auth from "./auth";
import useAuth from "../hooks/useAuth";

const navItems = [
  {
    name: "All Student",
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
  }
];

const Home = () => {
  const { user, appLoader } = useAuth();
  return (
    <div className="container mx-auto p-4">
      {!appLoader && !user && <Auth />}

      {!appLoader && user && user.role === "admin" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      )}

      {!appLoader && user && user.role !== "admin" && (
        <div>You are not authorized to access this page</div>
      )}
    </div>
  );
};

export default Home;
