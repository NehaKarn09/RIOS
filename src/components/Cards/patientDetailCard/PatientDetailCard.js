import axios from "axios";
import React, { useState } from "react";
import { backendURL } from "../../../utils/backendURL";

const PatientDetailCard = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/data/`);
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getData();

  return (
    <>
      <div className="w-128 bg-gray-200 border border-gray-400 rounded-lg shadow-md p-4 mt-8">
        <h3 className="text-center font-bold text-2xl mb-4">Patient Detail</h3>
        <div className="flex justify-between">
          {/* Left column */}
          <div className="flex flex-col justify-between mr-4">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                <span className="mr-2">&#8226;</span>Medical Monitor Readings
              </h3>
              <p>Heart Rate(HR) : </p>
              <p>Blood Pressure(BP) : </p>
              <p>Oxygen Saturation(SpO2) : </p>
              <p>Respiratory Rate(RR) : </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                <span className="mr-2">&#8226;</span>Saline Fluid Level
              </h3>
              <p>No. of bottles attached at the moment : </p>
              <p>Bottle's Name : </p>
              <p>Fluid Level for each of the bottle</p>
              <p>Bottle count for the day : </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                <span className="mr-2">&#8226;</span>Urine Bag Level
              </h3>
              <p>
                Urine level in the bag for the moment : {data?.current_level}
              </p>
              <p>Remaining Time : {data?.time_remaining} </p>
              <p>Infusion Rate : {data?.infusion_rate} </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                <span className="mr-2">&#8226;</span>Patient's Behaviour
              </h3>
              <p>Live camera view : </p>
              <p>Sleep Pattern Analysis : </p>
              <h6 className="font-bold mb-1">Abnormal Activity Detection : </h6>
              <p>Generate Alarm : </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                <span className="mr-2">&#8226;</span>Patient Medication
                Log(EXTRAS)
              </h3>
              <p>Doctor's visit for the day : </p>
              <p>Medicine schedule timeline : </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                <span className="mr-2">&#8226;</span>Visitors Log(EXTRAS)
              </h3>
              <p>Count of visitors : </p>
              <p>Visitors Detail : </p>
              <p>Time Log(In/Out) : </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDetailCard;
