import React from "react";

import UserContext from "./UserContext";
import UserGreetingWrapper from "./UserGreetingWrapper";

const UserParent = ({ user }) => (
  <div>
    <UserContext.Provider value={user}>
      <UserGreetingWrapper />
    </UserContext.Provider>
  </div>
);

export default UserParent;
