import Link from 'next/link';
import { CharacterCardContainer } from './characterCard.style';
import Image from 'next/image';
import { ICharacterProps } from '../../types/Characters.types';


export default function CharacterCard({ img, name, height, birth_year, mass, id, setState }: ICharacterProps) {

  return(
    <CharacterCardContainer>
      <Link href={`/character/${id}`} onClick={() => setState(id)}>
        <Image src={img} alt={ name } width={200} height={300}/>
        <h2>{name}</h2>
        <p>Altura:<span>{` ${height}cm`}</span></p>
        <p>Massa:<span>{` ${mass}Kg`}</span></p>
        <p>Ano de Nascimento:<span>{` ${birth_year}`}</span></p>
      </Link>
    </CharacterCardContainer>
  );
};
