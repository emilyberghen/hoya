import React from "react";
import Calendar from "react-calendar";
import TrackItems from "./../components/track-items/TrackItems";

import data from "./../data/trackItems.json";

const CalendarPage = () => {
  return (
    <div className="calendar calendar-big">
      <Calendar locale="en" />
      <TrackItems view="mobile" items={data} />
    </div>
  );
};

export default CalendarPage;
