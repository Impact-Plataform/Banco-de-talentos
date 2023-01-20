import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { AllCharacters } from './AllCharacters';
import { FilteredCharacters } from './FilteredCharacters';

export const CharacterList = () => {
  const { filteredCharacters } = useContext(CharacterContext);

  return (
    <>
      <>{filteredCharacters.length ? <FilteredCharacters /> : <AllCharacters />}</>
    </>
  );
};
