import { CharacterCardContainer } from './characterCard.style';
import Image from 'next/image';
import { ICharacterProps } from '../../types/Characters.types';


export default function CharacterCard({ img, name, height, homeworld }: ICharacterProps) {

  return(
    <CharacterCardContainer>
      <Image src={img} alt={ name } width={200} height={300}/>
      <h2>{name}</h2>
      <p>Altura: <span>{height}</span></p>
      <p>Planeta Natal:<span>{` ${homeworld}`}</span></p>
    </CharacterCardContainer>
  );
};
