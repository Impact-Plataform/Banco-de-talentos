import { useCharacters } from '../../providers/Characters';
import { useFilms } from '../../providers/Films';
import { useSpecies } from '../../providers/Species';

export function Filters() {
  const { films } = useFilms();
  const { characters } = useCharacters();
  const { species } = useSpecies();

  return (
    <div className="mt-3 flex justify-between">
      <select name="Film" id="" className="bg-inherit">
        {films?.map((film, index) => (
          <option key={index} value={film.title}>
            {film.title}
          </option>
        ))}
      </select>
      <select name="" id="" className="bg-inherit">
        {[...new Set(characters?.map(({ gender }) => gender))].map((gender, index) => (
          <option key={index} value={gender}>
            {gender}
          </option>
        ))}
      </select>
      <select name="Film" id="" className="bg-inherit">
        {species?.map((specie, index) => (
          <option key={index} value={specie.name}>
            {specie.name}
          </option>
        ))}
      </select>
    </div>
  );
}
