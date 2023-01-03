'use client'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/contextProvider';
import { CharactersListDiv, ButtonNextCharacters, ButtonBackCharacters } from './charactersList.style';
import { ICharacter } from '../../types/Characters.types';
import CharacterCard from './CharacterCard';
import { handlePage } from '../../utils';


interface Props {
  characters: ICharacter[],
}

export default function CharactersList({ characters }: Props) {
  const [isDisabledNext, setIsDisabledNext] = useState(false);
  const [isDisabledBack, setIsDisabledBack] = useState(true);
  const { page, setPage } = useContext(AppContext);
  

  const handlePerPage = (page: number, target: any) => {
    if (page >= 9) {
      setPage(8)
    }
    if (target.value === "next") {
      setPage(page + 1)
    }
    if (target.value === "back") {
      setPage(page - 1)
    }
  };


  const HandlebuttoIsDisabled = (page: number) => {
    if (page <= 0) {
      setIsDisabledBack(true)
    }
    if (page >= 8) {
      setIsDisabledNext(true)
    }
    if (page < 8) {
      setIsDisabledNext(false)
    }
    if (page > 0) {
      setIsDisabledBack(false)
    }
  };

  useEffect(() => {
    HandlebuttoIsDisabled(page)
  }, [page])

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
      <ButtonBackCharacters disabled={ isDisabledBack } onClick={ (e) => handlePerPage(page, e.target) } value="back">Volta</ButtonBackCharacters>
      <ButtonNextCharacters disabled={ isDisabledNext } onClick={ (e) => handlePerPage(page, e.target) } value="next">Próximo</ButtonNextCharacters>
    </CharactersListDiv>
  );
};
