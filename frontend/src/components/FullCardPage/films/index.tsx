import React, { useState, useEffect } from "react";
import { Content, DetailItemContainer, Item } from "./../style";
import apiService from "../../../services/api.service";

const Films = (props: { personFilms: any }) => {
  const { personFilms } = props;

  const [films, setFilms]: any = useState([]);

  useEffect(() => {
    const array: any = [];
    const setArray = async () => {
      for (let filmUrl of personFilms) {
        const film = await apiService.getOne(filmUrl);
        array.push(film);
      }
    };
    setArray().then(() => {
      setFilms(array);
    });
  }, [personFilms]);

  return films.length > 0 ? (
    <DetailItemContainer>
      <Content>
        <h2>Filmes</h2>
        <Content>
          {films.map((item: any) => {
            return <Item>{item.title}</Item>;
          })}
        </Content>
      </Content>
    </DetailItemContainer>
  ) : (
    <></>
  );
};

export default Films;
