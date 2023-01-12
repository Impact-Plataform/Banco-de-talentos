'use client'
import { AsideContainer } from './aside.style';
import Gender from './gender/Gender';
import Species from './species/Species';
import Films from './films/Films';
import { useContext } from 'react';
import { AppContext } from '../../contexts/contextProvider';



export default function Aside() {
  const {menuIsVisible, setMenuIsVisible} = useContext(AppContext)

  return(
    <AsideContainer isVisible={menuIsVisible}>
      <Gender/>
      <Species/>
      <Films/>
    </AsideContainer>
  );
}
