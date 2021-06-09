import React from "react";
import TrackItem from "./TrackItem";

function TrackItems({ items, view }) {
  return (
    <>
      <div className={`track-items ${view}`}>
        {items.map((item, i) => (
          <TrackItem key={i} {...item} />
        ))}
      </div>
    </>
  );
}

export default TrackItems;
