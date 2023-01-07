import React from "react";
import Person from "../../../../model/person.model";
import { Div, List, ListItem } from "./../style";
const species = require("../../../../apiSpecies.json");

const Specie = (props: {
  persons: Person[];
  updatePersons: Function;
  active: string;
  updateFilterActive: Function;
}) => {
  const { persons, updatePersons, active, updateFilterActive } = props;

  const filterPersons = (filterItem: string) => {
    let filteredPersons: Person[] = persons.filter((person: Person) => {
      for (let specie of person.species) {
        if (specie === filterItem) {
          return true;
        }
      }
      return false;
    });
    updatePersons(filteredPersons);
  };

  return (
    <Div>
      <h2>Espécies</h2>
      <List>
        {species.map((specie: any) => {
          return (
            <ListItem
              className={active === specie.name ? "selected" : ""}
              onClick={(e) => {
                filterPersons(specie.url);
                updateFilterActive(specie.name);
              }}
            >
              {specie.name}
            </ListItem>
          );
        })}
      </List>
    </Div>
  );
};

export default Specie;
