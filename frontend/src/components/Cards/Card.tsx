import cx from 'classnames';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { characters as characterImages } from '../../assets/images.json';
import { snakeCasify } from '../../helpers/snakeCasify';
import { Character } from '../../interfaces/character.interface';
import { DarkModeContextData } from '../../interfaces/darkMode.interface';
import { FilmsContextData } from '../../interfaces/films.interface';
import { imageJsonInterface } from '../../interfaces/json.interface';
import { DarkModeContext } from '../../providers/DarkMode';
import { FilmsContext } from '../../providers/Films';

interface CardProps {
  character: Character;
}

export function Card({ character }: CardProps) {
  const { films } = useContext(FilmsContext) as FilmsContextData;
  const { darkMode } = useContext(DarkModeContext) as DarkModeContextData;

  return (
    <Link
      to={snakeCasify(character.name)}
      className="w-[80%] bg-gray-700 m-2 rounded-lg p-6"
    >
      <img
        src={(characterImages as imageJsonInterface)[character.name]}
        alt={`${character.name}`}
        className="rounded-lg w-full"
      />
      <div className="text-sw-yellow text-2xl font-semibold text-center mt-2 tracking-wide">
        {character.name}
      </div>
      <div className="mx-6">
        <span
          className={cx('text-lg font-semibold', {
            'text-gray-200': darkMode,
          })}
        >
          Films:{' '}
        </span>
        <div className="ml-6">
          {films
            ?.filter((film) => film.characters.includes(character.url))
            .map(
              (film, index) =>
                index < 3 && (
                  <div key={index} className={cx()}>
                    {film.title}
                  </div>
                ),
            )}
        </div>
      </div>
    </Link>
  );
}
