import React from "react";
import Select from "react-select";

const TrackPage = () => {
  const options = [
    { value: "all plants", label: "all plants" },
    { value: "living room plants", label: "living room plants" },
    { value: "bathroom plants", label: "bathroom plants" },
  ];

  return (
    <form>
      <h3>plant</h3>
      <div>
        <input type="radio" value="one" name="one" /> One plant
        <input type="radio" value="multiple" name="multiple" /> Multiple plants
      </div>
      <Select options={options} />
    </form>
  );
};

export default TrackPage;
