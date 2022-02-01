import React from "react";
import reactDom from "react-dom";
import { App } from "./App";
import "./index.css";

const rootEl = document.getElementById("root");

function render() {
  reactDom.render(<App />, rootEl);
}

render();
