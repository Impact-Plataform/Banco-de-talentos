'use client'
import { Badge } from '@chakra-ui/react'
import { useContext } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { AppContext } from '../../contexts/contextProvider';
import { FilterContainer } from './filter.style';


export default function Filter() {
  const { 
    gender,
    speciesFilter,
    filmFilter,
    charactersSearch,
    setGender,
    setSpeciesFilter,
    setFilmFilter,
    setCharactersSearch 
  } = useContext(AppContext);


  return(
    <FilterContainer>
      { (gender || speciesFilter || filmFilter || charactersSearch)? (
        <h1>Filtrar por</h1>
      ): "" }
      { (gender)? (
        <Badge>{gender}<CloseIcon onClick={() => setGender(null)}/></Badge>
      ): "" }
      { (speciesFilter)? (
        <Badge>{speciesFilter?.name}<CloseIcon onClick={() => setSpeciesFilter(null)}/></Badge>
      ): "" }
      { (filmFilter)? (
        <Badge>{filmFilter?.name}<CloseIcon onClick={() => setFilmFilter(null)}/></Badge>
      ): "" }
      { (charactersSearch)? (
        <Badge>{charactersSearch}<CloseIcon onClick={() => setCharactersSearch(null)}/></Badge>
      ): "" }
    </FilterContainer>
  );
};
