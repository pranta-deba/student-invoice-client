import { useState } from "react";
import toast from "react-hot-toast";
import { publicAxios } from "../../config/axios";
import { Loader2 } from "lucide-react";

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

  const [payment, setPayment] = useState<string | "">("");

  const handleSearch = async () => {
    setStudent(null);
    setLoader(true);
    setPayment("");

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

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    if (!payment) {
      toast.error("Please search for a student first.");
      setLoader(false);
      return;
    }

    try {
      const res = await publicAxios.put(`/api/students/student-payment`, {
        studentId: student?._id,
        payment: parseInt(payment),
      });
      console.log(res.data);
      if (res.data.success) {
        setStudent(res.data.student);
        toast.success("Payment updated successfully!");
        setPayment("");
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
            onClick={handleSearch}
            disabled={loader}
            className="bg-[#F25925] hover:bg-[#F25925]/90 text-white px-6 py-2 rounded-md  transition"
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full md:w-8/12 p-4 rounded-lg shadow-md space-y-4">
        <h1 className="text-xl font-semibold text-center underline text-[#F25925]">Payment Details</h1>

        {loader && (
         <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin h-8 w-8 text-[#F25925]" />
          </div>
        )}

        {student && (
          <div>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <span className="text-[#F25925] font-bold">Student Name:</span>{" "}
                <span>{student.studentName}</span>
              </div>
              <div>
                <span className="text-[#F25925] font-bold">Roll No:</span>{" "}
                <span>{student.roll}</span>
              </div>
              <div>
                <span className="text-[#F25925] font-bold">Class:</span>{" "}
                <span>{student.studentClass}</span>
              </div>
              <div>
                <span className="text-[#F25925] font-bold">Class Fee:</span>{" "}
                <span>৳ {student.classFee}</span>
              </div>
              <div>
                <span className="text-[#F25925] font-bold">Total Pay:</span>{" "}
                <span>
                  ৳ {student.advancePayment + (student.formFee ? 500 : 0)}
                </span>
              </div>
              <div>
                <span className="text-[#F25925] font-bold">Due Amount:</span>{" "}
                <span
                  className={`font-bold ${
                    student.due! > 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  ৳ {student.due}
                </span>
              </div>
              <div>
                <span className="text-[#F25925] font-bold">Form Fee Paid:</span>{" "}
                <span>{student.formFee ? "Yes ✅" : "No ❌"}</span>
              </div>
            </div>

            <form
              onSubmit={handlePaymentSubmit}
              className="flex flex-col gap-4 mt-4"
            >
              <label className="font-semibold text-gray-700">
                Payment Amount (৳)
                <input
                  type="text"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="mt-1 border rounded-md p-2 focus:outline-[#F25925] mx-2"
                  placeholder="Enter payment amount"
                  required
                />
              </label>

              <button
                type="submit"
                disabled={payment === ""}
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
