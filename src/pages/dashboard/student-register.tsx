import React, { useState, useEffect } from "react";
import { publicAxios } from "../../config/axios";

const classFees: Record<string, number | string> = {
  IV: 1500,
  V: 1500,
  VI: 1600,
  VII: 1700,
  VIII: 1800,
  "IX (Science)": 2500,
  "IX (Commerce)": 2200,
  "IX (Humanities)": 2000,
  "X (Science)": 2500,
  "X (Commerce)": 2200,
  "X (Humanities)": 2000,
  "XI (Science)": 3000,
  "XI (Commerce)": 3000,
  "XI (Humanities)": 2800,
  "XII (Science)": 3000,
  "XII (Commerce)": 3000,
  "XII (Humanities)": 2800,
  "SSC (Special)": "Average",
  "HSC (Special)": "Average",
};

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    dob: { dd: "", mm: "", yyyy: "" },
    permanentAddress: "",
    presentAddress: "",
    gender: "",
    studentClass: "",
    formFee: false,
    advancePayment: "",
  });

  const [classFee, setClassFee] = useState<number | string>("");
  const [loader, setLoader] = useState(false);
  const [average, setAverage] = useState(false);

  useEffect(() => {
    if (formData.studentClass) {
      if (
        formData.studentClass === "SSC (Special)" ||
        formData.studentClass === "HSC (Special)"
      ) {
        setAverage(true);
        setClassFee("");
      } else {
        setClassFee(Number(classFees[formData.studentClass]) || 0);
        setAverage(false);
      }
    }
  }, [formData.studentClass]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, checked } = e.target as HTMLInputElement;
    if (name === "formFee") {
      setFormData({ ...formData, [name]: checked });
    } else if (["dd", "mm", "yyyy"].includes(name)) {
      setFormData({
        ...formData,
        dob: { ...formData.dob, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    const parsedAdvance = formData.advancePayment
      ? Number(formData.advancePayment)
      : 0;
    const parsedClassFee = Number(classFee);

    const submissionData = {
      ...formData,
      advancePayment: parsedAdvance,
      classFee: parsedClassFee,
    };

    console.log("Submitted Data:", submissionData);

    try {
      const res = await publicAxios.post(
        "/api/students/register",
        submissionData
      );
      console.log(res.data);
    } catch (error) {
      console.error("Error during sign-in:", error);
    } finally {
      setLoader(false);
      setFormData({
        studentName: "",
        fatherName: "",
        motherName: "",
        dob: { dd: "", mm: "", yyyy: "" },
        permanentAddress: "",
        presentAddress: "",
        gender: "",
        studentClass: "",
        formFee: false,
        advancePayment: "",
      });
      setAverage(false);
      setClassFee("");
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mt-4 text-center text-[#F25925] underline">Admission Form</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 space-y-4">
        <input
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Student Name"
          className="border p-2 w-full"
          required
        />
        <input
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          placeholder="Father's Name"
          className="border p-2 w-full"
          required
        />
        <input
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          placeholder="Mother's Name"
          className="border p-2 w-full"
          required
        />

        <div className="flex gap-2">
          <input
            type="number"
            name="dd"
            value={formData.dob.dd}
            onChange={handleChange}
            placeholder="DD"
            className="border p-2 w-1/3"
            required
          />
          <input
            type="number"
            name="mm"
            value={formData.dob.mm}
            onChange={handleChange}
            placeholder="MM"
            className="border p-2 w-1/3"
            required
          />
          <input
            name="yyyy"
            type="number"
            value={formData.dob.yyyy}
            onChange={handleChange}
            placeholder="YYYY"
            className="border p-2 w-1/3"
            required
          />
        </div>

        <input
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
          placeholder="Permanent Address"
          className="border p-2 w-full"
          required
        />
        <input
          name="presentAddress"
          value={formData.presentAddress}
          onChange={handleChange}
          placeholder="Present Address"
          className="border p-2 w-full"
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          name="studentClass"
          value={formData.studentClass}
          onChange={handleChange}
          className="border p-2 w-full"
          required
        >
          <option value="">Select Class</option>
          {Object.keys(classFees).map((className) => (
            <option key={className} value={className}>
              {className}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="formFee"
            checked={formData.formFee}
            onChange={handleChange}
          />
          <label htmlFor="formFee">Form Fee Paid</label>
        </div>

        <input
          type="number"
          name="advancePayment"
          value={formData.advancePayment}
          onChange={handleChange}
          placeholder="Advance Payment"
          className="border p-2 w-full"
        />

        <div className="text-lg font-semibold">
          Class Fee: <span>{!average ? classFee : ""}</span>{" "}
          {average && (
            <input
              type="number"
              name="classFee"
              value={classFee}
              onChange={(e) => setClassFee(Number(e.target.value))}
              className="border p-2"
              placeholder="Average Class Fee"
            />
          )}
        </div>

        <button
          disabled={loader}
          type="submit"
          className="bg-[#F25925] hover:bg-[#F25925]/90 text-white px-4 py-2 rounded"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
