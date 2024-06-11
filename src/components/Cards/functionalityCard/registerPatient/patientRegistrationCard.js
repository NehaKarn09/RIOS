// PatientRegistrationCard.js

import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const PatientRegistrationCard = () => {
  // const history = useHistory();

  const handleRegister = () => {
    // history.push("/register-patient"); // Adjust the route according to your application
  };

  return (
    <div className="w-[90%] mx-auto    bg-white shadow-lg rounded-lg overflow-hidden  ">
      <div className="md:flex">
        <div className="w-full md:w-1/2 p-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center justify-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              Register New Patient
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Click the button below to register a new patient.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center bg-slate-300">
          <Link to="/register-new-patient">
            <button
              onClick={handleRegister}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register Patient
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistrationCard;
