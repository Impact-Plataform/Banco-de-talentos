import styled from "styled-components";
import { theme, typeScale } from "../../styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const SeeMoreLink = styled(Link)`
  font-family: inherit;
  font-weight: 700;
  font-size: ${typeScale.small};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transform: translate(-50%, 125%);
  width: 40%;
  border-radius: 1rem;
  border: none;
  background-color: ${theme.colors.yellowColor};
  color: ${theme.colors.primaryDarkColor};
  padding: .5em;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
`;

export const CharactersInfo = styled.div`
  display: flex;
  gap: 1em;
  text-align: center;
  place-content: center;
  margin-top: ${(props) => (props.open ? ".5em" : "")} ;
  opacity: ${(props) => (props.open ? 1 : 0)};
  margin-bottom: ${(props) => (props.open ? "1em" : "")};
  transition: all .5s ease-in-out;
`;

export const CardImage = styled.img`
  width: 150px;
  height: 150px;
  display: flex;
  margin: 10px auto;
  border: 2px solid ${theme.colors.secondaryLightColor};
  border-radius: 50%;
  object-fit: cover;
  transition:  0.5s ease-out;
`;

export const CardBox = styled(motion.div)`
  display: grid;
  min-height: 24em;
  padding: 1em 1.5em;
  background-color: ${theme.colors.primaryDarkColor};
  border: 2px solid ${theme.colors.secondaryLightColor};
  border-radius: .7rem;
  cursor: pointer;
  position: relative;
  transition:  0.5s ease-out;
  overflow: visible;

  &:hover, &:hover ${CardImage} {
    border-color: ${theme.colors.yellowColor};
    -webkit-box-shadow: 0px 0px 20px 1px #ffbb763f;
    box-shadow: 0px 0px 20px 1px #ffbb763f;

    ${SeeMoreLink} {
      transform: translate(-50%, 50%);
      opacity: 1;
    }
  }

  &:focus-within, &:focus-within ${CardImage} {
    border-color: ${theme.colors.yellowColor};
    -webkit-box-shadow: 0px 0px 20px 1px #ffbb763f;
    box-shadow: 0px 0px 20px 1px #ffbb763f;
    ${SeeMoreLink} {
      transform: translate(-50%, 50%);
      opacity: 1;
    }
    ${CharactersInfo} {
      opacity: 1;
      margin-bottom: 1em;
    }
  }
`;

export const FilmsWrapper = styled.div`
  place-self: end start;
`;

export const ListFilms = styled.ul`
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  gap: .3em;
  list-style: none;
  margin: .5em 0;
`;

export const Films = styled.li`
  background-color: ${(props) => props.cor};
  border-radius: 50px;
  padding: .2em .7em;
  font-size: ${typeScale.small};
  color: ${theme.colors.whiteColor};
`;
