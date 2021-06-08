import React from "react";

function Prediction({ name, image, date, type }) {
  return (
    <section className={type}>
      <img src={image} alt={name}></img>
      <div>
        <p>{date}</p>
        <h3>{name}</h3>
      </div>
    </section>
  );
}

export default Prediction;
