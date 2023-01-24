'use client'
import styled from 'styled-components';


export const FilterContainer = styled.div`
   @media(max-width: 580px) {
    height: 130px;

    .div-badge {
      display: block !important;
    }
   }

  margin-left: 10px;
  margin-top: 10px;
  background: rgb(27, 26, 23);
  height: 80px;

  .div-badge {
    display: flex;
  }

  .div-badge div {
    align-items: center;
    margin-top: 5px;
    margin-left: 5px;
  }

  svg {
    cursor: pointer;
    width: 20px;
  }

  h1 {
    display: flex;
    align-items: center;
    margin-left: 5px;
    color: white;
    font-size: 20px;
  }

  h1 img {
    width: 15px;
    height: 15px;
  }

  span {
    margin-left: 5px;
  }
`;
