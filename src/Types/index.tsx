export interface CharacterTYPE  {
    name: string;
    height: number;
    mass: number;
    setCharactersList: React.Dispatch<React.SetStateAction<string>>;
}

export interface CharacterListPropTYPE {
    charactersList: Array<CharacterTYPE>;
}