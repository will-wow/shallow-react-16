import React, { useState } from "react";
import "./App.css";

import UserProfile from "./UserProfile";
import UserContext from "./UserContext";
import UserGreeting from "./UserGreeting";
import UserGreeter from "./UserGreeter";

const USERS = {
  a: { name: "alice" },
  b: { name: "bob" }
};

function App() {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

  const handleLoad = userId => {
    console.log("load", userId);
    setUser(USERS[userId] || null);
  };
  const handleIdSelect = event => setUserId(event.target.value);

  return (
    <div className="App">
      <div>
        <select value={userId} onChange={handleIdSelect}>
          <option value="">Pick a User</option>
          <option value="a">Alice</option>
          <option value="b">Bob</option>
        </select>
      </div>
      <UserProfile userId={userId} user={user} loadUser={handleLoad} />

      {user && (
        <UserContext.Provider value={user}>
          <UserGreeting greeting="hello" />
          <UserGreeter greeting="hey" />
        </UserContext.Provider>
      )}
    </div>
  );
}

export default App;
