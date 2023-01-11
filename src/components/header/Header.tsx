'use client'
import { HeaderContainer } from './header.style';
import Image from 'next/image';
import logo from '../../../public/starwars.png';
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/contextProvider';


export default function Header() {
  const [character, setCharacter] = useState('');
  const { setCharactersSearch } = useContext(AppContext)


  const handleSetCharactersSearch = (character: string) => {
    setCharactersSearch(character.toLowerCase());
    setCharacter('')
  };


  return(
    <HeaderContainer>
      <Image
        src={logo}
        alt="star wars logo"
        width={100}
      />
      <input
        type="text"
        value={character}
        onChange={ (e)=> setCharacter(e.target.value) }
      />
      <button
        onClick={ () => handleSetCharactersSearch(character) }
        type="button"
        >
          Pesquisar
      </button>
    </HeaderContainer>
  );
}
