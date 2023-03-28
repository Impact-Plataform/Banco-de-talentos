import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes/Routes"
import StateProvider from "./context/StateProvider";
import "./style/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <Routes />
    </StateProvider>
  </React.StrictMode>
);
