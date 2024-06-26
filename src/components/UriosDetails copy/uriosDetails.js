import React from "react";
import InfusionRateGraph from "../Graph/patientGraph/InfusionRateGraph";
import CurrentLevelGraph from "../Graph/patientGraph/CurrentLevelGraph";
import RealTimeData from "../RealTimeData/RealTimeData";
import LineGraph from "../Graph/urios/LineGraph";
import BarGraph from "../Graph/patientGraph/BarGraph";
import VideoFeed from "../VideoFeed/VideoFeed";

function UriosDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Patient Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Real-Time Data</h2>
            <RealTimeData />
          </div>

          <div className=" bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Current Level</h2>
            {/* <CurrentLevelGraph /> */}
          </div>
          <div className=" bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Line Graph</h2>
            <LineGraph />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Video Feed</h2>
            <VideoFeed />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 ">
            <h2 className="text-xl font-semibold mb-4">Bar Graph</h2>
            {/* <BarGraph /> */}
          </div>
          <div className=" bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Infusion Rate</h2>
            <InfusionRateGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UriosDetails;
