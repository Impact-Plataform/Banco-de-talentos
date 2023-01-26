import { Filter } from "../filters/Filters";
import { SearchByName } from "../searchByName/SearchByName";
import { StarWarsTitle } from "../starWarsTitle/StarWarsTitle";
import "./stylesHeader.css";

export const Header = () => {
  return (
    <header className="header__container">
      <StarWarsTitle />
      <SearchByName />
      <Filter />
    </header>
  );
};
