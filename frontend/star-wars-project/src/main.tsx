import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IndexProvider } from "./contexts/IndexProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <IndexProvider>
      <App />
    </IndexProvider>
  </React.StrictMode>
);
