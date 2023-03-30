import styled from "styled-components";

import { RiLoader5Fill } from "react-icons/ri";

export const LoadingContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  text-align: center;
`;

export const LoadingSpinner = styled(RiLoader5Fill)`
  border-radius: 100%;
  animation-name: spinner;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 1s;
  color: #fff;
  font-size: 15rem;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
