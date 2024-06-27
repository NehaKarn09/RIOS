import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { backendURL } from '../../utils/backendURL';

const BloodPressure = () => {
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    console.log('Fetching data...');
    try {
      const response = await axios.get(`${backendURL}/readings/`);
      console.log('API Response:', response);
      const data = response.data;

      console.log('API Data:', data);

      const last10Data = data.slice(-10);

      const labels = last10Data.map(item => new Date(item.created_at).toLocaleTimeString());
      const bpSystolic = last10Data.map(item => item.systolic_pressure);
      const bpDiastolic = last10Data.map(item => item.diastolic_pressure);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Systolic Blood Pressure',
            data: bpSystolic,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
          {
            label: 'Diastolic Blood Pressure',
            data: bpDiastolic,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
            borderDash: [5, 5],
          }
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
      <h2 className="text-xl font-bold mb-4">Blood Pressure</h2>
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

export default BloodPressure;

