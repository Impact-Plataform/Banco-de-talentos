'use client'
import styled, {css} from 'styled-components';


interface Props {
  isVisible: boolean;
};

interface PropsNext {
  buttonDisabled: boolean;
}

interface PropsBack {
  buttonDisabled: boolean;
}

export const MainContainer = styled.div<Props>`
  display: flex;

  ${({ isVisible }) => isVisible && css`
      display: block;
  `}
`;

export const ButtonBackCharacters = styled.button<PropsBack>`
  background-color: #F0A500;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  border-bottom: 3px solid #F5D9A0;

  &&:hover {
    border-bottom: none;
    svg {
      margin-right: 5px;
    }
  }

  ${({ buttonDisabled }) => buttonDisabled && css`
    border-bottom: none;
    &&:hover {
      svg {
        margin-right: 0px !important;
      }
    }
  `}
`;

export const ButtonNextCharacters = styled.button<PropsNext>`
  background-color: #F0A500;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  border-bottom: 3px solid #F5D9A0;

  &&:hover {
    border-bottom: none;
    svg {
      margin-left: 5px;
    }
  }

  ${({ buttonDisabled }) => buttonDisabled && css`
    border-bottom: none;
      &&:hover {
        svg {
          margin-left: 0px !important;
        }
      }
  `}
`;
