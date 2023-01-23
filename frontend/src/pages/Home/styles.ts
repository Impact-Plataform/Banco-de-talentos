import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-position: center;
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
