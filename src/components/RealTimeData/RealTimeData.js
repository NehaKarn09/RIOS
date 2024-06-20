import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RealTimeData = () => {
  const [data, setData] = useState({ current_level: 0, time_remaining: 0, infusion_rate: 0 });

  const fetchData = async () => {
    try {
      const response = await axios.get('https://kids-pottery-packing-promote.trycloudflare.com/api/data/');
      setData(response.data);
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

  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Real-Time Data</h2>
        <div className="mb-2">
          <span className="font-semibold">Current Level:</span> {data.current_level.toFixed(2)}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Time Remaining:</span> {data.time_remaining.toFixed(2)}
        </div>
        <div>
          <span className="font-semibold">Infusion Rate:</span> {data.infusion_rate.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default RealTimeData;
