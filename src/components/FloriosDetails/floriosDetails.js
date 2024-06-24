import React from "react";
import RealTimeData from "../RealTimeData/RealTimeData";
import VideoFeed from "../videoFeed/VideoFeed";
import BarGraph from "../Graph/florios/BarGraph";
import CurrentLevelGraph from "../Graph/florios/CurrentLevelGraph";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function FloriosDetails() {
  const query = useQuery();
  const type = query.get("type");
  console.log(type);
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
            <CurrentLevelGraph />
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
            <BarGraph />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloriosDetails;
