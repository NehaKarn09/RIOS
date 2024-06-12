import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Editdoctor from "../../edit/editdoctor/editdoctor";
import DocProfile from "../../../components/Cards/docProfile/docProfile";

const DoctorDashboard = () => {
  const [edit, SetEdit] = useState(false);
  return (
    <div className="container h-[100%] mx-auto py-8 px-5 overflow-auto">
      {/* Profile Section */}
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          SetEdit(!edit);
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 my-2  px-4 rounded"
      >
        Edit
      </button>{" "}
      <DocProfile />
      {edit ? <Editdoctor /> : <></>}
      {/* List of Patients Assigned */}
      <section className="bg-blue-100 p-5 mb-8 rounded-lg shadow-md">
        <Link to="/patient-list">
        <h3 className="text-xl font-bold mb-4">List of Patients Assigned</h3>
        {/* Add list of patients assigned */}
        </Link>
      </section>
      {/* Add/Edit Medication */}
      <section className="bg-blue-100 p-5 mb-8 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Add/Edit Medication</h3>
        {/* Add medication form */}
      </section>
    </div>
  );
};

export default DoctorDashboard;
