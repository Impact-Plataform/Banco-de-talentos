import { CharactersContainer } from './characters.style';
import CharacterCard from './CharacterCard';
import { ICharacter } from '../../types/Characters.types';
import { getAllCharacters } from '../../services/services';
import CharactersList from './CharactersList';


export default async function Characters() {
  const allCharacter: ICharacter[] = await getAllCharacters();


  return(
    <CharactersContainer>
      <CharactersList characters={allCharacter} />
    </CharactersContainer>
  );
}
