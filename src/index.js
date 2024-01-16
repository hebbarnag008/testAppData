import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const config = await fetch("/config.json");
console.log(await config.json());
ReactDOM.render(<App />, document.getElementById("root"));
