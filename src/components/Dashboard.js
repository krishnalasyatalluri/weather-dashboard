import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselComponent from './CarouselComponent';
import CalendarComponent from './CalendarComponent';
import MetricGraph from './MetricGraph';
import '../styles.css';

const Dashboard = () => {
  const [data, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [view, setView] = useState('Daily');
  const [metric, setMetric] = useState('temp_c'); 
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
          params: {
            key: '3623a32613b946b696c140549240306',
            q: selectedCountry,
          },
        });
        setData(response.data.current);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [selectedCountry]);

  useEffect(() => {
    if (metric) {
      
      const simulatedData = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
      setGraphData(simulatedData);
    }
  }, [metric, view]);

  return (
    <div className="dashboard">
      <div className="countries">
        {['USA', 'Canada', 'UK', 'Australia', 'India'].map((country) => (
          <button key={country} onClick={() => setSelectedCountry(country)}>
            {country}
          </button>
        ))}
      </div>
      <div className="main-content">
        <CarouselComponent data={data} setMetric={setMetric} />
        <div className="calendar-and-graph">
          <CalendarComponent />
          <div className="graph-section">
            <select onChange={(e) => setView(e.target.value)} value={view}>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
            {metric && <MetricGraph metric={metric} view={view} data={graphData} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
