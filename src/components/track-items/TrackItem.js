import React from "react";

function TrackItem({ name, image, color }) {
  return (
    <section className={color}>
      <img src={image} alt={name}></img>
      <p>{name}</p>
    </section>
  );
}

export default TrackItem;
