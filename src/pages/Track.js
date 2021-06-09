import React from "react";
import Select from "react-select";

import data from "./../data/trackItems.json";
import TrackItems from "./../components/track-items/TrackItems";

const TrackPage = () => {
  const options = [
    { value: "all plants", label: "all plants" },
    { value: "living room plants", label: "living room plants" },
    { value: "bathroom plants", label: "bathroom plants" },
  ];

  return (
    <form className="track">
      <h2>plant</h2>
      <div>
        <input type="radio" value="one" name="one" /> one plant
        <input type="radio" value="multiple" name="multiple" /> multiple plants
      </div>
      <Select options={options} />

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
    </form>
  );
};

export default TrackPage;
