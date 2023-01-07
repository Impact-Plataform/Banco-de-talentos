import styled from "styled-components";
import { theme } from "../../styles";

export const InputSearch = styled.input`
  border: 1px solid transparent;
  outline: none;
  caret-color: ${theme.colors.lightColor};
  letter-spacing: 1px;
  background: ${theme.colors.secondaryLightColor};
  border-radius: 8px;
  height: 38px;
  padding-left: 2.5rem;
  color: ${theme.colors.lightColor};
  width: 100%;

  &:focus {
    border: 1px solid ${theme.colors.lightColor};
    caret-color: ${theme.colors.lightColor};
    color: ${theme.colors.lightColor};
  }

  &::placeholder {
    color: ${theme.colors.lightColor};
  }
`;
