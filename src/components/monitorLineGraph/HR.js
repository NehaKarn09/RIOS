import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { backendURL } from '../../utils/backendURL';

const HR = () => {
  const [chartData, setChartData] = useState(null);

  const fetchData = async () => {
    console.log('Fetching data...'); // Log to indicate function call
    try {
      const response = await axios.get(`${backendURL}/readings/`);
      console.log('API Response:', response); // Log the raw API response
      const data = response.data;

      console.log('API Data:', data); // Log API data to inspect

      // Use only the last 10 items
      const last10Data = data.slice(-10);
      console.log('Last 10 Data:', last10Data); // Log last 10 data items

      // Prepare data for the chart
      const labels = last10Data.map(item => new Date(item.created_at).toLocaleTimeString());
      const hr = last10Data.map(item => item.heart_rate);

      console.log('Labels:', labels); // Log labels
      console.log('Heart Rate Data:', hr); // Log heart rate data

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Heart Rate',
            data: hr,
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
    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000); // Fetch data every 10 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Heart Rate</h2>
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
                    text: 'Heart Rate Reading'
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

export default HR;
