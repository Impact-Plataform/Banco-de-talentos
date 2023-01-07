import styled from "styled-components";
import { theme, typeScale } from "../../styles";

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5em;
`;

export const CarouselContainer = styled.div`
  max-width: 60vw;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
`;

export const CarouselBox = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselItem = styled.div`
  padding: 10px;
  display: flex;
`;

export const ButtonCarousel = styled.button`
  border: none;
  cursor: pointer;
  color: ${theme.colors.lightColor};
  background-color: transparent;
  font-size: ${typeScale.header3};
`;
