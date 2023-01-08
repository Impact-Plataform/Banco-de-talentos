import styled from "styled-components";

export const Section = styled.section`
  width: 500px;
  height: 90%;
  padding: 10px;
  margin: 15px;
  text-align: center;
  border: 2px solid purple;
  border-radius: 7px;
  color: white;
  font-size: 1.4rem;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgba(218, 34, 235, 0.1);
  box-shadow: inset 0 0 1em rgba(218, 34, 235);
  @media (max-width: 728px) {
    font-size: 1.2rem;
    width: 100%;
  }
`;

export const DetailItemContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 4px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.span`
  margin: 5px;
`;

export const Main = styled.section`
  display: flex;
  height: 100%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const Button = styled.button`
  display: center;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: transparent;
  width: 80px;
  border-radius: 30px;
  height: 64px;
  border: 3px solid #fff;
  transition: background 0.3s;
  margin: 10px 10px;
  cursor: pointer;
  &:hover {
    background: purple;
  }
  @media (max-width: 728px) {
    height: 42px;
    &:hover {
      background: none;
    }
  }
`;
export const DivNotExist = styled.div`
  border-radius: 30px;
  height: 64px;
  margin: 5px;
  width: 80px;
  @media (max-width: 768px) {
    display: none;
  }
`;
