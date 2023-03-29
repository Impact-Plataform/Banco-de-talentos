import styled from "styled-components";

import { IoIosHeart } from "react-icons/io";

export const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 8rem;
  background-color: #000;
  border-top: 1px solid #fff;
  margin-top: 3rem;

  @media (max-width: 425px) {
    flex-direction: column;
    padding-top: 5rem;
    padding-bottom: 5rem;
    height: 25vh;
    justify-content: space-between;
  }
`;

export const FooterText = styled.p`
  font-size: 1.6rem;
  color: #fff;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    transition: all 0.5s ease;

    :hover {
      color: #ccc;
    }
  }
`;

export const Heart = styled(IoIosHeart)`
  color: #ff0000;
`;
