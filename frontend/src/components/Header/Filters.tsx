import cx from 'classnames';

import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { useCharacters } from '../../providers/Characters';
import { useDarkMode } from '../../providers/DarkMode';
import { useFilms } from '../../providers/Films';
import { useSpecies } from '../../providers/Species';

export function Filters() {
  const { darkMode } = useDarkMode();
  const { films } = useFilms();
  const { characters, changeFilters } = useCharacters();
  const { species } = useSpecies();

  const optionsCSS = cx(cx({ 'bg-gray-900': darkMode }));

  return (
    <div className="mt-3 flex justify-between">
      <select
        name="Film"
        id=""
        className="bg-inherit"
        onChange={({ target }) => changeFilters({ films: target.value })}
      >
        <option value="" defaultChecked className={optionsCSS}>
          All films
        </option>
        {films?.map((film, index) => (
          <option key={index} value={film.url} className={optionsCSS}>
            {film.title}
          </option>
        ))}
      </select>
      <select
        name=""
        id=""
        className="bg-inherit"
        onChange={({ target }) => changeFilters({ gender: target.value })}
      >
        <option value="" defaultChecked className={optionsCSS}>
          All genders
        </option>
        {[...new Set(characters?.map(({ gender }) => gender))].map((gender, index) => (
          <option key={index} value={gender} className={optionsCSS}>
            {capitalizeFirstLetter(gender)}
          </option>
        ))}
      </select>
      <select
        name="Film"
        id=""
        className="bg-inherit"
        onChange={({ target }) => changeFilters({ species: target.value })}
      >
        <option value="" defaultChecked className={optionsCSS}>
          All species
        </option>
        {species?.map((specie, index) => (
          <option key={index} value={specie.url} className={optionsCSS}>
            {specie.name}
          </option>
        ))}
      </select>
    </div>
  );
}
