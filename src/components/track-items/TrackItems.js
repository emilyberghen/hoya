import React from "react";
import TrackItem from "./TrackItem";

function TrackItems({ items }) {
  return (
    <>
      <div className="track-items">
        {items.map((item, i) => (
          <TrackItem key={i} {...item} />
        ))}
      </div>
    </>
  );
}

export default TrackItems;
