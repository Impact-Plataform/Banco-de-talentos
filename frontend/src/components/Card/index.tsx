import { Character } from '../../providers/Characters';

interface CardProps {
  character: Character;
}

export function Card({ character }: CardProps) {
  return (
    <div className="w-[80%] bg-gray-700 m-2 rounded-lg p-4">
      <div>{character.name}</div>
      <div>{character.gender}</div>
    </div>
  );
}
