import React from "react";
import { Content, DetailItemContainer, Item } from "./../style";
const films = require("../../../apiFilms.json");
const Films = (props: { personFilms: any }) => {
  const { personFilms } = props;
  const persFilmes = films.filter((item: any) => {
    for (let film of personFilms) {
      if (film === item.url) return true;
    }
    return false;
  });
  return (
    <DetailItemContainer>
      <Content>
        <h2>Filmes</h2>
        <Content>
          {persFilmes.map((item: any) => {
            return <Item>{item.title}</Item>;
          })}
        </Content>
      </Content>
    </DetailItemContainer>
  );
};

export default Films;
