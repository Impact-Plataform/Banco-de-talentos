import React from "react";
import { Content, DetailItemContainer, Item } from "./../style";
const homweworlds = require("../../../apiPlanets.json");

const Homeworld = (props: { persHomeworld: any }) => {
  const { persHomeworld } = props;
  const homeworld = homweworlds.filter((item: any) => {
    return item.url === persHomeworld;
  });
  return (
    <DetailItemContainer>
      <Content>
        <h2>Planeta Natal</h2>
        <Content>
          {homeworld.map((item: any) => {
            return <Item>{item.name}</Item>;
          })}
        </Content>
      </Content>
    </DetailItemContainer>
  );
};

export default Homeworld;
