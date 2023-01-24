export interface ICharacter {
  id: number,
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
}

export interface ICharacterProps {
  id: number,
  key: number,
  img: string,
  name: string,
  height: string,
  birth_year: string,
  mass: string,
  setState: any,
}

interface IFilms {
  title: string,
  filmId: string
}

export interface ICharacterDetails {
  id: string,
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: IFilms[];
  species: string;
  vehicles: string[];
  starships: string[];
  url: string;
}
