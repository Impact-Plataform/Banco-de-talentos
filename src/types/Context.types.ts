export interface AppContextInterface {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  gender: string | undefined,
  setGender: React.Dispatch<React.SetStateAction<any>>,
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  speciesFilter: { id: string, name: string } | null,
  setSpeciesFilter: React.Dispatch<React.SetStateAction<{ id: string, name: string } | null>>,
  handleSpecies: any,
  filmFilter: { id: string, name: string } | undefined,
  setFilmFilter: React.Dispatch<React.SetStateAction<any>>,
  charactersSearch: string | undefined,
  setCharactersSearch: React.Dispatch<React.SetStateAction<any>>,
  isLoadingSpecies: boolean,
  setIsLoadingSpecies: React.Dispatch<React.SetStateAction<boolean>>,
  characterId: string | undefined,
  setCharacterId: React.Dispatch<React.SetStateAction<any>>,
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface Props {
  children: React.ReactNode;
}
