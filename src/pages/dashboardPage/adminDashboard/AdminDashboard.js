// import React from 'react';
// import {Link} from 'react-router-dom'

// const AdminDashboard = () => {
//     const handleOwners=()=>{
        
//     }
//     const handleDoctors=()=>{

//     }
//     const handleStaffs=()=>{

//     }
//     const handlePatients=()=>{

//     }
//     const monitorPatients=()=>{

//     }
//   return (
//     <div className="flex flex-wrap items-center justify-center min-h-screen bg-gray-100 gap-4">
//       <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 w-full max-w-sm">
//         <h2 className="text-xl font-bold mb-4">LIST OF HOSPITAL OWNERS</h2>
//         <p className="mb-4">This is a card with a light green background and white text.</p>
//         <Link to="/hospital-owner-detail">
//         <button onClick={handleOwners} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           View Hospital Owners
//         </button>
//         </Link>
//       </div>




//       <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 w-full max-w-sm">
//         <h2 className="text-xl font-bold mb-4">LIST OF DOCTORS</h2>
//         <p className="mb-4">This is a card with a light green background and white text.</p>
//         <Link to="/doctor-detail">
//         <button onClick={handleDoctors} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           View Doctors
//         </button>
//         </Link>
//       </div>




//       <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 w-full max-w-sm">
//         <h2 className="text-xl font-bold mb-4">LIST OF STAFFS</h2>
//         <p className="mb-4">This is a card with a light green background and white text.</p>
//         <Link to="/staff-detail">
//         <button onClick={handleStaffs} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           View Staffs
//         </button>
//         </Link>
//       </div>




//       <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 w-full max-w-sm">
//         <h2 className="text-xl font-bold mb-4">LIST OF PATIENTS</h2>
//         <p className="mb-4">This is a card with a light green background and white text.</p>
//         <Link to="/patient-detail">
//         <button onClick={handlePatients} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           View Patients
//         </button>
//         </Link>
//       </div>




//       <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 w-full max-w-sm">
//         <h2 className="text-xl font-bold mb-4">MONITOR PATIENTS</h2>
//         <p className="mb-4">This is a card with a light green background and white text.</p>
//         <Link to="/monitor-patient-detail">
//         <button onClick={monitorPatients} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Monitor Patients
//         </button>
//         </Link>
//       </div>
//     </div>

//   );
// }

// export default AdminDashboard;

import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const handleOwners = () => {};
    const handleDoctors = () => {};
    const handleStaffs = () => {};
    const handlePatients = () => {};
    const monitorPatients = () => {};

    return (
        <div className="flex flex-wrap items-start justify-center min-h-screen bg-gray-100 gap-4">
            <div className="flex flex-col w-full md:w-1/3">
                <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 mb-4">
                    <h2 className="text-xl font-bold mb-4">LIST OF HOSPITAL OWNERS</h2>
                    <p className="mb-4">This is a card with a light green background and white text.</p>
                    <Link to="/hospital-owner-detail">
                        <button onClick={handleOwners} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Hospital Owners
                        </button>
                    </Link>
                </div>

                <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 mb-4">
                    <h2 className="text-xl font-bold mb-4">LIST OF DOCTORS</h2>
                    <p className="mb-4">This is a card with a light green background and white text.</p>
                    <Link to="/doctor-detail">
                        <button onClick={handleDoctors} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Doctors
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col w-full md:w-1/3">
                <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 mb-4">
                    <h2 className="text-xl font-bold mb-4">LIST OF STAFFS</h2>
                    <p className="mb-4">This is a card with a light green background and white text.</p>
                    <Link to="/staff-detail">
                        <button onClick={handleStaffs} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Staffs
                        </button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col w-full md:w-1/3">
                <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 mb-4">
                    <h2 className="text-xl font-bold mb-4">LIST OF PATIENTS</h2>
                    <p className="mb-4">This is a card with a light green background and white text.</p>
                    <Link to="/patient-detail">
                        <button onClick={handlePatients} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            View Patients
                        </button>
                    </Link>
                </div>

                <div className="bg-green-200 text-white rounded-lg shadow-lg p-6 mb-4">
                    <h2 className="text-xl font-bold mb-4">MONITOR PATIENTS</h2>
                    <p className="mb-4">This is a card with a light green background and white text.</p>
                    <Link to="/monitor-patient-detail">
                        <button onClick={monitorPatients} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Monitor Patients
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;



