import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const getconfig = async () => {
  try {
    const config = fetch("/config.json");
    console.log(config.json());
  } catch (error) {
    console.log("Error" + error);
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
