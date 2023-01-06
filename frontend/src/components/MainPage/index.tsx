import React from "react";
import { Section, Cards } from "./style";
import Card from "./Card";
import Person from "../../model/person.model";
const data = require("../../api.json");

const MainPage = () => {
  return (
    <>
      <Section>
        <h1>Seja bem vindo</h1>
        <Cards>
          {data.map((item: Person) => {
            return <Card person={item} />;
          })}
        </Cards>
      </Section>
    </>
  );
};

export default MainPage;
