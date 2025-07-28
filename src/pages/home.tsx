import {
  Users,
  FileText,
  UserPlus,
  CreditCard,
  ReceiptText,
  EyeOff,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { publicAxios } from "../config/axios";
import toast from "react-hot-toast";

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
  const { user, appLoader } = useAuth();
  const [signinData, setSigninData] = useState({ email: "", password: "" });
  const [signinPasswordVisible, setSigninPasswordVisible] = useState(false);
  const handleSigninSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In Data:", signinData);

    try {
      const res = await publicAxios.post("/api/users/login", signinData);
      console.log(res.data);
      toast.success("Sign-in successful!");
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("Sign-in failed!");
    }
  };

  console.log(user);
  return (
    <div className="container mx-auto p-4">
      <div>
        <form onSubmit={handleSigninSubmit} className="max-w-md mt-8 space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              autoComplete="email"
              className="w-full px-4 py-2 border rounded-md"
              value={signinData.email}
              onChange={(e) =>
                setSigninData({ ...signinData, email: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-black">
              Password
            </label>
            <div className="relative">
              <input
                type={signinPasswordVisible ? "text" : "password"}
                className="w-full px-4 py-2 border rounded-md"
                autoComplete="new-password"
                value={signinData.password}
                onChange={(e) =>
                  setSigninData({ ...signinData, password: e.target.value })
                }
                required
              />
              <span
                className="absolute right-3 top-2.5 cursor-pointer text-black"
                onClick={() => setSigninPasswordVisible((prev) => !prev)}
              >
                {signinPasswordVisible ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#F25925] text-white py-2 px-4 rounded-md hover:bg-[#FBCEBD] hover:text-black transition-all"
          >
            Sign In
          </button>
        </form>
      </div>

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
    </div>
  );
};

export default Home;
