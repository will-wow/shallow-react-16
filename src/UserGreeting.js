import React from "react";
import UserContext from "./UserContext";

import Logger from "./Logger";

const UserGreeting = ({ greeting }) => (
  <UserContext.Consumer>
    {user => (
      <div className="greeting">
        <Logger>{user}</Logger>
        {greeting}, {user.name}
      </div>
    )}
  </UserContext.Consumer>
);

export default UserGreeting;
