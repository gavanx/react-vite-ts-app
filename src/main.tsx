import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Demo from './demos/terminal/TerminalDemo'
import Demo from "./demos/PostDemo";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);
