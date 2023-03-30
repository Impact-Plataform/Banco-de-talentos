import styled from "styled-components";

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 3rem;
  width: 4.5rem;
  height: 4.5rem;

  :hover {
    transition: all 0.5s ease;
    rotate: 360deg;
    scale: 1.1;
  }

  :nth-child(2),
  :nth-child(3) {
    margin-left: 0.8rem;
  }

  @media (max-width: 520px) {
    padding: 0.8rem;
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const Image = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  @media (max-width: 520px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
