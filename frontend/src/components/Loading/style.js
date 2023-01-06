import styled from "styled-components";
import { theme } from "../../styles";

export const LoaderWrapper = styled.div`
  display: grid;
  min-height: 90vh;
  place-content: center;
  place-items: center;
`;

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${theme.colors.yellowColor};
  border-top-color: transparent;
  animation: rot1 1.2s linear infinite;

@keyframes rot1 {
  to {
    transform: rotate(360deg);
  }
}
`;
