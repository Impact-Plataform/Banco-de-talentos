import styled from "styled-components";
import { colors } from "../../components/styles";
import MyGif from "./pastaGif/swgif.gif"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${MyGif});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 98%;
  background-color: ${colors.logo.background};
  height: 100vh;
  width: 100vw;
`;

export const SearchStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 15px;
  margin-bottom: 40px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin-top: 40px;
`;

export const WrapperCharacterCardList = styled.div`
  width: 80%;
`;


