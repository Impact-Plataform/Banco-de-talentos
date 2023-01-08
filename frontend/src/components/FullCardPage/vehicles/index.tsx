import React, { useState, useEffect } from "react";
import { Content, DetailItemContainer, Item } from "./../style";
import apiService from "../../../services/api.service";

const Vehicles = (props: { personVehicles: any }) => {
  const { personVehicles } = props;

  const [vehicles, setVehicles]: any = useState([]);

  useEffect(() => {
    const array: any = [];
    const setArray = async () => {
      for (let vehicleUrl of personVehicles) {
        const vehicle = await apiService.getOne(vehicleUrl);
        array.push(vehicle);
      }
    };
    setArray().then(() => {
      setVehicles(array);
    });
  }, [personVehicles]);

  return vehicles.length > 0 ? (
    <DetailItemContainer>
      <Content>
        <h2>Veículos</h2>
        <Content>
          {vehicles.map((item: any) => {
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
