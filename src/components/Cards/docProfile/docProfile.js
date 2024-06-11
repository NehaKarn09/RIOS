import React, { useState } from "react";

function DocProfile() {
  const [doctorProfile, setDoctorProfile] = useState({
    profilePhoto: "https://via.placeholder.com/150",
    firstName: "John",
    lastName: "Doe",
    age: "35",
    gender: "Male",
    phone: "+1 123 456 7890",
    personalAddress: "123 Main Street, City",
    degree: "M.D.",
    specialty: "Cardiology",
    availability: "Monday - Friday, 9 AM - 5 PM",
    medicalLicense: "ABC123",
    drugLicense: "XYZ456",
  });
  return (
    <>
      {" "}
      <div className="container mx-auto py-8 px-5">
        {/* Doctor Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src={doctorProfile.profilePhoto}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <h2 className="text-2xl font-bold">
              {doctorProfile.firstName} {doctorProfile.lastName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">
                <span className="font-bold">Age:</span> {doctorProfile.age}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Gender:</span>{" "}
                {doctorProfile.gender}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Phone:</span> {doctorProfile.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Address:</span>{" "}
                {doctorProfile.personalAddress}
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <span className="font-bold">Degree:</span>{" "}
                {doctorProfile.degree}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Specialty:</span>{" "}
                {doctorProfile.specialty}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Availability:</span>{" "}
                {doctorProfile.availability}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Medical License:</span>{" "}
                {doctorProfile.medicalLicense}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Drug License:</span>{" "}
                {doctorProfile.drugLicense}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocProfile;
