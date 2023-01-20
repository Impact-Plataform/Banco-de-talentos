import React, { useContext, useState, useEffect } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { Loader } from './Loader';
import { AllCharacters } from './AllCharacters';
import { FilteredCharacters } from './FilteredCharacters';

export const CharacterList = () => {
  const { allCharacters, filteredCharacters } = useContext(CharacterContext);

  return (
    <>
      {!allCharacters.length && <Loader />}
      <>{filteredCharacters.length ? <FilteredCharacters /> : <AllCharacters />}</>
    </>
  );
};
