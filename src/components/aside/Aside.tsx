'use client'
import { AsideContainer } from './aside.style';
import Gender from './gender/Gender';
import Species from './species/Species';
import Films from './films/Films';


export default function Aside() {

  return(
    <AsideContainer>
      <Gender />
      <Species />
      <Films />
    </AsideContainer>
  );
}
