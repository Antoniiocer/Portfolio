import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ParticleProvider from "./providers/particleProvider/particleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ParticleProvider>
    <App />
  </ParticleProvider>
);
