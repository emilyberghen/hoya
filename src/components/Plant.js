import React from "react";

function Plant({ name, image, nickname }) {
  return (
    <section className="plant" id={name.toLowerCase().replace(/ /g, "-")}>
      <img src={image} alt={name}></img>
      <div>
        <h3>{nickname}</h3>
        <p>{name}</p>
      </div>
    </section>
  );
}

export default Plant;
