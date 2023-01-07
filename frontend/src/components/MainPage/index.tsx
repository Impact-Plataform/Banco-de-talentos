import React, { useState } from "react";
import { Section, Cards } from "./style";
import Card from "./Card";
import Person from "../../model/person.model";
import SearchBar from "./SearchBar";

const data: Person[] = require("../../api.json");
const MainPage = () => {
  const dataApi = data.map((item: Person) => {
    const url: string = item.url;
    const [, pId] = url.split("https://swapi.py4e.com/api/people/");
    const [id] = pId.split("/");
    item.id = id;
    return item;
  });

  const [persons, setPersons] = useState(dataApi);

  const updatePersons = (persons: Person[]) => {
    setPersons(persons);
  };

  return (
    <>
      <Section>
        <h1>Seja bem vindo</h1>
        <SearchBar updatePersons={updatePersons} persons={dataApi} />
        <Cards>
          {persons.map((person: Person) => {
            return <Card person={person} key={person.id} />;
          })}
        </Cards>
      </Section>
    </>
  );
};

export default MainPage;
