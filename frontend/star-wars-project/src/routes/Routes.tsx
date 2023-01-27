import { Routes as Switch, Route } from "react-router";
import { AllCharacters } from "../views/allCharacters/AllCharacters";
import { CharacterPage } from "../views/characterPage/CharacterPage";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<AllCharacters />} />
      <Route path="/profile/:character" element={<CharacterPage />} />
    </Switch>
  );
};
