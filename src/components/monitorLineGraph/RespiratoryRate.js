import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { backendURL } from '../../utils/backendURL';

const RespiratoryRate = () => {
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    console.log('Fetching data...'); 
    try {
      const response = await axios.get(`${backendURL}/readings/`);
      console.log('API Response:', response); 
      const data = response.data;

      console.log('API Data:', data); 

      const last10Data = data.slice(-10);
      console.log('Last 10 Data:', last10Data);

      const labels = last10Data.map(item => new Date(item.created_at).toLocaleTimeString());
      const respiratory = last10Data.map(item => item.respiratory_rate);

      console.log('Labels:', labels);
      console.log('Heart Rate Data:', respiratory);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Respiratory Rate',
            data: respiratory,
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
      <h2 className="text-xl font-bold mb-4">Respiratory Rate</h2>
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
                    text: 'Respiratory Rate'
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

export default RespiratoryRate;
