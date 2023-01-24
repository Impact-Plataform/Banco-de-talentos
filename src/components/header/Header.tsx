'use client'
import { useContext, useState } from 'react';
import Image from 'next/image';
import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { HeaderContainer } from './header.style';
import logo from '../../../public/starwars.png';
import { AppContext } from '../../contexts/contextProvider';


export default function Header() {
  const [character, setCharacter] = useState('');
  const { setCharactersSearch, menuIsVisible, setMenuIsVisible } = useContext(AppContext);
  const router = usePathname();


  const handleSetCharactersSearch = (character: string) => {    
    setCharactersSearch(character.toLowerCase());
    setCharacter('')
  };


  return(
    <HeaderContainer menuVisible={menuIsVisible}>
      <div className='div-header-logo'>
      <Link className='link' href={`/`}>
        <Image
          src={logo}
          alt="star wars logo"
          width={100}
          />
      </Link>
      </div>
      {(router === "/")? (
        <div className='div-header-search'>
          <div>
            <input
              type="text"
              value={character}
              onChange={ (e)=> setCharacter(e.target.value) }
            />
            <IconButton
              className="icon-btn-search"
              aria-label='Search database'
              icon={<SearchIcon />}
              onClick={ () => handleSetCharactersSearch(character) }
            />
          </div>
          <div>
            <HamburgerIcon
              onClick={() => setMenuIsVisible(true)}
              className='icon-btn-hamburger'
            />
            <CloseIcon
              onClick={() => setMenuIsVisible(false)}
              className='icon-btn-close'
            />
          </div>
        </div>
        ): ""}
    </HeaderContainer>
  );
}
