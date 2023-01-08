export interface Specie {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: Array<string>;
  films: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface SpeciesContextData {
  species: Array<Specie> | null;
}
