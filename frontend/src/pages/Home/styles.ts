import styled from "styled-components";
import { colors } from "../../components/styles";
import MyGif from "./pastaGif/swgif.gif";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${MyGif});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: ${colors.logo.background};
  height: 100vh;
  width: 100vw;

  @media (max-width: 760px) {
    background-size: 120%;
  }

  @media (max-width: 500px) {
    background-size: 130%;
  }

  @media (max-width: 480px) {
    background-size: 150%;
  }

  @media (max-width: 360px) {
    background-size: 200%;
  }

  @media (max-width: 280px) {
    background-size: 250%;
  }
`;

export const SearchStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 15px;
  margin-bottom: 40px;

  @media (max-width: 760px) {
    width: 250px;
  }

  @media (max-width: 550px) {
    width: 220px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }

  @media (max-width: 360px) {
    width: 150px;
  }

  @media (max-width: 280px) {
    width: 100px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin-top: 40px;

  @media (max-width: 760px) {
    width: 125px;
    margin-top: 35px;
  }

  @media (max-width: 550px) {
    width: 105px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    width: 100px;
    margin-top: 25px;
  }

  @media (max-width: 360px) {
    width: 75px;
    margin-top: 20px;
  }

  @media (max-width: 280px) {
    width: 50px;
    margin-top: 18px;
  }
`;

export const WrapperCharacterCardList = styled.div`
  width: 770px;

  @media (max-width: 800px) {
    width: 525px;
  }

  @media (max-width: 550px) {
    width: 260px;
  }
`;
