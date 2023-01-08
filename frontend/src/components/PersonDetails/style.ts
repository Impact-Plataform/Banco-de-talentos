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
