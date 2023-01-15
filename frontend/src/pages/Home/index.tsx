import { getPeople } from "../../api/people";
import { useEffect, useState } from "react";
import { CharacterCardList } from "../../components";

export const Home = () => {
  const [characters, setCharacters] = useState([]);

  const handleCharacters = async () => {
    const charactersResponse = await getPeople({ page: 2 });
    setCharacters(charactersResponse);
  };
  useEffect(() => {
    handleCharacters();
  }, []);

  return (
    <>
      <CharacterCardList characters={characters} />
    </>
  );
};
