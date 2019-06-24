import React from "react";

const UserProfile = ({ userId, user, loadUser }) => {
  React.useEffect(() => loadUser(userId), [userId, loadUser]);

  return <div id="user-profile">{user ? `Name: ${user.name}` : "loading…"}</div>;
};

export default UserProfile;
