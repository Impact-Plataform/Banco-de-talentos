import styled from "styled-components";
import { theme } from "../../styles";

export const GoBackNotFound = styled.button`
  background: none;
  border: 2px solid ${theme.colors.lightColor};
  padding: .5em 1em;
  cursor: pointer;
  margin-top: 1em;
  color: inherit;
  border-radius: 10px;
`;

export const NotFoundWrapper = styled.div`
  min-height: 90vh;
  display: grid;
  place-content: center;
  place-items: center;
`;
