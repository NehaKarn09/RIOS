import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const HospitalOwnerDashboard = () => {
    const [ownerDetails, setOwnerDetails] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    const fetchOwnerDetails = async () => {
      const username = localStorage.getItem('username');
      try {
          const response = await axios.get('https://merchandise-edt-les-crossing.trycloudflare.com/register/hospital_owner/', {
              headers: {
                  'Authorization': localStorage.getItem('authToken'),
                  "Content-Type": "application/json"
              },
          });
          // console.log(response.data);
          const ownerData = response.data.find(owner => owner.user.username === username);
          // console.log(ownerData);
          if (ownerData) {
            setOwnerDetails(ownerData);
          } else {
            navigate('/login');
          }
        } catch (error) {
          console.error('Error fetching hospital owner details', error);
          navigate('/login');
        }finally {
          setLoading(false);
      }
      
  };


    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        const username = localStorage.getItem('username');
        if (authToken && username) {
          fetchOwnerDetails();
        }
        else{
          navigate('/login'); // Redirect to login if no token is found
          return;
        }       
    }, [navigate]);

    // console.log('Owner Details State:', ownerDetails);
  
    if (loading) {
      return <div>Loading...</div>;
  }

  if (!ownerDetails) {
      return <div>No details available.</div>;
  }

    // if (!ownerDetails) {
    //     return <div>Loading...</div>;
    // }

    return (
      <div className="container mx-auto py-8 px-5">
            <section key={ownerDetails.id} className="bg-blue-200 p-5 mb-8">
             <div className="flex justify-between items-center mb-4">
               <div className="flex items-center">
                  <div className="mr-4">
                   <img
                      src={ownerDetails.photoUrl}
                      alt="Photo"
                      className="rounded-full w-20 h-20"
                    />
                 </div>
                   <div>
                     <h2 className="text-2xl font-bold">{ownerDetails.hospitalName}</h2>
                     <p className="text-gray-600">{ownerDetails.ownerName}</p>
                   </div>
                 </div>
               </div>
               <div className="flex justify-between">
                <div className="mb-6">
                   <h3 className="text-xl font-bold mb-2">Personal Details</h3>
                   <p>Hospital Name: {ownerDetails.hospitalName}</p>
                   <p>Hospital Address: {ownerDetails.hospitalAddress}</p>
                   <p>Map Link: {ownerDetails.mapLink}</p>
                   <p>Email: {ownerDetails.user.email}</p>
                 </div>
                 <div className="mb-6">
                   <h3 className="text-xl font-bold mb-2">Co-Owners</h3>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2">Additional Details</h3>
                   <p>NOC Certificate: {ownerDetails.nocCertificate}</p>
                   <p>Medical License: {ownerDetails.medicalLicense}</p>
                   <p>Drug License: {ownerDetails.drugLicense}</p>
                 </div>
               </div>
             </section>
             <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-blue-100 rounded-lg shadow-lg p-6">
                 <h3 className="text-xl font-bold mb-4">Register Staff and Doctors</h3>
                 <div className="space-y-4">
                   <Link to="/register-new-staff">
                     <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                       Register New Staff/Doctors
                     </button>
                   </Link>
                   <Link to="/staff-list">
                     <button className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition duration-300 mt-3" >
                       View List of Staff
                     </button>
                   </Link>
                   <Link to="/doctor-list">
                     <button className="w-full bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 mt-3">
                       View List of Doctors
                     </button>
                   </Link>
                 </div>
               </div>
               <div className="bg-blue-100 rounded-lg shadow-lg p-6">
                 <h3 className="text-xl font-bold mb-4">Monitor Patients</h3>
                 <div className="space-y-4">
                   <Link to="/monitor-patient">
                     <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                       Monitor Patient
                     </button>
                   </Link>
                 </div>
               </div>
             </section>
             <section>
              <div>
              <Link to="/update-owner-detail">
               <button className="w-50% bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 mt-12">Update Details</button>
               </Link>
               </div>
             </section>
           </div>
         );
};

export default HospitalOwnerDashboard;


