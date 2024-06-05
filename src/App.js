import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  const [view, setView] = useState('Dashboard');

  return (
    <div className="App">
      <Sidebar setView={setView} />
      {view === 'Dashboard' && <Dashboard />}
    </div>
  );
}

export default App;
