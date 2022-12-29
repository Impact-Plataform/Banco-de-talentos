'use client'
import { HeaderContainer } from './header.style';
import Image from 'next/image';
import logo from '../../../public/starwars.png';
import { useState } from 'react';


export default function Header() {
  const [_character, setCharacter] = useState('');


  return(
    <HeaderContainer>
      <Image
        src={logo}
        alt="star wars logo"
        width={100}
      />
      <input
        type="text"
        onChange={ (e)=> setCharacter(e.target.value) }
      />
      <button type="button">Pesquisar</button>
    </HeaderContainer>
  );
}
