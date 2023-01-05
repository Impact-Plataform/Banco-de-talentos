export interface CharacterTYPE  {
    name: string;
    height: number;
    mass: number;
    setCharactersList: React.Dispatch<React.SetStateAction<string>>;
    homeworld: string;
    films: Array<string>;
    charactersList: string[];
    image: string;
    birth_year: string;
    gender: string;
    quote: string;
    specie: string;
    film: string;
    species: string;
}

export interface Character {
   character: CharacterTYPE;
}

export interface IInputWrapperProps {
    label?: string;
    required?: boolean;
    minimizedLabel?: boolean;
    description?: string;
    error?: string;
    wrapperStyle?: React.CSSProperties;
    children?: JSX.Element|JSX.Element[];
  }
