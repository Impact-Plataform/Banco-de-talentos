import styled from "styled-components";

export const Section = styled.section`
  width: 350px;
  height: 350px;
  padding: 10px;
  margin: 15px;
  text-align: center;
  border: 2px solid purple;
  border-radius: 7px;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: inset 0 0 0.5em rgb(218, 34, 235);
  }
`;

export const Name = styled.h2`
  align-self: center;
  margin-bottom: 30px;
`;

export const Details = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
`;

export const DetailItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 4px;
`;
