import React from "react";
import { Content, DetailItemContainer, Item } from "./../style";
const species = require("../../../apiSpecies.json");
const Specie = (props: { personSpecie: any }) => {
  const { personSpecie } = props;
  const persSpecies = species.filter((item: any) => {
    for (let specie of personSpecie) {
      if (specie === item.url) return true;
    }
    return false;
  });
  return (
    <DetailItemContainer>
      <Content>
        <h2>Espécie</h2>
        <Content>
          {persSpecies.map((item: any) => {
            return <Item>{item.name}</Item>;
          })}
        </Content>
      </Content>
    </DetailItemContainer>
  );
};

export default Specie;
