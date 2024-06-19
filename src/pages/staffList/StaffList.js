import React from 'react';
import StaffTable from "../../components/Table/staffTable/StaffTable"; 

function StaffList() {
  return (
    <div className="container mx-auto py-8 px-5">
      <section className="bg-blue-100 rounded-lg shadow-lg p-6 mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">List of Staff</h3>
        <StaffTable/>
      </section>
    </div>
  );
}

export default StaffList;