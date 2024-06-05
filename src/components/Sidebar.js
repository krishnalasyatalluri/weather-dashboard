import React from 'react';
import '../styles.css';

const Sidebar = ({ setView }) => {
  return (
    <div className="sidebar">
      <h2>Platform</h2>
      <ul>
        <li onClick={() => setView('Dashboard')}>Dashboard</li>
        <li>Connect</li>
        <li>Report</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
