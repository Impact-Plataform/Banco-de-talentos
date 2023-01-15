import { Routes } from "./routes";
import { getPeople } from "./api/people";
import { useEffect, useState } from "react";
import { CharacterCardList } from "./components/CharacterCardList";

function App() {
  const [characters, setCharacters] = useState([]);

  const handleCharacters = async () => {
    const charactersResponse = await getPeople({ page: 2 });
    setCharacters(charactersResponse);
  };
  useEffect(() => {
    handleCharacters();
  }, []);

  return (
    <div>
      <CharacterCardList characters={characters} />
      <Routes />
    </div>
  );
}

export default App;
