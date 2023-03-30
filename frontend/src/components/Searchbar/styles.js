import styled from "styled-components";

import { AiOutlineSearch } from "react-icons/ai";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InputSearch = styled.input`
  padding-left: 4rem;
  width: 70vw;
  height: 3.5rem;
  outline: none;
  background-color: #aaa;
  border: none;
  border-radius: 1rem;
  color: #fff;

  :focus {
    border: 1px solid #eee;
  }

  ::placeholder {
    color: #fff;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 2rem;
  position: absolute;
  color: #fff;
  left: 1rem;
`;

export const Button = styled.button`
  background-color: #ffd700;
  border: none;
  border-radius: 1rem;
  width: 10vw;
  margin-left: 2rem;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    background-color: #e6b800;
  }
`;
