import { useContext } from 'react';

import { Character } from '../../providers/Characters';
import { FilmsContext, FilmsContextData } from '../../providers/Films';

interface CardProps {
  character: Character;
}

function capitalizeFirstLetter(word: string): string {
  return word[0].toUpperCase() + word.substring(1);
}

export function Card({ character }: CardProps) {
  const { films } = useContext(FilmsContext) as FilmsContextData;

  return (
    <div className="w-[80%] bg-gray-700 m-2 rounded-lg p-6">
      <div className="">{character.name}</div>
      <div>
        <span>Gender: </span>
        <span>
          {character.gender != 'n/a' && capitalizeFirstLetter(character.gender)}
        </span>
      </div>
      <div>
        <span>Hair color: </span>
        <span>
          {character.hair_color != 'n/a' && capitalizeFirstLetter(character.hair_color)}
        </span>
      </div>
      <div>
        <span>Films: </span>
        <div className="ml-4">
          {films
            ?.filter((film) => film.characters.includes(character.url))
            .map((film, index) => (
              <div key={index}>{film.title}</div>
            ))}
        </div>
      </div>
    </div>
  );
}
