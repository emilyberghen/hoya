import React from "react";
import { Link } from "react-router-dom";

function Plant({ name, image, nickname, status, slug }) {
  return (
    <Link to={`/plant/${slug}`}>
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
    </Link>
  );
}

export default Plant;
