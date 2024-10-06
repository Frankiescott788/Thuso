import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Potholes', 'Accidents', 'Traffic Lights', 'Steps'],
    datasets: [
      {
        label: '# of Obstacles',
        data: [12, 19, 3, 5],  // Replace with your data
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Obstacle Detection Data</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
