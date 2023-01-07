import styled from "styled-components";
import { theme, typeScale } from "../../styles";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 18.75em));
  gap: 3rem;
  padding: 1.5em;
  place-content: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Filters = styled.div`
  display: flex;
  gap: 1em;
  padding: 1em 0;
  margin-bottom: 2em;
  place-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const EmptyMessage = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  padding: 1em 0;
`;

export const ClearButton = styled.button`
  background-color: ${theme.colors.primaryDarkColor};
  border: none;
  padding: .5em 1em;
  border-radius: 4px;
  color: inherit;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`;

export const DetailText = styled.span`
  font-size: ${typeScale.normal};
  color: ${theme.colors.secondaryLightColor};
`;
