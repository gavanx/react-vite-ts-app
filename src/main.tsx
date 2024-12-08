import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Demo from './demos/terminal/TerminalDemo'
import PostDemo from "./demos/PostDemo";
import SliceDemo from "./demos/SliceDemo";
import ReRender from "./demos/ReRender";
import UseTransition from "./demos/UseTransition";
import UseTransitionPage from "./demos/UseTransitionPage";

import RefObject from "./interview/RefObject";
import SetCount from "./interview/SetCount";
import ReactDemo from "./interview/React2-1";

import QuillEditor from "./playground/QuillEditor";

import "antd/dist/antd.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QuillEditor />
);
