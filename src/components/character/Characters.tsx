'use client'
import { CharactersContainer } from './characters.style';
import { ICharacter } from '../../types/Characters.types';
import { getAllCharacters } from '../../services/characters.services';
import CharactersList from './CharactersList';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/contextProvider';
import { storeAllCharacter } from '../../store/store';


export default function Characters() {
  const [allCharacter, setAllCharacter] = useState<ICharacter[]>([]);
  const { setIsLoading, isLoading } = useContext(AppContext);
  


  useEffect(() => {
    storeAllCharacter(getAllCharacters, setAllCharacter, setIsLoading)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])


  return(
    <CharactersContainer>
      <CharactersList characters={allCharacter} />
    </CharactersContainer>
  );
}
