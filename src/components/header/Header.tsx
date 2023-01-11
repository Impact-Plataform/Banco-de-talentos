'use client'
import { useContext, useState } from 'react';
import Image from 'next/image';
import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderContainer } from './header.style';
import logo from '../../../public/starwars.png';
import { AppContext } from '../../contexts/contextProvider';
import { SearchIcon } from '@chakra-ui/icons';


export default function Header() {
  const [character, setCharacter] = useState('');
  const { setCharactersSearch } = useContext(AppContext);
  const router = usePathname();


  const handleSetCharactersSearch = (character: string) => {
    setCharactersSearch(character.toLowerCase());
    setCharacter('')
  };


  return(
    <HeaderContainer>
      <Link href={`/`}>
        <Image
          src={logo}
          alt="star wars logo"
          width={100}
        />
        {(router === "/")? (
        <div>
          <input
            type="text"
            value={character}
            onChange={ (e)=> setCharacter(e.target.value) }
          />
          <IconButton
            aria-label='Search database'
            icon={<SearchIcon />}
            onClick={ () => handleSetCharactersSearch(character) }
          />
        </div>
        ): ""}
      </Link>
    </HeaderContainer>
  );
}
