'use client'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/contextProvider';
import { CharactersListDiv } from './charactersList.style';
import { ICharacter } from '../../types/Characters.types';
import CharacterCard from './CharacterCard';
import { handlePage } from '../../utils';
import Image from 'next/image';
import loadingGif from '../../../public/loading.gif';



interface Props {
  characters: ICharacter[],
}

export default function CharactersList({ characters }: Props) {
  const { page, gender, speciesFilter, filmFilter, charactersSearch, setCharacterId, isLoading, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    const storeCharacter = JSON.parse(localStorage.getItem('characters') as string);
    if (storeCharacter !== null) {
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleLoad = (isLoading: boolean) => {
    if (isLoading) {
      return(
        <CharactersListDiv isLoading={isLoading}>
            <Image className="imggif" alt="hsshhss" src={loadingGif} width={100} height={50}/>
            <h1>Loading data...</h1>
        </CharactersListDiv>
      );
    }
  };


  return(
    <CharactersListDiv isLoading={isLoading}>
      { handleLoad(isLoading) }
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
