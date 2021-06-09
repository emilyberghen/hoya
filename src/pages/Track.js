import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";

import data from "./../data/trackItems.json";
import TrackItems from "./../components/track-items/TrackItems";

const TrackPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const options = [
    { value: "all plants", label: "all plants" },
    { value: "living room plants", label: "living room plants" },
    { value: "bathroom plants", label: "bathroom plants" },
  ];

  return (
    <form className="track">
      <h2>date</h2>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />

      <h2>plant</h2>
      <div className="radio-buttons">
        <label>
          <input type="radio" value="one" name="plants" />
          one plant
        </label>
        <label>
          <input type="radio" value="multiple" name="plants" />
          multiple plants
        </label>
      </div>
      <Select
        options={options}
        className="react-select"
        classNamePrefix="react-select"
      />

      <h2>status</h2>
      <div className="status">
        <p className="healthy">healthy</p>
        <p className="okay">okay</p>
        <p className="sick">sick</p>
      </div>

      <h2>track items</h2>
      <div className="track-items">
        <TrackItems items={data} />
      </div>

      <div className="submit">save</div>
    </form>
  );
};

export default TrackPage;
