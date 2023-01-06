import React from "react";

import {
  BrowserRouter as Router,
  Routes as Rotas,
  Route,
} from "react-router-dom";

import MainPage from "./components/MainPage";
export default function Routes() {
  return (
    <>
      <Router>
        <Rotas>
          <Route path={"*"} element={<MainPage />} />
        </Rotas>
      </Router>
    </>
  );
}
