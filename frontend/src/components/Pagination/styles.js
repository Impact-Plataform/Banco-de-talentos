import styled from "styled-components";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
  margin-top: 3rem;
`;

export const LeftButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const PreviousIcon = styled(AiOutlineLeft)`
  font-size: 1.6rem;
  color: #fff;
  transition: all 0.5s ease;
  border-radius: 1rem;
  width: 5rem;
  margin-right: 1rem;

  :hover {
    background-color: #aaa;
  }
`;

export const RightButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const NextIcon = styled(AiOutlineRight)`
  font-size: 1.6rem;
  color: #fff;
  transition: all 0.5s ease;
  border-radius: 1rem;
  width: 5rem;
  margin-left: 1rem;

  :hover {
    background-color: #aaa;
  }
`;

export const Text = styled.div`
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
`;
