//details cards
//show patient graph

import React from "react";
import LineGraph from "../Graph/patientGraph/LineGraph";
import BarGraph from "../Graph/patientGraph/BarGraph";
// import PatientDetailCard from "../Cards/patientDetailCard/PatientDetailCard";
import RealTimeData from "../RealTimeData/RealTimeData";
import VideoFeed from "../videoFeed/VideoFeed";

// function PatientDetails() {
//   return (
//     <>
//       <div className="flex justify-center">
//       <div className="w-1/2 flex justify-center p-4">
//         <LineGraph />
//       </div>
//       <div className="w-1/2 flex justify-center p-4">
//         <BarGraph />
//       </div>
//       <div className="w-1/2 flex justify-center p-4">
//         <RealTimeData />
//       </div>
//       <div className="w-1/2 flex justify-center p-4">
//         <VideoFeed />
//       </div>
//     </div>
//     </>
//   );
// }
// export default PatientDetails;



function PatientDetails() {
  return (
    <div className="flex flex-wrap">
      {/* Left side */}
      <div className="w-full lg:w-1/2 p-4">
        <LineGraph/>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <BarGraph/>
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
