import React, { useState } from "react";
import UserContext from "./UserContext";

const UserGreeter = ({ greeting }) => {
  const [userHasClicked, setUserHasClicked] = useState(false);
  console.log({ userHasClicked });

  return (
    <UserContext.Consumer>
      {user => (
        <div>
          <button onClick={() => setUserHasClicked(true)}>Click Me</button>

          {userHasClicked && (
            <div className="message">
              {greeting}, {user.name}, you clicked the button
            </div>
          )}
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default UserGreeter;
