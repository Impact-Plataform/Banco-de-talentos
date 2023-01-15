import { useEffect, useState } from 'react';

import { CharacterContext } from './CharacterContext';
import { getAllData, getCharacterById } from '../api/fetchData.js';
import { useForm } from '../hook/useForm';

export const CharacterProvider = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState([]);

  // custom hook para formulario
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      console.log('------------- START ---------------');
      const characters = await getAllData();

      console.log('------------- STOP ---------------');
      setAllCharacters(characters);
    })();
    setLoading(false);
  }, []);
  console.log('to aqui', allCharacters);

  // Filter
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const onChangeFilter = event => {
    console.log(event.target.value.toLowerCase());

    if (event.target.value) {
      const filteredResults = allCharacters.filter(character => {
        return (
          (character.gender === event.target.value.toLowerCase() && event.target.name === 'gender') ||
          character.movies.includes(event.target.value) ||
          (event.target.name === 'film' && character.specie.includes(event.target.value)) ||
          event.target.name === 'specie'
        );
      });
      console.log('filtrados', filteredResults);
      setFilteredCharacters([...filteredCharacters, ...filteredResults]);
    } else {
      const filteredResults = allCharacters.filter(character => {
        return (
          character.gender === event.target.value.toLowerCase() ||
          character.movies.includes(event.target.value) ||
          character.specie.includes(event.target.value)
        );
      });
      setFilteredCharacters(...filteredResults);
      return;
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allCharacters,
        getCharacterById,
        // Loader
        loading,
        setLoading,
        // filters
        filteredCharacters,
        setFilteredCharacters,
        onChangeFilter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
