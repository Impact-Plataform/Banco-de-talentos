import React, { useEffect, useState } from "react";
import { Section, Cards, Container } from "./style";
import Card from "./Card";
import Person from "../../model/person.model";
import SearchBar from "./SearchBar";
import Filters from "./Filters";
import apiService from "../../services/api.service";
// const data: Person[] = require("../../api.json");

const MainPage = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [data, setData] = useState<Person[]>([]);
  useEffect(() => {
    const date = apiService.getAllPersons().then((data) => {
      const dataApi: Person[] = data.map((item: Person) => {
        const url: string = item.url;
        const [, pId] = url.split("https://swapi.py4e.com/api/people/");
        const [id] = pId.split("/");
        item.id = id;
        return item;
      });
      setPersons(dataApi);
      setData(dataApi);
    });
  }, []);

  const [filterActive, setFilterActive] = useState("");

  const updatePersons = (persons: Person[]) => {
    setPersons(persons);
  };
  const updateFilterActive = (item: string) => {
    setFilterActive(item);
  };

  return (
    <>
      {data.length > 0 ? (
        <Section>
          <h1>Seja bem vindo</h1>
          <SearchBar
            updatePersons={updatePersons}
            persons={data}
            filterActive={filterActive}
            updateFilterActive={updateFilterActive}
          />
          <Container>
            <Filters
              updatePersons={updatePersons}
              persons={data}
              filterActive={filterActive}
              updateFilterActive={updateFilterActive}
            ></Filters>
            <Cards>
              {persons.map((person: Person) => {
                return <Card person={person} key={person.id} />;
              })}
            </Cards>
          </Container>
        </Section>
      ) : (
        <h1>Carregando</h1>
      )}
    </>
  );
};

export default MainPage;
