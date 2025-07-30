import { useState } from "react";
import toast from "react-hot-toast";

const classes = [
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX (Science)",
  "IX (Commerce)",
  "IX (Humanities)",
  "X (Science)",
  "X (Commerce)",
  "X (Humanities)",
  "XI (Science)",
  "XI (Commerce)",
  "XI (Humanities)",
  "XII (Science)",
  "XII (Commerce)",
  "XII (Humanities)",
  "SSC (Special)",
  "HSC (Special)",
];

const StudentPayment = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [roll, setRoll] = useState("");

  const handleSearch = () => {
    console.log("Class:", selectedClass);
    console.log("Roll:", roll);
    if (!selectedClass || !roll)
      return toast.error("Please fill all the fields");
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-3  my-6 p-4">
      <div className="w-full md:w-4/12 p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-center">Search Student</h2>

        {/* Class Select */}
        <div>
          <label className="block text-sm font-medium mb-1">Select Class</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Class
            </option>
            {classes.map((className, index) => (
              <option key={index} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>

        {/* Roll Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Roll Number</label>
          <input
            type="number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            placeholder="Enter Roll Number"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Search Button */}
        <div className="text-center">
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full md:w-8/12 p-4 rounded-lg shadow-md space-y-4">
        <h1 className="bg-white  text-center font-bold">Payment Details</h1>
      </div>
    </div>
  );
};

export default StudentPayment;
