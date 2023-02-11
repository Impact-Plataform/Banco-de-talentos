import styled from "styled-components";

export const Container = styled.div`
  > div {
    margin-left: 25px;
    margin-bottom: 10px;
  }

  @media (max-width: 767px) {
    > div {
      margin-left: 20px;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 550px) {
    > div {
      margin-left: 15px;
      margin-bottom: 6px;
    }
  }

  @media (max-width: 360px) {
    > div {
      margin-left: 5px;
      margin-bottom: 4px;
    }
  }
`;
