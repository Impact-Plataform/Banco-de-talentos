'use client'
import { useContext } from 'react';
import { AppContext } from '../../contexts/contextProvider';
import { CharactersListDiv } from './charactersList.style';
import { ICharacter } from '../../types/Characters.types';
import CharacterCard from './CharacterCard';
import { handlePage } from '../../utils';


interface Props {
  characters: ICharacter[],
}

export default function CharactersList({ characters }: Props) {
  
  const { page, setPage } = useContext(AppContext);

  return(
    <CharactersListDiv>
       { handlePage(page, characters)?.map((character) => (
        <CharacterCard
          key={character.id}
          img={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
          name={character.name}
          height={character.height}
          homeworld={ character.homeworld }
        />
      )) }
    </CharactersListDiv>
  );
};
