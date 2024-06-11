import React from "react";
import { Line } from "react-chartjs-2";
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
  const data = [
    {
      _id: 1,
      timestamp: 1717939654.4944565,
      current_level: 0.4695205493623955,
      infusion_rate: 0.03139421885927715,
    },
    {
      _id: 1,
      timestamp: 1717939653.5161123,
      current_level: 0.4535935685226756,
      infusion_rate: 0.0343241317623634,
    },
    {
      _id: 1,
      timestamp: 1717939652.5335143,
      current_level: 0.45680292866456346,
      infusion_rate: 0.03636728988631726,
    },
    {
      _id: 1,
      timestamp: 1717939651.5547268,
      current_level: 0.4585104263814911,
      infusion_rate: 0.03879523395174348,
    },
    {
      _id: 1,
      timestamp: 1717939650.580602,
      current_level: 0.46719334772513266,
      infusion_rate: 0.04103719243266738,
    },
    {
      _id: 1,
      timestamp: 1717939649.6119902,
      current_level: 0.46538843463765245,
    },
  ];

  const chartData = {
    labels: data.map((item) =>
      new Date(item.timestamp * 1000).toLocaleString()
    ),
    datasets: [
      {
        label: "Liquid Level",
        data: data.map((item) => item.current_level),
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
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PatientGraph;
