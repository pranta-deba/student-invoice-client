import { useState } from "react";
import { Calendar, MapPin, User, Banknote } from "lucide-react";

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    dob: { dd: "", mm: "", yyyy: "" },
    permanentAddress: "",
    presentAddress: "",
    gender: "",
    studentClass: "",
    section: "",
    formFee: false,
    advancePayment: "",
  });

  const [sectionOptions, setSectionOptions] = useState<string[]>([]);

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, studentClass: value });

    if (["IX", "X", "XI", "XII"].some((cls) => value.startsWith(cls))) {
      setSectionOptions(["Science", "Commerce", "Humanities"]);
    } else if (["SSC (Special)", "HSC (Special)"].includes(value)) {
      setSectionOptions(["Special"]);
    } else {
      setSectionOptions(["N/A"]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-[#1A1A2E] flex items-center gap-2">
        <User className="text-[#F25925]" /> Student Registration
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Student Name */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Student Name
            </label>
            <input
              type="text"
              required
              value={formData.studentName}
              onChange={(e) =>
                setFormData({ ...formData, studentName: e.target.value })
              }
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
              placeholder="Enter student name"
            />
          </div>

          {/* Father's Name */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Father's Name
            </label>
            <input
              type="text"
              required
              value={formData.fatherName}
              onChange={(e) =>
                setFormData({ ...formData, fatherName: e.target.value })
              }
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
              placeholder="Enter father's name"
            />
          </div>

          {/* Mother's Name */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Mother's Name
            </label>
            <input
              type="text"
              required
              value={formData.motherName}
              onChange={(e) =>
                setFormData({ ...formData, motherName: e.target.value })
              }
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
              placeholder="Enter mother's name"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2  flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Date of Birth (DD-MM-YYYY)
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                maxLength={2}
                required
                placeholder="DD"
                value={formData.dob.dd}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dob: { ...formData.dob, dd: e.target.value },
                  })
                }
                className="w-1/3 text-slate-900 bg-white border border-gray-300 text-sm px-4 py-3 rounded-md outline-[#F25925]"
              />
              <input
                type="number"
                maxLength={2}
                required
                placeholder="MM"
                value={formData.dob.mm}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dob: { ...formData.dob, mm: e.target.value },
                  })
                }
                className="w-1/3 text-slate-900 bg-white border border-gray-300 text-sm px-4 py-3 rounded-md outline-[#F25925]"
              />
              <input
                type="number"
                maxLength={4}
                required
                placeholder="YYYY"
                value={formData.dob.yyyy}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dob: { ...formData.dob, yyyy: e.target.value },
                  })
                }
                className="w-1/3 text-slate-900 bg-white border border-gray-300 text-sm px-4 py-3 rounded-md outline-[#F25925]"
              />
            </div>
          </div>

          {/* Addresses */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2  flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Permanent Address
            </label>
            <input
              type="text"
              required
              value={formData.permanentAddress}
              onChange={(e) =>
                setFormData({ ...formData, permanentAddress: e.target.value })
              }
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
              required
              value={formData.presentAddress}
              onChange={(e) =>
                setFormData({ ...formData, presentAddress: e.target.value })
              }
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
              placeholder="Enter present address"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Gender
            </label>
            <select
              required
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
            >
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Class */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Class
            </label>
            <select
              required
              value={formData.studentClass}
              onChange={handleClassChange}
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
            >
              <option value="">Select class</option>
              {[
                "IV",
                "V",
                "VI",
                "VII",
                "VIII",
                "IX",
                "X",
                "XI",
                "XII",
                "SSC (Special)",
                "HSC (Special)",
              ].map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Section */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Section
            </label>
            <select
              required
              value={formData.section}
              onChange={(e) =>
                setFormData({ ...formData, section: e.target.value })
              }
              className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-[#F25925]"
            >
              {sectionOptions.map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>

          {/* Form Fee */}
          <div className="flex items-center">
            <input
              id="form-fee"
              type="checkbox"
              checked={formData.formFee}
              onChange={(e) =>
                setFormData({ ...formData, formFee: e.target.checked })
              }
              className="h-4 w-4 shrink-0 text-[#F25925] focus:ring-[#F25925] border-gray-300 rounded"
            />
            <label
              htmlFor="form-fee"
              className="text-slate-600 ml-3 block text-sm"
            >
              Form Fee Paid
            </label>
          </div>

          {/* Advance Payment */}
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2  flex items-center gap-1">
              <Banknote className="w-4 h-4" /> Advance Payment
            </label>
            <input
              type="number"
              required
              value={formData.advancePayment}
              onChange={(e) =>
                setFormData({ ...formData, advancePayment: e.target.value })
              }
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
  );
};

export default StudentRegister;
