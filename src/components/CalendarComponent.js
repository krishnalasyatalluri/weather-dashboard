import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles.css';

const CalendarComponent = () => {
  return (
    <div className="calendar">
      <Calendar />
    </div>
  );
};

export default CalendarComponent;
