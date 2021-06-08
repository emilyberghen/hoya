import React from "react";
import User from "./User";

function Users({ users }) {
  return (
    <>
      {users.map((user, i) => (
        <User key={i} {...user} />
      ))}
    </>
  );
}

export default Users;
