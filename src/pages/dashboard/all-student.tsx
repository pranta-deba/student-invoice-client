import { Search, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { publicAxios } from "../../config/axios";
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
      setStudents(data.students);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching students", error);
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

  return <div></div>;
};

export default AllStudent;
