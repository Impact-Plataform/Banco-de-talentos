import styled from "styled-components";
import { MdSearch } from "react-icons/md";
export const Input = styled.input`
  border-radius: 9px;
  width: 100%;
  height: 40px;
  margin: 0px;
  padding: 10px;
  outline: none;
  font-size: 1.1rem;
  &:focus {
    border-bottom: 4px solid purple;
  }
  @media screen and (max-width: 728px) {
    width: 75%;
  }
`;

export const Div = styled.div`
  position: relative;
  width: 600px;
  margin: 10px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 728px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  border: none;
  top: 0px;
  right: 0px;
  color: black;
  width: 60px;
  height: 40px;
  border-radius: 9px;
  background-color: transparent;
  border: 3px solid #fff;
  transition: background 0.3s;
  cursor: pointer;

  @media (max-width: 728px) {
    right: 12%;
  }
`;

export const SearchIcon = styled(MdSearch)`
  margin-top: 0px;
`;
