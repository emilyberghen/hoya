import React from "react";

import data from "./../data/users.json";
import UserAccount from "./../components/users/UserAccount";

const AccountPage = () => {
  return (
    <div className="account">
      <div className="users">
        <div className="admin">
          {data.map((user, key) => {
            if (user.type === "admin") {
              return <UserAccount key={key} {...user} />;
            } else {
              return false;
            }
          })}

          <p>change password</p>
        </div>

        <div className="household">
          <h2>household</h2>
          {data.map((user, key) => {
            if (user.type === "friend") {
              return <UserAccount key={key} {...user} />;
            } else {
              return false;
            }
          })}
        </div>
      </div>

      <div className="settings">
        <h2>settings</h2>
        <div>
          <p>push notifications</p>
          <span>on</span>
        </div>
        <div>
          <p>date notation</p>
          <span>dd/mm/yyyy</span>
        </div>
        <div>
          <p>start of the week</p>
          <span>Monday</span>
        </div>
        <div>
          <p>country</p>
          <span>Belgium</span>
        </div>
      </div>

      <div className="btn">log out</div>
    </div>
  );
};

export default AccountPage;
