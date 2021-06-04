import React from "react";

function Plant({ name, image, slug }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <img src={image} alt={name}></img>
      <div>
        <h2>{name}</h2>
      </div>
    </section>
  );
}

export default Plant;
