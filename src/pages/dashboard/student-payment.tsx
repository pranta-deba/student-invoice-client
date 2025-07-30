import { useState } from "react";
import toast from "react-hot-toast";
import { publicAxios } from "../../config/axios";

export type StudentType = {
  _id?: string;
  studentName: string;
  fatherName: string;
  motherName: string;
  dob: {
    dd: string;
    mm: string;
    yyyy: string;
    _id: string;
  };
  gender: "Male" | "Female" | "Other";
  permanentAddress: string;
  presentAddress: string;
  studentClass:
    | "IV"
    | "V"
    | "VI"
    | "VII"
    | "VIII"
    | "IX (Science)"
    | "IX (Commerce)"
    | "IX (Humanities)"
    | "X (Science)"
    | "X (Commerce)"
    | "X (Humanities)"
    | "SSC (Special)"
    | "XI (Science)"
    | "XI (Commerce)"
    | "XI (Humanities)"
    | "XII (Science)"
    | "XII (Commerce)"
    | "XII (Humanities)"
    | "HSC (Special)";
  formFee: boolean;
  advancePayment: number;
  classFee: number;
  roll: number;
  due?: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

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
  const [loader, setLoader] = useState(false);
  const [student, setStudent] = useState<StudentType | null>(null);

  const [payment, setPayment] = useState<number | "">("");

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
        <h1 className=" text-center font-bold">Payment Details</h1>

        {loader && (
          <div className="flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}

        {student && (
          <div>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <span className="font-semibold">Student Name:</span>{" "}
                <span>{student.studentName}</span>
              </div>
              <div>
                <span className="font-semibold">Roll No:</span>{" "}
                <span>{student.roll}</span>
              </div>
              <div>
                <span className="font-semibold">Class:</span>{" "}
                <span>{student.studentClass}</span>
              </div>
              <div>
                <span className="font-semibold">Class Fee:</span>{" "}
                <span>৳ {student.classFee}</span>
              </div>
              <div>
                <span className="font-semibold">Total Pay:</span>{" "}
                <span>৳ {student.classFee - student.due!}</span>
              </div>
              <div>
                <span className="font-semibold">Due Amount:</span>{" "}
                <span
                  className={`font-bold ${
                    student.due! > 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  ৳ {student.due}
                </span>
              </div>
              <div>
                <span className="font-semibold">Form Fee Paid:</span>{" "}
                <span>{student.formFee ? "Yes ✅" : "No ❌"}</span>
              </div>
            </div>

            <form className="flex flex-col gap-4 mt-4">
              <label className="font-semibold text-gray-700">
                Payment Amount (৳)
                <input
                  type="number"
                  min={0}
                  value={payment}
                  onChange={(e) => setPayment(Number(e.target.value))}
                  className="mt-1 border rounded-md p-2 focus:outline-[#F25925]"
                  placeholder="Enter payment amount"
                  required
                />
              </label>

              <button
                type="submit"
                disabled={payment === "" || payment <= 0}
                className="bg-[#F25925] text-white py-2 rounded-md hover:bg-[#d94b1e] disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Submit Payment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentPayment;
