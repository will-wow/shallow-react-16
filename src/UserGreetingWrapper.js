import React from "react";
import UserGreeting from "./UserGreeting";
import UserGreeter from "./UserGreeter";

const UserGreetingWrapper = () => (
  <div>
    <UserGreeting greeting="hello" />
    <UserGreeter greeting="hey" />
  </div>
);

export default UserGreetingWrapper;
