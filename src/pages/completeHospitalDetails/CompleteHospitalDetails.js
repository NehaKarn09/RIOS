import React from "react";

const CompleteHospitalDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Complete Hospital Details
        </h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nocCertificate"
                className="block text-gray-700 font-bold mb-2"
              >
                NOC Certificate
              </label>
              <input
                type="file"
                id="nocCertificate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="medicalLicense"
                className="block text-gray-700 font-bold mb-2"
              >
                Medical License
              </label>
              <input
                type="file"
                id="medicalLicense"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="drugLicense"
                className="block text-gray-700 font-bold mb-2"
              >
                Drug License
              </label>
              <input
                type="file"
                id="drugLicense"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="otherLicenses"
                className="block text-gray-700 font-bold mb-2"
              >
                Other Licenses
              </label>
              <input
                type="file"
                id="otherLicenses"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteHospitalDetails;
