import React from "react";
import { Section, Cards } from "./style";
import Card from "./Card";
import Person from "../../model/person.model";

const data: Person[] = require("../../api.json");
const MainPage = () => {
  const persons = data.map((item: Person) => {
    const url: string = item.url;
    const [, pId] = url.split("https://swapi.py4e.com/api/people/");
    const [id] = pId.split("/");
    item.id = id;
    return item;
  });

  return (
    <>
      <Section>
        <h1>Seja bem vindo</h1>
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
