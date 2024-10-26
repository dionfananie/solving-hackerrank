import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";
import registerServiceWorker from "./registerServiceWorker";

const CORRECTIONS = {
  realy: "really",
  wierd: "weird",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App corrections={CORRECTIONS} />);

registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements(window);
});
