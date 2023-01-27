import { useNavigate } from "react-router-dom";
import { Filter } from "../filters/Filters";
import { SearchByName } from "./searchByName/SearchByName";
import { StarWarsTitle } from "./starWarsTitle/StarWarsTitle";
import "./stylesHeader.css";

interface HeaderProps {
  isCharacterPage?: boolean;
}

export const Header = ({ isCharacterPage = false }: HeaderProps) => {
  const navigate = useNavigate();
  const navigateToAllCharactersPage = () => navigate("/");

  return (
    <header className="header__container">
      <StarWarsTitle />

      {!isCharacterPage ? (
        <>
          <SearchByName />
          <Filter />
        </>
      ) : (
        <button
          className="header__button-back"
          onClick={navigateToAllCharactersPage}
        >
          Back
        </button>
      )}
    </header>
  );
};
