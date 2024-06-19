//details cards
//show patient graph

import React from "react";
import PatientGraph from "../Graph/patientGraph/patientGraph";
import PatientDetailCard from "../Cards/patientDetailCard/PatientDetailCard";

function PatientDetails() {
  return (
    <>
      <div className="flex justify-center">
      <div className="w-1/2 flex justify-center p-4">
        <PatientGraph />
      </div>
      <div className="w-1/2 flex justify-center p-4">
        <PatientDetailCard />
      </div>
    </div>
    </>
  );
}

export default PatientDetails;
