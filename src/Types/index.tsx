export interface CharacterTYPE  {
    name: string;
    height: number;
    mass: number;
    setCharactersList: React.Dispatch<React.SetStateAction<string>>;
    character: object;
}

export interface Character {
   character: CharacterTYPE;
}
