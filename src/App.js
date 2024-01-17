import React from "react";
import configdata from "../src/config.json";
function App() {
  const value = "World";
  const getconfig = async () => {
    try {
      //const config = fetch(configdata);
      console.log(configdata);
    } catch (error) {
      console.log("Error" + error);
    }
  };
  return <div>Hello {value}</div>;
}

export default App;
