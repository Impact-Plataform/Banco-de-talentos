import React from "react";
import { Content, DetailItemContainer, Item } from "./../style";
const starships = require("../../../apiStarships.json");
const Starships = (props: { personStarships: any }) => {
  const { personStarships } = props;
  const persStarships = starships.filter((item: any) => {
    for (let starship of personStarships) {
      if (starship === item.url) return true;
    }
    return false;
  });
  return persStarships.length > 0 ? (
    <DetailItemContainer>
      <Content>
        <h2>Naves</h2>
        <Content>
          {persStarships.map((item: any) => {
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
