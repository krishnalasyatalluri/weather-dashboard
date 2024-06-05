import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import '../styles.css';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MetricGraph = ({ metric, view, data }) => {
 

  const chartData = {
    labels: data.map((_, index) => index + 1),
    datasets: [
      {
        label: `${metric} - ${view}`,
        data: data,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false, 
  };

  
  return (
    <div className="metric-graph">
      <h3>{metric} - {view} View</h3>
      <div style={{ height: '200px', width: '100%' }}>
        <Line data={chartData} options={options} />
      </div>
      
    </div>
  );
};

export default MetricGraph;
