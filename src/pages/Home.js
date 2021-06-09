import React from "react";
import Calendar from "react-calendar";

import Predictions from "../components/predictions/Predictions";
import predictions from "../data/predictions.json";

const HomePage = () => {
  return (
    <div className="home">
      <div className="predictions">
        <h2>Predictions</h2>
        <Predictions predictions={predictions} />
      </div>

      <div className="desktop">
        <div className="calendar calendar-small">
          <h2>Calendar</h2>
          <Calendar locale="en" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
