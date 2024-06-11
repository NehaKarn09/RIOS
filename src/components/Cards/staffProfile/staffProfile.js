import React, { useState } from "react";

function StaffProfile() {
  const [staffProfile, setStaffProfile] = useState({
    profilePhoto: "https://via.placeholder.com/150",
    firstName: "John",
    lastName: "Doe",
    age: "35",
    gender: "Male",
    phone: "+1 123 456 7890",
    personalAddress: "123 Main Street, City",
    education: "Nurse",
  });
  return (
    <>
      {" "}
      <div className="container mx-auto py-8 px-5">
        {/* Doctor Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <img
              src={staffProfile.profilePhoto}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <h2 className="text-2xl font-bold">
              {staffProfile.firstName} {staffProfile.lastName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">
                <span className="font-bold">Age:</span> {staffProfile.age}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Gender:</span> {staffProfile.gender}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Phone:</span> {staffProfile.phone}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Address:</span>{" "}
                {staffProfile.personalAddress}
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <span className="font-bold">Education:</span>{" "}
                {staffProfile.education}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StaffProfile;
