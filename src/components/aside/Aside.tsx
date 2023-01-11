'use client'
import { AsideContainer } from './aside.style';
import Filter from './filter/Filter';
import Gender from './gender/Gender';
import Species from './species/Species';
import Films from './films/Films';


export default function Aside() {

  return(
    <AsideContainer>
      <Filter/>
      <Gender/>
      <Species/>
      <Films/>
    </AsideContainer>
  );
}
