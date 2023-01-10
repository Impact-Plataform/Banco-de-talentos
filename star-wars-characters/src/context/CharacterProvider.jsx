import axios from 'axios';
import { useEffect, useState } from 'react';
import { CharacterContext } from './CharacterContext';

export const CharacterProvider = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState([]);

  // custom hook para formulario
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  });

  // estados simples
  const [loading, setLoading] = useState(true);
  // estado do filtro
  const [active, setActive] = useState(true);

  // chama todos os peronagens
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
      setLoading(false);
      setAllCharacters(characters);
    } catch (error) {
      console.log(error);
    }
  };

  // chamar pelo id
  const getCharacterById = async id => {
    let url = 'https://swapi.dev/api/';

    try {
      console.log('chamando o recurso people/id');

      while (url) {
        const response = await axios(`${url}people/${id}`);
        console.log(response.data);
        return response;
      }

      console.log('terminou a chamada do people/id');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);
  console.log('people: ', allCharacters);

  return (
    <CharacterContext.Provider
      value={{ valueSearch, onInputChange, onResetForm, allCharacters, getCharacterById }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
