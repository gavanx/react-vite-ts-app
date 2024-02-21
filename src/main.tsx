import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Demo from './demos/terminal/TerminalDemo'
import PostDemo from "./demos/PostDemo";
import SliceDemo from "./demos/SliceDemo";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SliceDemo />
  </React.StrictMode>
);
