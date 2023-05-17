import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import Example from "./Example";
import Header from "./Header";
import MyJob from "./Somewords"
import About from "./About"
import Python from "./Python"
// import App from "./components/Stack"

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <Example />
    <MyJob />
    <About />
    <Python />
    {/* <App /> */}
  </StrictMode>
);
