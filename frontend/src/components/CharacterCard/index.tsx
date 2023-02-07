import { CharacterCardInterface } from "./interface";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export const CharacterCard = ({ id, name }: CharacterCardInterface) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/character/${id}`);
  };

  return <Container onClick={handleClick}>{name}</Container>;
};
