import { AnimatePresence } from "framer-motion";
import { Routes as Switch, Route, useLocation } from "react-router";
import { AllCharacters } from "../views/allCharacters/AllCharacters";
import { CharacterPage } from "../views/characterPage/CharacterPage";

export const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route path="/" element={<AllCharacters />} />
        <Route path="/profile/:character" element={<CharacterPage />} />
      </Switch>
    </AnimatePresence>
  );
};
