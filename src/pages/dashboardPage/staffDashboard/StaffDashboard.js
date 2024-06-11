import React from "react";

import StaffProfile from "../../../components/Cards/staffProfile/staffProfile";
import PatientRegistrationCard from "../../../components/Cards/functionalityCard/registerPatient/patientRegistrationCard";
import MonitorPatient from "../../../components/Cards/functionalityCard/monitorPatient/monitorPatient";

function StaffDashboard() {
  return (
    <>
      <StaffProfile />
      <div className="flex flex-col gap-y-3">
        {" "}
        <PatientRegistrationCard />
        <MonitorPatient />
      </div>
    </>
  );
}

export default StaffDashboard;
