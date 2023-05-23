import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import "./flower.css"

import Start from "./components/Start";
import About from "./components/About"
import Python from "./components/Python"
import WorkExp from "./components/WorkExp";
import App from "./components/Stack";
import PythonStack from "./components/PythonStack";
import Warning from "./components/Warning";
import OtherStack from "./components/OtherStack";
import Projects from "./components/Projects";
import Links from "./components/Links";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Warning />
    <Start />
    <About />
    <WorkExp />
    <Python />
    <PythonStack />
    <OtherStack />
    <App />
    <Projects />
    <Links />
  </StrictMode>
);
