import styled from "styled-components";

export const CharactersContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

export const CharacterList = styled.div`
  display: grid;
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Character = styled.div`
  display: flex;
  height: 20rem;
  background-color: #ffd700;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.2s ease-in;
  padding: 1.6rem 2.4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;

  :hover {
    transform: scale(1.1);
  }
`;

export const CharacterName = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 5rem;
`;

export const CharacterInfo = styled.p`
  font-size: 1.6rem;
`;
