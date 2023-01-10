import cx from 'classnames';
import { Link } from 'react-router-dom';

import { characters as characterImages } from '../../assets/images.json';
import { snakeCasify } from '../../helpers/snakeCasify';
import { Character } from '../../interfaces/character.interface';
import { ObjectInterface } from '../../interfaces/object.interface';
import { useDarkMode } from '../../providers/DarkMode';
import { useFilms } from '../../providers/Films';

interface CardProps {
  character: Character;
}

export function Card({ character }: CardProps) {
  const { films } = useFilms();
  const { darkMode } = useDarkMode();

  return (
    <Link
      to={snakeCasify(character.name)}
      className="w-[80%] bg-gray-700 m-2 rounded-lg p-6"
    >
      <img
        src={(characterImages as ObjectInterface)[character.name]}
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
