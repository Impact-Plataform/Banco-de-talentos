'use client'
import styled from 'styled-components';


export const DetailsCharacterContainer = styled.div`

  .img-description {
    color: white;
    margin-top: 50px;
    margin-left: 50px;
    display: flex;
  }

  .starships-vehicles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 280px;

    h2 {
      color: #F0A500;
      font-size: 20px;
      font-weight: bold;
    }

    ul {
      margin-top: 25px;
      width: 250px;
    }

    ul span {
      margin-top: 10px;
      display: flex;
      align-items: center;
      color: white;
      margin-left: 10px;
    }

    li {
      margin-left: 10px;
      list-style: none;
      color: white;
    }
  }
`;


export const ContainerImg = styled.div`
`;


export const DescriptionContainer = styled.div`
  background-color: #9A999833;
  margin-left: 50px;
  border-radius: 10px;
  width: 60%;

  div {
    margin-top: 50px;
    margin-left: 50px;
  }

  div h1 {
    color: #F0A500;
    font-size: 30px;
    font-weight: bold;
  }

  div section {
    margin-top: 10px;
    margin-left: 20px;
  }

  div section p {
    margin-top: 5px;
  }

  span {
    color: #F0A500;
    font-weight: bold;
  }
`;


export const Loading = styled.div`
  color: #F0A500;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    font-weight: bold;
    font-size: 30px;
  }
`;
