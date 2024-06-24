import React from "react";
import PatientMonitorCard from "../../components/Cards/patientMonitorCard/patientMonitorCard";
import { Link } from "react-router-dom";

function PatientMonitoringPage() {
  const patient_List = [
    { id: 1, bednumber: 3, patientname: "Veda" },
    { id: 2, bednumber: 1, patientname: "John" },
    { id: 3, bednumber: 5, patientname: "Alice" },
    { id: 4, bednumber: 2, patientname: "Maria" },
    { id: 5, bednumber: 4, patientname: "Liam" },
    { id: 6, bednumber: 6, patientname: "Sophia" },
  ];
  return (
    <>
      <div className="h-full w-full overflow-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-items-center">
        {patient_List.map((el) => (
          //   <Link to='/monitor-patient-details/:id=${el.id}'>

          <PatientMonitorCard patient={el} />
        ))}
      </div>
    </>
  );
}

export default PatientMonitoringPage;
