import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Character } from "./pages/Character";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/character/:name`} element={<Character />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
