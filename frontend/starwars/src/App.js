import "./App.css";
import { useState, useEffect } from "react";
import getCharacters from "./fetchCharacters";
import Card from "./components/Card";

const App = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const apiReturn = async () => {
      const result = await getCharacters();
      console.log(result);
      setCharacters(result);
    };
    apiReturn();
  }, []);

  return (
    <div>
      {characters &&
        characters.length > 0 &&
        characters.map((char) => <Card char={char} key={char.name} />)}
    </div>
  );
};

export default App;
