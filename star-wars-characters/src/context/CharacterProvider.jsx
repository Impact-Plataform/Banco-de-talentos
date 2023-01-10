import axios from 'axios';
import { useEffect, useState } from 'react';
import { CharacterContext } from './CharacterContext';

export const CharacterProvider = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState([]);

  // estados simples
  const [loading, setLoading] = useState([]);

  // chama a api
  const getAllCharacters = async () => {
    let url = 'https://swapi.dev/api/people';

    try {
      console.log('chamando o recurso people');

      let characters = [];
      while (url) {
        const response = await axios(url);
        console.log(response.data);

        const { next, results } = response.data;
        url = next;
        characters = [...characters, ...results];
      }

      console.log('terminou a chamada');
      setAllCharacters(characters);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCharacters();
  }, []);
  console.log('people: ', allCharacters);
  return <CharacterContext.Provider value={{ number: 0 }}>{children}</CharacterContext.Provider>;
};
