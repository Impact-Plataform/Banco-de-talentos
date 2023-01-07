import React from "react";
import { Section } from "./style";
import Film from "./Film";
import Person from "../../../model/person.model";
import Specie from "./Specie";
import Gender from "./Gender";

const Filters = (props: {
  persons: Person[];
  updatePersons: Function;
  filterActive: string;
  updateFilterActive: Function;
}) => {
  const { persons, updatePersons, filterActive, updateFilterActive } = props;

  return (
    <Section>
      <h1>Filtros</h1>
      <Gender
        persons={persons}
        updatePersons={updatePersons}
        active={filterActive}
        updateFilterActive={updateFilterActive}
      ></Gender>
      <Film
        persons={persons}
        updatePersons={updatePersons}
        active={filterActive}
        updateFilterActive={updateFilterActive}
      ></Film>
      <Specie
        persons={persons}
        updatePersons={updatePersons}
        active={filterActive}
        updateFilterActive={updateFilterActive}
      ></Specie>
    </Section>
  );
};

export default Filters;
