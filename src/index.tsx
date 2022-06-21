import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MoralisProvider appId="xxxxxx" serverUrl="xxxxx">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>{" "}
  </React.StrictMode>,
);
