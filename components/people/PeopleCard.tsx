import { PeopleCardContainer } from './peopleCard.style';
import Image from 'next/image';


interface Props {
  key: number,
  img: string,
  name: string,
  height: string,
  homeworld: string
}


export default function PeopleCard({ key, img, name, height, homeworld }: Props) {
  return(
    <PeopleCardContainer key={key}>
      <Image src={img} alt={ name }/>
      <h2>{name}</h2>
      <p>Altura<span>{height}</span></p>
      <p>Planeta Natal:<span>{` ${homeworld}`}</span></p>
    </PeopleCardContainer>
  );
};
