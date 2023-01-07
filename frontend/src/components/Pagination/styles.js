import styled from "styled-components";
import { Link } from "react-router-dom";

export const PaginationList = styled.ul`
  display: flex;
  gap: .2em;
  place-content: center;
  margin: 2em 0;
  align-items: center;
  list-style: none;
`;

export const PaginationLink = styled(Link)`
  color: ${(props) => props.cor};
  padding: .2em .5em;
  text-decoration: none;
  pointer-events: ${(props) => props.pointerevent}
`;
