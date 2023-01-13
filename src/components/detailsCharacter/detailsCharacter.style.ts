'use client'
import styled from 'styled-components';


export const DetailsCharacterContainer = styled.div`

  .img-description {
    color: white;
    margin-top: 50px;
    margin-left: 50px;
    display: flex;
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
