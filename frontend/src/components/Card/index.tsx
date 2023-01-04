import { Character } from '../../providers/Characters';

interface CardProps {
  character: Character;
}

export function Card({ character }: CardProps) {
  return <div>{character.name}</div>;
}
