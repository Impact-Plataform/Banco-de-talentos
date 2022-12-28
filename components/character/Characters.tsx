import { useEffect, useState } from 'react';
import { CharactersContainer } from './characters.style';
import CharacterCard from './CharacterCard';
import { getCharacters } from '../../services/services';
import { ICharacter } from '../../types/Characters.types';


export default function Characters() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  
  const handleData = async () => {
    const data = await getCharacters()
    setCharacters(data)
  }

  useEffect(() => {
    handleData()
  }, []);

  return(
    <CharactersContainer>
      
    </CharactersContainer>
  );
}
