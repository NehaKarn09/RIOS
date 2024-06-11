import React, { useState } from "react";
import { Link } from "react-router-dom";

function HospitalOwnerDashboard() {
  return (
    <>
      <div className="container mx-auto py-8 px-5">
        {/* Profile Section */}
        <section className="bg-blue-200 p-5 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="mr-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Photo"
                  className="rounded-full w-20 h-20"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Hospital Name</h2>
                <p className="text-gray-600">Owner Name</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {/* Personal Details */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Personal Details</h3>
              <p>Hospital Name: ABC Hospital</p>
              <p>Hospital Address: 123 Main Street, City</p>
              <p>Map Link: https://maps.google.com/...</p>
            </div>
            {/* Co-Owners */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Co-Owners</h3>
              {/* Add Co-Owner Details */}
            </div>
            {/* Additional Details */}
            <div>
              <h3 className="text-xl font-bold mb-2">Additional Details</h3>
              <p>NOC Certificate: ABC123</p>
              <p>Medical License: XYZ456</p>
              <p>Drug License: DEF789</p>
            </div>
          </div>
        </section>

        {/* Functionalities Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">
              Register Staff and Doctors
            </h3>
            <div className="space-y-4">
              <Link to="/register-new-staff">
                <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                  Register New Staff/Doctors
                </button>
              </Link>

              <button className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
                View List of Staff
              </button>
              <button className="w-full bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-300">
                View List of Doctors
              </button>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Monitor Patients</h3>

            {/* Monitor Patients Section */}
            <div className="space-y-4">
              <Link to="/monitor-patient">
                <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                  Monitor Patient
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HospitalOwnerDashboard;
