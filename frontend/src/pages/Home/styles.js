import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(auto, 18.75em));
  gap: 3rem;
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
  place-items: center;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const EmptyMessage = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  padding: 1em 0;
`;
