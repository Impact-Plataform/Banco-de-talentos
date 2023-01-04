'use client'
import { AsideContainer } from './aside.style';
import Gender from './gender/Gender';
import Species from './species/Species';


export default function Aside() {

  return(
    <AsideContainer>
      <Gender />
      <Species />
    </AsideContainer>
  );
}
