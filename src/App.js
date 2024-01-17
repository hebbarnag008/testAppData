import React from "react";

function App() {
  const value = "World";
  const getconfig = async () => {
    try {
      const config = await fetch("../config.json");
      console.log(await config.json());
    } catch (error) {
      console.log("Error" + error);
    }
  };
  console.log(getconfig());
  return <div>Hello {value}</div>;
}

export default App;
