import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import CO2 from "../monitorLineGraph/CO2";
import HR from "../monitorLineGraph/HR";
import PulseRate from "../monitorLineGraph/PulseRate";
import RespiratoryRate from "../monitorLineGraph/RespiratoryRate";
import Spo2 from "../monitorLineGraph/Spo2";
import SysDia from "../monitorLineGraph/SysDia";
import BloodPressure from "../monitorLineGraph/BloodPressure";

Chart.register(...registerables);

const MonitoringGraph = () => {
  return (
    <>
      <div className="container mx-auto px-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <CO2 />
          </div>
          <div className="col-span-1">
            <HR />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="col-span-1">
            <RespiratoryRate />
          </div>
          <div className="col-span-1">
            <Spo2 />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="col-span-1">
            <SysDia />
          </div>
          <div className="col-span-1">
            <PulseRate />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="col-span-1">
            <BloodPressure />
          </div>
        </div>
      </div>
    </>
  );
};

export default MonitoringGraph;
