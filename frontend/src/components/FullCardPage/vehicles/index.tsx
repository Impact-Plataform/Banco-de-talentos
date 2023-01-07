import React from "react";
import { Content, DetailItemContainer, Item } from "./../style";
const vehicles = require("../../../apiVehicles.json");
const Vehicles = (props: { personVehicles: any }) => {
  const { personVehicles } = props;
  const persVehicles = vehicles.filter((item: any) => {
    for (let vehicle of personVehicles) {
      if (vehicle === item.url) return true;
    }
    return false;
  });
  return persVehicles.length > 0 ? (
    <DetailItemContainer>
      <Content>
        <h2>Veículos</h2>
        <Content>
          {persVehicles.map((item: any) => {
            return <Item>{item.name}</Item>;
          })}
        </Content>
      </Content>
    </DetailItemContainer>
  ) : (
    <></>
  );
};

export default Vehicles;
