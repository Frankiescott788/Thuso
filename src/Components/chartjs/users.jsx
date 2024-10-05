// DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Happy Users', 'Unhappy Users'],
    datasets: [
      {
        label: 'User Satisfaction',
        data: [70, 30], // Example data: 70% happy users, 30% unhappy users
        backgroundColor: [
          'rgba(75, 192, 192, 1)', // Happy Users color
          'rgba(255, 99, 132, 1)', // Unhappy Users color
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Show the legend
        position: 'top',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
