import { useEffect, useState } from 'react';
import { CharacterContext } from './CharacterContext';
import { getAllData, getCharacterById } from '../api/fetchData.js';
import { useForm } from '../hook/useForm';

export const CharacterProvider = ({ children }) => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  // custom hook para formulario
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  });

  useEffect(() => {
    setTimeout(async () => {
      console.log('------------- START ---------------');
      const characters = await getAllData();

      console.log('------------- STOP ---------------');
      setAllCharacters(characters);
      setLoading(false);
    }, 4000);
  }, []);

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
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
