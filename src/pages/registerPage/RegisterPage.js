import React from "react";
import { Link } from "react-router-dom";

const HospitalOwnerRegistration = () => {
  return (
    <div className="h-full bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Hospital Owner Registration
        </h2>
        <form className="grid grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label
                htmlFor="hospitalName"
                className="block text-gray-700 font-bold mb-2"
              >
                Hospital Name
              </label>
              <input
                type="text"
                id="hospitalName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter hospital name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="hospitalAddress"
                className="block text-gray-700 font-bold mb-2"
              >
                Hospital Address
              </label>
              <textarea
                id="hospitalAddress"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter hospital address"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="mapLink"
                className="block text-gray-700 font-bold mb-2"
              >
                Map Link
              </label>
              <input
                type="text"
                id="mapLink"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter map link"
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label
                htmlFor="ownerName"
                className="block text-gray-700 font-bold mb-2"
              >
                Owner Name
              </label>
              <input
                type="text"
                id="ownerName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter owner name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="ownerEmail"
                className="block text-gray-700 font-bold mb-2"
              >
                Owner Email
              </label>
              <input
                type="email"
                id="ownerEmail"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter owner email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="ownerPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="ownerPassword"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter password"
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
              type="button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HospitalOwnerRegistration;
