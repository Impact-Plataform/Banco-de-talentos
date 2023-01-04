'use client'
import { CharactersContainer } from './characters.style';
import { ICharacter } from '../../types/Characters.types';
import { getAllCharacters } from '../../services/characters.services';
import CharactersList from './CharactersList';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/contextProvider';


export default function Characters() {
  const [allCharacter, setAllCharacter] = useState<ICharacter[]>([]);
  const { setIsLoading } = useContext(AppContext);


  const handlePromiseAllCharacter = async () => {
    const alCharacter: ICharacter[] = await getAllCharacters();
    setAllCharacter(alCharacter)
    if (allCharacter.length > 0) {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    handlePromiseAllCharacter()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return(
    <CharactersContainer>
      <CharactersList characters={allCharacter} />
    </CharactersContainer>
  );
}
