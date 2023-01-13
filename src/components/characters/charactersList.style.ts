'use client'
import styled from 'styled-components';


export const CharactersListDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 950px;

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

export const ButtonNextCharacters = styled.button`
`;

export const ButtonBackCharacters = styled.button`
`;