import React from "react";

function UserAccount({ name, email, image }) {
  return (
    <section className="user">
      <img src={image} alt={name}></img>
      <div>
        <p className="medium">{name}</p>
        <p>{email}</p>
      </div>
    </section>
  );
}

export default UserAccount;
