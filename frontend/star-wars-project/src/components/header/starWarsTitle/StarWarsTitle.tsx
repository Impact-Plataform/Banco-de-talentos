import { useNavigate } from "react-router-dom";
import "./stylesStarWarsTitle.css";

export const StarWarsTitle = () => {
  const navigate = useNavigate();
  const navigateToAllCharactersPage = () => navigate("/");

  return (
    <h1 className="title" onClick={navigateToAllCharactersPage}>
      STAR WARS
    </h1>
  );
};
