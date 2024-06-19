import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HospitalOwnerRegistration = () => {
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalAddress: '',
    mapLink: '',
    userName:'',
    ownerName: '',
    ownerEmail: '',
    ownerPassword: '',
    phoneNumber: ''
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameParts = formData.ownerName.split(' ');

    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';
    const payload = {
      user: {
        username: formData.userName,
        password: formData.ownerPassword,
        first_name: firstName,
        last_name: lastName,
        email: formData.ownerEmail
      },
      phone_number: formData.phoneNumber
    };

    // console.log('Payload:', payload);

    try {
      const res = await axios.post('https://merchandise-edt-les-crossing.trycloudflare.com/register/hospital_owner/', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      setResponse(res.data);
      setFormData({ hospitalName: '', hospitalAddress: '', mapLink: '', ownerName: '', ownerEmail: '', ownerPassword: '', phoneNumber: '' })
      alert('Registration successful');
    } catch (error) {
      console.error('Error registering hospital owner:', error);
      console.log('Error response:', error.response.data);
      alert('Registration failed');
    }
  };

  return (
    <div className="h-full bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Hospital Owner Registration
        </h2>
        <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <div>
            <div className="mb-4">
              <label htmlFor="hospitalName" className="block text-gray-700 font-bold mb-2">
                Hospital Name
              </label>
              <input
                type="text"
                id="hospitalName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter hospital name"
                value={formData.hospitalName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="hospitalAddress" className="block text-gray-700 font-bold mb-2">
                Hospital Address
              </label>
              <textarea
                id="hospitalAddress"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter hospital address"
                value={formData.hospitalAddress}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="mapLink" className="block text-gray-700 font-bold mb-2">
                Map Link
              </label>
              <input
                type="text"
                id="mapLink"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter map link"
                value={formData.mapLink}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                id="userName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter username"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="ownerName" className="block text-gray-700 font-bold mb-2">
                Owner Name
              </label>
              <input
                type="text"
                id="ownerName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter owner name"
                value={formData.ownerName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ownerEmail" className="block text-gray-700 font-bold mb-2">
                Owner Email
              </label>
              <input
                type="email"
                id="ownerEmail"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter owner email"
                value={formData.ownerEmail}
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="ownerPassword" className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                id="ownerPassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter password"
                value={formData.ownerPassword}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <Link to="/complete-hospital-details" className="col-span-2">
            <div className="flex items-center justify-center  ">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Complete Details
              </button>
            </div>
          </Link>
          <div className="flex items-center justify-center col-span-2 ">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        {/* {response && (
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-green-500 text-center">Registration Successful!</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default HospitalOwnerRegistration;


