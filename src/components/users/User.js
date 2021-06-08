import React from "react";

function User({ name, image, type }) {
  return (
    <section className="user">
      <img src={image} alt={name}></img>
      <div>
        <p className="medium">{name}</p>
        {type === "admin" ? <p>me</p> : <p>care mate</p>}
      </div>
    </section>
  );
}

export default User;
