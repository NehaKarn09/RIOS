import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const handleOwners = () => {};
  const handleDoctors = () => {};
  const handleStaffs = () => {};
  const handlePatients = () => {};
  const monitorPatients = () => {};

  const [adminData, setAdminData] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchAdminDetails = async () => {
    const username = localStorage.getItem("username");
    try {
      const response = await axios.get(
        "https://merchandise-edt-les-crossing.trycloudflare.com/register/admin/",
        {
          headers: {
            Authorization: localStorage.getItem("authToken"),
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log(response.data);
      const adminSpecific = response.data.find(
        (admin) => admin.user.username === username
      );
      //   console.log('Admin Data',adminSpecific);
      if (adminSpecific) {
        setAdminData(adminSpecific);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log("Error fetching the details of the admin", error);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const username = localStorage.getItem("username");
    if (authToken && username) {
      fetchAdminDetails();
    } else {
      navigate("/login");
      return;
    }
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!adminData) {
    return <div>No details available.</div>;
  }

  // console.log(adminData);
  // if(!adminData){
  //     return <div>Loading...</div>;
  // }

  return (
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
              <h2 className="text-2xl font-bold">Admin</h2>
              <p className="text-gray-600">{adminData.user.username}</p>
            </div>
          </div>
          <div>
            <Link to='/update-admin-detail'>
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out">
              Edit Details
            </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between">
          {/* Personal Details */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Personal Details</h3>
            <p>Email: {adminData.user.email}</p>
            <p>Contact No: {adminData.phone_number}</p>
            {/* <p>Contact No: {adminData.phone_number}</p> */}
          </div>
        </div>
        {/* <div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md">
                Edit Details
              </button>
        </div> */}
      </section>

      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100 p-2">
        <div className="flex flex-wrap items-start justify-center gap-4 w-full">
          <div className="flex flex-col w-full sm:w-1/3 p-2">
            <div className="bg-red-300 text-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-2">
                LIST OF HOSPITAL OWNERS
              </h2>
              <p className="mb-2">
                Click the button below to view the Hospital Owners
              </p>
              <Link to="/hospital-owner-detail">
                <button
                  onClick={handleOwners}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                  View Hospital Owners
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-1/3 p-2">
            <div className="bg-blue-300 text-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-2">LIST OF DOCTORS</h2>
              <p className="mb-2">Click the button below to view the Doctors</p>
              <Link to="/doctor-detail">
                <button
                  onClick={handleDoctors}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                  View Doctors
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-1/3 p-2">
            <div className="bg-yellow-300 text-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-2">LIST OF STAFFS</h2>
              <p className="mb-2">Click the button below to view the Staffs</p>
              <Link to="/staff-detail">
                <button
                  onClick={handleStaffs}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                  View Staffs
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-center gap-4 w-full mt-2">
          <div className="flex flex-col w-full sm:w-1/3 p-2">
            <div className="bg-purple-300 text-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-2">LIST OF PATIENTS</h2>
              <p className="mb-2">
                Click the button below to view the Patients
              </p>
              <Link to="/patient-detail">
                <button
                  onClick={handlePatients}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                  View Patients
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-1/3 p-2">
            <div className="bg-teal-300 text-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-2">MONITOR PATIENTS</h2>
              <p className="mb-2">
                Click the button below to monitor the Patients
              </p>
              <Link to="/monitor-patient-detail">
                <button
                  onClick={monitorPatients}
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                >
                  Monitor Patients
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
