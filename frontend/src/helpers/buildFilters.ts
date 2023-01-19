import { AllFiltersInterface } from '../interfaces/object.interface';
import { useCharacters } from '../providers/Characters';
import { useFilms } from '../providers/Films';
import { useSpecies } from '../providers/Species';

export function buildFilters(): AllFiltersInterface {
  const { films } = useFilms();
  const { characters } = useCharacters();
  const { species } = useSpecies();

  return {
    films: films?.map(({ title, url }) => ({
      name: title,
      filter: url,
    })),
    gender: [...new Set(characters?.map(({ gender }) => gender))].map((gender) => ({
      name: gender,
      filter: gender,
    })),
    species: species?.map(({ name, url }) => ({
      name,
      filter: url,
    })),
  };
}
