export interface CharacterTYPE  {
    name: string;
    height: number;
    mass: number;
    setCharactersList: React.Dispatch<React.SetStateAction<string>>;
    character: object;
    homeworld: string;
    films: Array<string>;
}

export interface Character {
   character: CharacterTYPE;
}
