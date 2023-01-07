import React, { useState } from "react";
import { Section, Cards, Container } from "./style";
import Card from "./Card";
import Person from "../../model/person.model";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const data: Person[] = require("../../api.json");
const MainPage = () => {
  const dataApi = data.map((item: Person) => {
    const url: string = item.url;
    const [, pId] = url.split("https://swapi.py4e.com/api/people/");
    const [id] = pId.split("/");
    item.id = id;
    return item;
  });
  const [filterActive, setFilterActive] = useState("");
  const [persons, setPersons] = useState(dataApi);

  const updatePersons = (persons: Person[]) => {
    setPersons(persons);
  };
  const updateFilterActive = (item: string) => {
    setFilterActive(item);
  };

  return (
    <>
      <Section>
        <h1>Seja bem vindo</h1>
        <SearchBar
          updatePersons={updatePersons}
          persons={dataApi}
          filterActive={filterActive}
          updateFilterActive={updateFilterActive}
        />
        <Container>
          <Filters
            updatePersons={updatePersons}
            persons={dataApi}
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
    </>
  );
};

export default MainPage;
