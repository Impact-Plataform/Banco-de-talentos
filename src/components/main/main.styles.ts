'use client'
import styled, {css} from 'styled-components';


interface Props {
  isVisible: boolean;
};


export const MainContainer = styled.div<Props>`
  display: flex;

  ${({ isVisible }) => isVisible && css`
      display: block;
  `}
`;
