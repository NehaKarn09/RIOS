import React from 'react';
import PatientTable from "../../components/Table/patientTable/PatientTable"; 

const PatientList = () => {
  return (
    <div className="container mx-auto py-8 px-5">
      <section className="bg-blue-100 rounded-lg shadow-lg p-6 mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">List of Patient</h3>
        <PatientTable/>
      </section>
    </div>
  );
}

export default PatientList;
