import { useState } from "react";
import { Calendar, MapPin, User, Landmark, Banknote } from "lucide-react";

const StudentRegister = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [sectionOptions, setSectionOptions] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    totalStudent: "",
    studentInfo: "",
    studentRegister: "",
    payment: "",
    paymentInfo: "",
  });

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedClass(value);

    if (["IX", "X", "XI", "XII"].some((cls) => value.startsWith(cls))) {
      setSectionOptions(["Science", "Commerce", "Humanities"]);
    } else if (["SSC(Special)", "HSC(Special)"].includes(value)) {
      setSectionOptions(["Special"]);
    } else {
      setSectionOptions(["N/A"]);
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-6 text-[#1A1A2E] flex items-center gap-2">
          <User className="text-[#F25925]" /> Student Registration
        </h2>

        <form>
          <div className="space-y-6">
            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Student Name
              </label>
              <input
                type="text"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
                placeholder="Enter student name"
              />
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Father's Name
              </label>
              <input
                type="text"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
                placeholder="Enter father's name"
              />
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Mother's Name
              </label>
              <input
                type="text"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
                placeholder="Enter mother's name"
              />
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block flex items-center gap-1">
                <Calendar className="w-4 h-4" /> Date of Birth (DD-MM-YYYY)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength={2}
                  placeholder="DD"
                  className="w-1/3 text-slate-900 bg-white border border-gray-300 text-sm px-4 py-3 rounded-md outline-[#F25925]"
                />
                <input
                  type="text"
                  maxLength={2}
                  placeholder="MM"
                  className="w-1/3 text-slate-900 bg-white border border-gray-300 text-sm px-4 py-3 rounded-md outline-[#F25925]"
                />
                <input
                  type="text"
                  maxLength={4}
                  placeholder="YYYY"
                  className="w-1/3 text-slate-900 bg-white border border-gray-300 text-sm px-4 py-3 rounded-md outline-[#F25925]"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Permanent Address
              </label>
              <input
                type="text"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
                placeholder="Enter permanent address"
              />
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Present Address
              </label>
              <input
                type="text"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
                placeholder="Enter present address"
              />
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Gender
              </label>
              <select className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]">
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Class
              </label>
              <select
                onChange={handleClassChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
              >
                <option value="">Select class</option>
                {[
                  "IV",
                  "V",
                  "VI",
                  "IX",
                  "X",
                  "XI",
                  "VII",
                  "VIII",
                  "SSC (Special)",
                  "HSC (Special)",
                ].map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Section
              </label>
              <select className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]">
                {sectionOptions.map((sec) => (
                  <option key={sec} value={sec}>
                    {sec}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center">
              <input
                id="form-fee"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-[#F25925] focus:ring-[#F25925] border-gray-300 rounded"
              />
              <label
                htmlFor="form-fee"
                className="text-slate-600 ml-3 block text-sm"
              >
                Form Fee Paid
              </label>
            </div>

            <div>
              <label className="text-slate-900 text-sm font-medium mb-2 block flex items-center gap-1">
                <Banknote className="w-4 h-4" /> Advance Payment
              </label>
              <input
                type="text"
                placeholder="Enter advance amount"
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
              />
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-white bg-[#F25925] hover:bg-[#FBCEBD] hover:text-black transition-all cursor-pointer"
            >
              Register Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
