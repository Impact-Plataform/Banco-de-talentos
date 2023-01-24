'use client'
import { useContext, useEffect, useState } from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { MainContainer, ButtonNextCharacters, ButtonBackCharacters } from './main.styles';
import Aside from '../aside/Aside';
import Characters from '../characters/Characters';
import { AppContext } from '../../contexts/contextProvider';
import { ICharacter } from '../../types/Characters.types';


export default function Main() {
  const { page, setPage, menuIsVisible } = useContext(AppContext);
  const [isDisabledNext, setIsDisabledNext] = useState(false);
  const [isDisabledBack, setIsDisabledBack] = useState(true);
  
  const handlePerPage = (page: number, target: any) => {
    if (page >= 9) {
      setPage(8)
    }
    if (target.value === "next") {
      setPage(page + 1)
    }
    if (target.value === "back") {
      setPage(page - 1)
    }
  };

  // console.log(characterFilter.length);
  

  const HandlebuttoIsDisabled = (page: number) => {
    if (page <= 0) {
      setIsDisabledBack(true)
    }
    if (page >= 8) {
      setIsDisabledNext(true)
    }
    if (page < 8) {
      setIsDisabledNext(false)
    }
    if (page > 0) {
      setIsDisabledBack(false)
    }
  };

  useEffect(() => {
    HandlebuttoIsDisabled(page)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
	
	return(
    <>
		  <MainContainer isVisible={menuIsVisible}>
			  <Aside/>
			  <Characters/>
		  </MainContainer>
      <div className="div-btn">
        <ButtonBackCharacters
          buttonDisabled={isDisabledBack}
          disabled={ isDisabledBack }
          onClick={ (e) => handlePerPage(page, e.target) }
          value="back">
            <ArrowBackIcon/>
            Back
          </ButtonBackCharacters>
        <ButtonNextCharacters
          buttonDisabled={isDisabledNext}
          disabled={ isDisabledNext }
          onClick={ (e) => handlePerPage(page, e.target) }
          value="next">
            Next
            <ArrowForwardIcon/>
        </ButtonNextCharacters>
      </div>
    </>
	);
} 