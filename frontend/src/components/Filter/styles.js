import styled from "styled-components";
import { theme } from "../../styles";

export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  height: 2em;
  line-height: 1.7;
  overflow: hidden;
  border-radius: 8px;
  width: 190px;

  &:after {
    content: "⌵";
    position: absolute;
    color: ${theme.colors.lightColor};
    font-size: 1rem;
    top: 0;
    right: 0;
    padding: 0 .8em;
    background: transparent;
    cursor: pointer;
    pointer-events:none;
  }
`;

export const SelectInput = styled.select`
  -webkit-appearance:none;
  -moz-appearance:none;
  -ms-appearance:none;
  appearance:none;
  outline: 0;
  box-shadow: none;
  border: 1px solid;
  border-color: ${(props) => props.cor};
  background: transparent;
  background-image: none;
  flex: 1;
  padding: .5em;
  color: ${theme.colors.lightColor};
  cursor: pointer;
  font-size: .850rem;
  border-radius: 8px;

  &:focus-within {
    border: 2px solid ${(props) => props.cor};
  }
`;

export const Option = styled.option`
  background-color: ${theme.colors.secondaryDarkColor};
  border: 1px solid;
  border-color: ${(props) => props.cor};
  color: ${theme.colors.lightColor};
  padding: 5em;
  font-size: .850rem;
  position: absolute;

  &:nth-child(1) {
    background-color: ${theme.colors.primaryLightColor};
    color: ${theme.colors.primaryDarkColor};
    font-weight: 700;
  }

  &:checked {
    color: #303236;
    background-color: ${(props) => props.checkedColor};
    position: relative;
    font-weight: 700;
  }
`;
