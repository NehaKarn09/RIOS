import React from "react";

function PatientMonitorCard(props) {
  return (
    <>
      <div
        key={props?.patient?.id}
        className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 md:w-72 md:h-56"
      >
        <h3 className="text-lg font-bold mb-2">
          Patient ID: {props?.patient?.id}
        </h3>
        <p className="text-gray-700 mb-1">
          Bed Number: {props?.patient?.bednumber}
        </p>
        <p className="text-gray-700 mb-4">
          Patient Name: {props?.patient?.patientname}
        </p>
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Monitor
        </button>
      </div>
    </>
  );
}

export default PatientMonitorCard;
