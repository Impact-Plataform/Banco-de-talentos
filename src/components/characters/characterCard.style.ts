'use client'
import styled from 'styled-components';


export const CharacterCardContainer = styled.div`
  width: 200px;
  background-color: white;
  margin-top: 30px;


  -webkit-box-shadow: 5px 5px 9px 0px rgba(240,165,0,1);
  -moz-box-shadow: 5px 5px 9px 0px rgba(240,165,0,1);
  box-shadow: 5px 5px 9px 0px rgba(240,165,0,1);

  &&:hover {
    box-shadow: none;
    transition: 0.4s;
    background-color: #e5e5e5;
    border: solid 1px #ff0000;
  }


  h2 {
    text-align: center;
    font-weight: bold;
  }

  p {
    margin-left: 10px;
    margin-top: 5px;
    font-size: 15px;
  }

  span {
    font-weight: 600;
  }
`;
