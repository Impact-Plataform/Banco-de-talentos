export interface AppContextInterface {
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  gender: string | undefined,
  setGender: React.Dispatch<React.SetStateAction<any>>,
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  speciesFilter: string | undefined,
  setSpeciesFilter: React.Dispatch<React.SetStateAction<any>>,
  handleSpecies: any,
  filmFilter: string | undefined,
  setFilmFilter: React.Dispatch<React.SetStateAction<any>>,
  charactersSearch: string | undefined,
  setCharactersSearch: React.Dispatch<React.SetStateAction<any>>,
  isLoadingSpecies: boolean,
  setIsLoadingSpecies: React.Dispatch<React.SetStateAction<boolean>>,
  characterId: string | undefined,
  setCharacterId: React.Dispatch<React.SetStateAction<any>>, 
}


export interface Props {
  children: React.ReactNode;
}
