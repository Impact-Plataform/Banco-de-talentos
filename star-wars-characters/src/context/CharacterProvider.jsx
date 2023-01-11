import axios from 'axios';
import { useEffect, useState } from 'react';
import { CharacterContext } from './CharacterContext';
import { useForm } from '../hook/useForm';

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
      setAllCharacters(characters);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // chamar pelo id
  const getCharacterById = async id => {
    try {
      console.log('chamando o recurso people/id');

      const response = await axios(`https://swapi.dev/api/people/${id}`);
      console.log('by id', response.data);
      return response;
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
