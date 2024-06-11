import React, { useState } from "react";

function Editdoctor() {
  const [degree, setDegree] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [availability, setAvailability] = useState({ day: "", time: "" });
  const handleAvailabilityChange = (e) => {
    setAvailability({ ...availability, [e.target.name]: e.target.value });
  };

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  const [doctorProfile, setDoctorProfile] = useState({
    profilePhoto: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    personalAddress: "",
    degree: "",
    specialty: "",
    availability: "",
    medicalLicense: "",
    drugLicense: "",
  });

  const handleChange = (e) => {
    setDoctorProfile({
      ...doctorProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoUpload = (e) => {
    setDoctorProfile({
      ...doctorProfile,
      profilePhoto: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit doctor profile to server for admin verification
    console.log(doctorProfile);
  };

  return (
    <>
      {" "}
      <section className="bg-blue-100 p-5 mb-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Complete Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Personal Details</h3>
            <div className="mb-4">
              <label
                htmlFor="profilePhoto"
                className="block text-gray-700 font-bold mb-2"
              >
                Profile Photo
              </label>
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                onChange={handlePhotoUpload}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  value={doctorProfile.firstName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  value={doctorProfile.lastName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={doctorProfile.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="personalAddress"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Personal Address
                </label>
                <input
                  type="text"
                  id="personalAddress"
                  name="personalAddress"
                  value={doctorProfile.personalAddress}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>
            {/* Add the remaining personal details fields */}
          </div>

          {/* Degree and Specialty */}
          {/* Add degree and specialty fields */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Degree and Specialty</h3>
            <div className="flex">
              <div className="mr-4">
                <label
                  htmlFor="degree"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Degree
                </label>
                <select
                  id="degree"
                  name="degree"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={degree}
                  onChange={handleDegreeChange}
                >
                  <option value="">Select Degree</option>
                  <option value="MD">MD</option>
                  <option value="DO">DO</option>
                  <option value="PhD">PhD</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label
                  htmlFor="specialty"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Specialty
                </label>
                <select
                  id="specialty"
                  name="specialty"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={specialty}
                  onChange={handleSpecialtyChange}
                >
                  <option value="">Select Specialty</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Neurology">Neurology</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2"></h3>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                Day and Time of Availability
              </h3>
              <div className="flex">
                <div className="mr-4">
                  <label
                    htmlFor="day"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Day
                  </label>
                  <select
                    id="day"
                    name="day"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={availability.day}
                    onChange={handleAvailabilityChange}
                  >
                    <option value="">Select Day</option>
                    <option value="Monday - Friday">Monday - Friday</option>
                    {/* <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option> */}
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={availability.time}
                    onChange={handleAvailabilityChange}
                  >
                    <option value="">Select Time</option>
                    <option value="Cardiology">9.00 AM - 5.00 PM</option>

                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
            {/* Add availability fields */}
          </div>

          {/* Additional Details */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Additional Details</h3>
            {/* Add medical license and drug license fields */}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit for Verification
          </button>
        </form>
      </section>
    </>
  );
}

export default Editdoctor;
