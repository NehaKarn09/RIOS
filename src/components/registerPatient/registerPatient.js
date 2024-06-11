import React, { useState } from "react";

const PatientRegistration = () => {
  const [patientDetails, setPatientDetails] = useState({
    livePhoto: null,
    savedPhoto: null,
    disease: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    address: "",
    ward: "",
    bedNo: "",
    consultingDoctor: "",
    admissionDate: "",
    dischargeDate: "",
    assignedDoctor: "",
    assignedNurse: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "livePhoto" || name === "savedPhoto") {
      setPatientDetails((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setPatientDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit patient details to the server
    console.log(patientDetails);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Patient Registration
      </h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="livePhoto"
              className="block text-gray-700 font-bold mb-2"
            >
              Live Photo
            </label>
            <input
              type="file"
              id="livePhoto"
              name="livePhoto"
              accept="image/*"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="savedPhoto"
              className="block text-gray-700 font-bold mb-2"
            >
              Saved Photo
            </label>
            <input
              type="file"
              id="savedPhoto"
              name="savedPhoto"
              accept="image/*"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="disease"
            className="block text-gray-700 font-bold mb-2"
          >
            Suffering With
          </label>
          <input
            type="text"
            id="disease"
            name="disease"
            value={patientDetails.disease}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter disease"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={patientDetails.firstName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={patientDetails.lastName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter last name"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
              Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={patientDetails.age}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter age"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-gray-700 font-bold mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={patientDetails.gender}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={patientDetails.address}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Address"
            />
          </div>
          <div>
            <label
              htmlFor="ward"
              className="block text-gray-700 font-bold mb-2"
            >
              Ward
            </label>
            <input
              type="text"
              id="ward"
              name="ward"
              value={patientDetails.ward}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Ward"
            />
          </div>
          <div>
            <label
              htmlFor="bedNo"
              className="block text-gray-700 font-bold mb-2"
            >
              Bed Number
            </label>
            <input
              type="text"
              id="bedNo"
              name="bedNo"
              value={patientDetails.bedNo}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Bed Number"
            />
          </div>
          <div>
            <label
              htmlFor="consultingDoctor"
              className="block text-gray-700 font-bold mb-2"
            >
              Consulting Doctor
            </label>
            <input
              type="text"
              id="consultingDoctor"
              name="consultingDoctor"
              value={patientDetails.consultingDoctor}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Consulting Doctor"
            />
          </div>
          <div>
            <label
              htmlFor="admissionDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Admission Date
            </label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              value={patientDetails.admissionDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="dischargeDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Discharge Date
            </label>
            <input
              type="date"
              id="dischargeDate"
              name="dischargeDate"
              value={patientDetails.dischargeDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="assignedDoctor"
              className="block text-gray-700 font-bold mb-2"
            >
              Assigned Doctor
            </label>
            <input
              type="text"
              id="assignedDoctor"
              name="assignedDoctor"
              value={patientDetails.assignedDoctor}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Assigned Doctor"
            />
          </div>
          <div>
            <label
              htmlFor="assignedNurse"
              className="block text-gray-700 font-bold mb-2"
            >
              Assigned Nurse
            </label>
            <input
              type="text"
              id="assignedNurse"
              name="assignedNurse"
              value={patientDetails.assignedNurse}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Assigned Nurse"
            />
          </div>
        </div>
        {/* Add the remaining fields for age, gender, address, ward, bed number, consulting doctor, admission date, discharge date, assigned doctor, and assigned nurse */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register Patient
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientRegistration;
