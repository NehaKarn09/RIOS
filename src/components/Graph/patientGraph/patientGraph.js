import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { backendURL } from "../../../utils/backendURL";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PatientGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${backendURL}/api/history/`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []); // Empty dependency array means this effect runs once on mount
  console.log(data);
  const chartData = {
    labels: data.map((item) => new Date(item?.timestamp).toLocaleString()),
    datasets: [
      {
        label: "Liquid Level",
        data: data.map((item) => item?.current_level),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Liquid Level",
        },
      },
    },
  };

  return (
    <div className="mx-auto w-[1000px] h-[600px] p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Patient Graph</h1>
      {data.length > 0 ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default PatientGraph;
