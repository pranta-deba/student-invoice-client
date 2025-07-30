import { Search, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { publicAxios } from "../../config/axios";
import type { StudentType } from "./student-payment";
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
const AllStudent = () => {
  const [students, setStudents] = useState([]);
  const [studentClass, setStudentClass] = useState("");
  const [roll, setRoll] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loader, setLoader] = useState(false);

  const fetchStudents = async () => {
    try {
      setLoader(true);
      const { data } = await publicAxios.get(
        `/api/students?page=${page}&limit=10&studentClass=${studentClass}&roll=${roll}&search=${search}`
      );

      setStudents(data.data || []);
      setTotalPages(data.pagination?.pages || 1);
    } catch (error) {
      console.error("Error fetching students", error);
      setStudents([]);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleFilter = () => {
    setPage(1);
    fetchStudents();
  };

  return (
    <div className="p-4 md:p-8 container mx-auto">

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 items-end justify-end  mb-6">
        {/* Class Select */}
        <select
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          className="w-full md:w-[200px] px-4 py-2 border rounded-md text-sm"
        >
          <option value="">Select Class</option>
          {classes.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        {/* Roll Input */}
        <input
          type="number"
          placeholder="Enter Roll"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="w-full md:w-[200px] px-4 py-2 border rounded-md text-sm"
        />

        {/* Search Input */}
        <div className="relative w-full md:w-[300px]">
          <input
            type="text"
            placeholder="Search by Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-sm pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
        </div>

        {/* Filter Button */}
        <button
          onClick={handleFilter}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm"
        >
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {loader ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
          </div>
        ) : (
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-2 px-4 text-left text-sm">Name</th>
                <th className="py-2 px-4 text-left text-sm">Roll</th>
                <th className="py-2 px-4 text-left text-sm">Class</th>
                <th className="py-2 px-4 text-left text-sm">Fee</th>
                <th className="py-2 px-4 text-left text-sm">Pay</th>
                <th className="py-2 px-4 text-left text-sm">Due</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((s: StudentType) => (
                  <tr key={s._id} className="border-b text-sm">
                    <td className="py-2 px-4">{s.studentName}</td>
                    <td className="py-2 px-4">{s.roll}</td>
                    <td className="py-2 px-4">{s.studentClass}</td>
                    <td className="py-2 px-4">৳ {s.classFee}</td>
                    <td className="py-2 px-4">৳ {s.advancePayment}</td>
                    <td className="py-2 px-4 text-red-600">৳ {s.due}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-4 text-center text-sm text-gray-500"
                  >
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2">
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllStudent;
