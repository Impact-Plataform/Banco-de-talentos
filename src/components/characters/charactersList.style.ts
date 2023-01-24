'use client'
import styled, {css} from 'styled-components';

interface Props {
  isLoading: boolean,
}

export const CharactersListDiv = styled.div<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 950px;


  ${({ isLoading }) => isLoading && css`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .imggif {
      display: flex !important;
      width: 200px;
      height: 200px;
    }

    h1 {
      color: #F0A500;
    }
  `}


  @media(min-width: 1800px) {
    margin-left: -300px;
  }
  @media(max-width: 1366px) {
    width: 90%;
   }
   @media(max-width: 1200px) {
    width: 80%;
   }
   @media(max-width: 1032px) {
    width: 70%;
   }
   @media(max-width: 615px) {
    width: 60%;
   }
`;