import React from "react";
import { Link } from "react-router-dom";

function PlantDetail({
  name,
  nickname,
  image,
  status,
  location,
  orientation,
  date,
}) {
  return (
    <>
      <Link to={`/plants`} className="link">
        Go back
      </Link>
      <section
        className="plant plantDetail"
        id={name.toLowerCase().replace(/ /g, "-")}
      >
        <img src={`../../` + image} alt={name}></img>
        <div>
          <div className="status">
            <h3>{nickname}</h3>
            <div className={status}></div>
          </div>
          <p>{name}</p>

          <div className="info">
            <p>
              {location}, {orientation}
            </p>
            <p>{date}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlantDetail;
