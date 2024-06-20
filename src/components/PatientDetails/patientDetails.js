import React from "react";
import InfusionRateGraph from "../Graph/patientGraph/InfusionRateGraph";
import CurrentLevelGraph from "../Graph/patientGraph/CurrentLevelGraph";
import RealTimeData from "../RealTimeData/RealTimeData";
import VideoFeed from "../VideoFeed/VideoFeed"

function PatientDetails() {
  return (
    <div className="flex flex-wrap">
      {/* Left side */}
      <div className="w-full lg:w-1/2 p-4">
        <InfusionRateGraph/>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <CurrentLevelGraph/>
      </div>
      {/* Right side */}
      <div className="w-full lg:w-1/2 p-4">
        <RealTimeData/>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <VideoFeed/>
      </div>
    </div>
  );
}

export default PatientDetails;
