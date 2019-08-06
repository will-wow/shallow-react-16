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

          <UserContext.Consumer>
            {user =>
              userHasClicked && (
                <div className="message">
                  {greeting}, {user.name}, you clicked the button
                </div>
              )
            }
          </UserContext.Consumer>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default UserGreeter;
