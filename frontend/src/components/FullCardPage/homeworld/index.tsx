import React, { useState, useEffect } from "react";
import { Content, DetailItemContainer, Item } from "./../style";
import apiService from "../../../services/api.service";

const Homeworld = (props: { persHomeworld: any }) => {
  const { persHomeworld } = props;

  const [homeworld, setHomeWorld]: any = useState(null);

  useEffect(() => {
    apiService.getOne(persHomeworld).then((planet) => {
      setHomeWorld(planet);
    });
  }, [persHomeworld]);

  return homeworld ? (
    <DetailItemContainer>
      <Content>
        <h2>Planeta Natal</h2>
        <Content>
          <Item>{homeworld.name}</Item>
        </Content>
      </Content>
    </DetailItemContainer>
  ) : (
    <></>
  );
};

export default Homeworld;
