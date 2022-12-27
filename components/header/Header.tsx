import { HeaderContainer } from './header.style';
import Image from 'next/image';
import logo from '../../public/starwars.png';


export default function Header() {
  return(
    <HeaderContainer>
      <Image
        src={logo}
        alt="star wars logo"
        className="header-logo"
      />
      <input type="text"/>
      <button className="header-btn" type="button">Pesquisar</button>
    </HeaderContainer>
  );
}
