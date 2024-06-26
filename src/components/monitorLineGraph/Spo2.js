import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Spo2 = () => {
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    console.log('Fetching data...'); 
    try {
      const response = await axios.get('https://mr-careful-broadway-print.trycloudflare.com/readings/');
      console.log('API Response:', response);
      const data = response.data;

      console.log('API Data:', data);

      const last10Data = data.slice(-10);
      console.log('Last 10 Data:', last10Data);

      const labels = last10Data.map(item => new Date(item.created_at).toLocaleTimeString());
      const spo2 = last10Data.map(item => item.spo2);

      console.log('Labels:', labels); 
      console.log('Heart Rate Data:', spo2); 

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'SpO2',
            data: spo2,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); 

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000); 

    return () => clearInterval(intervalId); 
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">SpO2</h2>
      <div className="w-full max-w-4xl overflow-x-auto">
        <div className="min-w-[600px] h-[400px]">
          <Line 
            data={chartData} 
            options={{
              maintainAspectRatio: false,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Time'
                  }
                },
                y: {
                  title: {
                    display: true,
                    text: 'SpO2 Level'
                  },
                  min: 50, 
                  max: 120, 
                  ticks: {
                    stepSize: 10 
                  }
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Spo2;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const Spo2 = () => {
//   const [chartData, setChartData] = useState(null);

//   const fetchData = async () => {
//     console.log('Fetching data...'); // Log to indicate function call
//     try {
//       const response = await axios.get('https://mr-careful-broadway-print.trycloudflare.com/readings/');
//       console.log('API Response:', response); // Log the raw API response
//       const data = response.data;

//       console.log('API Data:', data); // Log API data to inspect

//       // Use only the last 100 items for smoother ECG waveform
//       const last10Data = data.slice(-10);
//       console.log('Last 100 Data:', last10Data); // Log last 100 data items

//       // Prepare data for the chart
//       const labels = last10Data.map(item => new Date(item.created_at).toLocaleTimeString());
//       const spo2 = last10Data.map(item => item.spo2);

//       console.log('Labels:', labels); // Log labels
//       console.log('SpO2 Data:', spo2); // Log SpO2 data

//       setChartData({
//         labels: labels,
//         datasets: [
//           {
//             label: 'SpO2',
//             data: spo2,
//             backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background for line
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 2,
//             pointRadius: 0, // Disable points for smoother line
//             cubicInterpolationMode: 'monotone', // Smooth curve
//           },
//         ],
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Initial fetch

//     const intervalId = setInterval(() => {
//       fetchData();
//     }, 1000); // Fetch data every second for a more fluid ECG simulation

//     return () => clearInterval(intervalId); // Clean up the interval on component unmount
//   }, []);

//   if (!chartData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center p-4">
//       <h2 className="text-xl font-bold mb-4">SpO2</h2>
//       <div className="w-full max-w-4xl overflow-x-auto">
//         <div className="min-w-[600px] h-[400px]">
//           <Line
//             data={chartData}
//             options={{
//               maintainAspectRatio: false,
//               plugins: {
//                 legend: {
//                   display: false, // Hide legend
//                 },
//               },
//               scales: {
//                 x: {
//                   title: {
//                     display: true,
//                     text: 'Time',
//                   },
//                 },
//                 y: {
//                   title: {
//                     display: true,
//                     text: 'SpO2 Level',
//                   },
//                   min: 50, // Adjust based on your data range
//                   max: 120,
//                   ticks: {
//                     stepSize: 2, // Adjust to match the ECG scale
//                   },
//                 },
//               },
//               animation: {
//                 duration: 0, // Disable animation for real-time effect
//               },
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Spo2;
