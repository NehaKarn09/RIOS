import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CurrentLevelGraph = () => {
  const [chartData, setChartData] = useState(null);

const fetchData = async () => {
    try {
      const response = await axios.get('https://kids-pottery-packing-promote.trycloudflare.com/api/history/');
      const data = response.data;
  
      // Use only the last 10 items
      const last10Data = data.slice(-10);
  
      // Prepare data for the chart
      const labels = last10Data.map(item => new Date(item.timestamp).toLocaleTimeString());
      const currentLevels = last10Data.map(item => item.current_level);
  
      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Current Level',
            data: currentLevels,
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
    }, 30000); // Fetch data every 30 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Current Level Over Time</h2>
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
                    text: 'Timestamp'
                  }
                },
                y: {
                  title: {
                    display: true,
                    text: 'Current Level'
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

export default CurrentLevelGraph;
