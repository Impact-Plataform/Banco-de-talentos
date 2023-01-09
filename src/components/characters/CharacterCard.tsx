import { CharacterCardContainer } from './characterCard.style';
import Image from 'next/image';
import { ICharacterProps } from '../../types/Characters.types';


export default function CharacterCard({ img, name, height, birth_year, mass }: ICharacterProps) {

  return(
    <CharacterCardContainer>
      <Image src={img} alt={ name } width={200} height={300}/>
      <h2>{name}</h2>
      <p>Altura:<span>{` ${height}cm`}</span></p>
      <p>Massa:<span>{` ${mass}Kg`}</span></p>
      <p>Ano de Nascimento:<span>{` ${birth_year}`}</span></p>
    </CharacterCardContainer>
  );
};
