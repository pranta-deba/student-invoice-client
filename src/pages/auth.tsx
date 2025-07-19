import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Auth = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

  const [signinPasswordVisible, setSigninPasswordVisible] = useState(false);
  const [signupPasswordVisible, setSignupPasswordVisible] = useState(false);
  const [signupConfirmVisible, setSignupConfirmVisible] = useState(false);

  const [signinData, setSigninData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSigninSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In Data:", signinData);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign Up Data:", signupData);
  };
  return (
    <div className="container mx-auto my-8 flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-xl">
        <div className="flex justify-center">
          <ul className="w-max flex gap-2 relative before:absolute before:w-full before:bottom-0 before:border-b-2 before:border-gray-200">
            <li
              onClick={() => setActiveTab("signin")}
              className={`tab relative font-semibold text-[15px] text-center py-3 px-6 border-b-2 cursor-pointer transition-all ${
                activeTab === "signin"
                  ? "text-[#F25925] bg-[#FBCEBD] border-[#F25925]"
                  : "text-slate-600 border-gray-200 hover:text-[#F25925]"
              }`}
            >
              Sign In
            </li>
            <li
              onClick={() => setActiveTab("signup")}
              className={`tab relative font-semibold text-[15px] text-center py-3 px-6 border-b-2 cursor-pointer transition-all ${
                activeTab === "signup"
                  ? "text-[#F25925] bg-[#FBCEBD] border-[#F25925]"
                  : "text-slate-600 border-gray-200 hover:text-[#F25925]"
              }`}
            >
              Sign Up
            </li>
          </ul>
        </div>

        {activeTab === "signin" && (
          <form
            onSubmit={handleSigninSubmit}
            className="max-w-md mt-8 space-y-4"
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
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
        )}

        {activeTab === "signup" && (
          <form
            onSubmit={handleSignupSubmit}
            className="max-w-md mt-8 space-y-4"
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                value={signupData.name}
                onChange={(e) =>
                  setSignupData({ ...signupData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
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
                  type={signupPasswordVisible ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-md"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  required
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer text-black"
                  onClick={() => setSignupPasswordVisible((prev) => !prev)}
                >
                  {signupPasswordVisible ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </span>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={signupConfirmVisible ? "text" : "password"}
                  className="w-full px-4 py-2 border rounded-md"
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer text-black"
                  onClick={() => setSignupConfirmVisible((prev) => !prev)}
                >
                  {signupConfirmVisible ? (
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
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
