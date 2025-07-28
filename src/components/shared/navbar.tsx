import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import ProfileDropdown from "../ui/profile-dropdown";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Team", path: "/team" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useAuth();

  console.log(user);

  return (
    <div className="shadow-md px-4">
      <header className="container mx-auto flex bg-white min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <Link to="/" className="max-sm:hidden">
            <img src={logo} alt="logo" className="w-16" />
          </Link>
          <Link to="/" className="hidden max-sm:block">
            <img src={logo} alt="logo" className="w-16" />
          </Link>
          <div className="flex items-center gap-2">
            <div
              className={`${
                isMenuOpen ? "block" : "max-lg:hidden"
              } lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}
            >
              {isMenuOpen && (
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 fill-black"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                  </svg>
                </button>
              )}

              <ul className="lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                <li className="mb-6 hidden max-lg:block">
                  <Link to="/">
                    <img src={logo} alt="logo" className="w-20" />
                  </Link>
                </li>
                {navLinks.map((item) => (
                  <li
                    key={item.name}
                    className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
                  >
                    <Link
                      to={item.path}
                      className={`block font-medium text-[15px] ${
                        item.name === "Home"
                          ? "text-[#F25925] hover:text-[#F25925]"
                          : "text-black hover:text-[#FBCEBD]"
                      }`}
                      onClick={() => setIsMenuOpen(false)} // auto close on mobile
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex max-lg:ml-auto space-x-4">
              {/* {!user && (
                <button className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">
                  <Link to="auth">Sign in</Link>
                </button>
              )} */}

              {user && <ProfileDropdown />}

              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden cursor-pointer"
              >
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
