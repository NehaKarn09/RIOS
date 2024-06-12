import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";

function HospitalOwnerDashboard() {

  const [personalDetail, setPersonalDetail] = useState({
    hospitalName : "Hospital Name",
    hospitalAddress : "Hospital Address",
    ownerName : "HospitalOwnerName",
    mapLink : "https://mapLink/...",
    nocCertificate : "ABC123",
    medicalLicense : "XYZ456",
    drugLicense : "DEF789"
});



  useEffect(() => {
    fetch("/api/personal-details")
      .then((response) => response.json())
      .then((data) => {setPersonalDetail(data);})
      .catch((error) => {
        console.error("Error fetching personal details:", error);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto py-8 px-5">
        {/* Profile Section */}
        {/* {owners.map((owner) => ( */}
        <section key={personalDetail.id} className="bg-blue-200 p-5 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="mr-4">
                <img
                  src={personalDetail.photoUrl}
                  alt="Photo"
                  className="rounded-full w-20 h-20"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{personalDetail.hospitalName}</h2>
                <p className="text-gray-600">{personalDetail.ownerName}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {/* Personal Details */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Personal Details</h3>
              <p>Hospital Name: {personalDetail.hospitalName}</p>
              <p>Hospital Address: {personalDetail.hospitalAddress}</p>
              <p>Map Link: {personalDetail.mapLink}</p>
            </div>
            {/* Co-Owners */}
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Co-Owners</h3>
              {/* Add Co-Owner Details */}
            </div>
            {/* Additional Details */}
            <div>
              <h3 className="text-xl font-bold mb-2">Additional Details</h3>
              <p>NOC Certificate: {personalDetail.nocCertificate}</p>
              <p>Medical License: {personalDetail.medicalLicense}</p>
              <p>Drug License: {personalDetail.drugLicense}</p>
            </div>
          </div>
        </section>
        {/* ))} */}
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

              {/* <button className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
                View List of Staff
              </button> */}
              {/* <button
                onClick={handleViewStaffClick}
                className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
              >
                View List of Staff
              </button> */}

              <Link to="/staff-list">
                <button style={{marginTop: '1rem'}} className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300">
                  View List of Staff
                </button>
              </Link>

              <Link to="/doctor-list">
              <button style={{marginTop: '1rem'}} className="w-full bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-300">
                View List of Doctors
              </button>
              </Link>

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
