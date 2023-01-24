'use client'
import { Badge } from '@chakra-ui/react';
import Image from 'next/image';
import { useContext } from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { AppContext } from '../../contexts/contextProvider';
import { FilterContainer } from './filter.style';
import iconFilter from '../../../public/iconfilter.png';


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
        <>
          <h1>
            <Image src={iconFilter} alt="icon filter" width={10} height={20}/>
            <span>filter by</span>
          </h1>
        </>
      ): "" }
      <div className="div-badge">
        { (gender)? (
          <div>
            <Badge>{gender}<CloseIcon onClick={() => setGender(null)}/></Badge>
          </div>
        ): "" }
        { (speciesFilter)? (
          <div>
            <Badge>{speciesFilter?.name}<CloseIcon onClick={() => setSpeciesFilter(null)}/></Badge>
          </div>
        ): "" }
        { (filmFilter)? (
          <div>
            <Badge>{filmFilter?.name}<CloseIcon onClick={() => setFilmFilter(null)}/></Badge>
          </div>
        ): "" }
        { (charactersSearch)? (
          <div>
            <Badge>{charactersSearch}<CloseIcon onClick={() => setCharactersSearch(null)}/></Badge>
          </div>
        ): "" }
      </div>
    </FilterContainer>
  );
};
