import cx from 'classnames';

import { characters as characterImages } from '../../assets/images.json';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { Character } from '../../interfaces/character.interface';
import { ObjectStringInterface } from '../../interfaces/object.interface';
import { useDarkMode } from '../../providers/DarkMode';
import { useFilms } from '../../providers/Films';
import { useSpecies } from '../../providers/Species';

interface CardProps {
  character: Character;
  mode: 'complete' | 'simplified';
}

export function Card({ character, mode }: CardProps) {
  const { darkMode } = useDarkMode();
  const { species } = useSpecies();
  const { films } = useFilms();

  return (
    <div
      className={cx('rounded-lg flex flex-col p-2 h-full', 'lg:p-5', {
        'bg-gray-600': darkMode,
        'bg-gray-200': !darkMode,
      })}
    >
      {mode === 'complete' && (
        <p
          className={cx(
            'text-sw-yellow text-2xl font-semibold text-center tracking-widest',
            'lg:py-5 lg:text-4xl',
          )}
        >
          {character.name}
        </p>
      )}
      <div className={cx({ 'lg:flex lg:flex-row lg:text-xl': mode === 'complete' })}>
        <img
          src={(characterImages as ObjectStringInterface)[character.name]}
          alt={`${character.name}`}
          className="rounded-lg w-full lg:w-[500px]"
        />
        {mode === 'simplified' && (
          <p className="text-sw-yellow text-2xl font-semibold text-center my-2 tracking-wide">
            {character.name}
          </p>
        )}
        <div className="mx-6 mt-2">
          {mode === 'complete' && (
            <div>
              <p>Gender: {capitalizeFirstLetter(character?.gender)}</p>
              <p>Hair color: {capitalizeFirstLetter(character?.hair_color)}</p>
              <p>Birth year: {capitalizeFirstLetter(character?.birth_year)}</p>
              <p>
                Specie:{' '}
                {species?.find((specie) =>
                  specie.people.includes(character?.url as string),
                )?.name || 'N/a'}
              </p>
            </div>
          )}
          <span
            className={cx('font-semibold', {
              'text-gray-200': darkMode,
            })}
          >
            Films:
          </span>
          <div className="ml-6">
            {films
              ?.filter((film) => film.characters.includes(character.url))
              .map(
                (film, index) =>
                  index < (mode === 'simplified' ? 3 : Number.MAX_VALUE) && (
                    <p key={index}>{film.title}</p>
                  ),
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
