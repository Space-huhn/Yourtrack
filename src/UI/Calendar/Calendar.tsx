import React from 'react';
import Calendar from 'react-calendar';
import './Calendar.css'

const CalendarComponent = () => {
  return (
    <div style={{marginLeft: "auto"}}>
      <Calendar locale='en'/>
    </div>
  );
};

export default CalendarComponent;