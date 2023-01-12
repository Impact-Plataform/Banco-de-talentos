'use client'
import styled, { css } from 'styled-components';


interface Props {
  isVisible: boolean;
}


export const AsideContainer = styled.aside<Props>`
   @media(max-width: 880px) {
    display: none;
   }

   ${({ isVisible }) => isVisible && css`
      display: block !important;
      background: rgb(27, 26, 23);
      color: white;

      button {
        color: black;
      }
  `}
`;
