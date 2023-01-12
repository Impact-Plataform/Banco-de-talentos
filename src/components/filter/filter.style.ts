'use client'
import styled from 'styled-components';


export const FilterContainer = styled.div`
   @media(max-width: 580px) {
    height: 130px;

    .div-badge {
      display: block !important;
    }
   }

  margin-top: 10px;
  background: rgb(27, 26, 23);
  height: 80px;

  .div-badge {
    display: flex;
  }

  .div-badge div {
    margin-left: 5px;
  }

  svg {
    cursor: pointer;
    width: 20px;
  }

  h1 {
    margin-left: 5px;
    color: white;
    font-size: 20px;
  }
`;
