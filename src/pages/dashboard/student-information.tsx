import { useState } from "react";
import type { StudentType } from "./student-payment";
import { publicAxios } from "../../config/axios";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
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

const StudentInformation = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [roll, setRoll] = useState("");
  const [loader, setLoader] = useState(false);
  const [student, setStudent] = useState<StudentType | null>(null);

  const handleSearch = async () => {
    setStudent(null);
    setLoader(true);

    if (!selectedClass || !roll) {
      toast.error("Please select a class and roll number.");
      setLoader(false);
      return;
    }

    try {
      const res = await publicAxios.get(
        `/api/students/single-student?studentClass=${selectedClass}&roll=${roll}`
      );

      console.log(res.data);

      if (res.data.student) {
        setStudent(res.data.student);
      } else {
        toast.error("Student not found.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-3  md:my-6 p-4">
      <div className="w-full md:w-4/12 p-4 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-center text-[#F25925]">Search Student</h2>

        {/* Class Select */}
        <div>
          <label className="block text-sm font-medium mb-1">Select Class</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F25925]"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F25925]"
          />
        </div>

        {/* Search Button */}
        <div className="text-center">
          <button
            disabled={loader}
            onClick={handleSearch}
            className="bg-[#F25925] hover:bg-[#F25925]/90 text-white px-6 py-2 rounded-md transition"
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full md:w-8/12 p-4 rounded-lg shadow-md space-y-4">
        <h1 className="text-xl text-center font-semibold text-[#F25925] underline">Student Details</h1>

        {loader && (
           <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin h-8 w-8 text-[#F25925]" />
          </div>
        )}
        {student && (
          <>
            <div className=" space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {/* Name & Class */}
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Student Name: </p>
                  <p className="text-gray-900">{student.studentName}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Class: </p>
                  <p className="text-gray-900">{student.studentClass}</p>
                </div>

                {/* Roll & Gender */}
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Roll Number: </p>
                  <p className="text-gray-900">{student.roll}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Gender: </p>
                  <p className="text-gray-900">{student.gender}</p>
                </div>

                {/* DOB */}
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Date of Birth: </p>
                  <p className="text-gray-900">
                    {student.dob.dd}/{student.dob.mm}/{student.dob.yyyy}
                  </p>
                </div>

                {/* Addresses */}
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Permanent Address: </p>
                  <p className="text-gray-900">{student.permanentAddress}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Present Address: </p>
                  <p className="text-gray-900">{student.presentAddress}</p>
                </div>

                {/* Parents */}
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Father's Name: </p>
                  <p className="text-gray-900">{student.fatherName}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Mother's Name: </p>
                  <p className="text-gray-900">{student.motherName}</p>
                </div>

                {/* Financial Info */}
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Form Fee Paid: </p>
                  <p
                    className={`font-semibold ${
                      student.formFee ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {student.formFee ? "Yes" : "No"}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Class Fee: </p>
                  <p className="text-gray-900">৳ {student.classFee}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Advance Paid: </p>
                  <p className="text-gray-900">৳ {student.advancePayment}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Due: </p>
                  <p className="text-gray-900  font-semibold">
                    ৳ {student.due}
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#F25925] font-bold">Total Paid: </p>
                  <p className="text-gray-900 font-semibold">
                    ৳ {student.advancePayment + (student.formFee ? 500 : 0)}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentInformation;
