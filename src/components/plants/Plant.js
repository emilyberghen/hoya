import React from "react";

function Plant({ name, image, nickname, status }) {
  return (
    <section className="plant" id={name.toLowerCase().replace(/ /g, "-")}>
      <img src={image} alt={name}></img>
      <div>
        <div className="status">
          <h3>{nickname}</h3>
          <div className={status}></div>
        </div>
        <p>{name}</p>
      </div>
    </section>
  );
}

export default Plant;
