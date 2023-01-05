import { useContext } from 'react';

import { characters } from '../../assets/images.json';
import { imageJsonInterface } from '../../interfaces';
import { Character } from '../../providers/Characters';
import { FilmsContext, FilmsContextData } from '../../providers/Films';

interface CardProps {
  character: Character;
}

export function Card({ character }: CardProps) {
  const { films } = useContext(FilmsContext) as FilmsContextData;

  return (
    <div className="w-[80%] bg-gray-700 m-2 rounded-lg p-6">
      <img
        src={(characters as imageJsonInterface)[character.name]}
        alt={`${character.name}`}
      />
      <div className="text-sw-yellow text-2xl font-semibold text-center">
        {character.name}
      </div>
      <div>
        <span>Films: </span>
        <div className="ml-4">
          {films
            ?.filter((film) => film.characters.includes(character.url))
            .map((film, index) => index < 3 && <div key={index}>{film.title}</div>)}
        </div>
      </div>
    </div>
  );
}
