import React, { useState, useEffect } from "react";
import { Content, DetailItemContainer, Item } from "./../style";
import apiService from "../../../services/api.service";
const Starships = (props: { personStarships: any }) => {
  const { personStarships } = props;

  const [starships, setStarships]: any = useState([]);

  useEffect(() => {
    const array: any = [];
    const setArray = async () => {
      for (let starshipUrl of personStarships) {
        const starship = await apiService.getOne(starshipUrl);
        array.push(starship);
      }
    };
    setArray().then(() => {
      setStarships(array);
    });
  }, [personStarships]);

  return starships.length > 0 ? (
    <DetailItemContainer>
      <Content>
        <h2>Naves</h2>
        <Content>
          {starships.map((item: any) => {
            return <Item>{item.name}</Item>;
          })}
        </Content>
      </Content>
    </DetailItemContainer>
  ) : (
    <></>
  );
};

export default Starships;
