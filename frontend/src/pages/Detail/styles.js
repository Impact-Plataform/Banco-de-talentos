import styled from "styled-components";
import { theme, typeScale } from "../../styles";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
`;

export const HeadingDetail = styled.h1`
  font-size: ${typeScale.header1};
  color: ${theme.colors.secondaryDarkColor};
  -webkit-text-stroke: 2px ${theme.colors.yellowColor};
`;

export const HeaderInfoWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
`;

export const UniqueCharacter = styled.main`
  background-color: transparent;
  padding: .5em 1em;
  border-radius: 10px;
  border: 1px solid ${theme.colors.lightColor};
`;

export const FilmDate = styled.span`
  font-size: ${typeScale.small};
  background-color: ${theme.colors.secondaryLightColor};
  padding: 0 .5em;
  border-radius: 50px;
`;

export const UniqueCharacterText = styled.p`
  font-size: ${typeScale.small};
`;

export const DetailCharacters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 18em));
  gap: 1.5rem;
  padding: 1.5em;
  place-content: center;
`;
