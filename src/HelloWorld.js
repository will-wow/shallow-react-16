import React from "react";

const HelloWorld = ({ onLoad, onExit }) => {
  // Set up local state
  const [name, setName] = React.useState("");

  // run onLoad on mount, and onExit when object unmounts.
  React.useEffect(() => {
    onLoad();
    return onExit;
  }, []);

  // Say hello every time the name changes.
  React.useEffect(() => console.log(`hello ${name}`), [name]);

  // Control an input with the name.
  return <input value={name} onChange={event => setName(event.target.value)} />;
};

export default HelloWorld;
