import styled from "styled-components";

import { BiArrowBack } from "react-icons/bi";

export const CharacterContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

export const CharacterCard = styled.div`
  background-color: #ffd700;
  border-radius: 1rem;
  border: 1px solid #000;
  padding: 2.5rem;
`;

export const Name = styled.h1`
  font-size: 4rem;
  margin-bottom: 5rem;
`;

export const Info = styled.p`
  font-size: 1.6rem;
  margin-top: 1rem;

  span {
    font-weight: bold;
  }
`;

export const Film = styled.h1`
  font-size: 3.5rem;
  margin-top: 5rem;
`;

export const FilmTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`;

export const FilmeDesc = styled.p`
  font-size: 1.6rem;
`;

export const BackIcon = styled(BiArrowBack)`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 2rem;
  transition: all 1s ease;
  border-radius: 5rem;
  cursor: pointer;

  :hover {
    background-color: #aaa;
  }
`;

export const Planet = styled.h1`
  font-size: 3.5rem;
  margin-top: 5rem;
`;

export const PlanetName = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`;

export const PlanetPopulation = styled.p`
  font-size: 1.6rem;
  margin-top: 1.5rem;
`;
