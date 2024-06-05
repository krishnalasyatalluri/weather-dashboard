import React, { useEffect, useState } from 'react';
import '../styles.css';

const CarouselComponent = ({ data, setMetric }) => {
    const [index, setIndex] = useState(0);
    const metrics = [
      { label: 'Temperature (C)', value: data.temp_c },
      { label: 'Temperature (F)', value: data.temp_f },
      { label: 'Humidity', value: data.humidity },
      { label: 'Wind Speed (kph)', value: data.wind_kph },
      { label: 'Pressure (mb)', value: data.pressure_mb },
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % metrics.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [metrics.length]);
  
    return (
      <div className="carousel">
        {metrics.map((metric, idx) => (
          <div
            key={metric.label}
            className={`carousel-item ${idx === index ? 'active' : ''}`}
            onClick={() => setMetric(metric.label)}
          >
            <h3>{metric.label}</h3>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CarouselComponent;