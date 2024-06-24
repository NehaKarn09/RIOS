// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const PatientGraph = () => {
//   const data = [
//     {
//       _id: 1,
//       timestamp: 1717939654.4944565,
//       current_level: 0.4695205493623955,
//       infusion_rate: 0.03139421885927715,
//     },
//     {
//       _id: 1,
//       timestamp: 1717939653.5161123,
//       current_level: 0.4535935685226756,
//       infusion_rate: 0.0343241317623634,
//     },
//     {
//       _id: 1,
//       timestamp: 1717939652.5335143,
//       current_level: 0.45680292866456346,
//       infusion_rate: 0.03636728988631726,
//     },
//     {
//       _id: 1,
//       timestamp: 1717939651.5547268,
//       current_level: 0.4585104263814911,
//       infusion_rate: 0.03879523395174348,
//     },
//     {
//       _id: 1,
//       timestamp: 1717939650.580602,
//       current_level: 0.46719334772513266,
//       infusion_rate: 0.04103719243266738,
//     },
//     {
//       _id: 1,
//       timestamp: 1717939649.6119902,
//       current_level: 0.46538843463765245,
//     },
//   ];

//   const chartData = {
//     labels: data.map((item) =>
//       new Date(item.timestamp * 1000).toLocaleString()
//     ),
//     datasets: [
//       {
//         label: "Liquid Level",
//         data: data.map((item) => item.current_level),
//         borderColor: "rgb(53, 162, 235)",
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Time",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Liquid Level",
//         },
//       },
//     },
//   };

//   return (
//     <div className="mx-auto w-[1000px] h-[600px] p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Patient Graph</h1>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// };

// export default PatientGraph;

// LineGraph.js
// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const PatientGraph = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     fetch('https://kids-pottery-packing-promote.trycloudflare.com/monitoring-data/')
//       .then(response => response.json())
//       .then(data => {
//         const labels = data.map(item => new Date(item.timestamp).toLocaleString());
//         const currentLevels = data.map(item => item.current_level);

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Current Level',
//               data: currentLevels,
//               borderColor: 'rgba(75,192,192,1)',
//               backgroundColor: 'rgba(75,192,192,0.2)',
//             },
//           ],
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h2>Patient Current Level Over Time</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default PatientGraph;

// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const PatientGraph = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Current Level',
//         data: [],
//         borderColor: 'rgba(75,192,192,1)',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//       },
//     ],
//   });

//   useEffect(() => {
//     fetch('https://kids-pottery-packing-promote.trycloudflare.com/monitoring-data/')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (!data || !Array.isArray(data)) {
//           throw new Error('Invalid data format');
//         }

//         const labels = data.map(item => new Date(item.timestamp).toLocaleString());
//         const currentLevels = data.map(item => item.current_level);

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Current Level',
//               data: currentLevels,
//               borderColor: 'rgba(75,192,192,1)',
//               backgroundColor: 'rgba(75,192,192,0.2)',
//             },
//           ],
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h2>Patient Current Level Over Time</h2>
//       <Line data={chartData} />
//     </div>
//   );
// };

// export default PatientGraph;

// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const PatientGraph = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Current Level',
//         data: [],
//         borderColor: 'rgba(75,192,192,1)',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//       },
//     ],
//   });

//   useEffect(() => {
//     fetch('https://kids-pottery-packing-promote.trycloudflare.com/monitoring-data/')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (!data || !Array.isArray(data)) {
//           throw new Error('Invalid data format');
//         }

//         const labels = data.map(item => new Date(item.timestamp).toLocaleString());
//         const currentLevels = data.map(item => item.current_level);

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Current Level',
//               data: currentLevels,
//               borderColor: 'rgba(75,192,192,1)',
//               backgroundColor: 'rgba(75,192,192,0.2)',
//             },
//           ],
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Patient Current Level Over Time</h2>
//       <div className="w-full md:w-4/5 lg:w-3/4 xl:w-1/2 h-96 mx-auto">
//         <Line data={chartData} />
//       </div>
//     </div>
//   );
// };

// export default PatientGraph;

// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const PatientGraph = () => {
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: 'Current Level',
//         data: [],
//         borderColor: 'rgba(75,192,192,1)',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//       },
//     ],
//   });

//   useEffect(() => {
//     fetch('https://kids-pottery-packing-promote.trycloudflare.com/monitoring-data/')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         if (!data || !Array.isArray(data)) {
//           throw new Error('Invalid data format');
//         }

//         const labels = data.map(item => new Date(item.timestamp).toLocaleString());
//         const currentLevels = data.map(item => item.current_level);

//         setChartData({
//           labels,
//           datasets: [
//             {
//               label: 'Current Level',
//               data: currentLevels,
//               borderColor: 'rgba(75,192,192,1)',
//               backgroundColor: 'rgba(75,192,192,0.2)',
//             },
//           ],
//         });
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center">Patient Current Level Over Time</h2>
//       <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 h-[600px] mx-auto">
//         <Line data={chartData} />
//       </div>
//     </div>
//   );
// };

// export default PatientGraph;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { backendURL } from "../../../utils/backendURL";

const LineGraph = () => {
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/history/`);
      const data = response.data;
      console.log(response.data);

      // Use only the last 10 items
      const last10Data = data.slice(-10);

      // Prepare data for the chart
      const labels = last10Data.map((item) =>
        new Date(item.timestamp).toLocaleTimeString()
      );
      const currentLevels = last10Data.map((item) => item.current_level);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Current Level",
            data: currentLevels,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            fill: false,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData();
    }, 30000); // Fetch data every 30 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Infusion Rate Over Time</h2>

      <div className="w-full max-w-4xl overflow-x-auto">
        <div className="min-w-[200px] h-[300px]">
          <Line
            data={chartData}
            options={{
              maintainAspectRatio: false,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Timestamp",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Curren Level",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
