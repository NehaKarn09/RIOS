import React from "react";
import { Link } from "react-router-dom";

function PatientMonitorCard({ patient }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 w-full max-w-sm">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          Patient ID: {patient?.id}
        </h3>
        <p className="text-gray-600">Bed Number: {patient?.bednumber}</p>
        <p className="text-gray-600">Patient Name: {patient?.patientname}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link to={`/monitor-patient-details/:id=${patient?.id}`}>
          <button className=" flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Monitor
          </button>
        </Link>
        <Link to={`/florios-patient-details/:id=${patient?.id}?type=florios`}>
          <button className="flex-1 bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">
            Florios
          </button>
        </Link>
        <Link to={`/urios-patient-details/:id=${patient?.id}`}>
          <button className="flex-1 bg-purple-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300">
            Urios
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PatientMonitorCard;
