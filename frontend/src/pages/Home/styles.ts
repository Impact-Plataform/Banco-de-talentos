import styled from "styled-components";

import img from "./img/skystars.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
