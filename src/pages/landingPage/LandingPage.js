import React from "react";
import { Link } from "react-router-dom";
import pms from "../../data/images/pms.jpg";

function LandingPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Welcome to RIOS
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Streamline your hospital operations with our comprehensive
                management system.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md">
                Get Started
              </button>
            </div>
            <div className="w-1/2 h-56 ">
              <img
                src={pms}
                alt="Hero"
                className="rounded-lg shadow-lg mx-auto w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-indigo-100 rounded-lg p-6 flex flex-col items-center">
              <img
                src="feature-1.jpg"
                alt="Feature 1"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Patient Registration
              </h3>
              <p className="text-gray-600 text-center">
                Easily register and manage patient information in our system.
              </p>
            </div>
            <div className="bg-indigo-100 rounded-lg p-6 flex flex-col items-center">
              <img
                src="feature-2.jpg"
                alt="Feature 2"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Patient Monitoring
              </h3>
              <p className="text-gray-600 text-center">
                Monitor patient vitals, medication logs, and visitor logs in
                real-time.
              </p>
            </div>
            <div className="bg-indigo-100 rounded-lg p-6 flex flex-col items-center">
              <img
                src="feature-3.jpg"
                alt="Feature 3"
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Role-based Access
              </h3>
              <p className="text-gray-600 text-center">
                Separate dashboards and access levels for hospital owners,
                doctors, staff, and admins.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            What Our Clients Say
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 mb-4">
                  "RIOS System has streamlined our operations and improved
                  patient care significantly."
                </p>
                <div className="flex items-center">
                  <img
                    src="testimonial-1.jpg"
                    alt="Testimonial 1"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      John Doe
                    </h3>
                    <p className="text-gray-600">Hospital Owner</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 mb-4">
                  "The patient monitoring features have made it easier for us to
                  provide timely care and ensure patient safety."
                </p>
                <div className="flex items-center">
                  <img
                    src="testimonial-2.jpg"
                    alt="Testimonial 2"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Jane Smith
                    </h3>
                    <p className="text-gray-600">Doctor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 mb-4">
                  "The role-based access and dashboards have made our daily
                  tasks more organized and efficient."
                </p>
                <div className="flex items-center">
                  <img
                    src="testimonial-3.jpg"
                    alt="Testimonial 3"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      Michael Johnson
                    </h3>
                    <p className="text-gray-600">Nurse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white mb-8">
            Sign up today and experience the benefits of our RIOS System.
          </p>
          <Link to="/register">
            <button className="bg-white hover:bg-gray-100 text-indigo-600 font-semibold py-3 px-6 rounded-md">
              Sign Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
