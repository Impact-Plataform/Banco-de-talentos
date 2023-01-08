import React, { useState, useEffect } from "react";
import { Content, DetailItemContainer, Item } from "./../style";
import apiService from "../../../services/api.service";
const Specie = (props: { personSpecie: any }) => {
  const { personSpecie } = props;

  const [specie, setSpecie]: any = useState(null);

  useEffect(() => {
    apiService.getOne(personSpecie).then((speccie) => {
      setSpecie(speccie);
    });
  }, [personSpecie]);

  return specie ? (
    <DetailItemContainer>
      <Content>
        <h2>Espécie</h2>
        <Content>
          <Item>{specie.name}</Item>
        </Content>
      </Content>
    </DetailItemContainer>
  ) : (
    <></>
  );
};

export default Specie;
