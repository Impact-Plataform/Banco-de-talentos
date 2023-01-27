import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IndexProvider } from "./contexts/IndexProvider";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <IndexProvider>
        <App />
      </IndexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
