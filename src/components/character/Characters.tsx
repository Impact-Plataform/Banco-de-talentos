'use client'
import { CharactersContainer } from './characters.style';
import { ICharacter } from '../../types/Characters.types';
import { getAllCharacters } from '../../services/characters.services';
import CharactersList from './CharactersList';
import { useEffect, useState } from 'react';


export default function Characters() {
  const [allCharacter, setAllCharacter] = useState<ICharacter[]>([]);
  
  

  const handlePromiseAllCharacter = async () => {
    const alCharacter: ICharacter[] = await getAllCharacters();
    setAllCharacter(alCharacter)
  }

  useEffect(() => {
    handlePromiseAllCharacter()
  }, [])

  return(
    <CharactersContainer>
      <CharactersList characters={allCharacter} />
    </CharactersContainer>
  );
}
