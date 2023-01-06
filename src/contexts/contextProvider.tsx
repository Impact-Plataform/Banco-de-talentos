'use client'
import React, { createContext, useState } from 'react';


interface AppContextInterface {
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
}

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextInterface>({} as AppContextInterface);

// Provider in your app

const AppProvider = ({ children }: Props) => {
  const [page, setPage] = useState(0);
  const [gender, setGender] = useState();
  const [speciesFilter, setSpeciesFilter] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filmFilter, setFilmFilter] = useState();
  const [charactersSearch, setCharactersSearch] = useState();


  const handleSpecies = (target: any) => {
    return setSpeciesFilter(target.getAttribute("value"))
  }


  const context = {
    page,
    setPage,
    gender,
    setGender,
    isLoading,
    setIsLoading,
    speciesFilter,
    setSpeciesFilter,
    handleSpecies,
    filmFilter,
    setFilmFilter,
    charactersSearch,
    setCharactersSearch
  }
  

  return (
    <AppContext.Provider value={context}>{children}</AppContext.Provider>
  )
};

export default AppProvider;