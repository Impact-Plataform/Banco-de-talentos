import { Routes } from "./routes";
import { getPeople } from "./api/people";
import { useEffect, useState } from "react";
import { Button, CharacterCardList } from "./components";

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
      <Button text="Next" onClick={() => {console.log("May the force be with you!")}}/>
      <CharacterCardList characters={characters} />
      <Routes />
    </div>
  );
}

export default App;
