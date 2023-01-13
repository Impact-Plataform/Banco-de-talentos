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
    margin-top: 40px;

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

  .containerFilms {
    h2 {
      color: #F0A500;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    }
  }

  .containerFilmsImgs {
    margin-bottom: 50px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .containerImgs {
    margin-top: 15px;
    background-color: #e5e5e5;
    width: 300px;
    height: 450px;

    -webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,1);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,1);
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,1);
  }
  .containerImgs:hover {
    box-shadow: none;
    transition: 0.4s;
  }

  .containerImgs h2 {
    color: #F0A500;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  @media(max-width: 700px) {
    .img-description {
      display: block;
    }
  }
`;


export const ContainerImg = styled.div`
  @media(max-width: 700px) {
    display: flex;
    justify-content: center;
  }

  @media(max-width: 400px) {
    justify-content: flex-start;
    margin-left: -10px;
  }

  @media(max-width: 361px) {
    margin-left: -20px;
  }
`;


export const DescriptionContainer = styled.div`
  background-color: #9A999833;
  margin-left: 50px;
  border-radius: 10px;
  width: 80%;

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


  @media(max-width: 700px) {
    margin-left: 0px;
    width: 90%;
  }

  @media(max-width: 400px) {
    div section {
      margin-top: 0px;
      margin-left: 0px;
    }
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
