import { Route, Routes as RoutesSW } from "react-router-dom";
import { Home, Character } from "../pages";

export const Routes = () => {
  return (
    <RoutesSW>
      <Route path="/" element={<Home />} />
      <Route path="character/:id" element={<Character />} />
    </RoutesSW>
  );
};
