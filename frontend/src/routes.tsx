import React from "react";

import {
  BrowserRouter as Router,
  Routes as Rotas,
  Route,
  Link,
} from "react-router-dom";
import { Header } from "./App.style";
import FullCardPage from "./components/FullCardPage";
import { Liink } from "./App.style";

import MainPage from "./components/MainPage";
export default function Routes() {
  return (
    <>
      <Router>
        <Header>
          <Liink to="/">Home</Liink>
        </Header>
        <Rotas>
          <Route path={"card/:id"} element={<FullCardPage />} />
          <Route path={"*"} element={<MainPage />} />
        </Rotas>
      </Router>
    </>
  );
}
