// LineChart.js
import React from 'react';
import { users } from '../../data/users'; // Import the users object data
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

// Helper function to calculate averages
const calculateAverage = (arr, key) => {
  const sum = arr.reduce((acc, obj) => acc + obj[key], 0);
  return sum / arr.length;
};

const Linechart = () => {
  // Calculate averages from users data
  const avgInteractions = calculateAverage(users, 'interactions');
  const avgObstaclesDetected = calculateAverage(users, 'obstaclesDetected');
  const avgSuccessRate = calculateAverage(users, 'successRate');
  const avgResponseTime = calculateAverage(users, 'averageResponseTime');

  // Data for the chart
  const data = {
    labels: ['Bot interactions', 'Obstacles detected', 'Success rate %', 'Response time(ps)'],
    datasets: [
      {
        label: '', // Remove the label to eliminate the title
        data: [avgInteractions, avgObstaclesDetected, avgSuccessRate, avgResponseTime],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 0, // Remove the data points (dots)
        pointHoverRadius: 0, // Remove hover radius
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Remove X-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50,
        },
        grid: {
          display: true, // Keep Y-axis grid lines
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Linechart;
