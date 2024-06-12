import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const handleOwners = () => {};
    const handleDoctors = () => {};
    const handleStaffs = () => {};
    const handlePatients = () => {};
    const monitorPatients = () => {};

    return (
        <div className="flex flex-col items-center justify-center min-h-[90vh] bg-gray-100 p-2">
            <div className="flex flex-wrap items-start justify-center gap-4 w-full">
                <div className="flex flex-col w-full sm:w-1/3 p-2">
                    <div className="bg-red-300 text-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
                        <h2 className="text-xl font-bold mb-2">LIST OF HOSPITAL OWNERS</h2>
                        <p className="mb-2">Click the button below to view the Hospital Owners</p>
                        <Link to="/hospital-owner-detail">
                            <button onClick={handleOwners} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
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
                            <button onClick={handleDoctors} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
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
                            <button onClick={handleStaffs} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                                View Staffs
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap items-start justify-around gap-4 w-full mt-2">
                <div className="flex flex-col w-full sm:w-1/3 p-2">
                    <div className="bg-purple-300 text-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
                        <h2 className="text-xl font-bold mb-2">LIST OF PATIENTS</h2>
                        <p className="mb-2">Click the button below to view the Patients</p>
                        <Link to="/patient-detail">
                            <button onClick={handlePatients} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                                View Patients
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col w-full sm:w-1/3 p-2">
                    <div className="bg-teal-300 text-white rounded-3xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
                        <h2 className="text-xl font-bold mb-2">MONITOR PATIENTS</h2>
                        <p className="mb-2">Click the button below to monitor the Patients</p>
                        <Link to="/monitor-patient-detail">
                            <button onClick={monitorPatients} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                                Monitor Patients
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
