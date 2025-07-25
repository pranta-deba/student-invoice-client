import { useState, useRef, useEffect } from "react";
import { UserCircle, User, LogOut } from "lucide-react";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Icon Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition"
      >
        <UserCircle size={28} />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/10 z-50">
          <div className="py-1 text-gray-700">
            <a
              href="#profile"
              className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
            >
              <User size={16} className="mr-2" /> View Profile
            </a>
            <button
              onClick={() => alert("Logged out")}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100"
            >
              <LogOut size={16} className="mr-2" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
