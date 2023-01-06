import styled from "styled-components";
import { theme, typeScale } from "../../styles";
import { IconWrapper } from "../../assets/icons/stormtrooper";

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: ${typeScale.small};
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;
  color: ${theme.colors.blueColor};
  cursor: pointer;

  &:hover ${IconWrapper} {
    height: 50px;
    -webkit-transition-property: height;
    -webkit-transition-duration: .5s;
    -moz-transition-property: height;
    -moz-transition-duration: .5s;
    transition-property: height;
    transition-duration: .5s;
  }

  @media(max-width: 530px) {
    right: 20px;
  }
`;
