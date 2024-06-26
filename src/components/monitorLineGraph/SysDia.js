// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const SysDia = () => {
//   const [chartData, setChartData] = useState(null);

//   const fetchData = async () => {
//     console.log('Fetching data...'); 
//     try {
//       const response = await axios.get('https://mr-careful-broadway-print.trycloudflare.com/readings/');
//       console.log('API Response:', response);
//       const data = response.data;

//       console.log('API Data:', data);

//       const last10Data = data.slice(-10);


//       const labels = last10Data.map(item => new Date(item.created_at).toLocaleTimeString());
//       const arterialBloodPressure = last10Data.map(item => {
//         const [systolic, diastolic] = item.arterial_blood_pressure.split('/');
//         return parseInt(systolic); 
//       });
//       const pulmonaryArteryPressure = last10Data.map(item => {
//         const [systolic, diastolic] = item.pulmonary_artery_pressure.split('/');
//         return parseInt(systolic); 
//       });

//       console.log('Labels:', labels); 
//       console.log('Arterial Blood Pressure Data:', arterialBloodPressure); 
//       console.log('Pulmonary Artery Pressure Data:', pulmonaryArteryPressure); 

//       setChartData({
//         labels: labels,
//         datasets: [
//           {
//             label: 'Arterial Blood Pressure',
//             data: arterialBloodPressure,
//             backgroundColor: 'rgba(75, 192, 192, 0.6)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//             fill: false,
//           },
//           {
//             label: 'Pulmonary Artery Pressure',
//             data: pulmonaryArteryPressure,
//             backgroundColor: 'rgba(192, 75, 192, 0.6)',
//             borderColor: 'rgba(192, 75, 192, 1)',
//             borderWidth: 1,
//             fill: false,
//           },
//         ],
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData(); 

//     const intervalId = setInterval(() => {
//       fetchData();
//     }, 10000); 

//     return () => clearInterval(intervalId); 
//   }, []);

//   if (!chartData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col items-center p-4">
//       <h2 className="text-xl font-bold mb-4">Arterial vs Pulmonary Artery Pressure</h2>
//       <div className="w-full max-w-4xl overflow-x-auto">
//         <div className="min-w-[600px] h-[400px]">
//           <Line 
//             data={chartData} 
//             options={{
//               maintainAspectRatio: false,
//               scales: {
//                 x: {
//                   title: {
//                     display: true,
//                     text: 'Time'
//                   }
//                 },
//                 y: {
//                   title: {
//                     display: true,
//                     text: 'Pressure (mmHg)'
//                   },
//                   ticks: {
//                     stepSize: 20,
//                     min: 0,
//                     max: 200,
//                   }
//                 }
//               }
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SysDia;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const SysDia = () => {
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    console.log('Fetching data...');
    try {
      const response = await axios.get('https://mr-careful-broadway-print.trycloudflare.com/readings/');
      console.log('API Response:', response);
      const data = response.data;

      console.log('API Data:', data);

      const last10Data = data.slice(-10);

      const labels = last10Data.map(item => new Date(item.created_at).toLocaleTimeString());
      const arterialSystolic = last10Data.map(item => {
        const [systolic, diastolic] = item.arterial_blood_pressure.split('/');
        return parseInt(systolic);
      });
      const arterialDiastolic = last10Data.map(item => {
        const [systolic, diastolic] = item.arterial_blood_pressure.split('/');
        return parseInt(diastolic);
      });
      const pulmonarySystolic = last10Data.map(item => {
        const [systolic, diastolic] = item.pulmonary_artery_pressure.split('/');
        return parseInt(systolic);
      });
      const pulmonaryDiastolic = last10Data.map(item => {
        const [systolic, diastolic] = item.pulmonary_artery_pressure.split('/');
        return parseInt(diastolic);
      });

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Arterial Systolic Pressure',
            data: arterialSystolic,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Arterial Diastolic Pressure',
            data: arterialDiastolic,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
            borderDash: [5, 5],
          },
          {
            label: 'Pulmonary Systolic Pressure',
            data: pulmonarySystolic,
            backgroundColor: 'rgba(192, 75, 192, 0.6)',
            borderColor: 'rgba(192, 75, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Pulmonary Diastolic Pressure',
            data: pulmonaryDiastolic,
            backgroundColor: 'rgba(192, 75, 192, 0.6)',
            borderColor: 'rgba(192, 75, 192, 1)',
            borderWidth: 1,
            fill: false,
            borderDash: [5, 5],
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
      <h2 className="text-xl font-bold mb-4">Arterial vs Pulmonary Artery Pressure</h2>
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
                    text: 'Pressure (mmHg)'
                  },
                  ticks: {
                    stepSize: 20,
                    min: 0,
                    max: 200,
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

export default SysDia;

