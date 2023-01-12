'use client'
import styled, { css } from 'styled-components';


interface Props {
  isVisible: boolean;
}


export const AsideContainer = styled.aside<Props>`
  font-family: Poppins, sans-serif !important;

   @media(max-width: 880px) {
    display: none;
   }

   ${({ isVisible }) => isVisible && css`
      display: block !important;
      background: rgb(27, 26, 23);
      color: white;
      text-align: center;


      h3 {
        margin-left: 30px !important;
      }

      button {
        color: black;
      }
  `}
`;