import React, { useEffect, useState } from "react";
import moment from "moment";

const targetTime = moment("2035-01-01");

export const CountdownMonths = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const timeBetween = moment.duration(targetTime.diff(currentTime));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    
       <div className="countdown-section">       
        <div className="comming-soon-title">
         <h1 className="comming-soon-title">COMING SOON</h1>
        </div>
       <div className="div-count">
         <div className="div-numbers-letters">
          <span className="date-number">{timeBetween.days()} </span>
          <span className="day-day">days</span>
         </div>
          <div className="div-numbers-letters">
          <span className="date-number">{timeBetween.hours()} </span>
          <span className="day-hour">hours</span>
         </div>
         <div className="div-numbers-letters">
          <span className="date-number">{timeBetween.minutes()} </span> 
          <span className="day-minutes">minutes</span>
         </div>
         <div>
          <span className="date-number">{timeBetween.seconds()} </span>
         <span className="day-seconds">seconds</span>
        
        </div>
        </div>
      </div>
    
  );
};