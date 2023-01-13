'use client'
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/contextProvider';
import { CharactersListDiv } from './charactersList.style';
import { ICharacter } from '../../types/Characters.types';
import CharacterCard from './CharacterCard';
import { handlePage } from '../../utils';


interface Props {
  characters: ICharacter[],
}

export default function CharactersList({ characters }: Props) {
  const { page, gender, speciesFilter, filmFilter, charactersSearch, setCharacterId } = useContext(AppContext);

  return(
    <CharactersListDiv>
       { handlePage(page, characters, gender, speciesFilter, filmFilter, charactersSearch)?.map((character) => (
        <CharacterCard
          id={character.id}
          key={character.id}
          img={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
          name={character.name}
          height={character.height}
          birth_year={ character.birth_year }
          mass={ character.mass}
          setState={setCharacterId}
        />
      )) }
    </CharactersListDiv>
  );
};
