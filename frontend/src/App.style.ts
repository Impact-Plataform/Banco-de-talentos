import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export const Liink = styled(Link)`
  color: #fff;
  margin: 5px;
  font-size: 1.5rem;
  text-decoration: none;
`;
